export default {
  mode: "jit",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#F62682",
      },
      fontFamily: {
        body: ["DM Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
