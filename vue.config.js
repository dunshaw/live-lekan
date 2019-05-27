module.exports = {
  // 配置sass
  // chainWebpack: config => {
  //   const oneOfsMap = config.module.rule('scss').oneOfs.store
  //   oneOfsMap.forEach(item => {
  //     item
  //       .use('sass-resources-loader')
  //       .loader('sass-resources-loader')
  //       .options({
  //         // Provide path to the file with resources
  //         resources: './path/to/resources.scss',

  //         // Or array of paths
  //         resources: ['./path/to/vars.scss', './path/to/mixins.scss']
  //       })
  //       .end()
  //   })
  // },
  devServer: {
    // 设置代理
    proxy: {
      "/apis": {
        target: 'http://11.240.96.82:9000', // 访问数据的计算机域名
        ws: true, // 是否启用websockets
        changOrigin: true, //开启代理
        secure: false,
        pathRewrite:{
            '^/apis':'/'
        } 
      }
    },
    // host:'11.240.99.70',
    host:'localhost', 
    port: 8080,
  },
};
