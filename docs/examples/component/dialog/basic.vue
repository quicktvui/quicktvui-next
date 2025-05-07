<template>
  <div class="es-sdk-root-css" :clipChildren="false">
    <s-title-view class="es-sdk-content-title-css" :text="$options.name" />
    <div class="es-sdk-content-divider-css" />
    <div class="es-sdk-content-row-css">
      <s-text-button text="显示对话框" @onButtonClicked="show" />
    </div>
  </div>
  <qt-dialog
    v-if="showDialog"
    class="qt-sdk-dialog-css"
    @show="show"
    @requestClose="dismiss"
  >
    <qt-view class="qt-sdk-dialog-content-css">
      <qt-text
        class="qt-sdk-dialog-content-text-css"
        text="我是对话框"
        font-size="30"
      />
    </qt-view>
  </qt-dialog>
</template>

<script lang="ts">
import { ref } from 'vue'
import { defineComponent } from '@vue/runtime-core'

export default defineComponent({
  setup() {
    const showDialog = ref<boolean>(false)

    function show() {
      showDialog.value = true
    }

    function dismiss() {
      showDialog.value = false
    }

    return {
      show,
      dismiss,
      showDialog,
    }
  },
})
</script>

<style>
.qt-sdk-dialog-css {
  width: 1920px;
  height: 1080px;
  align-items: center;
  justify-content: center;
  position: absolute;
}

.qt-sdk-dialog-content-css {
  width: 1920px;
  height: 1080px;
  align-items: center;
  justify-content: center;
  background-color: palevioletred;
}

.qt-sdk-dialog-content-text-css {
  width: 192px;
  height: 108px;
  color: black;
}
</style>
