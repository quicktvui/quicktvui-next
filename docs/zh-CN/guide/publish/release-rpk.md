---
title: 'ReleaseRPK'
lang: zh-CN
---

# 打包 RPK


## 打包 RPK 方式

### 一、使用 [`qui pack`](/zh-CN/tool/cli/pack) 命令打包

项目根目录下，执行`qui pack`命令。 执行完毕，打包好的`rpk`在`dist`目录下。

### 二、使用 [`qui build`](/zh-CN/tool/cli/build) 命令打包

项目根目录下，执行`qui build`命令。 执行完毕，打包好的`rpk`在`dist`目录下。

### 三、使用 `npm pack`命令打包

执行`package.json`中的`pack`命令

```json
{
  "scripts": {
    "pack": "tsx ./scripts/pack.ts"
  }
}
```

### 四、手动打包

1. 执行`npm build`命令后，在根目录下生成`dist`文件夹。`./dist`中的`android`目录里面是编译产物。`.dist/android`文件夹一般包含：

- `vendor.android.js`
- `index.android.js`
- 其他

::: warning 注意：vendor.android.js 和 index.android.js 为固定名称，不能更改。
:::

2. 手动压缩`android`文件夹为`android.zip`。

::: warning 注意：压缩目录为 android 文件夹，即 android/* 。不能是 dist/android 文件夹，也不能去掉 android 目录。
:::
