import { isRef } from '@vue/reactivity'
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
import type { QTISwitch } from './switch-instance'
import type { Ref } from '@vue/reactivity'

export interface QtSwitchAPI {
  //---------------------------------Text-----------------------------------------------
  setDisabled(
    instance: string | Ref<QTISwitch | undefined>,
    isDisabled: boolean
  ): void

  //----------------------------------BaseView----------------------------------------------
  requestFocus(
    instance: string | Ref<QTISwitch | undefined>,
    direction?: QTFocusDirection
  ): void

  requestChildFocus(
    instance: string | Ref<QTISwitch | undefined>,
    position: number
  ): void

  clearFocus(instance: string | Ref<QTISwitch | undefined>): void

  requestFocusDirectly(
    instance: string | Ref<QTISwitch | undefined>,
    direction?: QTFocusDirection
  ): void

  setVisibility(
    instance: string | Ref<QTISwitch | undefined>,
    v: QTVisibility
  ): void

  requestRootLayout(instance: string | Ref<QTISwitch | undefined>): void

  requestLayout(instance: string | Ref<QTISwitch | undefined>): void

  //
  setDescendantFocusability(
    instance: string | Ref<QTISwitch | undefined>,
    descendant: QTFocusDescendant
  ): void

  changeDescendantFocusability(
    instance: string | Ref<QTISwitch | undefined>,
    descendant: QTDescendantFocusability
  ): void

  forceUpdateRenderNode(instance: string | Ref<QTISwitch | undefined>): void

  setBackGroundColor(
    instance: string | Ref<QTISwitch | undefined>,
    color: string
  ): void

  layoutViewManual(instance: string | Ref<QTISwitch | undefined>): void

  blockRootFocus(instance: string | Ref<QTISwitch | undefined>): void

  unBlockRootFocus(instance: string | Ref<QTISwitch | undefined>): void

  changeAlpha(
    instance: string | Ref<QTISwitch | undefined>,
    alpha: number
  ): void

  setScale(
    instance: string | Ref<QTISwitch | undefined>,
    x: number,
    y: number,
    duration: number
  ): void

  setPosition(
    instance: string | Ref<QTISwitch | undefined>,
    x: number,
    y: number,
    z: number
  ): void

  updateLayout(
    instance: string | Ref<QTISwitch | undefined>,
    width: number,
    height: number,
    x: number,
    y: number
  ): void

  invalidate(instance: string | Ref<QTISwitch | undefined>): void

  dispatchFunctionForTarget(
    instance: string | Ref<QTISwitch | undefined>,
    targetName: string,
    functionTargetName: string,
    params: Array<QTNativeParams>,
    delay: number
  ): void

  setBlockFocusDirections(
    instance: string | Ref<QTISwitch | undefined>,
    directionList: Array<QTFocusDirectionName>
  ): void

  setBlockFocusDirectionsOnFail(
    instance: string | Ref<QTISwitch | undefined>,
    directionList: Array<QTFocusDirectionName>
  ): void

  setInitFocus(
    instance: string | Ref<QTISwitch | undefined>,
    sid: string,
    delay?: number
  ): void

  setAutoFocus(
    instance: string | Ref<QTISwitch | undefined>,
    sid: string,
    delay?: number
  ): void

  enabledAutofocus(
    instance: string | Ref<QTISwitch | undefined>,
    autofocus: boolean
  ): void

  requestAutofocus(instance: string | Ref<QTISwitch | undefined>): void

  //
  hasFocus(instance: string | Ref<QTISwitch | undefined>): Promise<boolean>

  isFocused(instance: string | Ref<QTISwitch | undefined>): Promise<boolean>

  getLocationOnScreen(
    instance: string | Ref<QTISwitch | undefined>
  ): Promise<QTEventData<QTLocation>>

  getViewState(
    instance: string | Ref<QTISwitch | undefined>
  ): Promise<QTViewState>

  getChildViewState(
    instance: string | Ref<QTISwitch | undefined>,
    position: number
  ): Promise<QTViewState>
}

