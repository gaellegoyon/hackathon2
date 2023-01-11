/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "main-font": ["ui-sans-serif", "Poppins"],
      },
      backgroundImage: {
        logo: "url('/src/assets/logo.svg')",
      },
    },
  },
  plugins: [],
};
