"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import AnimatedHero from "./components/AnimatedHero";
import Navbar from "./components/Navbar";

export default function Home() {
  const [showHero, setShowHero] = useState(true);

  return (
    <main className="relative min-h-screen">
      {showHero && (
        <AnimatedHero onComplete={() => setShowHero(false)} />
      )}

      {!showHero && (
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Navbar></Navbar>
        </motion.nav>

      )}
    </main>
  );
}
