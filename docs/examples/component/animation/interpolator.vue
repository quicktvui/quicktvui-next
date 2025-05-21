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
        <s-text-button
          text="NullInterpolator"
          @onButtonClicked="nullInterpolator"
        />
        <s-text-button
          text="AccelerateDecelerateInterpolator"
          @onButtonClicked="accelerateDecelerateInterpolator"
        />
        <s-text-button
          text="AccelerateInterpolator"
          @onButtonClicked="accelerateInterpolator"
        />
        <s-text-button
          text="AnticipateInterpolator"
          @onButtonClicked="anticipateInterpolator"
        />
        <s-text-button
          text="AnticipateOvershootInterpolator"
          @onButtonClicked="anticipateOvershootInterpolator"
        />
        <s-text-button
          text="BounceInterpolator"
          @onButtonClicked="bounceInterpolator"
        />
        <s-text-button
          text="CycleInterpolator"
          @onButtonClicked="cycleInterpolator"
        />
        <s-text-button
          text="DecelerateInterpolator"
          @onButtonClicked="decelerateInterpolator"
        />
        <s-text-button
          text="LinearInterpolator"
          @onButtonClicked="linearInterpolator"
        />
        <s-text-button
          text="OvershootInterpolator"
          @onButtonClicked="overshootInterpolator"
        />
        <s-text-button
          text="FastOutLinearInInterpolator"
          @onButtonClicked="fastOutLinearInInterpolator"
        />
        <s-text-button
          text="FastOutSlowInInterpolator"
          @onButtonClicked="fastOutSlowInInterpolator"
        />
      </div>
      <qt-animation ref="animationViewRef" class="animation-view-css">
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
  QTAnimationInterpolatorType,
  QTAnimationPropertyName,
  QTAnimationValueType,
} from '@quicktvui/quicktvui3'
import type { QTIAnimation } from '@quicktvui/quicktvui3'

