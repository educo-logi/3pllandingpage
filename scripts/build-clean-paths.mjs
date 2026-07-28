import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const baseUrl = "https://3pl.33pl.co.kr";
const legacyBaseUrls = [
  "https://lds1202.github.io/landingpage_001",
  "https://educo-logi.github.io/3pllandingpage",
];
const lastmod = "2026-07-28";

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
  ["3PL1.html", "/"],
]);

const guideFiles = fs
  .readdirSync(root)
  .filter((file) => /^guide-[a-z0-9-]+\.html$/i.test(file))
  .sort();

const routes = new Map(fixedRoutes);
for (const file of guideFiles) {
  const slug = file.replace(/^guide-/, "").replace(/\.html$/, "");
  routes.set(file, `/logistics-guide/${slug}/`);
}

function canonicalFor(file) {
  return `${baseUrl}${routes.get(file)}`;
}

function setMetaContent(source, name, content) {
  const pattern = new RegExp(
    `<meta\\s+name="${name}"\\s+content="[^"]*"\\s*\\/?>`,
    "i",
  );
  const tag = `<meta name="${name}" content="${content}" />`;
  if (pattern.test(source)) return source.replace(pattern, tag);
  return source.replace("</title>", `</title>\n  ${tag}`);
}

function setIndexing(source, indexable) {
  const value = indexable
    ? "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1"
    : "noindex,follow";
  let result = setMetaContent(source, "robots", value);
  if (/name="googlebot"/i.test(result)) {
    result = setMetaContent(result, "googlebot", value);
  }
  return result;
}

function ensureAnalytics(source) {
  if (source.includes('src="/analytics.js"')) return source;
  return source.replace(
    "</head>",
    '  <script src="/analytics.js" defer></script>\n</head>',
  );
}

function normalizeUrls(source, file) {
  let result = source;

  for (const legacyBaseUrl of legacyBaseUrls) {
    result = result.replaceAll(legacyBaseUrl, baseUrl);
  }

  for (const [targetFile, publicPath] of routes) {
    result = result.replaceAll(
      `${baseUrl}/${targetFile}`,
      `${baseUrl}${publicPath}`,
    );
    result = result.replaceAll(`./${targetFile}`, publicPath);
    result = result.replaceAll(`href="${targetFile}`, `href="${publicPath}`);
  }

  result = result
    .replaceAll("./baingroup-logo.png", "/baingroup-logo.png")
    .replaceAll("./3pl-hero.png", "/3pl-hero.png")
    .replaceAll('href="./#', 'href="/#')
    .replaceAll('href="./"', 'href="/"')
    .replaceAll("url=./", "url=/")
    .replaceAll('window.location.replace("./")', 'window.location.replace("/")');

  const canonical = canonicalFor(file);
  result = result.replace(
    /<link\s+rel="canonical"\s+href="[^"]*"\s*\/?>/i,
    `<link rel="canonical" href="${canonical}" />`,
  );
  result = result.replace(
    /<meta\s+property="og:url"\s+content="[^"]*"\s*\/?>/i,
    `<meta property="og:url" content="${canonical}" />`,
  );

  return ensureAnalytics(result);
}

function outputFileFor(publicPath) {
  if (publicPath === "/") return path.join(root, "index.html");
  return path.join(root, publicPath.slice(1), "index.html");
}

for (const [file, publicPath] of routes) {
  if (file === "3PL1.html") continue;

  const sourceFile = path.join(root, file);
  if (!fs.existsSync(sourceFile)) {
    throw new Error(`Missing source page: ${file}`);
  }

  const original = fs.readFileSync(sourceFile, "utf8");
  const normalized = normalizeUrls(original, file);
  const isConsultation = file === "3pl-sinchung.html";
  const cleanPage = setIndexing(normalized, !isConsultation);

  const outputFile = outputFileFor(publicPath);
  fs.mkdirSync(path.dirname(outputFile), { recursive: true });
  fs.writeFileSync(outputFile, cleanPage, "utf8");

  if (file !== "index.html") {
    const legacyPage = setIndexing(normalized, false);
    fs.writeFileSync(sourceFile, legacyPage, "utf8");
  }
}

if (fs.existsSync(path.join(root, "3PL1.html"))) {
  const source = fs.readFileSync(path.join(root, "3PL1.html"), "utf8");
  const normalized = setIndexing(normalizeUrls(source, "3PL1.html"), false);
  fs.writeFileSync(path.join(root, "3PL1.html"), normalized, "utf8");
}

const sitemapRoutes = [...routes.entries()]
  .filter(([file]) => file !== "3pl-sinchung.html" && file !== "3PL1.html")
  .map(([file, publicPath]) => ({
    loc: `${baseUrl}${publicPath}`,
    priority:
      file === "index.html" ? "1.0" : file === "logistics-guide.html" ? "0.9" : "0.8",
  }));

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapRoutes
  .map(
    ({ loc, priority }) => `  <url>
    <loc>${loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${priority}</priority>
  </url>`,
  )
  .join("\n")}
</urlset>
`;

fs.writeFileSync(path.join(root, "sitemap.xml"), sitemap, "utf8");
fs.writeFileSync(
  path.join(root, "robots.txt"),
  `User-agent: *
Allow: /

Sitemap: ${baseUrl}/sitemap.xml
`,
  "utf8",
);
fs.writeFileSync(path.join(root, ".nojekyll"), "", "utf8");

console.log(
  `Built ${routes.size - 1} clean-path pages for ${baseUrl} and refreshed sitemap.xml.`,
);
