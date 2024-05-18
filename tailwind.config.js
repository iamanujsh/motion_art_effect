/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      zIndex: {
        "-1": "-1",
      },
      backgroundImage: {
        "custom-gradient": "linear-gradient(90deg, #F87516 0%, #5E11FF 100%)",
      },
      screens: {
        xs: "475px",
      },
    },
  },
  plugins: [],
};
