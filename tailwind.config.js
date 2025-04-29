import fluid, { extract } from 'fluid-tailwind';
import flowbitePlugin from 'flowbite/plugin';

export default {
  content: {
    files: [
      "./index.html",
      "./src/**/*.{vue,js,ts,jsx,tsx}",
      "./node_modules/flowbite/**/*.js",
      "./node_modules/flowbite-vue/**/*.{js,jsx,ts,tsx}" 
    ],
    extract                                                  
  },
  theme: {
    extend: {
      colors: {
        primary: "#00490a",
        accent: "#64ffda",
        text: {
          primary: "#8892b0",
          secondary: "#ccd6f6",
        },
      },
    },
  },
  plugins: [
    fluid(),
    flowbitePlugin
  ],
};
