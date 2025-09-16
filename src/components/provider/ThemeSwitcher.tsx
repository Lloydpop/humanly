"use client";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";
import sun from "../../../public/icons/sun.png";
import moon from "../../../public/icons/moon.png";
const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState<boolean>(false);
  const { theme, setTheme } = useTheme();
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return null;
  }
  const handleTheme = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };
  return (
    <div onClick={handleTheme}>
        <div className="w-[30px] cursor-pointer h-[30px] rounded-full dark:bg-white bg-black"/>
        
    </div>
  );
};
export default ThemeSwitcher;
