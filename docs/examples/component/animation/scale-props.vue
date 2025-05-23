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
        <s-text-button text="创建并开始2参动画" @onButtonClicked="initTwo" />
        <s-text-button text="创建并开始3参动画" @onButtonClicked="initThree" />
        <s-text-button text="创建并开始4参动画" @onButtonClicked="initFour" />
      </div>
      <div class="es-sdk-content-row-css">
        <s-text-button text="创建并开始10参动画" @onButtonClicked="initN" />
        <s-text-button text="反转10参动画" @onButtonClicked="reverseAnimator" />
        <s-text-button text="暂停10参动画" @onButtonClicked="pauseAnimator" />
        <s-text-button text="恢复10参动画" @onButtonClicked="resumeAnimator" />
        <s-text-button text="取消10参动画" @onButtonClicked="cancelAnimator" />
      </div>
      <qt-animation
        ref="animationView"
        class="animation-view-css"
        autoPlay
        :animator="animator"
      >
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
  QTAnimationType,
  QTAnimationValueType,
} from '@quicktvui/quicktvui3'
import type { QTAnimator, QTIAnimation } from '@quicktvui/quicktvui3'

export default defineComponent({
  name: 'Scale（props）',
  emits: [],
  setup() {
    const animationView = ref<QTIAnimation>()
    const router = useESRouter()

    const animator = ref<QTAnimator>()

    function initTwo() {
      animator.value = {
        type: QTAnimationType.SCALE_X,
        values: [0, 1.5],
        duration: 1000,
      }
    }

    function initThree() {
      animator.value = {
        type: QTAnimationType.SCALE_X,
        values: [0, 1.5, 2],
        duration: 1000,
      }
    }

    function initFour() {
      animator.value = {
        type: QTAnimationType.SCALE_X,
        values: [0, 1.5, 2, 0.3],
        duration: 1000,
      }
    }

    function initN() {
      animator.value = {
        type: QTAnimationType.SCALE_X,
        values: [0, 1.5, 2, 0.3, 0, 1, 0, 1.5, 2, 0.3],
        duration: 10000,
      }
    }

    function reverseAnimator() {
      animationView.value?.reverse()
    }

    function pauseAnimator() {
      animationView.value?.pause()
    }

    function resumeAnimator() {
      animationView.value?.resume()
    }

    function cancelAnimator() {
      animationView.value?.cancel()
    }

    function resetAnimators() {
      animationView.value?.reset()
    }

    function onBackPressed() {
      resetAnimators()
      router.back()
    }

    return {
      animationView,
      animator,
      initTwo,
      initThree,
      initFour,
      initN,
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
