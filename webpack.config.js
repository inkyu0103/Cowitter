const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const Dotenv = require("dotenv-webpack");

module.exports = {
  mode: "development",
  entry: "./src/index.tsx",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: "babel-loader",
        exclude: /node_module/,
      },
      {
        test: /\.tsx?$/,
        use: "ts-loader",
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/i,
        type: "asset/resource",
      },
    ],
  },
  devServer: {
    hot: true,
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
    new Dotenv(),
  ],
  devtool: "eval-source-map",
};
