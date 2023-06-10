/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "inner-active": "inset 0 0 2rem #fed7aa",
        "card-shadow": "0 0 1rem #7c2d12",
      },
      width: {
        128: "70rem",
        100: "30rem",
      },

      scale: {
        200: "2",
      },
      maxWidth: {
        100: "62.5rem",
        50: "60rem",
      },
    },
  },
  plugins: [],
};
