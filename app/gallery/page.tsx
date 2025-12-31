import fs from "fs";
import path from "path";
import GalleryClient from "./GalleryClient";

const imagesDir = path.join(process.cwd(), "public/gallery");

export default function GalleryPage() {
  const images = fs
    .readdirSync(imagesDir)
    .filter((file) =>
      [".png", ".jpg", ".jpeg", ".webp"].includes(path.extname(file))
    );

  return <GalleryClient images={images} />;
}
