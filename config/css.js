module.exports = {
  //   modules: {
  //     // localIdentName: "[local]_[hash:base64:6]",
  //   },
  modules: {
    rules: [
      {
        test: /\.styl$/,
        use: ["style-loader", "css-loader", "stylus-loader"],
      },
    ],
  },
  css: { loaderOptions: { sourceMap: false } },
  sass: { loaderOptions: { sourceMap: false } },
};
