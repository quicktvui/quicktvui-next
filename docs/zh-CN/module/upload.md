---
title: 文件上传模块
lang: zh-CN
---

# 文件上传模块

::: warning 注意：文件上传模块只能操作快应用自身的文件目录下的文件

* 快应用自身的文件目录对应的`android`系统路径为：`/data/data/APK包名/app_rpk/apps/快应用包名/files`
* 示例中上传文件的路径：`filePath: '/video/bbb.zip',`对应`android`目录：`/data/data/APK包名/app_rpk/apps/快应用包名/files/video/bbb.zip`文件。

:::

:::demo ## 基础用法

module/upload/es-basic

:::


:::demo ## qt.upload 用法 ^(alpha)

module/upload/qt-basic

:::

## API

### DataStructure

#### ESUploadInfo

文件上传信息

| Name           | Description       | Type                         |   Default   |
| -------------- | ------------------ | ----------------------------|---------|
| id             | 唯一标识符           | ^[string]                    |   -    |
| url            | 上传地址            | ^[string]                    |   -    |
| mediaType      | 媒资类型            | ^[string]                    |   -    |
| fileParamsKey  | 渠道               | ^[string]                    |   -    |
| filePath       | 文件存储目录         | ^[string]                    |   -    |
| params         | 上传参数            | ^[Map<string, string>]       |   -    |
| header         | 上传header参数      | ^[Map<string, string>]       |   -    |

### Exposes

| Name                             | Description                 | Type                                           |
| -------------------------------- | --------------------------- | -----------------------------------------------|
| upload                    | 该方法上传文件                 | ^[Function]`upload(info: ESUploadInfo) => void`   |
| addListener                    | 该方法添加文件上传监听          | ^[Function]`addListener(info: ESUploadInfo, listener: ESUploadListener) => void`   |
| removeListener                    | 该方法删除文件上传监听          | ^[Function]`removeListener(listener: ESUploadListener) => void`   |

