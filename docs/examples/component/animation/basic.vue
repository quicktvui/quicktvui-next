<template>
  <div class="es-sdk-root-css">
    <s-title-view class="es-sdk-content-title-css" :text="$options.name" />
    <div class="es-sdk-content-divider-css" />
    <div
      class="es-sdk-content-column-css"
      :clipChildren="true"
      style="height: 1080px"
    >
      <div class="es-sdk-content-row-css">
        <s-text-button text="创建并开始动画" @onButtonClicked="initAnimator" />
        <s-text-button text="反转动画" @onButtonClicked="reverseAnimator" />
        <s-text-button text="暂停动画" @onButtonClicked="pauseAnimator" />
        <s-text-button text="恢复动画" @onButtonClicked="resumeAnimator" />
        <s-text-button text="取消动画" @onButtonClicked="cancelAnimator" />
        <s-text-button text="重置所有动画" @onButtonClicked="resetAnimators" />
      </div>
      <qt-animation ref="animationRef" class="animation-view-css">
        <div class="animation-inner-view-css" />
      </qt-animation>
    </div>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue'
import { defineComponent } from '@vue/runtime-core'
import { useESRouter } from '@extscreen/es3-router'
import {
  QTAnimationPropertyName,
  QTAnimationValueType,
} from '@quicktvui/quicktvui3'
import type { QTIAnimation } from '@quicktvui/quicktvui3'

export default defineComponent({
  name: '基础用法',
  emits: [],
  setup() {
    const animationRef = ref<QTIAnimation>()
    const router = useESRouter()

    function initAnimator() {
      animationRef.value?.animator(
        'AnimatorId', //自定义id
        QTAnimationValueType.QT_ANIMATION_VALUE_TYPE_FLOAT,
        QTAnimationPropertyName.QT_ANIMATION_PROPERTY_NAME_ALPHA,
        [0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
        10000,
        -1,
        0,
        false,
        false
      )
      animationRef.value?.start('AnimatorId')
    }

    function reverseAnimator() {
      animationRef.value?.reverse('AnimatorId')
    }

    function pauseAnimator() {
      animationRef.value?.pause('AnimatorId')
    }

    function resumeAnimator() {
      animationRef.value?.resume('AnimatorId')
    }

    function cancelAnimator() {
      animationRef.value?.cancel('AnimatorId')
    }

    function resetAnimators() {
      animationRef.value?.reset()
    }

    function onBackPressed() {
      resetAnimators()
      router.back()
    }

    return {
      animationRef,
      initAnimator,
      reverseAnimator,
      pauseAnimator,
      resumeAnimator,
      cancelAnimator,
      resetAnimators,
      onBackPressed,
    }
  },
})
</script>

<style src="./css/qt-animation-css.css"></style>
