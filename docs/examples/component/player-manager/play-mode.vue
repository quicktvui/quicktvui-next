<template>
  <div class="es-sdk-root-css">
    <es-player-manager
      ref="playerManager"
      :initPlayerWindowType="2"
      :playerList="playerListRef"
      class="es-video-player-manager-page-css"
      @onPlayerPlayMedia="onPlayerPlayMedia"
      @onPlayerPlayMediaListModeListChanged="
        onPlayerPlayMediaListModeListChanged
      "
      @onPlayerPlayMediaListModeChanged="onPlayerPlayMediaListModeChanged"
    />
    <s-title-view class="es-sdk-content-title-css" :text="$options.name" />
    <div class="es-sdk-content-divider-css" />
    <div class="es-sdk-content-row-css">
      <span class="es-player-manager-text-css" text="播放模式列表：" />
      <span
        class="es-player-manager-text-css"
        :text="playMediaListModeList + ''"
      />
      <span class="es-player-manager-text-css" text="播放模式：" />
      <span class="es-player-manager-text-css" :text="playMediaListMode + ''" />
      <span class="es-player-manager-text-css" text="          " />
      <span class="es-player-manager-text-css" text="播放索引：" />
      <span class="es-player-manager-text-css" :text="playingMediaIndex + ''" />
    </div>
    <div class="es-sdk-content-row-css">
      <s-text-button text="播放上一集" @onButtonClicked="playPreviousMedia" />
      <s-text-button text="播放下一集" @onButtonClicked="playNextMedia" />
    </div>
    <div class="es-sdk-content-row-css">
      <s-text-button text="单次播放" @onButtonClicked="setPlayModeOnce" />
      <s-text-button text="顺序播放" @onButtonClicked="setPlayModeOrder" />
      <s-text-button text="随机播放" @onButtonClicked="setPlayModeShuffle" />
      <s-text-button text="单曲循环" @onButtonClicked="setPlayModeRepeat" />
      <s-text-button text="循环播放" @onButtonClicked="setPlayModeLoop" />
    </div>
  </div>
</template>

<script lang="ts">
import { markRaw, ref } from 'vue'
import { defineComponent } from '@vue/runtime-core'

import { ESPlayerManager } from '@extscreen/es3-player-manager'
import { ESLogLevel, useESLog } from '@extscreen/es3-core'
import { ESVideoPlayer } from '@extscreen/es3-video-player'
import { ESPlayerPlayMode } from '@extscreen/es3-player'
import type {
  ESIPlayerManager,
  ESMediaItem,
  ESMediaItemList,
} from '@extscreen/es3-player-manager'

const TAG = 'ESVideoPlayerManagerPage'

