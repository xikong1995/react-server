const config = require("./webpack.base");
const { merge } = require("webpack-merge");
const path = require("path");

module.exports = merge(config, {
  mode: "production",
  entry: "./src/client/app.js",
  output: {
    filename: "app.js",
    path: path.resolve(__dirname, "public"),
    clean: true,
  },
});
