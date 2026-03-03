---
title: 'LayoutStyleFAQ'
lang: zh-CN
---

# 布局样式相关问题

## 一、所有的组件都需要指定宽高尺寸

`div`、`qt-text`、`qt-image`、`qt-view`等组件都需要指定宽高尺寸

## 二、仅支持部分 css 样式

[点击查看 CSS 速查表](/zh-CN/css/cheat-sheet)

## 三、背景色

* [点击查看background](/zh-CN/css/layout/background)

* 支持`background-color: red;`
* 建议非`qt`组件，例如：`div`、`span`标签，样式上添加`background-color: transparent;`

## 四、背景图

1、 使用图片当做背景

```vue

<template>
  <qt-view class='index-css'>
    <qt-image class='background-img-css' :src='backgroundImg' />
  </qt-view>
</template>

<script lang='ts'>
import { defineComponent } from "@vue/runtime-core";
import backgroundImg from '../../assets/background-img.png'

export default defineComponent({
  setup() {
    return {
      backgroundImg,
    }
  },
});
</script>

<style scoped>

.background-img-css {
  width: 1920px;
  height: 1080px;
  position: absolute;
}

</style>
```

2、 使用渐变色做背景

[点击查看`gradient`](/zh-CN/css/color/gradient)

```vue

<qt-view :gradientBackground="{ colors: ['#F5F5F5', '#F5F5F5'], cornerRadius: 99, orientation: 6 }" />
```
