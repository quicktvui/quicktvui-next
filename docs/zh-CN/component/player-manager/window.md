---
title: PlayerManager
lang: zh-CN
---

# 播放窗口切换

播放窗口切换常用于视频播放预览和正式观看之间的切换。

内置窗口尺寸类型如下：

* 小屏窗口：`ES_PLAYER_WINDOW_TYPE_SMALL = 1`(默认)
* 全屏窗口`ES_PLAYER_WINDOW_TYPE_FULL = 2`
* 浮动窗口：`ES_PLAYER_WINDOW_TYPE_FLOAT = 3`

## 小屏窗口

`smallWindowWidth`和`smallWindowHeight`属性用来设置小屏窗口的尺寸。

```vue

<es-player-manager
  :smallWindowWidth='570'
  :smallWindowHeight='324'>
</es-player-manager>
```

调用`playerManager.value?.setSmallWindow()`
或者`playerManager.value?.setWindowType(ESPlayerWindowType.ES_PLAYER_WINDOW_TYPE_SMALL)`方法就可以切换视频窗口到小屏尺寸。

## 全屏窗口

`fullWindowWidth`和`fullWindowHeight`属性用来设置全屏窗口的尺寸。

```vue

<es-player-manager
  :fullWindowWidth='1920'
  :fullWindowHeight='1080'>
</es-player-manager>
```

调用`playerManager.value?.setFullWindow()`
或者`playerManager.value?.setWindowType(ESPlayerWindowType.ES_PLAYER_WINDOW_TYPE_FULL)`方法就可以切换视频窗口到全屏尺寸。

## 浮动窗口

`floatWindowWidth`和`floatWindowHeight`属性用来设置浮动窗口的尺寸。

```vue

<es-player-manager
  :floatWindowWidth='192'
  :floatWindowHeight='108'>
</es-player-manager>
```

调用`playerManager.value?.setFloatWindow()`
或者`playerManager.value?.setWindowType(ESPlayerWindowType.ES_PLAYER_WINDOW_TYPE_FLOAT)`方法就可以切换视频窗口到浮动窗口尺寸。

:::demo ## 完整示例

component/player-manager/window

:::
