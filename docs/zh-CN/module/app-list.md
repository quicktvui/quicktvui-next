---
title: 应用列表模块
lang: zh-CN
---

# 应用列表模块

此模块用来获取系统预装的应用和用户自己安装的应用列表。

:::demo ## 基础用法

module/app-list/es-basic

:::

:::demo ## qt.appList 用法 ^(alpha)

module/app-list/qt-basic

:::

## API

### DataStructure

#### ESAppInfo

应用信息

| Name          | Description                | Type                          |   Default   |
| -------------- | ------------------| ----------------------------|---------|
| name          | 应用名称           | ^[string]                      |   -    |
| pkg           | 应用包名           |  ^[string]                      |   -    |
| verCode       | 应用版本号         | ^[number]                      |   -    |
| verName       | 应用版本名称        |  ^[string]                      |   -    |
| installTime   | 应用安装时间        | ^[number]                      |   -    |
| updateTime    | 应用更新时间        | ^[number]                      |   -    |
| isSystemApp   | 是否是系统应用      |  ^[boolean]                     |   -    |

#### ESAppInfoList

应用列表

| Name          | Description                | Type                          |   Default   |
| -------------- | ------------------| ----------------------------|---------|
| system         | 系统应用列表        | ^[Array<ESAppInfo>]           |   -    |
| user           | 用户应用列表        | ^[Array<ESAppInfo>]           |   -    |

### Exposes

| Name                             | Description                 | Type                                           |
| -------------------------------- | --------------------------- | -----------------------------------------------|
| isAppInstalled                   | 该方法根据应用包名判断应用是否安装       | ^[Function]`isAppInstalled(packageName: string) => Promise<boolean>`   |
| isSystemApp                      | 该方法根据应用包名判断应用是否是系统应用   | ^[Function]`isSystemApp(packageName: string) => Promise<boolean>`   |
| getAppList                       | 该方法获取系统应用列表                 | ^[Function]`getAppList() => Promise<ESAppInfoList>`   |
| getAppInfo                       | 该方法获取应用信息                    | ^[Function]`getAppInfo(packageName: string) => Promise<ESAppInfo>`   |
| getAutoStartAppList              | 该方法获取系统开机启动应用列表          | ^[Function]`getAutoStartAppList() => Promise<Array<ESAppInfo>>`   |
