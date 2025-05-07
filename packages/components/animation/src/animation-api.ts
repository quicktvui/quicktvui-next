import { isRef } from 'vue'
import { isString } from '@quicktvui/utils'
import { callUIFunction, callUIFunctionWithPromise } from '../../api'
import type {
  QTEventData,
  QTLocation,
  QTNativeParams,
  QTVisibility,
} from '../../base'
import type {
  QTDescendantFocusability,
  QTFocusDescendant,
  QTFocusDirection,
  QTFocusDirectionName,
} from '../../focus'
import type { QTViewState } from '../../view'
import type { Ref } from 'vue'
import type { QTIAnimation } from './animation-instance'
import type {
  QTAnimationInterpolator,
  QTAnimationPropertyName,
  QTAnimationRepeatMode,
  QTAnimationValueType,
  QTAnimatorId,
} from './animation-types'

export interface QtAnimationAPI {
  requestFocus(
    instance: string | Ref<QTIAnimation | undefined>,
    direction?: QTFocusDirection
  ): void

  requestChildFocus(
    instance: string | Ref<QTIAnimation | undefined>,
    position: number
  ): void

  clearFocus(instance: string | Ref<QTIAnimation | undefined>): void

  requestFocusDirectly(
    instance: string | Ref<QTIAnimation | undefined>,
    direction?: QTFocusDirection
  ): void

  setVisibility(
    instance: string | Ref<QTIAnimation | undefined>,
    v: QTVisibility
  ): void

  requestRootLayout(instance: string | Ref<QTIAnimation | undefined>): void

  requestLayout(instance: string | Ref<QTIAnimation | undefined>): void

  //
  setDescendantFocusability(
    instance: string | Ref<QTIAnimation | undefined>,
    descendant: QTFocusDescendant
  ): void

  changeDescendantFocusability(
    instance: string | Ref<QTIAnimation | undefined>,
    descendant: QTDescendantFocusability
  ): void

  forceUpdateRenderNode(instance: string | Ref<QTIAnimation | undefined>): void

  setBackGroundColor(
    instance: string | Ref<QTIAnimation | undefined>,
    color: string
  ): void

  layoutViewManual(instance: string | Ref<QTIAnimation | undefined>): void

  blockRootFocus(instance: string | Ref<QTIAnimation | undefined>): void

  unBlockRootFocus(instance: string | Ref<QTIAnimation | undefined>): void

  changeAlpha(
    instance: string | Ref<QTIAnimation | undefined>,
    alpha: number
  ): void

  setScale(
    instance: string | Ref<QTIAnimation | undefined>,
    x: number,
    y: number,
    duration: number
  ): void

  setPosition(
    instance: string | Ref<QTIAnimation | undefined>,
    x: number,
    y: number,
    z: number
  ): void

  updateLayout(
    instance: string | Ref<QTIAnimation | undefined>,
    width: number,
    height: number,
    x: number,
    y: number
  ): void

  invalidate(instance: string | Ref<QTIAnimation | undefined>): void

  dispatchFunctionForTarget(
    instance: string | Ref<QTIAnimation | undefined>,
    targetName: string,
    functionTargetName: string,
    params: Array<QTNativeParams>,
    delay: number
  ): void

  setBlockFocusDirections(
    instance: string | Ref<QTIAnimation | undefined>,
    directionList: Array<QTFocusDirectionName>
  ): void

  setBlockFocusDirectionsOnFail(
    instance: string | Ref<QTIAnimation | undefined>,
    directionList: Array<QTFocusDirectionName>
  ): void

  setInitFocus(
    instance: string | Ref<QTIAnimation | undefined>,
    sid: string,
    delay?: number
  ): void

  setAutoFocus(
    instance: string | Ref<QTIAnimation | undefined>,
    sid: string,
    delay?: number
  ): void

  enabledAutofocus(
    instance: string | Ref<QTIAnimation | undefined>,
    autofocus: boolean
  ): void

  requestAutofocus(instance: string | Ref<QTIAnimation | undefined>): void

  //
  hasFocus(instance: string | Ref<QTIAnimation | undefined>): Promise<boolean>

  isFocused(instance: string | Ref<QTIAnimation | undefined>): Promise<boolean>

  getLocationOnScreen(
    instance: string | Ref<QTIAnimation | undefined>
  ): Promise<QTEventData<QTLocation>>

  getViewState(
    instance: string | Ref<QTIAnimation | undefined>
  ): Promise<QTViewState>

  getChildViewState(
    instance: string | Ref<QTIAnimation | undefined>,
    position: number
  ): Promise<QTViewState>

  setPivotX(
    instance: string | Ref<QTIAnimation | undefined>,
    pivotX: number
  ): void

  setPivotY(
    instance: string | Ref<QTIAnimation | undefined>,
    pivotY: number
  ): void

  resetPivot(instance: string | Ref<QTIAnimation | undefined>): void

  resetAnimators(instance: string | Ref<QTIAnimation | undefined>): void

  animatorSet(
    instance: string | Ref<QTIAnimation | undefined>,
    animatorId: QTAnimatorId,
    duration: number,
    listenAnimator: boolean
  ): void

  startAnimator(
    instance: string | Ref<QTIAnimation | undefined>,
    animatorId: QTAnimatorId
  ): void

  startAnimatorDelay(
    instance: string | Ref<QTIAnimation | undefined>,
    animatorId: QTAnimatorId,
    delay: number
  ): void

  pauseAnimator(
    instance: string | Ref<QTIAnimation | undefined>,
    animatorId: QTAnimatorId
  ): void

  resumeAnimator(
    instance: string | Ref<QTIAnimation | undefined>,
    animatorId: QTAnimatorId
  ): void

  cancelAnimator(
    instance: string | Ref<QTIAnimation | undefined>,
    animatorId: QTAnimatorId
  ): void

  reverseAnimator(
    instance: string | Ref<QTIAnimation | undefined>,
    animatorId: QTAnimatorId
  ): void

  play(
    instance: string | Ref<QTIAnimation | undefined>,
    animatorSetId: QTAnimatorId,
    animatorId: QTAnimatorId
  ): void

  playWith(
    instance: string | Ref<QTIAnimation | undefined>,
    animatorSetId: QTAnimatorId,
    animatorId: QTAnimatorId
  ): void