export function createQtSwitchAPI(): QtSwitchAPI {
  //--------------------------------------------------------------------------------
  function requestFocus(
    instance: string | Ref<QTISwitch | undefined>,
    direction?: QTFocusDirection
  ) {
    if (isString(instance)) {
      callUIFunction(instance, 'requestFocus', [direction])
    } else if (isRef(instance)) {
      instance.value?.requestFocus(direction)
    }
  }

  function requestChildFocus(
    instance: string | Ref<QTISwitch | undefined>,
    position: number
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'requestChildFocus', [position])
    } else if (isRef(instance)) {
      instance.value?.requestChildFocus(position)
    }
  }

  function clearFocus(instance: string | Ref<QTISwitch | undefined>) {
    if (isString(instance)) {
      callUIFunction(instance, 'clearFocus', [])
    } else if (isRef(instance)) {
      instance.value?.clearFocus()
    }
  }

  function requestFocusDirectly(
    instance: string | Ref<QTISwitch | undefined>,
    direction?: QTFocusDirection
  ) {
    if (isString(instance)) {
      callUIFunction(instance, 'requestFocusDirectly', [direction])
    } else if (isRef(instance)) {
      instance.value?.requestFocusDirectly(direction)
    }
  }

  function setVisibility(
    instance: string | Ref<QTISwitch | undefined>,
    v: QTVisibility
  ) {
    if (isString(instance)) {
      callUIFunction(instance, 'changeVisibility', [v])
    } else if (isRef(instance)) {
      instance.value?.setVisibility(v)
    }
  }

  function requestRootLayout(instance: string | Ref<QTISwitch | undefined>) {
    if (isString(instance)) {
      callUIFunction(instance, 'requestRootLayout', [])
    } else if (isRef(instance)) {
      instance.value?.requestRootLayout()
    }
  }

  function requestLayout(instance: string | Ref<QTISwitch | undefined>) {
    if (isString(instance)) {
      callUIFunction(instance, 'requestLayout', [])
    } else if (isRef(instance)) {
      instance.value?.requestLayout()
    }
  }

  function setDescendantFocusability(
    instance: string | Ref<QTISwitch | undefined>,
    descendant: QTFocusDescendant
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'setDescendantFocusability', [descendant])
    } else if (isRef(instance)) {
      instance.value?.setDescendantFocusability(descendant)
    }
  }

  function changeDescendantFocusability(
    instance: string | Ref<QTISwitch | undefined>,
    descendant: QTDescendantFocusability
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'changeDescendantFocusability', [descendant])
    } else if (isRef(instance)) {
      instance.value?.changeDescendantFocusability(descendant)
    }
  }

  function forceUpdateRenderNode(
    instance: string | Ref<QTISwitch | undefined>
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'forceUpdateRenderNode', [])
    } else if (isRef(instance)) {
      instance.value?.forceUpdateRenderNode()
    }
  }

  function setBackGroundColor(
    instance: string | Ref<QTISwitch | undefined>,
    color: string
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'setBackGroundColor', [color])
    } else if (isRef(instance)) {
      instance.value?.setBackGroundColor(color)
    }
  }

  function layoutViewManual(
    instance: string | Ref<QTISwitch | undefined>
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'layoutViewManual', [])
    } else if (isRef(instance)) {
      instance.value?.layoutViewManual()
    }
  }

  function blockRootFocus(instance: string | Ref<QTISwitch | undefined>): void {
    if (isString(instance)) {
      callUIFunction(instance, 'blockRootFocus', [])
    } else if (isRef(instance)) {
      instance.value?.blockRootFocus()
    }
  }

  function unBlockRootFocus(
    instance: string | Ref<QTISwitch | undefined>
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'unBlockRootFocus', [])
    } else if (isRef(instance)) {
      instance.value?.unBlockRootFocus()
    }
  }

  function changeAlpha(
    instance: string | Ref<QTISwitch | undefined>,
    alpha: number
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'changeAlpha', [alpha])
    } else if (isRef(instance)) {
      instance.value?.changeAlpha(alpha)
    }
  }

  function setScale(
    instance: string | Ref<QTISwitch | undefined>,
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
    instance: string | Ref<QTISwitch | undefined>,
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
    instance: string | Ref<QTISwitch | undefined>,
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

  function invalidate(instance: string | Ref<QTISwitch | undefined>): void {
    if (isString(instance)) {
      callUIFunction(instance, 'invalidate', [])
    } else if (isRef(instance)) {
      instance.value?.invalidate()
    }
  }

  function dispatchFunctionForTarget(
    instance: string | Ref<QTISwitch | undefined>,
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
    instance: string | Ref<QTISwitch | undefined>,
    directionList: Array<QTFocusDirectionName>
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'setBlockFocusDirections', [directionList])
    } else if (isRef(instance)) {
      instance.value?.setBlockFocusDirections(directionList)
    }
  }

  function setBlockFocusDirectionsOnFail(
    instance: string | Ref<QTISwitch | undefined>,
    directionList: Array<QTFocusDirectionName>
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'setBlockFocusDirectionsOnFail', [directionList])
    } else if (isRef(instance)) {
      instance.value?.setBlockFocusDirectionsOnFail(directionList)
    }
  }

  function setInitFocus(
    instance: string | Ref<QTISwitch | undefined>,
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
    instance: string | Ref<QTISwitch | undefined>,
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
    instance: string | Ref<QTISwitch | undefined>,
    autofocus: boolean
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'setAutoFocus', [autofocus])
    } else if (isRef(instance)) {
      instance.value?.enabledAutofocus(autofocus)
    }
  }

  function requestAutofocus(
    instance: string | Ref<QTISwitch | undefined>
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'requestAutofocus', [])
    } else if (isRef(instance)) {
      instance.value?.requestAutofocus()
    }
  }

  function hasFocus(
    instance: string | Ref<QTISwitch | undefined>
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
    instance: string | Ref<QTISwitch | undefined>
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
    instance: string | Ref<QTISwitch | undefined>
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
    instance: string | Ref<QTISwitch | undefined>
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
    instance: string | Ref<QTISwitch | undefined>,
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

  function setDisabled(
    instance: string | Ref<QTISwitch | undefined>,
    isDisabled: boolean
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'setDisabled', [isDisabled])
    } else if (isRef(instance)) {
      instance.value?.setDisabled(isDisabled)
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
    setDisabled,
  }
}
