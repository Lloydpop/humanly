"use client";
import { motion } from "framer-motion";

export default function PageTransitionLoader() {
  return (
    <motion.div
      initial={{ y: "100%" }}
      animate={{ y: 0 }}
      exit={{ y: "-100%" }}
      transition={{
        duration:1,
        ease: [0.76, 0, 0.24, 1],
      }}
      className="fixed inset-0 z-[9999] bg-black dark:bg-white"
    />
  );
}
