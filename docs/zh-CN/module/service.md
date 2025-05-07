---
title: Service
lang: zh-CN
---

# 服务模块

使用此模块可以启动`android`系统中的服务。

你可以在 [Android documentation](https://developer.android.google.cn/develop/background-work/services?hl=zh-cn)
上查看更详细的介绍。

:::demo ## 基础用法

module/service/es-basic

:::

:::demo ## qt.service 用法 ^(alpha)

module/service/qt-basic

:::

## API

### Exposes

| Name                             | Description                 | Type                                           |
| -------------------------------- | --------------------------- | -----------------------------------------------|
| startService                     | 启动服务                      | ^[Function]`(paramsArray: Array<Array<string \| number \| boolean>>) => void`   |


