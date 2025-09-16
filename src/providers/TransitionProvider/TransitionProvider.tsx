"use client";

import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import PageTransitionLoader from "@/components/pageLoader/PageLoader";

export default function TransitionProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [loading, setLoading] = useState(pathname !== "/");

  useEffect(() => {
    if (pathname === "/") return;

    setLoading(true);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500); 

    return () => clearTimeout(timer);
  }, [pathname]);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        {loading && pathname !== "/" && (
          <motion.div
            key="loader"
            initial={{ y: 0 }}
            animate={{ y: 0 }}
            exit={{ y: "-100%", transition: { duration: 0.8, ease: "easeInOut" } }}
            className="absolute inset-0 z-50"
          >
            <PageTransitionLoader />
          </motion.div>
        )}
      </AnimatePresence>


      {!loading && children}
    </div>
  );
}
