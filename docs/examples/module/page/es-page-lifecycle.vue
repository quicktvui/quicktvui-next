<template>
  <div class="es-sdk-root-css">
    <s-title-view class="es-sdk-content-title-css" :text="$options.name" />
    <div class="es-sdk-content-divider-css" />
    <div class="es-sdk-content-row-css">
      <s-text-view :text="textRef" />
    </div>
  </div>
</template>
<script>
import { defineComponent, ref } from '@vue/runtime-core'

export default defineComponent({
  name: '使用初探',
  setup() {
    const textRef = ref('')

    function onESCreate(params) {
      textRef.value =
        `${textRef.value} --> ` + `onESCreate${JSON.stringify(params)}`
    }

    function onESStart() {
      textRef.value = `${textRef.value} --> ` + `onESStart`
    }

    function onESNewIntent(intent) {
      textRef.value =
        `${textRef.value} --> ` + `onESNewIntent${JSON.stringify(params)}`
    }

    function onESRestart() {
      textRef.value = `${textRef.value} --> ` + `onESRestart`
    }

    function onESRestoreInstanceState(savedInstanceState) {
      textRef.value =
        `${textRef.value} --> ` +
        `onESRestoreInstanceState${JSON.stringify(params)}`
    }

    function onESResume() {
      textRef.value = `${textRef.value} --> ` + `onESResume`
    }

    function onESPause() {
      textRef.value = `${textRef.value} --> ` + `onESPause`
    }

    function onESStop() {
      textRef.value = `${textRef.value} --> ` + `onESStop`
    }

    function onESSaveInstanceState(savedInstanceState) {
      textRef.value =
        `${textRef.value} --> ` +
        `onESSaveInstanceState${JSON.stringify(params)}`
    }

    function onESDestroy() {
      textRef.value = `${textRef.value} --> ` + `onESDestroy`
    }

    return {
      textRef,
      onESCreate,
      onESStart,
      onESResume,
      onESPause,
      onESStop,
      onESDestroy,
      onESNewIntent,
      onESRestoreInstanceState,
      onESSaveInstanceState,
      onESRestart,
    }
  },
})
</script>
<style></style>
