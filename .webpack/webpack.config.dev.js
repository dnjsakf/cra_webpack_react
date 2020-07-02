const config = require("./webpack.config.js");

const merge = require("webpack-merge");
const webpack = require("webpack");

const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = merge(config, {
  mode: "development",
  plugins: [
    new webpack.DefinePlugin({
      PRODUCTION: JSON.stringify(false),
    }),
    new webpack.EnvironmentPlugin({
      LOGGING_LEVEL: JSON.stringify("DEBUG"),
      DEBUG: 1
    }),
  ],
  optimization: {
    namedChunks: true,
  },
  devServer: {
    host: "localhost",
    port: 4000,
    hot: true,
    //open: true,
    contentBase: config.output.path,
    publicPath: config.output.publicPath,
    historyApiFallback: true,
    proxy: {
      '/api': {
        target: "http://localhost:4001/api"
      }
    }
  },
});