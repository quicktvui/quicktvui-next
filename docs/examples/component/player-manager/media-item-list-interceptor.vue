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

import { useESPlayerInterceptorManager } from '@extscreen/es3-player'
import { ESPlayerManager } from '@extscreen/es3-player-manager'

import { ESLogLevel, useESLog } from '@extscreen/es3-core'
import { ESVideoPlayer } from '@extscreen/es3-video-player'
import { createESPlayerMediaItemListInterceptor } from './interceptor/ESPlayerMediaItemListInterceptor'
import { createESPlayerMediaItemListGlobalInterceptor } from './interceptor/ESPlayerMediaItemListGlobalInterceptor'
import type {
  ESIPlayerManager,
  ESMediaItemList,
} from '@extscreen/es3-player-manager'

const TAG = 'ESVideoPlayerManagerPage'

/**
 * 优先执行，全局拦截器
 * 其次再执行局部拦截器
 */
export default defineComponent({
  name: 'MediaItemList拦截器',
  components: {
    'es-player-manager': ESPlayerManager,
  },
  setup() {
    const log = useESLog()
    const playerManager = ref<ESIPlayerManager>()

    const playerList = [markRaw(ESVideoPlayer)]
    const playerListRef = ref(playerList)

    let isPaused = false

    //优先执行，全局拦截器
    const globalInterceptorManager = useESPlayerInterceptorManager()
    const globalInterceptor = createESPlayerMediaItemListGlobalInterceptor()
    globalInterceptorManager.addInterceptor(globalInterceptor)

    const onESCreate = () => {
      if (log.isLoggable(ESLogLevel.DEBUG)) {
        log.e(TAG, '-------onESCreate---------->>>>>')
      }
      isPaused = false

      //其次再执行局部拦截器
      const interceptor = createESPlayerMediaItemListInterceptor()
      const playList: ESMediaItemList = {
        index: 0,
        list: [],
        interceptors: [interceptor],
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
