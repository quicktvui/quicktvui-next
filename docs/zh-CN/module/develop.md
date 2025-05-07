---
title: 开发信息模块
lang: zh-CN
---

# 开发信息模块

此模块用于获取快应用运行容器的相关信息。

:::demo ## 基础用法

module/develop/es-basic

:::

:::demo ## qt.develop 用法 ^(alpha)

module/develop/qt-basic

:::

## API

### DataStructure

#### ESDevelopInfo

开发者信息

| Name          | Description        | Type                          |   Default   |
| -------------- | ------------------| ----------------------------|---------|
| versionCode    | 版本号             | ^[number]                    |   -    |
| versionName    | 版本名称            | ^[string]                    |   -    |
| packageName    | 包名               | ^[string]                    |   -    |
| channel        | 渠道               | ^[string]                    |   -    |

### Exposes

| Name                             | Description                 | Type                                           |
| -------------------------------- | --------------------------- | -----------------------------------------------|
| getDevelop             | 该方法获取开发者信息          | ^[Function]`getDevelop() => ESDevelopInfo`   |
| getPackageName             | 该方法获取包名          | ^[Function]`getPackageName() => string`   |
| getVersionName             | 该方法获取版本名称          | ^[Function]`getVersionName() => string`   |
| getVersionCode             | 该方法获取版本号          | ^[Function]`getVersionCode() => string`   |
| getChannel             | 该方法获取版本号          | ^[Function]`getChannel() => string`   |
