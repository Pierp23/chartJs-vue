const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,

  // BYPASSO IL BLOCCO CORS PER PERMETTERE IL BUON ESITO DELLA CHIAMATA API
  configureWebpack: {
    devServer: {
      proxy: 'https://jsonbin.io/quick-store/',
      headers: { "Access-Control-Allow-Origin": "*" }
    }
  }
})


