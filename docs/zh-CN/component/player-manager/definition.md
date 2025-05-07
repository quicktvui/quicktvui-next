---
title: PlayerManager
lang: zh-CN
---

# 清晰度

内置清晰度如下：

* `ES_PLAYER_DEFINITION_UNKNOWN = 0`
* `ES_PLAYER_DEFINITION_SD = 1`
* `ES_PLAYER_DEFINITION_HD = 2`
* `ES_PLAYER_DEFINITION_FULL_HD = 3`
* `ES_PLAYER_DEFINITION_ORIGINAL = 4`
* `ES_PLAYER_DEFINITION_BLUERAY = 5`
* `ES_PLAYER_DEFINITION_FOURK = 6`
* `ES_PLAYER_DEFINITION_2K = 7`

## 设置不同清晰度的视频地址

仅支持通过不同的视频地址设置清晰度。

```ts
const mediaSourceList: ESMediaSourceList = {
  index: 0,
  list: [
    {
      //表明此地址为SD清晰度
      definition: ESPlayerDefinition.ES_PLAYER_DEFINITION_SD,
      uri: 'http://qcloudcdn.a311.ottcn.com/data_center/videos/SHORT/DEFAULT/2022/10/27/d4e29cbf-5b15-4523-b9c8-80f18fa76275.mp4',
    },
    {
      //表明此地址为HD清晰度
      definition: ESPlayerDefinition.ES_PLAYER_DEFINITION_HD,
      uri: 'http://qcloudcdn.a311.ottcn.com/data_center/videos/SHORT/DEFAULT/2022/01/27/85a658d6-d0ce-4721-adea-f8e2e0b263a7.mp4',
    },
    {
      //表明此地址为FULL_HD清晰度
      definition: ESPlayerDefinition.ES_PLAYER_DEFINITION_FULL_HD,
      uri: 'http://qcloudcdn.a311.ottcn.com/data_center/videos/SHORT/DEFAULT/2023/09/17/22edb94d-8ffc-4736-a633-3f9e38c096e8.mp4',
    },
    {
      //表明此地址为4k清晰度
      definition: ESPlayerDefinition.ES_PLAYER_DEFINITION_FOURK,
      uri: 'http://qcloudcdn.a311.ottcn.com/data_center/videos/LIB/VARIETY/2022/03/10/2877b7e1-fda6-4591-aff3-3fd3ba4151cf_transcode_1137855.mp4',
    },
  ],
}
```

## 监听清晰度事件

* 支持的清晰度列表：`onPlayerDefinitionListChanged`
* 当清晰度发生变化：`onPlayerDefinitionChanged`

::: tip 播放器事件
[点击查看详细事件说明](/zh-CN/component/player/player#Events)
:::

## 获取当前清晰度

```ts
const playerDefinitionManager = useESPlayerDefinitionManager()
playerDefinitionManager.getDefinition()
```

## 设置清晰度

```ts
playerManager.value?.setDefinition(ESPlayerDefinition.ES_PLAYER_DEFINITION_SD)

```

或者

```ts
const playerDefinitionManager = useESPlayerDefinitionManager()
playerDefinitionManager.setDefinition(ESPlayerDefinition.ES_PLAYER_DEFINITION_2K)
```

:::demo ## 完整示例

component/player-manager/definition

:::
