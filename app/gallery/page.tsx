import fs from "fs";
import path from "path";
import GalleryClient from "./GalleryClient";

const imagesDir = path.join(process.cwd(), "public/gallery");

// recursively get all image files
function getImages(dir: string): string[] {
  let results: string[] = [];

  const items = fs.readdirSync(dir, { withFileTypes: true });

  for (const item of items) {
    const fullPath = path.join(dir, item.name);

    if (item.isDirectory()) {
      // recurse into subfolder
      results = results.concat(getImages(fullPath));
    } else if (
      [".png", ".jpg", ".jpeg", ".webp", ".gif"].includes(path.extname(item.name).toLowerCase())
    ) {
      // push relative path from /public
      results.push(path.relative(path.join(process.cwd(), "public/gallery"), fullPath).replace(/\\/g, "/"));
    }
  }

  return results;
}

export default function GalleryPage() {
  const images = getImages(imagesDir);

  return <GalleryClient images={images} />;
}
