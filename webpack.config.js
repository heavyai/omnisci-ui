const path = require("path")
const ExtractTextPlugin = require("extract-text-webpack-plugin")
const indexPath = path.resolve("./src/index.ts")

const config = () => (
  {
    entry: {
      "omnisci-ui": indexPath
    },

    mode: "development",

    devtool: "eval",

    resolve: {
      extensions: [".ts", ".tsx", ".js", ".jsx"],
      modules: [path.resolve("./src"), "node_modules"]
    },

    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "[name].js",
      library: "[name]",
      libraryTarget: "umd"
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
                cacheDirectory: ".babel-cache"
              }
            }
          ]
        },
        {
          test: /\.(sass|scss)$/,
          exclude: /node_modules/,
          include: path.resolve(__dirname, "src/"),
          use: ExtractTextPlugin.extract({
            use: [
              {
                loader: "css-loader"
              },
              {
                loader: "postcss-loader",
                options: {
                  config: {
                    path: "postcss.config.js"
                  }
                }
              },
              {
                loader: "sass-loader"
              }
            ]
          })
        },
        {
          test: /\.(sass|scss|css)$/,
          include: [
            path.resolve(__dirname, "node_modules/material-components-web"),
            path.resolve(__dirname, "node_modules/@material")
          ],
          use: ExtractTextPlugin.extract({
            use: [
              {
                loader: "css-loader"
              },
              {
                loader: "sass-loader",
                options: {
                  includePaths: [
                    path.resolve(__dirname, "node_modules/material-components-web"),
                    path.resolve(__dirname, "node_modules/@material")
                  ]
                }
              }
            ]
          })
        }
      ]
    },
    plugins: [
      new ExtractTextPlugin({
        filename: "[name].css",
        allChunks: true
      })
    ]
  }
)

module.exports = config
