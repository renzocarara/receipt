module.exports = {
  transpileDependencies: ["vuetify"],
  // make app.scss global, accessible to all components without the need of "@import"
  css: {
    loaderOptions: {
      scss: {
        prependData: `@import "~@/sass/app.scss";`,
      },
    },
  },
//   publicPath: "/receipt/",
};