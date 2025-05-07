<template>
  <div class="es-sdk-root-css">
    <es-player-manager
      ref="playerManager"
      :initPlayerWindowType="2"
      :playerList="playerListRef"
      class="es-video-player-manager-page-css"
    />
  </div>
</template>

<script lang="ts">
import { markRaw, ref } from 'vue'
import { defineComponent } from '@vue/runtime-core'

import { ESPlayerManager } from '@extscreen/es3-player-manager'
import { ESVideoPlayer } from '@extscreen/es3-video-player'
import type { ESMediaSource, ESMediaSourceList } from '@extscreen/es3-player'
import type {
  ESIPlayerManager,
  ESMediaItem,
  ESMediaItemList,
} from '@extscreen/es3-player-manager'

export default defineComponent({
  name: '基础用法',
  components: {
    'es-player-manager': ESPlayerManager,
  },
  setup() {
    const playerManager = ref<ESIPlayerManager>()

    const playerList = [markRaw(ESVideoPlayer)]
    const playerListRef = ref(playerList)

    let isPaused = false

    const onESCreate = () => {
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
      if (isPaused) {
        playerManager.value?.resume()
      }
      isPaused = false
    }
    const onESPause = () => {
      isPaused = true
      playerManager.value?.stop()
    }
    const onESDestroy = () => {
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
