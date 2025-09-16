"use client";

import { useState, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import Header from "@/components/header/Header";
import Footer from "../components/footer/Footer";
import Logo from "@/components/logo/Logo";

const Contact = () => {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [open, setOpen] = useState(false);
  const [clickPos, setClickPos] = useState({ x: 0, y: 0 });

  // Track mouse
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);


  const getEyeTransform = (eyeX: number, eyeY: number) => {
    const dx = cursorPos.x - eyeX;
    const dy = cursorPos.y - eyeY;
    const angle = Math.atan2(dy, dx);
    const distance = Math.min(15, Math.sqrt(dx * dx + dy * dy) / 20);
    return `translate(${Math.cos(angle) * distance}px, ${
      Math.sin(angle) * distance
    }px)`;
  };

  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, -100]);
  const y2 = useTransform(scrollY, [0, 500], [0, 80]);

  return (
    <div className="relative font-ppneue overflow-hidden">
      {/* Header */}
      <motion.div
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Header />
      </motion.div>

      {/* Hero Title */}
      <motion.h1
        style={{ y: y1 }}
        className="text-[150px] text-center font-bold font-ppneue uppercase tracking-tighter"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
      >
        BUILD CHAOS
      </motion.h1>

      {/* Circle trigger */}
      <motion.div
        style={{ y: y2 }}
        className="border-t dark:border-gray-600 border-black text-center text-[50px] py-10 relative z-10"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <AnimatePresence>
          {!open && (
            <motion.div
              className="bg-primary3 w-[200px] h-[200px] mx-auto rounded-full cursor-pointer z-20 flex items-center justify-center relative"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
              onClick={(e) => {
                setClickPos({ x: e.clientX, y: e.clientY });
                setOpen(true);
              }}
            >
              {/* Eyes */}
              <div className="flex gap-10">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center overflow-hidden">
                  <div
                    className="w-6 h-6 bg-black rounded-full"
                    style={{
                      transform: getEyeTransform(
                        window.innerWidth / 2 - 50,
                        window.innerHeight / 2
                      ),
                    }}
                  />
                </div>
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center overflow-hidden">
                  <div
                    className="w-6 h-6 bg-black rounded-full"
                    style={{
                      transform: getEyeTransform(
                        window.innerWidth / 2 + 50,
                        window.innerHeight / 2
                      ),
                    }}
                  />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Whether it’s a <span className="underline">small idea</span>
          <br /> or a <span className="underline">big dream</span>, we’re ready!
        </motion.p>
      </motion.div>


      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 flex items-center flex-col justify-center dark:bg-black bg-white z-30"
            initial={{
              clipPath: `circle(0px at ${clickPos.x}px ${clickPos.y}px)`,
            }}
            animate={{
              clipPath: `circle(150% at ${clickPos.x}px ${clickPos.y}px)`,
            }}
            exit={{
              clipPath: `circle(0px at ${clickPos.x}px ${clickPos.y}px)`,
            }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 0.76] }}
          >
            <div className="absolute flex justify-between w-full items-center left-0 top-6 text-xs tracking-tighter px-10">
              <Logo />
              <p className="cursor-pointer" onClick={() => setOpen(false)}>
                [ /CLOSE ]
              </p>
            </div>

            <motion.a
              href="mailto:chale@gmail.com"
              className="text-[100px] font-bold uppercase tracking-tight"
              initial={{ y: 200, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 200, opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            >
              chale@gmail.com
            </motion.a>

            <motion.div
              className="flex gap-6 text-3xl mt-10"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 40 }}
              transition={{ duration: 0.6 }}
            >
              {[
                { name: "Twitter", href: "https://twitter.com" },
                { name: "Instagram", href: "https://instagram.com" },
                { name: "LinkedIn", href: "https://linkedin.com" },
              ].map((link, i) => (
                <motion.a
                  key={i}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="relative w-[120px] h-[50px] flex items-center justify-center text-sm font-bold rounded-full border dark:border-[#ffffff5d] border-black overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  {link.name}
                </motion.a>
              ))}
            </motion.div>

            <motion.p
              className="mt-6 font-bold"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              ( +2349123456786 )
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer */}
      <motion.div
        initial={{ y: 80, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Footer />
      </motion.div>
    </div>
  );
};

export default Contact;
