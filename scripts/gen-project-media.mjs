#!/usr/bin/env node

/**
 * 自动扫描 src/assets/projects/ 下指定子目录中的图片/视频文件，
 * 为每个目录生成 _media.ts（自动导入 + 导出数组），
 * 避免手动维护 import 列表。
 *
 * 用法: node scripts/gen-project-media.mjs
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, "..");
const assetsDir = path.join(projectRoot, "src", "assets", "projects");

// 自动扫描 assetsDir 下所有子目录
const TARGET_DIRS = fs
  .readdirSync(assetsDir, { withFileTypes: true })
  .filter((d) => d.isDirectory())
  .map((d) => d.name);

// 支持的媒体扩展名
const IMAGE_EXTS = new Set([".webp", ".png", ".jpg", ".jpeg", ".gif", ".svg", ".avif"]);
const VIDEO_EXTS = new Set([".mp4", ".webm", ".mov"]);
const ALL_EXTS = new Set([...IMAGE_EXTS, ...VIDEO_EXTS]);

function getMediaType(ext) {
  if (IMAGE_EXTS.has(ext)) return "image";
  if (VIDEO_EXTS.has(ext)) return "video";
  return null;
}

function generateBarrel(dirName) {
  const dirPath = path.join(assetsDir, dirName);

  if (!fs.existsSync(dirPath)) {
    console.warn(`⚠️  目录不存在，跳过: ${dirPath}`);
    return;
  }

  const files = fs
    .readdirSync(dirPath)
    .filter((f) => {
      const ext = path.extname(f).toLowerCase();
      return ALL_EXTS.has(ext) && !f.startsWith("_");
    })
    .sort();

  if (files.length === 0) {
    console.warn(`⚠️  目录下无媒体文件，跳过: ${dirPath}`);
    return;
  }

  const imports = [];
  const items = [];

  files.forEach((file, idx) => {
    const ext = path.extname(file).toLowerCase();
    const type = getMediaType(ext);
    const varName = `media${idx}`;

    imports.push(`import ${varName} from "./${file}";`);
    items.push(`  { type: "${type}", src: ${varName} }`);
  });

  const content = `// ⚠️ 此文件由 scripts/gen-project-media.mjs 自动生成，请勿手动编辑。
// 运行 \`node scripts/gen-project-media.mjs\` 或 \`npm run gen:media\` 重新生成。

import { type MediaItem } from "@/components/home/ProjectCarousel";

${imports.join("\n")}

const media: MediaItem[] = [
${items.join(",\n")},
];

export default media;
`;

  const outPath = path.join(dirPath, "_media.ts");
  fs.writeFileSync(outPath, content, "utf-8");
  console.log(`✅ 已生成: ${path.relative(projectRoot, outPath)} (${files.length} 个文件)`);
}

// 执行
console.log("📦 开始扫描项目媒体文件...\n");
TARGET_DIRS.forEach(generateBarrel);
console.log("\n🎉 完成！");
