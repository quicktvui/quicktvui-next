---
title: PlayerManager
lang: zh-CN
---

# 播放器类型

***播放管理器`ESPlayerManager`播放媒资`ESMediaItem`的时候，会根媒资`ESMediaItem`中的`type`字段自动选择对应类型的播放器。***

***媒资`ESMediaItem`中的`type`字段，默认为`1`。***

***内置播放器和类型如下：***

* [`ESVideoPlayer`](/zh-CN/component/video-player/introduction)类型： `1`
* `ESADPlayer`类型： `2`
* [`ESAudioPlayer`](/zh-CN/component/audio-player/introduction)类型： `4`
* [`ESAudioServicePlayer`](/zh-CN/component/audio-service-player/introduction)类型： `5`

::: warning 注意：自定义播放器声明`type`建议为`10`以上
:::

***例如： 媒资`ESMediaItem`中的`type`字段声明为`12345`，则`ESPlayerManager`会寻找类型为`12345`进行播放，如果未找到，则会报错。***

```ts
//1.拼装 ESMediaSource 数据
//2.拼装 ESMediaSourceList 数据
//3.拼装 ESMediaItem 数据
const mediaItem: ESMediaItem = {
  mediaSourceList,
  type: 12345 //TODO 声明需要类型为 12345 的播放器进行播放
}
//4.拼装 ESMediaItemList 数据
const playList: ESMediaItemList = {
  index: 0,
  list: [mediaItem],
}
playerManager.value?.playMediaList(playList)
```
