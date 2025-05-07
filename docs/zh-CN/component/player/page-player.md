---
title: PagePlayer
lang: zh-CN
---

# 页面播放控制

大部分场景都是在页面中进行播放，所以需要在页面生命周期函数中进行播放控制。

::: tip 关于页面声明周期

[点击查看详细](/zh-CN/guide/page/page-lifecycle)

:::

## 一、播放常用方法简介

### 1、暂停播放操作（不销毁播放器）

* `start` 开始播放
* `pause` 暂停播放

调用`start`开始视频播放后，调用`pause`会停止播放。 调用`pause`暂停视频播放后，调用`start`会继续播放。

### 2、停止播放操作（毁播放器）

* `resume` 恢复播放
* `stop` 停止播放

调用`stop`停止视频播放后，调用`resume`会重新播放。

### 3、播放资源回收和重置操作

* `reset` 重置资源
* `release` 回收资源

不需要播放器的时候，调用`reset`和`release`方法进行资源的回收和重置。

::: warning 注意

* 如果离开当前页面，跳转其他页面进行交互操作，则需要停止（调用`stop`方法）当前页面的播放。
* 如果一直在当前页面进行交互操作，一般使用暂停（调用`pause`方法）播放。如果有需要则使用停止播放。
:::

## 二、页面声明周期播放控制

### 1、页面`onESCreate`生命周期中进行播放器初始化并进行开始播放。

以`ESVideoPlayer`为例：

```ts
function onESCreate() {
  //1、初始化播放
  videoPlayer.value?.initialize()
}

const onPlayerInitialized = (playerType) => {
  const mediaSource: ESMediaSource = {
    uri: 'http://extcdn.hsrc.tv/channelzero/2024/02/05/d477660a-3eb6-4c7f-b82b-0b61c035505c.mp4'
  }
  const mediaSourceList: ESMediaSourceList = {
    index: 0,
    list: [mediaSource]
  }
  //2、初始化完毕后，调用播放方法
  videoPlayer.value?.playMediaSourceList(mediaSourceList)
  //3、开始播放
  videoPlayer.value?.start(0)
}
```

### 2、页面`onESPause`或者`onESStop`生命周期中停止播放。

```ts
function onESStop() {

  stopDurationTimer()
  stopProgressTimer()

  //停止播放
  videoPlayer.value?.stop()

  isPageStopped = true
}
```

### 3、页面`onESDestroy`生命周期中重置回收播放资源

```ts
function onESStop() {
  //1、重置播放资源
  videoPlayer.value?.reset()
  //2、回收播放资源
  videoPlayer.value?.release()
}
```

### 4、页面`onESResume`生命周期中恢复播放

```ts
function onESResume() {
  //1、如果页面停止后并且恢复后
  if (isPageStopped) {
    //2、恢复播放
    videoPlayer.value?.resume()
  }
  isPageStopped = false
}
```

::: warning 注意：调用 resume 恢复播放时，如果需要从上次播放的位置继续播放，则播放的时候需要开启定时器主动调用 getCurrentPosition 方法获取视频的播放进度。
:::

:::demo ## 完整示例

component/video-player/page

:::
