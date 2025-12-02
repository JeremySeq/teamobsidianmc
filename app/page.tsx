"use client";

import { useEffect } from "react";
import { useSplash } from "./SplashContext";
import AnimatedHero from "./components/AnimatedHero";

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
        <div>
          
        </div>
      )}
    </main>
  );
}
