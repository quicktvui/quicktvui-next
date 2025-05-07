<template>
  <div class="es-sdk-root-css">
    <es-player-manager
      ref="playerManager"
      :initPlayerWindowType="2"
      :playerList="playerListRef"
      class="es-video-player-manager-page-css"
    />
    <s-title-view class="es-sdk-content-title-css" :text="$options.name" />
    <div class="es-sdk-content-divider-css" />
  </div>
</template>

<script lang="ts">
import { markRaw, ref } from 'vue'
import { defineComponent } from '@vue/runtime-core'

import {
  ESPlayerManager,
  useESPlayerManagerEventManager,
} from '@extscreen/es3-player-manager'
import { ESLogLevel, useESLog } from '@extscreen/es3-core'
import { ESVideoPlayer } from '@extscreen/es3-video-player'
import type {
  ESIPlayerManager,
  ESMediaItem,
  ESMediaItemList,
  ESPlayerManagerEventListener,
} from '@extscreen/es3-player-manager'
import type {
  ESIPlayer,
  ESMediaSource,
  ESMediaSourceList,
  ESPlayerAspectRatio,
  ESPlayerDecode,
  ESPlayerDefinition,
  ESPlayerError,
  ESPlayerInfo,
  ESPlayerInterceptError,
  ESPlayerInterceptResult,
  ESPlayerPlayMode,
  ESPlayerRate,
  ESPlayerRender,
  ESPlayerWindowType,
} from '@extscreen/es3-player'

const TAG = 'ESVideoPlayerManagerPage'

