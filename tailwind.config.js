/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
      heading: ["Poppins", "sans-serif"],
    },
    extend: {
      animation: {
        fadeIn: "fadeIn 1s ease-in-out",
        cursor: "cursor .6s linear infinite alternate",
        type: "type 1.8s ease-out .8s 1 normal both",
        "type-reverse": "type 1.8s ease-out 0s infinite alternate-reverse both",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        type: {
          "0%": { width: "0ch" },
          "5%, 10%": { width: "1ch" },
          "15%, 20%": { width: "3ch" },
          "25%, 30%": { width: "5ch" },
          "35%, 40%": { width: "7ch" },
          "45%, 50%": { width: "9ch" },
          "55%, 60%": { width: "11ch" },
          "65%, 70%": { width: "13ch" },
          "75%, 80%": { width: "15ch" },
          "85%, 90%": { width: "16ch" },
          "95%": { width: "17ch" },
        },
        cursor: {
          "0%, 40%": { opacity: 1 },
          "60%, 100%": { opacity: 10 },
        },
      },
      colors: {
        primary: '#FF0303',
        secondary: '#4E6E81',
      },
      backgroundImage: {
        hero: "url('../src/asset/floor-tile.png')",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: false,
  },
}