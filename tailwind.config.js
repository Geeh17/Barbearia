/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: '#0F0D0C',
        ivory: '#F5EDE1',
        ivory2: '#EBE1D0',
        brass: '#B8862E',
        brassLight: '#D9AE5C',
        wine: '#7A2331',
        graphite: '#3A3733',
        smoke: '#6B655C',
      },
      fontFamily: {
        display: ['"Fraunces"', 'serif'],
        body: ['"Work Sans"', 'sans-serif'],
      },
      backgroundImage: {
        'razor-stripe': 'repeating-linear-gradient(115deg, #7A2331 0px, #7A2331 14px, #F5EDE1 14px, #F5EDE1 28px, #B8862E 28px, #B8862E 42px)',
      },
    },
  },
  plugins: [],
}
