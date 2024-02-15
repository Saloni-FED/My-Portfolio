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
        "deep-blue": "#010026",
        "dark-gray": "#757575",
        "opaque-black": "rgba(0,0,0,0.35)",
      },
      backgroundImage: (theme) => ({
        "gradient-rainbow":
          "linear-gradient(81.66deg, #00b5ee 7.21%, #ff45a4 45.05%, #ffba00 78.07% )",
      }),
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
