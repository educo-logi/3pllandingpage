import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const baseUrl = "https://3pl.33pl.co.kr";
const clarityProjectId = "xuu83d3wn4";
const errors = [];
const pages = new Map();

const fixedRoutes = new Map([
  ["index.html", "/"],
  ["shoppingmall-logistics.html", "/shoppingmall-logistics/"],
  ["coupang-logistics.html", "/coupang-logistics/"],
  ["inventory-return-logistics.html", "/inventory-return-logistics/"],
  ["small-volume-logistics.html", "/small-volume-logistics/"],
  ["large-cargo-logistics.html", "/large-cargo-logistics/"],
  ["3pl-logistics-quote.html", "/logistics-quote/"],
  ["logistics-guide.html", "/logistics-guide/"],
  ["3pl-sinchung.html", "/consultation/"],
]);

const guideFiles = fs
  .readdirSync(root)
  .filter((file) => /^guide-[a-z0-9-]+\.html$/i.test(file))
  .sort();
for (const file of guideFiles) {
  const slug = file.replace(/^guide-/, "").replace(/\.html$/, "");
  fixedRoutes.set(file, `/logistics-guide/${slug}/`);
}

function outputFile(publicPath) {
  return publicPath === "/"
    ? "index.html"
    : path.join(publicPath.slice(1), "index.html");
}

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

function routeToFile(pathname) {
  if (pathname === "/") return "index.html";
  if (!pathname.endsWith("/")) return null;
  return path.join(pathname.slice(1), "index.html");
}

for (const [legacyFile, publicPath] of fixedRoutes) {
  const file = outputFile(publicPath);
  const fullPath = path.join(root, file);
  if (!fs.existsSync(fullPath)) {
    errors.push(`${publicPath}: clean-path page is missing (${file})`);
    continue;
  }

  const source = fs.readFileSync(fullPath, "utf8");
  const title = match(source, /<title>([\s\S]*?)<\/title>/i);
  const description = match(
    source,
    /<meta\s+name="description"\s+content="([^"]*)"/i,
  );
  const robots = match(source, /<meta\s+name="robots"\s+content="([^"]*)"/i);
  const canonical = match(
    source,
    /<link\s+rel="canonical"\s+href="([^"]*)"/i,
  );
  const expectedCanonical = `${baseUrl}${publicPath}`;
  const indexable = legacyFile !== "3pl-sinchung.html";
  const ids = new Set(
    [...source.matchAll(/\sid="([^"]+)"/gi)].map((item) => item[1]),
  );
  const hrefs = [...source.matchAll(/<a\b[^>]*\shref="([^"]+)"/gi)].map(
    (item) => item[1],
  );
  const warehouseImages = [
    ...source.matchAll(
      /<img\b[^>]*\bsrc="(\/warehouse-[a-z0-9-]+\.webp)"[^>]*>/gi,
    ),
  ].map((item) => item[1]);

  pages.set(publicPath, {
    legacyFile,
    publicPath,
    file,
    source,
    title,
    description,
    robots,
    canonical,
    indexable,
    ids,
    hrefs,
    warehouseImages: [...new Set(warehouseImages)],
  });

  if (!title) errors.push(`${publicPath}: title is missing`);
  if (!description) errors.push(`${publicPath}: meta description is missing`);
  if (canonical !== expectedCanonical) {
    errors.push(`${publicPath}: canonical must be ${expectedCanonical}`);
  }
  if (indexable && robots.toLowerCase().includes("noindex")) {
    errors.push(`${publicPath}: public page is marked noindex`);
  }
  if (!indexable && !robots.toLowerCase().includes("noindex")) {
    errors.push(`${publicPath}: consultation page must be noindex`);
  }
  if ((source.match(/<h1\b/gi) || []).length !== 1) {
    errors.push(`${publicPath}: page must contain exactly one h1`);
  }
  if (!source.includes('src="/analytics.js"')) {
    errors.push(`${publicPath}: analytics script is missing`);
  }
  if (indexable && warehouseImages.length) {
    const expectedImage = `${baseUrl}${warehouseImages[0]}`;
    const ogImage = match(
      source,
      /<meta\s+property="og:image"\s+content="([^"]*)"/i,
    );
    const twitterImage = match(
      source,
      /<meta\s+name="twitter:image"\s+content="([^"]*)"/i,
    );
    if (ogImage !== expectedImage) {
      errors.push(`${publicPath}: og:image must use the first warehouse image`);
    }
    if (twitterImage !== expectedImage) {
      errors.push(
        `${publicPath}: twitter:image must use the first warehouse image`,
      );
    }
  }
  if (
    source.includes("lds1202.github.io/landingpage_001") ||
    source.includes("educo-logi.github.io/3pllandingpage")
  ) {
    errors.push(`${publicPath}: legacy domain remains in output`);
  }

  for (const script of source.matchAll(
    /<script\s+type="application\/ld\+json">([\s\S]*?)<\/script>/gi,
  )) {
    try {
      JSON.parse(script[1]);
    } catch (error) {
      errors.push(`${publicPath}: invalid JSON-LD (${error.message})`);
    }
  }

  const text = visibleText(source);
  if (/010[\s-]?6256[\s-]?5593/.test(text)) {
    errors.push(`${publicPath}: phone number is visible as text`);
  }
  for (const address of ["경기도 고양시", "일산동구", "지영동"]) {
    if (text.includes(address)) {
      errors.push(`${publicPath}: restricted address text is visible (${address})`);
    }
  }
}

