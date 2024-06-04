/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
          'background-blue': '#202532',
          'light-blue': '#52E0FF',
          'grey-input': '#333333',
          'light-grey': '#424242'
      },
      width: {
        'input-w': '510px'
      }
    },
  },
  plugins: [],
};