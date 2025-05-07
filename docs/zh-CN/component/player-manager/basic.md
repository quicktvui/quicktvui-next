---
title: PlayerManager
lang: zh-CN
---

# 基础用法

以`ESPlayerManager` + [`ESVideoPlayer`](/zh-CN/component/video-player/introduction)为例

#### 第一步、引入`ESPlayerManager`组件，并声明在`<template>`

```vue

<es-player-manager
  ref='playerManager'
  :playerList='playerListRef'
  class='es-video-player-manager-page-css'
/>
```

#### 第二步、集成并注册`ESVideoPlayer`播放组件。

::: tip ESVideoPlayer 集成
[点击查看详细](/zh-CN/component/video-player/installation)
:::

```ts
import { ESVideoPlayer } from '@extscreen/es3-video-player'

const playerList = [markRaw(ESVideoPlayer)]
const playerListRef = ref(playerList)
```

#### 第三步、调用`initialize`方法进行初始化。

`playerManager.value?.initialize()`

#### 第四步、设置播放数据。

```ts

//1.拼装 ESMediaSource 数据
const mediaSource: ESMediaSource = {
  uri: 'http://qcloudcdn.a311.ottcn.com/data_center/videos/SHORT/DEFAULT/2023/08/25/7d3623ae-c002-4929-b5a2-fe10bca06bfc.mp4',
}
//2.拼装 ESMediaSourceList 数据
const mediaSourceList: ESMediaSourceList = {
  index: 0,
  list: [mediaSource],
}
//3.拼装 ESMediaItem 数据
const mediaItem: ESMediaItem = {
  mediaSourceList,
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

component/player-manager/basic

:::
