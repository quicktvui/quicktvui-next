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
        <s-text-button
          text="延迟2s开始5参动画"
          @onButtonClicked="startAnimatorDelay"
        />
        <s-text-button text="重置所有动画" @onButtonClicked="resetAnimators" />
      </div>
      <div class="es-sdk-content-row-css">
        <s-text-button text="创建并开始10参动画" @onButtonClicked="initN" />
        <s-text-button text="反转10参动画" @onButtonClicked="reverseAnimator" />
        <s-text-button text="暂停10参动画" @onButtonClicked="pauseAnimator" />
        <s-text-button text="恢复10参动画" @onButtonClicked="resumeAnimator" />
        <s-text-button text="取消10参动画" @onButtonClicked="cancelAnimator" />
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
  name: 'AlphaAnimation',
  emits: [],
  setup() {
    const animationRef = ref<QTIAnimation>()
    const router = useESRouter()

    function initTwo() {
      animationRef.value?.animator(
        '2', //自定义id
        QTAnimationValueType.QT_ANIMATION_VALUE_TYPE_FLOAT,
        QTAnimationPropertyName.QT_ANIMATION_PROPERTY_NAME_ALPHA,
        [0, 1],
        1000,
        -1,
        0,
        false,
        false
      )
      animationRef.value?.start('2')
    }

    function initThree() {
      animationRef.value?.animator(
        '3', //自定义id
        QTAnimationValueType.QT_ANIMATION_VALUE_TYPE_FLOAT,
        QTAnimationPropertyName.QT_ANIMATION_PROPERTY_NAME_ALPHA,
        [0, 1, 0],
        1000,
        -1,
        0,
        false,
        false
      )
      animationRef.value?.start('3')
    }

    function initFour() {
      animationRef.value?.animator(
        '4', //自定义id
        QTAnimationValueType.QT_ANIMATION_VALUE_TYPE_FLOAT,
        QTAnimationPropertyName.QT_ANIMATION_PROPERTY_NAME_ALPHA,
        [0, 1, 0, 1],
        1000,
        -1,
        0,
        false,
        false
      )
      animationRef.value?.start('4')
    }

    function initN() {
      animationRef.value?.animator(
        'n', //自定义id
        QTAnimationValueType.QT_ANIMATION_VALUE_TYPE_FLOAT,
        QTAnimationPropertyName.QT_ANIMATION_PROPERTY_NAME_ALPHA,
        [0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
        10000,
        -1,
        0,
        false,
        false
      )
      animationRef.value?.start('n')
    }

    function startAnimatorDelay() {
      animationRef.value?.animator(
        '5', //自定义id
        QTAnimationValueType.QT_ANIMATION_VALUE_TYPE_FLOAT,
        QTAnimationPropertyName.QT_ANIMATION_PROPERTY_NAME_ALPHA,
        [0, 1, 0, 1, 0],
        1000,
        -1,
        0,
        false,
        false
      )
      animationRef.value?.startDelay('5', 2000)
    }

    function reverseAnimator() {
      animationRef.value?.reverse('n')
    }

    function pauseAnimator() {
      animationRef.value?.pause('n')
    }

    function resumeAnimator() {
      animationRef.value?.resume('n')
    }

    function cancelAnimator() {
      animationRef.value?.cancel('n')
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
      initTwo,
      initThree,
      initFour,
      initN,
      startAnimatorDelay,
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
