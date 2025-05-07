---
title: 共享数据模块
lang: zh-CN
---

# 共享数据模块

此模块用于多个快应用之间的数据共享（内存共享）。

:::demo ## 基础用法

module/share-data/es-basic

:::

:::demo ## qt.shareData 用法 ^(alpha)

module/share-data/qt-basic

:::

## API

### DataStructure

#### ESSharedData

共享数据信息

| Name            | Description        | Type                        |   Default   |
| -------------- | -------------------| ----------------------------|---------|
| mode           | 共享模式             | ^[ESSharedDataMode]          |   -    |
| type           | 数据类型             | ^[ESSharedDataType]          |   -    |
| secretKey      | 数据秘钥             | ^[string]                    |   -    |
| data           | 数据                | ^[any]                      |   -    |

#### ESSharedDataMode

共享模式

| Name                                  | Description       | Type                        |   Default   |
| ------------------------------------ | -------------------| ----------------------------|---------|
| ES_SHARED_DATA_MODE_PRIVATE           | 私有模式            | ^[number]          |   0    |
| ES_SHARED_DATA_MODE_WORLD_READABLE    | 只读               | ^[number]          |   1    |
| ES_SHARED_DATA_MODE_WORLD_WRITEABLE   | 可写               | ^[number]                    |   2    |

#### ESSharedDataType

共享数据类型

| Name                                  | Description       | Type                        |   Default   |
| ------------------------------------ | -------------------| ----------------------------|---------|
| ES_SHARED_DATA_TYPE_INT               | int               | ^[number]          |   0    |
| ES_SHARED_DATA_TYPE_LONG              | long              | ^[number]          |   1    |
| ES_SHARED_DATA_TYPE_FLOAT             | float             | ^[number]          |   2    |
| ES_SHARED_DATA_TYPE_STRING            | string            | ^[number]          |   3    |
| ES_SHARED_DATA_TYPE_BOOLEAN           | boolean           | ^[number]          |   4    |
| ES_SHARED_DATA_TYPE_MAP               | map               | ^[number]          |   5    |
| ES_SHARED_DATA_TYPE_ARRAY             | array             | ^[number]          |   6    |

#### ESSharedDataParams

共享数据接口参数

| Name            | Description                | Type              |   Default   |
| -------------- | -------------------| ------------------|---------|
| packageName    | 快应用包名           | ^[string]          |   -    |
| secretKey      | 秘钥                | ^[string]          |   -    |

### Exposes

| Name                             | Description                 | Type                                           |
| -------------------------------- | --------------------------- | -----------------------------------------------|
| getBoolean                    | 该方法获取`boolean`类型共享数据    | ^[Function]`getBoolean(params: ESSharedDataParams, key: string, defValue: boolean) => Promise<boolean>`   |
| putBoolean                    | 该方法存储`boolean`类型共享数据    | ^[Function]`putBoolean(params: ESSharedDataParams, key: string, value: boolean, mode: ESSharedDataMode) => Promise<boolean>`   |
| getInt                        | 该方法获取`int`类型共享数据        | ^[Function]`getInt(params: ESSharedDataParams, key: string, defValue: number) => Promise<number>`   |
| putInt                        | 该方法存储`int`类型共享数据        | ^[Function]`putInt(params: ESSharedDataParams, key: string, value: number, mode: ESSharedDataMode) => Promise<boolean>`   |
| getLong                        | 该方法获取`long`类型共享数据        | ^[Function]`getLong(params: ESSharedDataParams, key: string, defValue: number) => Promise<number>`   |
| putLong                        | 该方法存储`long`类型共享数据        | ^[Function]`putLong(params: ESSharedDataParams, key: string, value: number, mode: ESSharedDataMode) => Promise<boolean>`   |
| getString                        | 该方法获取`string`类型共享数据        | ^[Function]`getString(params: ESSharedDataParams, key: string, defValue: string \| null \| undefined) => Promise<string>`   |
| putString                        | 该方法存储`string`类型共享数据        | ^[Function]`putString(params: ESSharedDataParams, key: string, value: string, mode: ESSharedDataMode) => Promise<boolean>`   |
| getArray                        | 该方法获取`Array`类型共享数据        | ^[Function]`getArray(params: ESSharedDataParams, key: string, defValue: Array<any> \| null \| undefined) => Promise<Array<any>>`   |
| putArray                        | 该方法存储`Array`类型共享数据        | ^[Function]`putArray(params: ESSharedDataParams, key: string, value: Array<any>, mode: ESSharedDataMode) => Promise<boolean>`   |
| getMap                        | 该方法获取`Map`类型共享数据        | ^[Function]`getMap(params: ESSharedDataParams, key: string, defValue: Map<any, any> \| undefined \| null) => Promise<Map<any, any>>`   |
| putMap                        | 该方法存储`Map`类型共享数据        | ^[Function]`putMap(params: ESSharedDataParams, key: string, value: Map<any, any>, mode: ESSharedDataMode) => Promise<boolean>`   |
