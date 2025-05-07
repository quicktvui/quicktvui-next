---
title: ActionBar
lang: zh-CN
---

# 工具栏模块

控制显示容器内置的工具栏

<img src="/module/action-bar/action_bar.png" />

:::demo ## 基础用法

module/action-bar/es-basic

:::

:::demo ## qt.actionBar 用法 ^(alpha)

module/action-bar/qt-basic

:::

## API

### Exposes

| Name                             | Description                 | Type                                |
| -------------------------------- | --------------------------- | ------------------------------------|
| show                             | 显示工具栏                    | ^[Function]`() => void`               |
| dismiss                          | 隐藏工具栏                    | ^[Function]`() => void`               |
| isShowing                        | 判断工具栏是否显示              | ^[Function]`() => Promise<boolean>`   |
