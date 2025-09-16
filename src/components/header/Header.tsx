"use client";

import Logo from "../logo/Logo";
import { useTheme } from "next-themes";
import {useRouter } from "next/navigation";
import { motion } from "framer-motion";


const Header = () => {
  const { theme } = useTheme();
  const {push}=useRouter()


  return (
    <div>
      <motion.nav
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          ease: "linear",
          duration: 1,
          y: { duration: 0.5 },
        }}
        data-theme={theme}
        className="flex justify-between  items-center py-5 px-10"
      >
   <Logo extraClass="w-[80px] rounded-[40%_60%_70%_30%/30%_50%_60%_40%]" />

        <div className=" block">
          <div className="flex items-center gap-3">
            <p onClick={()=>push('/menu')} className=" font-[500] tracking-tighter cursor-pointer text-xs ">MENU</p>
          </div>
        </div>
       
      </motion.nav>
     
    </div>
  );
};
export default Header;
