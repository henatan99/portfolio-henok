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
        lightText: '#9095A0',

        customBlue: '#1E3A8A',
        customGreen: '#10B981',
        customPink: '#EC4899',
        customPurple: '#8B5CF6',
        customOrange: '#F97316',
        customRed: '#EF4444',
        customTeal: '#14B8A6',
        customYellow: '#F59E0B',
        customIndigo: '#6366F1',
        heading1: '#42BDD6'
      },
      backgroundColor: {
        btnPrimary: '#42BDD6',
        btnHovered: '#3AA9C0',
        lighGray: '#F3F4F6',
        customBlueBg: 'rgb(1 132 255 / var(--tw-bg-opacity))'
      },
      boxShadow: {
        customCard: '0 0 2px rgba(0, 0, 0, 0.1)'
      },
      keyframes: {
        floating: {
          '0%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
          '100%': { transform: 'translateY(0)' },
        },
        spinning: {
          '0%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(20deg)' },
          '50%': { transform: 'rotate(0deg)' },
          '75%': { transform: 'rotate(-20deg)' },
          '100%': { transform: 'rotate(0deg)' },
        },
      },
      animation: {
        floating: 'floating 3s ease-in-out infinite',
        spinning: 'spinning 10s linear infinite',
      },
    },
  },
  plugins: [],
};
