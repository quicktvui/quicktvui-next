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
      <qt-animation ref="animationViewRef" class="animation-view-css">
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
  QTAnimationValueType,
} from '@quicktvui/quicktvui3'
import type { QTIAnimation } from '@quicktvui/quicktvui3'

export default defineComponent({
  name: 'RotationAnimation',
  emits: [],
  setup() {
    const animationViewRef = ref<QTIAnimation>()
    const router = useESRouter()

    function initTwo() {
      animationViewRef.value?.animator(
        '2', //自定义id
        QTAnimationValueType.QT_ANIMATION_VALUE_TYPE_FLOAT,
        QTAnimationPropertyName.QT_ANIMATION_PROPERTY_NAME_ROTATION,
        [0, 30],
        1000,
        -1,
        0,
        false,
        false
      )
      animationViewRef.value?.start('2')
    }

    function initThree() {
      animationViewRef.value?.animator(
        '3', //自定义id
        QTAnimationValueType.QT_ANIMATION_VALUE_TYPE_FLOAT,
        QTAnimationPropertyName.QT_ANIMATION_PROPERTY_NAME_ROTATION,
        [0, 30, 60],
        1000,
        -1,
        0,
        false,
        false
      )
      animationViewRef.value?.start('3')
    }

    function initFour() {
      animationViewRef.value?.animator(
        '4', //自定义id
        QTAnimationValueType.QT_ANIMATION_VALUE_TYPE_FLOAT,
        QTAnimationPropertyName.QT_ANIMATION_PROPERTY_NAME_ROTATION,
        [0, 30, 60, 360],
        1000,
        -1,
        0,
        false,
        false
      )
      animationViewRef.value?.start('4')
    }

    function initN() {
      animationViewRef.value?.animator(
        'n', //自定义id
        QTAnimationValueType.QT_ANIMATION_VALUE_TYPE_FLOAT,
        QTAnimationPropertyName.QT_ANIMATION_PROPERTY_NAME_ROTATION,
        [0, 30, 60, 360, 0, 30, 60, 360, 60, 360],
        10000,
        -1,
        0,
        false,
        false
      )
      animationViewRef.value?.start('n')
    }

    function startAnimatorDelay() {
      animationViewRef.value?.animator(
        '5', //自定义id
        QTAnimationValueType.QT_ANIMATION_VALUE_TYPE_FLOAT,
        QTAnimationPropertyName.QT_ANIMATION_PROPERTY_NAME_ROTATION,
        [0, 30, 60, 360, 60],
        1000,
        -1,
        0,
        false,
        false
      )
      animationViewRef.value?.startDelay('5', 2000)
    }

    function setPivotX() {
      animationViewRef.value?.setPivotX(0)
    }

    function setPivotY() {
      animationViewRef.value?.setPivotY(200)
    }

    function resetPivot() {
      animationViewRef.value?.resetPivot()
    }

    function reverseAnimator() {
      animationViewRef.value?.reverse('n')
    }

    function pauseAnimator() {
      animationViewRef.value?.pause('n')
    }

    function resumeAnimator() {
      animationViewRef.value?.resume('n')
    }

    function cancelAnimator() {
      animationViewRef.value?.cancel('n')
    }

    function resetAnimators() {
      animationViewRef.value?.reset()
    }

    function onBackPressed() {
      resetAnimators()
      router.back()
    }

    return {
      animationViewRef,
      initTwo,
      initThree,
      initFour,
      initN,
      startAnimatorDelay,
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
