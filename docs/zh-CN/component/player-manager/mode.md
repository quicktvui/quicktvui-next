---
title: PlayerManager
lang: zh-CN
---

# 播放模式

用来控制播放`ESMediaItemList`中的`ESMediaItem`的顺序。

内置播放模式如下：

* 一次播放（默认）：`ES_PLAYER_PLAY_MODE_ONCE = 0`
* 顺序播放：`ES_PLAYER_PLAY_MODE_ORDER = 1`
* 随机播放：`ES_PLAYER_PLAY_MODE_SHUFFLE = 2`
* 单曲循环：`ES_PLAYER_PLAY_MODE_REPEAT = 3`
* 循环播放：`ES_PLAYER_PLAY_MODE_LOOP = 4`

## 获取当前播放模式

```ts
import { useESPlayerManagerPlayModeManager } from "@extscreen/es3-player-manager";

const playerManagerPlayModeManager = useESPlayerManagerPlayModeManager()
playerManagerPlayModeManager.getPlayMode()
```

## 设置播放模式

```ts
playerManager.value?.setPlayMediaListMode(ESPlayerPlayMode.ES_PLAYER_PLAY_MODE_ONCE)
```

或者

```ts
import { useESPlayerManagerPlayModeManager } from "@extscreen/es3-player-manager";

const playerManagerPlayModeManager = useESPlayerManagerPlayModeManager()
playerManagerPlayModeManager.setPlayMode(ESPlayerPlayMode.ES_PLAYER_PLAY_MODE_ORDER)
```

:::demo ## 完整示例

component/player-manager/play-mode

:::