  playBefore(
    instance: string | Ref<QTIAnimation | undefined>,
    animatorSetId: QTAnimatorId,
    animatorId: QTAnimatorId
  ): void

  playAfter(
    instance: string | Ref<QTIAnimation | undefined>,
    animatorSetId: QTAnimatorId,
    animatorId: QTAnimatorId
  ): void

  playAfterDelay(
    instance: string | Ref<QTIAnimation | undefined>,
    animatorSetId: QTAnimatorId,
    delay: number
  ): void

  playSequentially1(
    instance: string | Ref<QTIAnimation | undefined>,
    animatorSetId: QTAnimatorId,
    animatorId1: QTAnimatorId
  ): void

  playSequentially2(
    instance: string | Ref<QTIAnimation | undefined>,
    animatorSetId: QTAnimatorId,
    animatorId1: QTAnimatorId,
    animatorId2: QTAnimatorId
  ): void

  playSequentially3(
    instance: string | Ref<QTIAnimation | undefined>,
    animatorSetId: QTAnimatorId,
    animatorId1: QTAnimatorId,
    animatorId2: QTAnimatorId,
    animatorId3: QTAnimatorId
  ): void

  playSequentially4(
    instance: string | Ref<QTIAnimation | undefined>,
    animatorSetId: QTAnimatorId,
    animatorId1: QTAnimatorId,
    animatorId2: QTAnimatorId,
    animatorId3: QTAnimatorId,
    animatorId4: QTAnimatorId
  ): void

  playSequentially5(
    instance: string | Ref<QTIAnimation | undefined>,
    animatorSetId: QTAnimatorId,
    animatorId1: QTAnimatorId,
    animatorId2: QTAnimatorId,
    animatorId3: QTAnimatorId,
    animatorId4: QTAnimatorId,
    animatorId5: QTAnimatorId
  ): void

  playTogether1(
    instance: string | Ref<QTIAnimation | undefined>,
    animatorSetId: QTAnimatorId,
    animatorId1: QTAnimatorId
  ): void

  playTogether2(
    instance: string | Ref<QTIAnimation | undefined>,
    animatorSetId: QTAnimatorId,
    animatorId1: QTAnimatorId,
    animatorId2: QTAnimatorId
  ): void

  playTogether3(
    instance: string | Ref<QTIAnimation | undefined>,
    animatorSetId: QTAnimatorId,
    animatorId1: QTAnimatorId,
    animatorId2: QTAnimatorId,
    animatorId3: QTAnimatorId
  ): void

  playTogether4(
    instance: string | Ref<QTIAnimation | undefined>,
    animatorSetId: QTAnimatorId,
    animatorId1: QTAnimatorId,
    animatorId2: QTAnimatorId,
    animatorId3: QTAnimatorId,
    animatorId4: QTAnimatorId
  ): void

  playTogether5(
    instance: string | Ref<QTIAnimation | undefined>,
    animatorSetId: QTAnimatorId,
    animatorId1: QTAnimatorId,
    animatorId2: QTAnimatorId,
    animatorId3: QTAnimatorId,
    animatorId4: QTAnimatorId,
    animatorId5: QTAnimatorId
  ): void

  objectAnimator(
    instance: string | Ref<QTIAnimation | undefined>,
    id: QTAnimatorId,
    valueType: QTAnimationValueType,
    propertyName: QTAnimationPropertyName,
    duration: number,
    repeatMode: QTAnimationRepeatMode,
    repeatCount: number,
    listenAnimator: boolean,
    listenAnimatorValue: boolean,
    interpolator?: QTAnimationInterpolator
  ): void

  objectAnimator1(
    instance: string | Ref<QTIAnimation | undefined>,
    id: QTAnimatorId,
    valueType: QTAnimationValueType,
    propertyName: QTAnimationPropertyName,
    value1: number,
    duration: number,
    repeatMode: QTAnimationRepeatMode,
    repeatCount: number,
    listenAnimator: boolean,
    listenAnimatorValue: boolean,
    interpolator?: QTAnimationInterpolator
  ): void

  objectAnimator2(
    instance: string | Ref<QTIAnimation | undefined>,
    id: QTAnimatorId,
    valueType: QTAnimationValueType,
    propertyName: QTAnimationPropertyName,
    value1: number,
    value2: number,
    duration: number,
    repeatMode: QTAnimationRepeatMode,
    repeatCount: number,
    listenAnimator: boolean,
    listenAnimatorValue: boolean,
    interpolator?: QTAnimationInterpolator
  ): void

  objectAnimator3(
    instance: string | Ref<QTIAnimation | undefined>,
    id: QTAnimatorId,
    valueType: QTAnimationValueType,
    propertyName: QTAnimationPropertyName,
    value1: number,
    value2: number,
    value3: number,
    duration: number,
    repeatMode: QTAnimationRepeatMode,
    repeatCount: number,
    listenAnimator: boolean,
    listenAnimatorValue: boolean,
    interpolator?: QTAnimationInterpolator
  ): void

  objectAnimator4(
    instance: string | Ref<QTIAnimation | undefined>,
    id: QTAnimatorId,
    valueType: QTAnimationValueType,
    propertyName: QTAnimationPropertyName,
    value1: number,
    value2: number,
    value3: number,
    value4: number,
    duration: number,
    repeatMode: QTAnimationRepeatMode,
    repeatCount: number,
    listenAnimator: boolean,
    listenAnimatorValue: boolean,
    interpolator?: QTAnimationInterpolator
  ): void

  objectAnimator5(
    instance: string | Ref<QTIAnimation | undefined>,
    id: QTAnimatorId,
    valueType: QTAnimationValueType,
    propertyName: QTAnimationPropertyName,
    value1: number,
    value2: number,
    value3: number,
    value4: number,
    value5: number,
    duration: number,
    repeatMode: QTAnimationRepeatMode,
    repeatCount: number,
    listenAnimator: boolean,
    listenAnimatorValue: boolean,
    interpolator?: QTAnimationInterpolator
  ): void

  objectAnimator6(
    instance: string | Ref<QTIAnimation | undefined>,
    id: QTAnimatorId,
    valueType: QTAnimationValueType,
    propertyName: QTAnimationPropertyName,
    value1: number,
    value2: number,
    value3: number,
    value4: number,
    value5: number,
    value6: number,
    duration: number,
    repeatMode: QTAnimationRepeatMode,
    repeatCount: number,
    listenAnimator: boolean,
    listenAnimatorValue: boolean,
    interpolator?: QTAnimationInterpolator
  ): void

