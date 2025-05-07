---
title: VideoPlayer
lang: zh-CN
---

# 解码方式

内置解码方式如下：

* `ES_PLAYER_DECODE_HARDWARE = 0`
* `ES_PLAYER_DECODE_SOFTWARE = 1`

## 监听解码方式事件

* 支持的解码方式列表：`onPlayerDecodeListChanged`
* 当解码方式发生变化：`onPlayerDecodeChanged`

::: tip 播放器事件
[点击查看详细事件说明](/zh-CN/component/player/player#Events)
:::

## 获取当前解码方式

```ts
const playerDecodeManager = useESPlayerDecodeManager()
playerDecodeManager.getDecode()
```

## 设置解码方式

```ts
videoPlayer.value?.setDecode(ESPlayerDecode.ES_PLAYER_DECODE_HARDWARE)
```

或者

```ts
const playerDecodeManager = useESPlayerDecodeManager()
playerDecodeManager.setDecode(ESPlayerDecode.ES_PLAYER_DECODE_HARDWARE)
```

:::demo ## 完整示例

component/video-player/decode

:::
