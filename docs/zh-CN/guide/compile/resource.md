---
title: Resource
lang: zh-CN
---

# 文件资源

::: tip 项目使用 Webpack 进行编译和打包

* 点击查看 [Webpack 文档](https://webpack.docschina.org/concepts/)

* 点击查看 [quicktvui-playground 示例](https://github.com/quicktvui/quicktvui-playground/tree/master/es-split-chunks)

* 点击查看 [Vue Loader 官方文档](https://vue-loader.vuejs.org/zh-CN/guide/asset-url.html)

:::

::: warning 推荐使用 file-loader 编译文件资源（图片和文件）

***1、图片使用`import`方式加载。`import logo from '../../assets/logo.png'`***

***2、`file-loader`不支持使用`require`***

```vue

<template>
  <div>
    <img src="../../assets/logo.png"/>
    <img :src="logo"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
//file-loader 不支持使用 require
import logo from '../../assets/logo.png'

export default defineComponent({
  setup() {
    return {
      logo
    }
  },
});
</script>
```

:::

### 一、使用 `url-loader` 编译

`webpack.android.js`配置示例如下：

```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [{
          loader: 'url-loader',
          options: {
            limit: true,
          },
        }],
      }
    ]
  }
}
```

### 二、使用 `file-loader` 编译

`webpack.android.js`配置示例如下：

```js
module.exports = {
  output: {
    //
    //资源命名规则
    assetModuleFilename: '[hash][ext][query]'
  },
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif)$/i,
        type: 'asset/resource',
        generator: {
          outputPath: 'assets/',
          publicPath: 'assets/',
        }
      }
    ]
  }
}
```
