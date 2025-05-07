---
title: 广播模块
lang: zh-CN
---

# 广播模块

使用此模块可以调用`android`系统中的广播服务。

你可以在 [Android documentation](https://developer.android.google.cn/develop/background-work/background-tasks/broadcasts?hl=zh-cn)
上查看更详细的介绍。

:::demo ## 基础用法

module/broadcast/es-basic

:::

:::demo ## qt.broadcast 用法 ^(alpha)

module/broadcast/qt-basic

:::


## API

### DataStructure

#### ESIntentFilter

`IntentFilter`

| Name          | Description                | Type                          |   Default   |
| -------------- | ------------------| ----------------------------|---------|
| action         | action            | ^[Array<string>]           |   -    |
| scheme         | scheme            | ^[Array<string>]           |   -    |
| category       | category            | ^[Array<string>]           |   -    |
| type           | type            | ^[Array<string>]           |   -    |
| authority      | authority            | ^[Array<ESIntentDataAuthority>]|   -    |
| path           | path            | ^[Array<ESIntentDataPath>] |   -    |
| schemeSpecificPart|schemeSpecificPart| ^[Array<ESIntentDataSchemeSpecificPart>]|   -    |

#### ESIntentDataAuthority

`ESIntentDataAuthority`

| Name          | Description                | Type                          |   Default   |
| -------------- | ------------------| ----------------------------|---------|
| host           | host            | ^[string]                    |   -    |
| port           | port            | ^[string]                    |   -    |

#### ESIntentDataPath

`ESIntentDataPath`

| Name          | Description                | Type                          |   Default   |
| -------------- | ------------------| ----------------------------|---------|
| path           | path            | ^[string]                    |   -    |
| type           | type            | ^[number]                    |   -    |

#### ESIntentDataSchemeSpecificPart

`ESIntentDataSchemeSpecificPart`

| Name          | Description                | Type                          |   Default   |
| -------------- | ------------------| ----------------------------|---------|
| ssp            | ssp            | ^[string]                     |   -    |
| type           | type            | ^[number]                    |   -    |

### Exposes

| Name                             | Description                 | Type                                           |
| -------------------------------- | --------------------------- | -----------------------------------------------|
| registerReceiver             | 该方法注册广告接收者          | ^[Function]`registerReceiver(receiver: ESBroadcastReceiver, interFilter: ESIntentFilter) => Promise<number>`   |
| unregisterReceiver             | 该方法取消注册广告接收者          | ^[Function]`unregisterReceiver(receiver: ESBroadcastReceiver, interFilter: ESIntentFilter) => Promise<number>`   |
| sendBroadcast             | 该方法发送广播          | ^[Function]`sendBroadcast(paramsArray: Array<Array<any>>) => Promise<boolean>`
