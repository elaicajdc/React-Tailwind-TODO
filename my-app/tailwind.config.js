module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'color-pattern': "url('./img/art.jpg')",
        'cat-nothing': "url('./img/cat.png')",
      }
    },
    fontFamily: {
      body: ['Roboto', 'Arial', 'sans-serif'],
    }
  },
  plugins: [],
}
