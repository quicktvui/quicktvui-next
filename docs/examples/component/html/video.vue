<template>
  <div class="es-sdk-root-css" :clipChildren="false">
    <s-title-view class="es-sdk-content-title-css" :text="$options.name" />
    <qt-view class="es-sdk-content-divider-css" />

    <Video
      controls
      :width="640"
      :height="360"
      autoplay
      loop
      src="https://md-mpvolc.meipian.me/users/46717567/762076f2e04d2ade4b1c6afbb0e3719d.mp4"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core'

export default defineComponent({
  emits: [],
})
</script>
