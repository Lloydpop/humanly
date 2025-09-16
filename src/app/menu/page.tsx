"use client";
import Link from "next/link";
import ThemeSwitcher from "@/components/provider/ThemeSwitcher";
import Logo from "@/components/logo/Logo";
import distorted from "../../../public/img/banner-3.jpg";
import { motion } from "framer-motion";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import Time from "@/components/Time/Time";
import Footer from "../components/footer/Footer";
import { FlipText } from "@/components/flip-text/FlipText";

const MenuPage = () => {
  const pathname = usePathname();
  const { back, push } = useRouter();
  const isActive = (href: string) => pathname.startsWith(href);

  const menu_items = [
    { title: "About", href: "/about" },
    { title: "Projects", href: "/projects" },
    { title: "This Is Art", href: "/art" },
     { title: "Contact", href: "/contact" },
  ];

  const glitchFrames = [
    { x: 0, y: 0, opacity: 1, filter: "none", delay: 0 },
    {
      x: -8,
      y: -2,
      opacity: 0.5,
      filter: "contrast(180%) hue-rotate(-15deg)",
      delay: 0.15,
    },
    {
      x: 6,
      y: 3,
      opacity: 0.5,
      filter: "contrast(180%) hue-rotate(15deg)",
      delay: 0.25,
    },
  ];

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="overflow-hidden"
    >
      <div className={`h-full`}>
        <div className="flex justify-between items-center gap-4 px-10 py-5">
          <Logo
            onClick={() => {
              push("/home");
            }}
          />
          <div className="flex items-center gap-6">
            <ThemeSwitcher />
            <p
              onClick={() => back()}
              className="tracking-tighter  cursor-pointer text-xs font-[500]"
            >
              [ CLOSE ]
            </p>
          </div>
        </div>

        <div className="">
          <motion.div
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="relative overflow-hidden"
          ></motion.div>
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
            className="col-span-4"
          >
            <div className="px-10 flex justify-between">
              <div>
                {menu_items?.map((link, i) => (
                  <motion.div
                    key={i}
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{
                      duration: 0.6,
                      delay: 0.5 + i * 0.1,
                      ease: "easeOut",
                    }}
                    className="w-full"
                  >
                   <Link
  href={link.href}
  className={`
    pb-1 text-[70px] font-inter uppercase font-extralight tracking-[-3px] 
    leading-[1] 
    ${
      isActive(link.href)
        ? "text-primary3 dark:text-primary2"
        : "text-black dark:text-white"
    }
  `}
>
   <FlipText text={link.title}/>
</Link>

                  </motion.div>
                ))}
              </div>
              <motion.div
                initial={{ y: 80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="h-[300px] w-[300px]  overflow-hidden relative"
              >
                {glitchFrames.map((frame, i) => (
                  <motion.div
                    key={i}
                    animate={{
                      x: [
                        frame.x,
                        frame.x + (i + 1) * 3,
                        frame.x - (i + 1) * 2,
                        frame.x,
                      ],
                      y: [
                        frame.y,
                        frame.y - (i + 1) * 2,
                        frame.y + (i + 1) * 2,
                        frame.y,
                      ],
                      opacity: [
                        frame.opacity,
                        frame.opacity * 0.8,
                        frame.opacity,
                      ],
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 3,
                      ease: "easeInOut",
                      delay: frame.delay,
                    }}
                    style={{ filter: frame.filter }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={distorted}
                      alt="glitch"
                      fill
                      className="object-cover "
                      priority
                    />
                  </motion.div>
                ))}
              </motion.div>

              <div className="text-right">
                <p className="uppercase font-bold">Location</p>
                <div className="mt-3">
                  <p>Lagos, Nigeria</p>
                </div>
                <Time />
                <div className="mt-10">
                  <p className="uppercase font-bold">Get in touch</p>
                  <div className="flex gap-1 mt-3 items-center justify-end">
                    Send a mail to
                    <a
                      href="mailto:chale"
                      className="bg-black dark:bg-white px-3 py-1 dark:text-black text-white"
                    >
                      chale@gmail.com
                    </a>
                  </div>
                  <div className="mt-10">
                    <p className="uppercase font-bold">Socials</p>
                    <div className="flex justify-end gap-4 mt-3">
                      {[
                        { name: "Twitter", href: "https://twitter.com" },
                        { name: "Instagram", href: "https://instagram.com" },
                      ].map((link, i) => (
                        <motion.a
                          key={i}
                          href={link.href}
                          target="_blank"
                          rel="noreferrer"
                          className="relative w-[120px]  h-[50px] flex items-end justify-end text-sm font-bold rounded-full border border-black dark:border-[#ffffff5d] overflow-hidden"
                          whileHover={{ scaleX: 1 }}
                          transition={{ duration: 0.6, ease: "easeInOut" }}
                        >
                          <span className="absolute inset-0 flex items-center justify-center backface-hidden">
                            {link.name}
                          </span>

                          <span className="absolute inset-0 flex items-center justify-center backface-hidden rotate-y-180">
                            {link.name}
                          </span>
                        </motion.a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
       <div className="mt-16">
         <Footer />
       </div>
    </motion.nav>
  );
};
export default MenuPage;
