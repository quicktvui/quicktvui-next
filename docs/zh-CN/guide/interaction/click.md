---
title: 'Click'
lang: zh-CN
---

# 点击

::: warning 注意：只有可获得焦点的组件，在焦点状态才可以点击。
:::

***组件被点击触发点击事件的时候，会发送`click`事件***

* 设置可获得焦点`:focusable="true"`
* 监听`click`事件`@click="onClick"`

```vue

<template>
  <div
:focusable="true"
       :enableFocusBorder="true"
       :focusScale="1.1"
       @click="onClick"/>
</template>

<script>
export default {
  name: 'TextButton'
}
</script>

<script setup>

const onClick = (e) => {
  //处理点击事件
}
</script>
```