export default defineComponent({
  name: '全局监听PlayerManager事件',
  components: {
    'es-player-manager': ESPlayerManager,
  },
  setup() {
    const log = useESLog()
    const playerManager = ref<ESIPlayerManager>()

    const playerList = [markRaw(ESVideoPlayer)]
    const playerListRef = ref(playerList)

    let isPaused = false

    //全局监听播放事件
    const playerManagerEventListener = createESPlayerManagerEventListener()
    const playerManagerEventManager = useESPlayerManagerEventManager()
    playerManagerEventManager.addListener(playerManagerEventListener)

    const onESCreate = () => {
      if (log.isLoggable(ESLogLevel.DEBUG)) {
        log.e(TAG, '-------onESCreate---------->>>>>')
      }
      isPaused = false
      const mediaSource: ESMediaSource = {
        uri: 'http://qcloudcdn.a311.ottcn.com/data_center/videos/SHORT/DEFAULT/2023/08/25/7d3623ae-c002-4929-b5a2-fe10bca06bfc.mp4',
      }
      const mediaSourceList: ESMediaSourceList = {
        index: 0,
        list: [mediaSource],
      }
      const mediaItem: ESMediaItem = {
        mediaSourceList,
      }
      const playList: ESMediaItemList = {
        index: 0,
        list: [mediaItem],
      }
      playerManager.value?.initialize()
      playerManager.value?.playMediaList(playList)
    }
    const onESResume = () => {
      log.e(TAG, '-------onESResume---------->>>>>')
      if (isPaused) {
        playerManager.value?.resume()
      }
      isPaused = false
    }
    const onESPause = () => {
      log.e(TAG, '-------onESPause---------->>>>>')
      isPaused = true
      playerManager.value?.stop()
    }
    const onESDestroy = () => {
      log.e(TAG, '-------onESDestroy---------->>>>>')
      playerManager.value?.release()
    }

    function createESPlayerManagerEventListener(): ESPlayerManagerEventListener {
      let enabled = true
      let player: ESIPlayer

      const log = useESLog()

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
        if (log.isLoggable(ESLogLevel.DEBUG)) {
          log.d(TAG, '---------------onPlayerInitialized------->>>', playerType)
        }
      }

      function onPlayerPlayMediaSourceList(
        playUriInfo: ESMediaSourceList
      ): void {
        if (log.isLoggable(ESLogLevel.DEBUG)) {
          log.d(
            TAG,
            '---------------onPlayerPlayMediaSourceList------->>>',
            playUriInfo
          )
        }
      }

      function onPlayerPlayMediaSource(mediaSource: ESMediaSource): void {
        if (log.isLoggable(ESLogLevel.DEBUG)) {
          log.d(
            TAG,
            '---------------onPlayerPlayMediaSource------->>>',
            mediaSource
          )
        }
      }

      function onPlayerSizeChanged(width: number, height: number): void {
        if (log.isLoggable(ESLogLevel.DEBUG)) {
          log.d(
            TAG,
            '---------------onPlayerSizeChanged------->>>',
            `width:${width}`,
            `height:${height}`
          )
        }
      }

      function onPlayerPreparing(): void {
        if (log.isLoggable(ESLogLevel.DEBUG)) {
          log.d(TAG, '----------onPlayerPreparing----->>>')
        }
      }

      function onPlayerPrepared(): void {
        if (log.isLoggable(ESLogLevel.DEBUG)) {
          log.d(TAG, '----------onPlayerPrepared----->>>')
        }
      }

      function onPlayerBufferStart(): void {
        if (log.isLoggable(ESLogLevel.DEBUG)) {
          log.d(TAG, '----------onPlayerBufferStart----->>>')
        }
      }

      function onPlayerBufferEnd(): void {
        if (log.isLoggable(ESLogLevel.DEBUG)) {
          log.d(TAG, '----------onPlayerBufferEnd----->>>')
        }
      }

      function onPlayerPlaying(): void {
        if (log.isLoggable(ESLogLevel.DEBUG)) {
          log.d(TAG, '----------onPlayerPlaying----->>>')
        }
      }

      function onPlayerProgressChanged(progress: number): void {
        if (log.isLoggable(ESLogLevel.DEBUG)) {
          log.d(TAG, '----------onPlayerProgressChanged----->>>', progress)
        }
      }

      function onPlayerDurationChanged(duration: number): void {
        if (log.isLoggable(ESLogLevel.DEBUG)) {
          log.d(TAG, '----------onPlayerDurationChanged----->>>', duration)
        }
      }

      function onPlayerSeekStart(): void {
        if (log.isLoggable(ESLogLevel.DEBUG)) {
          log.d(TAG, '----------onPlayerSeekStart----->>>')
        }
      }

      function onPlayerSeekCompleted(): void {
        if (log.isLoggable(ESLogLevel.DEBUG)) {
          log.d(TAG, '----------onPlayerSeekCompleted----->>>')
        }
      }

      function onPlayerPaused(): void {
        if (log.isLoggable(ESLogLevel.DEBUG)) {
          log.d(TAG, '----------onPlayerPaused----->>>')
        }
      }

      function onPlayerResumed(): void {
        if (log.isLoggable(ESLogLevel.DEBUG)) {
          log.d(TAG, '----------onPlayerResumed----->>>')
        }
      }

      function onPlayerStopped(): void {
        if (log.isLoggable(ESLogLevel.DEBUG)) {
          log.d(TAG, '----------onPlayerStopped----->>>')
        }
      }

      function onPlayerCompleted(): void {
        if (log.isLoggable(ESLogLevel.DEBUG)) {
          log.d(TAG, '----------onPlayerCompleted----->>>')
        }
      }

      function onPlayerError(error: ESPlayerError): void {
        if (log.isLoggable(ESLogLevel.DEBUG)) {
          log.d(TAG, '----------onPlayerError----->>>', error)
        }
      }

      function onPlayerInfo(info: ESPlayerInfo): void {
        if (log.isLoggable(ESLogLevel.DEBUG)) {
          log.d(TAG, '----------onPlayerInfo----->>>', info)
        }
      }

      function onPlayerNoMediaSourceCanPlay(next: boolean): void {
        if (log.isLoggable(ESLogLevel.DEBUG)) {
          log.d(TAG, '----------onPlayerNoMediaSourceCanPlay----->>>', next)
        }
      }

      function onPlayerVolumeChanged(
        leftVolume: number,
        rightVolume: number
      ): void {
        if (log.isLoggable(ESLogLevel.DEBUG)) {
          log.d(
            TAG,
            '---------------onPlayerVolumeChanged------->>>',
            `leftVolume:${leftVolume}`,
            `rightVolume:${rightVolume}`
          )
        }
      }

      function onPlayerLeftVolumeChanged(leftVolume: number): void {
        if (log.isLoggable(ESLogLevel.DEBUG)) {
          log.d(TAG, '----------onPlayerLeftVolumeChanged----->>>', leftVolume)
        }
      }

      function onPlayerRightVolumeChanged(rightVolume: number): void {
        if (log.isLoggable(ESLogLevel.DEBUG)) {
          log.d(
            TAG,
            '----------onPlayerRightVolumeChanged----->>>',
            rightVolume
          )
        }
      }

      function onPlayerDefinitionListChanged(
        definitionList: Array<ESPlayerDefinition>
      ): void {
        if (log.isLoggable(ESLogLevel.DEBUG)) {
          log.d(
            TAG,
            '----------onPlayerDefinitionListChanged----->>>',
            definitionList
          )
        }
      }

      function onPlayerDefinitionChanged(definition: ESPlayerDefinition): void {
        if (log.isLoggable(ESLogLevel.DEBUG)) {
          log.d(TAG, '----------onPlayerDefinitionChanged----->>>', definition)
        }
      }

      function onPlayerPlayRateListChanged(
        rateList: Array<ESPlayerRate>
      ): void {
        if (log.isLoggable(ESLogLevel.DEBUG)) {
          log.d(TAG, '----------onPlayerPlayRateListChanged----->>>', rateList)
        }
      }

      function onPlayerPlayRateChanged(rate: ESPlayerRate): void {
        if (log.isLoggable(ESLogLevel.DEBUG)) {
          log.d(TAG, '----------onPlayerPlayRateChanged----->>>', rate)
        }
      }

      function onPlayerDecodeListChanged(
        decodeList: Array<ESPlayerDecode>
      ): void {
        if (log.isLoggable(ESLogLevel.DEBUG)) {
          log.d(TAG, '----------onPlayerDecodeListChanged----->>>', decodeList)
        }
      }

      function onPlayerDecodeChanged(decode: ESPlayerDecode): void {
        if (log.isLoggable(ESLogLevel.DEBUG)) {
          log.d(TAG, '----------onPlayerDecodeChanged----->>>', decode)
        }
      }

      function onPlayerAspectRatioListChanged(
        aspectRatioList: Array<ESPlayerAspectRatio>
      ): void {
        if (log.isLoggable(ESLogLevel.DEBUG)) {
          log.d(
            TAG,
            '----------onPlayerAspectRatioListChanged----->>>',
            aspectRatioList
          )
        }
      }

      function onPlayerAspectRatioChanged(
        aspectRatio: ESPlayerAspectRatio
      ): void {
        if (log.isLoggable(ESLogLevel.DEBUG)) {
          log.d(
            TAG,
            '----------onPlayerAspectRatioChanged----->>>',
            aspectRatio
          )
        }
      }

      function onPlayerPlayMediaSourceListModeListChanged(
        modeList: Array<ESPlayerPlayMode>
      ): void {
        if (log.isLoggable(ESLogLevel.DEBUG)) {
          log.d(
            TAG,
            '----------onPlayerPlayMediaSourceListModeListChanged----->>>',
            modeList
          )
        }
      }

      function onPlayerPlayMediaSourceListModeChanged(
        mode: ESPlayerPlayMode
      ): void {
        if (log.isLoggable(ESLogLevel.DEBUG)) {
          log.d(
            TAG,
            '----------onPlayerPlayMediaSourceListModeChanged----->>>',
            mode
          )
        }
      }

      function onPlayerPlayMediaListModeListChanged(
        modeList: Array<ESPlayerPlayMode>
      ): void {
        if (log.isLoggable(ESLogLevel.DEBUG)) {
          log.d(
            TAG,
            '----------onPlayerPlayMediaListModeListChanged----->>>',
            modeList
          )
        }
      }

      function onPlayerPlayMediaListModeChanged(mode: ESPlayerPlayMode): void {
        if (log.isLoggable(ESLogLevel.DEBUG)) {
          log.d(TAG, '----------onPlayerPlayMediaListModeChanged----->>>', mode)
        }
      }

      function onPlayerViewChanged(): void {
        if (log.isLoggable(ESLogLevel.DEBUG)) {
          log.d(TAG, '----------onPlayerViewChanged----->>>')
        }
      }

      function onPlayerViewSizeChanged(
        playerWidth: number,
        playerHeight: number
      ): void {
        if (log.isLoggable(ESLogLevel.DEBUG)) {
          log.d(
            TAG,
            '---------------onPlayerViewSizeChanged------->>>',
            `playerWidth:${playerWidth}`,
            `playerHeight:${playerHeight}`
          )
        }
      }

      function onPlayerViewClickable(playerClickable: boolean): void {
        if (log.isLoggable(ESLogLevel.DEBUG)) {
          log.d(TAG, '----------onPlayerViewClickable----->>>', playerClickable)
        }
      }

      function onPlayerPlayMediaList(playList: ESMediaItemList): void {
        if (log.isLoggable(ESLogLevel.DEBUG)) {
          log.d(TAG, '----------onPlayerPlayMediaList----->>>', playList)
        }
      }

      function onPlayerPlayMedia(mediaItem: ESMediaItem): void {
        if (log.isLoggable(ESLogLevel.DEBUG)) {
          log.d(TAG, '----------onPlayerPlayMedia----->>>', mediaItem)
        }
      }

      function onPlayerInterceptSuccess(value: ESPlayerInterceptResult): void {
        if (log.isLoggable(ESLogLevel.DEBUG)) {
          log.d(TAG, '----------onPlayerInterceptSuccess----->>>', value)
        }
      }

      function onPlayerInterceptError(value: ESPlayerInterceptError): void {
        if (log.isLoggable(ESLogLevel.DEBUG)) {
          log.d(TAG, '----------onPlayerInterceptError----->>>', value)
        }
      }

      function onPlayerNoMediaCanPlay(next: boolean): void {
        if (log.isLoggable(ESLogLevel.DEBUG)) {
          log.d(TAG, '----------onPlayerNoMediaCanPlay----->>>', next)
        }
      }

      function onPlayerWindowTypeChanged(windowType: ESPlayerWindowType): void {
        if (log.isLoggable(ESLogLevel.DEBUG)) {
          log.d(TAG, '----------onPlayerWindowTypeChanged----->>>', windowType)
        }
      }

      function onPlayerWindowSizeChanged(
        playerWidth: number,
        playerHeight: number
      ): void {
        if (log.isLoggable(ESLogLevel.DEBUG)) {
          log.d(
            TAG,
            '---------------onPlayerWindowSizeChanged------->>>',
            `playerWidth:${playerWidth}`,
            `playerHeight:${playerHeight}`
          )
        }
      }

      function onPlayerClickable(playerClickable: boolean): void {
        //
      }

      function onPlayerRenderChanged(render: ESPlayerRender): void {
        //
      }

      function onPlayerRenderListChanged(
        renderList: Array<ESPlayerRender>
      ): void {
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
        onPlayerRenderListChanged,
      }
    }

    return {
      onESCreate,
      onESResume,
      onESPause,
      onESDestroy,
      playerListRef,
      playerManager,
    }
  },
})
</script>

<style>
.es-video-player-manager-page-css {
  position: absolute;
}
</style>
