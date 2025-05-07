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
import type { QTIImage } from './img-instance'
import type { Ref } from '@vue/reactivity'
import type { QTImageResizeMode } from './img-types'

export interface QtImageAPI {
  setSrc(instance: string | Ref<QTIImage | undefined>, url: string): void

  setResizeMode(
    instance: string | Ref<QTIImage | undefined>,
    mode: QTImageResizeMode
  ): void

  //-----------------------------------------------------------------------

  requestFocus(
    instance: string | Ref<QTIImage | undefined>,
    direction?: QTFocusDirection
  ): void

  requestChildFocus(
    instance: string | Ref<QTIImage | undefined>,
    position: number
  ): void

  clearFocus(instance: string | Ref<QTIImage | undefined>): void

  requestFocusDirectly(
    instance: string | Ref<QTIImage | undefined>,
    direction?: QTFocusDirection
  ): void

  setVisibility(
    instance: string | Ref<QTIImage | undefined>,
    v: QTVisibility
  ): void

  requestRootLayout(instance: string | Ref<QTIImage | undefined>): void

  requestLayout(instance: string | Ref<QTIImage | undefined>): void

  //
  setDescendantFocusability(
    instance: string | Ref<QTIImage | undefined>,
    descendant: QTFocusDescendant
  ): void

  changeDescendantFocusability(
    instance: string | Ref<QTIImage | undefined>,
    descendant: QTDescendantFocusability
  ): void

  forceUpdateRenderNode(instance: string | Ref<QTIImage | undefined>): void

  setBackGroundColor(
    instance: string | Ref<QTIImage | undefined>,
    color: string
  ): void

  layoutViewManual(instance: string | Ref<QTIImage | undefined>): void

  blockRootFocus(instance: string | Ref<QTIImage | undefined>): void

  unBlockRootFocus(instance: string | Ref<QTIImage | undefined>): void

  changeAlpha(instance: string | Ref<QTIImage | undefined>, alpha: number): void

  setScale(
    instance: string | Ref<QTIImage | undefined>,
    x: number,
    y: number,
    duration: number
  ): void

  setPosition(
    instance: string | Ref<QTIImage | undefined>,
    x: number,
    y: number,
    z: number
  ): void

  updateLayout(
    instance: string | Ref<QTIImage | undefined>,
    width: number,
    height: number,
    x: number,
    y: number
  ): void

  invalidate(instance: string | Ref<QTIImage | undefined>): void

  dispatchFunctionForTarget(
    instance: string | Ref<QTIImage | undefined>,
    targetName: string,
    functionTargetName: string,
    params: Array<QTNativeParams>,
    delay: number
  ): void

  setBlockFocusDirections(
    instance: string | Ref<QTIImage | undefined>,
    directionList: Array<QTFocusDirectionName>
  ): void

  setBlockFocusDirectionsOnFail(
    instance: string | Ref<QTIImage | undefined>,
    directionList: Array<QTFocusDirectionName>
  ): void

  setInitFocus(
    instance: string | Ref<QTIImage | undefined>,
    sid: string,
    delay?: number
  ): void

  setAutoFocus(
    instance: string | Ref<QTIImage | undefined>,
    sid: string,
    delay?: number
  ): void

  enabledAutofocus(
    instance: string | Ref<QTIImage | undefined>,
    autofocus: boolean
  ): void

  requestAutofocus(instance: string | Ref<QTIImage | undefined>): void

  //
  hasFocus(instance: string | Ref<QTIImage | undefined>): Promise<boolean>

  isFocused(instance: string | Ref<QTIImage | undefined>): Promise<boolean>

  getLocationOnScreen(
    instance: string | Ref<QTIImage | undefined>
  ): Promise<QTEventData<QTLocation>>

  getViewState(
    instance: string | Ref<QTIImage | undefined>
  ): Promise<QTViewState>

  getChildViewState(
    instance: string | Ref<QTIImage | undefined>,
    position: number
  ): Promise<QTViewState>
}

