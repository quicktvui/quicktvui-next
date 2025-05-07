---
title: 定位模块
lang: zh-CN
---

# 定位模块

此模块用于调用容器定位功能。

:::demo ## 基础用法

module/location/es-basic

:::

:::demo ## qt.location 用法 ^(alpha)

module/location/qt-basic

:::

## API

### DataStructure

#### ESLocationInfo

位置信息

| Name          | Description                | Type                          |   Default   |
| ------------------ | ------------------| ----------------------------|---------|
| address            | 地址               | ^[string]                    |   -    |
| province           | 省份               | ^[string]                    |   -    |
| city               | 城市               | ^[string]                    |   -    |
| district           | 地区               | ^[string]                    |   -    |
| name               | 名称               | ^[string]                    |   -    |
| longitude          | 经度               | ^[number]                    |   -    |
| latitude           | 纬度               | ^[number]                    |   -    |

### Exposes

| Name                             | Description                 | Type                                           |
| -------------------------------- | --------------------------- | -----------------------------------------------|
| getLocation             | 该方法获取位置信息          | ^[Function]`getLocation() => Promise<ESLocationInfo \| null>`   |
| launchLocation               | 该方法打开定位设置             | ^[Function]`launchLocation() => void`   |
| addListener               | 该方法添加定位监听             | ^[Function]`addListener(listener: ESLocationListener) => void`   |
| removeListener               | 该方法删除定位监听             | ^[Function]`removeListener(listener: ESLocationListener) => void`   |

