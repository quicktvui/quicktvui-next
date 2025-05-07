---
title: AppIcon
lang: zh-CN
---

# AppIcon

## API

### Attributes

| Name                 | Description       | Type       | Default |
| -------------------- | ----------------- | -----------| ------- |
| roundingRadius       | 应用图标圆角         | ^[string]  | —       |
| packageName          | 应用包名            | ^[string]  | —       |

### Exposes

| Name              | Description       | Type                                          |
| ----------------- | ----------------- | --------------------------------------------- |
| setPackageName    | 设置应用包名        | ^[Function]`(packageName: string) => void`     |
| setRoundingRadius | 设置应用图标的圆角度数 | ^[Function]`(roundingRadius: number) => void` |
