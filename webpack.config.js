const path = require("path")
const webpack = require("webpack")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

const indexJsPath = path.resolve("./src/index.ts")
const indexCssPath = path.resolve("./src/index.scss")

const config = () => ({
  entry: {
    "omnisci-ui": [indexJsPath, indexCssPath],
  },

  devtool: "source-map",

  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
    modules: [path.resolve("./src"), "node_modules"],
  },

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
    library: "[name]",
    libraryTarget: "umd",
  },

  module: {
    rules: [
      {
        test: /\.(tsx?|jsx?)$/i,
        exclude: /node_modules/,
        include: path.resolve(__dirname, "src/"),
        use: [
          {
            loader: "babel-loader",
            options: {
              cacheDirectory: ".babel-cache",
            },
          },
        ],
      },
      {
        test: /\.(sass|scss)$/,
        exclude: /node_modules/,
        include: path.resolve(__dirname, "src/"),
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: "css-loader",
          },
          {
            loader: "postcss-loader",
            options: {
              config: {
                path: "postcss.config.js",
              },
            },
          },
          {
            loader: "sass-loader",
          },
        ],
      },
      {
        test: /\.(sass|scss|css)$/,
        include: [
          path.resolve(__dirname, "node_modules/material-components-web"),
          path.resolve(__dirname, "node_modules/@material"),
        ],
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: "css-loader",
          },
          {
            loader: "sass-loader",
            options: {
              includePaths: [
                path.resolve(__dirname, "node_modules/material-components-web"),
                path.resolve(__dirname, "node_modules/@material"),
              ],
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    new MiniCssExtractPlugin({
      filename: "[name].css",
    }),
  ],
})

module.exports = config
