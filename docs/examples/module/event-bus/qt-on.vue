<template>
  <div class="es-sdk-root-css">
    <s-title-view class="es-sdk-content-title-css" :text="$options.name" />
    <div class="es-sdk-content-divider-css" />
    <div class="es-sdk-content-column-css">
      <s-text-view :text="textRef" />
      <s-text-button text="发送事件" @onButtonClicked="onButtonClicked" />
      <s-text-button
        text="打开发送D事件页面"
        @onButtonClicked="onDEventButtonClicked"
      />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from '@vue/runtime-core'
import { useESRouter } from '@extscreen/es3-router'

export default defineComponent({
  name: '监听事件',
  setup() {
    const textRef = ref('')
    const router = useESRouter()

    const onESCreate = () => {
      qt.eventBus.on('EventBusEventA', onEvent)
      qt.eventBus.on('EventBusEventD', onEvent)
    }

    function onEvent(event) {
      textRef.value = event
    }

    function onButtonClicked() {
      qt.eventBus.emit('EventBusEventA', `A事件${Date.now()}`)
    }

    function onDEventButtonClicked() {
      router.push({
        name: 'eventbus/es_eventbus_emit_page',
      })
    }

    return {
      textRef,
      onESCreate,
      onButtonClicked,
      onDEventButtonClicked,
    }
  },
})
</script>
<style></style>
