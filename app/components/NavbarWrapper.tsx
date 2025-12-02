"use client";

import Navbar from "./Navbar";
import { useSplash } from "../SplashContext";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function NavbarWrapper() {
  const { showSplash } = useSplash();
  const pathname = usePathname();

  if (pathname === "/" && showSplash) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <Navbar />
    </motion.div>
  );
}
