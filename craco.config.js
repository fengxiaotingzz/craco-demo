const {
  addPlugins,
  getPlugin,
  pluginByName,
  addAfterLoader,
  loaderByName,
} = require("@craco/craco");
const path = require("path");
const plugins = require("./config/plugins");
const style = require("./config/css");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const stylLoader = {
  loader: require.resolve("stylus-loader"),
  options: { test: /\.styl$/, exclude: /\.sass$/, sourceMap: false },
};

module.exports = {
  plugins,
  style,
  webpack: {
    configure: (webpackConfig, { env, paths }) => {
      addAfterLoader(webpackConfig, loaderByName("css-loader"), stylLoader);
      console.log(webpackConfig);
      return webpackConfig;
    },
  },
};
