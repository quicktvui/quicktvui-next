---
title: 事件总线模块
lang: zh-CN
---

# 事件总线模块

此模块用于快应用内部自身事件通信。

:::demo ## 发送事件

module/event-bus/es-emit

:::

:::demo ## 监听事件

module/event-bus/es-on

:::

:::demo ## 取消监听事件

module/event-bus/es-off

:::

:::demo ## 监听一次事件

module/event-bus/es-once

:::


:::demo ## qt.eventBus 发送事件 ^(alpha)

module/event-bus/qt-emit

:::

:::demo ## qt.eventBus 监听事件 ^(alpha)

module/event-bus/qt-on

:::

:::demo ## qt.eventBus 取消监听事件 ^(alpha)

module/event-bus/qt-off

:::

:::demo ## qt.eventBus 监听一次事件 ^(alpha)

module/event-bus/qt-once

:::

## API

### Exposes

| Name                             | Description                 | Type                                           |
| -------------------------------- | --------------------------- | -----------------------------------------------|
| on             | 该方法注册事件监听          | ^[Function]`on(event: string \| Array<string>, callback: ESEventBusCallback, context?: ESEventBusContext) => void`   |
| once               | 该方法注册一次事件监听             | ^[Function]`once(event: string, callback: ESEventBusCallback, context?: ESEventBusContext) => void`   |
| emit               | 该方法发送事件             | ^[Function]`emit(event: string, ...args: ESEventBusArg[]) => void`   |
| off               | 该方法取消监听事件             | ^[Function]`off(event?: string \| Array<string>, callback?: ESEventBusCallback) => void`   |
