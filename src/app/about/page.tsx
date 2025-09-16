"use client";
import { Dividers } from "@/components/dividers/divider";
import google from "../../../public/img/google.png";
import microsoft from "../../../public/img/Microsoft.png";
import xero from "../../../public/img/Xero.png";
import fb from "../../../public/img/facebook.png";

import charlie from "../../../public/img/charlie-2.jpg";
import Image from "next/image";
import {
  FiDownloadCloud,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiTwitter,
} from "react-icons/fi";
import { useTheme } from "next-themes";
import { AnimatePresence, motion } from "framer-motion";
import Header from "@/components/header/Header";
import Footer from "../components/footer/Footer";
import { Play } from "lucide-react";
import { BiPauseCircle, BiPlayCircle } from "react-icons/bi";
import { useRef, useState } from "react";
const About = () => {
  const { theme } = useTheme();
  const links = [
    {
      href: "/mail",
      icon: FiMail,
    },
    {
      href: "/twitter",
      icon: FiTwitter,
    },
    {
      href: "/twitter",
      icon: FiLinkedin,
    },
    {
      href: "/github",
      icon: FiGithub,
    },
  ];
   const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (isPlaying) {
      video.pause();
      setIsPlaying(false);
    } else {
      video.play();
      setIsPlaying(true);
    }
  };

  const brands = [microsoft, google, xero, fb, microsoft, google, xero, fb,google, xero, fb, microsoft, google, xero];
  return (
    <div className=" space-y-20">
      <Header />
      <div>
        <h1 className=" font-[500] dark:font-[400]  lg:text-[30px]  text-[36px] px-10">
          On a journey; exploring human expression through art and creativity.
          Humanly Studio is a creative agency dedicated to shaping ideas into
          powerful visual and emotional experiences. With a focus on
          authenticity, culture, and innovation, we craft stories that connect
          deeply with people and leave lasting impressions.
        </h1>
        <Dividers className="pt-10" />
      </div>
      <div className="flex lg:flex-row flex-col justify-between gap-10 p-10">
        <p className="dark:text-gray-400 text-black text-sm w-[40%]">[ ABOUT ]</p>
        <div className="w-[60%] text-[23px]">
          <p className="">
            At Humanly Studio, we are on a journey of exploring human expression
            through art and creativity. Our work is rooted in the belief that
            creativity is one of the most authentic ways to connect people,
            spark emotion, and inspire change.
          </p>
          <p className="mt-6">We are a multidisciplinary creative agency, blending design, storytelling, and production to craft meaningful experiences that resonate beyond the surface. From bold visual campaigns to intimate artistic expressions, every project is guided by our commitment to authenticity, culture, and innovation.</p>
          <p className="mt-6">Led by Creative Lead @chalewitdvibe 🎨, Humanly Studio exists to celebrate the human spirit through creativity—transforming ideas into powerful narratives that move people and brands forward.</p>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          ease: "linear",
          duration: 0.5,
          y: { duration: 0.5 },
        }}
        className="px-10"
      >
        <motion.h4
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            ease: "linear",
            duration: 0.5,
            y: { duration: 0.5 },
          }}
          data-theme={theme}
          className="dark:text-gray-400 text-black text-sm uppercase"
        >
          [ Partners ]
        </motion.h4>
        <div className="flex items-center  lg:gap-x-8 lg:gap-y-8 gap-x-2 gap-y-6 flex-wrap mt-8 pb-7">
          {brands.map((brand, i) => (
            <div
           
              key={i}
              className="w-[130px]  cursor-pointer hover:mix-blend-normal border hover:scale-[103%] duration-[0.5s] dark:border-[#ffffff2a] border-gray-500 flex justify-center items-center h-[50px] rounded-[12px] bg-[#ffffff0c]"
            >
              <Image
                src={brand}
        className="w-full px-3 filter invert-0 dark:invert dark:brightness-0"
                alt={`brand ${i + 1}`}
              />
            </div>
          ))}
        </div>
      </motion.div>
           <div className="flex lg:flex-row flex-col justify-between gap-10 p-10">
        <p className="dark:text-gray-400 text-black text-sm w-[30%]">[ WHO ARE WE ]</p>
        <div className="w-[70%] text-[23px]">
          <p className="">
          We are Humanly Studio—a creative agency on a journey to explore and express the human experience through art and creativity. Our mission is simple: to transform ideas into meaningful stories that inspire, connect, and endure.

<br/>At our core, we believe creativity is deeply human. That’s why we approach every project with authenticity, cultural awareness, and bold imagination—whether it’s design, storytelling, or production.
          </p>
        </div>
      </div>
      <div className="px-10 flex justify-between ">
        <div className="w-[40%] pr-10">
                   <h1 className="text-[26px] uppercase tracking-tighter leading-[1] font-[500] dark:font-[400]">[ FOUNDER ]</h1>
       
        <p className="mt-40 text-lg  dark:text-gray-300">Chale (C H A L E) is the Founder of Humanly Studio, a creative force driven by the mantra “Forget normal, give me magic.” Known as The Butcher, he cuts through the ordinary to reveal bold, human stories, while as a Social Art Curator (@sautisocial), he connects art with community and culture.</p>
        </div>
  

           <Image alt="founder" width={800} height={300} src={charlie.src}/>
      </div>
      <div>
          <div className="relative w-full h-full">
      {/* Overlay controls */}
      <AnimatePresence>
        {!isPlaying && (
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm z-10"
          >
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={togglePlay}
            >
              {isPlaying?<BiPauseCircle  className="w-[150px] h-[150px] text-white drop-shadow-lg cursor-pointer" />:<BiPlayCircle className="w-[150px] h-[150px] text-white drop-shadow-lg cursor-pointer" />}
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isPlaying && (
          <motion.button
            key="pause"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.4 }}
            onClick={togglePlay}
            className="absolute bottom-4 right-4 z-20"
          >
            <BiPauseCircle className="w-[60px] h-[60px] text-white cursor-pointer" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Video element */}
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        onEnded={() => setIsPlaying(false)}
      >
        <source src="/banner-clip.mp4" type="video/mp4" />
      </video>
    </div>
          <div>
          <h2 className="text-[90px] leading-[1] mt-20 uppercase text-center tracking-tight">
            Let’s make something human.
          </h2>
          <p className="mt-4 dark:text-gray-300 max-w-xl text-[24px] mx-auto text-center">
          At Humanly Studio, we don’t wait for perfect, we carve it out of chaos.
If you’ve got an idea, a vision, or just a spark that won’t shut up —
  <a href='#' className="text-primary3 ml-1 underline">send us a mail.</a>
          </p>
</div>
      </div>
     
   <Footer/>
    </div>
  );
};
export default About;
