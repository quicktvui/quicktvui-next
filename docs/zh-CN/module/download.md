---
title: 文件下载模块
lang: zh-CN
---

# 文件下载模块

::: warning 注意：文件只能下载到快应用自身的文件目录

* 快应用自身的文件目录对应的`android`系统路径为：`/data/data/APK包名/app_rpk/apps/快应用包名/files`
* 默认下载目录为快应用自身的文件目录下的`download`目录：`/data/data/APK包名/app_rpk/apps/快应用包名/files/download`
* 示例中初始化下载目录方法：`initDownload()`使用默认下载目录：`/data/data/APK包名/app_rpk/apps/快应用包名/files/download`
* 示例中初始化下载目录方法：`initDownloadPath('/video', 1000)`，自定义了下载目录为：`快应用自身的文件目录/video`
  目录。既：`/data/data/APK包名/app_rpk/apps/快应用包名/files/video`

:::

:::demo ## 基础用法

module/download/es-basic

:::

:::demo ##  qt.download 用法 ^(alpha)

module/download/qt-basic

:::

## API

### DataStructure

#### ESDownloadInfo

下载信息

| Name          | Description                | Type                          |   Default   |
| -------------- | ------------------| ----------------------------|---------|
| id             | 下载的id           | ^[number]                      |   -    |
| fileName       | 文件名             | ^[string]                    |   -    |
| fileMD5        | 文件MD5值          | ^[string]                    |   -    |
| fileUrl        | 文件下载地址        | ^[string]                    |   -    |
| fileType       | 文件类型           | ^[string]                    |   -    |
| fileLength     | 文件长度            | ^[number]                    |   -    |
| downloadLength | 文件下载的长度       | ^[number]                    |   -    |
| params         | 下载文件的参数       | ^[ESDownloadParams]          |   -    |
| filePath       | 文件存储目录         | ^[string]                    |   -    |

#### ESDownloadParams

下载请求参数

| Name          | Description                | Type                          |   Default   |
| -------------- | ------------------| ----------------------------|---------|
| header         | 下载请求header参数  | ^[number]                     |   -    |

#### ESDownloadStatus

下载状态

| Name          | Description                | Type                          |   Default   |
| -------------- | ------------------| ----------------------------|---------|
| state          | 下载状态            | ^[ESDownloadState]           |   -    |
| download       | 下载信息            | ^[ESDownloadInfo]             |   -    |
| code           | 下载状态码          | ^[number]                     |   -    |
| message        | 下载信息            | ^[string]                     |   -    |
| downloadSize   | 下载文件长度         | ^[number]                     |   -    |
| totalSize      | 下载文件总长度       | ^[number]                     |   -    |

#### ESDownloadState

下载状态值

| Name          | Description                | Type                          |   Default   |
| -------------- | ------------------| ----------------------------|---------|
| ES_DOWNLOAD_STATE_INIT             | 下载初始化状态                 | ^[number]           |   0    |
| ES_DOWNLOAD_STATE_START            | 下载开始状态                   | ^[number]             |   1    |
| ES_DOWNLOAD_STATE_PROGRESS         | 下载进度状态                   | ^[number]                     |   2    |
| ES_DOWNLOAD_STATE_STOP             | 下载停止状态                   | ^[number]`                     |   3    |
| ES_DOWNLOAD_STATE_CANCEL           | 下载取消状态                   | ^[number]                     |   4    |
| ES_DOWNLOAD_STATE_SUCCESS          | 下载成功状态                   | ^[number]                     |   5    |
| ES_DOWNLOAD_STATE_ERROR            | 下载错误状态                   | ^[number]                     |   6    |

### Exposes

| Name                             | Description                 | Type                                           |
| -------------------------------- | --------------------------- | -----------------------------------------------|
| initDownload             | 该方法初始化默认下载设置          | ^[Function]`initDownload() => void`   |
| initDownloadPath             | 该方法初始化下载设置          | ^[Function]`initDownloadPath(downloadCacheDir: string, interpolator: number) => void`   |
| download             | 该方法用于下载          | ^[Function]`download(download: ESDownloadInfo) => void`   |
| start             | 该方法用于开始下载          | ^[Function]`start(download: ESDownloadInfo) => void`   |
| stop             | 该方法用于停止下载          | ^[Function]`stop(download: ESDownloadInfo) => void`   |
| cancel             | 该方法用于取消下载          | ^[Function]`cancel(download: ESDownloadInfo) => void`   |
| release             | 该方法用于回收资源          | ^[Function]`release() => void`   |
| addListener             | 该方法用于添加监听          | ^[Function]`addListener(download: ESDownloadInfo, listener: ESDownloadListener) => void`   |
| removeListener             | 该方法用于删除监听          | ^[Function]`removeListener(listener: ESDownloadListener) => void`   |
