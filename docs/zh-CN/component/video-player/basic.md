---
title: VideoPlayer
lang: zh-CN
---

# 基础用法

#### 第一步、引入`ESVideoPlayer`组件，并声明在`<template>`

```vue

<es-video-player
  ref='videoPlayer'
  :playerWidth='playerWidth'
  :playerHeight='playerHeight'
  class='es-video-player-page-css'
  @onPlayerInitialized='onPlayerInitialized'
/>
```

::: warning 注意：要设置播放器宽度 playerWidth 和高度 playerHeight 属性
:::

#### 第二步、调用`initialize`方法进行初始化。

`videoPlayer.value?.initialize()`

#### 第三步、在播放器`onPlayerInitialized`初始化成功回调事件中设置播放数据。

```ts
  const onPlayerInitialized = (playerType) => {
  const mediaSource: ESMediaSource = {
    //播放地址
    uri: 'http://qcloudcdn.a311.ottcn.com/data_center/videos/SHORT/DEFAULT/2023/08/25/7d3623ae-c002-4929-b5a2-fe10bca06bfc.mp4',
  }
  const mediaSourceList: ESMediaSourceList = {
    //默认播放地址的索引
    index: 0,
    //播放地址列表
    list: [mediaSource],
  }
  //设置播放地址数据
  videoPlayer.value?.playMediaSourceList(mediaSourceList)
  //开始播放
  videoPlayer.value?.start(0)
}
```

#### 第四步、调用`start`方法开始播放。

` videoPlayer.value?.start(0)`

:::demo ## 完整示例

component/video-player/basic
