---
title: ES
lang: zh-CN
---

# ES模块

此模块用来获取运行容器`SDK`相关的信息。

::: tip 快应用的文件存储路径（ES App File Path）对应的 android 系统路径为：/data/data/APK包名/app_rpk/apps/快应用包名/files

以 `Runtime` apk 和「八段锦」（`es.com.baduanjin.tv`） 快应用为例，对应的`android`
路径为: `/data/data/com.extscreen.runtime/app_rpk/apps/es.com.baduanjin.tv/files/`

:::

::: tip 快应用的运行路径（ES App Runtime Path）对应的 android 系统路径为：/data/data/APK包名/app_rpk/apps/快应用包名/版本号/android

以 `Runtime` apk 和 `2.2.2203`版本的「八段锦」（`es.com.baduanjin.tv`） 快应用为例，对应的`android`
路径为: `/data/data/com.extscreen.runtime/app_rpk/apps/es.com.baduanjin.tv/2.2.2203/android`

:::

:::demo ## 基础用法

module/es/es-basic

:::

:::demo ## qt.es 用法 ^(alpha)

module/es/qt-basic

:::

## API

### DataStructure

#### ESSDKInfo

SDK信息

| Name          | Description                | Type                          |   Default   |
| ------------------ | ------------------| ----------------------------|---------|
| cid                | sdk唯一标识符       | ^[string]                    |   -    |
| IPAddress          | IP地址            | ^[string]                    |   -    |
| deviceName         | 设备名称           | ^[string]                     |   -    |
| versionCode        | 版本号             | ^[number]                     |   -    |
| versionName        | 版本名称           | ^[string]                     |   -    |
| packageName        | 包名              | ^[string]                     |   -    |
| eskit_ver_code     | 版本号            | ^[number]                     |   -    |
| eskit_ver_name     | 版本名称           | ^[string]                     |   -    |
| miniProgramPath    | 快应用文件路径      | ^[string]                     |   -    |
| runtimePath        | 快应用路径          | ^[string]                     |   -    |
| schemes            | 支持的协议          | ^[string]                     |   -    |
| sdkChannel         | 渠道               | ^[string]                     |   -    |

### Exposes

| Name                             | Description                 | Type                                           |
| -------------------------------- | --------------------------- | -----------------------------------------------|
| getESSDKInfo                     | 该方法获取ES SDK的信息          | ^[Function]`() => ESSDKInfo`   |
| getESId                          | 该方法获取ES SDK的唯一标识符     | ^[Function]`() => string`   |
| getESName                        | 该方法获取ES SDK的名称          | ^[Function]`() => string`   |
| getESSDKVersionCode              | 该方法获取ES SDK版本号          | ^[Function]`() => number`   |
| getESSDKVersionName              | 该方法获取ES SDK版本名称         | ^[Function]`() => string`   |
| getESPackageName                 | 该方法获取ES SDK包名             | ^[Function]`() => string`   |
| getESAppFilePath                 | 该方法获取快应用文件存储路径        | ^[Function]`() => string`   |
| getESAppRuntimePath              | 该方法获取快应用rpk存储运行路径     | ^[Function]`() => string`   |
| getSupportSchemes                | 该方法获取快应用支持的协议列表     | ^[Function]`() => Array<string>`   |
| isModuleRegistered               | 该方法判断模块是否注册过          | ^[Function]`(className: string) => Promise<boolean>`   |
| isComponentRegistered            | 该方法判断组件是否注册过          | ^[Function]`(className: string) => Promise<boolean>`   |

