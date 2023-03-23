module.exports = () => {
  return {
    plugins: [
      require('autoprefixer')(),
      require('postcss-nested'),
      require('postcss-hexrgba'),
      // require('postcss-css-variables'),
    ],
  }
}
