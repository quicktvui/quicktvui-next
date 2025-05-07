---
title: VideoPlayer
lang: zh-CN
---

# 播放模式

用来控制播放`ESMediaSourceList`中的`ESMediaSource`的顺序。

内置播放模式如下：

* 一次播放（默认）：`ES_PLAYER_PLAY_MODE_ONCE = 0`
* 顺序播放：`ES_PLAYER_PLAY_MODE_ORDER = 1`
* 随机播放：`ES_PLAYER_PLAY_MODE_SHUFFLE = 2`
* 单曲循环：`ES_PLAYER_PLAY_MODE_REPEAT = 3`
* 循环播放：`ES_PLAYER_PLAY_MODE_LOOP = 4`

## 获取当前播放模式

```ts
import {
  useESPlayerPlayModeManager
} from "@extscreen/es3-player";

const playerModeManager = useESPlayerPlayModeManager()
playerModeManager.getPlayMode()
```

## 设置播放模式

```ts
videoPlayer.value?.setPlayMode(ESPlayerPlayMode.ES_PLAYER_PLAY_MODE_ONCE)
```

或者

```ts
import {
  useESPlayerPlayModeManager
} from "@extscreen/es3-player";

const playerModeManager = useESPlayerPlayModeManager()
playerModeManager.setPlayMode(ESPlayerPlayMode.ES_PLAYER_PLAY_MODE_ORDER)
```

:::demo ## 完整示例

component/video-player/play-mode

:::
