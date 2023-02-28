/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      'backgroundImage':{
        'landing': "url('./assets/images/background_image.webp')"
      }
    },
    colors: {
      'background-primary': '#031022',
      'background-secondary': '#202443',
      'orange-primary': '#D26E1D',
      'orange-light': '#e97b22',
      'brown': '#5D2700',
      'purple': '#20161B',
      'white': '#ffffff'
    },
  },
  plugins: [],
}
