const webpack = require('webpack');

module.exports = {
  // publicPath: process.env.NODE_ENV === 'production' ? 'scrmbackoffice' : '/',
  devServer: {
    port: 8080,
    proxy: {
      '/scrm/v1': {
        target: 'https://scrmdev.csmc-cloud.com/',
        // target: 'http://localhost:10052/',
        changeOrigin: true,
        ws: false,
        pathRewrite: {
          '^/scrm/v1': '/scrm/v1',
        },
        secure: false,
      },
    },
    overlay: {
      warnings: false,
      errors: false,
    },
  },
  // chainWebpack: config => {
  //   config.module
  //     .rule("i18n")
  //     .resourceQuery(/blockType=i18n/)
  //     .type('javascript/auto')
  //     .use("i18n")
  //       .loader("@kazupon/vue-i18n-loader")
  //       .end();
  // },
  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        jquery: 'jquery',
        'window.jQuery': 'jquery',
      }),
    ],
  },
  // lintOnSave: false,
  // outputDir: '../serverside/scrm/src/main/resources/static/scrmbackoffice',
  // productionSourceMap: false,
  // css: {
  //   loaderOptions: { // 向 CSS 相关的 loader 传递选项
  //     less: {
  //       javascriptEnabled: true
  //     }
  //   }
  // },
  // transpileDependencies: [
  //   /\/node_modules\/vue-echarts\//,
  //   /\/node_modules\/resize-detector\//
  // ]
};
