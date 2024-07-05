/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: "#f97316",
        primaryDark: "#e86f00",
        lightOrange: "#f1dabf",
        lightGray: "#272c35",
        secondary: "#64748b",
        darkGray: "#1A1F25"
      },
      container: {
        center: true,
        padding: {
         DEFAULT: "1rem",
         sm: "2rem",
         lg: "4rem",
         xl: "5rem",

        }
      },
    },
  },
  plugins: [],
}

