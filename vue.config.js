module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: `@import "@/styles/main.scss";`
      }
    }
  },
  devServer: {
    disableHostCheck: true
  }
};
