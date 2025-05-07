---
title: 运行环境模块
lang: zh-CN
---

# 运行环境模块

此模块用于获取快应用运行容器的机型信息和唯一标识符。

:::demo ## 基础用法

module/runtime/es-basic

:::

:::demo ## qt.runtime 用法 ^(alpha)

module/runtime/qt-basic

:::

## API

### DataStructure

#### ESRuntimeDeviceInfo

运行环境信息

| Name          | Description       | Type         |   Default   |
| -------------| -------------------| ------------|---------|
| deviceId     | 设备ID              | ^[string]    |   -    |
| deviceType   | 设备类型             | ^[string]    |   -     |

### Exposes

| Name                             | Description                 | Type                                           |
| -------------------------------- | --------------------------- | -----------------------------------------------|
| getRuntimeDeviceInfo             | 该方法获取运行环境信息           | ^[Function]`getRuntimeDeviceInfo() => ESRuntimeDeviceInfo \| null`   |
| getRuntimeDeviceId               | 该方法获取运行环境唯一标识符      | ^[Function]`getRuntimeDeviceId() => string \| null`   |
| getRuntimeDeviceType             | 该方法获取运行环境类型      | ^[Function]`getRuntimeDeviceType() => string \| null`   |
