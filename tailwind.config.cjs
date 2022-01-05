module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{svelte,html,css}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#1c1a32",
        secondary: "#f22eda",
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}