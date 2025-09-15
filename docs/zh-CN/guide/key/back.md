---
title: 返回键
lang: zh-CN
---

# 返回键

::: warning 注意

仅在[`Page`](/zh-CN/guide/page/type)中使用生效

:::

## 一、基础用法

### 1、普通函数用法

在`setup`中编写 `onBackPressed`方法，并在`return`中返回此方法。

```ts

function onBackPressed() {
  //
}

return {
  onBackPressed
}
```

:::demo

module/key/es-back

:::

### 2、Hooks 函数用法
::: warning 注意

***@extscreen/es3-core" ≥ 1.2.6***

***@extscreen/es3-router ≥ 1.2.3***

***@extscreen/es3-vue ≥ 2.0.11***

***@extscreen/es3-vue-style-parser ≥ 2.0.0***

***@extscreen/es3-vue-css-loader ≥ 2.0.0***

:::
```ts
import { onBackPressed } from "@extscreen/es3-vue";

onBackPressed(() => {
  //
});

```

:::demo

module/key/es-back-hooks

:::

## 二、拦截返回键

`onBackPressed`方法中编写业务逻辑

```ts
function onBackPressed() {
//编写业务逻辑
}
```

## 三、关闭页面

`onBackPressed`方法中调用`router.back()`方法关闭页面

```js
const router = useESRouter()

function onBackPressed() {
  //1.处理业务逻辑
  //2.调用router关闭页面
  router.back()
}
```

## API

### Exposes

| Name                             | Description                 | Type                                                                              |
| -------------------------------- | --------------------------- | --------------------------------------------------------------------------------- |
| onBackPressed                    | 监听返回键事件                 | ^[Function]`onBackPressed(): void`                                                    |
