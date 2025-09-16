"use client";
import { ReactNode } from "react";
import { motion } from "framer-motion";
interface HeadingProps {
  children: ReactNode;
  className?: string;
  theme?: string | undefined;
  color?: string;
}
const Heading = ({
  children,
  className,
  theme,
  color = "text-gray-800",
}: HeadingProps) => {
  return (
    <motion.h1
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        ease: "linear",
        duration: 1,
        y: { duration: 0.5 },
      }}
      data-theme={theme}
      className={`font-[500] leading-[30.4px] lg:text-[48px] text-[24px]  tracking-tighter  relative ${className}`}
    >
      {children}
    </motion.h1>
  );
};
export default Heading;
