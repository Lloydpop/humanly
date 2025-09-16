"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

type ThemeSwitcherProps = {
  className?: string;
  withBg?: boolean;
};

const ThemeSwitcher = ({ className = "", withBg = true }: ThemeSwitcherProps) => {
  const [mounted, setMounted] = useState<boolean>(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const handleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div onClick={handleTheme} className={`cursor-pointer ${className}`}>
      {withBg ? (
        <div className="w-[30px] h-[30px] rounded-full dark:bg-white bg-black" />
      ) : (
        <div className="w-[30px] h-[30px] rounded-full bg-white" />
      )}
    </div>
  );
};

export default ThemeSwitcher;
