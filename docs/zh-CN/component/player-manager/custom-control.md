---
title: PlayerManager
lang: zh-CN
---

# 自定义播放控制

播放器中`play()`, `pause()`, `stop()`, `seekTo(time: number)`等是播放控制的标准方法。

除了这些标准的控制方法，还可以自定义播放控制，尤其是在自定义非标准的播放器中使用。

例如：在图片播放器中，可以控制图片放大、缩小，滚动。

## 步骤：

### 一、播放器实现方法`control(options: ESPlayerControlOptions): void;`

在播放器组件中声明实现`control`方法，处理自定义控制逻辑。

```ts
//声明并实现自定义播放控制逻辑
function control(options: ESPlayerControlOptions): void {
  //控制图片播放器播放图片的尺寸
  playerWidth.value = options.payload?.width ?? "1920";
  playerHeight.value = options.payload?.height ?? "1080";

  //发送控制播放完毕事件，通知事件管理器和视图管理器
  //ESPlayerControlOptions 可根据需求自定义命令和参数
  onPlayerControlled(options);
}
```

### 二、播放器发送事件`onPlayerControlled(options: ESPlayerControlOptions): void;`

在播放器组件中发送`onPlayerControlled`事件，通知事件管理器和页面管理器。

```ts

//发送控制播放完毕事件，通知事件管理器和视图管理器
function onPlayerControlled(options: ESPlayerControlOptions): void {
  //1、发送事件
  context.emit("onPlayerControlled", options);
  //2、通知事件管理器
  playerEventManager.onPlayerPaused();
  //3、通知视图管理器
  playerViewManager.onPlayerPaused();
}
```

### 三、播放管理器上监听事件

在`ESPlayerManager`组件上监听`onPlayerControlled`实现更多业务逻辑。

```vue

<es-player-manager
  ref='playerManager'
  :initPlayerWindowType='2'
  :playerList='playerListRef'
  @onPlayerPlaying='onPlayerPlaying'
  @onPlayerControlled='onPlayerControlled'
  class='es-video-player-manager-page-css'
/>

```

```ts
function onPlayerControlled(options: ESPlayerControlOptions): void {
  //处理更多业务逻辑
}
```

### 四、调用播放管理器

调用`ESPlayerManager`组件的`control`方法，此方法会直接调用到播放器中的`control`方法。

```ts
function zoomIn() {
  const options = {
    action: "zoomIn",
    payload: {
      width: 1920,
      height: 1080,
    },
  };
  playerManager.value?.control(options);
}

function zoomOut() {
  const options = {
    action: "zoomOut",
    payload: {
      width: 500,
      height: 500,
    },
  };
  playerManager.value?.control(options);
}
```

:::demo ## 完整示例

component/player-manager/image-player

:::