export function createQtImageAPI(): QtImageAPI {
  function setSrc(
    instance: string | Ref<QTIImage | undefined>,
    url: string
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'setSrc', [url])
    } else if (isRef(instance)) {
      instance.value?.setSrc(url)
    }
  }

  function setResizeMode(
    instance: string | Ref<QTIImage | undefined>,
    mode: QTImageResizeMode
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'resizeMode', [mode])
    } else if (isRef(instance)) {
      instance.value?.setResizeMode(mode)
    }
  }

  function requestFocus(
    instance: string | Ref<QTIImage | undefined>,
    direction?: QTFocusDirection
  ) {
    if (isString(instance)) {
      callUIFunction(instance, 'requestFocus', [direction])
    } else if (isRef(instance)) {
      instance.value?.requestFocus(direction)
    }
  }

  function requestChildFocus(
    instance: string | Ref<QTIImage | undefined>,
    position: number
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'requestChildFocus', [position])
    } else if (isRef(instance)) {
      instance.value?.requestChildFocus(position)
    }
  }

  function clearFocus(instance: string | Ref<QTIImage | undefined>) {
    if (isString(instance)) {
      callUIFunction(instance, 'clearFocus', [])
    } else if (isRef(instance)) {
      instance.value?.clearFocus()
    }
  }

  function requestFocusDirectly(
    instance: string | Ref<QTIImage | undefined>,
    direction?: QTFocusDirection
  ) {
    if (isString(instance)) {
      callUIFunction(instance, 'requestFocusDirectly', [direction])
    } else if (isRef(instance)) {
      instance.value?.requestFocusDirectly(direction)
    }
  }

  function setVisibility(
    instance: string | Ref<QTIImage | undefined>,
    v: QTVisibility
  ) {
    if (isString(instance)) {
      callUIFunction(instance, 'changeVisibility', [v])
    } else if (isRef(instance)) {
      instance.value?.setVisibility(v)
    }
  }

  function requestRootLayout(instance: string | Ref<QTIImage | undefined>) {
    if (isString(instance)) {
      callUIFunction(instance, 'requestRootLayout', [])
    } else if (isRef(instance)) {
      instance.value?.requestRootLayout()
    }
  }

  function requestLayout(instance: string | Ref<QTIImage | undefined>) {
    if (isString(instance)) {
      callUIFunction(instance, 'requestLayout', [])
    } else if (isRef(instance)) {
      instance.value?.requestLayout()
    }
  }

  function setDescendantFocusability(
    instance: string | Ref<QTIImage | undefined>,
    descendant: QTFocusDescendant
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'setDescendantFocusability', [descendant])
    } else if (isRef(instance)) {
      instance.value?.setDescendantFocusability(descendant)
    }
  }

  function changeDescendantFocusability(
    instance: string | Ref<QTIImage | undefined>,
    descendant: QTDescendantFocusability
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'changeDescendantFocusability', [descendant])
    } else if (isRef(instance)) {
      instance.value?.changeDescendantFocusability(descendant)
    }
  }

  function forceUpdateRenderNode(
    instance: string | Ref<QTIImage | undefined>
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'forceUpdateRenderNode', [])
    } else if (isRef(instance)) {
      instance.value?.forceUpdateRenderNode()
    }
  }

  function setBackGroundColor(
    instance: string | Ref<QTIImage | undefined>,
    color: string
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'setBackGroundColor', [color])
    } else if (isRef(instance)) {
      instance.value?.setBackGroundColor(color)
    }
  }

  function layoutViewManual(
    instance: string | Ref<QTIImage | undefined>
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'layoutViewManual', [])
    } else if (isRef(instance)) {
      instance.value?.layoutViewManual()
    }
  }

  function blockRootFocus(instance: string | Ref<QTIImage | undefined>): void {
    if (isString(instance)) {
      callUIFunction(instance, 'blockRootFocus', [])
    } else if (isRef(instance)) {
      instance.value?.blockRootFocus()
    }
  }

  function unBlockRootFocus(
    instance: string | Ref<QTIImage | undefined>
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'unBlockRootFocus', [])
    } else if (isRef(instance)) {
      instance.value?.unBlockRootFocus()
    }
  }

  function changeAlpha(
    instance: string | Ref<QTIImage | undefined>,
    alpha: number
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'changeAlpha', [alpha])
    } else if (isRef(instance)) {
      instance.value?.changeAlpha(alpha)
    }
  }

  function setScale(
    instance: string | Ref<QTIImage | undefined>,
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
    instance: string | Ref<QTIImage | undefined>,
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
    instance: string | Ref<QTIImage | undefined>,
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

  function invalidate(instance: string | Ref<QTIImage | undefined>): void {
    if (isString(instance)) {
      callUIFunction(instance, 'invalidate', [])
    } else if (isRef(instance)) {
      instance.value?.invalidate()
    }
  }

  function dispatchFunctionForTarget(
    instance: string | Ref<QTIImage | undefined>,
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
    instance: string | Ref<QTIImage | undefined>,
    directionList: Array<QTFocusDirectionName>
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'setBlockFocusDirections', [directionList])
    } else if (isRef(instance)) {
      instance.value?.setBlockFocusDirections(directionList)
    }
  }

  function setBlockFocusDirectionsOnFail(
    instance: string | Ref<QTIImage | undefined>,
    directionList: Array<QTFocusDirectionName>
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'setBlockFocusDirectionsOnFail', [directionList])
    } else if (isRef(instance)) {
      instance.value?.setBlockFocusDirectionsOnFail(directionList)
    }
  }

  function setInitFocus(
    instance: string | Ref<QTIImage | undefined>,
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
    instance: string | Ref<QTIImage | undefined>,
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
    instance: string | Ref<QTIImage | undefined>,
    autofocus: boolean
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'setAutoFocus', [autofocus])
    } else if (isRef(instance)) {
      instance.value?.enabledAutofocus(autofocus)
    }
  }

  function requestAutofocus(
    instance: string | Ref<QTIImage | undefined>
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'requestAutofocus', [])
    } else if (isRef(instance)) {
      instance.value?.requestAutofocus()
    }
  }

  function hasFocus(
    instance: string | Ref<QTIImage | undefined>
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
    instance: string | Ref<QTIImage | undefined>
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
    instance: string | Ref<QTIImage | undefined>
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
    instance: string | Ref<QTIImage | undefined>
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
    instance: string | Ref<QTIImage | undefined>,
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
    setSrc,
    setResizeMode,
  }
}
