<template>
  <div class="es-sdk-root-css">
    <s-title-view class="es-sdk-content-title-css" :text="$options.name" />
    <div class="es-sdk-content-divider-css" />
    <div class="es-sdk-content-row-css">
      <s-text-button text="显示" @onButtonClicked="onShowButtonClicked" />
      <s-text-button text="隐藏" @onButtonClicked="onDismissButtonClicked" />
      <s-text-button
        text="是否正在显示"
        @onButtonClicked="getActionBarIsShowing"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core'

export default defineComponent({
  name: '工具栏',
  setup() {
    function onShowButtonClicked() {
      qt.actionBar.show()
      setTimeout(() => {
        qt.actionBar.dismiss()
      }, 5000)
    }

    function onDismissButtonClicked() {
      qt.actionBar.dismiss()
    }

    function getActionBarIsShowing() {
      qt.actionBar.isShowing().then((show) => {
        qt.toast.showToast(`ActionBarIsShowing:${show}`)
      })
    }

    return {
      onShowButtonClicked,
      onDismissButtonClicked,
      getActionBarIsShowing,
    }
  },
})
</script>
<style></style>
