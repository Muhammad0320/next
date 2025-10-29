import { nextui } from "@nextui-org/react"; // 1. Import nextui
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    // 2. Add these paths
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    // 3. Add the NextUI path
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  // 4. Add the darkMode property
  darkMode: "class",
  // 5. Add the nextui plugin
  plugins: [nextui()],
};
export default config;
