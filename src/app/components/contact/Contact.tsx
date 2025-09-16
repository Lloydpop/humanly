"use client";
import Heading from "@/components/heading/heading";
import { LinkButton } from "@/components/linkbutton/linkbutton";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { Dividers } from "@/components/dividers/divider";
const Contact = () => {
  const { theme } = useTheme();
  return (
    <div>
      <Dividers />
      <div
        className="flex lg:flex-row flex-col items-center justify-between pt-10"
        id="contact"
      >
        <Heading
          color=""
          theme={theme}
          className="lg:w-[450px] lg:text-start text-center lg:mb-0 mb-8"
        >
          Got an idea or want to collaborate?
        </Heading>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            ease: "linear",
            duration: 1,
            y: { duration: 0.5 },
          }}
        >
          <LinkButton
            data-theme={theme}
            className="border-primary data-[theme=light]:border-primary3 border rounded-3xl lg:w-fit px-5 py-1"
          >
            Send Message
          </LinkButton>
          <div
            data-theme={theme}
            className="flex items-center gap-10 data-[theme=light]:text-primary3 text-primary2 font-[600] mt-6 justify-center"
          >
            <a className="">Github</a>
            <a>Linkedin</a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
export default Contact;