  objectAnimator7(
    instance: string | Ref<QTIAnimation | undefined>,
    id: QTAnimatorId,
    valueType: QTAnimationValueType,
    propertyName: QTAnimationPropertyName,
    value1: number,
    value2: number,
    value3: number,
    value4: number,
    value5: number,
    value6: number,
    value7: number,
    duration: number,
    repeatMode: QTAnimationRepeatMode,
    repeatCount: number,
    listenAnimator: boolean,
    listenAnimatorValue: boolean,
    interpolator?: QTAnimationInterpolator
  ): void

  objectAnimator8(
    instance: string | Ref<QTIAnimation | undefined>,
    id: QTAnimatorId,
    valueType: QTAnimationValueType,
    propertyName: QTAnimationPropertyName,
    value1: number,
    value2: number,
    value3: number,
    value4: number,
    value5: number,
    value6: number,
    value7: number,
    value8: number,
    duration: number,
    repeatMode: QTAnimationRepeatMode,
    repeatCount: number,
    listenAnimator: boolean,
    listenAnimatorValue: boolean,
    interpolator?: QTAnimationInterpolator
  ): void

  objectAnimator9(
    instance: string | Ref<QTIAnimation | undefined>,
    id: QTAnimatorId,
    valueType: QTAnimationValueType,
    propertyName: QTAnimationPropertyName,
    value1: number,
    value2: number,
    value3: number,
    value4: number,
    value5: number,
    value6: number,
    value7: number,
    value8: number,
    value9: number,
    duration: number,
    repeatMode: QTAnimationRepeatMode,
    repeatCount: number,
    listenAnimator: boolean,
    listenAnimatorValue: boolean,
    interpolator?: QTAnimationInterpolator
  ): void

  objectAnimator10(
    instance: string | Ref<QTIAnimation | undefined>,
    id: QTAnimatorId,
    valueType: QTAnimationValueType,
    propertyName: QTAnimationPropertyName,
    value1: number,
    value2: number,
    value3: number,
    value4: number,
    value5: number,
    value6: number,
    value7: number,
    value8: number,
    value9: number,
    value10: number,
    duration: number,
    repeatMode: QTAnimationRepeatMode,
    repeatCount: number,
    listenAnimator: boolean,
    listenAnimatorValue: boolean,
    interpolator?: QTAnimationInterpolator
  ): void
}

