---
title: PlayerManager
lang: zh-CN
---

# 自定义播放器

下面以定义图片播放器为例：

### 第一步、定义图片播放器类型

定义图片播放器，类型为 3

```ts
//1.组件中添加 type: 3, //自定义播放器的类型为3
//2.getType()方法返回 3
function getType(): number {
  return 3
}
```

### 第二步、定义图片播放器接口和事件

图片播放器需要遵循统一的播放器接口和事件。

::: tip 播放器接口
[点击查看播放器接口和事`IPlayer`](/zh-CN/component/player/player)
:::

:::demo

component/player-manager/image-player

:::

### 第三步、使用图片播放器

1、注册图片播放器给`ESPlayerManager`

```ts
const playerManager = ref<ESIPlayerManager>()
const playerList = [markRaw(ESImagePlayer)]
const playerListRef = ref(playerList)
```

2、拼装图片播放器需要的数据，并进行播放

```ts
const mediaSource: ESMediaSource = {
  // 图片地址
  uri: 'http://qcloudimg.a311.ottcn.com/project/zero/img_test/2021/10/20/d40049cf-7b05-4ccc-9a25-74884e883231.jpg',
}
const mediaSourceList: ESMediaSourceList = {
  index: 0,
  list: [mediaSource],
}
const mediaItem: ESMediaItem = {
  mediaSourceList,
  playerType: 3, //TODO 自定义的图片播放器的类型
}
const playList: ESMediaItemList = {
  index: 0,
  list: [mediaItem],
}
playerManager.value?.initialize()
playerManager.value?.playMediaList(playList)
```

:::demo

component/player-manager/custom-player

:::
