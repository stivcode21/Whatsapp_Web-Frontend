/** @type {import('tailwindcss').Config} */
import { PalleteColors } from './colors'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: PalleteColors
    },
  },
  plugins: [],
}
