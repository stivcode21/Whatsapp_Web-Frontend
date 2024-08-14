/** @type {import('tailwindcss').Config} */
import { PalleteColors } from "./colors.js"

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: PalleteColors,
      screens: {
        "usm": { "min": "0px", "max" : "640px" }
      },
      animation: {
        "fadeIn": "fadeIn 200ms linear forwards",
        "fadeOut": "fadeOut 200ms ease"
      },
      keyframes: {
        "fadeIn": {
          "0%": { gridTemplateRows: "0fr"},
          "100%": { gridTemplateRows: "1fr"}
        },
        "fadeOut": {
          "0%": { transform: "scale(1)", opacity: "1"},
          "100%": { transform: "scale(0)", opacity: "0"}
        }
      }
    },
  },
  plugins: [],
}
