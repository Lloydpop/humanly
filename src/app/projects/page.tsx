'use client';

import Header from "@/components/header/Header";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import Footer from "../components/footer/Footer";
import { useRouter } from "next/navigation";
import project1 from '../../../public/img/thumbnail-1.jpg'
import project2 from '../../../public/img/tales.jpg'
import project3 from '../../../public/img/jay.jpg'
import hoverJay from '../../../public/img/jay-2.jpg'
import project4 from '../../../public/img/ads.jpg'
import project5 from '../../../public/img/mama.jpg'
import project6 from '../../../public/img/GTCO.jpg'
// Static images
const dummyImages = [
  project1.src,
  project2.src,
   project3.src,
hoverJay.src,
  project4.src,
  project5.src,
 project6.src,
  "https://picsum.photos/id/1084/800/600",
  "https://picsum.photos/id/1090/800/600",
  "https://picsum.photos/id/1100/800/600",
];

// Actual project data
const projectsData = [
  { title: "Table Of Kings", year: 2025, description: "A serene mountain retreat.", image: dummyImages[0], hoverImage: dummyImages[0] },
  { title: "Tales Of Ramadan", year: 2025, description: "Urban exploration project.", image: dummyImages[1], hoverImage: dummyImages[1] },
  { title: "Jay Jay", year: 2025, description: "Innovative tech solutions.", image: dummyImages[2], hoverImage: dummyImages[3] },
  { title: "SimiSola", year: 2025, description: "Modern art installations.", image: dummyImages[4], hoverImage: dummyImages[4] },
  { title: "Mama Do Good", year: 2024, description: "Scaling businesses globally.", image: dummyImages[5], hoverImage: dummyImages[5] },
  { title: "GTCO", year: 2025, description: "Community engagement projects.", image: dummyImages[6], hoverImage: dummyImages[6] },
  { title: "Food Festival", year: 2020, description: "Celebrating culinary delights.", image: dummyImages[3], hoverImage: dummyImages[2] },
  { title: "Travel Diaries", year: 2023, description: "Documenting unique journeys.", image: dummyImages[5], hoverImage: dummyImages[4] },
  { title: "Fashion Forward", year: 2021, description: "Innovative fashion campaigns.", image: dummyImages[7], hoverImage: dummyImages[6] },
];

const Projects = () => {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  return (
    <div className="font-ppneue">
      <Header />
      <h1 className="text-[150px] text-center font-bold uppercase font-ppneue tracking-tighter">
        Projects
      </h1>

      {/* Controls */}
      <div className="px-10 text-xs font-[500] flex items-center justify-between mb-10">
        <div className="flex items-center gap-2">
          <div className="w-[50px] h-[50px] font-[500] text-xl rounded-full flex justify-center items-center bg-primary3 text-white">
            {projectsData.length}
          </div>
          <div className="flex justify-center text-[18px] items-center gap-5 px-4 cursor-pointer text-black font-[500] font-ppneue w-[120px] h-[50px] rounded-[60px] bg-white shadow-lg">
            <p onClick={() => setViewMode("grid")} className={`cursor-pointer ${viewMode === "grid" ? "text-primary3" : ""}`}>Grid</p>
            <p onClick={() => setViewMode("list")} className={`cursor-pointer ${viewMode === "list" ? "text-primary3" : ""}`}>List</p>
          </div>
        </div>
      </div>

      {/* Projects */}
      <motion.div
        className={`grid ${viewMode === "grid" ? "grid-cols-12 gap-6 px-10" : "grid-cols-1"}`}
        layout
      >
        {projectsData.map((item, i) => (
          <ParallaxCard
            key={i}
            title={item.title}
            year={item.year}
            description={item.description}
            image={item.image}
            hoverImage={item.hoverImage}
            viewMode={viewMode}
          />
        ))}
       
      </motion.div>
            <Footer/>
    </div>
  );
};

export default Projects;

interface ParallaxCardProps {
  title: string;
  year: number;
  description?: string; // optional
  image: string;
  hoverImage: string;
  viewMode: "grid" | "list";
}

const ParallaxCard = ({ title, year, description, image, hoverImage, viewMode }: ParallaxCardProps) => {
  const [hovered, setHovered] = useState(false);
  const {push}=useRouter()
  return (
    <motion.div
      onClick={() => push(`/projects/${title.replace(/\s+/g, "")}`)}
      className={`relative cursor-pointer ${viewMode==='grid' && 'overflow-hidden'} group ${
        viewMode === "grid"
          ? "col-span-4 h-[300px]"
          : "flex items-center  border-t rounded-none dark:border-[#ffffff73] border-[#000] px-6 h-[150px]"
      }`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >

      {viewMode === "grid" && (
        <>
          <motion.div
            className="absolute inset-0"
            animate={{ scale: hovered ? 1.05 : 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <Image
              src={hovered ? hoverImage : image}
              alt={title}
              fill
              className="object-cover"
            />
          
          </motion.div>
       
          <motion.div
            className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center"
            animate={{ backgroundColor: hovered ? "rgba(0,0,0,0.6)" : "rgba(0,0,0,0.4)" }}
            transition={{ duration: 0.3 }}
          >
            <motion.h1
              className="text-white font-ppneue uppercase text-[24px] px-6 py-2 rounded-lg"
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: hovered ? 0 : -50, opacity: hovered ? 1 : 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              {title}
            </motion.h1>
               <p className="absolute text-xs uppercase flex items-center tracking-tighter justify-between p-4 font-[700] font-inter w-full dark:bg-white bg-black text-white bottom-0 dark:text-black">
                <span>{title}</span>
                <span className="text-primary3">[{year}]</span>
               </p>
          </motion.div>
        </>
      )}

      {/* List view */}
      {viewMode === "list" && (
        <>
{hovered && (
  <motion.div
    className="w-[300px] h-[300px] top-0 z-[1000] absolute left-[50%] flex-shrink-0 mr-6"
    initial={{ 
      y: 60, 
      scale: 0.95, 
      rotateX: 10, 
      rotateY: -10, 
      opacity: 0 
    }}
    animate={{ 
      y: 0, 
      scale: 1, 
      rotateX: 0, 
      rotateY: 0, 
      opacity: 1 
    }}
    exit={{ 
      y: 40, 
      scale: 0.9, 
      opacity: 0 
    }}
    transition={{ 
      duration: 0.6, 
      ease: [0.25, 0.1, 0.25, 1] 
    }}
    style={{ perspective: 1000 }} 
  >
    <Image 
      src={hoverImage} 
      alt={title} 
      fill 
      className="object-cover shadow-xl" 
    />
  </motion.div>
)}

          <div className="flex-1 flex justify-between items-center h-full">
            <h2 className="text-black dark:text-white font-ppneue font-[500] uppercase text-[50px]">{title}</h2>
            <p className="text-black dark:text-gray-200 text-[30px] mt-1">[ {year} ]</p>
          </div>
        </>
      )}

    </motion.div>
  );
};
