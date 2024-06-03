// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: true
// })
module.exports = {
  pluginOptions: {
    "style-resources-loader": {
      preProcessor: "scss",
      patterns: [],
    },
  },
  chainWebpack: (config) => {
    config.module
      .rule("ts")
      .test(/\.ts$/)
      .use("ts-loader")
      .loader("ts-loader")
      .end();
    config.module
      .rule("tsx")
      .test(/\.tsx$/)
      .use("ts-loader")
      .loader("ts-loader")
      .end();
  },
};
