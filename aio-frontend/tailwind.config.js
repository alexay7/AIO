module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false,
  theme: {
    extend: {},
    screens: {
      sm: "540px",
      md: "768px",
      lg: "1024px",
      xl: "1280px"
    }
  },
  variants: {
    extend: {}
  },
  plugins: [],
}
