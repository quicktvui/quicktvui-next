---
title: 应用间通信模块
lang: zh-CN
---

# 应用间通信模块

使用此模块用来可以用来进行多个快应用之间的通信。

:::demo ## 基础用法

module/iac/es-basic

:::

:::demo ## qt.iac 用法 ^(alpha)

module/iac/qt-basic

:::

## API

### DataStructure

#### ESIACMessage

应用间通信消息

| Name          | Description                | Type                          |   Default   |
| ------------------ | ------------------| ----------------------------|---------|
| action             | 事件名称       | ^[string]                    |   -    |
| package            | 需要接受事件的快应用包名| ^[string]                    |   -    |
| extras             | 其他信息           | ^[any]                     |   -    |

#### ESIACMessageFilter

应用间通信消息过滤器

| Name          | Description             | Type                          |   Default   |
| ------------------ | ------------------| ----------------------------|---------|
| action             | 需要接受的事件列表       | ^[Array<string>]        |   -    |

### Exposes

| Name                             | Description                 | Type                                           |
| -------------------------------- | --------------------------- | -----------------------------------------------|
| sendMessage             | 该方法发送消息          | ^[Function]`sendMessage(message: ESIACMessage) => Promise<boolean>`   |
| registerReceiver        | 该方法注册消息监听       | ^[Function]`registerReceiver(receiver: ESIACReceiver, messageFilter: ESIACMessageFilter) => void`   |
| unregisterReceiver        | 该方法取消注册消息监听       | ^[Function]`unregisterReceiver(receiver: ESIACReceiver) => void`   |

