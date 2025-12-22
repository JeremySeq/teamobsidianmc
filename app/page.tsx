"use client";

import { useEffect } from "react";
import { useSplash } from "./SplashContext";
import AnimatedHero from "./components/AnimatedHero";
import { motion } from "framer-motion";

export default function Home() {
  const { showSplash, setShowSplash } = useSplash();

  useEffect(() => {
    const seen = localStorage.getItem("seenAnimation");
    if (seen) setShowSplash(false);
  }, [setShowSplash]);

  function handleComplete() {
    localStorage.setItem("seenAnimation", "true");
    setShowSplash(false);
  }

  return (
    <main className="relative">
      {showSplash && <AnimatedHero onComplete={handleComplete} />}

      {!showSplash && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="max-w-6xl mx-auto px-4 py-8">
            <h1 className="text-5xl font-bold text-center mb-4">Welcome to Team Obsidian</h1>
            <p className="text-center text-xl text-slate-300 mb-12">
              Explore our mods and meet the team behind them.
            </p>

            <div className="text-center">
              <button className="cta-button text-white font-bold py-3 px-8 rounded-full text-2xl mb-15">
                Join Our Discord
              </button>
            </div>

            <section className="">
              <h2 className="text-3xl font-bold mb-8 text-center">Upcoming Mods</h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

                {/* Inhabitants */}
                <div className="bg-obsidian-deep rounded-lg p-5 transition">
                  <img
                    src="/mods/inhabitants.png"
                    alt="Inhabitants mod"
                    width={400}
                    height={250}
                    className="w-full h-auto rounded-md mb-4 object-cover"
                  />
                  <h3 className="text-xl font-semibold mb-3">Inhabitants</h3>
                  <p className="text-slate-300">
                    Fictional fauna with unique behaviors and interactions.
                  </p>
                </div>

                {/* Trinkets */}
                <div className="bg-obsidian-deep rounded-lg p-5 transition">
                  <img
                    src="/mods/trinkets.png"
                    alt="Trinkets mod"
                    width={400}
                    height={250}
                    className="w-full h-auto rounded-md mb-4 object-cover"
                  />
                  <h3 className="text-xl font-semibold mb-3">"Trinkets"</h3>
                  <p className="text-slate-300">
                    Vanilla-styled artifacts.
                  </p>
                </div>
              </div>
            </section>

          </div>
        </motion.div>
      )}
    </main>
  );
}
