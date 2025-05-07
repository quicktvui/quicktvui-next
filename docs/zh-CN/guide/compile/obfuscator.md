---
title: Obfuscator
lang: zh-CN
---

# 混淆

::: tip 项目使用 Webpack 进行编译和打包

* 点击查看 [Webpack 文档](https://webpack.docschina.org/concepts/)

* 点击查看 [quicktvui-playground 示例](https://github.com/quicktvui/quicktvui-playground/tree/master/es-split-chunks)

* 点击查看 [TerserWebpackPlugin 文档](https://webpack.docschina.org/plugins/terser-webpack-plugin/)

:::

使用 `TerserPlugin` 和 `WebpackObfuscator`进度代码优化和混淆

`webpack.android.js`配置示例如下：

```js
const TerserPlugin = require("terser-webpack-plugin");
const WebpackObfuscator = require('webpack-obfuscator');

module.exports = {
  plugins: [
    new WebpackObfuscator({
      rotateStringArray: true
    }, [''])
  ],
  optimization: {
    moduleIds: 'named',
    minimize: true,
    minimizer: [new TerserPlugin({
      parallel: true,
      terserOptions: {
        output: {
          // 是否输出可读性较强的代码，即会保留空格和制表符，默认为输出，为了达到更好的压缩效果，可以设置为false
          beautify: false,
          // 是否保留代码中的注释，默认为保留，为了达到更好的压缩效果，可以设置为false
          comments: false
        },
        compress: {
          warnings: false,
          drop_debugger: true,
          drop_console: true,
          pure_funcs: ['console.log']
        },
      },
      extractComments: false,
    })]
  }
}
```

