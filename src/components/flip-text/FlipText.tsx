import { motion } from "framer-motion";
import { useTheme } from "next-themes";

type FlipTextProps = {
  text: string;
  className?: string;
  color?: string; 
  baseColor?: string;
};

const DURATION = 0.25;
const STAGGER = 0.025;

export const FlipText = ({ text, className = "", color, baseColor = "currentColor" }: FlipTextProps) => {

  const {theme}=useTheme()
     color= theme==='dark'?"#fff":'#000'
  return (
    <motion.span
      initial="initial"
      whileHover="hovered"
      className={`relative inline-block overflow-hidden font-lausanne whitespace-nowrap ${className}`}
      style={{ lineHeight: 1, color: baseColor }}
    >
      <div>
        {text.split("").map((char, i) => (
          <motion.span
            key={`top-${i}`}
            variants={{
              initial: { y: 0, color: baseColor },
              hovered: { y: "-100%", color: color },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
          >
            {char}
          </motion.span>
        ))}
      </div>

      <div className="absolute inset-0">
        {text.split("").map((char, i) => (
          <motion.span
            key={`bottom-${i}`}
            variants={{
              initial: { y: "100%", color: baseColor },
              hovered: { y: 0, color: color },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
          >
            {char}
          </motion.span>
        ))}
      </div>
    </motion.span>
  );
};
