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
import type { QTIMediaSeries } from './series-instance'
import type {
  QTMediaSeries,
  QTMediaSeriesData,
  QTMediaSeriesGroup,
  QTMediaSeriesStyleType,
  QTMediaSeriesType,
} from './series-types'

export interface QtMediaSeriesAPI {
  //--------------------------------MediaSeries------------------------------------------------
  setup(instance: Ref<QTIMediaSeries | undefined>): void

  setInitData(
    instance: Ref<QTIMediaSeries | undefined>,
    type: QTMediaSeriesType,
    group: QTMediaSeriesGroup,
    styleType: QTMediaSeriesStyleType,
    data: QTMediaSeriesData
  ): void

  setPageData(
    instance: Ref<QTIMediaSeries | undefined>,
    page: number,
    data: Array<QTMediaSeries>
  ): void

  scrollTo(instance: Ref<QTIMediaSeries | undefined>, position: number): void

  scrollToWithOffset(
    instance: Ref<QTIMediaSeries | undefined>,
    position: number,
    offset: number,
    anim: boolean
  ): void

  setSelected(instance: Ref<QTIMediaSeries | undefined>, position: number): void

  setGroupSelected(
    instance: Ref<QTIMediaSeries | undefined>,
    position: number
  ): void

  release(instance: Ref<QTIMediaSeries | undefined>): void

  //--------------------------------BaseView------------------------------------------------
  requestFocus(
    instance: Ref<QTIMediaSeries | undefined>,
    direction?: QTFocusDirection
  ): void

  requestChildFocus(
    instance: Ref<QTIMediaSeries | undefined>,
    position: number
  ): void

  clearFocus(instance: Ref<QTIMediaSeries | undefined>): void

  requestFocusDirectly(
    instance: Ref<QTIMediaSeries | undefined>,
    direction?: QTFocusDirection
  ): void

  setVisibility(
    instance: Ref<QTIMediaSeries | undefined>,
    v: QTVisibility
  ): void

  requestRootLayout(instance: Ref<QTIMediaSeries | undefined>): void

  requestLayout(instance: Ref<QTIMediaSeries | undefined>): void

  //
  setDescendantFocusability(
    instance: Ref<QTIMediaSeries | undefined>,
    descendant: QTFocusDescendant
  ): void

  changeDescendantFocusability(
    instance: Ref<QTIMediaSeries | undefined>,
    descendant: QTDescendantFocusability
  ): void

  forceUpdateRenderNode(instance: Ref<QTIMediaSeries | undefined>): void

  setBackGroundColor(
    instance: Ref<QTIMediaSeries | undefined>,
    color: string
  ): void

  layoutViewManual(instance: Ref<QTIMediaSeries | undefined>): void

  blockRootFocus(instance: Ref<QTIMediaSeries | undefined>): void

  unBlockRootFocus(instance: Ref<QTIMediaSeries | undefined>): void

  changeAlpha(instance: Ref<QTIMediaSeries | undefined>, alpha: number): void

  setScale(
    instance: Ref<QTIMediaSeries | undefined>,
    x: number,
    y: number,
    duration: number
  ): void

  setPosition(
    instance: Ref<QTIMediaSeries | undefined>,
    x: number,
    y: number,
    z: number
  ): void

  updateLayout(
    instance: Ref<QTIMediaSeries | undefined>,
    width: number,
    height: number,
    x: number,
    y: number
  ): void

  invalidate(instance: Ref<QTIMediaSeries | undefined>): void

  dispatchFunctionForTarget(
    instance: Ref<QTIMediaSeries | undefined>,
    targetName: string,
    functionTargetName: string,
    params: Array<QTNativeParams>,
    delay: number
  ): void

  setBlockFocusDirections(
    instance: Ref<QTIMediaSeries | undefined>,
    directionList: Array<QTFocusDirectionName>
  ): void

  setBlockFocusDirectionsOnFail(
    instance: Ref<QTIMediaSeries | undefined>,
    directionList: Array<QTFocusDirectionName>
  ): void

  setInitFocus(
    instance: Ref<QTIMediaSeries | undefined>,
    sid: string,
    delay?: number
  ): void

  setAutoFocus(
    instance: Ref<QTIMediaSeries | undefined>,
    sid: string,
    delay?: number
  ): void

