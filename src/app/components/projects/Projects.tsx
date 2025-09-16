"use client";
import Heading from "@/components/heading/heading";
import image1 from "../../../../public/img/project-1.png";
import image2 from "../../../../public/img/project-2.png";
import image3 from "../../../../public/img/project-3.png";
import Image, { StaticImageData } from "next/image";
import { FiGithub, FiGlobe } from "react-icons/fi";
import { LinkButton } from "@/components/linkbutton/linkbutton";
import { FC, ReactNode } from "react";
import { motion } from "framer-motion";
import { Dividers } from "@/components/dividers/divider";
interface ProjectLink {
  href: string;
  title: string;
  icon: ReactNode;
}

interface Project {
  imgUrl: StaticImageData;
  tools: string[];
  title: string;
  description: string;
  links: ProjectLink[];
}

const projects: Project[] = [
  {
    imgUrl: image1,
    tools: ["Next Js", "React Native", "TypeScript"],
    title: "Tumni soon 30 lol",
    description:
      "Lorem ipsum dolor sit amet consectetur. Eu lectus commodo pharetra pellentesque. Habitant.",
    links: [
      {
        href: "/github",
        title: "github",
        icon: <FiGithub className="w-5 h-5" />,
      },
      {
        href: "/website",
        title: "website",
        icon: <FiGlobe className="w-5 h-5" />,
      },
    ],
  },
  {
    imgUrl: image3,
    tools: ["Next Js", "React Native", "TypeScript"],
    title: "Tumni soon 30 lol",
    description:
      "Lorem ipsum dolor sit amet consectetur. Eu lectus commodo pharetra pellentesque. Habitant.",
    links: [
      {
        href: "/github",
        title: "github",
        icon: <FiGithub className="w-5 h-5" />,
      },
      {
        href: "/website",
        title: "website",
        icon: <FiGlobe className="w-5 h-5" />,
      },
    ],
  },
  {
    imgUrl: image2,
    tools: ["Next Js", "React Native", "TypeScript"],
    title: "Tumni soon 30 lol",
    description:
      "Lorem ipsum dolor sit amet consectetur. Eu lectus commodo pharetra pellentesque. Habitant.",
    links: [
      {
        href: "/github",
        title: "github",
        icon: <FiGithub className="w-5 h-5" />,
      },
      {
        href: "/website",
        title: "website",
        icon: <FiGlobe className="w-5 h-5" />,
      },
    ],
  },
  {
    imgUrl: image1,
    tools: ["Next Js", "React Native", "TypeScript"],
    title: "Tumni soon 30 lol",
    description:
      "Lorem ipsum dolor sit amet consectetur. Eu lectus commodo pharetra pellentesque. Habitant.",
    links: [
      {
        href: "/github",
        title: "github",
        icon: <FiGithub className="w-5 h-5" />,
      },
      {
        href: "/website",
        title: "website",
        icon: <FiGlobe className="w-5 h-5" />,
      },
    ],
  },
];

const Projects = () => {
  return (
    <div className="space-y-8">
      <div className="flex justify-between px-6 w-fit rounded-xl bg-white shadow-lg">
        <p>Grid</p>
        <p>List</p>
      </div>
      <Heading className="text-center !leading-snug">Featured Project</Heading>
      <div
        data-theme="light"
        className="grid grid-cols-12 lg:gap-10 gap-5 data-[theme=light]:text-white"
      >
        {projects.map((item, i) => (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              ease: "linear",
              duration: 1,
              y: { duration: 0.5 },
            }}
            key={i}
            className="bg-[#110F0E] lg:col-span-6 col-span-12 rounded-lg overflow-hidden"
          >
            <Image src={item.imgUrl} alt={`project image ${i + 1}`} />
            <div className="p-4 space-y-3">
              <div className="flex items-center gap-1">
                {item.tools.map((tool, i) => (
                  <span
                    key={i}
                    className="flex items-center w-fit justify-center border text-[14px] font-[500] border-[#ffffff44] bg-[#ffffff0e] rounded-lg px-3 h-[29px]"
                  >
                    {tool}
                  </span>
                ))}
              </div>
              <h3 className="font-sora font-[600] text-[20px]">{item.title}</h3>
              <p className="font-[400]">{item.description}</p>
              <div className="flex items-center gap-6 py-3">
                {item.links.map((link, i) => (
                  <a
                    key={i}
                    className="capitalize text-[14px] font-[500] text-primary2 flex items-center gap-2"
                    target="_blank"
                    rel="noreferrer"
                    href={link.href}
                  >
                    {link.icon} {link.title}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      <Dividers className="pt-10" />
    </div>
  );
};

export default Projects;
