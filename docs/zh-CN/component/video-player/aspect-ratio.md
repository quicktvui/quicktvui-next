---
title: VideoPlayer
lang: zh-CN
---

# 画面比例

内置画面比例如下：

* `ES_PLAYER_AR_ASPECT_FIT_PARENT = 0`
* `ES_PLAYER_AR_ASPECT_FILL_PARENT = 1`
* `ES_PLAYER_AR_ASPECT_WRAP_CONTENT = 2`
* `ES_PLAYER_AR_ASPECT_MATCH_PARENT = 3`
* `ES_PLAYER_AR_16_9_FIT_PARENT = 4`
* `ES_PLAYER_AR_4_3_FIT_PARENT = 5`
* `ES_PLAYER_AR_235_FIT_PARENT = 6`

## 监听画面比例事件

* 支持的画面比例列表：`onPlayerAspectRatioListChanged`
* 当画面比例发生变化：`onPlayerAspectRatioChanged`

::: tip 播放器事件
[点击查看详细事件说明](/zh-CN/component/player/player#Events)
:::

## 获取当前画面比例

```ts
const aspectRatioManager = useESPlayerAspectRatioManager()
aspectRatioManager.getAspectRatio()
```

## 设置画面比例

```ts
videoPlayer.value?.setAspectRatio(ESPlayerAspectRatio.ES_PLAYER_AR_16_9_FIT_PARENT)
```

或者

```ts
const aspectRatioManager = useESPlayerAspectRatioManager()
aspectRatioManager.setAspectRatio(ESPlayerAspectRatio.ES_PLAYER_AR_4_3_FIT_PARENT)
```

:::demo ## 完整示例

component/video-player/aspect-ratio
