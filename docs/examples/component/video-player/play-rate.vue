<template>
  <div class="es-sdk-root-css">
    <es-video-player
      ref="videoPlayer"
      :playerWidth="playerWidth"
      :playerHeight="playerHeight"
      class="es-video-player-page-css"
      @onPlayerPlayRateListChanged="onPlayerPlayRateListChanged"
      @onPlayerPlayRateChanged="onPlayerPlayRateChanged"
      @onPlayerPlayMediaSource="onPlayerPlayMediaSource"
      @onPlayerInitialized="onPlayerInitialized"
    />
    <s-title-view class="es-sdk-content-title-css" :text="$options.name" />
    <div class="es-sdk-content-divider-css" />
    <div class="es-sdk-content-row-css">
      <span class="es-video-player-text-css" text="播放倍速列表：" />
      <span class="es-video-player-text-css" :text="playRateList + ''" />
      <span class="es-video-player-text-css" text="播放倍速：" />
      <span class="es-video-player-text-css" :text="playRate + ''" />
      <span class="es-video-player-text-css" text="          " />
      <span class="es-video-player-text-css" text="播放索引：" />
      <span class="es-video-player-text-css" :text="playingMediaIndex + ''" />
    </div>
    <div class="es-sdk-content-row-css">
      <s-text-button text="播放上一源" @onButtonClicked="playPreviousMedia" />
      <s-text-button text="播放下一源" @onButtonClicked="playNextMedia" />
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
import { ref } from 'vue'
import { defineComponent } from '@vue/runtime-core'
import { ESLogLevel, useESLog } from '@extscreen/es3-core'
import { ESPlayerRate } from '@extscreen/es3-player'
import { ESVideoPlayer } from '@extscreen/es3-video-player'
import { useESRouter } from '@extscreen/es3-router'
import type {
  ESIPlayer,
  ESMediaSource,
  ESMediaSourceList,
} from '@extscreen/es3-player'

const TAG = 'ESVideoPlayerPage'

export default defineComponent({
  name: '播放倍速',
  components: {
    'es-video-player': ESVideoPlayer,
  },
  setup() {
    const log = useESLog()
    const router = useESRouter()
    const videoPlayer = ref<ESIPlayer>()
    const playerWidth = 1920
    const playerHeight = 1080

    const playRateList = ref([])
    const playRate = ref('')
    const playingMediaIndex = ref(-1)

    function onPlayerPlayMediaSource(mediaSource: ESMediaSource) {
      log.e(TAG, '-------onPlayerPlayMediaSource--------->>>>>', mediaSource)
      playingMediaIndex.value =
        videoPlayer.value?.getPlayingMediaSourceIndex() ?? -1
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
      videoPlayer.value?.playPreviousMediaSource()
    }

    function playNextMedia() {
      videoPlayer.value?.playNextMediaSource()
    }

    function setPlayRateZeroFive() {
      videoPlayer.value?.setPlayRate(ESPlayerRate.ES_PLAYER_RATE_0_5)
    }

    function setPlayRateZeroSevenFive() {
      videoPlayer.value?.setPlayRate(ESPlayerRate.ES_PLAYER_RATE_0_7_5)
    }

    function setPlayRateOne() {
      videoPlayer.value?.setPlayRate(ESPlayerRate.ES_PLAYER_RATE_1)
    }

    function setPlayRateOneFive() {
      videoPlayer.value?.setPlayRate(ESPlayerRate.ES_PLAYER_RATE_1_5)
    }

    function setPlayRateTwo() {
      videoPlayer.value?.setPlayRate(ESPlayerRate.ES_PLAYER_RATE_2)
    }

    const onESCreate = () => {
      log.e(TAG, '-------onESCreate------start---->>>>>')
      videoPlayer.value?.initialize()
    }
    const onPlayerInitialized = (playerType) => {
      log.e(TAG, '-------onESCreate------onPlayerInitialized---->>>>>')
      const mediaSourceList: ESMediaSourceList = {
        index: 0,
        list: [
          {
            uri: 'http://qcloudcdn.a311.ottcn.com/data_center/videos/SHORT/DEFAULT/2022/10/27/d4e29cbf-5b15-4523-b9c8-80f18fa76275.mp4',
          },
          {
            uri: 'http://qcloudcdn.a311.ottcn.com/data_center/videos/SHORT/DEFAULT/2023/09/17/f4ccf8e2-0e58-4d36-ae2b-0555190ac340.mp4',
          },
          {
            uri: 'http://qcloudcdn.a311.ottcn.com/data_center/videos/SHORT/DEFAULT/2023/09/17/22edb94d-8ffc-4736-a633-3f9e38c096e8.mp4',
          },
          {
            uri: 'http://qcloudcdn.a311.ottcn.com/data_center/videos/SHORT/DEFAULT/2022/10/26/b5b60695-236d-45df-b071-be7b690e3b60_transcode_1137855.mp4',
          },
        ],
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
      playRateList,
      playRate,
      playingMediaIndex,
      onESCreate,
      onPlayerInitialized,
      playerWidth,
      playerHeight,
      videoPlayer,
      onBackPressed,
      playPreviousMedia,
      playNextMedia,
      setPlayRateZeroFive,
      setPlayRateZeroSevenFive,
      setPlayRateOne,
      setPlayRateOneFive,
      setPlayRateTwo,
      onPlayerPlayRateListChanged,
      onPlayerPlayRateChanged,
      onPlayerPlayMediaSource,
    }
  },
})
</script>

<style>
.es-video-player-page-css {
  position: absolute;
}

.es-video-player-text-css {
  color: white;
  font-size: 30px;
  margin-left: 20px;
  margin-right: 20px;
  text-align: center;
  padding-top: 5px;
  padding-bottom: 5px;
}
</style>