const incoming = new Map(
  [...pages.values()]
    .filter((page) => page.indexable)
    .map((page) => [page.publicPath, 0]),
);
const formSources = new Set();

for (const page of pages.values()) {
  for (const href of page.hrefs) {
    if (/^(?:mailto:|tel:|javascript:)/i.test(href)) continue;

    let target;
    try {
      target = new URL(href, `${baseUrl}${page.publicPath}`);
    } catch {
      errors.push(`${page.publicPath}: invalid link ${href}`);
      continue;
    }

    if (target.origin !== baseUrl) continue;
    const targetFile = routeToFile(target.pathname);
    if (!targetFile || !fs.existsSync(path.join(root, targetFile))) {
      errors.push(`${page.publicPath}: missing internal target ${href}`);
      continue;
    }

    const targetPage = pages.get(target.pathname);
    if (target.hash && targetPage && !targetPage.ids.has(target.hash.slice(1))) {
      errors.push(`${page.publicPath}: missing anchor ${href}`);
    }
    if (targetPage?.indexable && target.pathname !== page.publicPath) {
      incoming.set(target.pathname, (incoming.get(target.pathname) || 0) + 1);
    }
    if (target.pathname === "/consultation/") {
      const source = target.searchParams.get("from");
      if (source) formSources.add(source);
    }
  }
}

for (const [publicPath, count] of incoming) {
  if (publicPath !== "/" && count === 0) {
    errors.push(`${publicPath}: no incoming internal link`);
  }
}

const consultation = pages.get("/consultation/")?.source || "";
if (!consultation.includes("trackLogisticsEvent('generate_lead'")) {
  errors.push("/consultation/: generate_lead tracking is missing");
}
const targetBlock = match(
  consultation,
  /var\s+returnTargets\s*=\s*\{([\s\S]*?)\n\s*\};/,
);
const returnKeys = new Set(
  [
    ...targetBlock.matchAll(
      /(?:^|,)\s*(?:'([^']+)'|"([^"]+)"|([A-Za-z0-9_-]+))\s*:/g,
    ),
  ].map((item) => item[1] || item[2] || item[3]),
);
for (const source of formSources) {
  if (!returnKeys.has(source)) {
    errors.push(`/consultation/: missing return target for from=${source}`);
  }
}

for (const field of ["title", "description", "canonical"]) {
  const groups = new Map();
  for (const page of pages.values()) {
    if (!page.indexable || !page[field]) continue;
    if (!groups.has(page[field])) groups.set(page[field], []);
    groups.get(page[field]).push(page.publicPath);
  }
  for (const [value, paths] of groups) {
    if (paths.length > 1) {
      errors.push(`duplicate ${field}: ${paths.join(", ")} (${value})`);
    }
  }
}

