"use client";

import { useEffect } from "react";
import { useSplash } from "./SplashContext";
import AnimatedHero from "./components/AnimatedHero";
import { motion } from "framer-motion";

const mods = [
  {
    name: "Inhabitants",
    description:
        "Our debut mod, adding new and interesting fictional fauna.",
    bg: "bg-emerald-950",
    accent: "text-emerald-200",
    image: "/mods/inhabitants.png",
  },
  {
    name: "Trinkets",
    description:
        "Vanilla-style artifacts.",
    bg: "bg-yellow-950",
    accent: "text-yellow-200",
    image: "/mods/trinkets.png",
  }
];

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
          className="pb-10"
        >
          <div className="max-w-7xl mx-auto text-center">
            <div
              className="relative bg-cover bg-center bg-no-repeat rounded-3xl text-white"
              style={{ backgroundImage: "url('/hero-bg.jpg')" }}
            >
              <div className="py-24 px-4">
                <h1 className="text-5xl font-bold mb-4">Welcome to Team Obsidian</h1>
                <p className="text-xl mb-12">
                  Explore our mods and meet the team behind them.
                </p>

                <a
                  href="https://discord.gg/EPUJCmYrcb"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="cta-button text-white font-bold py-3 px-8 rounded-full text-2xl hover:scale-105 transition-transform">
                    Join Our Discord
                  </button>
                </a>
              </div>
            </div>

            <section className="mt-16">
              <h2 className="text-4xl font-bold mb-8 text-center">Mods</h2>

              <div className="flex-col gap-12 flex">
                {mods.map((mod, i) => {
                  const isLeft = i % 2 === 0;
          
                  return (
                    <motion.section
                      key={mod.name}
                      initial={{ opacity: 0, x: isLeft ? -80 : 80 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.9, ease: "easeOut" }}
                      className={`${mod.bg} relative w-full min-h-[50vh] flex items-center rounded-3xl`}
                    >
                      <div className="relative z-10 max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
                        {/* text */}
                        <div className={isLeft ? "md:order-1" : "md:order-2"}>
                          <h3 className={`text-5xl font-bold mb-6 ${mod.accent}`}>
                            {mod.name}
                          </h3>
                          <p className="text-lg text-slate-200 mb-8 leading-relaxed">
                            {mod.description}
                          </p>
          
                          <button className="px-6 py-3 rounded-full border border-white/20 text-white hover:bg-white/10 hover:cursor-pointer transition">
                            View on Github
                          </button>
                        </div>
          
                        {/* image */}
                        <div
                          className={`flex justify-center ${
                            isLeft ? "md:order-2" : "md:order-1"
                          }`}
                        >
                          <motion.img
                            src={mod.image}
                            alt={mod.name}
                            className="max-h-[320px] object-contain drop-shadow-2xl"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.3 }}
                          />
                        </div>
                      </div>
                    </motion.section>
                  );
                })}

              </div>
              
            </section>
          </div>
        </motion.div>
      )}
    </main>
  );
}
