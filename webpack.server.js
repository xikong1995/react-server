const config = require("./webpack.base");
const { merge } = require("webpack-merge");
const path = require("path");
const nodeExternals = require("webpack-node-externals");

module.exports = merge(config, {
  mode: "development",
  target: "node",
  entry: "./src/server/app.js",
  output: {
    filename: "app.js",
    path: path.resolve(__dirname, "build"),
    clean: true,
  },
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          "isomorphic-style-loader",
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
