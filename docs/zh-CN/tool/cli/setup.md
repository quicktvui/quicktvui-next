---
title: 'Setup'
lang: zh-CN
---

# 配置开发环境

在命令行输入：

 ``` shell
qui setup
 ```

## 第一步、连接安卓设备

输入安卓设备地址

<img src="/tool/cli/cli_setup_connect_device.jpg" />

::: warning 常见错误：

* 设备 USB 调试没有打开，会报如下错误：

<img src="/tool/cli/cli_setup_disconnected.jpg" />

* IP 地址输入错误或者网络不可用，会报如下错误：

<img src="/tool/cli/cli_setup_connect_error.jpg" />

:::

## 第二步、安装调试容器

1、 选择调试容器版本

<img src="/tool/cli/cli_setup_select_runtime.jpg" />

2、 下载调试容器（自动执行）

<img src="/tool/cli/cli_setup_download_apk.jpg" />

3、 安装调试容器（自动执行）

<img src="/tool/cli/cli_setup_install_apk.jpg" />

## 第三步、启动容器，并设置服务调试地址（自动执行）

<img src="/tool/cli/cli_setup_completed.jpg" />

::: tip 手动配置调试服务地址

[点击查看 qui debug 命令](/zh-CN/tool/cli/debug#二、配置调试服务地址)

:::

## 第四步、设置完成

提示：`Setup Completed!`，设置成功！
