---
title: PlayerManager
lang: zh-CN
---

# ESPlayerManager 简介

播放管理器`ESPlayerManager`是基于常用的应用业务封装的一套管理播放组件的组件。

***`ESPlayerManager`组件用来管理各个播放器组件，本身不提供播放功能。***

除了基本的播放控制功能外，还提供以下功能：

* 播放窗口切换
* 播放模式
* 多类型播放器混播
* 广告

## 结构示意图

<img src="/component/player-manager/structure.png" />

## API

### DataStructure

#### ESMediaItem

媒资条目

| Name          | Description                | Type                          |   Default   |
| -------------- | ------------------| ----------------------------|---------|
| [type](/zh-CN/component/player-manager/player-type)    | [播放器的类型](/zh-CN/component/player-manager/player-type)        | ^[number]                   |   `1`    |
| id             | 媒资的唯一标识符     | ^[number] / ^[string]            |   -    |
| mediaSourceList| 媒资资源列表        | ^[ESMediaSourceList]         |   -    |
| interceptors   | 媒资条目拦截器      | ^[Array<ESIPlayerInterceptor>] |   -   |
| position       | 媒资播放位置        | ^[ESPlayerPosition]             |   -    |
| metadata       | 媒资信息           | ^[ESMediaMetadata]             |   -    |
| previousRollADList| 前贴片广告资源列表| ^[ESMediaSourceList]          |   -    |
| middleRollADList| 中插广告资源列表   | ^[ESMediaSourceList]          |   -    |
| postRollADList | 后贴广告资源列表     | ^[ESMediaSourceList]          |   -    |
| adPlayerType   | 广告播放器类型       | ^[number]                    |   -    |

#### ESMediaItemList

媒资条目列表

| Name          | Description                | Type                          |   Default   |
| -------------- | ------------------| ----------------------------|---------|
| index          | 默认播放媒资条目的索引| ^[number]                    |   -    |
| list           | 媒资条目列表        | ^[Array<ESMediaItem>]          |   -    |
| interceptors   | 媒资条目列表拦截器   | ^[Array<ESIPlayerInterceptor>] |   -    |
| metadata       | 媒资信息           | ^[ESMediaMetadata]             |   -    |

### Attributes

