/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primaryGreen: 'hsl(145 100% 62%)',
        lightGreen:'hsl(145 100% 77%)',
        primaryBlack: 'hsl(0 0% 0%)',
        primaryWhite:'hsl(0 0% 100%)',
        myBg:'hsl(42 36% 95%)',
      },
      fontFamily: {
        'textFont': ['zonaRegular', 'sans-serif'],
        'textLightFont': ['zonaLight', 'sans-serif'],
        'headingFont': ['zonaBold', 'serif'],
        'headingExtraBold': ['zonaExtraBold', 'serif'],
      },
      backgroundImage:{
        'home-pattern': "url('/src/assets/imgs/homeBg.png')"
      },
     // that is animation class
     animation: {
      fade: 'fadeOut 0.3s ease-in-out',
    },

    // that is actual animation
    keyframes: theme => ({
      fadeOut: {
        '0%': { color: theme('colors.transparent') },
        '100%': { color: theme('colors.white') },
      },
    }),
    },
  },
  plugins: [],
}
