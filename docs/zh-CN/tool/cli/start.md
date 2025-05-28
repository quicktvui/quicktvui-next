---
title: 'Start'
lang: zh-CN
---

# 打开应用

## 一、打开线上快应用

 ``` shell
# 基本用法：qui start 快应用包名@版本名称
qui start package@version
 ```

### 打开最新线上版本

 ``` shell
qui start com.quark.yun.tv
 ```

### 打开指定版本

 ``` shell
qui start com.quark.yun.tv@1.7.5.3
 ```

### 打开远程接口地址的快应用

 ``` shell
qui start com.quark.yun.tv -uri 192.168.40.45:38989
 ```

 ``` shell
qui start com.quark.yun.tv -uri http://192.168.40.62/android.zip
 ```

### 打开本地服务的快应用

 ``` shell
qui start com.quark.yun.tv -l
qui start com.quark.yun.tv -local
 ```

### 用指定的运行环境运行快应用（默认com.extscreen.runtime）

 ``` shell
qui start com.quark.yun.tv -p com.extscreen.runtime
 ```

## 二、打开仓库快应用

 ``` shell
qui start @organization/package/version
 ```
