"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "@/components/header/Header";
import { PlayIcon } from "@heroicons/react/24/outline";

const word = "humanly".split("");

// animation for letters
const letterVariants = {
  initial: { y: "100%", opacity: 0 },
  animate: { y: 0, opacity: 1 },
};

// list of background images
const backgrounds = [
  "/img/banner-2.jpg",
  "/img/jay-2.jpg",
  "/img/ads.jpg",
  "/img/jay.jpg",
];

const Hero = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % backgrounds.length);
    }, 10000); 
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ scale: 0.95, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ ease: "easeInOut", duration: 0.8 }}
    >
      <div className="space-y-4 relative text-white dark:text-white">
        <div className="w-full relative z-[1000] min-h-[100vh] overflow-hidden">
          <AnimatePresence>
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 2, ease: "easeInOut" }}
              style={{
                backgroundImage: `url(${backgrounds[index]})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              className="absolute inset-0"
            />
          </AnimatePresence>

          {/* dark overlay */}
          <div className="w-full h-full absolute top-0 left-0 bg-[#000000c1] z-[1]" />

          <div className="relative z-[2]">
            <Header />

            <div className="text-center">
              <h1 className="font-bold mb-4 font-inter lg:text-[250px] text-[36px] tracking-[-30px] relative overflow-hidden flex justify-center gap-1">
                {word.map((char, i) => (
                  <motion.span
                    key={i}
                    variants={letterVariants}
                    initial="initial"
                    animate="animate"
                    transition={{
                      duration: 1.5,
                      delay: i * 0.1,
                      ease: [0.76, 0, 0.24, 1],
                    }}
                    className="inline-block"
                  >
                    {char}
                  </motion.span>
                ))}
              </h1>

              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="ml-4 text-center font-[500] -mt-20"
              >
                Exploring Human Expression Through Art, Creativity, and
                Storytelling.
              </motion.p>

              {/* Bottom Row */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 0.8 }}
                className="w-[70%] mx-auto flex justify-between"
              >
                {/* Play button */}
                <motion.div
                  className="flex cursor-pointer tracking-tight text-xs font-[500] uppercase items-center gap-2 relative"
                  whileHover={{ scale: 1.05 }}
                >
                  {/* Circle container */}
                  <motion.div
                    className="w-[40px] h-[40px] rounded-full border border-white flex items-center justify-center"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                  >
                    <PlayIcon className="w-[28px] text-white" />
                  </motion.div>

                  {/* Label */}
                  <div className="relative z-10">Play videos</div>
                </motion.div>

                {/* Location */}
                <motion.div
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 1.8, duration: 0.6 }}
                  className="font-[500] text-xs uppercase"
                >
                  Lagos, Nigeria
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;
