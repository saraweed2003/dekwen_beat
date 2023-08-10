/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      Kanit: ["Kanit", "sans-serif"],
    },
  },
  variants: {
    extend: {
      appearance: ["hover:bg-black", "focus"],
    },
  },
  plugins: [],
};
