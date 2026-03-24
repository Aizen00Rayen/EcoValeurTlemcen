/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        forest: "#1B4332",
        "green-mid": "#52B788",
        kraft: "#F5F0E8",
        brown: "#8B5E3C",
        "off-white": "#FAFAF8",
      },
      fontFamily: {
        heading: ['"Playfair Display"', "serif"],
        body: ['"DM Sans"', "sans-serif"],
        arabic: ['"Noto Kufi Arabic"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