  enabledAutofocus(
    instance: Ref<QTIMediaSeries | undefined>,
    autofocus: boolean
  ): void

  requestAutofocus(instance: Ref<QTIMediaSeries | undefined>): void

  //
  hasFocus(instance: Ref<QTIMediaSeries | undefined>): Promise<boolean>

  isFocused(instance: Ref<QTIMediaSeries | undefined>): Promise<boolean>

  getLocationOnScreen(
    instance: Ref<QTIMediaSeries | undefined>
  ): Promise<QTEventData<QTLocation>>

  getViewState(instance: Ref<QTIMediaSeries | undefined>): Promise<QTViewState>

  getChildViewState(
    instance: Ref<QTIMediaSeries | undefined>,
    position: number
  ): Promise<QTViewState>
}

export function createQtMediaSeriesAPI(): QtMediaSeriesAPI {
  function setup(instance: Ref<QTIMediaSeries | undefined>): void {
    instance.value?.setup()
  }

  function setInitData(
    instance: Ref<QTIMediaSeries | undefined>,
    type: QTMediaSeriesType,
    group: QTMediaSeriesGroup,
    styleType: QTMediaSeriesStyleType,
    data: QTMediaSeriesData
  ): void {
    instance.value?.setInitData(type, group, styleType, data)
  }

  function setPageData(
    instance: Ref<QTIMediaSeries | undefined>,
    page: number,
    data: Array<QTMediaSeries>
  ): void {
    instance.value?.setPageData(page, data)
  }

  function scrollTo(
    instance: Ref<QTIMediaSeries | undefined>,
    position: number
  ): void {
    instance.value?.scrollTo(position)
  }

  function scrollToWithOffset(
    instance: Ref<QTIMediaSeries | undefined>,
    position: number,
    offset: number,
    anim: boolean
  ): void {
    instance.value?.scrollToWithOffset(position, offset, anim)
  }

  function setSelected(
    instance: Ref<QTIMediaSeries | undefined>,
    position: number
  ): void {
    instance.value?.setSelected(position)
  }

  function setGroupSelected(
    instance: Ref<QTIMediaSeries | undefined>,
    position: number
  ): void {
    instance.value?.setGroupSelected(position)
  }

  function requestFocus(
    instance: Ref<QTIMediaSeries | undefined>,
    position: number
  ): void {
    instance.value?.requestFocus(position)
  }

  function release(instance: Ref<QTIMediaSeries | undefined>): void {
    instance.value?.release()
  }

  //--------------------------------BaseView------------------------------------------------

  function requestChildFocus(
    instance: Ref<QTIMediaSeries | undefined>,
    position: number
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'requestChildFocus', [position])
    } else if (isRef(instance)) {
      instance.value?.requestChildFocus(position)
    }
  }

  function clearFocus(instance: Ref<QTIMediaSeries | undefined>) {
    if (isString(instance)) {
      callUIFunction(instance, 'clearFocus', [])
    } else if (isRef(instance)) {
      instance.value?.clearFocus()
    }
  }

  function requestFocusDirectly(
    instance: Ref<QTIMediaSeries | undefined>,
    direction?: QTFocusDirection
  ) {
    if (isString(instance)) {
      callUIFunction(instance, 'requestFocusDirectly', [direction])
    } else if (isRef(instance)) {
      instance.value?.requestFocusDirectly(direction)
    }
  }

  function setVisibility(
    instance: Ref<QTIMediaSeries | undefined>,
    v: QTVisibility
  ) {
    if (isString(instance)) {
      callUIFunction(instance, 'changeVisibility', [v])
    } else if (isRef(instance)) {
      instance.value?.setVisibility(v)
    }
  }

  function requestRootLayout(instance: Ref<QTIMediaSeries | undefined>) {
    if (isString(instance)) {
      callUIFunction(instance, 'requestRootLayout', [])
    } else if (isRef(instance)) {
      instance.value?.requestRootLayout()
    }
  }

  function requestLayout(instance: Ref<QTIMediaSeries | undefined>) {
    if (isString(instance)) {
      callUIFunction(instance, 'requestLayout', [])
    } else if (isRef(instance)) {
      instance.value?.requestLayout()
    }
  }

  function setDescendantFocusability(
    instance: Ref<QTIMediaSeries | undefined>,
    descendant: QTFocusDescendant
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'setDescendantFocusability', [descendant])
    } else if (isRef(instance)) {
      instance.value?.setDescendantFocusability(descendant)
    }
  }

  function changeDescendantFocusability(
    instance: Ref<QTIMediaSeries | undefined>,
    descendant: QTDescendantFocusability
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'changeDescendantFocusability', [descendant])
    } else if (isRef(instance)) {
      instance.value?.changeDescendantFocusability(descendant)
    }
  }

  function forceUpdateRenderNode(
    instance: Ref<QTIMediaSeries | undefined>
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'forceUpdateRenderNode', [])
    } else if (isRef(instance)) {
      instance.value?.forceUpdateRenderNode()
    }
  }

  function setBackGroundColor(
    instance: Ref<QTIMediaSeries | undefined>,
    color: string
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'setBackGroundColor', [color])
    } else if (isRef(instance)) {
      instance.value?.setBackGroundColor(color)
    }
  }

  function layoutViewManual(instance: Ref<QTIMediaSeries | undefined>): void {
    if (isString(instance)) {
      callUIFunction(instance, 'layoutViewManual', [])
    } else if (isRef(instance)) {
      instance.value?.layoutViewManual()
    }
  }

  function blockRootFocus(instance: Ref<QTIMediaSeries | undefined>): void {
    if (isString(instance)) {
      callUIFunction(instance, 'blockRootFocus', [])
    } else if (isRef(instance)) {
      instance.value?.blockRootFocus()
    }
  }

  function unBlockRootFocus(instance: Ref<QTIMediaSeries | undefined>): void {
    if (isString(instance)) {
      callUIFunction(instance, 'unBlockRootFocus', [])
    } else if (isRef(instance)) {
      instance.value?.unBlockRootFocus()
    }
  }

  function changeAlpha(
    instance: Ref<QTIMediaSeries | undefined>,
    alpha: number
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'changeAlpha', [alpha])
    } else if (isRef(instance)) {
      instance.value?.changeAlpha(alpha)
    }
  }

  function setScale(
    instance: Ref<QTIMediaSeries | undefined>,
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
    instance: Ref<QTIMediaSeries | undefined>,
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
    instance: Ref<QTIMediaSeries | undefined>,
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

  function invalidate(instance: Ref<QTIMediaSeries | undefined>): void {
    if (isString(instance)) {
      callUIFunction(instance, 'invalidate', [])
    } else if (isRef(instance)) {
      instance.value?.invalidate()
    }
  }

  function dispatchFunctionForTarget(
    instance: Ref<QTIMediaSeries | undefined>,
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
    instance: Ref<QTIMediaSeries | undefined>,
    directionList: Array<QTFocusDirectionName>
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'setBlockFocusDirections', [directionList])
    } else if (isRef(instance)) {
      instance.value?.setBlockFocusDirections(directionList)
    }
  }

  function setBlockFocusDirectionsOnFail(
    instance: Ref<QTIMediaSeries | undefined>,
    directionList: Array<QTFocusDirectionName>
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'setBlockFocusDirectionsOnFail', [directionList])
    } else if (isRef(instance)) {
      instance.value?.setBlockFocusDirectionsOnFail(directionList)
    }
  }

  function setInitFocus(
    instance: Ref<QTIMediaSeries | undefined>,
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
    instance: Ref<QTIMediaSeries | undefined>,
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
    instance: Ref<QTIMediaSeries | undefined>,
    autofocus: boolean
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'setAutoFocus', [autofocus])
    } else if (isRef(instance)) {
      instance.value?.enabledAutofocus(autofocus)
    }
  }

  function requestAutofocus(instance: Ref<QTIMediaSeries | undefined>): void {
    if (isString(instance)) {
      callUIFunction(instance, 'requestAutofocus', [])
    } else if (isRef(instance)) {
      instance.value?.requestAutofocus()
    }
  }

  function hasFocus(
    instance: Ref<QTIMediaSeries | undefined>
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
    instance: Ref<QTIMediaSeries | undefined>
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
    instance: Ref<QTIMediaSeries | undefined>
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
    instance: Ref<QTIMediaSeries | undefined>
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
    instance: Ref<QTIMediaSeries | undefined>,
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
    setup,
    setInitData,
    setPageData,
    scrollTo,
    scrollToWithOffset,
    setSelected,
    setGroupSelected,
    requestFocus,
    release,
    //--------------------------------------------------------------------------------
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
