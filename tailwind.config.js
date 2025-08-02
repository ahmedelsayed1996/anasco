/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        sm: "600px",
        md: "728px",
        lg: "1000px",
        xl: "1080px",
        "2xl": "1536px",
      },
    },
    extend: {
      colors: {
        primary: "#9D6CFF",
        redColor: "#FE365D",
        secondary: "#4E008A",
        bgMainColor: "#00758A",
        bgGrayColor: "#F5F5F5",
      },
    },
    plugins: [],
  },
};
