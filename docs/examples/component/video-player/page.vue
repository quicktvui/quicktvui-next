<template>
  <div class="es-sdk-root-css">
    <es-video-player
      ref="videoPlayer"
      :playerWidth="playerWidth"
      :playerHeight="playerHeight"
      class="es-video-player-page-css"
      @onPlayerInitialized="onPlayerInitialized"
      @onPlayerPlaying="onPlayerPlaying"
    />
  </div>
</template>

<script lang="ts">
import { ref } from 'vue'
import { defineComponent } from '@vue/runtime-core'
import { ESVideoPlayer } from '@extscreen/es3-video-player'
import type {
  ESIPlayer,
  ESMediaSource,
  ESMediaSourceList,
} from '@extscreen/es3-player'

const TAG = 'ESVideoPlayer'

export default defineComponent({
  name: '页面播放控制',
  components: {
    'es-video-player': ESVideoPlayer,
  },
  emits: [],
  setup() {
    const videoPlayer = ref<ESIPlayer>()
    const playerWidth = 1920
    const playerHeight = 1080

    const duration = ref(0)
    const progress = ref(0)
    let durationTimer = null
    let progressTimer = null

    let isPageStopped = false

    function onESCreate() {
      //1、初始化播放器
      videoPlayer.value?.initialize()
    }

    //播放器初始化完毕
    const onPlayerInitialized = (playerType) => {
      const mediaSource: ESMediaSource = {
        uri: 'http://extcdn.hsrc.tv/channelzero/2024/02/05/d477660a-3eb6-4c7f-b82b-0b61c035505c.mp4',
      }
      const mediaSourceList: ESMediaSourceList = {
        index: 0,
        list: [mediaSource],
      }
      //2、调用播放
      videoPlayer.value?.playMediaSourceList(mediaSourceList)
      //3、开始播放
      videoPlayer.value?.start(0)
    }

    function onESResume() {
      //如果页面停止后并恢复
      if (isPageStopped) {
        //4、恢复播放
        videoPlayer.value?.resume()
      }
      isPageStopped = false
    }

    function onESPause() {
      //
    }

    function onESStop() {
      //停止定时器获取播放视频总长度和当前长度
      stopDurationTimer()
      stopProgressTimer()

      //5、停止播放
      videoPlayer.value?.stop()
      isPageStopped = true
    }

    function onESDestroy() {
      //6、重置播放资源
      videoPlayer.value?.reset()
      //6、回收播放资源
      videoPlayer.value?.release()
    }

    const onPlayerPlaying = () => {
      //开始播放后，启动定时器获取播放视频总长度和当前长度
      startDurationTimer()
      startProgressTimer()
    }

    //启动定时器获取视频当前播放长度
    function startProgressTimer() {
      stopProgressTimer()
      progressTimer = setInterval(() => {
        videoPlayer.value?.getCurrentPosition()
      }, 500)
    }

    function stopProgressTimer() {
      if (progressTimer) {
        clearInterval(progressTimer)
      }
    }

    //启动定时器获取视频总长度
    function startDurationTimer() {
      stopDurationTimer()
      durationTimer = setInterval(() => {
        videoPlayer.value?.getDuration()
      }, 500)
    }

    function stopDurationTimer() {
      if (durationTimer) {
        clearInterval(durationTimer)
      }
    }

    return {
      duration,
      progress,
      playerWidth,
      playerHeight,
      videoPlayer,
      onPlayerInitialized,
      onPlayerPlaying,
      onESCreate,
      onESResume,
      onESPause,
      onESStop,
      onESDestroy,
    }
  },
})
</script>

<style>
.es-video-player-page-css {
  position: absolute;
}
</style>
