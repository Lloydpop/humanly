"use client";
import ThemeSwitcher from "@/components/provider/ThemeSwitcher";
import { PlayCircleIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";
import scene1 from "../../../../public/img/rug-1.jpg";
import scene2 from "../../../../public/img/rug-5.jpg";
import scene3 from "../../../../public/img/rug-2.jpg";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Loader2, PauseCircleIcon, Volume2, VolumeX } from "lucide-react";
import Logo from "@/components/logo/Logo";
const Jayjay = () => {
  const { push,back } = useRouter();
  const images = [scene1, scene2, scene3];
    const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [loading, setLoading] = useState(false);

  const togglePlay = async () => {
    const video = videoRef.current;
    if (!video) return;

    if (!isPlaying) {
      setLoading(true);
          video.muted = false;
      try {
        await video.play();
        setIsPlaying(true);
      } catch (err) {
        console.error("Play failed:", err);
      }
      setLoading(false);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };
  return (
    <div>
      <div className="grid grid-cols-12 h-[100vh]">
        <div className="col-span-5 h-full relative overflow-hidden">
          <div className="w-full h-full flex flex-col p-7 dark:text-white z-[1000] text-white  bg-[#000000a2] absolute top-0 left-0">
            <div>
             <div> <p className="uppercase text-right text-sm flex justify-between items-center"> <ArrowLeft onClick={()=>back()} className="cursor-pointer"/>[ project 3 ]</p></div>
            </div>
            <h1 className="text-[60px] uppercase font-[500] tracking-tighter pt-[100px]">
            Jay Jay
            </h1>
            <div>
              <div className="mt-48">
                <p className="text-start text-sm tracking-tighter cursor-pointer">
                 [ SOUND OFF ]
                </p>
              </div>
              <div className="flex text-sora text-xs items-center mt-4  uppercase justify-between">
                <p>Production</p>
                <p>Ruger</p>
              </div>
              <div className="flex items-center mt-2 text-sora text-xs uppercase justify-between">
                <p>Type</p>
                <p>Music Production</p>
              </div>
              <div className="flex items-center mt-2 text-sora text-xs  uppercase justify-between">
                <p>released</p>
                <p>OCT 15, 2025</p>
            
              </div>
            </div>
          </div>

          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/jay-vid.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="col-span-7 h-[100vh] overflow-y-auto p-8">
          <div className=" block">
            <div className="flex -mt-7 items-center justify-between gap-3">
              <Logo/>
             <div className="flex items-center gap-3">
               <ThemeSwitcher />
              <p
                onClick={() => push("/menu")}
                className=" font-[500] tracking-tighter cursor-pointer text-xs "
              >
                MENU
              </p>
             </div>
            </div>
          </div>
          <h1 className="font-[500] text-[22px] mt-40 font-inter">
        Humanly brought Ruger’s “Jay Jay” to life through a bold, visually striking campaign that mirrored the energy and vibe of the track. Every frame, concept, and visual element was crafted to capture the song’s rhythm, style, and youthful spirit. By merging dynamic storytelling with authentic urban aesthetics, we created a project that not only amplifies the music but also resonates with fans—turning “Jay Jay” into a fully immersive audio-visual experience.
          </h1>
          <div>
            <p className="text-right font-sora mt-8 uppercase tracking-tighter italic">
              [ Behind the scenes ]
            </p>
            <div className="mt-5">
              <div className="relative w-full h-[400px] mb-5 group cursor-pointer">
      <video
        ref={videoRef}
        muted
        playsInline
        className="w-full h-full object-cover"
        onClick={togglePlay}
      >
        <source src="/scene-2.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {!isPlaying && !loading && (
        <div
          onClick={togglePlay}
          className="absolute inset-0 bg-black/40 flex items-center justify-center text-white text-2xl font-bold"
        >
          {isPlaying? <PauseCircleIcon className="w-16 h-16"/>: <PlayCircleIcon className="w-16 h-16"/>}
        </div>
      )}

   
      {loading && (
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
          >
            <Loader2 className="w-10 h-10 text-white" />
          </motion.div>
        </div>
      )}
    </div>
              {images.map((item, i) => (
                <div key={i} className="mb-4 w-full">
                  <Image
                    alt={item.src}
                    src={item.src}
                    width={800}
                    height={600}
                    className="w-full h-auto object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
<div className="flex justify-between mt-48">

  <div className="flex flex-col justify-between ">
    <p className="uppercase text-sm italic">[ Up Next ]</p>
    <div>
      <Link
        className="text-[50px] tracking-tighter pr-5 uppercase"
        href={'/projects/TalesOfRamadan'}
      >
       SIMISOLA
      </Link>
    </div>
  </div>

 
  <div>
    <video
      autoPlay
      loop
      muted
      playsInline
      className="w-[400px] h-[400px] object-cover"
    >
      <source src="/banner-clip.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </div>
</div>

        </div>
      </div>
    </div>
  );
};
export default Jayjay
