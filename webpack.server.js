const path = require("path");
const { merge } = require("webpack-merge");
const nodeExternals = require("webpack-node-externals");

const config = require("./webpack.base");

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
});
