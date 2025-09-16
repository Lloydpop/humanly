"use client";
import Contact from "@/app/components/contact/Contact";
import { Dividers } from "@/components/dividers/divider";
import Heading from "@/components/heading/heading";
import { LinkButton } from "@/components/linkbutton/linkbutton";
import { useTheme } from "next-themes";
import { useState } from "react";
import blog1 from "../../../../public/img/blog-1.png";
import blog2 from "../../../../public/img/blog-2.png";
import blog3 from "../../../../public/img/blog-3.png";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
const BlogDetails = () => {
  const { theme } = useTheme();
  const [active, setActive] = useState<number>(0);
  const router = useRouter();
  const details = {
    courses: ["javascript", "react", "mobile"],
    time: "3 mins read • Jan 29th, 2023.",
    scheme: [
      "Acceptance of Terms of Use Agreement",
      "Eligibility & Member Account",
      "Your Liability",
      "Fees and Charges",
      "Safety: Your interactions with others",
      "No Warranties",
      "Links and Third Party Content",
    ],
    details: [
      {
        imageUrl: blog1,
        title:
          "Step 2: Lorem ipsum dolor sit amet consectetur. Donec posuere imperdiet et arcu. Ut mi.",
        descriptions: [
          "Lorem ipsum dolor sit amet consectetur. In porttitor rutrum in massa ultricies. Nunc tellus rhoncus risus mattis amet lectus quis ultricies. Ut nunc eleifend lectus eget posuere non ipsum. Ac vitae bibendum egestas ut. Eu diam in massa feugiat ultrices dui sem aliquam. Neque libero in velit mauris. Quam eu tellus pharetra quam sem nulla pellentesque aliquam eget. Dolor etiam sed eget lacus magna.",
          "Lorem ipsum dolor sit amet consectetur. In porttitor rutrum in massa ultricies. Nunc tellus rhoncus risus mattis amet lectus quis ultricies. Ut nunc eleifend lectus eget posuere non ipsum. Ac vitae bibendum egestas ut. Eu diam in massa feugiat ultrices dui sem aliquam. Neque libero in velit mauris. Quam eu tellus pharetra quam sem nulla pellentesque aliquam eget. Dolor etiam sed eget lacus magna.",
        ],
      },
      {
        imageUrl: blog2,
        title:
          "Step 1: Lorem ipsum dolor sit amet consectetur. Donec posuere imperdiet et arcu. Ut mi.",
        descriptions: [
          "Lorem ipsum dolor sit amet consectetur. In porttitor rutrum in massa ultricies. Nunc tellus rhoncus risus mattis amet lectus quis ultricies. Ut nunc eleifend lectus eget posuere non ipsum. Ac vitae bibendum egestas ut. Eu diam in massa feugiat ultrices dui sem aliquam. Neque libero in velit mauris. Quam eu tellus pharetra quam sem nulla pellentesque aliquam eget. Dolor etiam sed eget lacus magna.",
          "Lorem ipsum dolor sit amet consectetur. In porttitor rutrum in massa ultricies. Nunc tellus rhoncus risus mattis amet lectus quis ultricies. Ut nunc eleifend lectus eget posuere non ipsum. Ac vitae bibendum egestas ut. Eu diam in massa feugiat ultrices dui sem aliquam. Neque libero in velit mauris. Quam eu tellus pharetra quam sem nulla pellentesque aliquam eget. Dolor etiam sed eget lacus magna.",
        ],
      },
      {
        imageUrl: blog3,
      },
    ],
  };
  return (
    <div className="lg:px-36 px-8 mt-12 space-y-6">
      <LinkButton
        leftIcon={<ArrowLeftIcon className="w-5 h-5" />}
        rightIcon=""
        href="/blog"
      >
        Back
      </LinkButton>

      <div>
        <Heading className="text-[34px]">
          Lorem ipsum dolor sit amet consectetur. Laoreet id sit ac.
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
          className="mt-5 leading-[30px]"
        >
          Lorem ipsum dolor sit amet consectetur. Gravida nunc diam est feugiat
          imperdiet facilisi suspendisse amet. Ridiculus nibh vulputate egestas
          volutpat arcu non at. Facilisis feugiat arcu lobortis nunc. At aliquam
          at nulla rhoncus. Viverra ante nibh.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            ease: "linear",
            duration: 0.5,
            y: { duration: 0.5 },
          }}
          data-theme={theme}
          className=" flex  gap-5 lg:flex-row flex-col justify-between lg:items-center font-[500] mt-6 text-primary2 data-[theme=light]:text-primary3"
        >
          <p
            className="text-primary2 data-[theme=light]:text-gray-800"
            data-theme={theme}
          >
            {details.time}
          </p>
          <motion.ul className="flex items-center gap-3">
            {details.courses.map((course, i) => (
              <motion.li
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  ease: "linear",
                  duration: 0.5,
                  y: { duration: 0.5 },
                }}
                data-theme={theme}
                className="bg-[#1C1917] data-[theme=light]:bg-gray-100 px-2 py-1 rounded-xl text-[14px]"
                key={i}
              >
                #{course}
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
        <Dividers className="pt-10" />
        <aside className="mt-12 grid grid-cols-12 lg:gap-24">
          <motion.ol
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              ease: "linear",
              duration: 0.5,
              y: { duration: 0.5 },
            }}
            className="space-y-5 col-span-4 lg:block hidden"
          >
            {details.scheme?.map((item, i) => (
              <li
                data-theme={theme}
                onClick={() => {
                  setActive(i);
                }}
                className={`cursor-pointer ${
                  active === i
                    ? "text-primary2 data-[theme=light]:text-primary3 font-[600]"
                    : ""
                }`}
                key={i}
              >
                {i + 1}. {item}
              </li>
            ))}
          </motion.ol>
          <div className=" lg:col-span-8 col-span-12">
            {details.details.map((detail, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  ease: "linear",
                  duration: 0.5,
                  y: { duration: 0.5 },
                }}
              >
                <Image
                  className="lg:w-[700px]"
                  src={detail.imageUrl}
                  alt="course image"
                />
                <h4 className="mt-10 font-[600] text-[24px] leading-[32px]">
                  {detail.title}
                </h4>
                <div className="mt-6">
                  {detail.descriptions?.map((paragraph, i) => (
                    <p className="mb-8" key={i}>
                      {paragraph}
                    </p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </aside>
      </div>
      <div className="pt-16">
        <Contact />
      </div>
    </div>
  );
};
export default BlogDetails;
