---
title: 'DevFAQ'
lang: zh-CN
---

# 调试相关问题

## 一、`npm run dev`相关

::: tip Node 和 Npm 版本管理

* [点击查看 node 版本管理](/zh-CN/guide/node/install)
* [点击查看 npm  版本管理](/zh-CN/guide/npm/install)

:::

### 错误一、

`Windows`平台报错：

```shell
HMR websocket error: Error: connect ECONNREFUSED 127.0.0.1:38989
```

<img src="/guide/faq/npm-run-dev-connect-refused.jpg" />

::: tip 解决方案：

***1、安装`node`版本大于 `v16.20.2` 并小于`v18.18.0`***

* [点击查看 node 版本管理](/zh-CN/guide/node/install)
* [点击查看 npm 版本管理](/zh-CN/guide/npm/install)

***2、安装`Chrome`浏览器，并设置为默认浏览器***

***3、重启电脑***

***4、重新执行`npm run dev`***
:::

### 错误二、

`Windows`平台报错：

```shell
process-handler error unhandledRejection Error: The specified module could not be found.
```

<img src="/guide/faq/npm-run-dev-dll.jpg" />
<img src="/guide/faq/npm-run-dev-dll-connect-failed.jpg" />

::: tip 解决方案：

***1、检测`node`可执行程序的完整性***

***2、检测系统中`.dll`的完整性。使用`DLL`错误修复工具修复系统***
:::


## 二、Vue2 项目升级最新 DebugServer

* [点击查看`DebugServer`](/zh-CN/guide/basic/dev-debug)

***最新 DebugServer 支持以下特性：***

* 解决`vue2`项目只能使用`node`以下`18版本`的问题
* 可以通过`chrome devtools`查看页面元素
* 支持`chrome 116版本`以上的`chrome devtools`
* 本地调试项目只需执行`npm run dev`命令，不再需要执行`npm run debug`即可
* 编译项目只需要执行`npm run build`命令，不再需要执行`npm run vendor`即可


### 迁移步骤：

`quicktvui-template-vue2`是`vue2`项目使用`DebugServer`的模版。

#### 第一步、克隆模版项目

克隆`quicktvui-template-vue2`

```shell
git clone https://github.com/quicktvui/quicktvui-template-vue2.git
```
#### 第二步、迁移脚本

使用`quicktvui-template-vue2`项目中的`scripts`替换原项目中的`scripts`目录。

::: tip 注意：根据需要保留自有业务的脚本
:::

#### 第三步、迁移入口文件

原项目中的`src`目录下的`main-native.js`文件，重命名为`main.js`

#### 第三步、迁移`package.json`

使用`quicktvui-template-vue2`项目中的`package.json`替换原项目中的`package.json`文件。

::: tip 注意：需要保留 package.json 中自有业务的依赖库和相应的版本。
:::
