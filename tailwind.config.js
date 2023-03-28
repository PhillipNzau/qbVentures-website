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
      }
    },
  },
  plugins: [],
}
