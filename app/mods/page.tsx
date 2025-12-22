"use client";

import { motion } from "framer-motion";
import "../globals.css";

export default function Mods() {
    return (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="py-8"
        >
            <h2 className="text-center text-3xl my-4">Mods</h2>
            <h2 className="text-center text-3xl">Page Under Construction</h2>

        </motion.div>
    );
}