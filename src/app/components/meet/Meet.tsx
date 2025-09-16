"use client";
import Image from "next/image";
import longArrow from "../../../../public/icons/Arrow.png";
import profile from "../../../../public/img/profile.png";
import Heading from "@/components/heading/heading";
import { LinkButton } from "@/components/linkbutton/linkbutton";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
const Meet = () => {
  const { theme } = useTheme();
  return (
    <div className="flex lg:flex-row flex-col justify-between lg:items-center gap-10">
      <div className="lg:w-[330px] space-y-6">
        <Heading>
          Meet Tunmise <br className="lg:block hidden" />
          Adenuga
        </Heading>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            ease: "linear",
            duration: 1,
            y: { duration: 0.5 },
          }}
          className=" font-[400] overflow-hidden"
        >
          Lorem ipsum dolor sit amet consectetur. Purus sapien odio proin dictum
          in consequat feugiat sed. Sagittis magnis et mi viverra at id suscipit
          porttitor. Est vestibulum condimentum ac quis pellentesque gravida
          diam et. Ac non lacus faucibus eget eget vitae pretium amet vel
        </motion.p>
        <LinkButton href="/about"> More about me</LinkButton>
      </div>
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 100, x: 0 }}
        viewport={{ once: true }}
        transition={{
          ease: "linear",
          duration: 1,
          x: { duration: 0.5 },
        }}
      >
        <Image
          className=" h-[780px] object-contain lg:block hidden -mt-24"
          src={longArrow}
          style={{
            filter: theme === "light" ? `brightness(0) invert(1)` : "",
          }}
          alt="arrow"
        />
      </motion.div>
      <div>
        <div
          data-theme={theme}
          className="w-[320px] h-[320px] rounded-full data-[theme=light]:bg-gray-100 bg-[#1C1917] lg:mx-0 mx-auto relative"
        >
          <motion.div
            initial={{ rotate: -30, x: 50 }}
            whileInView={{ rotate: 0, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 1,
            }}
            className="w-[180px]  h-[330px] bg-primary absolute lg:top-20 top-16 lg:left-3 left-[60px]"
          />

          <Image
            className=" w-full  absolute lg:top-6 top-3 lg:-left-[60px] left-0 "
            src={profile}
            alt="my picture"
          />
        </div>
      </div>
    </div>
  );
};
export default Meet;
