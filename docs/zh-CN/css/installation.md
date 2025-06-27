---
title: 集成
lang: zh-CN
---

# 集成

## 第一步、`package.json` `dependencies` 添加运行时依赖库

* `@extscreen/es3-vue`![NPM Version](https://img.shields.io/npm/v/@extscreen/es3-vue)
* `@extscreen/es3-vue-style-parser`![NPM Version](https://img.shields.io/npm/v/@extscreen/es3-vue-style-parser)

## 第二步、`package.json` `devDependencies` 添加编译时依赖库

* `@extscreen/es3-vue-css-loader`![NPM Version](https://img.shields.io/npm/v/@extscreen/es3-vue-css-loader)

## 第三步、集成`@extscreen/es3-vue-css-loader`

Webpack配置文件中需要添加`@extscreen/es3-vue-css-loader`做为css loader。

```ts
const cssLoader = "@extscreen/es3-vue-css-loader";
module.exports = {
  module: {
    rules: [
      {
        test: /\.(le|c)ss$/,
        use: [
          {
            loader: cssLoader,
          },
          {
            loader: "less-loader",
          },
        ],
      }
    ],
  },
}

```
