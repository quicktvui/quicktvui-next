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
import type { QTINavBar } from './nav-bar-instance'
import type { QTNavBar } from './nav-bar-types'

export interface QtNavBarAPI {
  //---------------------------NavBar------------------------------------------
  init(instance: Ref<QTINavBar | undefined>, navBar: QTNavBar): void

  scrollToPosition(instance: Ref<QTINavBar | undefined>, index: number): void

  scrollToTop(instance: Ref<QTINavBar | undefined>): void

  //--------------------------------BaseView------------------------------------------------
  requestFocus(
    instance: Ref<QTINavBar | undefined>,
    direction?: QTFocusDirection
  ): void

  requestChildFocus(
    instance: Ref<QTINavBar | undefined>,
    position: number
  ): void

  clearFocus(instance: Ref<QTINavBar | undefined>): void

  requestFocusDirectly(
    instance: Ref<QTINavBar | undefined>,
    direction?: QTFocusDirection
  ): void

  setVisibility(instance: Ref<QTINavBar | undefined>, v: QTVisibility): void

  requestRootLayout(instance: Ref<QTINavBar | undefined>): void

  requestLayout(instance: Ref<QTINavBar | undefined>): void

  //
  setDescendantFocusability(
    instance: Ref<QTINavBar | undefined>,
    descendant: QTFocusDescendant
  ): void

  changeDescendantFocusability(
    instance: Ref<QTINavBar | undefined>,
    descendant: QTDescendantFocusability
  ): void

  forceUpdateRenderNode(instance: Ref<QTINavBar | undefined>): void

  setBackGroundColor(instance: Ref<QTINavBar | undefined>, color: string): void

  layoutViewManual(instance: Ref<QTINavBar | undefined>): void

  blockRootFocus(instance: Ref<QTINavBar | undefined>): void

  unBlockRootFocus(instance: Ref<QTINavBar | undefined>): void

  changeAlpha(instance: Ref<QTINavBar | undefined>, alpha: number): void

  setScale(
    instance: Ref<QTINavBar | undefined>,
    x: number,
    y: number,
    duration: number
  ): void

  setPosition(
    instance: Ref<QTINavBar | undefined>,
    x: number,
    y: number,
    z: number
  ): void

  updateLayout(
    instance: Ref<QTINavBar | undefined>,
    width: number,
    height: number,
    x: number,
    y: number
  ): void

  invalidate(instance: Ref<QTINavBar | undefined>): void

  dispatchFunctionForTarget(
    instance: Ref<QTINavBar | undefined>,
    targetName: string,
    functionTargetName: string,
    params: Array<QTNativeParams>,
    delay: number
  ): void

  setBlockFocusDirections(
    instance: Ref<QTINavBar | undefined>,
    directionList: Array<QTFocusDirectionName>
  ): void

  setBlockFocusDirectionsOnFail(
    instance: Ref<QTINavBar | undefined>,
    directionList: Array<QTFocusDirectionName>
  ): void

  setInitFocus(
    instance: Ref<QTINavBar | undefined>,
    sid: string,
    delay?: number
  ): void

  setAutoFocus(
    instance: Ref<QTINavBar | undefined>,
    sid: string,
    delay?: number
  ): void

  enabledAutofocus(
    instance: Ref<QTINavBar | undefined>,
    autofocus: boolean
  ): void

  requestAutofocus(instance: Ref<QTINavBar | undefined>): void

  //
  hasFocus(instance: Ref<QTINavBar | undefined>): Promise<boolean>

  isFocused(instance: Ref<QTINavBar | undefined>): Promise<boolean>

  getLocationOnScreen(
    instance: Ref<QTINavBar | undefined>
  ): Promise<QTEventData<QTLocation>>

  getViewState(instance: Ref<QTINavBar | undefined>): Promise<QTViewState>

  getChildViewState(
    instance: Ref<QTINavBar | undefined>,
    position: number
  ): Promise<QTViewState>
}

