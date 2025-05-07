---
title: Display
lang: zh-CN
---

# 显示模块

使用此模块可以获取屏幕的宽高，根据尺寸换算适配的尺寸。

:::demo ## 基础用法

module/display/es-basic

:::

:::demo ## qt.display 用法 ^(alpha)

module/display/qt-basic

:::

## API

### Exposes

| Name                             | Description                 | Type                                           |
| -------------------------------- | --------------------------- | -----------------------------------------------|
| getDisplayScale                  | 获取尺寸变形比例               | ^[Function]`() => number`   |
| getDisplaySize                   | 获取屏幕适配的尺寸             | ^[Function]`(size: number) => number`   |
| getScreenWidth                   | 获取屏幕宽度                  | ^[Function]`() => number`   |
| getScreenHeight                  | 获取屏幕高度                  | ^[Function]`() => number`   |


