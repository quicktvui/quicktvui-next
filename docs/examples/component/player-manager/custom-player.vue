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

import { ESPlayerManager } from '@extscreen/es3-player-manager'
import { ESLogLevel, useESLog } from '@extscreen/es3-core'
import ESImagePlayer from './player/ESImagePlayer.vue'
import type {
  ESIPlayerManager,
  ESMediaItem,
  ESMediaItemList,
} from '@extscreen/es3-player-manager'
import type { ESMediaSource, ESMediaSourceList } from '@extscreen/es3-player'

const TAG = 'ESVideoPlayerManagerPage'

export default defineComponent({
  name: '自定义播放器',
  components: {
    'es-player-manager': ESPlayerManager,
  },
  setup() {
    const log = useESLog()
    const playerManager = ref<ESIPlayerManager>()

    const playerList = [markRaw(ESImagePlayer)]
    const playerListRef = ref(playerList)

    let isPaused = false

    const onESCreate = () => {
      if (log.isLoggable(ESLogLevel.DEBUG)) {
        log.e(TAG, '-------onESCreate---------->>>>>')
      }
      isPaused = false
      const mediaSource: ESMediaSource = {
        uri: 'http://qcloudimg.a311.ottcn.com/project/zero/img_test/2021/10/20/d40049cf-7b05-4ccc-9a25-74884e883231.jpg',
      }
      const mediaSourceList: ESMediaSourceList = {
        index: 0,
        list: [mediaSource],
      }
      const mediaItem: ESMediaItem = {
        mediaSourceList,
        playerType: 3, //TODO 自定义的图片播放器的类型
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
    }
  },
})
</script>

<style>
.es-video-player-manager-page-css {
  position: absolute;
}
</style>
