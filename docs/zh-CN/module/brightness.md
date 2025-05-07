---
title: Brightness
lang: zh-CN
---

# 屏幕亮度模块

使用此模块可以调节`android`系统的屏幕亮度。

:::demo ## 基础用法

module/brightness/es-basic

:::

:::demo ## qt.brightness 用法 ^(alpha)

module/brightness/qt-basic

:::

## API

### Exposes

| Name                             | Description                 | Type                                           |
| -------------------------------- | --------------------------- | -----------------------------------------------|
| getScreenBrightness              | 获取屏幕亮度                   | ^[Function]`() => Promise<ESBrightnessInfo>`   |
| getWindowBrightness              | 获取窗口亮度                   | ^[Function]`() => Promise<ESBrightnessInfo>`   |
| getScreenBrightnessMode          | 获取屏幕亮度模式                | ^[Function]`() => Promise<ESBrightnessInfo>`   |
| getMaxBrightness                 | 获取最大亮度                   | ^[Function]`() => Promise<ESBrightnessInfo>`   |
| changeWindowBrightness           | 改变窗口亮度                   | ^[Function]`(brightness: number) => void`      |
| changeScreenBrightness           | 改变屏幕亮度                   | ^[Function]`(systemBrightness: number) => void`|
