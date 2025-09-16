"use client";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { useTheme } from "next-themes";
import Link from "next/link";
import { motion } from "framer-motion";
import { ReactNode } from "react";
interface LinkButtonProps {
  children: ReactNode;
  className?: string | undefined;
  href?: string;
  rightIcon?: ReactNode;
  leftIcon?: ReactNode;
}
export const LinkButton = ({
  children,
  className,
  href = "",
  rightIcon = <ArrowRightIcon className="w-5 h-5" />,
  leftIcon = "",
}: LinkButtonProps) => {
  const { theme } = useTheme();
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        ease: "linear",
        duration: 1,
        y: { duration: 0.5 },
      }}
    >
      <Link
        data-theme={theme}
        href={href}
        className={`text-primary2 hover:translate-x-[10px] duration-[0.5s] data-[theme=light]:text-primary3 filter-[bright] font-sora font-[600] text-[18px] flex items-center gap-2 ${className}`}
      >
        {leftIcon && leftIcon} {children} {rightIcon && rightIcon}
      </Link>
    </motion.div>
  );
};
