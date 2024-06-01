// tailwind.config.js
module.exports = {
  purge: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  //darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      black: '#0F1014', 
    },

  },
  variants: {
    extend: {
      fontFamily: {
        proxima: ['Proxima Nova', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
