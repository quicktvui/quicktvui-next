<template>
  <div class="es-key-event-view-css" @keydown="onKeyDown" @keyup="onKeyUp" />
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core'
import type { ESKeyEvent } from '@extscreen/es3-core'

const TAG = 'ESKeyEventView'

export default defineComponent({
  name: 'EsKeyEventView',
  emits: [],
  setup() {
    function onKeyDown(keyEvent: ESKeyEvent) {
      //
    }

    function onKeyUp(keyEvent: ESKeyEvent) {
      //
    }

    return {
      onKeyDown,
      onKeyUp,
    }
  },
})
</script>

<style scoped>
.es-key-event-view-css {
  width: 1920px;
  height: 1080px;
}
</style>
