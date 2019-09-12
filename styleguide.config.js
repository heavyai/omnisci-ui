const path = require("path")

module.exports = {
  theme: {
    color: {
      link: "#0089D1"
    },
    fontFamily: {
      base: `"Roboto", sans-serif`
    }
  },
  require: [
    path.join(__dirname, "src/styleguidist.scss")
  ],
  webpackConfig: require("./webpack.config.js"),
  // ignore: ["**/node_modules/**/*.*", "src/components/**/*.spec*"],
  components: "src/components/**/*.{ts,tsx}",
  propsParser: require("react-docgen-typescript").withDefaultConfig({propFilter: {skipPropsWithoutDoc: true}}).parse
}