export default defineComponent({
  name: '播放模式',
  components: {
    'es-player-manager': ESPlayerManager,
  },
  setup() {
    const log = useESLog()
    const playerManager = ref<ESIPlayerManager>()

    const playMediaListModeList = ref([])
    const playMediaListMode = ref(0)
    const playingMediaIndex = ref(-1)

    const playerList = [markRaw(ESVideoPlayer)]
    const playerListRef = ref(playerList)

    let isPaused = false

    function onPlayerPlayMedia(mediaItem: ESMediaItem) {
      if (log.isLoggable(ESLogLevel.DEBUG)) {
        log.e(TAG, '-------onPlayerPlayMedia---------->>>>>', mediaItem)
      }
      playingMediaIndex.value =
        playerManager.value?.getPlayingMediaIndex() ?? -1
    }

    function onPlayerPlayMediaListModeListChanged(
      playModeList: Array<ESPlayerPlayMode>
    ): void {
      if (log.isLoggable(ESLogLevel.DEBUG)) {
        log.e(
          TAG,
          '-------onPlayerPlayMediaListModeListChanged---------->>>>>',
          playModeList
        )
      }
      playMediaListModeList.value = playModeList
    }

    function onPlayerPlayMediaListModeChanged(
      playMode: ESPlayerPlayMode
    ): void {
      if (log.isLoggable(ESLogLevel.DEBUG)) {
        log.e(
          TAG,
          '-------onPlayerPlayMediaListModeChanged---------->>>>>',
          playMode
        )
      }
      playMediaListMode.value = playMode
    }

    function playPreviousMedia() {
      playerManager.value?.playPreviousMedia()
    }

    function playNextMedia() {
      playerManager.value?.playNextMedia()
    }

    function setPlayModeOnce() {
      playerManager.value?.setPlayMediaListMode(
        ESPlayerPlayMode.ES_PLAYER_PLAY_MODE_ONCE
      )
    }

    function setPlayModeOrder() {
      playerManager.value?.setPlayMediaListMode(
        ESPlayerPlayMode.ES_PLAYER_PLAY_MODE_ORDER
      )
    }

    function setPlayModeShuffle() {
      playerManager.value?.setPlayMediaListMode(
        ESPlayerPlayMode.ES_PLAYER_PLAY_MODE_SHUFFLE
      )
    }

    function setPlayModeRepeat() {
      playerManager.value?.setPlayMediaListMode(
        ESPlayerPlayMode.ES_PLAYER_PLAY_MODE_REPEAT
      )
    }

    function setPlayModeLoop() {
      playerManager.value?.setPlayMediaListMode(
        ESPlayerPlayMode.ES_PLAYER_PLAY_MODE_LOOP
      )
    }

    const onESCreate = () => {
      if (log.isLoggable(ESLogLevel.DEBUG)) {
        log.e(TAG, '-------onESCreate---------->>>>>')
      }
      isPaused = false

      const mediaItemZero: ESMediaItem = {
        mediaSourceList: {
          index: 0,
          list: [
            {
              uri: 'http://qcloudcdn.a311.ottcn.com/data_center/videos/SHORT/DEFAULT/2022/10/27/d4e29cbf-5b15-4523-b9c8-80f18fa76275.mp4',
            },
          ],
        },
      }
      const mediaItemOne: ESMediaItem = {
        mediaSourceList: {
          index: 0,
          list: [
            {
              uri: 'http://qcloudcdn.a311.ottcn.com/data_center/videos/SHORT/DEFAULT/2023/08/25/7d3623ae-c002-4929-b5a2-fe10bca06bfc.mp4',
            },
          ],
        },
      }

      const mediaItemTwo: ESMediaItem = {
        mediaSourceList: {
          index: 0,
          list: [
            {
              uri: 'http://qcloudcdn.a311.ottcn.com/data_center/videos/SHORT/DEFAULT/2023/09/17/f4ccf8e2-0e58-4d36-ae2b-0555190ac340.mp4',
            },
          ],
        },
      }

      const mediaItemThree: ESMediaItem = {
        mediaSourceList: {
          index: 0,
          list: [
            {
              uri: 'http://qcloudcdn.a311.ottcn.com/data_center/videos/SHORT/DEFAULT/2023/09/17/22edb94d-8ffc-4736-a633-3f9e38c096e8.mp4',
            },
          ],
        },
      }

      const playList: ESMediaItemList = {
        index: 0,
        list: [mediaItemZero, mediaItemOne, mediaItemTwo, mediaItemThree],
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
      playingMediaIndex,
      playMediaListModeList,
      playMediaListMode,
      playPreviousMedia,
      playNextMedia,
      setPlayModeOnce,
      setPlayModeOrder,
      setPlayModeShuffle,
      setPlayModeRepeat,
      setPlayModeLoop,
      onESCreate,
      onESResume,
      onESPause,
      onESDestroy,
      playerListRef,
      playerManager,
      onPlayerPlayMedia,
      onPlayerPlayMediaListModeListChanged,
      onPlayerPlayMediaListModeChanged,
    }
  },
})
</script>

<style>
.es-video-player-manager-page-css {
  position: absolute;
}

.es-player-manager-text-css {
  color: white;
  font-size: 30px;
  margin-left: 20px;
  margin-right: 20px;
  text-align: center;
  padding-top: 5px;
  padding-bottom: 5px;
}
</style>
