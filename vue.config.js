const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
  devServer: {
    port: 5000,
  },
  transpileDependencies: true,
  lintOnSave: false, // ESLint 비활성화
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "@/style/color.scss";`,
      },
    },
  },
});
