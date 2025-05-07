---
title: 'ReleaseAPK'
lang: zh-CN
---

# 打包 APK

如果你有了一个成功发布的快应用，你可以将它们打包成自己的APK，并且可以通过[QuickTV中心仓库](http://hub.quicktv.net/)来随时更新你的快应用。

## 一、克隆打包项目

```shell
git clone https://github.com/quicktvui/quicktvui-apk-builder.git
```

## 二、配置

### 1、 配置打包环境

进入`quicktvui-apk-builder` 项目根目录，修改`app/local.properties`文件:

::: tip
***AndroidSDK路径修改为自己电脑的SDK路径***
***sdk.dir=AndroidSDK路径***
:::

### 2、 配置打包信息

进入`quicktvui-apk-builder` 项目根目录，修改`app.json`:

```
{
  "_load_app": "@quicktvui/api-demo"        // 指定的快应用
  "_app_package": "com.quicktv.sample",     // 输出APK的包名
  "_app_name": "QuickTV-Sample",            // 输出APK的名称
  "_version_code": 1,                       // 输出APK的版本号
  "_version_name": "1.0.0",                 // 输出APK的版本名称
  "_repository": "http://hub.quicktvui.com/repository/rpk", // 默认app加载源地
}
```

## 三、打包

进入`quicktvui-apk-builder` 项目根目录下面执行如下命令：

``` bash
# 生成debug包
./gradlew app:assembleDebug
# 生成release包
./gradlew app:assembleRelease
```
