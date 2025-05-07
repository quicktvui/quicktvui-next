<template>
  <div class="es-sdk-root-css">
    <s-title-view class="es-sdk-content-title-css" :text="$options.name" />
    <div class="es-sdk-content-divider-css" />
    <div class="es-sdk-content-row-css">
      <s-text-view :text="textRef" />
    </div>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue'
import { defineComponent } from '@vue/runtime-core'
import { useESToast } from '@extscreen/es3-core'
import type { ESKeyEvent } from '@extscreen/es3-core'

export default defineComponent({
  name: '监听分发按键事件',
  setup() {
    const toast = useESToast()
    const textRef = ref<string>('按键查看效果')

    function onDispatchKeyEvent(keyEvent: ESKeyEvent) {
      toast.showToast(`onKeyDown${JSON.stringify(keyEvent)}`)
      textRef.value = JSON.stringify(keyEvent)
    }

    return {
      textRef,
      onDispatchKeyEvent,
    }
  },
})
</script>
