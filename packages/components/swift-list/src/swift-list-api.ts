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
import type { QTISwiftList } from './swift-list-instance'

export interface QtSwiftListAPI {
  //------------------------------------SwiftList-----------------------------------
  setPageData(
    instance: string | Ref<QTISwiftList | undefined>,
    page: number,
    data: Array<any>
  ): void

  updateData(
    instance: string | Ref<QTISwiftList | undefined>,
    position: number,
    data: any
  ): void

  notifyNoMoreData(instance: string | Ref<QTISwiftList | undefined>): void

  requestMore(instance: string | Ref<QTISwiftList | undefined>): void

  scrollToPosition(
    instance: string | Ref<QTISwiftList | undefined>,
    pos: number
  ): void

  scrollToPositionWithOffset(
    instance: string | Ref<QTISwiftList | undefined>,
    pos: number,
    offset: number,
    anim: boolean
  ): void

  setSelectChildPosition(
    instance: string | Ref<QTISwiftList | undefined>,
    position: number
  ): void

  setFocusTargetChildPosition(
    instance: string | Ref<QTISwiftList | undefined>,
    position: number
  ): void

  //--------------------------------BaseView------------------------------------------------
  requestFocus(
    instance: string | Ref<QTISwiftList | undefined>,
    direction?: QTFocusDirection
  ): void

  requestChildFocus(
    instance: string | Ref<QTISwiftList | undefined>,
    position: number
  ): void

  clearFocus(instance: string | Ref<QTISwiftList | undefined>): void

  requestFocusDirectly(
    instance: string | Ref<QTISwiftList | undefined>,
    direction?: QTFocusDirection
  ): void

  setVisibility(
    instance: string | Ref<QTISwiftList | undefined>,
    v: QTVisibility
  ): void

  requestRootLayout(instance: string | Ref<QTISwiftList | undefined>): void

  requestLayout(instance: string | Ref<QTISwiftList | undefined>): void

  //
  setDescendantFocusability(
    instance: string | Ref<QTISwiftList | undefined>,
    descendant: QTFocusDescendant
  ): void

  changeDescendantFocusability(
    instance: string | Ref<QTISwiftList | undefined>,
    descendant: QTDescendantFocusability
  ): void

  forceUpdateRenderNode(instance: string | Ref<QTISwiftList | undefined>): void

  setBackGroundColor(
    instance: string | Ref<QTISwiftList | undefined>,
    color: string
  ): void

  layoutViewManual(instance: string | Ref<QTISwiftList | undefined>): void

  blockRootFocus(instance: string | Ref<QTISwiftList | undefined>): void

  unBlockRootFocus(instance: string | Ref<QTISwiftList | undefined>): void

  changeAlpha(
    instance: string | Ref<QTISwiftList | undefined>,
    alpha: number
  ): void

  setScale(
    instance: string | Ref<QTISwiftList | undefined>,
    x: number,
    y: number,
    duration: number
  ): void

  setPosition(
    instance: string | Ref<QTISwiftList | undefined>,
    x: number,
    y: number,
    z: number
  ): void

  updateLayout(
    instance: string | Ref<QTISwiftList | undefined>,
    width: number,
    height: number,
    x: number,
    y: number
  ): void

  invalidate(instance: string | Ref<QTISwiftList | undefined>): void

  dispatchFunctionForTarget(
    instance: string | Ref<QTISwiftList | undefined>,
    targetName: string,
    functionTargetName: string,
    params: Array<QTNativeParams>,
    delay: number
  ): void

  setBlockFocusDirections(
    instance: string | Ref<QTISwiftList | undefined>,
    directionList: Array<QTFocusDirectionName>
  ): void

  setBlockFocusDirectionsOnFail(
    instance: string | Ref<QTISwiftList | undefined>,
    directionList: Array<QTFocusDirectionName>
  ): void

  setInitFocus(
    instance: string | Ref<QTISwiftList | undefined>,
    sid: string,
    delay?: number
  ): void

  setAutoFocus(
    instance: string | Ref<QTISwiftList | undefined>,
    sid: string,
    delay?: number
  ): void

  enabledAutofocus(
    instance: string | Ref<QTISwiftList | undefined>,
    autofocus: boolean
  ): void

  requestAutofocus(instance: string | Ref<QTISwiftList | undefined>): void

  //
  hasFocus(instance: string | Ref<QTISwiftList | undefined>): Promise<boolean>

  isFocused(instance: string | Ref<QTISwiftList | undefined>): Promise<boolean>

  getLocationOnScreen(
    instance: string | Ref<QTISwiftList | undefined>
  ): Promise<QTEventData<QTLocation>>

