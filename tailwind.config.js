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
      'backround-primary': '#031022',
      'background-secondary': '#202443',
      'orange-primary': '#e97b22',
      'orange-secondary': '#B75B1B',
      'white': '#ffffff'
    },
  },
  plugins: [],
}
