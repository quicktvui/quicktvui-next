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
import type { QTICollapse } from './collapse-instance'
import type { QTCollapse, QTICollapseItem } from './collapse-types'

export interface QtCollapseAPI {
  init(instance: Ref<QTICollapse | undefined>, collapse: QTCollapse): void

  getItem(
    instance: Ref<QTICollapse | undefined>,
    index: number
  ): QTICollapseItem | undefined

  expandItem(instance: Ref<QTICollapse | undefined>, index: number): void

  collapse(instance: Ref<QTICollapse | undefined>): void

  expand(instance: Ref<QTICollapse | undefined>): void

  //-----------------------------------------------------------------------
  requestFocus(
    instance: Ref<QTICollapse | undefined>,
    direction?: QTFocusDirection
  ): void

  requestChildFocus(
    instance: Ref<QTICollapse | undefined>,
    position: number
  ): void

  clearFocus(instance: Ref<QTICollapse | undefined>): void

  requestFocusDirectly(
    instance: Ref<QTICollapse | undefined>,
    direction?: QTFocusDirection
  ): void

  setVisibility(instance: Ref<QTICollapse | undefined>, v: QTVisibility): void

  requestRootLayout(instance: Ref<QTICollapse | undefined>): void

  requestLayout(instance: Ref<QTICollapse | undefined>): void

  //
  setDescendantFocusability(
    instance: Ref<QTICollapse | undefined>,
    descendant: QTFocusDescendant
  ): void

  changeDescendantFocusability(
    instance: Ref<QTICollapse | undefined>,
    descendant: QTDescendantFocusability
  ): void

  forceUpdateRenderNode(instance: Ref<QTICollapse | undefined>): void

  setBackGroundColor(
    instance: Ref<QTICollapse | undefined>,
    color: string
  ): void

  layoutViewManual(instance: Ref<QTICollapse | undefined>): void

  blockRootFocus(instance: Ref<QTICollapse | undefined>): void

  unBlockRootFocus(instance: Ref<QTICollapse | undefined>): void

  changeAlpha(instance: Ref<QTICollapse | undefined>, alpha: number): void

  setScale(
    instance: Ref<QTICollapse | undefined>,
    x: number,
    y: number,
    duration: number
  ): void

  setPosition(
    instance: Ref<QTICollapse | undefined>,
    x: number,
    y: number,
    z: number
  ): void

  updateLayout(
    instance: Ref<QTICollapse | undefined>,
    width: number,
    height: number,
    x: number,
    y: number
  ): void

  invalidate(instance: Ref<QTICollapse | undefined>): void

  dispatchFunctionForTarget(
    instance: Ref<QTICollapse | undefined>,
    targetName: string,
    functionTargetName: string,
    params: Array<QTNativeParams>,
    delay: number
  ): void

  setBlockFocusDirections(
    instance: Ref<QTICollapse | undefined>,
    directionList: Array<QTFocusDirectionName>
  ): void

  setBlockFocusDirectionsOnFail(
    instance: Ref<QTICollapse | undefined>,
    directionList: Array<QTFocusDirectionName>
  ): void

  setInitFocus(
    instance: Ref<QTICollapse | undefined>,
    sid: string,
    delay?: number
  ): void

  setAutoFocus(
    instance: Ref<QTICollapse | undefined>,
    sid: string,
    delay?: number
  ): void

  enabledAutofocus(
    instance: Ref<QTICollapse | undefined>,
    autofocus: boolean
  ): void

  requestAutofocus(instance: Ref<QTICollapse | undefined>): void

  //
  hasFocus(instance: Ref<QTICollapse | undefined>): Promise<boolean>

  isFocused(instance: Ref<QTICollapse | undefined>): Promise<boolean>

  getLocationOnScreen(
    instance: Ref<QTICollapse | undefined>
  ): Promise<QTEventData<QTLocation>>

  getViewState(instance: Ref<QTICollapse | undefined>): Promise<QTViewState>

  getChildViewState(
    instance: Ref<QTICollapse | undefined>,
    position: number
  ): Promise<QTViewState>
}

