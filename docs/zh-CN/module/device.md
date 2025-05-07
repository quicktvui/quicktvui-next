---
title: 设备信息模块
lang: zh-CN
---

# 设备信息模块

此模块用于获取快应用运行设备的信息。

:::demo ## 基础用法

module/device/es-basic

:::

:::demo ## qt.device 用法 ^(alpha)

module/device/qt-basic

:::

## API

### DataStructure

#### ESDeviceInfo

设备信息

| Name                         | Description                           | Type                        |   Default   |
| --------------------------- | ------------------------------| ----------------------------|---------|
| ethMac                      | 有线网络MAC地址                 | ^[string]                     |   -    |
| wifiMac                     | 无线网络MAC地址                 | ^[string]                    |   -    |
| ipAddress                   | 网络IP地址                     | ^[string]                    |   -    |
| totalMemory                 | 设备总内存                     | ^[number]                    |   -    |
| availableMemory             | 设备可用内存                    | ^[number]                    |   -    |
| screenWidth                 | 屏幕宽度                       | ^[number]                    |   -    |
| screenHeight                | 屏幕高度                       | ^[number]                    |   -    |
| resolution                  | 屏幕分辨率                     | ^[string]                    |   -    |
| density                     | 屏幕像素密度                    | ^[number]                    |   -    |
| densityDpi                  | 屏幕物理密度                    | ^[number]                    |   -    |
| scaledDensity               | 屏幕字体缩放比例                 | ^[number]                    |   -    |
| buildModel                  | buildModel                    | ^[string]                    |   -    |
| buildBrand                  | buildBrand                    | ^[string]                    |   -    |
| buildBoard                  | buildBoard                    | ^[string]                    |   -    |
| buildDevice                 | buildDevice                   | ^[string]                    |   -    |
| buildProduct                | buildProduct                  | ^[string]                    |   -    |
| buildHardware               | buildHardware                 | ^[string]                    |   -    |
| buildManufacturer           | buildManufacturer             | ^[string]                    |   -    |
| buildSerial                 | buildSerial                   | ^[string]                    |   -    |
| buildTags                   | buildTags                     | ^[string]                    |   -    |
| buildId                     | buildId                       | ^[string]                    |   -    |
| buildTime                   | buildTime                     | ^[number]                    |   -    |
| buildType                   | buildType                     | ^[string]                    |   -    |
| buildUser                   | buildUser                     | ^[string]                    |   -    |
| buildBootloader             | buildBootloader               | ^[string]                    |   -    |
| buildDisplay                | buildDisplay                  | ^[string]                    |   -    |
| buildFingerPrint            | buildFingerPrint              | ^[string]                    |   -    |
| buildVersionRelease         | buildVersionRelease           | ^[string]                    |   -    |
| buildVersionIncremental     | buildVersionIncremental       | ^[string]                    |   -    |
| buildVersionBaseOS          | buildVersionBaseOS            | ^[string]                    |   -    |
| buildVersionCodeName        | buildVersionCodeName          | ^[string]                    |   -    |
| buildVersionSecurityPatch   | buildVersionSecurityPatch     | ^[string]                   |   -    |
| buildVersionPreviewSDKInt   | buildVersionPreviewSDKInt     | ^[number]                    |   -    |
| buildVersionSDKInt          | buildVersionSDKInt            | ^[number]                    |   -    |

### Exposes

