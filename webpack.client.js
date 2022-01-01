const config = require("./webpack.base");
const { merge } = require("webpack-merge");
const path = require("path");

module.exports = merge(config, {
  mode: "development",
  entry: "./src/client/app.js",
  output: {
    filename: "app.js",
    path: path.resolve(__dirname, "public"),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
              modules: {
                localIdentName: "[name]__[local]--[hash:base64:5]",
              },
              esModule: false,
            },
          },
        ],
      },
    ],
  },
});
