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
import type { Ref } from '@vue/reactivity'
import type { QTICardContainer } from './card-container-instance'

export interface QtCardContainerAPI {
  //-----------------------------------------------------------------
  load(
    instance: string | Ref<QTICardContainer | undefined>,
    cardId: string
  ): void

  loadWithoutCache(
    instance: string | Ref<QTICardContainer | undefined>,
    cardId: string
  ): void

  reload(instance: string | Ref<QTICardContainer | undefined>): void

  autoRecycle(
    instance: string | Ref<QTICardContainer | undefined>,
    data: boolean
  ): void

  getLoadingStatus(instance: string | Ref<QTICardContainer | undefined>): void

  sendEvent2Vue(
    instance: string | Ref<QTICardContainer | undefined>,
    event: Record<string, any>
  ): void

  reset(instance: string | Ref<QTICardContainer | undefined>): void

  recycle(instance: string | Ref<QTICardContainer | undefined>): void

  removeCache(instance: string | Ref<QTICardContainer | undefined>): void

  resizeCacheSize(
    instance: string | Ref<QTICardContainer | undefined>,
    size: number
  ): void

  clearAllCache(instance: string | Ref<QTICardContainer | undefined>): void

  //-----------------------------------------------------------------
  requestFocus(
    instance: string | Ref<QTICardContainer | undefined>,
    direction?: QTFocusDirection
  ): void

  requestChildFocus(
    instance: string | Ref<QTICardContainer | undefined>,
    position: number
  ): void

  clearFocus(instance: string | Ref<QTICardContainer | undefined>): void

  requestFocusDirectly(
    instance: string | Ref<QTICardContainer | undefined>,
    direction?: QTFocusDirection
  ): void

  setVisibility(
    instance: string | Ref<QTICardContainer | undefined>,
    v: QTVisibility
  ): void

  requestRootLayout(instance: string | Ref<QTICardContainer | undefined>): void

  requestLayout(instance: string | Ref<QTICardContainer | undefined>): void

  //
  setDescendantFocusability(
    instance: string | Ref<QTICardContainer | undefined>,
    descendant: QTFocusDescendant
  ): void

  changeDescendantFocusability(
    instance: string | Ref<QTICardContainer | undefined>,
    descendant: QTDescendantFocusability
  ): void

  forceUpdateRenderNode(
    instance: string | Ref<QTICardContainer | undefined>
  ): void

  setBackGroundColor(
    instance: string | Ref<QTICardContainer | undefined>,
    color: string
  ): void

  layoutViewManual(instance: string | Ref<QTICardContainer | undefined>): void

  blockRootFocus(instance: string | Ref<QTICardContainer | undefined>): void

  unBlockRootFocus(instance: string | Ref<QTICardContainer | undefined>): void

  changeAlpha(
    instance: string | Ref<QTICardContainer | undefined>,
    alpha: number
  ): void

  setScale(
    instance: string | Ref<QTICardContainer | undefined>,
    x: number,
    y: number,
    duration: number
  ): void

  setPosition(
    instance: string | Ref<QTICardContainer | undefined>,
    x: number,
    y: number,
    z: number
  ): void

  updateLayout(
    instance: string | Ref<QTICardContainer | undefined>,
    width: number,
    height: number,
    x: number,
    y: number
  ): void

  invalidate(instance: string | Ref<QTICardContainer | undefined>): void

  dispatchFunctionForTarget(
    instance: string | Ref<QTICardContainer | undefined>,
    targetName: string,
    functionTargetName: string,
    params: Array<QTNativeParams>,
    delay: number
  ): void

  setBlockFocusDirections(
    instance: string | Ref<QTICardContainer | undefined>,
    directionList: Array<QTFocusDirectionName>
  ): void

  setBlockFocusDirectionsOnFail(
    instance: string | Ref<QTICardContainer | undefined>,
    directionList: Array<QTFocusDirectionName>
  ): void

  setInitFocus(
    instance: string | Ref<QTICardContainer | undefined>,
    sid: string,
    delay?: number
  ): void

  setAutoFocus(
    instance: string | Ref<QTICardContainer | undefined>,
    sid: string,
    delay?: number
  ): void

  enabledAutofocus(
    instance: string | Ref<QTICardContainer | undefined>,
    autofocus: boolean
  ): void

  requestAutofocus(instance: string | Ref<QTICardContainer | undefined>): void

  //
  hasFocus(
    instance: string | Ref<QTICardContainer | undefined>
  ): Promise<boolean>

  isFocused(
    instance: string | Ref<QTICardContainer | undefined>
  ): Promise<boolean>

  getLocationOnScreen(
    instance: string | Ref<QTICardContainer | undefined>
  ): Promise<QTEventData<QTLocation>>

  getViewState(
    instance: string | Ref<QTICardContainer | undefined>
  ): Promise<QTViewState>

