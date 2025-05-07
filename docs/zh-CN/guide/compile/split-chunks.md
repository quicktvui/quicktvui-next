---
title: SplitChunks
lang: zh-CN
---

# 代码分割和异步加载

::: tip 项目使用 Webpack 进行编译和打包

* 点击查看 [Webpack 文档](https://webpack.docschina.org/concepts/)

* 点击查看 [quicktvui-playground 示例](https://github.com/quicktvui/quicktvui-playground/tree/master/es-split-chunks)

* 点击查看 [Webpack SplitChunksPlugin 文档](https://webpack.docschina.org/plugins/split-chunks-plugin/)

:::

::: warning 注意： 分包和动态引入必须使用 ESDynamicImportPlugin 插件
:::

`webpack.android.js`配置示例如下：

```js
//1. 引入插件
const ESDynamicImportPlugin = require('@extscreen/es3-dynamic-import-plugin');
module.exports = {
  output: {
    //2.设置公共路径为 ./，不可更改路径
    publicPath: './',
  },
  plugins: [
    //3. 注册插件
    new ESDynamicImportPlugin(),
  ],
  optimization: {
    //4.分包方案
    splitChunks: {
      chunks: 'all',
      minSize: 20000,
      minRemainingSize: 0,
      minChunks: 1,
      maxAsyncRequests: 30,
      maxInitialRequests: 30,
      enforceSizeThreshold: 50000,
      cacheGroups: {
        defaultVendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          reuseExistingChunk: true,
          //注意: 必须命名为"vendor.android.js"
          filename: "vendor.android.js"
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
        },
      },
    },
  },
}
```

::: warning 注意：filename 必须命名为"vendor.android.js"
:::

