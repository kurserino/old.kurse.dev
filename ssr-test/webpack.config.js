const path = require("path");
const webpack = require("webpack");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const isDevelopment = process.env.NODE_ENV !== "production";

module.exports = {
  entry: "./src/index.js",
  mode: isDevelopment ? "development" : "production",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        options: { presets: ["@babel/env"] },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: { minimize: !isDevelopment },
          },
        ],
      },
    ],
  },
  resolve: { extensions: ["*", ".js", ".jsx"] },
  output: {
    path: path.resolve(__dirname, "dist/"),
    filename: "[name].bundle.js",
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "public"),
    },
    compress: true,
    port: 3000,
    historyApiFallback: {
      index: "index.html",
    },
    hot: "only",
    devMiddleware: {
      index: true,
      mimeTypes: { "text/html": ["phtml"] },
      publicPath: path.join(__dirname, "public"),
      serverSideRender: true,
      writeToDisk: true,
    },
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: path.join(__dirname, "public/index.html"),
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
};
