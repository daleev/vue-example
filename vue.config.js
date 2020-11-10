module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/vue-example/' : '/',
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "@/assets/css/config.scss";`,
      },
    },
  },
};
