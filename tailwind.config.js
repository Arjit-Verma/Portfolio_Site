/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "custom-gradient": " linear-gradient(to top, #232121 0%, #3B4060 100%)",
      },
      spacing: {
        18: "4.5rem",
        72: "18rem",
        84: "21rem",
        96: "24rem",
      },
    },
  },
  variants: {},
  plugins: [require("tailwindcss-filters")],
};
