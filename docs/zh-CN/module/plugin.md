---
title: 插件模块
lang: zh-CN
---

# 插件模块

此模块用于使用容器的插件功能。

:::demo ## 基础用法

module/plugin/es-basic

:::

:::demo ## qt.plugin 用法 ^(alpha)

module/plugin/qt-basic

:::

## API

### DataStructure

#### ESPluginInfo

| Name                      | Description          | Type                          |   Default   |
| ------------------------- | ----------------------| ----------------------------|---------|
| pkg                       |   插件的包名             | ^[string]          |   -    |

### Exposes

| Name                             | Description                 | Type                                           |
| -------------------------------- | --------------------------- | -----------------------------------------------|
| installPlugin                    | 该方法安装插件                 | ^[Function]`installPlugin(plugin: ESPluginInfo) => void`   |
| addListener                    | 该方法添加安装插件监听             | ^[Function]`addListener(plugin: ESPluginInfo, listener: ESPluginListener) => void`   |
| removeListener                   | 该方法删除安装插件监听             | ^[Function]`removeListener(listener: ESPluginListener) => void`   |
