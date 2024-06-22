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
      color: {
        customViolet: '#5434E0',
        lightGray: '#9095A0',
        midGray: '#6E7787',
        customBlack: '#171A1F',
      },
      backgroundColor: {
        primary: '#5434E0'
      }
    },
  },
  plugins: [],
};
