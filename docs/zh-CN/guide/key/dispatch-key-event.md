---
title: DispatchKeyEvent
lang: zh-CN
---

# 监听分发按键事件

::: warning 注意

仅在[`Page`](/zh-CN/guide/page/type)中使用生效

:::

## 基础用法

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

## API

### Exposes

| Name                             | Description                 | Type                                                                              |
| -------------------------------- | --------------------------- | --------------------------------------------------------------------------------- |
| onDispatchKeyEvent               | 监听分发按键事件               | ^[Function]`onDispatchKeyEvent(keyEvent: ESKeyEvent): void`                                                    |
