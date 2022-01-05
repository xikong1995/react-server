const path = require("path");
const { merge } = require("webpack-merge");
const CopyPlugin = require("copy-webpack-plugin");

const config = require("./webpack.base");

module.exports = merge(config, {
  mode: "development",
  entry: "./src/client/app.js",
  output: {
    filename: "app.js",
    path: path.resolve(__dirname, "public"),
    clean: true,
  },
  plugins: [
    new CopyPlugin({
      patterns: [{ from: "static" }],
    }),
  ],
});