| Name                      | Description          | Type                           |  Default   |
| -------------------------| --------------------- | ----------------------------- |---------|
| playerList               | 播放器数组列表          | ^[Array<ESIPlayer>]            |[]    |
| playerViewList           | 播放器视图数组列表       | ^[Array<ESIPlayerManagerView>] |[]    |
| adPlayerList             | 广告播放器数组列表       | ^[Array<ESIPlayer]            |
| adPlayerViewList         | 广告播放器视图数组列表    | ^[Array<ESIPlayerManagerView>] |[]    |
| adChannel                | 广告的渠道              | ^[string]                      |''    |
| adDebug                  | 是否开启广告调试模式      | ^[boolean]                     |false  |
| adTest                   | 是否开启广告测试环境      | ^[boolean]                     |false  |
| playMediaAuto            | 是否自动播放媒资         | ^[boolean]                     |true    |
| playMediaSourceAuto      | 是否自动播放媒资数据源    | ^[boolean]                     |true    |
| playMediaSourceListMode  | 媒资数据源播放模式       | ^[ESPlayerPlayMode]             |ES_PLAYER_PLAY_MODE_ONCE    |
| playerBackgroundColor    | 播放管理器背景颜色       | ^[string]                       |transparent    |
| smallWindowWidth         | 播放小窗口模式宽度       | ^[number]                       |976    |
| smallWindowHeight        | 播放小窗口模式高度       | ^[number]                       |557    |
| fullWindowWidth          | 播放全屏窗口模式宽度      | ^[number]                      |1920    |
| fullWindowHeight         | 播放全屏窗口模式高度      | ^[number]                      |1080    |
| floatWindowWidth         | 播放浮动窗口模式宽度      | ^[number]                      |400    |
| floatWindowHeight        | 播放浮动窗口模式高度      | ^[number]                      |230    |
| initPlayerWindowType     | 初始化播放窗口模式        | ^[ESPlayerWindowType]          |ES_PLAYER_WINDOW_TYPE_SMALL    |
| isEnabled                | 播放管理器是否可用        | ^[boolean]                     |true    |

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
| onPlayerPlayMediaList         | 播放媒资条目列表事件         | ^[Function]`onPlayerPlayMediaList(playList: ESMediaItemList) => void`                      |
| onPlayerMediaListInitialized  | 初始化媒资条目列表事件         | ^[Function]`onPlayerMediaListInitialized(mediaList: SparseArray<ESMediaItem>) => void`                      |
| onPlayerPlayMedia             | 播放媒资条目事件         | ^[Function]`onPlayerPlayMedia(mediaItem: ESMediaItem) => void`                      |
| onPlayerInterceptSuccess      | 播放拦截器成功事件         | ^[Function]`onPlayerInterceptSuccess(result: ESPlayerInterceptResult) => void`                      |
| onPlayerInterceptError        | 播放拦截器错误事件         | ^[Function]`onPlayerInterceptError(error: ESPlayerInterceptError) => void`                      |
| onPlayerNoMediaCanPlay        | 无媒资可播放事件         | ^[Function]`onPlayerNoMediaCanPlay(next: boolean) => void`                      |
| onPlayerPlayMediaListModeListChanged        | 播放媒资列表模式列表事件         | ^[Function]`onPlayerPlayMediaListModeListChanged(playModeList: Array<ESPlayerPlayMode>) => void`                      |
| onPlayerPlayMediaListModeChanged        | 播放媒资列表模式事件         | ^[Function]`onPlayerPlayMediaListModeChanged(playMode: ESPlayerPlayMode) => void`                      |
| onPlayerPlayMediaSourceListModeListChanged        | 播放媒资资源列表模式列表事件         | ^[Function]`onPlayerPlayMediaSourceListModeListChanged(playModeList: Array<ESPlayerPlayMode>) => void`                      |
| onPlayerPlayMediaSourceListModeChanged        | 播放媒资资源列表模式事件         | ^[Function]`onPlayerPlayMediaSourceListModeChanged(playMode: ESPlayerPlayMode) => void`                      |
| onPlayerWindowTypeChanged        | 播放管理器窗口变化事件         | ^[Function]`onPlayerWindowTypeChanged(windowType: ESPlayerWindowType) => void`                      |

### Exposes

