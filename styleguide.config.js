const path = require("path")

module.exports = {
  theme: {
    color: {
      link: "#0089D1",
    },
    fontFamily: {
      base: `"Roboto", sans-serif`,
    },
  },
  require: [
    path.join(__dirname, "src/styleguidist.scss"),
    path.join(__dirname, "src/theme-switcher.js"),
  ],
  webpackConfig: require("./webpack.config.js"),
  components: "src/components/**/*.{ts,tsx}",
  propsParser: require("react-docgen-typescript").withDefaultConfig({
    propFilter: { skipPropsWithoutDoc: true },
  }).parse,
}