  getChildViewState(
    instance: string | Ref<QTICardContainer | undefined>,
    position: number
  ): Promise<QTViewState>
}

export function createQtCardContainerAPI(): QtCardContainerAPI {
  //-------------------------------------------------------------------------
  function load(
    instance: string | Ref<QTICardContainer | undefined>,
    cardId: string
  ) {
    if (isString(instance)) {
      callUIFunction(instance, 'load', [cardId])
    } else if (isRef(instance)) {
      instance.value?.load(cardId)
    }
  }

  function loadWithoutCache(
    instance: string | Ref<QTICardContainer | undefined>,
    value: string
  ) {
    if (isString(instance)) {
      callUIFunction(instance, 'loadWithoutCache', [value])
    } else if (isRef(instance)) {
      instance.value?.loadWithoutCache(value)
    }
  }

  function reload(instance: string | Ref<QTICardContainer | undefined>) {
    if (isString(instance)) {
      callUIFunction(instance, 'reload', [])
    } else if (isRef(instance)) {
      instance.value?.reload()
    }
  }

  function autoRecycle(
    instance: string | Ref<QTICardContainer | undefined>,
    data: boolean
  ) {
    if (isString(instance)) {
      callUIFunction(instance, 'autoRecycle', [data])
    } else if (isRef(instance)) {
      instance.value?.autoRecycle(data)
    }
  }

  function getLoadingStatus(
    instance: string | Ref<QTICardContainer | undefined>
  ) {
    if (isString(instance)) {
      callUIFunction(instance, 'getLoadingStatus', [])
    } else if (isRef(instance)) {
      instance.value?.getLoadingStatus()
    }
  }

  function sendEvent2Vue(
    instance: string | Ref<QTICardContainer | undefined>,
    event: Record<string, any>
  ) {
    if (isString(instance)) {
      callUIFunction(instance, 'sendEvent2Vue', [event])
    } else if (isRef(instance)) {
      instance.value?.sendEvent2Vue(event)
    }
  }

  function reset(instance: string | Ref<QTICardContainer | undefined>) {
    if (isString(instance)) {
      callUIFunction(instance, 'reset', [])
    } else if (isRef(instance)) {
      instance.value?.reset()
    }
  }

  function recycle(instance: string | Ref<QTICardContainer | undefined>) {
    if (isString(instance)) {
      callUIFunction(instance, 'recycle', [])
    } else if (isRef(instance)) {
      instance.value?.recycle()
    }
  }

  function removeCache(instance: string | Ref<QTICardContainer | undefined>) {
    if (isString(instance)) {
      callUIFunction(instance, 'removeCache', [])
    } else if (isRef(instance)) {
      instance.value?.removeCache()
    }
  }

  function resizeCacheSize(
    instance: string | Ref<QTICardContainer | undefined>,
    size: number
  ) {
    if (isString(instance)) {
      callUIFunction(instance, 'resizeCacheSize', [size])
    } else if (isRef(instance)) {
      instance.value?.resizeCacheSize(size)
    }
  }

  function clearAllCache(instance: string | Ref<QTICardContainer | undefined>) {
    if (isString(instance)) {
      callUIFunction(instance, 'clearAllCache', [])
    } else if (isRef(instance)) {
      instance.value?.clearAllCache()
    }
  }

  //-------------------------------------------------------------------------

  function requestFocus(
    instance: string | Ref<QTICardContainer | undefined>,
    direction?: QTFocusDirection
  ) {
    if (isString(instance)) {
      callUIFunction(instance, 'requestFocus', [direction])
    } else if (isRef(instance)) {
      instance.value?.requestFocus(direction)
    }
  }

  function requestChildFocus(
    instance: string | Ref<QTICardContainer | undefined>,
    position: number
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'requestChildFocus', [position])
    } else if (isRef(instance)) {
      instance.value?.requestChildFocus(position)
    }
  }

  function clearFocus(instance: string | Ref<QTICardContainer | undefined>) {
    if (isString(instance)) {
      callUIFunction(instance, 'clearFocus', [])
    } else if (isRef(instance)) {
      instance.value?.clearFocus()
    }
  }

  function requestFocusDirectly(
    instance: string | Ref<QTICardContainer | undefined>,
    direction?: QTFocusDirection
  ) {
    if (isString(instance)) {
      callUIFunction(instance, 'requestFocusDirectly', [direction])
    } else if (isRef(instance)) {
      instance.value?.requestFocusDirectly(direction)
    }
  }

  function setVisibility(
    instance: string | Ref<QTICardContainer | undefined>,
    v: QTVisibility
  ) {
    if (isString(instance)) {
      callUIFunction(instance, 'changeVisibility', [v])
    } else if (isRef(instance)) {
      instance.value?.setVisibility(v)
    }
  }

  function requestRootLayout(
    instance: string | Ref<QTICardContainer | undefined>
  ) {
    if (isString(instance)) {
      callUIFunction(instance, 'requestRootLayout', [])
    } else if (isRef(instance)) {
      instance.value?.requestRootLayout()
    }
  }

  function requestLayout(instance: string | Ref<QTICardContainer | undefined>) {
    if (isString(instance)) {
      callUIFunction(instance, 'requestLayout', [])
    } else if (isRef(instance)) {
      instance.value?.requestLayout()
    }
  }

  function setDescendantFocusability(
    instance: string | Ref<QTICardContainer | undefined>,
    descendant: QTFocusDescendant
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'setDescendantFocusability', [descendant])
    } else if (isRef(instance)) {
      instance.value?.setDescendantFocusability(descendant)
    }
  }

  function changeDescendantFocusability(
    instance: string | Ref<QTICardContainer | undefined>,
    descendant: QTDescendantFocusability
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'changeDescendantFocusability', [descendant])
    } else if (isRef(instance)) {
      instance.value?.changeDescendantFocusability(descendant)
    }
  }

  function forceUpdateRenderNode(
    instance: string | Ref<QTICardContainer | undefined>
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'forceUpdateRenderNode', [])
    } else if (isRef(instance)) {
      instance.value?.forceUpdateRenderNode()
    }
  }

  function setBackGroundColor(
    instance: string | Ref<QTICardContainer | undefined>,
    color: string
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'setBackGroundColor', [color])
    } else if (isRef(instance)) {
      instance.value?.setBackGroundColor(color)
    }
  }

  function layoutViewManual(
    instance: string | Ref<QTICardContainer | undefined>
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'layoutViewManual', [])
    } else if (isRef(instance)) {
      instance.value?.layoutViewManual()
    }
  }

  function blockRootFocus(
    instance: string | Ref<QTICardContainer | undefined>
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'blockRootFocus', [])
    } else if (isRef(instance)) {
      instance.value?.blockRootFocus()
    }
  }

  function unBlockRootFocus(
    instance: string | Ref<QTICardContainer | undefined>
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'unBlockRootFocus', [])
    } else if (isRef(instance)) {
      instance.value?.unBlockRootFocus()
    }
  }

  function changeAlpha(
    instance: string | Ref<QTICardContainer | undefined>,
    alpha: number
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'changeAlpha', [alpha])
    } else if (isRef(instance)) {
      instance.value?.changeAlpha(alpha)
    }
  }

  function setScale(
    instance: string | Ref<QTICardContainer | undefined>,
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
    instance: string | Ref<QTICardContainer | undefined>,
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
    instance: string | Ref<QTICardContainer | undefined>,
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

  function invalidate(
    instance: string | Ref<QTICardContainer | undefined>
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'invalidate', [])
    } else if (isRef(instance)) {
      instance.value?.invalidate()
    }
  }

  function dispatchFunctionForTarget(
    instance: string | Ref<QTICardContainer | undefined>,
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
    instance: string | Ref<QTICardContainer | undefined>,
    directionList: Array<QTFocusDirectionName>
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'setBlockFocusDirections', [directionList])
    } else if (isRef(instance)) {
      instance.value?.setBlockFocusDirections(directionList)
    }
  }

  function setBlockFocusDirectionsOnFail(
    instance: string | Ref<QTICardContainer | undefined>,
    directionList: Array<QTFocusDirectionName>
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'setBlockFocusDirectionsOnFail', [directionList])
    } else if (isRef(instance)) {
      instance.value?.setBlockFocusDirectionsOnFail(directionList)
    }
  }

  function setInitFocus(
    instance: string | Ref<QTICardContainer | undefined>,
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
    instance: string | Ref<QTICardContainer | undefined>,
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
    instance: string | Ref<QTICardContainer | undefined>,
    autofocus: boolean
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'setAutoFocus', [autofocus])
    } else if (isRef(instance)) {
      instance.value?.enabledAutofocus(autofocus)
    }
  }

  function requestAutofocus(
    instance: string | Ref<QTICardContainer | undefined>
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'requestAutofocus', [])
    } else if (isRef(instance)) {
      instance.value?.requestAutofocus()
    }
  }

  function hasFocus(
    instance: string | Ref<QTICardContainer | undefined>
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
    instance: string | Ref<QTICardContainer | undefined>
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
    instance: string | Ref<QTICardContainer | undefined>
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
    instance: string | Ref<QTICardContainer | undefined>
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
    instance: string | Ref<QTICardContainer | undefined>,
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
    load,
    loadWithoutCache,
    reload,
    autoRecycle,
    getLoadingStatus,
    sendEvent2Vue,
    reset,
    recycle,
    removeCache,
    resizeCacheSize,
    clearAllCache,
  }
}
