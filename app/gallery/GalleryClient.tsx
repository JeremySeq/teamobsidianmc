"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function GalleryClient({
  images,
}: {
  images: string[];
}) {
  const [activeImage, setActiveImage] = useState<string | null>(null);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="py-8 px-6 max-w-6xl mx-auto"
      >
        <h2 className="text-center text-4xl font-bold mb-4">Gallery</h2>
        <p className="text-center text-text-muted mb-8">Art from our mods.<br/>(Many are from development and not in the mods as shown)</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((img, i) => (
            <motion.div
              key={img}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.05 }}
              className="rounded-2xl overflow-hidden bg-obsidian-deep outline-3 outline-obsidian-black cursor-pointer hover:outline-obsidian-purple transition-all"
              onClick={() => setActiveImage(img)}
            >
              <img
                src={`/gallery/${img}`}
                alt={img}
                className="w-full h-full object-contain transition-transform duration-300 hover:scale-105"
              />
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Lightbox */}
      <AnimatePresence>
        {activeImage && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveImage(null)}
          >
            <motion.img
              src={`/gallery/${activeImage}`}
              alt={activeImage}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="max-w-[90vw] max-h-[90vh] object-contain rounded-xl"
              onClick={(e) => e.stopPropagation()}
            />

            {/* Close button */}
            <button
              className="absolute top-6 right-6 text-white text-3xl opacity-70 hover:opacity-100 transition"
              onClick={() => setActiveImage(null)}
            >
              ×
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
