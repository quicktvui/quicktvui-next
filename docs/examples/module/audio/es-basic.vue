<template>
  <div class="es-sdk-root-css">
    <s-title-view class="es-sdk-content-title-css" :text="$options.name" />
    <div class="es-sdk-content-divider-css" />
    <div class="es-sdk-content-row-css">
      <s-text-button
        text="获取当前Music音量"
        @onButtonClicked="onButtonClicked"
      />
      <s-text-button
        text="设置Music音量40"
        @onButtonClicked="onAButtonClicked"
      />
      <s-text-button
        text="设置Music音量30"
        @onButtonClicked="onBButtonClicked"
      />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from '@vue/runtime-core'
import {
  ESAudioManagerFlag,
  ESAudioStreamType,
  useESAudio,
  useESToast,
} from '@extscreen/es3-core'

export default defineComponent({
  name: '音量模块',
  setup() {
    const audio = useESAudio()
    const toast = useESToast()

    function onButtonClicked() {
      audio.getStreamMusicVolume().then(
        (volume) => {
          toast.showToast(`当前音量${volume}`)
        },
        (error) => {
          toast.showToast(`获取当前音量错误${error}`)
        }
      )
    }

    function onAButtonClicked() {
      audio.setStreamVolume(
        ESAudioStreamType.ES_AUDIO_STREAM_MUSIC,
        60,
        ESAudioManagerFlag.ES_AUDIO_MANAGER_FLAG_SHOW_UI
      )
    }

    function onBButtonClicked() {
      audio.setStreamVolume(
        ESAudioStreamType.ES_AUDIO_STREAM_MUSIC,
        20,
        ESAudioManagerFlag.ES_AUDIO_MANAGER_FLAG_SHOW_UI
      )
    }

    return {
      onButtonClicked,
      onAButtonClicked,
      onBButtonClicked,
    }
  },
})
</script>
<style></style>
