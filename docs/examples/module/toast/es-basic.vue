<template>
  <div class="es-sdk-root-css">
    <s-title-view class="es-sdk-content-title-css" :text="$options.name" />
    <div class="es-sdk-content-divider-css" />
    <div class="es-sdk-content-row-css">
      <s-text-button text="点击显示Toast" @onButtonClicked="showToast" />
      <s-text-button
        text="点击显示ShortToast"
        @onButtonClicked="showShortToast"
      />
      <s-text-button
        text="点击显示LongToast"
        @onButtonClicked="showLongToast"
      />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from '@vue/runtime-core'
import { useESToast } from '@extscreen/es3-core'

export default defineComponent({
  name: 'Toast模块',
  setup() {
    const toast = useESToast()

    function showToast() {
      toast.showToast('这是一个Toast')
    }

    function showLongToast() {
      toast.showLongToast('这是一个LongToast')
    }

    function showShortToast() {
      toast.showShortToast('这是一个ShortToast')
    }

    return {
      showToast,
      showLongToast,
      showShortToast,
    }
  },
})
</script>
<style></style>
