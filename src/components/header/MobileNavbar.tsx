
import Link from "next/link";
import ThemeSwitcher from "../provider/ThemeSwitcher";
import Logo from "../logo/Logo";
import { Dispatch, SetStateAction } from "react";
import distorted from '../../../public/img/banner-3.jpg'
import { motion } from "framer-motion";
import Image from "next/image";
import { FlipText } from "../flip-text/FlipText";
interface MobileNavbarProps {
  theme: string | undefined;
  isOpen: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  isActive: (href: string) => boolean;
  menu_items: { href: string; title: string }[];
}
export const MobileNavbar = ({
  theme,
  isOpen,
  setOpen,
  isActive,
  menu_items,
}: MobileNavbarProps) => {
const glitchFrames = [
  { x: 0, y: 0, opacity: 1, filter: "none", delay: 0 },
  { x: -8, y: -2, opacity: 0.5, filter: "contrast(180%) hue-rotate(-15deg)", delay: 0.15 },
  { x: 6, y: 3, opacity: 0.5, filter: "contrast(180%) hue-rotate(15deg)", delay: 0.25 },
];
  return (
    <nav>
      <div
        data-theme={theme}
        className={` h-full fixed duration-[0.5s] block z-[10000000000000000]  top-0  left-0 w-full ${
          !isOpen ? "opacity-0 sr-only" : "opacity-100 "
        }`}
      >
               <div className="flex absolute top-5 right-5 items-center gap-4">
                         <ThemeSwitcher />
         <p onClick={()=>setOpen(false)} className="tracking-tighter cursor-pointer text-xs font-[500]">CLOSE</p>
         </div>
        <div className="grid grid-cols-12">
          <div className="relative col-span-8  h-[90vh] m-8 overflow-hidden">
  {glitchFrames.map((frame, i) => (
  <motion.div
    key={i}
    className="absolute inset-0"
    animate={{
      x: [frame.x, frame.x + (i + 1) * 3, frame.x - (i + 1) * 2, frame.x],
      y: [frame.y, frame.y - (i + 1) * 2, frame.y + (i + 1) * 2, frame.y],
      opacity: [frame.opacity, frame.opacity * 0.8, frame.opacity],
    }}
    transition={{
      repeat: Infinity,
      duration:3,
      ease: "easeInOut",
      delay: frame.delay,
    }}
    style={{ filter: frame.filter }}
  >
    <Image
      src={distorted}
      alt="glitch"
      fill
      className="object-cover"
      priority
    />
  </motion.div>
))}
    </div>
       <div className="col-span-4 mt-24 flex flex-col gap-12">
          <div className=" mb-8 px-32 ">
          <Logo
            onClick={() => {
              setOpen(false);
            }}
          />
   <div className="mt-10">
    {menu_items?.map((link, i) => (
            <Link
              onClick={() => {
                setOpen(false);
              
              }}
              key={i}
              data-theme={theme}
              className={`${
                isActive(link.href)
                  ? " text-primary3 "
                  : ""
              }  pb-1 block w-fit uppercase   text-[25px] tracking-[-1px] font-bold`}
              href={link.href}
            >
              <FlipText
             
      text={link.title}
      className={isActive(link.href) ? "text-primary3" : ""}
    />
            </Link>
          ))}
   </div>
        </div>
          
       </div>
     
        </div>
      </div>
    
    </nav>
  );
};
