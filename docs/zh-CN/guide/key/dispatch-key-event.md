---
title: DispatchKeyEvent
lang: zh-CN
---

# 监听分发按键事件

::: warning 注意

仅在[`Page`](/zh-CN/guide/page/type)中使用生效

:::

## 一、普通函数用法

在`setup`中编写`onDispatchKeyEvent`方法，并在`return`中返回此方法。

```ts

function onDispatchKeyEvent(keyEvent: ESKeyEvent) {
  //
}

return {
  onDispatchKeyEvent,
}
```

:::demo

module/key/es-dispatch

:::

## 二、Hooks 函数用法

::: warning 注意

***@extscreen/es3-core" ≥ 1.2.6***

***@extscreen/es3-router ≥ 1.2.3***

***@extscreen/es3-vue ≥ 2.0.11***

***@extscreen/es3-vue-style-parser ≥ 2.0.0***

***@extscreen/es3-vue-css-loader ≥ 2.0.0***

:::

在`setup`中编写`onDispatchKeyEvent`方法，并在`return`中返回此方法。

```ts
import { onDispatchKeyEvent } from "@extscreen/es3-vue";

onDispatchKeyEvent((keyEvent: ESKeyEvent) => {
//
});

```

:::demo

module/key/es-dispatch-hooks

:::

## API

### Exposes

| Name                             | Description                 | Type                                                                              |
| -------------------------------- | --------------------------- | --------------------------------------------------------------------------------- |
| onDispatchKeyEvent               | 监听分发按键事件               | ^[Function]`onDispatchKeyEvent(keyEvent: ESKeyEvent): void`                                                    |
