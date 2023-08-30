import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "square-bg": "url('/squareShape.svg')",
        "not-found": "url('/notFoundIcon.svg')",
      },
      colors: {
        primaryColor: "#CDF683",
      },
    },
  },
  plugins: [],
};
export default config;
