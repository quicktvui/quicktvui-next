---
title: 'Hub'
lang: zh-CN
---

# 发布
## 中心仓库
[QuickTV中心仓库](http://hub.quicktv.net/)是官方提供的公共资源仓库，你可以在这里发布你的快应用。它主要功能有：
* 注册、登录
* 创建组织
* 创建快应用
* 管理发布
* 资源管理

<img src="/guide/publish/hub.png">

## 发布

项目开发完成后，可以使用`qui publish`命令发布你的快应用。

具体步骤请参考[QuickTV中心仓库](http://hub.quicktv.net/)。

完成后，试着使用`qui start @你的组织@你的包名`命令打开应用,例如
```shell
qui start @quicktvui/api-demo
```
当在`Runtime`上成功运行后，恭喜你，你的应用已经成功发布！

以后，它将可以在任意集成快应用`Runtime SDK`的应用上运行！


