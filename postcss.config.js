module.exports = {
  plugins: {
    'postcss-import': {},
    'postcss-custom-media': {},
    'postcss-nested': {},
    'postcss-preset-env': {
      stage: 3,
      preserve: false,
      browsers: "last 2 versions",
    },
    'css-mqpacker': {},
  },
}
