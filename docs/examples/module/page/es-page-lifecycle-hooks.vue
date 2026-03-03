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
import {
  onESCreate,
  onESDestroy,
  onESNewIntent,
  onESPause,
  onESRestart,
  onESRestoreInstanceState,
  onESResume,
  onESSaveInstanceState,
  onESStart,
  onESStop,
} from '@extscreen/es3-vue'

export default defineComponent({
  name: '使用初探',
  setup() {
    const textRef = ref('')

    onESCreate((params) => {
      textRef.value =
        `${textRef.value} --> ` + `onESCreate${JSON.stringify(params)}`
    })

    onESStart(() => {
      textRef.value = `${textRef.value} --> ` + `onESStart`
    })

    onESNewIntent((intent) => {
      textRef.value =
        `${textRef.value} --> ` + `onESNewIntent${JSON.stringify(params)}`
    })

    onESRestart(() => {
      textRef.value = `${textRef.value} --> ` + `onESRestart`
    })

    onESRestoreInstanceState((savedInstanceState) => {
      textRef.value =
        `${textRef.value} --> ` +
        `onESRestoreInstanceState${JSON.stringify(params)}`
    })

    onESResume(() => {
      textRef.value = `${textRef.value} --> ` + `onESResume`
    })

    onESPause(() => {
      textRef.value = `${textRef.value} --> ` + `onESPause`
    })

    onESStop(() => {
      textRef.value = `${textRef.value} --> ` + `onESStop`
    })

    onESSaveInstanceState((savedInstanceState) => {
      textRef.value =
        `${textRef.value} --> ` +
        `onESSaveInstanceState${JSON.stringify(params)}`
    })

    onESDestroy(() => {
      textRef.value = `${textRef.value} --> ` + `onESDestroy`
    })
  },
})
</script>
<style></style>
