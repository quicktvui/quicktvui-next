<template>
  <div class="es-sdk-root-css">
    <es-video-player
      ref="videoPlayer"
      :playerWidth="playerWidth"
      :playerHeight="playerHeight"
      class="es-video-player-page-css"
      @onPlayerDefinitionListChanged="onPlayerDefinitionListChanged"
      @onPlayerDefinitionChanged="onPlayerDefinitionChanged"
      @onPlayerPlayMediaSource="onPlayerPlayMediaSource"
      @onPlayerInitialized="onPlayerInitialized"
    />
    <s-title-view class="es-sdk-content-title-css" :text="$options.name" />
    <div class="es-sdk-content-divider-css" />
    <div class="es-sdk-content-row-css">
      <span class="es-player-manager-text-css" text="清晰度列表：" />
      <span class="es-player-manager-text-css" :text="definitionList + ''" />
      <span class="es-player-manager-text-css" text="清晰度：" />
      <span class="es-player-manager-text-css" :text="definition + ''" />
      <span class="es-player-manager-text-css" text="          " />
      <span class="es-player-manager-text-css" text="播放索引：" />
      <span class="es-player-manager-text-css" :text="playingMediaIndex + ''" />
    </div>
    <div class="es-sdk-content-row-css">
      <s-text-button text="播放上一源" @onButtonClicked="playPreviousMedia" />
      <s-text-button text="播放下一源" @onButtonClicked="playNextMedia" />
    </div>
    <div class="es-sdk-content-row-css">
      <s-text-button text="SD" @onButtonClicked="setDefinitionSD" />
      <s-text-button text="HD" @onButtonClicked="setDefinitionHD" />
      <s-text-button text="FULL_HD" @onButtonClicked="setDefinitionFHD" />
      <s-text-button text="FOURK" @onButtonClicked="setDefinitionFOURK" />
    </div>
  </div>
</template>
<script lang="ts">
import { ref } from 'vue'
import { defineComponent } from '@vue/runtime-core'
import { useESLog } from '@extscreen/es3-core'
import { ESPlayerDefinition } from '@extscreen/es3-player'
import { useESRouter } from '@extscreen/es3-router'
import { ESVideoPlayer } from '@extscreen/es3-video-player'
import type {
  ESIPlayer,
  ESMediaSource,
  ESMediaSourceList,
} from '@extscreen/es3-player'

const TAG = 'ESVideoPlayerPage'

export default defineComponent({
  name: '清晰度',
  components: {
    'es-video-player': ESVideoPlayer,
  },
  setup() {
    const log = useESLog()
    const router = useESRouter()
    const videoPlayer = ref<ESIPlayer>()
    const playerWidth = 1920
    const playerHeight = 1080

    const definitionList = ref([])
    const definition = ref(-1)
    const playingMediaIndex = ref(-1)

    function onPlayerPlayMediaSource(mediaSource: ESMediaSource) {
      log.e(TAG, '-------onPlayerPlayMediaSource--------->>>>>', mediaSource)
      playingMediaIndex.value =
        videoPlayer.value?.getPlayingMediaSourceIndex() ?? -1
    }

    function onPlayerDefinitionListChanged(
      list: Array<ESPlayerDefinition>
    ): void {
      log.e(TAG, '-------onPlayerDefinitionListChanged---------->>>>>', list)
      definitionList.value = list
    }

    function onPlayerDefinitionChanged(d: ESPlayerDefinition): void {
      log.e(TAG, '-------onPlayerDefinitionChanged---------->>>>>', d)
      definition.value = d
    }

    function playPreviousMedia() {
      videoPlayer.value?.playPreviousMediaSource()
    }

    function playNextMedia() {
      videoPlayer.value?.playNextMediaSource()
    }

    //
    function setDefinitionSD() {
      videoPlayer.value?.setDefinition(
        ESPlayerDefinition.ES_PLAYER_DEFINITION_SD
      )
    }

    function setDefinitionHD() {
      videoPlayer.value?.setDefinition(
        ESPlayerDefinition.ES_PLAYER_DEFINITION_HD
      )
    }

    function setDefinitionFHD() {
      videoPlayer.value?.setDefinition(
        ESPlayerDefinition.ES_PLAYER_DEFINITION_FULL_HD
      )
    }

    function setDefinitionFOURK() {
      videoPlayer.value?.setDefinition(
        ESPlayerDefinition.ES_PLAYER_DEFINITION_FOURK
      )
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
            definition: ESPlayerDefinition.ES_PLAYER_DEFINITION_SD,
            uri: 'http://qcloudcdn.a311.ottcn.com/data_center/videos/SHORT/DEFAULT/2022/10/27/d4e29cbf-5b15-4523-b9c8-80f18fa76275.mp4',
          },
          {
            definition: ESPlayerDefinition.ES_PLAYER_DEFINITION_HD,
            uri: 'http://qcloudcdn.a311.ottcn.com/data_center/videos/SHORT/DEFAULT/2022/01/27/85a658d6-d0ce-4721-adea-f8e2e0b263a7.mp4',
          },
          {
            definition: ESPlayerDefinition.ES_PLAYER_DEFINITION_FULL_HD,
            uri: 'http://qcloudcdn.a311.ottcn.com/data_center/videos/SHORT/DEFAULT/2023/09/17/22edb94d-8ffc-4736-a633-3f9e38c096e8.mp4',
          },
          {
            definition: ESPlayerDefinition.ES_PLAYER_DEFINITION_FOURK,
            uri: 'http://qcloudcdn.a311.ottcn.com/data_center/videos/LIB/VARIETY/2022/03/10/2877b7e1-fda6-4591-aff3-3fd3ba4151cf_transcode_1137855.mp4',
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
      definitionList,
      definition,
      playingMediaIndex,
      onESCreate,
      onPlayerInitialized,
      playerWidth,
      playerHeight,
      videoPlayer,
      onBackPressed,
      playPreviousMedia,
      playNextMedia,
      setDefinitionSD,
      setDefinitionHD,
      setDefinitionFHD,
      setDefinitionFOURK,
      onPlayerPlayMediaSource,
      onPlayerDefinitionListChanged,
      onPlayerDefinitionChanged,
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
