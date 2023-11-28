const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,

  // // BYPASSO IL BLOCCO CORS PER PERMETTERE IL BUON ESITO DELLA CHIAMATA API
  // configureWebpack: {
  //   devServer: {
  //     proxy: 'https://my-json-server.typicode.com/',
  //     headers: { "Access-Control-Allow-Origin": "*" }
  //   }
  // }
})


