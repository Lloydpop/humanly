"use client";
import Heading from "@/components/heading/heading";
import image1 from "../../../public/img/project-1.png";
import Image from "next/image";
import { Dividers } from "@/components/dividers/divider";
import Contact from "../components/contact/Contact";
import { Pagination } from "@/components/pagination/Pagination";
import { useState } from "react";
import { useRouter } from "next/navigation";
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
const Blogs = () => {
  const { theme } = useTheme();
  const [page, setPage] = useState<number>(1);
  const router = useRouter();
  return (
    <div className="space-y-5 lg:px-36 px-8 mt-12">
      <div>
        <Heading className="  lg:text-[48px]  text-[36px]" theme={theme}>
          Blog
        </Heading>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            ease: "linear",
            duration: 0.5,
            y: { duration: 0.5 },
          }}
          className="py-12 text-[18px] font-inter"
        >
          A list of insightful and informative articles i have written across
          all part of software development
        </motion.p>
      </div>
      <Dividers className="py-0 border-t !border-b-0" />
      <div className="space-y-6">
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
              duration: 0.5,
              y: { duration: 0.5 },
            }}
            onClick={() => {
              router.push(`/blog/${encodeURIComponent(i)}`);
            }}
            key={i}
            className="flex items-center gap-4  px-6 py-2 rounded-lg w-fit cursor-pointer"
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
      <div className="flex justify-end">
        <Pagination
          totalItems={12}
          handlePageClick={setPage}
          currentPage={page}
        />
      </div>
      <div className="pt-32">
        <Contact />
      </div>
    </div>
  );
};
export default Blogs;
