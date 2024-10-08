/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors:{
        primary:"#1E0C2F",
        fontColor:"#EC8AB3",
        secondary:"#CC775D",
        textColor:"#E2508D",
        bgFontColor:"#59248E",
        bgColor:"#842ABC",
        btnColored:"#984D9F",
        bgBanner:"#1f0c30f4"
      }
    },
  },
  plugins: [],
};
