<template>
  <div class="es-sdk-root-css">
    <s-title-view class="es-sdk-content-title-css" :text="$options.name" />
    <div class="es-sdk-content-divider-css" />
    <div class="es-sdk-content-row-css">
      <s-text-view text="按键查看效果" />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from '@vue/runtime-core'
import { useESToast } from '@extscreen/es3-core'
import type { ESKeyEvent } from '@extscreen/es3-core'

export default defineComponent({
  name: '按键',
  setup() {
    const toast = useESToast()

    function onKeyDown(keyEvent: ESKeyEvent) {
      toast.showToast(`onKeyDown${JSON.stringify(keyEvent)}`)
    }

    function onKeyUp(keyEvent: ESKeyEvent) {
      toast.showToast(`onKeyUp${JSON.stringify(keyEvent)}`)
    }

    return {
      onKeyDown,
      onKeyUp,
    }
  },
})
</script>
