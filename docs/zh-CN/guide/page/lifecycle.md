---
title: 生命周期简介
lang: zh-CN
---

# 生命周期简介

## 生命周期图解

<img src="/guide/page/lifecycle.png" />

## 生命周期详解

* `onESCreate(params)`
  在`ESPage`被创建时候进行回调，第一个生命周期。
  在该方法中主要进行初始化操作，设置界面布局资源，初始化界面的组件信息等。
  `params`中存放的是启动此页面的参数。

* `onESRestart()`
  当`ESPage`已经停止然后重新被启动时会调用`onESRestart()`。
* `onESStart()`
  当`ESPage`可见未获得用户焦点不能交互时会调用`onESStart()`。
* `onESResume()`
  当`ESPage`可见且获得用户焦点能交互时会调用`onESResume()`。
* `onESPause()`
  此方法调用后，`ESPage`正在停止，其后会调用`onESStop()`方法。
* `onESStop()`
  当`ESPage`被新的`ESPage`完全覆盖不可见时会调用`onESStop()`。
* `onESDestroy()`
  当`ESPage`被销毁时调用`onESDestroy()`。
* `onESNewIntent()`
  当`ESPage`设置启动模式为`SingleTask`。用户打开之前已经打开过的相同的页面，会调用此页面`onESNewIntent()`。
