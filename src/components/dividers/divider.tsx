"use client ";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
interface DividersProps {
  className?: string;
}

export const Dividers = ({ className }: DividersProps) => {
  const { theme } = useTheme();
  return (
    <motion.div
      data-theme={theme}
      initial={{ opacity: 0, width: 0 }}
      whileInView={{ opacity: 1, width: "100%" }}
      viewport={{ once: true }}
      transition={{
        ease: "linear",
        duration: 1,
      }}
      className={`border-b border-black  dark:border-[#ffffff1f]  ${className}`}
    />
  );
};
