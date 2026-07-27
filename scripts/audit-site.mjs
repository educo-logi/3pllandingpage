import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const baseUrl = "https://lds1202.github.io/landingpage_001";
const htmlFiles = fs
  .readdirSync(root)
  .filter((file) => file.endsWith(".html"))
  .sort();
const errors = [];
const warnings = [];
const pages = new Map();

function match(source, pattern) {
  return source.match(pattern)?.[1]?.trim() || "";
}

function visibleText(source) {
  return source
    .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, " ")
    .replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;|&#160;/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

for (const file of htmlFiles) {
  const source = fs.readFileSync(path.join(root, file), "utf8");
  const title = match(source, /<title>([\s\S]*?)<\/title>/i);
  const description = match(source, /<meta\s+name="description"\s+content="([^"]*)"/i);
  const robots = match(source, /<meta\s+name="robots"\s+content="([^"]*)"/i);
  const canonical = match(source, /<link\s+rel="canonical"\s+href="([^"]*)"/i);
  const indexable = !robots.toLowerCase().includes("noindex");
  const ids = new Set([...source.matchAll(/\sid="([^"]+)"/gi)].map((item) => item[1]));
  const hrefs = [...source.matchAll(/<a\b[^>]*\shref="([^"]+)"/gi)].map((item) => item[1]);
  const text = visibleText(source);

  pages.set(file, { file, source, title, description, canonical, indexable, ids, hrefs });

  if (!title) errors.push(`${file}: title이 없습니다.`);
  if (!description) errors.push(`${file}: meta description이 없습니다.`);
  if (!canonical) errors.push(`${file}: canonical이 없습니다.`);
  if ((source.match(/<h1\b/gi) || []).length !== 1) {
    errors.push(`${file}: h1은 정확히 1개여야 합니다.`);
  }

  for (const script of source.matchAll(/<script\s+type="application\/ld\+json">([\s\S]*?)<\/script>/gi)) {
    try {
      JSON.parse(script[1]);
    } catch (error) {
      errors.push(`${file}: JSON-LD 구문 오류 (${error.message})`);
    }
  }

  if (/010[\s-]?6256[\s-]?5593/.test(text)) {
    errors.push(`${file}: 전화번호가 화면 텍스트에 노출됩니다.`);
  }
  for (const address of ["경기도 고양시", "일산동구", "지영동"]) {
    if (text.includes(address)) errors.push(`${file}: 제한 주소 표현 "${address}"이 화면에 노출됩니다.`);
  }
}

const indexablePages = [...pages.values()].filter((page) => page.indexable);
for (const field of ["title", "description", "canonical"]) {
  const groups = new Map();
  for (const page of indexablePages) {
    const value = page[field];
    if (!value) continue;
    if (!groups.has(value)) groups.set(value, []);
    groups.get(value).push(page.file);
  }
  for (const [value, files] of groups) {
    if (files.length > 1) errors.push(`${field} 중복: ${files.join(", ")} (${value})`);
  }
}

const incoming = new Map(indexablePages.map((page) => [page.file, 0]));
const formSources = new Set();
for (const page of pages.values()) {
  for (const href of page.hrefs) {
    if (/^(?:https?:|mailto:|tel:|javascript:)/i.test(href)) continue;
    const [withoutHash, hash = ""] = href.split("#");
    const [pathname, query = ""] = withoutHash.split("?");
    const targetFile = pathname === "" ? page.file : pathname === "./" || pathname === "/" ? "index.html" : pathname.replace(/^\.\//, "");

    if (!pages.has(targetFile)) {
      errors.push(`${page.file}: 존재하지 않는 내부 링크 ${href}`);
      continue;
    }
    if (hash && !pages.get(targetFile).ids.has(hash)) {
      errors.push(`${page.file}: 존재하지 않는 앵커 ${href}`);
    }
    if (pages.get(targetFile).indexable && targetFile !== page.file) {
      incoming.set(targetFile, (incoming.get(targetFile) || 0) + 1);
    }
    if (targetFile === "3pl-sinchung.html") {
      const source = new URLSearchParams(query).get("from");
      if (source) formSources.add(source);
    }
  }
}

for (const [file, count] of incoming) {
  if (file !== "index.html" && count === 0) errors.push(`${file}: 다른 색인 페이지에서 연결되지 않습니다.`);
}

const formSource = pages.get("3pl-sinchung.html")?.source || "";
const targetBlock = match(formSource, /var\s+returnTargets\s*=\s*\{([\s\S]*?)\n\s*\};/);
const returnKeys = new Set(
  [...targetBlock.matchAll(/(?:^|,)\s*(?:'([^']+)'|"([^"]+)"|([A-Za-z0-9_-]+))\s*:/g)].map(
    (item) => item[1] || item[2] || item[3],
  ),
);
for (const source of formSources) {
  if (!returnKeys.has(source)) errors.push(`3pl-sinchung.html: from=${source}의 돌아가기 경로가 없습니다.`);
}

for (const page of indexablePages) {
  const expected = page.file === "index.html" ? `${baseUrl}/` : `${baseUrl}/${page.file}`;
  if (page.canonical !== expected) errors.push(`${page.file}: canonical이 예상 주소와 다릅니다.`);
}

if (warnings.length) {
  console.log(`경고 ${warnings.length}건`);
  warnings.forEach((warning) => console.log(`- ${warning}`));
}
if (errors.length) {
  console.error(`사이트 점검 실패: ${errors.length}건`);
  errors.forEach((error) => console.error(`- ${error}`));
  process.exit(1);
}

console.log(`사이트 점검 통과: HTML ${htmlFiles.length}개, 색인 페이지 ${indexablePages.length}개`);
console.log(`제목·설명·canonical 중복 없음, 내부 링크·앵커·JSON-LD·상담 출처 경로 정상`);
