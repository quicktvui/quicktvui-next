<template>
  <div class="es-sdk-root-css">
    <s-title-view class="es-sdk-content-title-css" :text="$options.name" />
    <div class="es-sdk-content-divider-css" />
    <div class="es-sdk-content-column-css">
      <s-text-view :text="'当前系统亮度模式：' + currentBrightnessMode" />
      <s-text-view :text="'当前亮度(0-255)：' + currentBrightness" />
      <div class="es-sdk-content-row-css">
        <s-text-button
          text="增加系统亮度"
          @onButtonClicked="addScreenBrightness"
        />
        <s-text-button
          text="减少系统亮度"
          @onButtonClicked="reduceScreenBrightness"
        />
        <s-text-button text="0%亮度" @onButtonClicked="setZeroBrightness" />
        <s-text-button text="50%亮度" @onButtonClicked="setHalfBrightness" />
        <s-text-button text="100%亮度" @onButtonClicked="setMaxBrightness" />
        <s-text-button
          text="增加当前window亮度"
          @onButtonClicked="addWindowBrightness"
        />
        <s-text-button
          text="减少当前window亮度"
          @onButtonClicked="reduceWindowBrightness"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue'
import { defineComponent } from '@vue/runtime-core'
import { useESBrightness, useESToast } from '@extscreen/es3-core'

export default defineComponent({
  name: '屏幕亮度模块',
  setup() {
    const brightness = useESBrightness()
    const toast = useESToast()
    const currentBrightnessMode = ref<any>()
    const currentBrightness = ref<any>()

    const onESCreate = (params) => {
      brightness.getScreenBrightness().then(
        (value) => {
          const result = value.result
          currentBrightness.value = `${result}`
        },
        (error) => {
          toast.showToast('调用失败')
        }
      )
      brightness.getScreenBrightnessMode().then(
        (value) => {
          const result = value.result
          currentBrightnessMode.value = `${result}`
          toast.showToast(`${result}`)
        },
        (error) => {
          toast.showToast('调用失败')
        }
      )
    }

    function addScreenBrightness() {
      currentBrightness.value++
      brightness.changeScreenBrightness(currentBrightness.value)
    }

    function reduceScreenBrightness() {
      currentBrightness.value--
      brightness.changeScreenBrightness(currentBrightness.value)
    }

    function setZeroBrightness() {
      currentBrightness.value = 1
      brightness.changeScreenBrightness(currentBrightness.value)
    }

    function setHalfBrightness() {
      currentBrightness.value = 127
      brightness.changeScreenBrightness(currentBrightness.value)
    }

    function setMaxBrightness() {
      currentBrightness.value = 255
      brightness.changeScreenBrightness(currentBrightness.value)
    }

    function addWindowBrightness() {
      currentBrightness.value++
      brightness.changeWindowBrightness(currentBrightness.value)
    }

    function reduceWindowBrightness() {
      currentBrightness.value--
      brightness.changeWindowBrightness(currentBrightness.value)
    }

    return {
      onESCreate,
      currentBrightnessMode,
      currentBrightness,
      addScreenBrightness,
      reduceScreenBrightness,
      setZeroBrightness,
      setHalfBrightness,
      setMaxBrightness,
      addWindowBrightness,
      reduceWindowBrightness,
    }
  },
})
</script>
<style></style>