| Name                             | Description                 | Type                                           |
| -------------------------------- | --------------------------- | -----------------------------------------------|
| getDevice             | 该方法用于获取安卓设备信息          | ^[Function]`getDevice() => ESDeviceInfo`   |
| getScreenWidth        | 该方法用于获取安卓设备的屏幕宽度     | ^[Function]`getScreenWidth() => number`   |
| getScreenHeight        | 该方法用于获取安卓设备的屏幕高度     | ^[Function]`getScreenHeight() => number`   |
| getAndroidAPILevel        | 该方法用于获取安卓设备的API Level     | ^[Function]`getAndroidAPILevel() => string \| null`   |
| getDeviceEthMac        | 该方法用于获取安卓设备有线MAC地址     | ^[Function]`getDeviceEthMac() => string`   |
| getDeviceWifiMac        | 该方法用于获取安卓设备无线MAC地址     | ^[Function]`getDeviceWifiMac() => string`   |
| getDeviceTotalMemory        | 该方法用于获取安卓设备总内存     | ^[Function]`getDeviceTotalMemory() => number`   |
| getDeviceAvailMemory        | 该方法用于获取安卓设备可用内存     | ^[Function]`getDeviceAvailMemory() => number`   |
| getScreenWidth        | 该方法用于获取安卓设备屏幕宽度     | ^[Function]`getScreenWidth() => number`   |
| getScreenHeight        | 该方法用于获取安卓设备屏幕高度     | ^[Function]`getScreenHeight() => number`   |
| getResolution        | 该方法用于获取安卓设备屏幕分辨率     | ^[Function]`getResolution() => string`   |
| getDensity        | 该方法用于获取安卓设备屏幕像素密度     | ^[Function]`getDensity() => number`   |
| getDensityDpi        | 该方法用于获取安卓设备屏幕物理密度     | ^[Function]`getDensityDpi() => number`   |
| getScaledDensity        | 该方法用于获取安卓设备屏幕字体缩放比例     | ^[Function]`getScaledDensity() => number`   |
| getIPAddress        | 该方法用于获取安卓设备IP地址     | ^[Function]`getIPAddress() => string`   |
| getBuildModel        | 该方法用于获取安卓设备BuildModel     | ^[Function]`getBuildModel() => string`   |
| getBuildBrand        | 该方法用于获取安卓设备BuildBrand     | ^[Function]`getBuildBrand() => string`   |
| getBuildBoard        | 该方法用于获取安卓设备BuildBoard     | ^[Function]`getBuildBoard() => string`   |
| getBuildDevice        | 该方法用于获取安卓设备BuildDevice     | ^[Function]`getBuildDevice() => string`   |
| getBuildProduct        | 该方法用于获取安卓设备BuildProduct     | ^[Function]`getBuildProduct() => string`   |
| getBuildHardware        | 该方法用于获取安卓设备BuildHardware     | ^[Function]`getBuildHardware() => string`   |
| getBuildManufacturer        | 该方法用于获取安卓设备BuildManufacturer     | ^[Function]`getBuildManufacturer() => string`   |
| getBuildSerial        | 该方法用于获取安卓设备BuildSerial     | ^[Function]`getBuildSerial() => string`   |
| getBuildTags        | 该方法用于获取安卓设备BuildTags     | ^[Function]`getBuildTags() => string`   |
| getBuildId        | 该方法用于获取安卓设备BuildId     | ^[Function]`getBuildId() => string`   |
| getBuildTime        | 该方法用于获取安卓设备BuildTime     | ^[Function]`getBuildTime() => number`   |
| getBuildType        | 该方法用于获取安卓设备BuildType     | ^[Function]`getBuildType() => string`   |
| getBuildUser        | 该方法用于获取安卓设备BuildUser     | ^[Function]`getBuildUser() => string`   |
| getBuildBootloader        | 该方法用于获取安卓设备BuildBootloader     | ^[Function]`getBuildBootloader() => string`   |
| getBuildDisplay        | 该方法用于获取安卓设备BuildDisplay     | ^[Function]`getBuildDisplay() => string`   |
| getBuildFingerPrint        | 该方法用于获取安卓设备BuildFingerPrint     | ^[Function]`getBuildFingerPrint() => string`   |
| getBuildVersionIncremental        | 该方法用于获取安卓设备BuildVersionIncremental     | ^[Function]`getBuildVersionIncremental() => string`   |
| getBuildVersionBaseOS        | 该方法用于获取安卓设备BuildVersionBaseOS     | ^[Function]`getBuildVersionBaseOS() => string`   |
| getBuildVersionCodeName        | 该方法用于获取安卓设备BuildVersionCodeName     | ^[Function]`getBuildVersionCodeName() => string`   |
| getBuildVersionSecurityPatch        | 该方法用于获取安卓设备BuildVersionSecurityPatch     | ^[Function]`getBuildVersionSecurityPatch() => string`   |
| getBuildVersionPreviewSDKInt        | 该方法用于获取安卓设备BuildVersionPreviewSDKInt     | ^[Function]`getBuildVersionPreviewSDKInt() => number`   |
| getBuildVersionSDKInt        | 该方法用于获取安卓设备BuildVersionSDKInt     | ^[Function]`getBuildVersionSDKInt() => number`   |
| getBuildVersionRelease        | 该方法用于获取安卓设备BuildVersionRelease     | ^[Function]`getBuildVersionRelease() => string`   |
