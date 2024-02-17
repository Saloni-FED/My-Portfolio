/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  mode: "jit",
  theme: {
    extend: {
      color: {
        blue: "#2CBCE9",
        red: "#DC4492",
        yellow: "#FDCC49",
        gray: "#EDEDED",
        dark_blue: "#010026",
        dark_gray: "#757575",
        opaque_black: "rgba(0,0,0,0.35)",
      },
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
        opensans: ["Open Sans", "serif"],
      },
    },
    screens:{
      xs:'490px',
      sm:'768px',
      md:'1060px'
    }
  },
  plugins: [],
};
