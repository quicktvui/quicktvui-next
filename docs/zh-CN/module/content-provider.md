---
title: 内容提供者模块
lang: zh-CN
---

# 内容提供者模块

使用此模块可以调用`android`系统中的内容提供者服务。

你可以在 [Android documentation](https://developer.android.google.cn/guide/topics/providers/content-provider-basics?hl=zh-cn)
上查看更详细的介绍。

:::demo ## 基础用法

module/content-provider/es-basic

:::

:::demo ## qt.provider 用法 ^(alpha)

module/content-provider/qt-basic

:::

## API

### DataStructure

#### ESContentValues

内容信息

| Name          | Description        | Type                          |   Default   |
| -------------- | ------------------| ----------------------------|---------|
| `string`      | `string`类型的key, `value`类型为`any` | ^[any]       |   -    |

#### ESContentProviderInfo

内容信息

| Name          | Description                | Type                          |   Default   |
| -------------- | ------------------| ----------------------------|---------|
| result         | 获取内容结果        | ^[ESContentProviderResult]    |   -    |
| message        | 消息              | ^[string]                     |   -    |
| data           | 内容数据           | ^[Array<ESContentValues>]     |   -    |

#### ESContentProviderResult

获取内容结果

| Name          | Description                | Type                          |   Default   |
| -------------- | ------------------| ----------------------------|---------|
| ES_CONTENT_PROVIDER_RESULT_SUCCESS | 获取内容结果成功 | ^[ESContentProviderResult]    |   -    |
| ES_CONTENT_PROVIDER_RESULT_ERROR   | 获取内容结果失败 | ^[ESContentProviderResult]    |   -    |

### Exposes

| Name                             | Description                 | Type                                           |
| -------------------------------- | --------------------------- | -----------------------------------------------|
| insert             | 该方法插入信息          | ^[Function]`insert(uri: string, data: ESContentValues) => Promise<ESContentProviderInfo>`   |
| query             | 该方法查询信息          | ^[Function]`query(uri: string, projection?: Array<string>, selection?: string, selectionArgs?: Array<string>, sortOrder?: string, data?: ESContentValues) => Promise<ESContentProviderInfo>`   |
| update             | 该方法更新信息          | ^[Function]`update(uri: string, data: ESContentValues, where: string, selectionArgs: Array<string>) => Promise<ESContentProviderInfo>`   |
| deleteData             | 该方法删除信息          | ^[Function]`deleteData(uri: string, where: string, selectionArgs: Array<string>) => Promise<ESContentProviderInfo>`   |

