---
title: 'Installation'
lang: zh-CN
---

# 安装和环境配置

* ## 安装快应用开发环境

### 一、安装 `Node`

1. 下载安装`Node`

::: tip 建议：下载安装使用 v20.0.0 以上版本

[`根据你的系统选择相应版本下载最新的Node`](https://nodejs.org/en/)

:::

2. 检查`Node`是否安装成功

在`cmd`里执行`node -v`查看node版本信息或者验证是否安装成功。

  ```shell
  node -v
  v20.9.0
  ```

::: tip node 版本切换

[点击查看 node 版本管理](/zh-CN/guide/node/install)

:::

### 二、安装 `npm`

1. 下载安装`npm`

   新版的`Node.js`已经集成了`npm`，所以安装`Node`的同时也安装好了`npm`。

2. 检查`npm`是否安装成功

   在`cmd`里执行`npm -v`查看`npm`版本信息：

    ```shell
    npm -v
    10.1.0
    ```

::: tip npm 版本切换

[点击查看 npm 版本管理](/zh-CN/guide/npm/install)

:::

### 三、配置安卓设备

* 在 `Android` 设备上运行或测试快应用快应用之前，你需要一个运行 `Android 4.1（API 版本 16）` 或者更高的Android系统电视或者机顶盒设备。

* 打开设备 ADB 调试功能。

以小米电视为例，打开 ADB 调试功能：

<img src="/guide/basic/device_usb_debug.png" />


::: warning 注意：必须打开调试选项

***[点击查看各品牌电视和机顶盒打开 USB 调试方法](/zh-CN/guide/basic/appendix#二、各品牌机顶盒打开USB调试方法)***

在设备上打开 `Developer options` 和 `USB debugging`
选项，你可以在 [Android documentation](https://developer.android.google.cn/studio/debug/dev-options) 上查看更详细的方法介绍。
:::

### 四、查看 Android 设备网络 IP 地址

以小米电视为例，查看网络 IP 地址：

***打开步骤：设置 ==>  网络设置 ==>  有线网络/无线网络 ==>  IPV4/IPV6网络地址***


<img src="/guide/basic/device_ip_address.png" />

-----------------------------------

* ## 安装`Android`开发环境（非必需）

### 一、安装 `Android Studio`

1. 下载并安装[`Android Studio`](https://developer.android.google.cn/studio)。

2. 运行`Android Studio`并进入`Android Studio Setup Wizard`，这会安装最新的`Android SDK`， `Android SDK Platform-Tools`
   以及`Android SDK Build-Tools`，这些都是在开发快应用快应用时所需要的。

### 二、配置 PATH 环境变量

1. 找到 `Android SDK Platform-Tools`  路径。

一般情况，`Android SDK Platform-Tools`   存放路径如下：

* linux: `~/Android/Sdk`
* macos: `~/Library/Android/sdk`
* window: `%LOCALAPPDATA%\Android\sdk`

2. 在环境变量中添加 `Android SDK Platform-Tools`  路径。

```shell
$ export PATH="$PATH:[PATH_OF_ANDROID_SDK_PLATFORM_TOOLS]/platform-tools"
```

3. 检查环境变量是否配置成功

命令行执行命令 `adb`

```shell
adb
Android Debug Bridge version 1.0.41
Version 33.0.1-8253317
```

显示环境变量已经配置成功。

### 三、配置 Android 设备

在 `Android` 设备上运行或测试快应用快应用之前，你需要一个运行 `Android 4.1（API 版本 16）` 或者更高的Android系统电视或者机顶盒设备。

1. 在设备上打开 `Developer options` 和 `USB debugging`
   选项，你可以在 [Android documentation](https://developer.android.google.cn/studio/debug/dev-options) 上查看更详细的方法介绍。

2. 通过 `adb connect 设备ip地址` 连接设备和电脑，如果在设备上弹出需要授权弹窗，允许授权以便让电脑能够访问你的开发设备。

```shell
adb connect 192.168.90.102
connected to 192.168.90.102:5555
```

3. 在命令行中，使用 `adb devices` 命令来确保能够识别出你所连接的 Android 设备。

```shell
adb devices
List of devices attached
192.168.90.102:5555	device
```

