"use client";
import Heading from "@/components/heading/heading";
import { motion } from "framer-motion";
const Stack = () => {
  const stacks = [
    "Javascript",
    "React",
    "NextJS",
    "Vue",
    "Typescript",
    "Tailwind",
    "Bootstrap",
    "React Native",
    "Redux / Redux Toolkit",
    "Python",
    "Figma",
    "Java",
    "GatsbyJS",
    "Svelte",
    "SCSS",
    "Antd",
    "Chakra",
    "Django",
    "GraphQL",
    "Electron",
    "Photoshop",
    "PostgreSQL",
    "Supabase",
  ];
  return (
    <div className="space-y-6">
      <Heading>Stack</Heading>
      <div className="flex items-center lg:gap-x-10 gap-x-4 gap-y-9 flex-wrap">
        {stacks.map((item, i) => (
          <motion.span
            initial={{ translateY: 100, y: 50 }}
            whileInView={{ translateY: 0, y: 0 }}
            viewport={{ once: true }}
            transition={{
              ease: "linear",
              duration: 1,
              y: { duration: 0.5 },
            }}
            key={i}
            className="lg:text-[24px] text-[18px]"
          >
            {item}
          </motion.span>
        ))}
      </div>
    </div>
  );
};
export default Stack;
