import { execFileSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";

const projectRoot = process.cwd();
const nextBin = process.platform === "win32" ? "node_modules\\.bin\\next.cmd" : "node_modules/.bin/next";
const outDir = path.join(projectRoot, "out");
const themeDir = path.join(projectRoot, "wordpress-theme");
const staticDir = path.join(themeDir, "static");

// Execute standard Next.js build and export
execFileSync(nextBin, ["build"], {
  cwd: projectRoot,
  stdio: "inherit",
  shell: true, // Crucial on Windows to prevent EINVAL spawn errors
  env: { ...process.env, WORDPRESS_THEME: "true" }
});

// Copy exported static files to wordpress-theme static directory
fs.rmSync(staticDir, { recursive: true, force: true });
fs.cpSync(outDir, staticDir, { recursive: true });

console.log(`WordPress theme static files copied to ${staticDir}`);

// Post-process HTML, JS, and CSS files to fix static image paths for WordPress theme
const themeSlug = "portfolio-law-firm";

function replaceImagePaths(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      replaceImagePaths(filePath);
    } else if (/\.(html|js|css)$/.test(file)) {
      let content = fs.readFileSync(filePath, "utf8");
      
      const replaced = content
        .replaceAll('"/images/', `"/wp-content/themes/${themeSlug}/static/images/`)
        .replaceAll("'/images/", `'/wp-content/themes/${themeSlug}/static/images/`)
        .replaceAll('url("/images/', `url("/wp-content/themes/${themeSlug}/static/images/`)
        .replaceAll("url('/images/", `url('/wp-content/themes/${themeSlug}/static/images/`)
        .replaceAll('url(/images/', `url(/wp-content/themes/${themeSlug}/static/images/`);
      
      if (replaced !== content) {
        fs.writeFileSync(filePath, replaced, "utf8");
        console.log(`Updated paths in: ${path.relative(projectRoot, filePath)}`);
      }
    }
  }
}

if (fs.existsSync(staticDir)) {
  console.log("Rewriting image paths for WordPress theme compatibility...");
  replaceImagePaths(staticDir);
  console.log("Image paths successfully rewritten!");
}
