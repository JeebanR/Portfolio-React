/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", // ✅ must be here
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
