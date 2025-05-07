---
title: 'Click'
lang: zh-CN
---

# 焦点

::: tip 焦点相关

***[点击查看](/zh-CN/guide/focus/basic)***

:::

* 在组件上设置属性`:focusable="true"`，可使组件可获焦
* 监听`focus`事件`@focus="onFocus"`
* 显示焦点边框`:enableFocusBorder="true"`
* 设置焦点放大倍数`:focusScale="1.1"`

```vue

<template>
  <div
:focusable="true"
       :enableFocusBorder="true"
       :focusScale="1.1"
       @focus="onFocus"/>
</template>

<script>
export default {
  name: 'TextButton'
}
</script>

<script setup>

const onFocus = (e) => {
  const focused = e.isFocused;
  //处理焦点事件
}

</script>
```

