/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'gate-and-primary': '#00d8dc',
        'gate-nor-primary': '#a546d4',
        'gate-or-primary': '#7fff00',
        'gate-not-primary': '#fe0000',
        'gate-and-orange': '#ffb34c'
      }
    },
  },
  plugins: [],
};
