/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-dark': 'rgba(2, 6, 12, 0.75)', // Custom RGBA color
      },
    },
  },
  plugins: [],
}