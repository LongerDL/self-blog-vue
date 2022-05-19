// vue-cli的配置文件
module.exports = {
  publicPath: './',
  devServer: {
    proxy: {
      "/api": {
        target: "http://test.mysite.com",
        changeOrigin: true,
      },
    },
  },
};
