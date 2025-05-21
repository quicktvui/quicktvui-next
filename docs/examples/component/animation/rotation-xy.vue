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
        <s-text-button text="重置" @onButtonClicked="reset" />
      </div>
      <div class="es-sdk-content-row-css">
        <s-text-button text="Rotation+" @onButtonClicked="startRotationA" />
        <s-text-button text="Rotation-" @onButtonClicked="startRotationD" />
        <s-text-button text="RotationXY+" @onButtonClicked="startRotationXYA" />
        <s-text-button text="RotationXY-" @onButtonClicked="startRotationXYD" />
      </div>
      <div class="es-sdk-content-row-css">
        <s-text-button text="RotationX+" @onButtonClicked="startRotationXA" />
        <s-text-button text="RotationX-" @onButtonClicked="startRotationXD" />
        <s-text-button text="RotationY+" @onButtonClicked="startRotationYA" />
        <s-text-button text="RotationY-" @onButtonClicked="startRotationYD" />
      </div>
      <qt-animation ref="animationViewRef" class="animation-inner-img-view-css">
        <img class="animation-inner-img-view-css" :src="imgSrc" />
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
import imgSrc from '../../../src/assets/ic_car.jpg'
import type { QTIAnimation } from '@quicktvui/quicktvui3'

export default defineComponent({
  name: 'RotationXYAnimation',
  emits: [],
  setup() {
    const animationViewRef = ref<QTIAnimation>()
    const router = useESRouter()

    let rotation = 0
    let rotationX = 0
    let rotationY = 0

    function startRotationA() {
      startRotation(rotation + 15)
    }

    function startRotationD() {
      startRotation(rotation - 15)
    }

    function startRotation(value: number) {
      if (value > 45 || value < -45) {
        return
      }
      animationViewRef.value?.objectAnimator(
        '4',
        QTAnimationValueType.QT_ANIMATION_VALUE_TYPE_FLOAT,
        QTAnimationPropertyName.QT_ANIMATION_PROPERTY_NAME_ROTATION,
        [rotation, value],
        100,
        -1,
        0,
        false,
        false
      )
      animationViewRef.value?.startAnimator('4')
      rotation = value
    }

    //-------------------------------------------------------------------

    function startRotationXYA() {
      startRotationXA()
      startRotationYA()
    }

    function startRotationXYD() {
      startRotationXD()
      startRotationYD()
    }

    function startRotationXA() {
      startRotationX(rotationX + 15)
    }

    function startRotationXD() {
      startRotationX(rotationX - 15)
    }

    function startRotationX(value: number) {
      animationViewRef.value?.objectAnimator(
        '2', //自定义id
        QTAnimationValueType.QT_ANIMATION_VALUE_TYPE_FLOAT,
        QTAnimationPropertyName.QT_ANIMATION_PROPERTY_NAME_ROTATION_X,
        [rotationX, value],
        100,
        -1,
        0,
        false,
        false
      )
      animationViewRef.value?.startAnimator('2')
      rotationX = value
    }

    function startRotationYA() {
      startRotationY(rotationY + 15)
    }

    function startRotationYD() {
      startRotationY(rotationY - 15)
    }

    function startRotationY(value: number) {
      animationViewRef.value?.objectAnimator(
        '3', //自定义id
        QTAnimationValueType.QT_ANIMATION_VALUE_TYPE_FLOAT,
        QTAnimationPropertyName.QT_ANIMATION_PROPERTY_NAME_ROTATION_Y,
        [rotationY, value],
        100,
        -1,
        0,
        false,
        false
      )
      animationViewRef.value?.startAnimator('3')
      rotationY = value
    }

    //------------------------------------------------------------
    function reset() {
      animationViewRef.value?.objectAnimator(
        '5',
        QTAnimationValueType.QT_ANIMATION_VALUE_TYPE_FLOAT,
        QTAnimationPropertyName.QT_ANIMATION_PROPERTY_NAME_ROTATION,
        [0, 0],
        100,
        -1,
        0,
        false,
        false
      )
      animationViewRef.value?.startAnimator('5')

      animationViewRef.value?.objectAnimator(
        '6', //自定义id
        QTAnimationValueType.QT_ANIMATION_VALUE_TYPE_FLOAT,
        QTAnimationPropertyName.QT_ANIMATION_PROPERTY_NAME_ROTATION_X,
        [0, 0],
        100,
        -1,
        0,
        false,
        false
      )
      animationViewRef.value?.startAnimator('6')

      animationViewRef.value?.objectAnimator(
        '7', //自定义id
        QTAnimationValueType.QT_ANIMATION_VALUE_TYPE_FLOAT,
        QTAnimationPropertyName.QT_ANIMATION_PROPERTY_NAME_ROTATION_Y,
        [0, 0],
        100,
        -1,
        0,
        false,
        false
      )
      animationViewRef.value?.startAnimator('7')
    }

    //------------------------------------------------------------
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
      animationViewRef.value?.reverseAnimator('n')
    }

    function pauseAnimator() {
      animationViewRef.value?.pauseAnimator('n')
    }

    function resumeAnimator() {
      animationViewRef.value?.resumeAnimator('n')
    }

    function cancelAnimator() {
      animationViewRef.value?.cancelAnimator('n')
    }

    function resetAnimators() {
      animationViewRef.value?.resetAnimators()
    }

    function onBackPressed() {
      resetAnimators()
      router.back()
    }

    return {
      imgSrc,
      animationViewRef,
      startRotationA,
      startRotationD,
      startRotationXA,
      startRotationXD,
      startRotationYA,
      startRotationYD,
      setPivotX,
      setPivotY,
      resetPivot,
      reset,
      reverseAnimator,
      pauseAnimator,
      resumeAnimator,
      cancelAnimator,
      resetAnimators,
      onBackPressed,
      startRotationXYA,
      startRotationXYD,
    }
  },
})
</script>

<style>
.animation-inner-img-view-css {
  width: 480px;
  height: 240px;
  background-color: #42b983;
}
</style>
