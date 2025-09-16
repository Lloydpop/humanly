import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
   darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sora: ["sora", "sans-serif"],
        inter: ["inter", "sans-serif"],
        ppneue: ["var(--font-ppneue)", "sans-serif"],
      },
      colors: {
        primary: "#FCD2C2",
        secondary: "#D6D3D1",
        primary3: "#EB5017",
        primary2: "#FCB59A",
      },
    },
  },
  plugins: [],
};
export default config;
