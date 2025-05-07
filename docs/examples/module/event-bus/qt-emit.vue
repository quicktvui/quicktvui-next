<template>
  <div class="es-sdk-root-css">
    <s-title-view class="es-sdk-content-title-css" :text="$options.name" />
    <div class="es-sdk-content-divider-css" />
    <div class="es-sdk-content-row-css">
      <s-text-button text="发送事件" @onButtonClicked="onButtonClicked" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core'

export default defineComponent({
  name: '发送事件',
  setup() {
    function onButtonClicked() {
      qt.eventBus.emit('EventBusEventD', `D事件##########${Date.now()}`)
    }

    return {
      onButtonClicked,
    }
  },
})
</script>

<style></style>
