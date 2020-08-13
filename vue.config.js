/*
 * @Description:
 * @Author: whyjs
 * @Date: 2020-08-13 13:29:09
 * @LastEditTime: 2020-08-13 15:05:49
 * @LastEditors: whyjs
 */
const path = require('path')
module.exports = {
  pages: {
    index: {
      entry: 'src/main.js',
      template: 'public/index.html',
      filename: 'index.html'
    }
  },
  chainWebpack: config => {
    config.module
      .rule('js')
      .include.add(path.resolve(__dirname, 'packages'))
      .end()
      .use('babel')
      .loader('babel-loader')
      .tap(options => {
        return options
      })
  }
}
