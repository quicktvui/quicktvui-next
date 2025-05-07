---
title: 'DevelopFAQ'
lang: zh-CN
---

# 开发相关问题

## 一、开发语言

`QuikcTVUI`使用`Vue3` + `TypeScript`开发实现。

***建议项目使用`Vue3` +`TypeScript`作为开发语言。***

## 二、支持 setup 语法糖

生命周期使用中，一定要`defineExpose`暴露生命周期方法。

```vue

<template>
  <s-title-view text="setup语法糖" />
</template>

<script setup lang="ts">
function onESCreate() {
  //
}

defineExpose({
  onESCreate,
})

</script>

```

## 三、图片使用`file-loader`打包，必须使用`import`导入

[点击查看文件资源编译](/zh-CN/guide/compile/resource)
