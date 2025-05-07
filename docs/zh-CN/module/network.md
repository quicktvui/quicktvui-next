---
title: 网络模块
lang: zh-CN
---

# 网络模块

此模块用于获取和监听系统的网络状态。

:::demo ## 基础用法

module/network/es-basic

:::

:::demo ## qt.network 用法 ^(alpha)

module/network/qt-basic

:::


## API

### DataStructure

#### ESNetworkInfo

网络信息

| Name          | Description                | Type                          |   Default   |
| ------------------------- | ----------------------| ----------------------------|---------|
| type                      | 网络类型               | ^[ESNetworkInfoType]          |   -    |
| typeName                  | 网络名称               | ^[string]                    |   -    |
| state                     | 网络状态               | ^[ESNetworkInfoState]        |   -    |
| extraInfo                 | 额外信息               | ^[string]                    |   -    |
| isAvailable               | 网络是否可用            | ^[boolean]                    |   -    |
| isConnected               | 网络是否链接            | ^[boolean]                    |   -    |
| isConnectedOrConnecting   | 是否正在连接或者已经连接   | ^[boolean]                    |   -    |
| isFailover                | isFailover            | ^[boolean]                    |   -    |
| isRoaming                 | isRoaming             | ^[boolean]                    |   -    |
| detailedState             | detailedState         | ^[boolean]                    |   -    |
| describeContents          | describeContents      | ^[boolean]                    |   -    |

#### ESNetworkInfoType

网络类型信息

| Name                         | Description       | Type                          |   Default   |
| ------------------------- | ----------------------| ----------------------------|---------|
| ES_NETWORK_INFO_TYPE_NONE  | 无网络               | ^[number]          |   -1    |
| ES_NETWORK_INFO_TYPE_MOBILE | 移动网络              | ^[number]                    |   0    |
| ES_NETWORK_INFO_TYPE_WIFI  | WIFI网络               | ^[number]        |   1    |
| ES_NETWORK_INFO_TYPE_ETHERNET| 有线网络               | ^[number]                    |   9    |

#### ESNetworkInfoState

网络状态信息

| Name                         | Description        | Type                        |   Default   |
| ------------------------- | ----------------------| ----------------------------|---------|
| ES_NETWORK_INFO_STATE_CONNECTING  | 正在连接               | ^[number]          |   0    |
| ES_NETWORK_INFO_STATE_CONNECTED | 已连接              | ^[number]                    |   1    |
| ES_NETWORK_INFO_STATE_SUSPENDED  | 挂起               | ^[number]        |   2    |
| ES_NETWORK_INFO_STATE_DISCONNECTING| 正在断开连接               | ^[number]                    |   3    |
| ES_NETWORK_INFO_STATE_DISCONNECTED| 断开连接               | ^[number]                    |   4    |
| ES_NETWORK_INFO_STATE_UNKNOWN| 未知               | ^[number]                    |   5    |

### Exposes

| Name                             | Description                 | Type                                           |
| -------------------------------- | --------------------------- | -----------------------------------------------|
| getActiveNetworkInfo             | 该方法获取可用网络信息          | ^[Function]`getActiveNetworkInfo() => ESNetworkInfo \| null`   |
| isNetworkConnected               | 该方法判断网络是否连接             | ^[Function]`isNetworkConnected() => boolean`   |
| getWifiInfo               | 该方法获取WIFI信息             | ^[Function]`getWifiInfo() => Promise<ESWifiInfo>`   |
| addListener               | 该方法添加网络监听             | ^[Function]`addListener(listener: ESNetworkListener) => void`   |
| removeListener            | 该方法删除网络监听             | ^[Function]`removeListener(listener: ESNetworkListener) => void`   |
