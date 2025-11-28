"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function AnimatedHero({ onComplete }: { onComplete: () => void }) {
  const totalFrames = 31;
  const FPS = 20;
  const intervalTime = 1000 / FPS;

  const [frame, setFrame] = useState(1);
  const [animation, setAnimation] = useState<"animation" | "zoom">("animation");

  // preload frames
  useEffect(() => {
    ["animation", "zoom"].forEach((anim) => {
      for (let i = 1; i <= totalFrames; i++) {
        const img = new window.Image();
        img.src = `/${anim}/${i.toString().padStart(4, "0")}.png`;
      }
    });
  }, []);

  // frame loop
  useEffect(() => {
    const interval = setInterval(() => {
      setFrame((prev) => (prev % totalFrames) + 1);
    }, intervalTime);

    return () => clearInterval(interval);
  }, []);

  // at end of zoom, call onComplete
  useEffect(() => {
    if (animation === "zoom" && frame === totalFrames) {
      onComplete();
    }
  }, [animation, frame, totalFrames, onComplete]);

  // switch to zoom
  useEffect(() => {
    const switchAnimation = () => {
      setAnimation((prev) => (prev === "zoom" ? prev : "zoom"));
      setFrame((prev) => (animation === "zoom" ? prev : 1));
    };

    const events: (keyof WindowEventMap)[] = [
      "mousedown",
      "wheel",
      "contextmenu",
      "click",
    ];

    events.forEach((event) =>
      window.addEventListener(event, switchAnimation, { passive: true })
    );

    return () => {
      events.forEach((event) =>
        window.removeEventListener(event, switchAnimation)
      );
    };
  }, [animation]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative w-screen h-screen overflow-hidden"
    >
      {/* hero background */}
      <motion.div
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden"
      >
        <img
          src={`/${animation}/${frame.toString().padStart(4, "0")}.png`}
          alt="animated hero"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* logo */}
      <motion.header
        initial={{ y: -50, opacity: 0 }}
        animate={{
          y: animation === "zoom" ? -150 : 0,
          opacity: animation === "zoom" ? 0 : 1,
        }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="w-full text-center pt-8"
      >
        <motion.img
          src="/logo.png"
          alt="Team Obsidian Logo"
          className="mx-auto block"
          width={450}
          animate={{
            scale: animation === "zoom" ? 1 : [1, 1.05, 1],
          }}
          transition={{
            duration: animation === "zoom" ? 0.5 : 2,
            repeat: animation === "zoom" ? 0 : Infinity,
            repeatType: "loop",
          }}
        />
      </motion.header>

      {/* scroll arrow */}
      {animation === "animation" && (
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </motion.div>
      )}
    </motion.div>
  );
}
