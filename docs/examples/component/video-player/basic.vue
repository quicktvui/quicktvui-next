<template>
  <div class="es-sdk-root-css">
    <es-video-player
      ref="videoPlayer"
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
import { ESVideoPlayer } from '@extscreen/es3-video-player'
import { useESRouter } from '@extscreen/es3-router'
import type {
  ESIPlayer,
  ESMediaSource,
  ESMediaSourceList,
} from '@extscreen/es3-player'

const TAG = 'ESVideoPlayerPage'

export default defineComponent({
  name: '使用初探',
  components: {
    'es-video-player': ESVideoPlayer,
  },
  setup() {
    const log = useESLog()
    const router = useESRouter()
    const videoPlayer = ref<ESIPlayer>()
    const playerWidth = 1920
    const playerHeight = 1080

    const onESCreate = () => {
      log.e(TAG, '-------onESCreate------start---->>>>>')
      videoPlayer.value?.initialize()
    }
    const onPlayerInitialized = (playerType) => {
      log.e(TAG, '-------onESCreate------onPlayerInitialized---->>>>>')
      const mediaSource: ESMediaSource = {
        uri: 'http://qcloudcdn.a311.ottcn.com/data_center/videos/SHORT/DEFAULT/2023/08/25/7d3623ae-c002-4929-b5a2-fe10bca06bfc.mp4',
      }
      const mediaSourceList: ESMediaSourceList = {
        index: 0,
        list: [mediaSource],
      }
      log.e(TAG, '-------onPlayerInitialized---------->>>>>', playerType)
      videoPlayer.value?.playMediaSourceList(mediaSourceList)
      videoPlayer.value?.start(0)
    }

    function onBackPressed() {
      videoPlayer.value?.stop()
      videoPlayer.value?.release()
      router.back()
    }

    return {
      onESCreate,
      onPlayerInitialized,
      playerWidth,
      playerHeight,
      videoPlayer,
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
