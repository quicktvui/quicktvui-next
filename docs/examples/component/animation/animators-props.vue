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
        <s-text-button text="开始动画" @onButtonClicked="startAnimator" />
        <s-text-button text="反转动画" @onButtonClicked="reverseAnimator" />
        <s-text-button text="暂停动画" @onButtonClicked="pauseAnimator" />
        <s-text-button text="恢复动画" @onButtonClicked="resumeAnimator" />
        <s-text-button text="取消动画" @onButtonClicked="cancelAnimator" />
      </div>
      <qt-animation
        ref="animationView"
        class="animation-view-css"
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
  QTAnimationValueType,
  QTAnimator,
  QTAnimatorId,
  QTAnimatorRelationType,
} from '@quicktvui/quicktvui3'
import type { QTIAnimation } from '@quicktvui/quicktvui3'

export default defineComponent({
  name: 'AnimatorsProps',
  emits: [],
  setup() {
    const animationView = ref<QTIAnimation>()
    const router = useESRouter()
    const animator = {
      id: 'AnimatorSet', //默认可缺省
      duration: 10000, //默认可缺省
      listenAnimator: false, //默认可缺省
      relationType: QTAnimatorRelationType.TOGETHER, //默认可缺省
      animators: [
        {
          id: 'animator_1', //默认可缺省
          valueType: QTAnimationValueType.QT_ANIMATION_VALUE_TYPE_FLOAT, //默认可缺省
          propertyName:
            QTAnimationPropertyName.QT_ANIMATION_PROPERTY_NAME_TRANSLATION_X,
          values: [0, 300, 60, -60, 60, 0, 800, 60, -600, 60],
          duration: 10000,
          repeatMode: -1, //默认可缺省
          repeatCount: 0, //默认可缺省
          listenAnimator: false, //默认可缺省
          listenAnimatorValue: false, //默认可缺省
          interpolator: {
            //默认可缺省
            type: 11,
          },
        },
        {
          id: 'animator_2', //默认可缺省
          valueType: QTAnimationValueType.QT_ANIMATION_VALUE_TYPE_FLOAT, //默认可缺省
          propertyName:
            QTAnimationPropertyName.QT_ANIMATION_PROPERTY_NAME_SCALE_X,
          values: [0, 2.5],
          duration: 2000,
          repeatMode: -1, //默认可缺省
          repeatCount: 0, //默认可缺省
          listenAnimator: false, //默认可缺省
          listenAnimatorValue: false, //默认可缺省
          interpolator: {
            //默认可缺省
            type: 11,
          },
        },
        {
          id: 'animator_3', //默认可缺省
          valueType: QTAnimationValueType.QT_ANIMATION_VALUE_TYPE_FLOAT, //默认可缺省
          propertyName:
            QTAnimationPropertyName.QT_ANIMATION_PROPERTY_NAME_ALPHA,
          values: [0, 1],
          duration: 2000,
          repeatMode: -1, //默认可缺省
          repeatCount: 0, //默认可缺省
          listenAnimator: false, //默认可缺省
          listenAnimatorValue: false, //默认可缺省
          interpolator: {
            //默认可缺省
            type: 11,
          },
        },
      ],
    }

    function startAnimator() {
      animationView.value?.start()
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
      startAnimator,
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
