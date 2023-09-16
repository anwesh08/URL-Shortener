/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        lightBlue: "#AED2FF",
        fadeBlue: "#E4F1FF",
        lightPurple: "#9400FF",
        darkBlue: "#27005D"
      },
    },
  },
  plugins: [],
};
