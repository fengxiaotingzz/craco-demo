const CracoLessPlugin = require("craco-less");
// const sassResourcesLoader = require("craco-sass-resources-loader");
const path = require("path");

module.exports = [
  {
    plugin: CracoLessPlugin,
    options: {
      modifyLessRule: () => {
        return {
          test: /\.less$/i,
          exclude: /node_modules/,
          use: [
            "style-loader",
            {
              loader: "css-loader",
              options: {
                sourceMap: false,
                // modules: { localIdentName: "[local]_[hash:6]" },
              },
            },
            {
              loader: "less-loader",
              options: {
                sourceMap: false,
              },
            },
          ],
        };
      },
      // lessLoaderOptions: {
      //   lessOptions: {
      //     javascriptEnabled: true,
      //   },
      // },
      // cssLoaderOptions: {
      //   modules: {
      //     localIdentName: "[local]_[hash:6]",
      //   },
      //   sourceMap: false,
      //   importLoaders: 1,
      // },
    },
  },
];
