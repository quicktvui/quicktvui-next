<template>
  <div class="es-sdk-root-css">
    <s-title-view class="es-sdk-content-title-css" :text="$options.name" />
    <div class="es-sdk-content-divider-css" />
    <div class="es-sdk-content-column-css">
      <s-text-view :text="textRef" />
      <div class="es-sdk-content-row-css">
        <s-text-button
          text="监听一次事件"
          @onButtonClicked="onOnButtonClicked"
        />
        <s-text-button text="发送事件" @onButtonClicked="onEmitButtonClicked" />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from '@vue/runtime-core'
import { useESEventBus } from '@extscreen/es3-core'

export default defineComponent({
  name: '监听一次事件',
  setup() {
    const eventbus = useESEventBus()
    const textRef = ref('')

    function onOnButtonClicked() {
      eventbus.once('EventBusEventC', onEvent)
    }

    function onEmitButtonClicked() {
      eventbus.emit('EventBusEventC', `C事件${Date.now()}`)
    }

    function onEvent(event) {
      textRef.value = event
    }

    return {
      textRef,
      onOnButtonClicked,
      onEmitButtonClicked,
    }
  },
})
</script>
<style></style>
