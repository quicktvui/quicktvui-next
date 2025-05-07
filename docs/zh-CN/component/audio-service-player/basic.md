---
title: AudioPlayerService
lang: zh-CN
---

# 基础用法

#### 第一步、引入`ESAudioServicePlayer`组件，并声明在`<template>`

```vue

<es-audio-service-player
  ref='audioServicePlayer'
  class='es-audio-player-page-css'
  @onPlayerInitialized='onPlayerInitialized'
/>
```

#### 第二步、调用`initialize`方法进行初始化。

`audioServicePlayer.value?.initialize()`

#### 第三步、在播放器`onPlayerInitialized`初始化成功回调事件中设置播放数据。

```ts
const onPlayerInitialized = (playerType) => {
  const mediaSource: ESMediaSource = {
    uri: 'http://qcloudcdn.a311.ottcn.com/data_center/audios/ifengfm/1898049/9644712/2ff957624598b7b105d5c86b809c854c.mp3',
  }
  const position: ESPlayerPosition = {
    support: true,
    position: 20000,
  }
  const mediaSourceList: ESMediaSourceList = {
    index: 0,
    list: [mediaSource],
    position,
  }
  audioServicePlayer.value?.playMediaSourceList(mediaSourceList)
}

```

#### 第四步、调用`start`方法开始播放。

`audioServicePlayer.value?.start(0)`

:::demo ## 基础用法

component/audio-player-service/basic

:::
