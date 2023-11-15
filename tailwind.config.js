/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        lg: "992px",
        xl: "1440px",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "26px",
          md: "44px",
        },
      },
    },
  },
  plugins: [],
};
