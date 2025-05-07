---
title: 'Debug'
lang: zh-CN
---

# 调试

::: tip 调试常见问题

* [点击查看调试常见问题](/zh-CN/guide/faq/dev-faq)
  :::

## 一、调试前置条件

* ***调试设备已经连接***

```shell
quicktvui@MacBookPro ~ % adb connect 192.168.90.102
connected to 192.168.90.102:5555

quicktvui@MacBookPro ~ % adb devices
List of devices attached
192.168.90.102:5555	device
```

::: tip 连接设备并且打开 ADB 调试

* [点击查看 打开 ADB 调试](/zh-CN/guide/basic/installation#三、配置安卓设备)

* [点击查看 qui setup 详细信息](/zh-CN/tool/cli/setup)

:::

* ***本地服务已经启动***

以下命令已执行并且无报错

```shell
npm run dev
```

::: tip npm run dev 常见问题

* [点击查看调试常见问题](/zh-CN/guide/faq/dev-faq)

:::

<img src="/guide/basic/npm_run_dev.jpg" />

## 二、加载测试代码

用遥控器或鼠标点击`加载测试代码`按钮。

::: warning 注意：如点击后，一直显示 加载中，执行 adb shell ping 192.168.x.x（电脑ip） 命令来判断电视端是否可以访问到电脑端。此步要确保电视端能访问到电脑端。
:::

<img src="/guide/basic/debug_runtime_ok.jpg" />

## 三、查看LOG

用 `chrome` 浏览器打开`http://localhost:38989/extensions/home.html?env=hippy`。

<img src="/guide/basic/debug_chrome.jpg" />

点击 `Elements` 查看元素

<img src="/guide/basic/debug_chrome_elements.jpg" />

点击 `Log` 查看日志

<img src="/guide/basic/debug_chrome_logging.jpg" />

## 四、常见错误码

启动调试apk的时候，如果遇到错误，请参照错误码说明。

<img src="/guide/basic/debug_err_code.png" />

| 错误码              | 说明       |
| ----------------- | ----------------- |
| -101              | js代码出错，可以查看Chrome Log来定位        |
| -102              | 加载测试代码失败,请查看debug服务是否运行，并能访问通 |
| -103              | 引擎初始化失败，请退出重进 |
| -1000             | 访问不通快应用后台，请检查网络 |
| -1001             | 访问超时，请检查网络 |
| -1002             | 服务端报错 |
| -1003             | 获取应用信息出错 |
| -1004             | 服务端未知错误 |
| -2000             | rpk 下载地址出错 |
| -2001             | rpk 下载失败 |
| -3000             | rpk 解密失败 |
| -3001             | rpk MD5不匹配 |
| -3002             | rpk 解包失败 |
| -4000             | 从Assets加载 rpk 失败 |
