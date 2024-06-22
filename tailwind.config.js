/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        manrope: ["Manrope", 'sans-serif'],
        cabin: ["Cabin", 'sans-serif'],
        nunito: ["Nunito Sans", 'sans-serif']
      },
      colors: {
        customPrimary: '#42BDD6',
        customHover: '#3AA9C0',
        customViolet: '#5434E0',
        lightGray: '#F3F4F6',
        midGray: '#6E7787',
        customBlack: '#171A1F',
      },
      backgroundColor: {
        btnPrimary: '#42BDD6',
        btnHovered: '#3AA9C0',
        lighGray: '#F3F4F6',

      }
    },
  },
  plugins: [],
};
