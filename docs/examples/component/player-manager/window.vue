<template>
  <div class="es-sdk-root-css">
    <es-player-manager
      ref="playerManager"
      :smallWindowWidth="570"
      :smallWindowHeight="324"
      :fullWindowWidth="1920"
      :fullWindowHeight="1080"
      :floatWindowWidth="192"
      :floatWindowHeight="108"
      :initPlayerWindowType="1"
      :playerList="playerListRef"
      class="es-video-player-manager-page-css"
    />
    <s-title-view class="es-sdk-content-title-css" :text="$options.name" />
    <div class="es-sdk-content-divider-css" />
    <div class="es-sdk-content-row-css">
      <s-text-button
        text="切换全屏窗口"
        @onButtonClicked="changeToFullWindow"
      />
      <s-text-button
        text="切换小屏窗口"
        @onButtonClicked="changeToSmallWindow"
      />
      <s-text-button
        text="切换浮动窗口"
        @onButtonClicked="changeToFloatWindow"
      />
      <s-text-button text="切换尺寸" @onButtonClicked="changeWindowSize" />
    </div>
  </div>
</template>

<script lang="ts">
import { markRaw, ref } from 'vue'
import { defineComponent } from '@vue/runtime-core'

import { ESPlayerManager } from '@extscreen/es3-player-manager'
import { ESLogLevel, useESLog } from '@extscreen/es3-core'
import { ESVideoPlayer } from '@extscreen/es3-video-player'
import type {
  ESIPlayerManager,
  ESMediaItem,
  ESMediaItemList,
} from '@extscreen/es3-player-manager'
import type { ESMediaSource, ESMediaSourceList } from '@extscreen/es3-player'

const TAG = 'ESVideoPlayerManagerPage'

export default defineComponent({
  name: '播放窗口切换',
  components: {
    'es-player-manager': ESPlayerManager,
  },
  setup() {
    const log = useESLog()
    const playerManager = ref<ESIPlayerManager>()

    const playerList = [markRaw(ESVideoPlayer)]
    const playerListRef = ref(playerList)

    let isPaused = false

    function changeToFullWindow() {
      playerManager.value?.setFullWindow()
    }

    function changeToSmallWindow() {
      playerManager.value?.setSmallWindow()
    }

    function changeToFloatWindow() {
      playerManager.value?.setFloatWindow()
    }

    function changeWindowSize() {
      playerManager.value?.setSize(192, 108)
    }

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

    return {
      onESCreate,
      onESResume,
      onESPause,
      onESDestroy,
      playerListRef,
      playerManager,
      changeToFullWindow,
      changeToSmallWindow,
      changeToFloatWindow,
      changeWindowSize,
    }
  },
})
</script>

<style>
.es-video-player-manager-page-css {
  position: absolute;
}
</style>
