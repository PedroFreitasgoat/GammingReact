/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#12102a",
      },
       fontFamily: {},
       
       Container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          md: "2rem",
        }
       },
    },
  },
  plugins: [],
}