for (const [legacyFile, publicPath] of fixedRoutes) {
  if (legacyFile === "index.html") continue;
  const source = fs.readFileSync(path.join(root, legacyFile), "utf8");
  const robots = match(source, /<meta\s+name="robots"\s+content="([^"]*)"/i);
  const canonical = match(
    source,
    /<link\s+rel="canonical"\s+href="([^"]*)"/i,
  );
  if (!robots.toLowerCase().includes("noindex")) {
    errors.push(`${legacyFile}: legacy alias must be noindex`);
  }
  if (canonical !== `${baseUrl}${publicPath}`) {
    errors.push(`${legacyFile}: legacy canonical must point to ${publicPath}`);
  }
}

const sitemap = fs.readFileSync(path.join(root, "sitemap.xml"), "utf8");
const sitemapUrls = [
  ...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g),
].map((item) => item[1]);
const expectedSitemapUrls = [...pages.values()]
  .filter((page) => page.indexable)
  .map((page) => page.canonical)
  .sort();

if (sitemapUrls.some((url) => url.endsWith(".html"))) {
  errors.push("sitemap.xml contains legacy .html URLs");
}
if (
  JSON.stringify([...sitemapUrls].sort()) !==
  JSON.stringify(expectedSitemapUrls)
) {
  errors.push("sitemap.xml does not match the indexable clean-path pages");
}

const robots = fs.readFileSync(path.join(root, "robots.txt"), "utf8");
if (!robots.includes(`Sitemap: ${baseUrl}/sitemap.xml`)) {
  errors.push("robots.txt has the wrong sitemap URL");
}
if (!robots.includes(`Sitemap: ${baseUrl}/image-sitemap.xml`)) {
  errors.push("robots.txt is missing the image sitemap URL");
}

const analytics = fs.readFileSync(path.join(root, "analytics.js"), "utf8");
if (!analytics.includes(`var clarityProjectId = "${clarityProjectId}"`)) {
  errors.push("analytics.js is missing the Microsoft Clarity project ID");
}
if (!analytics.includes("https://www.clarity.ms/tag/")) {
  errors.push("analytics.js is missing the Microsoft Clarity loader");
}

const imageSitemap = fs.readFileSync(
  path.join(root, "image-sitemap.xml"),
  "utf8",
);
if (
  !imageSitemap.includes(
    'xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"',
  )
) {
  errors.push("image-sitemap.xml is missing the image namespace");
}

const imageSitemapEntries = new Map();
for (const block of imageSitemap.matchAll(/<url>([\s\S]*?)<\/url>/g)) {
  const loc = match(block[1], /<loc>([^<]+)<\/loc>/);
  const images = [
    ...block[1].matchAll(/<image:loc>([^<]+)<\/image:loc>/g),
  ].map((item) => item[1]);
  imageSitemapEntries.set(loc, images);

  for (const imageUrl of images) {
    if (!imageUrl.startsWith(`${baseUrl}/warehouse-`)) {
      errors.push(`image-sitemap.xml has an unexpected image URL: ${imageUrl}`);
      continue;
    }
    const imageFile = path.join(root, new URL(imageUrl).pathname.slice(1));
    if (!fs.existsSync(imageFile)) {
      errors.push(`image-sitemap.xml references a missing file: ${imageUrl}`);
    }
  }
}

for (const page of pages.values()) {
  if (!page.indexable || !page.warehouseImages.length) continue;
  const expectedImages = page.warehouseImages.map((src) => `${baseUrl}${src}`);
  const sitemapImages = imageSitemapEntries.get(page.canonical) || [];
  if (
    JSON.stringify(sitemapImages) !== JSON.stringify(expectedImages)
  ) {
    errors.push(
      `${page.publicPath}: image sitemap does not match page warehouse images`,
    );
  }
}

if (errors.length) {
  console.error(`Site audit failed: ${errors.length} issue(s)`);
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log(
  `Site audit passed: ${pages.size} clean-path pages, ${expectedSitemapUrls.length} indexable pages.`,
);
console.log(
  "Canonical URLs, internal links, JSON-LD, page images, sitemaps, form sources, phone and address exposure are valid.",
);
