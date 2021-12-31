const config = require("./webpack.base");
const { merge } = require("webpack-merge");
const path = require("path");
const nodeExternals = require("webpack-node-externals");

module.exports = merge(config, {
  mode: "production",
  target: "node",
  entry: "./src/server/app.js",
  output: {
    filename: "app.js",
    path: path.resolve(__dirname, "build"),
    clean: true,
  },
  externals: [nodeExternals()],
});