export default defineComponent({
  name: 'AnimationInterpolator',
  emits: [],
  setup() {
    const animationViewRef = ref<QTIAnimation>()
    const router = useESRouter()

    function nullInterpolator() {
      animationViewRef.value?.objectAnimator(
        'NullInterpolator', //自定义id
        QTAnimationValueType.QT_ANIMATION_VALUE_TYPE_FLOAT,
        QTAnimationPropertyName.QT_ANIMATION_PROPERTY_NAME_TRANSLATION_Y,
        [0, 500, 0],
        1500,
        -1,
        0,
        false,
        false
      )
      animationViewRef.value?.startAnimator('NullInterpolator')
    }

    function accelerateDecelerateInterpolator() {
      animationViewRef.value?.objectAnimator(
        'AccelerateDecelerateInterpolator', //自定义id
        QTAnimationValueType.QT_ANIMATION_VALUE_TYPE_FLOAT,
        QTAnimationPropertyName.QT_ANIMATION_PROPERTY_NAME_TRANSLATION_Y,
        [0, 500, 0],
        1500,
        -1,
        0,
        false,
        false,
        {
          type: QTAnimationInterpolatorType.QT_ACCELERATE_DECELERATE_INTERPOLATOR,
        }
      )
      animationViewRef.value?.startAnimator('AccelerateDecelerateInterpolator')
    }

    function accelerateInterpolator() {
      animationViewRef.value?.objectAnimator(
        'AccelerateInterpolator', //自定义id
        QTAnimationValueType.QT_ANIMATION_VALUE_TYPE_FLOAT,
        QTAnimationPropertyName.QT_ANIMATION_PROPERTY_NAME_TRANSLATION_Y,
        [0, 500, 0],
        1500,
        -1,
        0,
        false,
        false,
        {
          type: QTAnimationInterpolatorType.QT_ACCELERATE_INTERPOLATOR,
        }
      )
      animationViewRef.value?.startAnimator('AccelerateInterpolator')
    }

    function anticipateInterpolator() {
      animationViewRef.value?.objectAnimator(
        'AnticipateInterpolator', //自定义id
        QTAnimationValueType.QT_ANIMATION_VALUE_TYPE_FLOAT,
        QTAnimationPropertyName.QT_ANIMATION_PROPERTY_NAME_TRANSLATION_Y,
        [0, 500, 0],
        1500,
        -1,
        0,
        false,
        false,
        {
          type: QTAnimationInterpolatorType.QT_ANTICIPATE_INTERPOLATOR,
        }
      )
      animationViewRef.value?.startAnimator('AnticipateInterpolator')
    }

    function anticipateOvershootInterpolator() {
      animationViewRef.value?.objectAnimator(
        'AnticipateOvershootInterpolator', //自定义id
        QTAnimationValueType.QT_ANIMATION_VALUE_TYPE_FLOAT,
        QTAnimationPropertyName.QT_ANIMATION_PROPERTY_NAME_TRANSLATION_Y,
        [0, 500, 0],
        1500,
        -1,
        0,
        false,
        false,
        {
          type: QTAnimationInterpolatorType.QT_ANTICIPATE_OVERSHOOT_INTERPOLATOR,
        }
      )
      animationViewRef.value?.startAnimator('AnticipateOvershootInterpolator')
    }

    function bounceInterpolator() {
      animationViewRef.value?.objectAnimator(
        'BounceInterpolator', //自定义id
        QTAnimationValueType.QT_ANIMATION_VALUE_TYPE_FLOAT,
        QTAnimationPropertyName.QT_ANIMATION_PROPERTY_NAME_TRANSLATION_Y,
        [0, 500, 0],
        1500,
        -1,
        0,
        false,
        false,
        {
          type: QTAnimationInterpolatorType.QT_BOUNCE_INTERPOLATOR,
        }
      )
      animationViewRef.value?.startAnimator('BounceInterpolator')
    }

    function cycleInterpolator() {
      animationViewRef.value?.objectAnimator(
        'CycleInterpolator', //自定义id
        QTAnimationValueType.QT_ANIMATION_VALUE_TYPE_FLOAT,
        QTAnimationPropertyName.QT_ANIMATION_PROPERTY_NAME_TRANSLATION_Y,
        [0, 500, 0],
        1500,
        -1,
        0,
        false,
        false,
        {
          type: QTAnimationInterpolatorType.QT_CYCLE_INTERPOLATOR,
        }
      )
      animationViewRef.value?.startAnimator('CycleInterpolator')
    }

    function decelerateInterpolator() {
      animationViewRef.value?.objectAnimator(
        'DecelerateInterpolator', //自定义id
        QTAnimationValueType.QT_ANIMATION_VALUE_TYPE_FLOAT,
        QTAnimationPropertyName.QT_ANIMATION_PROPERTY_NAME_TRANSLATION_Y,
        [0, 500, 0],
        1500,
        -1,
        0,
        false,
        false,
        {
          type: QTAnimationInterpolatorType.QT_DECELERATE_INTERPOLATOR,
        }
      )
      animationViewRef.value?.startAnimator('DecelerateInterpolator')
    }

    function linearInterpolator() {
      animationViewRef.value?.objectAnimator(
        'LinearInterpolator', //自定义id
        QTAnimationValueType.QT_ANIMATION_VALUE_TYPE_FLOAT,
        QTAnimationPropertyName.QT_ANIMATION_PROPERTY_NAME_TRANSLATION_Y,
        [0, 500, 0],
        1500,
        -1,
        0,
        false,
        false,
        {
          type: QTAnimationInterpolatorType.QT_LINEAR_INTERPOLATOR,
        }
      )
      animationViewRef.value?.startAnimator('LinearInterpolator')
    }

    function overshootInterpolator() {
      animationViewRef.value?.objectAnimator(
        'OvershootInterpolator', //自定义id
        QTAnimationValueType.QT_ANIMATION_VALUE_TYPE_FLOAT,
        QTAnimationPropertyName.QT_ANIMATION_PROPERTY_NAME_TRANSLATION_Y,
        [0, 500, 0],
        1500,
        -1,
        0,
        false,
        false,
        {
          type: QTAnimationInterpolatorType.QT_OVERSHOOT_INTERPOLATOR,
        }
      )
      animationViewRef.value?.startAnimator('OvershootInterpolator')
    }

    function fastOutLinearInInterpolator() {
      animationViewRef.value?.objectAnimator(
        'FastOutLinearInInterpolator', //自定义id
        QTAnimationValueType.QT_ANIMATION_VALUE_TYPE_FLOAT,
        QTAnimationPropertyName.QT_ANIMATION_PROPERTY_NAME_TRANSLATION_Y,
        [0, 500, 0],
        1500,
        -1,
        0,
        false,
        false,
        {
          type: QTAnimationInterpolatorType.QT_FAST_OUT_LINEAR_IN_INTERPOLATOR,
        }
      )
      animationViewRef.value?.startAnimator('FastOutLinearInInterpolator')
    }

    function fastOutSlowInInterpolator() {
      animationViewRef.value?.objectAnimator(
        'FastOutSlowInInterpolator', //自定义id
        QTAnimationValueType.QT_ANIMATION_VALUE_TYPE_FLOAT,
        QTAnimationPropertyName.QT_ANIMATION_PROPERTY_NAME_TRANSLATION_Y,
        [0, 500, 0],
        1500,
        -1,
        0,
        false,
        false,
        {
          type: QTAnimationInterpolatorType.QT_FAST_OUT_SLOW_IN_INTERPOLATOR,
        }
      )
      animationViewRef.value?.startAnimator('FastOutSlowInInterpolator')
    }

    function resetAnimators() {
      animationViewRef.value?.resetAnimators()
    }

    function onBackPressed() {
      resetAnimators()
      router.back()
    }

    return {
      animationViewRef,
      router,
      nullInterpolator,
      accelerateDecelerateInterpolator,
      accelerateInterpolator,
      anticipateInterpolator,
      anticipateOvershootInterpolator,
      bounceInterpolator,
      cycleInterpolator,
      decelerateInterpolator,
      linearInterpolator,
      overshootInterpolator,
      fastOutLinearInInterpolator,
      fastOutSlowInInterpolator,
      resetAnimators,
      onBackPressed,
    }
  },
})
</script>

<style src="./css/qt-animation-css.css"></style>