export function createQtCollapseAPI(): QtCollapseAPI {
  function init(
    instance: Ref<QTICollapse | undefined>,
    collapse: QTCollapse
  ): void {
    instance.value?.init(collapse)
  }

  function getItem(
    instance: Ref<QTICollapse | undefined>,
    index: number
  ): QTICollapseItem | undefined {
    return instance.value?.getItem(index)
  }

  function expandItem(
    instance: Ref<QTICollapse | undefined>,
    index: number
  ): void {
    instance.value?.expandItem(index)
  }

  function collapse(instance: Ref<QTICollapse | undefined>): void {
    instance.value?.collapse()
  }

  function expand(instance: Ref<QTICollapse | undefined>): void {
    instance.value?.expand()
  }

  function requestFocus(
    instance: Ref<QTICollapse | undefined>,
    direction?: QTFocusDirection
  ) {
    instance.value?.requestFocus(direction)
  }

  function requestChildFocus(
    instance: Ref<QTICollapse | undefined>,
    position: number
  ): void {
    instance.value?.requestChildFocus(position)
  }

  function clearFocus(instance: Ref<QTICollapse | undefined>) {
    instance.value?.clearFocus()
  }

  function requestFocusDirectly(
    instance: Ref<QTICollapse | undefined>,
    direction?: QTFocusDirection
  ) {
    instance.value?.requestFocusDirectly(direction)
  }

  function setVisibility(
    instance: Ref<QTICollapse | undefined>,
    v: QTVisibility
  ) {
    instance.value?.setVisibility(v)
  }

  function requestRootLayout(instance: Ref<QTICollapse | undefined>) {
    instance.value?.requestRootLayout()
  }

  function requestLayout(instance: Ref<QTICollapse | undefined>) {
    instance.value?.requestLayout()
  }

  function setDescendantFocusability(
    instance: Ref<QTICollapse | undefined>,
    descendant: QTFocusDescendant
  ): void {
    instance.value?.setDescendantFocusability(descendant)
  }

  function changeDescendantFocusability(
    instance: Ref<QTICollapse | undefined>,
    descendant: QTDescendantFocusability
  ): void {
    instance.value?.changeDescendantFocusability(descendant)
  }

  function forceUpdateRenderNode(instance: Ref<QTICollapse | undefined>): void {
    instance.value?.forceUpdateRenderNode()
  }

  function setBackGroundColor(
    instance: Ref<QTICollapse | undefined>,
    color: string
  ): void {
    instance.value?.setBackGroundColor(color)
  }

  function layoutViewManual(instance: Ref<QTICollapse | undefined>): void {
    instance.value?.layoutViewManual()
  }

  function blockRootFocus(instance: Ref<QTICollapse | undefined>): void {
    instance.value?.blockRootFocus()
  }

  function unBlockRootFocus(instance: Ref<QTICollapse | undefined>): void {
    instance.value?.unBlockRootFocus()
  }

  function changeAlpha(
    instance: Ref<QTICollapse | undefined>,
    alpha: number
  ): void {
    instance.value?.changeAlpha(alpha)
  }

  function setScale(
    instance: Ref<QTICollapse | undefined>,
    x: number,
    y: number,
    duration: number
  ): void {
    instance.value?.setScale(x, y, duration)
  }

  function setPosition(
    instance: Ref<QTICollapse | undefined>,
    x: number,
    y: number,
    z: number
  ): void {
    instance.value?.setPosition(x, y, z)
  }

  function updateLayout(
    instance: Ref<QTICollapse | undefined>,
    width: number,
    height: number,
    x: number,
    y: number
  ): void {
    instance.value?.updateLayout(width, height, x, y)
  }

  function invalidate(instance: Ref<QTICollapse | undefined>): void {
    instance.value?.invalidate()
  }

  function dispatchFunctionForTarget(
    instance: Ref<QTICollapse | undefined>,
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
    instance: Ref<QTICollapse | undefined>,
    directionList: Array<QTFocusDirectionName>
  ): void {
    instance.value?.setBlockFocusDirections(directionList)
  }

  function setBlockFocusDirectionsOnFail(
    instance: Ref<QTICollapse | undefined>,
    directionList: Array<QTFocusDirectionName>
  ): void {
    instance.value?.setBlockFocusDirectionsOnFail(directionList)
  }

  function setInitFocus(
    instance: Ref<QTICollapse | undefined>,
    sid: string,
    delay?: number
  ): void {
    instance.value?.setInitFocus(sid, delay)
  }

  function setAutoFocus(
    instance: Ref<QTICollapse | undefined>,
    sid: string,
    delay?: number
  ): void {
    instance.value?.setAutoFocus(sid, delay)
  }

  function enabledAutofocus(
    instance: Ref<QTICollapse | undefined>,
    autofocus: boolean
  ): void {
    instance.value?.enabledAutofocus(autofocus)
  }

  function requestAutofocus(instance: Ref<QTICollapse | undefined>): void {
    instance.value?.requestAutofocus()
  }

  function hasFocus(instance: Ref<QTICollapse | undefined>): Promise<boolean> {
    if (instance.value) {
      return instance.value!.hasFocus()
    } else {
      return Promise.reject()
    }
  }

  function isFocused(instance: Ref<QTICollapse | undefined>): Promise<boolean> {
    if (instance.value) {
      return instance.value!.isFocused()
    } else {
      return Promise.reject()
    }
  }

  function getLocationOnScreen(
    instance: Ref<QTICollapse | undefined>
  ): Promise<QTEventData<QTLocation>> {
    if (instance.value) {
      return instance.value!.getLocationOnScreen()
    } else {
      return Promise.reject()
    }
  }

  function getViewState(
    instance: Ref<QTICollapse | undefined>
  ): Promise<QTViewState> {
    if (instance.value) {
      return instance.value!.getViewState()
    } else {
      return Promise.reject()
    }
  }

  function getChildViewState(
    instance: Ref<QTICollapse | undefined>,
    position: number
  ): Promise<QTViewState> {
    if (instance.value) {
      return instance.value?.getChildViewState(position)
    } else {
      return Promise.reject()
    }
  }

  return {
    init,
    getItem,
    expandItem,
    collapse,
    expand,
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
