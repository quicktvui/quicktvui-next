<template>
  <div class="es-sdk-root-css" :clipChildren="true">
    <s-title-view class="es-sdk-content-title-css" :text="$options.name" />
    <div class="es-sdk-content-divider-css" />
    <div
      class="es-sdk-content-column-css"
      :clipChildren="true"
      style="height: 1080px"
    >
      <s-text-view
        text="listenAnimator监听动画状态变化  listenAnimatorValue监听动画值的变化"
      />
      <s-text-view :text="'动画状态：' + animationStatus" />
      <s-text-view :text="'动画值：' + animationValue" />
      <div class="es-sdk-content-row-css">
        <s-text-button text="创建并开始动画" @onButtonClicked="init" />
        <s-text-button text="反转动画" @onButtonClicked="reverseAnimator" />
        <s-text-button text="暂停动画" @onButtonClicked="pauseAnimator" />
        <s-text-button text="恢复动画" @onButtonClicked="resumeAnimator" />
        <s-text-button text="取消动画" @onButtonClicked="cancelAnimator" />
        <s-text-button text="重置所有动画" @onButtonClicked="resetAnimators" />
      </div>
      <qt-animation
        ref="animationViewRef"
        class="animation-view-css"
        @onAnimationCancel="onAnimationCancel"
        @onAnimationEnd="onAnimationEnd"
        @onAnimationStart="onAnimationStart"
        @onAnimationRepeat="onAnimationRepeat"
        @onAnimationPause="onAnimationPause"
        @onAnimationResume="onAnimationResume"
        @onAnimationUpdate="onAnimationUpdate"
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
  QTAnimationValueType,
} from '@quicktvui/quicktvui3'
import type { QTIAnimation } from '@quicktvui/quicktvui3'

export default defineComponent({
  name: 'AnimationListener',
  emits: [],
  setup() {
    const animationStatus = ref('重置')
    const animationValue = ref('-1')
    const router = useESRouter()
    const animationViewRef = ref<QTIAnimation>()

    function init() {
      animationViewRef.value?.objectAnimator5(
        'AnimationListener', //自定义id
        QTAnimationValueType.QT_ANIMATION_VALUE_TYPE_FLOAT,
        QTAnimationPropertyName.QT_ANIMATION_PROPERTY_NAME_TRANSLATION_X,
        0,
        500,
        0,
        -500,
        0,
        10000,
        -1,
        0,
        true, //listenAnimator
        true //listenAnimatorValue
      )
      animationViewRef.value?.startAnimator('AnimationListener')
    }

    function onAnimationCancel(id) {
      animationStatus.value = 'onAnimationCancel'
    }

    function onAnimationEnd(id, isReverse) {
      animationStatus.value = 'onAnimationEnd'
    }

    function onAnimationRepeat(id) {
      animationStatus.value = 'onAnimationRepeat'
    }

    function onAnimationStart(id, isReverse) {
      animationStatus.value = 'onAnimationStart'
    }

    function onAnimationPause(id) {
      animationStatus.value = 'onAnimationPause'
    }

    function onAnimationResume(id) {
      animationStatus.value = 'onAnimationResume'
    }

    function onAnimationUpdate(id, value) {
      animationValue.value = value
    }

    function reverseAnimator() {
      animationViewRef.value?.reverseAnimator('AnimationListener')
    }

    function pauseAnimator() {
      animationViewRef.value?.pauseAnimator('AnimationListener')
    }

    function resumeAnimator() {
      animationViewRef.value?.resumeAnimator('AnimationListener')
    }

    function cancelAnimator() {
      animationViewRef.value?.cancelAnimator('AnimationListener')
    }

    function resetAnimators() {
      animationViewRef.value?.resetAnimators()
    }

    function onBackPressed() {
      resetAnimators()
      router.back()
    }

    return {
      animationStatus,
      animationValue,
      router,
      animationViewRef,
      init,
      onAnimationCancel,
      onAnimationEnd,
      onAnimationRepeat,
      onAnimationStart,
      onAnimationPause,
      onAnimationResume,
      onAnimationUpdate,
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
