<template>
  <div class="es-sdk-root-css">
    <es-player-manager
      ref="playerManager"
      :initPlayerWindowType="2"
      :playerList="playerListRef"
      class="es-video-player-manager-page-css"
      @onPlayerPlayMedia="onPlayerPlayMedia"
      @onPlayerPlayRateListChanged="onPlayerPlayRateListChanged"
      @onPlayerPlayRateChanged="onPlayerPlayRateChanged"
    />
    <s-title-view class="es-sdk-content-title-css" :text="$options.name" />
    <div class="es-sdk-content-divider-css" />
    <div class="es-sdk-content-row-css">
      <span class="es-player-manager-text-css" text="播放倍速列表：" />
      <span class="es-player-manager-text-css" :text="playRateList + ''" />
      <span class="es-player-manager-text-css" text="播放倍速：" />
      <span class="es-player-manager-text-css" :text="playRate + ''" />
      <span class="es-player-manager-text-css" text="          " />
      <span class="es-player-manager-text-css" text="播放索引：" />
      <span class="es-player-manager-text-css" :text="playingMediaIndex + ''" />
    </div>
    <div class="es-sdk-content-row-css">
      <s-text-button text="播放上一集" @onButtonClicked="playPreviousMedia" />
      <s-text-button text="播放下一集" @onButtonClicked="playNextMedia" />
    </div>
    <div class="es-sdk-content-row-css">
      <s-text-button text="0.5X播放" @onButtonClicked="setPlayRateZeroFive" />
      <s-text-button
        text="0.75X播放"
        @onButtonClicked="setPlayRateZeroSevenFive"
      />
      <s-text-button text="1X播放" @onButtonClicked="setPlayRateOne" />
      <s-text-button text="1.5X播放" @onButtonClicked="setPlayRateOneFive" />
      <s-text-button text="2X播放" @onButtonClicked="setPlayRateTwo" />
    </div>
  </div>
</template>

<script lang="ts">
import { markRaw, ref } from 'vue'
import { defineComponent } from '@vue/runtime-core'

import { ESPlayerManager } from '@extscreen/es3-player-manager'
import { ESLogLevel, useESLog } from '@extscreen/es3-core'
import { ESVideoPlayer } from '@extscreen/es3-video-player'
import { ESPlayerRate } from '@extscreen/es3-player'
import type {
  ESIPlayerManager,
  ESMediaItem,
  ESMediaItemList,
} from '@extscreen/es3-player-manager'

const TAG = 'ESVideoPlayerManagerPage'

export default defineComponent({
  name: '播放倍速',
  components: {
    'es-player-manager': ESPlayerManager,
  },
  setup() {
    const log = useESLog()
    const playerManager = ref<ESIPlayerManager>()

    const playRateList = ref([])
    const playRate = ref('')

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

    function onPlayerPlayRateListChanged(
      playModeList: Array<ESPlayerRate>
    ): void {
      if (log.isLoggable(ESLogLevel.DEBUG)) {
        log.e(
          TAG,
          '-------onPlayerPlayRateListChanged---------->>>>>',
          playModeList
        )
      }
      playRateList.value = playModeList
    }

    function onPlayerPlayRateChanged(value: ESPlayerRate): void {
      if (log.isLoggable(ESLogLevel.DEBUG)) {
        log.e(TAG, '-------onPlayerPlayRateChanged---------->>>>>', value)
      }
      playRate.value = value
    }

    function playPreviousMedia() {
      playerManager.value?.playPreviousMedia()
    }

    function playNextMedia() {
      playerManager.value?.playNextMedia()
    }

    //
    function setPlayRateZeroFive() {
      playerManager.value?.setPlayRate(ESPlayerRate.ES_PLAYER_RATE_0_5)
    }

    function setPlayRateZeroSevenFive() {
      playerManager.value?.setPlayRate(ESPlayerRate.ES_PLAYER_RATE_0_7_5)
    }

    function setPlayRateOne() {
      playerManager.value?.setPlayRate(ESPlayerRate.ES_PLAYER_RATE_1)
    }

    function setPlayRateOneFive() {
      playerManager.value?.setPlayRate(ESPlayerRate.ES_PLAYER_RATE_1_5)
    }

    function setPlayRateTwo() {
      playerManager.value?.setPlayRate(ESPlayerRate.ES_PLAYER_RATE_2)
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
              uri: 'http://qcloudcdn.a311.ottcn.com/data_center/videos/SHORT/DEFAULT/2022/01/27/85a658d6-d0ce-4721-adea-f8e2e0b263a7.mp4',
            },
          ],
        },
      }

      const mediaItemTwo: ESMediaItem = {
        mediaSourceList: {
          index: 0,
          list: [
            {
              uri: 'http://qcloudcdn.a311.ottcn.com/data_center/videos/SHORT/DEFAULT/2023/09/17/22edb94d-8ffc-4736-a633-3f9e38c096e8.mp4',
            },
          ],
        },
      }

      const mediaItemThree: ESMediaItem = {
        mediaSourceList: {
          index: 0,
          list: [
            {
              uri: 'http://qcloudcdn.a311.ottcn.com/data_center/videos/LIB/VARIETY/2022/03/10/2877b7e1-fda6-4591-aff3-3fd3ba4151cf_transcode_1137855.mp4',
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
      playRateList,
      playRate,
      playPreviousMedia,
      playNextMedia,
      setPlayRateZeroFive,
      setPlayRateZeroSevenFive,
      setPlayRateOne,
      setPlayRateOneFive,
      setPlayRateTwo,
      onESCreate,
      onESResume,
      onESPause,
      onESDestroy,
      playerListRef,
      playerManager,
      onPlayerPlayMedia,
      onPlayerPlayRateListChanged,
      onPlayerPlayRateChanged,
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
