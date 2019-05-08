const webpack = require("webpack");
const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const indexPath = path.resolve("./src/index.ts");

const config = env => {
  return {
    entry: {
      "omnisci-ui": indexPath
    },

    mode: "development",

    devtool: "eval",

    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "[name].js",
      library: "[name]",
      libraryTarget: "umd"
    },

    module: {
      rules: [
        { 
          test: /\.tsx?$/,
          loader: 'ts-loader'
        },
        {
          test: /\.(sass|scss)$/,
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
        }
      ]
    },
    plugins: [
      new ExtractTextPlugin({
        filename: "[name].css",
        allChunks: true
      })
    ]
  };
};

module.exports = config;
