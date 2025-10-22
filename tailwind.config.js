/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0077b6',
        secondary: '#00b4d8',
        accent: '#caf0f8',
      },
    },
  },
  plugins: [],
}
