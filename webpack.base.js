const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        exclude: /node_module/,
        options: {
          presets: [
            "@babel/preset-react",
            [
              "@babel/preset-env",
              {
                targets: {
                  browsers: ["last 2 versions"],
                },
              },
            ],
          ],
        },
      },
    ],
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        extractComments: false,
      }),
    ],
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
};
