---
title: AudioPlayer
lang: zh-CN
---

# 播放管理器

::: tip ESPlayerManager 集成
[点击查看详细](/zh-CN/component/player-manager/installation)
:::

#### 第一步、引入`ESPlayerManager`组件，并声明在`<template>`

```vue

<es-player-manager
  ref='playerManager'
  :playerList='playerListRef'
  class='es-player-manager-page-css'
/>
```

#### 第二步、集成并注册`ESAudioPlayer`音频播放组件。

```ts
import { ESAudioPlayer } from '@extscreen/es3-audio-player'

const playerList = [markRaw(ESAudioPlayer)]
const playerListRef = ref(playerList)
```

#### 第三步、调用`initialize`方法进行初始化。

`playerManager.value?.initialize()`

#### 第四步、设置播放数据。

::: tip 注意：ESMediaItem 中播放器类型 type 需要设置为 4
[点击查看播放器类型](/zh-CN/component/player-manager/player-type)
:::

```ts

//1.拼装 ESMediaSource 数据
const mediaSource: ESMediaSource = {
  uri: 'http://qcloudcdn.a311.ottcn.com/data_center/audios/ifengfm/1898049/9644712/2ff957624598b7b105d5c86b809c854c.mp3',
}
//2.拼装 ESMediaSourceList 数据
const mediaSourceList: ESMediaSourceList = {
  index: 0,
  list: [mediaSource],
}
//3.拼装 ESMediaItem 数据，类型为4
const mediaItem: ESMediaItem = {
  mediaSourceList,
  playerType: 4, //TODO 类型为4
}
//4.拼装 ESMediaItemList 数据
const playList: ESMediaItemList = {
  index: 0,
  list: [mediaItem],
}
playerManager.value?.playMediaList(playList)
```

#### 第五步、默认自动进行播放。

:::demo ## 完整示例

component/audio-player/player-manager

:::
