/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'clr-bg'       : '#132026', //color de fondo de whatsapp
        'clr-primary'  : '#0BA884',
        'clr-main'     : '#CED1D4',
        'clr-secondary': '#6A747B',
        'clr-accent'   : '#6F8997',
        'clr-divider': '#202C33'
      }
    },
  },
  plugins: [],
}
