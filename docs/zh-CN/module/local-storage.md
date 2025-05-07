---
title: 本地存储模块
lang: zh-CN
---

# 本地存储模块

此模块用于快应用***少量数据***持久化存储。

:::demo ## 基础用法

module/local-storage/es-basic

:::

:::demo ## qt.storage 用法 ^(alpha)

module/local-storage/qt-basic

:::

## API

### Exposes

| Name                             | Description                 | Type                                           |
| -------------------------------- | --------------------------- | -----------------------------------------------|
| getBoolean             | 该方法获取`Boolean`类型的值               | ^[Function]`getBoolean(key: string, defValue: boolean) => Promise<boolean>`   |
| putBoolean               | 该方法存储`Boolean`类型的值             | ^[Function]`putBoolean(key: string, value: boolean) => Promise<boolean>`   |
| getInt               | 该方法获取`Int`类型的值            | ^[Function]`getInt(key: string, defValue: number) => Promise<boolean>`   |
| putInt               | 该方法存储`Int`类型的值            | ^[Function]`putInt(key: string, value: number) => Promise<boolean>`   |
| getLong               | 该方法获取`Long`类型的值           | ^[Function]`getLong(key: string, defValue: number) => Promise<boolean>`   |
| putLong               | 该方法存储`Long`类型的值           | ^[Function]`putLong(key: string, value: number) => Promise<boolean>`   |
| getString               | 该方法获取`String`类型的值           | ^[Function]`getString(key: string, defValue: string) => Promise<boolean>`   |
| putString               | 该方法存储`String`类型的值           | ^[Function]`putString(key: string, value: string) => Promise<boolean>`   |