export function createQtAnimationAPI(): QtAnimationAPI {
  function requestFocus(
    instance: string | Ref<QTIAnimation | undefined>,
    direction?: QTFocusDirection
  ) {
    if (isString(instance)) {
      callUIFunction(instance, 'requestFocus', [direction])
    } else if (isRef(instance)) {
      instance.value?.requestFocus(direction)
    }
  }

  function requestChildFocus(
    instance: string | Ref<QTIAnimation | undefined>,
    position: number
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'requestChildFocus', [position])
    } else if (isRef(instance)) {
      instance.value?.requestChildFocus(position)
    }
  }

  function clearFocus(instance: string | Ref<QTIAnimation | undefined>) {
    if (isString(instance)) {
      callUIFunction(instance, 'clearFocus', [])
    } else if (isRef(instance)) {
      instance.value?.clearFocus()
    }
  }

  function requestFocusDirectly(
    instance: string | Ref<QTIAnimation | undefined>,
    direction?: QTFocusDirection
  ) {
    if (isString(instance)) {
      callUIFunction(instance, 'requestFocusDirectly', [direction])
    } else if (isRef(instance)) {
      instance.value?.requestFocusDirectly(direction)
    }
  }

  function setVisibility(
    instance: string | Ref<QTIAnimation | undefined>,
    v: QTVisibility
  ) {
    if (isString(instance)) {
      callUIFunction(instance, 'changeVisibility', [v])
    } else if (isRef(instance)) {
      instance.value?.setVisibility(v)
    }
  }

  function requestRootLayout(instance: string | Ref<QTIAnimation | undefined>) {
    if (isString(instance)) {
      callUIFunction(instance, 'requestRootLayout', [])
    } else if (isRef(instance)) {
      instance.value?.requestRootLayout()
    }
  }

  function requestLayout(instance: string | Ref<QTIAnimation | undefined>) {
    if (isString(instance)) {
      callUIFunction(instance, 'requestLayout', [])
    } else if (isRef(instance)) {
      instance.value?.requestLayout()
    }
  }

  function setDescendantFocusability(
    instance: string | Ref<QTIAnimation | undefined>,
    descendant: QTFocusDescendant
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'setDescendantFocusability', [descendant])
    } else if (isRef(instance)) {
      instance.value?.setDescendantFocusability(descendant)
    }
  }

  function changeDescendantFocusability(
    instance: string | Ref<QTIAnimation | undefined>,
    descendant: QTDescendantFocusability
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'changeDescendantFocusability', [descendant])
    } else if (isRef(instance)) {
      instance.value?.changeDescendantFocusability(descendant)
    }
  }

  function forceUpdateRenderNode(
    instance: string | Ref<QTIAnimation | undefined>
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'forceUpdateRenderNode', [])
    } else if (isRef(instance)) {
      instance.value?.forceUpdateRenderNode()
    }
  }

  function setBackGroundColor(
    instance: string | Ref<QTIAnimation | undefined>,
    color: string
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'setBackGroundColor', [color])
    } else if (isRef(instance)) {
      instance.value?.setBackGroundColor(color)
    }
  }

  function layoutViewManual(
    instance: string | Ref<QTIAnimation | undefined>
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'layoutViewManual', [])
    } else if (isRef(instance)) {
      instance.value?.layoutViewManual()
    }
  }

  function blockRootFocus(
    instance: string | Ref<QTIAnimation | undefined>
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'blockRootFocus', [])
    } else if (isRef(instance)) {
      instance.value?.blockRootFocus()
    }
  }

  function unBlockRootFocus(
    instance: string | Ref<QTIAnimation | undefined>
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'unBlockRootFocus', [])
    } else if (isRef(instance)) {
      instance.value?.unBlockRootFocus()
    }
  }

  function changeAlpha(
    instance: string | Ref<QTIAnimation | undefined>,
    alpha: number
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'changeAlpha', [alpha])
    } else if (isRef(instance)) {
      instance.value?.changeAlpha(alpha)
    }
  }

  function setScale(
    instance: string | Ref<QTIAnimation | undefined>,
    x: number,
    y: number,
    duration: number
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'setScale', [x, y, duration])
    } else if (isRef(instance)) {
      instance.value?.setScale(x, y, duration)
    }
  }

  function setPosition(
    instance: string | Ref<QTIAnimation | undefined>,
    x: number,
    y: number,
    z: number
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'setPosition', [x, y, z])
    } else if (isRef(instance)) {
      instance.value?.setPosition(x, y, z)
    }
  }

  function updateLayout(
    instance: string | Ref<QTIAnimation | undefined>,
    width: number,
    height: number,
    x: number,
    y: number
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'updateLayout', [width, height, x, y])
    } else if (isRef(instance)) {
      instance.value?.updateLayout(width, height, x, y)
    }
  }

  function invalidate(instance: string | Ref<QTIAnimation | undefined>): void {
    if (isString(instance)) {
      callUIFunction(instance, 'invalidate', [])
    } else if (isRef(instance)) {
      instance.value?.invalidate()
    }
  }

  function dispatchFunctionForTarget(
    instance: string | Ref<QTIAnimation | undefined>,
    targetName: string,
    functionTargetName: string,
    params: Array<QTNativeParams>,
    delay: number
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'dispatchFunctionForTarget', [
        targetName,
        functionTargetName,
        params,
        delay,
      ])
    } else if (isRef(instance)) {
      instance.value?.dispatchFunctionForTarget(
        targetName,
        functionTargetName,
        params,
        delay
      )
    }
  }

  function setBlockFocusDirections(
    instance: string | Ref<QTIAnimation | undefined>,
    directionList: Array<QTFocusDirectionName>
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'setBlockFocusDirections', [directionList])
    } else if (isRef(instance)) {
      instance.value?.setBlockFocusDirections(directionList)
    }
  }

  function setBlockFocusDirectionsOnFail(
    instance: string | Ref<QTIAnimation | undefined>,
    directionList: Array<QTFocusDirectionName>
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'setBlockFocusDirectionsOnFail', [directionList])
    } else if (isRef(instance)) {
      instance.value?.setBlockFocusDirectionsOnFail(directionList)
    }
  }

  function setInitFocus(
    instance: string | Ref<QTIAnimation | undefined>,
    sid: string,
    delay?: number
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'setInitFocus', [sid, delay])
    } else if (isRef(instance)) {
      instance.value?.setInitFocus(sid, delay)
    }
  }

  function setAutoFocus(
    instance: string | Ref<QTIAnimation | undefined>,
    sid: string,
    delay?: number
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'setAutoFocus', [sid, delay])
    } else if (isRef(instance)) {
      instance.value?.setAutoFocus(sid, delay)
    }
  }

  function enabledAutofocus(
    instance: string | Ref<QTIAnimation | undefined>,
    autofocus: boolean
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'setAutoFocus', [autofocus])
    } else if (isRef(instance)) {
      instance.value?.enabledAutofocus(autofocus)
    }
  }

  function requestAutofocus(
    instance: string | Ref<QTIAnimation | undefined>
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'requestAutofocus', [])
    } else if (isRef(instance)) {
      instance.value?.requestAutofocus()
    }
  }

  function hasFocus(
    instance: string | Ref<QTIAnimation | undefined>
  ): Promise<boolean> {
    if (isString(instance)) {
      return callUIFunctionWithPromise<boolean>(instance, 'hasFocus', [])
    } else if (isRef(instance) && instance.value) {
      return instance.value!.hasFocus()
    } else {
      return Promise.reject()
    }
  }

  function isFocused(
    instance: string | Ref<QTIAnimation | undefined>
  ): Promise<boolean> {
    if (isString(instance)) {
      return callUIFunctionWithPromise<boolean>(instance, 'isFocused', [])
    } else if (isRef(instance) && instance.value) {
      return instance.value!.isFocused()
    } else {
      return Promise.reject()
    }
  }

  function getLocationOnScreen(
    instance: string | Ref<QTIAnimation | undefined>
  ): Promise<QTEventData<QTLocation>> {
    if (isString(instance)) {
      return callUIFunctionWithPromise<QTEventData<QTLocation>>(
        instance,
        'getLocationOnScreen',
        []
      )
    } else if (isRef(instance) && instance.value) {
      return instance.value!.getLocationOnScreen()
    } else {
      return Promise.reject()
    }
  }

  function getViewState(
    instance: string | Ref<QTIAnimation | undefined>
  ): Promise<QTViewState> {
    if (isString(instance)) {
      return callUIFunctionWithPromise<QTViewState>(
        instance,
        'getViewState',
        []
      )
    } else if (isRef(instance) && instance.value) {
      return instance.value!.getViewState()
    } else {
      return Promise.reject()
    }
  }

  function getChildViewState(
    instance: string | Ref<QTIAnimation | undefined>,
    position: number
  ): Promise<QTViewState> {
    if (isString(instance)) {
      return callUIFunctionWithPromise<QTViewState>(
        instance,
        'getChildViewState',
        []
      )
    } else if (isRef(instance) && instance.value) {
      return instance.value!.getChildViewState(position)
    } else {
      return Promise.reject()
    }
  }

  function setPivotX(
    instance: string | Ref<QTIAnimation | undefined>,
    pivotX: number
  ) {
    if (isString(instance)) {
      callUIFunction(instance, 'setPivotX', [pivotX])
    } else if (isRef(instance)) {
      instance.value?.setPivotX(pivotX)
    }
  }

  function setPivotY(
    instance: string | Ref<QTIAnimation | undefined>,
    pivotY: number
  ) {
    if (isString(instance)) {
      callUIFunction(instance, 'setPivotY', [pivotY])
    } else if (isRef(instance)) {
      instance.value?.setPivotY(pivotY)
    }
  }

  function resetPivot(instance: string | Ref<QTIAnimation | undefined>) {
    if (isString(instance)) {
      callUIFunction(instance, 'resetPivot', [])
    } else if (isRef(instance)) {
      instance.value?.resetPivot()
    }
  }

  function resetAnimators(instance: string | Ref<QTIAnimation | undefined>) {
    if (isString(instance)) {
      callUIFunction(instance, 'resetAnimators', [])
    } else if (isRef(instance)) {
      instance.value?.resetAnimators()
    }
  }

  function animatorSet(
    instance: string | Ref<QTIAnimation | undefined>,
    animatorId: QTAnimatorId,
    duration: number,
    listenAnimator: boolean
  ) {
    if (isString(instance)) {
      callUIFunction(instance, 'animatorSet', [
        animatorId,
        duration,
        listenAnimator,
      ])
    } else if (isRef(instance)) {
      instance.value?.animatorSet(animatorId, duration, listenAnimator)
    }
  }

  function startAnimator(
    instance: string | Ref<QTIAnimation | undefined>,
    animatorId: QTAnimatorId
  ) {
    if (isString(instance)) {
      callUIFunction(instance, 'startAnimator', [animatorId])
    } else if (isRef(instance)) {
      instance.value?.startAnimator(animatorId)
    }
  }

  function startAnimatorDelay(
    instance: string | Ref<QTIAnimation | undefined>,
    animatorId: QTAnimatorId,
    delay: number
  ) {
    if (isString(instance)) {
      callUIFunction(instance, 'startAnimatorDelay', [animatorId, delay])
    } else if (isRef(instance)) {
      instance.value?.startAnimatorDelay(animatorId, delay)
    }
  }

  function pauseAnimator(
    instance: string | Ref<QTIAnimation | undefined>,
    animatorId: QTAnimatorId
  ) {
    if (isString(instance)) {
      callUIFunction(instance, 'pauseAnimator', [animatorId])
    } else if (isRef(instance)) {
      instance.value?.pauseAnimator(animatorId)
    }
  }

  function resumeAnimator(
    instance: string | Ref<QTIAnimation | undefined>,
    animatorId: QTAnimatorId
  ) {
    if (isString(instance)) {
      callUIFunction(instance, 'resumeAnimator', [animatorId])
    } else if (isRef(instance)) {
      instance.value?.resumeAnimator(animatorId)
    }
  }

  function cancelAnimator(
    instance: string | Ref<QTIAnimation | undefined>,
    animatorId: QTAnimatorId
  ) {
    if (isString(instance)) {
      callUIFunction(instance, 'cancelAnimator', [animatorId])
    } else if (isRef(instance)) {
      instance.value?.cancelAnimator(animatorId)
    }
  }

  function reverseAnimator(
    instance: string | Ref<QTIAnimation | undefined>,
    animatorId: QTAnimatorId
  ) {
    if (isString(instance)) {
      callUIFunction(instance, 'reverseAnimator', [animatorId])
    } else if (isRef(instance)) {
      instance.value?.reverseAnimator(animatorId)
    }
  }

  function play(
    instance: string | Ref<QTIAnimation | undefined>,
    animatorSetId: QTAnimatorId,
    animatorId: QTAnimatorId
  ) {
    if (isString(instance)) {
      callUIFunction(instance, 'play', [animatorSetId, animatorId])
    } else if (isRef(instance)) {
      instance.value?.play(animatorSetId, animatorId)
    }
  }

  function playWith(
    instance: string | Ref<QTIAnimation | undefined>,
    animatorSetId: QTAnimatorId,
    animatorId: QTAnimatorId
  ) {
    if (isString(instance)) {
      callUIFunction(instance, 'playWith', [animatorSetId, animatorId])
    } else if (isRef(instance)) {
      instance.value?.playWith(animatorSetId, animatorId)
    }
  }

  function playBefore(
    instance: string | Ref<QTIAnimation | undefined>,
    animatorSetId: QTAnimatorId,
    animatorId: QTAnimatorId
  ) {
    if (isString(instance)) {
      callUIFunction(instance, 'playBefore', [animatorSetId, animatorId])
    } else if (isRef(instance)) {
      instance.value?.playBefore(animatorSetId, animatorId)
    }
  }

  function playAfter(
    instance: string | Ref<QTIAnimation | undefined>,
    animatorSetId: QTAnimatorId,
    animatorId: QTAnimatorId
  ) {
    if (isString(instance)) {
      callUIFunction(instance, 'playAfter', [animatorSetId, animatorId])
    } else if (isRef(instance)) {
      instance.value?.playAfter(animatorSetId, animatorId)
    }
  }

  function playAfterDelay(
    instance: string | Ref<QTIAnimation | undefined>,
    animatorSetId: QTAnimatorId,
    delay: number
  ) {
    if (isString(instance)) {
      callUIFunction(instance, 'playAfterDelay', [animatorSetId, delay])
    } else if (isRef(instance)) {
      instance.value?.playAfterDelay(animatorSetId, delay)
    }
  }

  function playSequentially1(
    instance: string | Ref<QTIAnimation | undefined>,
    animatorSetId: QTAnimatorId,
    animatorId1: QTAnimatorId
  ) {
    if (isString(instance)) {
      callUIFunction(instance, 'playSequentially1', [
        animatorSetId,
        animatorId1,
      ])
    } else if (isRef(instance)) {
      instance.value?.playSequentially1(animatorSetId, animatorId1)
    }
  }

  function playSequentially2(
    instance: string | Ref<QTIAnimation | undefined>,
    animatorSetId: QTAnimatorId,
    animatorId1: QTAnimatorId,
    animatorId2: QTAnimatorId
  ) {
    if (isString(instance)) {
      callUIFunction(instance, 'playSequentially2', [
        animatorSetId,
        animatorId1,
        animatorId2,
      ])
    } else if (isRef(instance)) {
      instance.value?.playSequentially2(animatorSetId, animatorId1, animatorId2)
    }
  }

  function playSequentially3(
    instance: string | Ref<QTIAnimation | undefined>,
    animatorSetId: QTAnimatorId,
    animatorId1: QTAnimatorId,
    animatorId2: QTAnimatorId,
    animatorId3: QTAnimatorId
  ) {
    if (isString(instance)) {
      callUIFunction(instance, 'playSequentially3', [
        animatorSetId,
        animatorId1,
        animatorId2,
        animatorId3,
      ])
    } else if (isRef(instance)) {
      instance.value?.playSequentially3(
        animatorSetId,
        animatorId1,
        animatorId2,
        animatorId3
      )
    }
  }

  function playSequentially4(
    instance: string | Ref<QTIAnimation | undefined>,
    animatorSetId: QTAnimatorId,
    animatorId1: QTAnimatorId,
    animatorId2: QTAnimatorId,
    animatorId3: QTAnimatorId,
    animatorId4: QTAnimatorId
  ) {
    if (isString(instance)) {
      callUIFunction(instance, 'playSequentially4', [
        animatorSetId,
        animatorId1,
        animatorId2,
        animatorId3,
        animatorId4,
      ])
    } else if (isRef(instance)) {
      instance.value?.playSequentially4(
        animatorSetId,
        animatorId1,
        animatorId2,
        animatorId3,
        animatorId4
      )
    }
  }

  function playSequentially5(
    instance: string | Ref<QTIAnimation | undefined>,
    animatorSetId: QTAnimatorId,
    animatorId1: QTAnimatorId,
    animatorId2: QTAnimatorId,
    animatorId3: QTAnimatorId,
    animatorId4: QTAnimatorId,
    animatorId5: QTAnimatorId
  ) {
    if (isString(instance)) {
      callUIFunction(instance, 'playSequentially5', [
        animatorSetId,
        animatorId1,
        animatorId2,
        animatorId3,
        animatorId4,
        animatorId5,
      ])
    } else if (isRef(instance)) {
      instance.value?.playSequentially5(
        animatorSetId,
        animatorId1,
        animatorId2,
        animatorId3,
        animatorId4,
        animatorId5
      )
    }
  }

  function playTogether1(
    instance: string | Ref<QTIAnimation | undefined>,
    animatorSetId: QTAnimatorId,
    animatorId1: QTAnimatorId
  ) {
    if (isString(instance)) {
      callUIFunction(instance, 'playTogether1', [animatorSetId, animatorId1])
    } else if (isRef(instance)) {
      instance.value?.playTogether1(animatorSetId, animatorId1)
    }
  }

  function playTogether2(
    instance: string | Ref<QTIAnimation | undefined>,
    animatorSetId: QTAnimatorId,
    animatorId1: QTAnimatorId,
    animatorId2: QTAnimatorId
  ) {
    if (isString(instance)) {
      callUIFunction(instance, 'playTogether2', [
        animatorSetId,
        animatorId1,
        animatorId2,
      ])
    } else if (isRef(instance)) {
      instance.value?.playTogether2(animatorSetId, animatorId1, animatorId2)
    }
  }

  function playTogether3(
    instance: string | Ref<QTIAnimation | undefined>,
    animatorSetId: QTAnimatorId,
    animatorId1: QTAnimatorId,
    animatorId2: QTAnimatorId,
    animatorId3: QTAnimatorId
  ) {
    if (isString(instance)) {
      callUIFunction(instance, 'playTogether3', [
        animatorSetId,
        animatorId1,
        animatorId2,
        animatorId3,
      ])
    } else if (isRef(instance)) {
      instance.value?.playTogether3(
        animatorSetId,
        animatorId1,
        animatorId2,
        animatorId3
      )
    }
  }

  function playTogether4(
    instance: string | Ref<QTIAnimation | undefined>,
    animatorSetId: QTAnimatorId,
    animatorId1: QTAnimatorId,
    animatorId2: QTAnimatorId,
    animatorId3: QTAnimatorId,
    animatorId4: QTAnimatorId
  ) {
    if (isString(instance)) {
      callUIFunction(instance, 'playTogether4', [
        animatorSetId,
        animatorId1,
        animatorId2,
        animatorId3,
        animatorId4,
      ])
    } else if (isRef(instance)) {
      instance.value?.playTogether4(
        animatorSetId,
        animatorId1,
        animatorId2,
        animatorId3,
        animatorId4
      )
    }
  }

  function playTogether5(
    instance: string | Ref<QTIAnimation | undefined>,
    animatorSetId: QTAnimatorId,
    animatorId1: QTAnimatorId,
    animatorId2: QTAnimatorId,
    animatorId3: QTAnimatorId,
    animatorId4: QTAnimatorId,
    animatorId5: QTAnimatorId
  ) {
    if (isString(instance)) {
      callUIFunction(instance, 'playTogether5', [
        animatorSetId,
        animatorId1,
        animatorId2,
        animatorId3,
        animatorId4,
        animatorId5,
      ])
    } else if (isRef(instance)) {
      instance.value?.playTogether5(
        animatorSetId,
        animatorId1,
        animatorId2,
        animatorId3,
        animatorId4,
        animatorId5
      )
    }
  }

  function objectAnimator(
    instance: string | Ref<QTIAnimation | undefined>,
    id: QTAnimatorId,
    valueType: QTAnimationValueType,
    propertyName: QTAnimationPropertyName,
    duration: number,
    repeatMode: QTAnimationRepeatMode,
    repeatCount: number,
    listenAnimator: boolean,
    listenAnimatorValue: boolean,
    interpolator?: QTAnimationInterpolator
  ) {
    if (isString(instance)) {
      callUIFunction(instance, 'objectAnimator', [
        id,
        valueType,
        propertyName,
        duration,
        repeatMode,
        repeatCount,
        listenAnimator,
        listenAnimatorValue,
        interpolator,
      ])
    } else if (isRef(instance)) {
      instance.value?.objectAnimator(
        id,
        valueType,
        propertyName,
        duration,
        repeatMode,
        repeatCount,
        listenAnimator,
        listenAnimatorValue,
        interpolator
      )
    }
  }

  function objectAnimator1(
    instance: string | Ref<QTIAnimation | undefined>,
    id: QTAnimatorId,
    valueType: QTAnimationValueType,
    propertyName: QTAnimationPropertyName,
    value1: number,
    duration: number,
    repeatMode: QTAnimationRepeatMode,
    repeatCount: number,
    listenAnimator: boolean,
    listenAnimatorValue: boolean,
    interpolator?: QTAnimationInterpolator
  ) {
    if (isString(instance)) {
      callUIFunction(instance, 'objectAnimator1', [
        id,
        valueType,
        propertyName,
        value1,
        duration,
        repeatMode,
        repeatCount,
        listenAnimator,
        listenAnimatorValue,
        interpolator,
      ])
    } else if (isRef(instance)) {
      instance.value?.objectAnimator1(
        id,
        valueType,
        propertyName,
        value1,
        duration,
        repeatMode,
        repeatCount,
        listenAnimator,
        listenAnimatorValue,
        interpolator
      )
    }
  }

  function objectAnimator2(
    instance: string | Ref<QTIAnimation | undefined>,
    id: QTAnimatorId,
    valueType: QTAnimationValueType,
    propertyName: QTAnimationPropertyName,
    value1: number,
    value2: number,
    duration: number,
    repeatMode: QTAnimationRepeatMode,
    repeatCount: number,
    listenAnimator: boolean,
    listenAnimatorValue: boolean,
    interpolator?: QTAnimationInterpolator
  ) {
    if (isString(instance)) {
      callUIFunction(instance, 'objectAnimator2', [
        id,
        valueType,
        propertyName,
        value1,
        value2,
        duration,
        repeatMode,
        repeatCount,
        listenAnimator,
        listenAnimatorValue,
        interpolator,
      ])
    } else if (isRef(instance)) {
      instance.value?.objectAnimator2(
        id,
        valueType,
        propertyName,
        value1,
        value2,
        duration,
        repeatMode,
        repeatCount,
        listenAnimator,
        listenAnimatorValue,
        interpolator
      )
    }
  }

  function objectAnimator3(
    instance: string | Ref<QTIAnimation | undefined>,
    id: QTAnimatorId,
    valueType: QTAnimationValueType,
    propertyName: QTAnimationPropertyName,
    value1: number,
    value2: number,
    value3: number,
    duration: number,
    repeatMode: QTAnimationRepeatMode,
    repeatCount: number,
    listenAnimator: boolean,
    listenAnimatorValue: boolean,
    interpolator?: QTAnimationInterpolator
  ) {
    if (isString(instance)) {
      callUIFunction(instance, 'objectAnimator3', [
        id,
        valueType,
        propertyName,
        value1,
        value2,
        value3,
        duration,
        repeatMode,
        repeatCount,
        listenAnimator,
        listenAnimatorValue,
        interpolator,
      ])
    } else if (isRef(instance)) {
      instance.value?.objectAnimator3(
        id,
        valueType,
        propertyName,
        value1,
        value2,
        value3,
        duration,
        repeatMode,
        repeatCount,
        listenAnimator,
        listenAnimatorValue,
        interpolator
      )
    }
  }

  function objectAnimator4(
    instance: string | Ref<QTIAnimation | undefined>,
    id: QTAnimatorId,
    valueType: QTAnimationValueType,
    propertyName: QTAnimationPropertyName,
    value1: number,
    value2: number,
    value3: number,
    value4: number,
    duration: number,
    repeatMode: QTAnimationRepeatMode,
    repeatCount: number,
    listenAnimator: boolean,
    listenAnimatorValue: boolean,
    interpolator?: QTAnimationInterpolator
  ) {
    if (isString(instance)) {
      callUIFunction(instance, 'objectAnimator4', [
        id,
        valueType,
        propertyName,
        value1,
        value2,
        value3,
        value4,
        duration,
        repeatMode,
        repeatCount,
        listenAnimator,
        listenAnimatorValue,
        interpolator,
      ])
    } else if (isRef(instance)) {
      instance.value?.objectAnimator4(
        id,
        valueType,
        propertyName,
        value1,
        value2,
        value3,
        value4,
        duration,
        repeatMode,
        repeatCount,
        listenAnimator,
        listenAnimatorValue,
        interpolator
      )
    }
  }

  function objectAnimator5(
    instance: string | Ref<QTIAnimation | undefined>,
    id: QTAnimatorId,
    valueType: QTAnimationValueType,
    propertyName: QTAnimationPropertyName,
    value1: number,
    value2: number,
    value3: number,
    value4: number,
    value5: number,
    duration: number,
    repeatMode: QTAnimationRepeatMode,
    repeatCount: number,
    listenAnimator: boolean,
    listenAnimatorValue: boolean,
    interpolator?: QTAnimationInterpolator
  ) {
    if (isString(instance)) {
      callUIFunction(instance, 'objectAnimator5', [
        id,
        valueType,
        propertyName,
        value1,
        value2,
        value3,
        value4,
        value5,
        duration,
        repeatMode,
        repeatCount,
        listenAnimator,
        listenAnimatorValue,
        interpolator,
      ])
    } else if (isRef(instance)) {
      instance.value?.objectAnimator5(
        id,
        valueType,
        propertyName,
        value1,
        value2,
        value3,
        value4,
        value5,
        duration,
        repeatMode,
        repeatCount,
        listenAnimator,
        listenAnimatorValue,
        interpolator
      )
    }
  }

  function objectAnimator6(
    instance: string | Ref<QTIAnimation | undefined>,
    id: QTAnimatorId,
    valueType: QTAnimationValueType,
    propertyName: QTAnimationPropertyName,
    value1: number,
    value2: number,
    value3: number,
    value4: number,
    value5: number,
    value6: number,
    duration: number,
    repeatMode: QTAnimationRepeatMode,
    repeatCount: number,
    listenAnimator: boolean,
    listenAnimatorValue: boolean,
    interpolator?: QTAnimationInterpolator
  ) {
    if (isString(instance)) {
      callUIFunction(instance, 'objectAnimator6', [
        id,
        valueType,
        propertyName,
        value1,
        value2,
        value3,
        value4,
        value5,
        value6,
        duration,
        repeatMode,
        repeatCount,
        listenAnimator,
        listenAnimatorValue,
        interpolator,
      ])
    } else if (isRef(instance)) {
      instance.value?.objectAnimator6(
        id,
        valueType,
        propertyName,
        value1,
        value2,
        value3,
        value4,
        value5,
        value6,
        duration,
        repeatMode,
        repeatCount,
        listenAnimator,
        listenAnimatorValue,
        interpolator
      )
    }
  }

  function objectAnimator7(
    instance: string | Ref<QTIAnimation | undefined>,
    id: QTAnimatorId,
    valueType: QTAnimationValueType,
    propertyName: QTAnimationPropertyName,
    value1: number,
    value2: number,
    value3: number,
    value4: number,
    value5: number,
    value6: number,
    value7: number,
    duration: number,
    repeatMode: QTAnimationRepeatMode,
    repeatCount: number,
    listenAnimator: boolean,
    listenAnimatorValue: boolean,
    interpolator?: QTAnimationInterpolator
  ) {
    if (isString(instance)) {
      callUIFunction(instance, 'objectAnimator7', [
        id,
        valueType,
        propertyName,
        value1,
        value2,
        value3,
        value4,
        value5,
        value6,
        value7,
        duration,
        repeatMode,
        repeatCount,
        listenAnimator,
        listenAnimatorValue,
        interpolator,
      ])
    } else if (isRef(instance)) {
      instance.value?.objectAnimator7(
        id,
        valueType,
        propertyName,
        value1,
        value2,
        value3,
        value4,
        value5,
        value6,
        value7,
        duration,
        repeatMode,
        repeatCount,
        listenAnimator,
        listenAnimatorValue,
        interpolator
      )
    }
  }

  function objectAnimator8(
    instance: string | Ref<QTIAnimation | undefined>,
    id: QTAnimatorId,
    valueType: QTAnimationValueType,
    propertyName: QTAnimationPropertyName,
    value1: number,
    value2: number,
    value3: number,
    value4: number,
    value5: number,
    value6: number,
    value7: number,
    value8: number,
    duration: number,
    repeatMode: QTAnimationRepeatMode,
    repeatCount: number,
    listenAnimator: boolean,
    listenAnimatorValue: boolean,
    interpolator?: QTAnimationInterpolator
  ) {
    if (isString(instance)) {
      callUIFunction(instance, 'objectAnimator8', [
        id,
        valueType,
        propertyName,
        value1,
        value2,
        value3,
        value4,
        value5,
        value6,
        value7,
        value8,
        duration,
        repeatMode,
        repeatCount,
        listenAnimator,
        listenAnimatorValue,
        interpolator,
      ])
    } else if (isRef(instance)) {
      instance.value?.objectAnimator8(
        id,
        valueType,
        propertyName,
        value1,
        value2,
        value3,
        value4,
        value5,
        value6,
        value7,
        value8,
        duration,
        repeatMode,
        repeatCount,
        listenAnimator,
        listenAnimatorValue,
        interpolator
      )
    }
  }

  function objectAnimator9(
    instance: string | Ref<QTIAnimation | undefined>,
    id: QTAnimatorId,
    valueType: QTAnimationValueType,
    propertyName: QTAnimationPropertyName,
    value1: number,
    value2: number,
    value3: number,
    value4: number,
    value5: number,
    value6: number,
    value7: number,
    value8: number,
    value9: number,
    duration: number,
    repeatMode: QTAnimationRepeatMode,
    repeatCount: number,
    listenAnimator: boolean,
    listenAnimatorValue: boolean,
    interpolator?: QTAnimationInterpolator
  ) {
    if (isString(instance)) {
      callUIFunction(instance, 'objectAnimator9', [
        id,
        valueType,
        propertyName,
        value1,
        value2,
        value3,
        value4,
        value5,
        value6,
        value7,
        value8,
        value9,
        duration,
        repeatMode,
        repeatCount,
        listenAnimator,
        listenAnimatorValue,
        interpolator,
      ])
    } else if (isRef(instance)) {
      instance.value?.objectAnimator9(
        id,
        valueType,
        propertyName,
        value1,
        value2,
        value3,
        value4,
        value5,
        value6,
        value7,
        value8,
        value9,
        duration,
        repeatMode,
        repeatCount,
        listenAnimator,
        listenAnimatorValue,
        interpolator
      )
    }
  }

  function objectAnimator10(
    instance: string | Ref<QTIAnimation | undefined>,
    id: QTAnimatorId,
    valueType: QTAnimationValueType,
    propertyName: QTAnimationPropertyName,
    value1: number,
    value2: number,
    value3: number,
    value4: number,
    value5: number,
    value6: number,
    value7: number,
    value8: number,
    value9: number,
    value10: number,
    duration: number,
    repeatMode: QTAnimationRepeatMode,
    repeatCount: number,
    listenAnimator: boolean,
    listenAnimatorValue: boolean,
    interpolator?: QTAnimationInterpolator
  ) {
    if (isString(instance)) {
      callUIFunction(instance, 'objectAnimator10', [
        id,
        valueType,
        propertyName,
        value1,
        value2,
        value3,
        value4,
        value5,
        value6,
        value7,
        value8,
        value9,
        value10,
        duration,
        repeatMode,
        repeatCount,
        listenAnimator,
        listenAnimatorValue,
        interpolator,
      ])
    } else if (isRef(instance)) {
      instance.value?.objectAnimator10(
        id,
        valueType,
        propertyName,
        value1,
        value2,
        value3,
        value4,
        value5,
        value6,
        value7,
        value8,
        value9,
        value10,
        duration,
        repeatMode,
        repeatCount,
        listenAnimator,
        listenAnimatorValue,
        interpolator
      )
    }
  }

  return {
    requestFocus,
    requestChildFocus,
    clearFocus,
    requestFocusDirectly,
    setVisibility,
    requestRootLayout,
    requestLayout,
    setDescendantFocusability,
    changeDescendantFocusability,
    forceUpdateRenderNode,
    setBackGroundColor,
    layoutViewManual,
    blockRootFocus,
    unBlockRootFocus,
    changeAlpha,
    setScale,
    setPosition,
    updateLayout,
    invalidate,
    dispatchFunctionForTarget,
    setBlockFocusDirections,
    setBlockFocusDirectionsOnFail,
    setInitFocus,
    setAutoFocus,
    enabledAutofocus,
    requestAutofocus,
    hasFocus,
    isFocused,
    getLocationOnScreen,
    getViewState,
    getChildViewState,
    setPivotX,
    setPivotY,
    resetPivot,
    resetAnimators,
    animatorSet,
    startAnimator,
    startAnimatorDelay,
    pauseAnimator,
    resumeAnimator,
    cancelAnimator,
    reverseAnimator,
    play,
    playWith,
    playBefore,
    playAfter,
    playAfterDelay,
    playSequentially1,
    playSequentially2,
    playSequentially3,
    playSequentially4,
    playSequentially5,
    playTogether1,
    playTogether2,
    playTogether3,
    playTogether4,
    playTogether5,
    objectAnimator,
    objectAnimator1,
    objectAnimator2,
    objectAnimator3,
    objectAnimator4,
    objectAnimator5,
    objectAnimator6,
    objectAnimator7,
    objectAnimator8,
    objectAnimator9,
    objectAnimator10,
  }
}
