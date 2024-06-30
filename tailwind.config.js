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
        'clr-divider': '#202C33',
        'button-bg': '#26353D',
        'button-text': '#8696A0',
        'radio-selected': '#0A332C',
        'text-radio-selected': '#00A884'
      }
    },
  },
  plugins: [],
}
