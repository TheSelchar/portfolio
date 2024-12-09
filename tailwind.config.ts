import type { Config } from "tailwindcss";
import plugin from 'tailwindcss/plugin';

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      textColor: {
        DEFAULT: "#1f2937",
      },
      backgroundColor: {
        'custom-gray': '#e6e6e6',
      },
    },
  },
  plugins: [
    require("daisyui"),
    plugin(({ addBase }) => {
      addBase({
        'h1, h2, h3, h4, h5, h6': { 
          color: '#1f2937',
          fontWeight: '500'
        },
        'p, span, div': {
          color: '#1f2937',
        },
        '.text-muted': {
          color: '#4b5563',
        },
        'label': {
          color: '#1f2937',
        }
      })
    })
  ],
  daisyui: {
    themes: ["lofi"],
  },
};

export default config;
