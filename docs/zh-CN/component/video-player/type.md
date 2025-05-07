---
title: VideoPlayer
lang: zh-CN
---

# 播放器类型

快应用内置两种类型的播放器。

* 系统播放器：`ES_PLAYER_TYPE_SYSTEM`
* IJK播放器：`ES_PLAYER_TYPE_IJK`

## 获取当前播放器类型

```ts
const playerTypeManager = useESPlayerTypeManager()
playerTypeManager.getPlayerType()
```

## 设置播放器类型

```ts
const playerTypeManager = useESPlayerTypeManager()
playerTypeManager.setPlayerType(ESPlayerType.ES_PLAYER_TYPE_SYSTEM)
```

::: warning 注意：需要在播放之前设置好播放器类型
:::

:::demo ## 完整示例

component/video-player/type
