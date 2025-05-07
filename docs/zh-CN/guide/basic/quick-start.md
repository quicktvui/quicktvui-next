---
title: 'QuickStart'
lang: zh-CN
---

# 快速开始

::: tip 开发参考

[QuickTVUI API 演示项目](/zh-CN/sample/api-demo)

:::

::: warning 注意：开始之前请确保电视或者机顶盒设备配置完成。

* 连接到了网络
* 打开了 ADB 调试功能

[点击查看配置 Android 设备](/zh-CN/guide/basic/installation)

:::

### 一、安装并配置快应用运行环境（runtime apk）

1. ***安装 [`@quicktvui/cli`](/zh-CN/tool/cli/introduction) 命令行工具***

```shell
npm install -g @quicktvui/cli@latest
```

2. ***配置快应用运行环境***

* 执行[`qui setup`](/zh-CN/tool/cli/setup)按提示分步骤进行设置。

```shell
qui setup
```

::: tip 提示：查看 qui setup 详细内容
[点击查看 qui setup 详细内容。](/zh-CN/tool/cli/setup)
:::

执行完毕后，会安装并配置好 runtime apk

* 应用列表找到运行环境App：

<img src="/guide/basic/runtime_app_install.png" />

* 打开运行环境App：

<img src="/guide/basic/runtime_app_running.png" />

## 二、创建应用

### 方式一、 用[`@quicktvui/cli`](/zh-CN/tool/cli/introduction)创建应用

```shell
qui create @quicktvui/quicktvui-template
```

::: tip 提示：查看 qui create 详细内容
[点击查看 qui create 详细内容。](/zh-CN/tool/cli/create)
:::

<img src="/tool/cli/cli-create.jpg" />

### 方式二、 以模板项目创建应用

```shell
git clone https://github.com/quicktvui/quicktvui-template.git
```

创建好的项目结构如下：

<img width="400px"  src="/guide/basic/quick-start-project.png" />

## 三、安装依赖库

进入`quicktvui-template` 项目根目录下面执行如下命令：

```shell
yarn install
```

::: tip 推荐使用 yarn 进行安装包管理
:::

## 四、运行应用

### 1. 进入`quicktvui-template` 项目根目录下面执行如下命令：

打开`cmd`窗口执行

```shell
npm run dev
```

::: tip 提示：快应用调试APP显示电脑调试地址：192.168.x.x，并toast提示服务可用，则配置成功。
:::

::: warning 注意：如果服务启动后，还是提示服务不可用，可以排查下:

* 电脑能否`ping`通电视`IP`。
* 快应用调试APP显示的电脑的调试地址是否和电脑的IP地址一致。
  :::

### 2. 打开快应用运行环境查看模板应用

点击屏幕的右侧的圆形（加载测试代码）按钮。


<img src="/guide/basic/es_hello_world.png" />


::: tip 调试常见问题
[点击查看调试常见问题](/zh-CN/guide/faq/dev-faq)
:::

## 五、热重载 (Hot Reload)

修改代码体验快应用代码热重载。

1. 修改项目路径下`quicktvui-template/src/views/index.vue`文件， 把 `Hello World!` 修改为 `第一个大屏快应用`。
2. 保存代码

源文件：

```vue

<template>
  <div class='index-root-view-css'>
    <span class='index-root-text-view-css'>Hello World!</span>
  </div>
</template>
```

修改后的文件：

```vue

<template>
  <div class='index-root-view-css'>
    <span class='index-root-text-view-css'>第一个扩展屏快应用</span>
  </div>
</template>
```

查看效果：

<img src="/guide/basic/es_hot_reload.png" />