  getViewState(
    instance: string | Ref<QTISwiftList | undefined>
  ): Promise<QTViewState>

  getChildViewState(
    instance: string | Ref<QTISwiftList | undefined>,
    position: number
  ): Promise<QTViewState>
}

export function createQtSwiftListAPI(): QtSwiftListAPI {
  //------------------------------------SwiftList-----------------------------------
  function setPageData(
    instance: string | Ref<QTISwiftList | undefined>,
    page: number,
    data: Array<any>
  ) {
    if (isString(instance)) {
      callUIFunction(instance, 'setPageData', [page, data])
    } else if (isRef(instance)) {
      instance.value?.setPageData(page, data)
    }
  }

  function updateData(
    instance: string | Ref<QTISwiftList | undefined>,
    position: number,
    data: any
  ) {
    if (isString(instance)) {
      callUIFunction(instance, 'updateData', [position, data])
    } else if (isRef(instance)) {
      instance.value?.updateData(position, data)
    }
  }

  function notifyNoMoreData(instance: string | Ref<QTISwiftList | undefined>) {
    if (isString(instance)) {
      callUIFunction(instance, 'notifyNoMoreData', [])
    } else if (isRef(instance)) {
      instance.value?.notifyNoMoreData()
    }
  }

  function requestMore(instance: string | Ref<QTISwiftList | undefined>) {
    if (isString(instance)) {
      callUIFunction(instance, 'notifyNoMoreData', [])
    } else if (isRef(instance)) {
      instance.value?.notifyNoMoreData()
    }
  }

  function scrollToPosition(
    instance: string | Ref<QTISwiftList | undefined>,
    position: number
  ) {
    if (isString(instance)) {
      callUIFunction(instance, 'scrollToPosition', [position])
    } else if (isRef(instance)) {
      instance.value?.scrollToPosition(position)
    }
  }

  function scrollToPositionWithOffset(
    instance: string | Ref<QTISwiftList | undefined>,
    pos: number,
    offset: number,
    anim: boolean
  ) {
    if (isString(instance)) {
      callUIFunction(instance, 'scrollToPositionWithOffset', [
        pos,
        offset,
        anim,
      ])
    } else if (isRef(instance)) {
      instance.value?.scrollToPositionWithOffset(pos, offset, anim)
    }
  }

  function setSelectChildPosition(
    instance: string | Ref<QTISwiftList | undefined>,
    position: number
  ) {
    if (isString(instance)) {
      callUIFunction(instance, 'setSelectChildPosition', [position])
    } else if (isRef(instance)) {
      instance.value?.setSelectChildPosition(position)
    }
  }

  function setFocusTargetChildPosition(
    instance: string | Ref<QTISwiftList | undefined>,
    position: number
  ) {
    if (isString(instance)) {
      callUIFunction(instance, 'setFocusTargetChildPosition', [position])
    } else if (isRef(instance)) {
      instance.value?.setFocusTargetChildPosition(position)
    }
  }

  //--------------------------------BaseView------------------------------------------------
  function requestFocus(
    instance: string | Ref<QTISwiftList | undefined>,
    direction?: QTFocusDirection
  ) {
    if (isString(instance)) {
      callUIFunction(instance, 'requestFocus', [direction])
    } else if (isRef(instance)) {
      instance.value?.requestFocus(direction)
    }
  }

  function requestChildFocus(
    instance: string | Ref<QTISwiftList | undefined>,
    position: number
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'requestChildFocus', [position])
    } else if (isRef(instance)) {
      instance.value?.requestChildFocus(position)
    }
  }

  function clearFocus(instance: string | Ref<QTISwiftList | undefined>) {
    if (isString(instance)) {
      callUIFunction(instance, 'clearFocus', [])
    } else if (isRef(instance)) {
      instance.value?.clearFocus()
    }
  }

  function requestFocusDirectly(
    instance: string | Ref<QTISwiftList | undefined>,
    direction?: QTFocusDirection
  ) {
    if (isString(instance)) {
      callUIFunction(instance, 'requestFocusDirectly', [direction])
    } else if (isRef(instance)) {
      instance.value?.requestFocusDirectly(direction)
    }
  }

  function setVisibility(
    instance: string | Ref<QTISwiftList | undefined>,
    v: QTVisibility
  ) {
    if (isString(instance)) {
      callUIFunction(instance, 'changeVisibility', [v])
    } else if (isRef(instance)) {
      instance.value?.setVisibility(v)
    }
  }

  function requestRootLayout(instance: string | Ref<QTISwiftList | undefined>) {
    if (isString(instance)) {
      callUIFunction(instance, 'requestRootLayout', [])
    } else if (isRef(instance)) {
      instance.value?.requestRootLayout()
    }
  }

  function requestLayout(instance: string | Ref<QTISwiftList | undefined>) {
    if (isString(instance)) {
      callUIFunction(instance, 'requestLayout', [])
    } else if (isRef(instance)) {
      instance.value?.requestLayout()
    }
  }

  function setDescendantFocusability(
    instance: string | Ref<QTISwiftList | undefined>,
    descendant: QTFocusDescendant
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'setDescendantFocusability', [descendant])
    } else if (isRef(instance)) {
      instance.value?.setDescendantFocusability(descendant)
    }
  }

  function changeDescendantFocusability(
    instance: string | Ref<QTISwiftList | undefined>,
    descendant: QTDescendantFocusability
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'changeDescendantFocusability', [descendant])
    } else if (isRef(instance)) {
      instance.value?.changeDescendantFocusability(descendant)
    }
  }

  function forceUpdateRenderNode(
    instance: string | Ref<QTISwiftList | undefined>
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'forceUpdateRenderNode', [])
    } else if (isRef(instance)) {
      instance.value?.forceUpdateRenderNode()
    }
  }

  function setBackGroundColor(
    instance: string | Ref<QTISwiftList | undefined>,
    color: string
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'setBackGroundColor', [color])
    } else if (isRef(instance)) {
      instance.value?.setBackGroundColor(color)
    }
  }

  function layoutViewManual(
    instance: string | Ref<QTISwiftList | undefined>
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'layoutViewManual', [])
    } else if (isRef(instance)) {
      instance.value?.layoutViewManual()
    }
  }

  function blockRootFocus(
    instance: string | Ref<QTISwiftList | undefined>
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'blockRootFocus', [])
    } else if (isRef(instance)) {
      instance.value?.blockRootFocus()
    }
  }

  function unBlockRootFocus(
    instance: string | Ref<QTISwiftList | undefined>
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'unBlockRootFocus', [])
    } else if (isRef(instance)) {
      instance.value?.unBlockRootFocus()
    }
  }

  function changeAlpha(
    instance: string | Ref<QTISwiftList | undefined>,
    alpha: number
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'changeAlpha', [alpha])
    } else if (isRef(instance)) {
      instance.value?.changeAlpha(alpha)
    }
  }

  function setScale(
    instance: string | Ref<QTISwiftList | undefined>,
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
    instance: string | Ref<QTISwiftList | undefined>,
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
    instance: string | Ref<QTISwiftList | undefined>,
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

  function invalidate(instance: string | Ref<QTISwiftList | undefined>): void {
    if (isString(instance)) {
      callUIFunction(instance, 'invalidate', [])
    } else if (isRef(instance)) {
      instance.value?.invalidate()
    }
  }

  function dispatchFunctionForTarget(
    instance: string | Ref<QTISwiftList | undefined>,
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
    instance: string | Ref<QTISwiftList | undefined>,
    directionList: Array<QTFocusDirectionName>
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'setBlockFocusDirections', [directionList])
    } else if (isRef(instance)) {
      instance.value?.setBlockFocusDirections(directionList)
    }
  }

  function setBlockFocusDirectionsOnFail(
    instance: string | Ref<QTISwiftList | undefined>,
    directionList: Array<QTFocusDirectionName>
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'setBlockFocusDirectionsOnFail', [directionList])
    } else if (isRef(instance)) {
      instance.value?.setBlockFocusDirectionsOnFail(directionList)
    }
  }

  function setInitFocus(
    instance: string | Ref<QTISwiftList | undefined>,
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
    instance: string | Ref<QTISwiftList | undefined>,
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
    instance: string | Ref<QTISwiftList | undefined>,
    autofocus: boolean
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'setAutoFocus', [autofocus])
    } else if (isRef(instance)) {
      instance.value?.enabledAutofocus(autofocus)
    }
  }

  function requestAutofocus(
    instance: string | Ref<QTISwiftList | undefined>
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'requestAutofocus', [])
    } else if (isRef(instance)) {
      instance.value?.requestAutofocus()
    }
  }

  function hasFocus(
    instance: string | Ref<QTISwiftList | undefined>
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
    instance: string | Ref<QTISwiftList | undefined>
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
    instance: string | Ref<QTISwiftList | undefined>
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
    instance: string | Ref<QTISwiftList | undefined>
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
    instance: string | Ref<QTISwiftList | undefined>,
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
    setPageData,
    updateData,
    notifyNoMoreData,
    requestMore,
    scrollToPosition,
    scrollToPositionWithOffset,
    setSelectChildPosition,
    setFocusTargetChildPosition,
    //--------------------------------------------------------------------------------
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
  }
}
