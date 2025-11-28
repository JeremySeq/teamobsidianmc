"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import AnimatedHero from "./components/AnimatedHero";

export default function Home() {
  const [showHero, setShowHero] = useState(true);

  return (
    <main className="relative min-h-screen">
      {showHero && (
        <AnimatedHero onComplete={() => setShowHero(false)} />
      )}

      {!showHero && (
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative z-10 p-20"
        >
          <h1 className="text-4xl font-bold">Welcome to Team Obsidian</h1>
          <p className="mt-6 text-gray-300">
            CONTENT
          </p>
        </motion.section>
      )}
    </main>
  );
}
