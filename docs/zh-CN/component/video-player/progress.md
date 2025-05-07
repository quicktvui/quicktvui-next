---
title: VideoPlayer
lang: zh-CN
---

# 播放进度

::: warning 注意：播放器默认不会回调进度，需要手动调用方法获取。
:::

#### 第一步、注册回调

`initialize`之后，`start`之前注册回调

```ts
videoPlayer.value?.setDurationCallback(durationCallback)
videoPlayer.value?.setProgressCallback(progressCallback)
```

#### 第二步、播放器开始播放事件（`onPlayerPlaying`）后，开启定时器获取播放时长和当前进度

```ts
const onPlayerPlaying = () => {
  startDurationTimer()
  startProgressTimer()
}

function startDurationTimer() {
  stopDurationTimer()
  durationTimer = setInterval(() => {
    videoPlayer.value?.getDuration()
  }, 500)
}

function startProgressTimer() {
  stopProgressTimer()
  progressTimer = setInterval(() => {
    videoPlayer.value?.getCurrentPosition()
  }, 500)
}

```

::: warning 注意：播放停止的时候需要关闭获取进度定时器
:::

:::demo ## 完整示例

component/video-player/progress

:::
