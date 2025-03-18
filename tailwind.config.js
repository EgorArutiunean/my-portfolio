/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',  // <-- добавляем это
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
      extend: {},
    },
    plugins: [],
  }
  