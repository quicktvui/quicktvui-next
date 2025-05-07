---
title: 生命周期简介
lang: zh-CN
---

# Page生命周期

::: warning 注意：

1、声明在路由表 routes.ts 里面的组件才能作为快应用的 Page 。

2、生命周期方法前面不能添加`async`关键字。

下面的方法使用错误
```js
async function onESCreate(){
  //
}
```
:::

::: tip 提示：Page 生命周期只能触发在 “ 声明在 routes.ts 路由表里面的 Page 组件 ”

* `home.vue`声明在了`routes.ts`，所以`home.vue`是快应用的页面，可以监听生命周期。
* `home-child-component.vue`没有声明在`routes.ts`，不是快应用的页面，不可以监听生命周期。

<img src="/guide/page/page_lifecycle_warning.png" />

:::

:::demo ## 基础用法

module/page/es-page-lifecycle

:::
