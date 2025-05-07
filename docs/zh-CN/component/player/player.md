---
title: IPlayer
lang: zh-CN
---

# IPlayer 播放接口

## 简介

ESIPlayer 是一套通用播放器接口。
[`ESVideoPlayer`](/zh-CN/component/video-player/introduction)
、[`ESAudioPlayer`](/zh-CN/component/audio-player/introduction)
、[`ESAudioPlayerService`](/zh-CN/component/audio-service-player/introduction)
、[`ESPlayerManager`](/zh-CN/component/player-manager/introduction)等播放组件都基于此接口进行实现。

::: warning 注意：使用快应用内置的播放器，例如 ESVideoPlayer、ESAudioPlayer、ESAudioPlayerService等播放组件，都需要集成 ESIPlayer 并进行初始化。
:::

## 集成

### 第一步、`package.json`添加依赖库

* `@extscreen/es3-player`![NPM Version](https://img.shields.io/npm/v/@extscreen/es3-player)

### 第二步、集成`ESPlayer`

在`main.ts`中集成

```ts
import { createESPlayer } from "@extscreen/es3-player";

const player = createESPlayer();
app.use(player);
```

### 第三步、初始化

在`App.vue`中或者使用之前

```ts
import { useESPlayer } from "@extscreen/es3-player";
import type { ESPlayerConfiguration, ESPlayerDisplay } from "@extscreen/es3-player";

const playerManager = useESPlayer()
const playerDisplay: ESPlayerDisplay = {
  screenWidth: device.getScreenWidth(),//屏幕的宽度
  screenHeight: device.getScreenHeight(),//屏幕的高度
}
const config: ESPlayerConfiguration = {
  debug: true,
  display: playerDisplay,
  device: {
    deviceType: runtime.getRuntimeDeviceType() ?? ''//设备类型
  }
}
playerManager.init(config)
```

## API

### DataStructure

#### ESMediaSource

媒资资源

| Name          | Description        | Type                          |   Default   |
| -------------- | ------------------| ----------------------------|---------|
| id             | 媒资资源唯一标识符   | ^[number] / ^[string]        |   —    |
| uri            | 媒资资源地址        | ^[any]                       |   —    |
| definition     | 媒资资源清晰度      | ^[ESPlayerDefinition]         |   —    |
| interceptors   | 媒资资源拦截器      | ^[Array<ESIPlayerInterceptor>]|   —    |
| metadata       | 媒资资源信息        | ^[ESMediaMetadata]            |   —    |

#### ESMediaSourceList

媒资资源列表

| Name          | Description        | Type                          |   Default   |
| -------------- | ------------------| ----------------------------|---------|
| index          | 默认播放媒资资源的索引| ^[number]                 |   —    |
| list           | 媒资资源列表        | ^[Array<ESMediaSource>]       |   —    |
| interceptors   | 媒资资源列表拦截器   | ^[Array<ESIPlayerInterceptor>] |   —    |
| metadata       | 媒资资源信息        | ^[ESMediaMetadata]             |   —    |
| position       | 媒资资源播放位置     | ^[ESPlayerPosition]            |   —    |

### Attributes

| Name                      | Description           | Type             |  Default   |
| -------------------------| -----------------------| -----------------|---------|
| playerType               | 播放器类型               |^[number]    |-1    |
| playMediaSourceAuto      | 是否自动播放媒资数据源      |^[boolean]  |true    |
| backgroundColor          | 播放器背景颜色            | ^[string] |`transparent`    |
| playerWidth              | 播放器宽度               | ^[number]  |1920    |
| playerHeight             | 播放器高度               |^[number]    |1080    |
| playerZIndex             | 播放器z-index           |^[number]    |1    |

### Events

| Name                          | Description           | Type                                                                                                      |
| ----------------------------- | --------------------  | --------------------------------------------------------------------------------------------------------- |
| onPlayerInitialized           | 播放器初始化事件          | ^[Function]`onPlayerInitialized() => void`                                |
| onPlayerPlayMediaSourceList   | 播放媒资资源列表事件      | ^[Function]`onPlayerPlayMediaSourceList(mediaSourceList: ESMediaSourceList) => void`         |
| onPlayerPlayMediaSource       | 播放媒资资源事件         | ^[Function]`onPlayerPlayMediaSource(mediaSource: ESMediaSource) => void`                      |
| onPlayerInterceptSuccess      | 播放拦截器成功事件         | ^[Function]`onPlayerInterceptSuccess(result: ESPlayerInterceptResult) => void`                      |
| onPlayerInterceptError        | 播放拦截器错误事件         | ^[Function]`onPlayerInterceptError(error: ESPlayerInterceptError) => void`                      |
| onPlayerSizeChanged           | 播放器尺寸变化事件         | ^[Function]`onPlayerSizeChanged(playerWidth: number, playerHeight: number) => void`                      |
| onPlayerPreparing             | 播放器准备中事件         | ^[Function]`onPlayerPreparing() => void`                      |
| onPlayerPrepared              | 播放器准备好事件         | ^[Function]`onPlayerPrepared() => void`                      |
| onPlayerBufferStart           | 播放器开始缓冲事件         | ^[Function]`onPlayerBufferStart() => void`                      |
| onPlayerBufferEnd             | 播放器缓冲结束事件         | ^[Function]`onPlayerBufferEnd() => void`                      |
| onPlayerPlaying               | 播放器开始播放事件         | ^[Function]`onPlayerPlaying() => void`                      |
| onPlayerProgressChanged       | 播放进度事件         | ^[Function]`onPlayerProgressChanged(progress: number) => void`                      |
| onPlayerDurationChanged       | 播放总长度事件         | ^[Function]`onPlayerDurationChanged(duration: number) => void`                      |
| onPlayerSeekStart             | 播放器开始快进事件         | ^[Function]`onPlayerSeekStart() => void`                      |
| onPlayerSeekCompleted         | 播放器快进结束事件         | ^[Function]`onPlayerSeekCompleted() => void`                      |
| onPlayerPaused                | 播放器暂停播放事件         | ^[Function]`onPlayerPaused() => void`                      |
| onPlayerResumed               | 播放器恢复播放事件         | ^[Function]`onPlayerResumed() => void`                      |
| onPlayerStopped               | 播放器停止播放事件         | ^[Function]`onPlayerStopped() => void`                      |
| onPlayerCompleted             | 播放器播放完毕事件         | ^[Function]`onPlayerCompleted() => void`                      |
| onPlayerError                 | 播放错误事件         | ^[Function]`onPlayerError(error: ESPlayerError) => void`                      |
| onPlayerInfo                  | 播放信息事件         | ^[Function]`onPlayerInfo(info: ESPlayerInfo) => void`                      |
| onPlayerNoMediaSourceCanPlay  | 无媒资资源可播放事件         | ^[Function]`onPlayerNoMediaSourceCanPlay(next: boolean) => void`                      |
| onPlayerVolumeChanged         | 播放器音量变化事件         | ^[Function]`onPlayerVolumeChanged(leftVolume: number, rightVolume: number) => void`                      |
| onPlayerLeftVolumeChanged     | 播放器左声道音量变化事件         | ^[Function]`onPlayerLeftVolumeChanged(volume: number) => void`                      |
| onPlayerRightVolumeChanged    | 播放器右声道音量变化事件         | ^[Function]`onPlayerRightVolumeChanged(volume: number) => void`                      |
| onPlayerDefinitionListChanged | 播放器媒资清晰度列表事件         | ^[Function]`onPlayerDefinitionListChanged(definitionList: Array<ESPlayerDefinition>) => void`                      |
| onPlayerDefinitionChanged     | 播放器媒资清晰度事件         | ^[Function]`onPlayerDefinitionChanged(definition: ESPlayerDefinition) => void`                      |
| onPlayerPlayRateListChanged   | 播放速率列表事件         | ^[Function]`onPlayerPlayRateListChanged(rateList: Array<ESPlayerRate>) => void`                      |
| onPlayerPlayRateChanged       | 播放速率事件         | ^[Function]`onPlayerPlayRateChanged(rate: ESPlayerRate) => void`                      |
| onPlayerDecodeListChanged     | 播放器解码方式列表事件         | ^[Function]`onPlayerDecodeListChanged(decodeList: Array<ESPlayerDecode>) => void`                      |
| onPlayerDecodeChanged         | 播放器解码方式事件         | ^[Function]`onPlayerDecodeChanged(decode: ESPlayerDecode) => void`                      |
| onPlayerAspectRatioListChanged| 画面比例列表事件         | ^[Function]`onPlayerAspectRatioListChanged(aspectRatioList: Array<ESPlayerAspectRatio>) => void`                      |
| onPlayerAspectRatioChanged    | 画面比例事件         | ^[Function]`onPlayerAspectRatioChanged(aspectRatio: ESPlayerAspectRatio) => void`                      |
| onPlayerPlayMediaSourceListModeListChanged    | 播放媒资资源列表模式列表事件         | ^[Function]`onPlayerPlayMediaSourceListModeListChanged(playModeList: Array<ESPlayerPlayMode>) => void`                      |
| onPlayerPlayMediaSourceListModeChanged    | 播放媒资资源列表模式事件         | ^[Function]`onPlayerPlayMediaSourceListModeChanged(playMode: ESPlayerPlayMode) => void`                      |
| onPlayerRenderListChanged     | 渲染模式列表事件         | ^[Function]`onPlayerRenderListChanged(renderList: Array<ESPlayerRender>) => void`                      |
| onPlayerRenderChanged         | 渲染模式事件         | ^[Function]`onPlayerRenderChanged(render: ESPlayerRender) => void`                      |
| onPlayerViewSizeChanged       | 播放器尺寸变化事件         | ^[Function]`onPlayerViewSizeChanged(playerWidth: number, playerHeight: number) => void`                      |
| onPlayerViewChanged           | 播放器视图变化事件         | ^[Function]`onPlayerViewChanged() => void`                      |
| onPlayerClickable             | 播放器视图可点击事件         | ^[Function]`onPlayerClickable(playerClickable: boolean) => void`                      |

### Exposes

| Name                             | Description                 | Type                                                                              |
| -------------------------------- | --------------------------- | --------------------------------------------------------------------------------- |
| initialize                       | 初始化                       | ^[Function]`() => void`                                                             |
| isInitialized                    | 判断播放管理器是否初始化         | ^[Function]`() => boolean`                                                          |
| setVisible                       | 设置播放管理器是否可见          | ^[Function]`(value: boolean) => void`                                                |
| playMediaSourceList              | 播放媒资资源列表               | ^[Function]`(mediaSourceList: ESMediaSourceList) => void`                            |
| playMediaSourceByIndex           | 根据媒资资源索引进行播放         | ^[Function]`(index: number) => void`                                                |
| playMediaSourceById              | 根据媒资资源唯一标识符进行播放    | ^[Function]`(id: string) => void`                                                    |
| playMediaSource                  | 播放媒资资源                  | ^[Function]`(mediaSource: ESMediaSource) => void`                                    |
| playNextMediaSource              | 播放下一个媒资资源             | ^[Function]`() => void`                                                              |
| playPreviousMediaSource          | 播放上一个媒资资源             | ^[Function]`() => void`                                                              |
| getMediaSourceList               | 获取正在播放的媒资资源列表       | ^[Function]`() => Array<ESMediaSource> \| null`                                      |
| getMediaSource                   | 根据媒资资源索引获取媒资资源     | ^[Function]`(index: number) => ESMediaSource \| null`                                 |
| getPlayingMediaSourceIndex       | 获取正在播放的媒资资源的索引     | ^[Function]`() => number`                                                             |
| getPlayingMediaSourceList        | 获取正在播放的媒资资源列表       | ^[Function]`() => ESMediaSourceList \| null`                                          |
| getPlayingMediaSource            | 获取正在播放的媒资资源          | ^[Function]`() => ESMediaSource \| null`                                              |
| play                             | 播放器的播放方法               | ^[Function]`(...params: Array<any>) => void`                                        |
| start                            | 播放器的开始播放方法            | ^[Function]`(position: number) => void`                                           |
| pause                            | 播放器的暂停播放方法            | ^[Function]`() => void`                                                           |
| resume                           | 恢复播放器播放                 | ^[Function]`() => void`                                                          |
| stop                             | 停止播放器播放                 | ^[Function]`() => void`                                                            |
| reset                            | 重置播放器                    | ^[Function]`() => void`                                                           |
| release                          | 回收播放器资源                 | ^[Function]`() => void`                                                         |
| seekTo                           | 播放快进                      | ^[Function]`(progress: number) => void`                                          |
| getDuration                      | 获取播放总时长                 | ^[Function]`() => void`                                                     |
| getCurrentPosition               | 获取当前播放的进度              | ^[Function]`() => void`                                                         |
| setSize                          | 设置播放器的尺寸                | ^[Function]`(width: number, height: number) => void`                            |
| setPlayRate                      | 设置播放速率                   | ^[Function]`(playRate: ESPlayerRate) => void`                               |
| setPlayMode                      | 设置播放模式                   | ^[Function]`(playMode: ESPlayerPlayMode) => void`                           |
| setDefinition                    | 设置播放媒资清晰度              | ^[Function]`(definition: ESPlayerDefinition) => void`                     |
| setCache                         | 设置播放缓存策略                | ^[Function]`(cache: ESPlayerCache) => void`                                    |
| setDecode                        | 设置播放解码方式                | ^[Function]`(decode: ESPlayerDecode) => void`                                 |
| setRender                        | 设置播放渲染方式                | ^[Function]`(render: ESPlayerRender) => void`                                 |
| setAspectRatio                   | 设置播放画面比例                | ^[Function]`(aspectRatio: ESPlayerAspectRatio) => void`                  |
| getLeftVolume                    | 获取左声道音量                  | ^[Function]`() => void`                                                   |
| getRightVolume                   | 获取右声道音量                  | ^[Function]`() => void`                                                  |
| setLeftVolume                    | 设置左声道音量                  | ^[Function]`(leftVolume: number) => void`                                 |
| setRightVolume                   | 设置右声道音量                  | ^[Function]`(rightVolume: number) => void`                               |
| setVolume                        | 设置左右声道音量                 | ^[Function]`(volume: number) => void`                                        |
| getVolume                        | 获取音量                       | ^[Function]`() => void`                                                       |
| setStopped                       | 设置播放管理器的停止状态          | ^[Function]`(stopped: boolean) => void`                                      |
| setEnabled                       | 设置播放管理器的可用状态          | ^[Function]`(enabled: boolean) => void`                                      |
| setProgressCallback              | 设置播放进度回调                 | ^[Function]`(callback: ESPlayerProgressCallback) => void`          |
| setDurationCallback              | 设置播放总进度回调               | ^[Function]`(callback: ESPlayerDurationCallback) => void`           |
| invalidate                       | 刷新播放视图                    | ^[Function]`() => void`                                                      |

