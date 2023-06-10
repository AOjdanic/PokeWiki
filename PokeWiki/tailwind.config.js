/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "inner-active": "inset 0 0 2rem #fed7aa",
      },
      width: {
        128: "70rem",
      },
      scale: {
        200: "2",
      },
      maxWidth: {
        100: "62.5rem",
      },
    },
  },
  plugins: [],
};
