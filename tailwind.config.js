export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#00490a", // Verde original
        accent: "#64ffda", // Verde água
        text: {
          primary: "#8892b0", // Cinza-azulado
          secondary: "#ccd6f6", // Cinza-claro
        },
      },
    },
  },
  plugins: [],
};
