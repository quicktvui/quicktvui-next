<template>
  <div class="es-sdk-root-css">
    <es-audio-service-player
      ref="player"
      :playerWidth="playerWidth"
      :playerHeight="playerHeight"
      class="es-audio-player-page-css"
      @onPlayerInitialized="onPlayerInitialized"
    />
    <s-title-view class="es-sdk-content-title-css" :text="$options.name" />
    <div class="es-sdk-content-divider-css" />
    <div class="es-sdk-content-row-css">
      <s-text-button text="播放" @onButtonClicked="onPlayButtonClicked" />
      <s-text-button text="开始" @onButtonClicked="onStartButtonClicked" />
      <s-text-button text="暂停" @onButtonClicked="onPauseButtonClicked" />
      <s-text-button text="停止" @onButtonClicked="onStopButtonClicked" />
    </div>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue'
import { defineComponent } from '@vue/runtime-core'
import { useESLog } from '@extscreen/es3-core'
import { useESRouter } from '@extscreen/es3-router'
import { ESAudioServicePlayer } from '@extscreen/es3-audio-service-player'
import type {
  ESIPlayer,
  ESMediaSource,
  ESMediaSourceList,
  ESPlayerPosition,
} from '@extscreen/es3-player'

const TAG = 'ESAudioPlayerPage'

export default defineComponent({
  name: '使用初探',
  components: {
    'es-audio-service-player': ESAudioServicePlayer,
  },
  setup() {
    const log = useESLog()
    const router = useESRouter()
    const player = ref<ESIPlayer>()
    const playerWidth = 1920
    const playerHeight = 1080

    const onPlayerInitialized = (playerType) => {
      log.e(TAG, '-------onESCreate------onPlayerInitialized---->>>>>')
      const mediaSource: ESMediaSource = {
        uri: 'http://qcloudcdn.a311.ottcn.com/data_center/audios/ifengfm/1898049/9644712/2ff957624598b7b105d5c86b809c854c.mp3',
      }
      const position: ESPlayerPosition = {
        support: true,
        position: 20000,
      }
      const mediaSourceList: ESMediaSourceList = {
        index: 0,
        list: [mediaSource],
        position,
      }
      log.e(TAG, '-------onPlayerInitialized---------->>>>>', playerType)
      player.value?.playMediaSourceList(mediaSourceList)
    }

    const onPlayButtonClicked = () => {
      player.value?.initialize()
    }
    const onStartButtonClicked = () => {
      player.value?.start(50000)
    }
    const onPauseButtonClicked = () => {
      player.value?.pause()
    }
    const onStopButtonClicked = () => {
      player.value?.stop()
    }

    function onBackPressed() {
      router.back()
    }

    return {
      onPlayerInitialized,
      playerWidth,
      playerHeight,
      player,
      onBackPressed,
      onPlayButtonClicked,
      onStartButtonClicked,
      onPauseButtonClicked,
      onStopButtonClicked,
    }
  },
})
</script>

<style>
.es-audio-player-page-css {
  position: absolute;
}
</style>
