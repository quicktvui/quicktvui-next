<template>
  <div class="es-image-player-parent-css">
    <img
      v-show="visible"
      v-if="playerInitialized"
      ref="imagePlayerRef"
      class="es-image-player-css"
      :style="{ width: playerWidth, height: playerHeight }"
      :src="imageUrlRef"
    />
  </div>
</template>

<script lang="ts">
import { ref, watch } from 'vue'
import { defineComponent } from '@vue/runtime-core'
import {
  ESPlayerLogLevel,
  useESPlayerEventManager,
  useESPlayerLog,
  useESPlayerViewManager,
} from '@extscreen/es3-player'
import type {
  ESIPlayer,
  ESMediaSource,
  ESMediaSourceList,
  ESPlayerAspectRatio,
  ESPlayerControlOptions,
  ESPlayerDecode,
  ESPlayerDefinition,
  ESPlayerDurationCallback,
  ESPlayerProgressCallback,
  ESPlayerRate,
} from '@extscreen/es3-player'

const TAG = 'ESImagePlayer'

export default defineComponent({
  name: 'ESImagePlayer',
  props: {
    playerType: {
      type: Number,
      default: 1,
    },
    playMediaSourceAuto: {
      type: Boolean,
      default: true,
    },
    playMediaSourceListMode: {
      type: Number,
      default: 0,
    },
    playerZIndex: {
      type: Number,
      default: 1,
    },
    backgroundColor: {
      type: String,
      default: 'transparent',
    },
  },
  emits: [],
  type: 3, //自定义播放器的类型为3
  setup(props, context) {
    const imageUrlRef = ref<string>('')
    const imagePlayerRef = ref<ESIPlayer>()
    const log = useESPlayerLog()
    const playerInitialized = ref(false)
    const visible = ref<boolean>(true)

    const playerWidth = ref<number>(1920)
    const playerHeight = ref<number>(1080)

    const playerEventManager = useESPlayerEventManager()
    const playerViewManager = useESPlayerViewManager()

    watch(
      () => [imagePlayerRef.value] as const,
      ([instance], [oldInstance]) => {
        if (instance) {
          onPlayerInitializeSuccess()
        }
      },
      { flush: 'post' }
    )

    let mediaSourceList: ESMediaSourceList
    let mediaSourceIndex = 0
    let mediaSource: ESMediaSource

    function onPlayerInitializeSuccess(): void {
      if (log.isLoggable(ESPlayerLogLevel.DEBUG)) {
        log.d(TAG, '-----onPlayerInitializeSuccess----->>>')
      }
      context.emit('onPlayerInitialized', getType())
    }

    function getType(): number {
      return 3
    }

    function getComponentInfo(): void {
      //do nothing
    }

    function initComponent(...params: Array<any>): void {
      //do nothing
    }

    function setVisible(value: boolean): void {
      visible.value = value
    }

    function initialize(): void {
      playerInitialized.value = true
    }

    function isInitialized(): boolean {
      return playerInitialized.value
    }

    function playMediaSourceList(list: ESMediaSourceList): void {
      mediaSourceList = list
      playMediaSourceByIndex(list.index)
    }

    function playMediaSourceByIndex(index: number): void {
      mediaSourceIndex = index
      playMediaSource(mediaSourceList.list[mediaSourceIndex])
    }

    function playMediaSourceById(id: string): void {
      //do nothing
    }

    function playMediaSource(source: ESMediaSource): void {
      mediaSource = source
      play()
    }

    function playNextMediaSource(): void {
      //do nothing
    }

    function playPreviousMediaSource(): void {
      //do nothing
    }

    function play(...params: Array<any>): void {
      imageUrlRef.value = mediaSource.uri
    }

    function start(position: number): void {
      //do nothing
    }

    function pause(): void {
      //do nothing
    }

    function resume(): void {
      //do nothing
    }

    function stop(): void {
      imageUrlRef.value = ''
    }

    function reset(): void {
      //do nothing
    }

    function release(): void {
      //do nothing
    }

    function seekTo(progress: number): void {
      //do nothing
    }

    //声明并实现自定义播放控制逻辑
    function control(options: ESPlayerControlOptions): void {
      if (log.isLoggable(ESPlayerLogLevel.DEBUG)) {
        log.d(TAG, '-------------control------------->>>', options)
      }
      //控制图片播放器播放图片的尺寸
      playerWidth.value = options.payload?.width ?? '1920'
      playerHeight.value = options.payload?.height ?? '1080'

      //发送控制播放完毕事件，通知事件管理器和视图管理器
      //ESPlayerControlOptions 可根据需求自定义命令和参数
      onPlayerControlled(options)
    }

    function onPlayerControlled(options: ESPlayerControlOptions): void {
      context.emit('onPlayerControlled', options)
      //通知事件管理器
      playerEventManager.onPlayerPaused()
      //通知视图管理器
      playerViewManager.onPlayerPaused()
    }

    function getDuration(): void {
      //do nothing
    }

    function getCurrentPosition(): void {
      //do nothing
    }

    function setSize(width: number, height: number): void {
      // props.playerWidth = width
      // props.playerHeight = height
    }

    function setPlayRate(playRate: ESPlayerRate): void {
      //do nothing
    }

    function setDefinition(definition: ESPlayerDefinition): void {
      //do nothing
    }

    function setDecode(decode: ESPlayerDecode): void {
      //do nothing
    }

    function setAspectRatio(aspectRatio: ESPlayerAspectRatio): void {
      //do nothing
    }

    function getLeftVolume(): void {
      //do nothing
    }

    function getRightVolume(): void {
      //do nothing
    }

    function setLeftVolume(leftVolume: number): void {
      //do nothing
    }

    function setRightVolume(rightVolume: number): void {
      //do nothing
    }

    function setStopped(stopped: boolean): void {
      //do nothing
    }

    function setEnabled(enabled: boolean): void {
      //do nothing
    }

    function setProgressCallback(callback: ESPlayerProgressCallback): void {
      //do nothing
    }

    function setDurationCallback(callback: ESPlayerDurationCallback): void {
      //do nothing
    }

    function invalidate(): void {
      //do nothing
    }

    return {
      imagePlayerRef,
      imageUrlRef,
      playerInitialized,
      visible,
      getType,
      getComponentInfo,
      initComponent,
      setVisible,
      initialize,
      isInitialized,
      playMediaSourceList,
      playMediaSourceByIndex,
      playMediaSourceById,
      playMediaSource,
      playNextMediaSource,
      playPreviousMediaSource,
      play,
      start,
      pause,
      resume,
      stop,
      reset,
      release,
      seekTo,
      control,
      getDuration,
      getCurrentPosition,
      setSize,
      setPlayRate,
      setDefinition,
      setDecode,
      setAspectRatio,
      getLeftVolume,
      getRightVolume,
      setLeftVolume,
      setRightVolume,
      setStopped,
      setEnabled,
      setProgressCallback,
      setDurationCallback,
      invalidate,
      playerWidth,
      playerHeight,
      onPlayerControlled,
    }
  },
})
</script>

<style scoped>
.es-image-player-parent-css {
  width: 1920px;
  height: 1080px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: palevioletred;
}

.es-image-player-css {
}
</style>
