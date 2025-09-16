"use client";
import Heading from "@/components/heading/heading";
import image1 from "../../../../public/img/project-1.png";
import image2 from "../../../../public/img/project-2.png";
import image3 from "../../../../public/img/project-3.png";
import Image from "next/image";
import { GlobeAltIcon } from "@heroicons/react/24/outline";
import { LinkButton } from "@/components/linkbutton/linkbutton";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
const articles = [
  {
    imgUrl: image1,
    title: "How to Run Localhost on Your Mobile Phone",
    date: "Jan 29, 2023",
    duration: "3 mins read",
    links: [
      {
        href: "/github",
      },
    ],
  },

  {
    imgUrl: image1,
    title: "How to Run Localhost on Your Mobile Phone",
    date: "Jan 29, 2023",
    duration: "3 mins read",
    links: [
      {
        href: "/github",
      },
    ],
  },
  {
    imgUrl: image1,
    title: "How to Run Localhost on Your Mobile Phone",
    date: "Jan 29, 2023",
    duration: "3 mins read",
    links: [
      {
        href: "/github",
      },
    ],
  },
  {
    imgUrl: image1,
    title: "How to Run Localhost on Your Mobile Phone",
    date: "Jan 29, 2023",
    duration: "3 mins read",
    links: [
      {
        href: "/github",
      },
    ],
  },
  {
    imgUrl: image1,
    title: "How to Run Localhost on Your Mobile Phone",
    date: "Jan 29, 2023",
    duration: "3 mins read",
    links: [
      {
        href: "/github",
      },
    ],
  },
];
const Articles = () => {
  const { theme } = useTheme();
  return (
    <div className="space-y-5">
      <Heading className=" !leading-snug">Featured Articles</Heading>

      <div className="space-y-6 ">
        {articles.map((item, i) => (
          <motion.div
            whileHover={{
              scale: 1.05,
              backgroundColor: "#ffffff18",
              transition: { duration: 0.5 },
              overflow: "visible",
            }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              ease: "linear",
              duration: 1,
              y: { duration: 0.5 },
            }}
            key={i}
            className="flex items-center overflow-hidden gap-4  px-6 py-2 rounded-lg w-fit cursor-pointer"
          >
            <div>
              <Image
                className="w-[85px] h-[73px] object-contain"
                src={item.imgUrl}
                alt={`article image ${i + 1}`}
              />
            </div>
            <div>
              <h3 className="font-sora font-[600] text-[20px]">{item.title}</h3>
              <p
                data-theme={theme}
                className="data-[theme=light]:text-primary3 text-primary2 font-[600] flex items-center gap-2"
              >
                <span>{item.date}</span>
                <span className="w-1 h-1 rounded-full block bg-[#FCB59A]"></span>
                <span>{item.duration}</span>
              </p>
            </div>
          </motion.div>
        ))}
      </div>
      <LinkButton href="/blog" className="justify-center">
        More Articles
      </LinkButton>
    </div>
  );
};
export default Articles;
