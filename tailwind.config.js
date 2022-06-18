module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      sm: { max: "650px" },
      md: { min: "651px", max: "1024px" },
      lg: { min: "1024px" },
    },
  },
  plugins: [],
};