export function createQtNavBarAPI(): QtNavBarAPI {
  //---------------------------NavBar------------------------------------------
  function init(instance: Ref<QTINavBar | undefined>, navBar: QTNavBar): void {
    instance.value?.init(navBar)
  }

  function scrollToPosition(
    instance: Ref<QTINavBar | undefined>,
    index: number
  ): void {
    instance.value?.scrollToPosition(index)
  }

  function scrollToTop(instance: Ref<QTINavBar | undefined>): void {
    instance.value?.scrollToTop()
  }

  //--------------------------------BaseView------------------------------------------------
  function requestFocus(
    instance: Ref<QTINavBar | undefined>,
    direction?: QTFocusDirection
  ) {
    instance.value?.requestFocus(direction)
  }

  function requestChildFocus(
    instance: Ref<QTINavBar | undefined>,
    position: number
  ): void {
    instance.value?.requestChildFocus(position)
  }

  function clearFocus(instance: Ref<QTINavBar | undefined>) {
    instance.value?.clearFocus()
  }

  function requestFocusDirectly(
    instance: Ref<QTINavBar | undefined>,
    direction?: QTFocusDirection
  ) {
    instance.value?.requestFocusDirectly(direction)
  }

  function setVisibility(
    instance: Ref<QTINavBar | undefined>,
    v: QTVisibility
  ) {
    instance.value?.setVisibility(v)
  }

  function requestRootLayout(instance: Ref<QTINavBar | undefined>) {
    instance.value?.requestRootLayout()
  }

  function requestLayout(instance: Ref<QTINavBar | undefined>) {
    instance.value?.requestLayout()
  }

  function setDescendantFocusability(
    instance: Ref<QTINavBar | undefined>,
    descendant: QTFocusDescendant
  ): void {
    instance.value?.setDescendantFocusability(descendant)
  }

  function changeDescendantFocusability(
    instance: Ref<QTINavBar | undefined>,
    descendant: QTDescendantFocusability
  ): void {
    instance.value?.changeDescendantFocusability(descendant)
  }

  function forceUpdateRenderNode(instance: Ref<QTINavBar | undefined>): void {
    instance.value?.forceUpdateRenderNode()
  }

  function setBackGroundColor(
    instance: Ref<QTINavBar | undefined>,
    color: string
  ): void {
    instance.value?.setBackGroundColor(color)
  }

  function layoutViewManual(instance: Ref<QTINavBar | undefined>): void {
    instance.value?.layoutViewManual()
  }

  function blockRootFocus(instance: Ref<QTINavBar | undefined>): void {
    instance.value?.blockRootFocus()
  }

  function unBlockRootFocus(instance: Ref<QTINavBar | undefined>): void {
    instance.value?.unBlockRootFocus()
  }

  function changeAlpha(
    instance: Ref<QTINavBar | undefined>,
    alpha: number
  ): void {
    instance.value?.changeAlpha(alpha)
  }

  function setScale(
    instance: Ref<QTINavBar | undefined>,
    x: number,
    y: number,
    duration: number
  ): void {
    instance.value?.setScale(x, y, duration)
  }

  function setPosition(
    instance: Ref<QTINavBar | undefined>,
    x: number,
    y: number,
    z: number
  ): void {
    instance.value?.setPosition(x, y, z)
  }

  function updateLayout(
    instance: Ref<QTINavBar | undefined>,
    width: number,
    height: number,
    x: number,
    y: number
  ): void {
    instance.value?.updateLayout(width, height, x, y)
  }

  function invalidate(instance: Ref<QTINavBar | undefined>): void {
    instance.value?.invalidate()
  }

  function dispatchFunctionForTarget(
    instance: Ref<QTINavBar | undefined>,
    targetName: string,
    functionTargetName: string,
    params: Array<QTNativeParams>,
    delay: number
  ): void {
    instance.value?.dispatchFunctionForTarget(
      targetName,
      functionTargetName,
      params,
      delay
    )
  }

  function setBlockFocusDirections(
    instance: Ref<QTINavBar | undefined>,
    directionList: Array<QTFocusDirectionName>
  ): void {
    instance.value?.setBlockFocusDirections(directionList)
  }

  function setBlockFocusDirectionsOnFail(
    instance: Ref<QTINavBar | undefined>,
    directionList: Array<QTFocusDirectionName>
  ): void {
    instance.value?.setBlockFocusDirectionsOnFail(directionList)
  }

  function setInitFocus(
    instance: Ref<QTINavBar | undefined>,
    sid: string,
    delay?: number
  ): void {
    instance.value?.setInitFocus(sid, delay)
  }

  function setAutoFocus(
    instance: Ref<QTINavBar | undefined>,
    sid: string,
    delay?: number
  ): void {
    instance.value?.setAutoFocus(sid, delay)
  }

  function enabledAutofocus(
    instance: Ref<QTINavBar | undefined>,
    autofocus: boolean
  ): void {
    instance.value?.enabledAutofocus(autofocus)
  }

  function requestAutofocus(instance: Ref<QTINavBar | undefined>): void {
    instance.value?.requestAutofocus()
  }

  function hasFocus(instance: Ref<QTINavBar | undefined>): Promise<boolean> {
    if (instance.value) {
      return instance.value!.hasFocus()
    } else {
      return Promise.reject()
    }
  }

  function isFocused(instance: Ref<QTINavBar | undefined>): Promise<boolean> {
    if (instance.value) {
      return instance.value!.isFocused()
    } else {
      return Promise.reject()
    }
  }

  function getLocationOnScreen(
    instance: Ref<QTINavBar | undefined>
  ): Promise<QTEventData<QTLocation>> {
    if (instance.value) {
      return instance.value!.getLocationOnScreen()
    } else {
      return Promise.reject()
    }
  }

  function getViewState(
    instance: Ref<QTINavBar | undefined>
  ): Promise<QTViewState> {
    if (instance.value) {
      return instance.value!.getViewState()
    } else {
      return Promise.reject()
    }
  }

  function getChildViewState(
    instance: Ref<QTINavBar | undefined>,
    position: number
  ): Promise<QTViewState> {
    if (instance.value) {
      return instance.value!.getChildViewState(position)
    } else {
      return Promise.reject()
    }
  }

  return {
    //---------------------------NavBar------------------------------------------
    init,
    scrollToPosition,
    scrollToTop,
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
