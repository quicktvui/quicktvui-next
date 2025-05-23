<template>
  <div class="es-sdk-root-css">
    <es-audio-service-player
      ref="player"
      :playerWidth="playerWidth"
      :playerHeight="playerHeight"
      class="es-video-player-page-css"
      @onPlayerInitialized="onPlayerInitialized"
    />
    <s-title-view class="es-sdk-content-title-css" :text="$options.name" />
    <div class="es-sdk-content-divider-css" />
    <div class="es-sdk-content-row-css" />
  </div>
</template>

<script lang="ts">
import { ref } from 'vue'
import { defineComponent } from '@vue/runtime-core'
import { useESLog } from '@extscreen/es3-core'
import { useESPlayerEventManager } from '@extscreen/es3-player'
import { useESRouter } from '@extscreen/es3-router'
import { ESAudioServicePlayer } from '@extscreen/es3-audio-service-player'
import type {
  ESIPlayer,
  ESMediaSource,
  ESMediaSourceList,
  ESPlayerAspectRatio,
  ESPlayerDecode,
  ESPlayerDefinition,
  ESPlayerError,
  ESPlayerEventListener,
  ESPlayerInfo,
  ESPlayerInterceptError,
  ESPlayerInterceptResult,
  ESPlayerPlayMode,
  ESPlayerRate,
  ESPlayerRender,
} from '@extscreen/es3-player'

const TAG = 'ESAudioPlayerPage'

export default defineComponent({
  name: '全局监听播放事件',
  components: {
    'es-audio-service-player': ESAudioServicePlayer,
  },
  setup() {
    const log = useESLog()
    const router = useESRouter()
    const player = ref<ESIPlayer>()
    const playerWidth = 1920
    const playerHeight = 1080
    //--------------------------------全局监听播放事件----------------START----------------
    const playerManagerEventManager = useESPlayerEventManager()
    const playerManagerEventListener = createESPlayerEventListener()
    playerManagerEventManager.addListener(playerManagerEventListener)
    //--------------------------------全局监听播放事件----------------END------------------

    const onESCreate = () => {
      log.e(TAG, '-------onESCreate------start---->>>>>')
      player.value?.initialize()
    }
    const onPlayerInitialized = (playerType) => {
      log.e(TAG, '-------onESCreate------onPlayerInitialized---->>>>>')
      const mediaSource: ESMediaSource = {
        uri: 'http://qcloudcdn.a311.ottcn.com/data_center/audios/ifengfm/1898049/9644712/2ff957624598b7b105d5c86b809c854c.mp3',
      }
      const mediaSourceList: ESMediaSourceList = {
        index: 0,
        list: [mediaSource],
      }
      log.e(TAG, '-------onPlayerInitialized---------->>>>>', playerType)
      player.value?.playMediaSourceList(mediaSourceList)
    }

    function onBackPressed() {
      player.value?.stop()
      player.value?.release()
      router.back()
    }

    function createESPlayerEventListener(): ESPlayerEventListener {
      let enabled = true
      let player: ESIPlayer

      const log = useESLog()
      const TAG = 'PlayerEventListener'

      function getId(): string {
        return 'ESPlayerEventListener'
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

      function onPlayerClickable(playerClickable: boolean): void {
        if (log.isLoggable(ESLogLevel.DEBUG)) {
          log.d(TAG, '----------onPlayerViewClickable----->>>', playerClickable)
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
        setPlayer,
        getPlayer,
        onPlayerInitialized,
        onPlayerPlayMediaSourceList,
        onPlayerPlayMediaSource,
        onPlayerInterceptSuccess,
        onPlayerInterceptError,
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
        onPlayerViewChanged,
        onPlayerClickable,
        onPlayerRenderChanged,
        onPlayerRenderListChanged,
      }
    }

    return {
      onESCreate,
      onPlayerInitialized,
      playerWidth,
      playerHeight,
      player,
      onBackPressed,
    }
  },
})
</script>

<style>
.es-video-player-page-css {
  position: absolute;
}
</style>
