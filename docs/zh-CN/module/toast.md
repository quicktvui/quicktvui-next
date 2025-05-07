---
title: Toast模块
lang: zh-CN
---

# Toast模块

此模块调用显示`android`系统`Toast`。

:::demo ## 基础用法

module/toast/es-basic

:::

:::demo ## qt.toast 用法 ^(alpha)

module/toast/qt-basic

:::

## API

### Exposes

| Name                             | Description                 | Type                                           |
| -------------------------------- | --------------------------- | -----------------------------------------------|
| showToast                    | 该方法显示吐司                 | ^[Function]`showToast(message: string) => void`   |
| showLongToast                    | 该方法显示长时间吐司          | ^[Function]`showLongToast(message: string) => void`   |
| showShortToast                    | 该方法显示短时间吐司          | ^[Function]`showShortToast(message: string) => void`   |
