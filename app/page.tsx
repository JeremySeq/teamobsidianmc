"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import AnimatedHero from "./components/AnimatedHero";
import Navbar from "./components/Navbar";

export default function Home() {
  const [showHero, setShowHero] = useState(true);

  useEffect(() => {
    const hasSeenAnimation = localStorage.getItem("seenAnimation");

    if (hasSeenAnimation) {
      setShowHero(false);
    }
  }, []);

  function handleComplete() {
    localStorage.setItem("seenAnimation", "true");
    setShowHero(false);
  }

  return (
    <main className="relative min-h-screen">
      {showHero && <AnimatedHero onComplete={handleComplete} />}

      {!showHero && (
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Navbar />
        </motion.nav>
      )}
    </main>
  );
}