| Name                             | Description                 | Type                                                                              |
| -------------------------------- | --------------------------- | --------------------------------------------------------------------------------- |
| initialize                       | 初始化                       | ^[Function]`() => void`                                                    |
| isInitialized                    | 判断播放管理器是否初始化         | ^[Function]`() => boolean`                                             |
| setVisible                       | 设置播放管理器是否可见          | ^[Function]`(value: boolean) => void`                                       |
| playMediaSourceList              | 播放媒资资源列表               | ^[Function]`(mediaSourceList: ESMediaSourceList) => void`         |
| playMediaSourceByIndex           | 根据媒资资源索引进行播放         | ^[Function]`(index: number) => void`                           |
| playMediaSourceById              | 根据媒资资源唯一标识符进行播放    | ^[Function]`(id: string) => void`                                  |
| playMediaSource                  | 播放媒资资源                  | ^[Function]`(mediaSource: ESMediaSource) => void`                       |
| playNextMediaSource              | 播放下一个媒资资源             | ^[Function]`() => void`                                             |
| playPreviousMediaSource          | 播放上一个媒资资源             | ^[Function]`() => void`                                         |
| getMediaSourceList               | 获取正在播放的媒资资源列表       | ^[Function]`() => Array<ESMediaSource> \| null`                     |
| getMediaSource                   | 根据媒资资源索引获取媒资资源     | ^[Function]`(index: number) => ESMediaSource \| null`                    |
| getPlayingMediaSourceIndex       | 获取正在播放的媒资资源的索引     | ^[Function]`() => number`                                    |
| getPlayingMediaSourceList        | 获取正在播放的媒资资源列表       | ^[Function]`() => ESMediaSourceList \| null`                  |
| getPlayingMediaSource            | 获取正在播放的媒资资源          | ^[Function]`() => ESMediaSource \| null`                          |
| play                             | 播放器的播放方法               | ^[Function]`(...params: Array<any>) => void`                                       |
| start                            | 播放器的开始播放方法            | ^[Function]`(position: number) => void`                                           |
| pause                            | 播放器的暂停播放方法            | ^[Function]`() => void`                                                           |
| resume                           | 恢复播放器播放                 | ^[Function]`() => void`                                                          |
| stop                             | 停止播放器播放                 | ^[Function]`() => void`                                                            |
| reset                            | 重置播放器                    | ^[Function]`() => void`                                                           |
| release                          | 回收播放器资源                 | ^[Function]`() => void`                                                         |
| seekTo                           | 播放快进                      | ^[Function]`(progress: number) => void`                                          |
| getDuration                      | 获取播放总时长                 | ^[Function]`() => void`                                                     |
| getCurrentPosition               | 获取当前播放的进度              | ^[Function]`() => void`                                              |
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
| playMediaList                    | 播放媒资列表                    | ^[Function]`(playList: ESMediaItemList) => void`                                                      |
| playMediaByIndex                 | 播放指定索引的媒资               | ^[Function]`(index: number) => void`                                                      |
| playMediaById                    | 播放指定唯一标识符的媒资          | ^[Function]`(id: string) => void`                                                      |
| playMedia                        | 播放媒资                       | ^[Function]`(mediaItem: ESMediaItem) => void`                                                      |
| addMediaToLast                   | 添加媒资列表到播放列表的末尾       | ^[Function]`(mediaItemList: Array<ESMediaItem>) => void`                                                      |
| addMediaToFirst                  | 添加媒资列表到播放列表的首位       | ^[Function]`(mediaItemList: Array<ESMediaItem>) => void`                                                      |
| addMediaToIndex                  | 添加媒资列表到播放列表的指定位置    | ^[Function]`(index: number, mediaItemList: Array<ESMediaItem>) => void`                                                      |
| replaceMedia                     | 替换媒资列表指定位置媒资          | ^[Function]`(beginIndex: number, mediaItemList: Array<ESMediaItem>) => void`                                                      |
| getMediaList                     | 获取播放的媒资列表               | ^[Function]`() => Array<ESMediaItem> \| null`                                                      |
| getMedia                         | 获取指定索引的媒资               | ^[Function]`(index: number) => ESMediaItem \| null`                                                      |
| getPlayingMediaIndex             | 获取正在播放的媒资的索引          | ^[Function]`() => number`                                                      |
| getPlayingMediaList              | 获取正在播放的媒资列表            | ^[Function]`() => ESMediaItemList \| null`                                                      |
| getPlayingMedia                  | 获取正在播放的媒资               | ^[Function]`() => ESMediaItem \| null`                                                      |
| getWindowType                    | 获取当前播放管理器的窗口类型       | ^[Function]`() => ESPlayerWindowType`                                                      |
| setFloatWindow                   | 设置播放管理器浮动窗口            | ^[Function]`() => void`                                                      |
| setSmallWindow                   | 设置播放管理器小窗口              | ^[Function]`() => void`                                                      |
| setFullWindow                    | 设置播放管理器全屏窗口            | ^[Function]`() => void`                                                      |
| setWindowType                    | 设置播放管理器窗口                | ^[Function]`(windowType: ESPlayerWindowType) => void`                                                      |
| setPlayMediaListMode             | 设置播放媒资模式                 | ^[Function]`(playMode: ESPlayerPlayMode) => void`                                                      |
| canPlayNextMedia                 | 判断是否可以播放视频列表下一个媒资   | ^[Function]`() => boolean`                                                      |
| playNextMedia                    | 播放下一个媒资                   | ^[Function]`() => void`                                                      |
| canPlayPreviousMedia             | 判断是否可以播放视频列表上一个媒资   | ^[Function]`() => boolean`                                                      |
| playPreviousMedia                | 播放上一个媒资                   | ^[Function]`() => void`                                                      |
| onKeyDown                        | 处理按键按下逻辑                 | ^[Function]`(keyEvent: ESKeyEvent) => boolean`                                                      |
| onKeyUp                          | 处理按键抬起逻辑                 | ^[Function]`(keyEvent: ESKeyEvent) => boolean`                                                      |
| onBackPressed                    | 处理返回键逻辑                   | ^[Function]`() => boolean`                                                      |
