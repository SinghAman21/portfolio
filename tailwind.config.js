/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      colors: {
        'terminal-bg': '#0c0c0c',
        'terminal-navbar': '#333333',
      },
      screens: {
        'mobile': '425px', 
        'tablet': '1024px', 
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}

