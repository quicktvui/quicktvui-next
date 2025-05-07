---
title: PlayerManager
lang: zh-CN
---

# 全局监听播放事件

#### 第一步、创建实现`ESPlayerManagerEventListener`接口的类型对象

::: warning 注意：getId 方法需要返回应用唯一ID
:::

```ts
export function createESPlayerManagerEventListener(): ESPlayerManagerEventListener {

  let enabled = true
  let player: ESIPlayer

  const log = useESLog()
  const TAG = 'PlayerManagerEventListener'

  function getId(): string {
    return 'ESPlayerManagerEventListener'
  }

  function setEnabled(value: boolean): void {
    enabled = value
  }

  function isEnabled(): boolean {
    return enabled
  }

  function setPlayer(p: ESIPlayer): void {
    player = p
  }

  function getPlayer(): ESIPlayer {
    return player
  }

  function onPlayerInitialized(playerType: number): void {
    //
  }

  function onPlayerPlayMediaSourceList(playUriInfo: ESMediaSourceList): void {
    //
  }

  function onPlayerPlayMediaSource(mediaSource: ESMediaSource): void {
    //
  }

  function onPlayerSizeChanged(width: number, height: number): void {
    //
  }

  function onPlayerPreparing(): void {
    //
  }

  function onPlayerPrepared(): void {
    //
  }

  function onPlayerBufferStart(): void {
    //
  }

  function onPlayerBufferEnd(): void {
    //
  }

  function onPlayerPlaying(): void {
    //
  }

  function onPlayerProgressChanged(progress: number): void {
    //
  }

  function onPlayerDurationChanged(duration: number): void {
    //
  }

  function onPlayerSeekStart(): void {
    //
  }

  function onPlayerSeekCompleted(): void {
    //
  }

  function onPlayerPaused(): void {
    //
  }

  function onPlayerResumed(): void {
    //
  }

  function onPlayerStopped(): void {
    //
  }

  function onPlayerCompleted(): void {
    //
  }

  function onPlayerError(error: ESPlayerError): void {
    //
  }

  function onPlayerInfo(info: ESPlayerInfo): void {
    //
  }

  function onPlayerNoMediaSourceCanPlay(next: boolean): void {
    //
  }

  function onPlayerVolumeChanged(leftVolume: number, rightVolume: number): void {
    //
  }

  function onPlayerLeftVolumeChanged(leftVolume: number): void {
    //
  }

  function onPlayerRightVolumeChanged(rightVolume: number): void {
    //
  }

  function onPlayerDefinitionListChanged(definitionList: Array<ESPlayerDefinition>): void {
    //
  }

  function onPlayerDefinitionChanged(definition: ESPlayerDefinition): void {
    //
  }

  function onPlayerPlayRateListChanged(rateList: Array<ESPlayerRate>): void {
    //
  }

  function onPlayerPlayRateChanged(rate: ESPlayerRate): void {
    //
  }

  function onPlayerDecodeListChanged(decodeList: Array<ESPlayerDecode>): void {
    //
  }

  function onPlayerDecodeChanged(decode: ESPlayerDecode): void {
    //
  }

  function onPlayerAspectRatioListChanged(aspectRatioList: Array<ESPlayerAspectRatio>): void {
    //
  }

  function onPlayerAspectRatioChanged(aspectRatio: ESPlayerAspectRatio): void {
    //
  }

  function onPlayerPlayMediaSourceListModeListChanged(modeList: Array<ESPlayerPlayMode>): void {
    //
  }

  function onPlayerPlayMediaSourceListModeChanged(mode: ESPlayerPlayMode): void {
    //
  }

  function onPlayerPlayMediaListModeListChanged(modeList: Array<ESPlayerPlayMode>): void {
    //
  }

  function onPlayerPlayMediaListModeChanged(mode: ESPlayerPlayMode): void {
    //
  }

  function onPlayerViewChanged(): void {
    //
  }

  function onPlayerViewSizeChanged(playerWidth: number, playerHeight: number): void {
    //
  }

  function onPlayerViewClickable(playerClickable: boolean): void {
    //
  }

  function onPlayerPlayMediaList(playList: ESMediaItemList): void {
    //
  }

  function onPlayerPlayMedia(mediaItem: ESMediaItem): void {
    //
  }

  function onPlayerInterceptSuccess(value: ESPlayerInterceptResult): void {
    //
  }

  function onPlayerInterceptError(value: ESPlayerInterceptError): void {
    //
  }

  function onPlayerNoMediaCanPlay(next: boolean): void {
    //
  }

  function onPlayerWindowTypeChanged(windowType: ESPlayerWindowType): void {
    //
  }

  function onPlayerWindowSizeChanged(playerWidth: number, playerHeight: number): void {
    //
  }

  function onPlayerClickable(playerClickable: boolean): void {
    //
  }

  function onPlayerRenderChanged(render: ESPlayerRender): void {
    //
  }

  function onPlayerRenderListChanged(renderList: Array<ESPlayerRender>): void {
    //
  }

  return {
    getId,
    setEnabled,
    isEnabled,
    onPlayerInitialized,
    onPlayerPlayMediaSourceList,
    onPlayerPlayMediaSource,
    onPlayerSizeChanged,
    onPlayerPreparing,
    onPlayerPrepared,
    onPlayerBufferStart,
    onPlayerBufferEnd,
    onPlayerPlaying,
    onPlayerProgressChanged,
    onPlayerDurationChanged,
    onPlayerSeekStart,
    onPlayerSeekCompleted,
    onPlayerPaused,
    onPlayerResumed,
    onPlayerStopped,
    onPlayerCompleted,
    onPlayerError,
    onPlayerInfo,
    onPlayerNoMediaSourceCanPlay,
    onPlayerVolumeChanged,
    onPlayerLeftVolumeChanged,
    onPlayerRightVolumeChanged,
    onPlayerDefinitionListChanged,
    onPlayerDefinitionChanged,
    onPlayerPlayRateListChanged,
    onPlayerPlayRateChanged,
    onPlayerDecodeListChanged,
    onPlayerDecodeChanged,
    onPlayerAspectRatioListChanged,
    onPlayerAspectRatioChanged,
    onPlayerPlayMediaSourceListModeListChanged,
    onPlayerPlayMediaSourceListModeChanged,
    onPlayerPlayMediaListModeListChanged,
    onPlayerPlayMediaListModeChanged,
    onPlayerViewChanged,
    onPlayerPlayMediaList,
    onPlayerPlayMedia,
    onPlayerInterceptSuccess,
    onPlayerInterceptError,
    onPlayerNoMediaCanPlay,
    onPlayerWindowTypeChanged,
    onPlayerWindowSizeChanged,
    onPlayerClickable,
    onPlayerRenderChanged,
    onPlayerRenderListChanged
  }
}
```

#### 第二步、注册监听

```ts
import {
  useESPlayerManagerEventManager
} from "@extscreen/es3-player-manager";

const playerManagerEventListener = createESPlayerManagerEventListener()
const playerManagerEventManager = useESPlayerManagerEventManager()
playerManagerEventManager.addListener(playerManagerEventListener)
```

:::demo ## 完整示例

component/player-manager/event-global

:::
