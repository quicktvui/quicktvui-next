<template>
  <div class="es-sdk-root-css" :clipChildren="true">
    <s-title-view class="es-sdk-content-title-css" :text="$options.name" />
    <div class="es-sdk-content-divider-css" />
    <div
      class="es-sdk-content-column-css"
      :clipChildren="true"
      style="height: 1080px"
    >
      <div class="es-sdk-content-row-css">
        <s-text-button text="设置PivotX" @onButtonClicked="setPivotX" />
        <s-text-button text="设置PivotY" @onButtonClicked="setPivotY" />
        <s-text-button text="重置Pivot" @onButtonClicked="resetPivot" />
      </div>
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
import { defineComponent, ref } from '@vue/runtime-core'
import { useESRouter } from '@extscreen/es3-router'
import {
  QTAnimationPropertyName,
  QTAnimationType,
  QTAnimationValueType,
} from '@quicktvui/quicktvui3'
import type { QTAnimator, QTIAnimation } from '@quicktvui/quicktvui3'

export default defineComponent({
  name: 'Rotation（props）',
  emits: [],
  setup() {
    const animationView = ref<QTIAnimation>()
    const router = useESRouter()

    const animator = ref<QTAnimator>()

    function initTwo() {
      animator.value = {
        type: QTAnimationType.ROTATION,
        values: [0, 30],
        duration: 1000,
      }
    }

    function initThree() {
      animator.value = {
        type: QTAnimationType.ROTATION,
        values: [0, 30, 60],
        duration: 1000,
      }
    }

    function initFour() {
      animator.value = {
        type: QTAnimationType.ROTATION,
        values: [0, 30, 60, 360],
        duration: 1000,
      }
    }

    function initN() {
      animator.value = {
        type: QTAnimationType.ROTATION,
        values: [0, 30, 60, 360, 0, 30, 60, 360, 60, 360],
        duration: 10000,
      }
    }

    function setPivotX() {
      animationView.value?.setPivotX(0)
    }

    function setPivotY() {
      animationView.value?.setPivotY(200)
    }

    function resetPivot() {
      animationView.value?.resetPivot()
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
      setPivotX,
      setPivotY,
      resetPivot,
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
