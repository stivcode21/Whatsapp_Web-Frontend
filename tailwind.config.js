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
      }
    },
  },
  plugins: [],
}
