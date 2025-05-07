---
title: AsyncComponent
lang: zh-CN
---

# 异步组件

Vue 3 提供的异步加载组件的功能，它允许我们在需要时才去加载某个组件或页面，而不是一开始就把所有组件或页面都加载到页面中。这样可以有效地减少首屏加载时间，尤其是当项目中组件数量庞大时，异步加载组件可以极大提高应用的性能。

::: tip 异步加载两种方式

* 使用异步组件`defineAsyncComponent`实现组件异步加载

  ***点击查看 [defineAsyncComponent 官方文档](https://vuejs.org/guide/components/async.html)***

* 使用异步路由`Async Router`实现页面异步加载

  ***点击查看 [异步路由](/zh-CN/guide/router/async)***

:::

------------------

***以下介绍异步加载组件实现方式`defineAsyncComponent`***

## 第一步、定义子组件  `child-component.vue`

```vue

<template>
  <div class="es-component-child-css">
    <span>异步组件加载的子组件</span>
    <img class="es-component-child-img-css" :src="star" />
  </div>
</template>

<script lang="ts">

import { defineComponent } from "@vue/runtime-core";
import star from '../../assets/star.png'

export default defineComponent({
  name: 'Child',
  setup() {
    return {
      star
    }
  },
});

</script>
```

## 第二步、定义父组件

```vue

<template>
  <div class="es-sdk-root-css">
    <AsyncChild class="es-sdk-async-child-css" />
  </div>
</template>

<script lang="ts" setup>

import { defineAsyncComponent } from "@vue/runtime-core";

//使用 defineAsyncComponent 加载子组件
const AsyncChild = defineAsyncComponent(
  () => import('./child-component.vue'))

</script>

<style>
.es-sdk-async-child-css {
  width: 200px;
  height: 200px;
  background-color: #F20C00;
}
</style>

```

::: warning 注意：异步组件必须在编译时使用 webpack @extscreen/es3-dynamic-import-plugin 插件

[点击查看使用 es3-dynamic-import-plugin 插件 ](/zh-CN/guide/compile/split-chunks)

:::
