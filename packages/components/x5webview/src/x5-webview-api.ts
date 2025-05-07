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
import type { QTIX5WebView } from './x5-webview-instance'

export interface QtX5WebViewAPI {
  //------------------------------------X5WebView--------------------------------------------
  loadUrl(instance: string | Ref<QTIX5WebView | undefined>, url: string): void

  evaluateJavascript(
    instance: string | Ref<QTIX5WebView | undefined>,
    value: string
  ): Promise<string | undefined | null>

  canGoBack(instance: string | Ref<QTIX5WebView | undefined>): void

  goBack(instance: string | Ref<QTIX5WebView | undefined>): void

  canGoForward(instance: string | Ref<QTIX5WebView | undefined>): void

  goForward(instance: string | Ref<QTIX5WebView | undefined>): void

  canGoBackOrForward(
    instance: string | Ref<QTIX5WebView | undefined>,
    steps: number
  ): void

  goBackOrForward(
    instance: string | Ref<QTIX5WebView | undefined>,
    steps: number
  ): void

  onResume(instance: string | Ref<QTIX5WebView | undefined>): void

  onPause(instance: string | Ref<QTIX5WebView | undefined>): void

  pauseTimers(instance: string | Ref<QTIX5WebView | undefined>): void

  resumeTimers(instance: string | Ref<QTIX5WebView | undefined>): void

  destroy(instance: string | Ref<QTIX5WebView | undefined>): void

  setJavaScriptEnabled(
    instance: string | Ref<QTIX5WebView | undefined>,
    value: boolean
  ): void

  setPluginState(
    instance: string | Ref<QTIX5WebView | undefined>,
    value: number
  ): void

  setJavaScriptCanOpenWindowsAutomatically(
    instance: string | Ref<QTIX5WebView | undefined>,
    value: boolean
  ): void

  setUseWideViewPort(
    instance: string | Ref<QTIX5WebView | undefined>,
    value: boolean
  ): void

  setLoadWithOverviewMode(
    instance: string | Ref<QTIX5WebView | undefined>,
    value: boolean
  ): void

  setSupportZoom(
    instance: string | Ref<QTIX5WebView | undefined>,
    value: boolean
  ): void

  setBuiltInZoomControls(
    instance: string | Ref<QTIX5WebView | undefined>,
    value: boolean
  ): void

  setDisplayZoomControls(
    instance: string | Ref<QTIX5WebView | undefined>,
    value: boolean
  ): void

  setAllowFileAccess(
    instance: string | Ref<QTIX5WebView | undefined>,
    value: boolean
  ): void

  setDomStorageEnabled(
    instance: string | Ref<QTIX5WebView | undefined>,
    value: boolean
  ): void

  setDatabaseEnabled(
    instance: string | Ref<QTIX5WebView | undefined>,
    value: boolean
  ): void

  setAppCacheEnabled(
    instance: string | Ref<QTIX5WebView | undefined>,
    value: boolean
  ): void

  setAppCachePath(
    instance: string | Ref<QTIX5WebView | undefined>,
    value: boolean
  ): void

  setMediaPlaybackRequiresUserGesture(
    instance: string | Ref<QTIX5WebView | undefined>,
    value: boolean
  ): void

  setStandardFontFamily(
    instance: string | Ref<QTIX5WebView | undefined>,
    value: string
  ): void

  setFixedFontFamily(
    instance: string | Ref<QTIX5WebView | undefined>,
    value: string
  ): void

  setSansSerifFontFamily(
    instance: string | Ref<QTIX5WebView | undefined>,
    value: string
  ): void

  setSerifFontFamily(
    instance: string | Ref<QTIX5WebView | undefined>,
    value: string
  ): void

  setCursiveFontFamily(
    instance: string | Ref<QTIX5WebView | undefined>,
    value: string
  ): void

  setFantasyFontFamily(
    instance: string | Ref<QTIX5WebView | undefined>,
    value: string
  ): void

  setTextZoom(
    instance: string | Ref<QTIX5WebView | undefined>,
    value: number
  ): void

  setMinimumFontSize(
    instance: string | Ref<QTIX5WebView | undefined>,
    value: number
  ): void

  setDefaultFontSize(
    instance: string | Ref<QTIX5WebView | undefined>,
    value: number
  ): void

  setLayoutAlgorithm(
    instance: string | Ref<QTIX5WebView | undefined>,
    value: number
  ): void

  setLoadsImagesAutomatically(
    instance: string | Ref<QTIX5WebView | undefined>,
    value: boolean
  ): void

  setDefaultTextEncodingName(
    instance: string | Ref<QTIX5WebView | undefined>,
    value: string
  ): void

  setNeedInitialFocus(
    instance: string | Ref<QTIX5WebView | undefined>,
    value: boolean
  ): void

  setGeolocationEnabled(
    instance: string | Ref<QTIX5WebView | undefined>,
    value: boolean
  ): void

  setBlockNetworkLoads(
    instance: string | Ref<QTIX5WebView | undefined>,
    value: boolean
  ): void

  setSupportMultipleWindows(
    instance: string | Ref<QTIX5WebView | undefined>,
    value: boolean
  ): void

  setAppCacheMaxSize(
    instance: string | Ref<QTIX5WebView | undefined>,
    value: number
  ): void

  setRenderPriority(
    instance: string | Ref<QTIX5WebView | undefined>,
    value: number
  ): void

  setCacheMode(
    instance: string | Ref<QTIX5WebView | undefined>,
    value: number
  ): void

  //-----------------------------------------------
  setAllowContentAccess(
    instance: string | Ref<QTIX5WebView | undefined>,
    value: boolean
  ): void

  setEnableSmoothTransition(
    instance: string | Ref<QTIX5WebView | undefined>,
    value: boolean
  ): void

  setSaveFormData(
    instance: string | Ref<QTIX5WebView | undefined>,
    value: boolean
  ): void

  setSavePassword(
    instance: string | Ref<QTIX5WebView | undefined>,
    value: boolean
  ): void

  setTextSize(
    instance: string | Ref<QTIX5WebView | undefined>,
    value: number
  ): void

  setDefaultZoom(
    instance: string | Ref<QTIX5WebView | undefined>,
    value: number
  ): void

  setLightTouchEnabled(
    instance: string | Ref<QTIX5WebView | undefined>,
    value: boolean
  ): void

  setMinimumLogicalFontSize(
    instance: string | Ref<QTIX5WebView | undefined>,
    value: number
  ): void

  setDefaultFixedFontSize(
    instance: string | Ref<QTIX5WebView | undefined>,
    value: number
  ): void

  setBlockNetworkImage(
    instance: string | Ref<QTIX5WebView | undefined>,
    value: boolean
  ): void

  setAllowUniversalAccessFromFileURLs(
    instance: string | Ref<QTIX5WebView | undefined>,
    value: boolean
  ): void

  setAllowFileAccessFromFileURLs(
    instance: string | Ref<QTIX5WebView | undefined>,
    value: boolean
  ): void

  setDatabasePath(
    instance: string | Ref<QTIX5WebView | undefined>,
    value: string
  ): void

  setGeolocationDatabasePath(
    instance: string | Ref<QTIX5WebView | undefined>,
    value: string
  ): void

  setUserAgentString(
    instance: string | Ref<QTIX5WebView | undefined>,
    value: string
  ): void

  setMixedContentMode(
    instance: string | Ref<QTIX5WebView | undefined>,
    value: number
  ): void

  setOffscreenPreRaster(
    instance: string | Ref<QTIX5WebView | undefined>,
    value: boolean
  ): void

  setSafeBrowsingEnabled(
    instance: string | Ref<QTIX5WebView | undefined>,
    value: boolean
  ): void

  setForceDark(
    instance: string | Ref<QTIX5WebView | undefined>,
    value: number
  ): void

  setDisabledActionModeMenuItems(
    instance: string | Ref<QTIX5WebView | undefined>,
    value: number
  ): void

  initJavaScriptInterface(
    instance: string | Ref<QTIX5WebView | undefined>
  ): void

  removeJavaScriptInterface(
    instance: string | Ref<QTIX5WebView | undefined>
  ): void

  initWebViewFocus(
    instance: string | Ref<QTIX5WebView | undefined>,
    delayTime: number,
    x: number,
    y: number
  ): void

  //-------------------------------BaseView-------------------------------------------------
  requestFocus(
    instance: string | Ref<QTIX5WebView | undefined>,
    direction?: QTFocusDirection
  ): void

  requestChildFocus(
    instance: string | Ref<QTIX5WebView | undefined>,
    position: number
  ): void

  clearFocus(instance: string | Ref<QTIX5WebView | undefined>): void

  requestFocusDirectly(
    instance: string | Ref<QTIX5WebView | undefined>,
    direction?: QTFocusDirection
  ): void

  setVisibility(
    instance: string | Ref<QTIX5WebView | undefined>,
    v: QTVisibility
  ): void

  requestRootLayout(instance: string | Ref<QTIX5WebView | undefined>): void

  requestLayout(instance: string | Ref<QTIX5WebView | undefined>): void

  //
  setDescendantFocusability(
    instance: string | Ref<QTIX5WebView | undefined>,
    descendant: QTFocusDescendant
  ): void

  changeDescendantFocusability(
    instance: string | Ref<QTIX5WebView | undefined>,
    descendant: QTDescendantFocusability
  ): void

  forceUpdateRenderNode(instance: string | Ref<QTIX5WebView | undefined>): void

  setBackGroundColor(
    instance: string | Ref<QTIX5WebView | undefined>,
    color: string
  ): void

  layoutViewManual(instance: string | Ref<QTIX5WebView | undefined>): void

  blockRootFocus(instance: string | Ref<QTIX5WebView | undefined>): void

  unBlockRootFocus(instance: string | Ref<QTIX5WebView | undefined>): void

  changeAlpha(
    instance: string | Ref<QTIX5WebView | undefined>,
    alpha: number
  ): void

  setScale(
    instance: string | Ref<QTIX5WebView | undefined>,
    x: number,
    y: number,
    duration: number
  ): void

  setPosition(
    instance: string | Ref<QTIX5WebView | undefined>,
    x: number,
    y: number,
    z: number
  ): void

  updateLayout(
    instance: string | Ref<QTIX5WebView | undefined>,
    width: number,
    height: number,
    x: number,
    y: number
  ): void

  invalidate(instance: string | Ref<QTIX5WebView | undefined>): void

  dispatchFunctionForTarget(
    instance: string | Ref<QTIX5WebView | undefined>,
    targetName: string,
    functionTargetName: string,
    params: Array<QTNativeParams>,
    delay: number
  ): void

  setBlockFocusDirections(
    instance: string | Ref<QTIX5WebView | undefined>,
    directionList: Array<QTFocusDirectionName>
  ): void

  setBlockFocusDirectionsOnFail(
    instance: string | Ref<QTIX5WebView | undefined>,
    directionList: Array<QTFocusDirectionName>
  ): void

  setInitFocus(
    instance: string | Ref<QTIX5WebView | undefined>,
    sid: string,
    delay?: number
  ): void

  setAutoFocus(
    instance: string | Ref<QTIX5WebView | undefined>,
    sid: string,
    delay?: number
  ): void

  enabledAutofocus(
    instance: string | Ref<QTIX5WebView | undefined>,
    autofocus: boolean
  ): void

  requestAutofocus(instance: string | Ref<QTIX5WebView | undefined>): void

  //
  hasFocus(instance: string | Ref<QTIX5WebView | undefined>): Promise<boolean>

  isFocused(instance: string | Ref<QTIX5WebView | undefined>): Promise<boolean>

  getLocationOnScreen(
    instance: string | Ref<QTIX5WebView | undefined>
  ): Promise<QTEventData<QTLocation>>

  getViewState(
    instance: string | Ref<QTIX5WebView | undefined>
  ): Promise<QTViewState>

  getChildViewState(
    instance: string | Ref<QTIX5WebView | undefined>,
    position: number
  ): Promise<QTViewState>
}

export function createQtX5WebViewAPI(): QtX5WebViewAPI {
  //--------------------------------------------------------------------------------
  function requestFocus(
    instance: string | Ref<QTIX5WebView | undefined>,
    direction?: QTFocusDirection
  ) {
    if (isString(instance)) {
      callUIFunction(instance, 'requestFocus', [direction])
    } else if (isRef(instance)) {
      instance.value?.requestFocus(direction)
    }
  }

  function requestChildFocus(
    instance: string | Ref<QTIX5WebView | undefined>,
    position: number
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'requestChildFocus', [position])
    } else if (isRef(instance)) {
      instance.value?.requestChildFocus(position)
    }
  }

  function clearFocus(instance: string | Ref<QTIX5WebView | undefined>) {
    if (isString(instance)) {
      callUIFunction(instance, 'clearFocus', [])
    } else if (isRef(instance)) {
      instance.value?.clearFocus()
    }
  }

  function requestFocusDirectly(
    instance: string | Ref<QTIX5WebView | undefined>,
    direction?: QTFocusDirection
  ) {
    if (isString(instance)) {
      callUIFunction(instance, 'requestFocusDirectly', [direction])
    } else if (isRef(instance)) {
      instance.value?.requestFocusDirectly(direction)
    }
  }

  function setVisibility(
    instance: string | Ref<QTIX5WebView | undefined>,
    v: QTVisibility
  ) {
    if (isString(instance)) {
      callUIFunction(instance, 'changeVisibility', [v])
    } else if (isRef(instance)) {
      instance.value?.setVisibility(v)
    }
  }

  function requestRootLayout(instance: string | Ref<QTIX5WebView | undefined>) {
    if (isString(instance)) {
      callUIFunction(instance, 'requestRootLayout', [])
    } else if (isRef(instance)) {
      instance.value?.requestRootLayout()
    }
  }

  function requestLayout(instance: string | Ref<QTIX5WebView | undefined>) {
    if (isString(instance)) {
      callUIFunction(instance, 'requestLayout', [])
    } else if (isRef(instance)) {
      instance.value?.requestLayout()
    }
  }

  function setDescendantFocusability(
    instance: string | Ref<QTIX5WebView | undefined>,
    descendant: QTFocusDescendant
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'setDescendantFocusability', [descendant])
    } else if (isRef(instance)) {
      instance.value?.setDescendantFocusability(descendant)
    }
  }

  function changeDescendantFocusability(
    instance: string | Ref<QTIX5WebView | undefined>,
    descendant: QTDescendantFocusability
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'changeDescendantFocusability', [descendant])
    } else if (isRef(instance)) {
      instance.value?.changeDescendantFocusability(descendant)
    }
  }

  function forceUpdateRenderNode(
    instance: string | Ref<QTIX5WebView | undefined>
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'forceUpdateRenderNode', [])
    } else if (isRef(instance)) {
      instance.value?.forceUpdateRenderNode()
    }
  }

  function setBackGroundColor(
    instance: string | Ref<QTIX5WebView | undefined>,
    color: string
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'setBackGroundColor', [color])
    } else if (isRef(instance)) {
      instance.value?.setBackGroundColor(color)
    }
  }

  function layoutViewManual(
    instance: string | Ref<QTIX5WebView | undefined>
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'layoutViewManual', [])
    } else if (isRef(instance)) {
      instance.value?.layoutViewManual()
    }
  }

  function blockRootFocus(
    instance: string | Ref<QTIX5WebView | undefined>
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'blockRootFocus', [])
    } else if (isRef(instance)) {
      instance.value?.blockRootFocus()
    }
  }

  function unBlockRootFocus(
    instance: string | Ref<QTIX5WebView | undefined>
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'unBlockRootFocus', [])
    } else if (isRef(instance)) {
      instance.value?.unBlockRootFocus()
    }
  }

  function changeAlpha(
    instance: string | Ref<QTIX5WebView | undefined>,
    alpha: number
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'changeAlpha', [alpha])
    } else if (isRef(instance)) {
      instance.value?.changeAlpha(alpha)
    }
  }

  function setScale(
    instance: string | Ref<QTIX5WebView | undefined>,
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
    instance: string | Ref<QTIX5WebView | undefined>,
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
    instance: string | Ref<QTIX5WebView | undefined>,
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

  function invalidate(instance: string | Ref<QTIX5WebView | undefined>): void {
    if (isString(instance)) {
      callUIFunction(instance, 'invalidate', [])
    } else if (isRef(instance)) {
      instance.value?.invalidate()
    }
  }

  function dispatchFunctionForTarget(
    instance: string | Ref<QTIX5WebView | undefined>,
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
    instance: string | Ref<QTIX5WebView | undefined>,
    directionList: Array<QTFocusDirectionName>
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'setBlockFocusDirections', [directionList])
    } else if (isRef(instance)) {
      instance.value?.setBlockFocusDirections(directionList)
    }
  }

  function setBlockFocusDirectionsOnFail(
    instance: string | Ref<QTIX5WebView | undefined>,
    directionList: Array<QTFocusDirectionName>
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'setBlockFocusDirectionsOnFail', [directionList])
    } else if (isRef(instance)) {
      instance.value?.setBlockFocusDirectionsOnFail(directionList)
    }
  }

  function setInitFocus(
    instance: string | Ref<QTIX5WebView | undefined>,
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
    instance: string | Ref<QTIX5WebView | undefined>,
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
    instance: string | Ref<QTIX5WebView | undefined>,
    autofocus: boolean
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'setAutoFocus', [autofocus])
    } else if (isRef(instance)) {
      instance.value?.enabledAutofocus(autofocus)
    }
  }

  function requestAutofocus(
    instance: string | Ref<QTIX5WebView | undefined>
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'requestAutofocus', [])
    } else if (isRef(instance)) {
      instance.value?.requestAutofocus()
    }
  }

  function hasFocus(
    instance: string | Ref<QTIX5WebView | undefined>
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
    instance: string | Ref<QTIX5WebView | undefined>
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
    instance: string | Ref<QTIX5WebView | undefined>
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
    instance: string | Ref<QTIX5WebView | undefined>
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
    instance: string | Ref<QTIX5WebView | undefined>,
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

  //--------------------------------------------------------------------------------
  function loadUrl(
    instance: string | Ref<QTIX5WebView | undefined>,
    url: string
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'loadUrl', [url])
    } else if (isRef(instance) && instance.value) {
      instance.value?.loadUrl(url)
    }
  }

  function evaluateJavascript(
    instance: string | Ref<QTIX5WebView | undefined>,
    value: string
  ): Promise<string | undefined | null> {
    if (isString(instance)) {
      return callUIFunctionWithPromise<string | undefined | null>(
        instance,
        'evaluateJavascript',
        []
      )
    } else if (isRef(instance) && instance.value) {
      return instance.value!.evaluateJavascript(value)
    } else {
      return Promise.reject()
    }
  }

  function canGoBack(instance: string | Ref<QTIX5WebView | undefined>): void {
    if (isString(instance)) {
      callUIFunction(instance, 'canGoBack', [])
    } else if (isRef(instance) && instance.value) {
      instance.value?.canGoBack()
    }
  }

  function goBack(instance: string | Ref<QTIX5WebView | undefined>): void {
    if (isString(instance)) {
      callUIFunction(instance, 'goBack', [])
    } else if (isRef(instance) && instance.value) {
      instance.value?.goBack()
    }
  }

  function canGoForward(
    instance: string | Ref<QTIX5WebView | undefined>
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'canGoForward', [])
    } else if (isRef(instance) && instance.value) {
      instance.value?.canGoForward()
    }
  }

  function goForward(instance: string | Ref<QTIX5WebView | undefined>): void {
    if (isString(instance)) {
      callUIFunction(instance, 'goForward', [])
    } else if (isRef(instance) && instance.value) {
      instance.value?.goForward()
    }
  }

  function canGoBackOrForward(
    instance: string | Ref<QTIX5WebView | undefined>,
    steps: number
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'canGoBackOrForward', [steps])
    } else if (isRef(instance) && instance.value) {
      instance.value?.canGoBackOrForward(steps)
    }
  }

  function goBackOrForward(
    instance: string | Ref<QTIX5WebView | undefined>,
    steps: number
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'goBackOrForward', [steps])
    } else if (isRef(instance) && instance.value) {
      instance.value?.goBackOrForward(steps)
    }
  }

  function onResume(instance: string | Ref<QTIX5WebView | undefined>): void {
    if (isString(instance)) {
      callUIFunction(instance, 'onResume', [])
    } else if (isRef(instance) && instance.value) {
      instance.value?.onResume()
    }
  }

  function onPause(instance: string | Ref<QTIX5WebView | undefined>): void {
    if (isString(instance)) {
      callUIFunction(instance, 'onPause', [])
    } else if (isRef(instance) && instance.value) {
      instance.value?.onPause()
    }
  }

  function pauseTimers(instance: string | Ref<QTIX5WebView | undefined>): void {
    if (isString(instance)) {
      callUIFunction(instance, 'pauseTimers', [])
    } else if (isRef(instance) && instance.value) {
      instance.value?.pauseTimers()
    }
  }

  function resumeTimers(
    instance: string | Ref<QTIX5WebView | undefined>
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'resumeTimers', [])
    } else if (isRef(instance) && instance.value) {
      instance.value?.resumeTimers()
    }
  }

  function destroy(instance: string | Ref<QTIX5WebView | undefined>): void {
    if (isString(instance)) {
      callUIFunction(instance, 'destroy', [])
    } else if (isRef(instance) && instance.value) {
      instance.value?.destroy()
    }
  }

  function setJavaScriptEnabled(
    instance: string | Ref<QTIX5WebView | undefined>,
    value: boolean
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'setJavaScriptEnabled', [value])
    } else if (isRef(instance) && instance.value) {
      instance.value?.setJavaScriptEnabled(value)
    }
  }

  function setPluginState(
    instance: string | Ref<QTIX5WebView | undefined>,
    value: number
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'setPluginState', [value])
    } else if (isRef(instance) && instance.value) {
      instance.value?.setPluginState(value)
    }
  }

  function setJavaScriptCanOpenWindowsAutomatically(
    instance: string | Ref<QTIX5WebView | undefined>,
    value: boolean
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'setJavaScriptCanOpenWindowsAutomatically', [
        value,
      ])
    } else if (isRef(instance) && instance.value) {
      instance.value?.setJavaScriptCanOpenWindowsAutomatically(value)
    }
  }

  function setUseWideViewPort(
    instance: string | Ref<QTIX5WebView | undefined>,
    value: boolean
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'setUseWideViewPort', [value])
    } else if (isRef(instance) && instance.value) {
      instance.value?.setUseWideViewPort(value)
    }
  }

  function setLoadWithOverviewMode(
    instance: string | Ref<QTIX5WebView | undefined>,
    value: boolean
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'setLoadWithOverviewMode', [value])
    } else if (isRef(instance) && instance.value) {
      instance.value?.setLoadWithOverviewMode(value)
    }
  }

  function setSupportZoom(
    instance: string | Ref<QTIX5WebView | undefined>,
    value: boolean
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'setSupportZoom', [value])
    } else if (isRef(instance) && instance.value) {
      instance.value?.setSupportZoom(value)
    }
  }

  function setBuiltInZoomControls(
    instance: string | Ref<QTIX5WebView | undefined>,
    value: boolean
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'setBuiltInZoomControls', [value])
    } else if (isRef(instance) && instance.value) {
      instance.value?.setBuiltInZoomControls(value)
    }
  }

  function setDisplayZoomControls(
    instance: string | Ref<QTIX5WebView | undefined>,
    value: boolean
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'setDisplayZoomControls', [value])
    } else if (isRef(instance) && instance.value) {
      instance.value?.setDisplayZoomControls(value)
    }
  }

  function setAllowFileAccess(
    instance: string | Ref<QTIX5WebView | undefined>,
    value: boolean
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'setAllowFileAccess', [value])
    } else if (isRef(instance) && instance.value) {
      instance.value?.setAllowFileAccess(value)
    }
  }

  function setDomStorageEnabled(
    instance: string | Ref<QTIX5WebView | undefined>,
    value: boolean
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'setDomStorageEnabled', [value])
    } else if (isRef(instance) && instance.value) {
      instance.value?.setDomStorageEnabled(value)
    }
  }

  function setDatabaseEnabled(
    instance: string | Ref<QTIX5WebView | undefined>,
    value: boolean
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'setDatabaseEnabled', [value])
    } else if (isRef(instance) && instance.value) {
      instance.value?.setDatabaseEnabled(value)
    }
  }

  function setAppCacheEnabled(
    instance: string | Ref<QTIX5WebView | undefined>,
    value: boolean
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'setAppCacheEnabled', [value])
    } else if (isRef(instance) && instance.value) {
      instance.value?.setAppCacheEnabled(value)
    }
  }

  function setAppCachePath(
    instance: string | Ref<QTIX5WebView | undefined>,
    value: boolean
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'setAppCachePath', [value])
    } else if (isRef(instance) && instance.value) {
      instance.value?.setAppCachePath(value)
    }
  }

  function setMediaPlaybackRequiresUserGesture(
    instance: string | Ref<QTIX5WebView | undefined>,
    value: boolean
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'setMediaPlaybackRequiresUserGesture', [value])
    } else if (isRef(instance) && instance.value) {
      instance.value?.setMediaPlaybackRequiresUserGesture(value)
    }
  }

  function setStandardFontFamily(
    instance: string | Ref<QTIX5WebView | undefined>,
    value: string
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'setStandardFontFamily', [value])
    } else if (isRef(instance) && instance.value) {
      instance.value?.setStandardFontFamily(value)
    }
  }

  function setFixedFontFamily(
    instance: string | Ref<QTIX5WebView | undefined>,
    value: string
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'setFixedFontFamily', [value])
    } else if (isRef(instance) && instance.value) {
      instance.value?.setFixedFontFamily(value)
    }
  }

  function setSansSerifFontFamily(
    instance: string | Ref<QTIX5WebView | undefined>,
    value: string
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'setSansSerifFontFamily', [value])
    } else if (isRef(instance) && instance.value) {
      instance.value?.setSansSerifFontFamily(value)
    }
  }

  function setSerifFontFamily(
    instance: string | Ref<QTIX5WebView | undefined>,
    value: string
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'setSerifFontFamily', [value])
    } else if (isRef(instance) && instance.value) {
      instance.value?.setSerifFontFamily(value)
    }
  }

  function setCursiveFontFamily(
    instance: string | Ref<QTIX5WebView | undefined>,
    value: string
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'setCursiveFontFamily', [value])
    } else if (isRef(instance) && instance.value) {
      instance.value?.setCursiveFontFamily(value)
    }
  }

  function setFantasyFontFamily(
    instance: string | Ref<QTIX5WebView | undefined>,
    value: string
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'setFantasyFontFamily', [value])
    } else if (isRef(instance) && instance.value) {
      instance.value?.setFantasyFontFamily(value)
    }
  }

  function setTextZoom(
    instance: string | Ref<QTIX5WebView | undefined>,
    value: number
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'setTextZoom', [value])
    } else if (isRef(instance) && instance.value) {
      instance.value?.setTextZoom(value)
    }
  }

  function setMinimumFontSize(
    instance: string | Ref<QTIX5WebView | undefined>,
    value: number
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'setMinimumFontSize', [value])
    } else if (isRef(instance) && instance.value) {
      instance.value?.setMinimumFontSize(value)
    }
  }

  function setDefaultFontSize(
    instance: string | Ref<QTIX5WebView | undefined>,
    value: number
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'setDefaultFontSize', [value])
    } else if (isRef(instance) && instance.value) {
      instance.value?.setDefaultFontSize(value)
    }
  }

  function setLayoutAlgorithm(
    instance: string | Ref<QTIX5WebView | undefined>,
    value: number
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'setLayoutAlgorithm', [value])
    } else if (isRef(instance) && instance.value) {
      instance.value?.setLayoutAlgorithm(value)
    }
  }

  function setLoadsImagesAutomatically(
    instance: string | Ref<QTIX5WebView | undefined>,
    value: boolean
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'setLoadsImagesAutomatically', [value])
    } else if (isRef(instance) && instance.value) {
      instance.value?.setLoadsImagesAutomatically(value)
    }
  }

  function setDefaultTextEncodingName(
    instance: string | Ref<QTIX5WebView | undefined>,
    value: string
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'setDefaultTextEncodingName', [value])
    } else if (isRef(instance) && instance.value) {
      instance.value?.setDefaultTextEncodingName(value)
    }
  }

  function setNeedInitialFocus(
    instance: string | Ref<QTIX5WebView | undefined>,
    value: boolean
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'setNeedInitialFocus', [value])
    } else if (isRef(instance) && instance.value) {
      instance.value?.setNeedInitialFocus(value)
    }
  }

  function setGeolocationEnabled(
    instance: string | Ref<QTIX5WebView | undefined>,
    value: boolean
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'setGeolocationEnabled', [value])
    } else if (isRef(instance) && instance.value) {
      instance.value?.setGeolocationEnabled(value)
    }
  }

  function setBlockNetworkLoads(
    instance: string | Ref<QTIX5WebView | undefined>,
    value: boolean
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'setBlockNetworkLoads', [value])
    } else if (isRef(instance) && instance.value) {
      instance.value?.setBlockNetworkLoads(value)
    }
  }

  function setSupportMultipleWindows(
    instance: string | Ref<QTIX5WebView | undefined>,
    value: boolean
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'setSupportMultipleWindows', [value])
    } else if (isRef(instance) && instance.value) {
      instance.value?.setSupportMultipleWindows(value)
    }
  }

  function setAppCacheMaxSize(
    instance: string | Ref<QTIX5WebView | undefined>,
    value: number
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'setAppCacheMaxSize', [value])
    } else if (isRef(instance) && instance.value) {
      instance.value?.setAppCacheMaxSize(value)
    }
  }

  function setRenderPriority(
    instance: string | Ref<QTIX5WebView | undefined>,
    value: number
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'setRenderPriority', [value])
    } else if (isRef(instance) && instance.value) {
      instance.value?.setRenderPriority(value)
    }
  }

  function setCacheMode(
    instance: string | Ref<QTIX5WebView | undefined>,
    value: number
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'setCacheMode', [value])
    } else if (isRef(instance) && instance.value) {
      instance.value?.setCacheMode(value)
    }
  }

  //-----------------------------------------------
  function setAllowContentAccess(
    instance: string | Ref<QTIX5WebView | undefined>,
    value: boolean
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'setAllowContentAccess', [value])
    } else if (isRef(instance) && instance.value) {
      instance.value?.setAllowContentAccess(value)
    }
  }

  function setEnableSmoothTransition(
    instance: string | Ref<QTIX5WebView | undefined>,
    value: boolean
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'setEnableSmoothTransition', [value])
    } else if (isRef(instance) && instance.value) {
      instance.value?.setEnableSmoothTransition(value)
    }
  }

  function setSaveFormData(
    instance: string | Ref<QTIX5WebView | undefined>,
    value: boolean
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'setSaveFormData', [value])
    } else if (isRef(instance) && instance.value) {
      instance.value?.setSaveFormData(value)
    }
  }

  function setSavePassword(
    instance: string | Ref<QTIX5WebView | undefined>,
    value: boolean
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'setSavePassword', [value])
    } else if (isRef(instance) && instance.value) {
      instance.value?.setSavePassword(value)
    }
  }

  function setTextSize(
    instance: string | Ref<QTIX5WebView | undefined>,
    value: number
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'setTextSize', [value])
    } else if (isRef(instance) && instance.value) {
      instance.value?.setTextSize(value)
    }
  }

  function setDefaultZoom(
    instance: string | Ref<QTIX5WebView | undefined>,
    value: number
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'setDefaultZoom', [value])
    } else if (isRef(instance) && instance.value) {
      instance.value?.setDefaultZoom(value)
    }
  }

  function setLightTouchEnabled(
    instance: string | Ref<QTIX5WebView | undefined>,
    value: boolean
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'setLightTouchEnabled', [value])
    } else if (isRef(instance) && instance.value) {
      instance.value?.setLightTouchEnabled(value)
    }
  }

  function setMinimumLogicalFontSize(
    instance: string | Ref<QTIX5WebView | undefined>,
    value: number
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'setMinimumLogicalFontSize', [value])
    } else if (isRef(instance) && instance.value) {
      instance.value?.setMinimumLogicalFontSize(value)
    }
  }

  function setDefaultFixedFontSize(
    instance: string | Ref<QTIX5WebView | undefined>,
    value: number
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'setDefaultFixedFontSize', [value])
    } else if (isRef(instance) && instance.value) {
      instance.value?.setDefaultFixedFontSize(value)
    }
  }

  function setBlockNetworkImage(
    instance: string | Ref<QTIX5WebView | undefined>,
    value: boolean
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'setBlockNetworkImage', [value])
    } else if (isRef(instance) && instance.value) {
      instance.value?.setBlockNetworkImage(value)
    }
  }

  function setAllowUniversalAccessFromFileURLs(
    instance: string | Ref<QTIX5WebView | undefined>,
    value: boolean
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'setAllowUniversalAccessFromFileURLs', [value])
    } else if (isRef(instance) && instance.value) {
      instance.value?.setAllowUniversalAccessFromFileURLs(value)
    }
  }

  function setAllowFileAccessFromFileURLs(
    instance: string | Ref<QTIX5WebView | undefined>,
    value: boolean
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'setAllowFileAccessFromFileURLs', [value])
    } else if (isRef(instance) && instance.value) {
      instance.value?.setAllowFileAccessFromFileURLs(value)
    }
  }

  function setDatabasePath(
    instance: string | Ref<QTIX5WebView | undefined>,
    value: string
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'setDatabasePath', [value])
    } else if (isRef(instance) && instance.value) {
      instance.value?.setDatabasePath(value)
    }
  }

  function setGeolocationDatabasePath(
    instance: string | Ref<QTIX5WebView | undefined>,
    value: string
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'setGeolocationDatabasePath', [value])
    } else if (isRef(instance) && instance.value) {
      instance.value?.setGeolocationDatabasePath(value)
    }
  }

  function setUserAgentString(
    instance: string | Ref<QTIX5WebView | undefined>,
    value: string
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'setUserAgentString', [value])
    } else if (isRef(instance) && instance.value) {
      instance.value?.setUserAgentString(value)
    }
  }

  function setMixedContentMode(
    instance: string | Ref<QTIX5WebView | undefined>,
    value: number
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'setMixedContentMode', [value])
    } else if (isRef(instance) && instance.value) {
      instance.value?.setMixedContentMode(value)
    }
  }

  function setOffscreenPreRaster(
    instance: string | Ref<QTIX5WebView | undefined>,
    value: boolean
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'setOffscreenPreRaster', [value])
    } else if (isRef(instance) && instance.value) {
      instance.value?.setOffscreenPreRaster(value)
    }
  }

  function setSafeBrowsingEnabled(
    instance: string | Ref<QTIX5WebView | undefined>,
    value: boolean
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'setSafeBrowsingEnabled', [value])
    } else if (isRef(instance) && instance.value) {
      instance.value?.setSafeBrowsingEnabled(value)
    }
  }

  function setForceDark(
    instance: string | Ref<QTIX5WebView | undefined>,
    value: number
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'setForceDark', [value])
    } else if (isRef(instance) && instance.value) {
      instance.value?.setForceDark(value)
    }
  }

  function setDisabledActionModeMenuItems(
    instance: string | Ref<QTIX5WebView | undefined>,
    value: number
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'setDisabledActionModeMenuItems', [value])
    } else if (isRef(instance) && instance.value) {
      instance.value?.setDisabledActionModeMenuItems(value)
    }
  }

  function initJavaScriptInterface(
    instance: string | Ref<QTIX5WebView | undefined>
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'initJavaScriptInterface', [])
    } else if (isRef(instance) && instance.value) {
      instance.value?.initJavaScriptInterface()
    }
  }

  function removeJavaScriptInterface(
    instance: string | Ref<QTIX5WebView | undefined>
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'removeJavaScriptInterface', [])
    } else if (isRef(instance) && instance.value) {
      instance.value?.removeJavaScriptInterface()
    }
  }

  function initWebViewFocus(
    instance: string | Ref<QTIX5WebView | undefined>,
    delayTime: number,
    x: number,
    y: number
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'initWebViewFocus', [delayTime, x, y])
    } else if (isRef(instance) && instance.value) {
      instance.value?.initWebViewFocus(delayTime, x, y)
    }
  }

  return {
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
    //--------------------------------------------------------------------------------
    loadUrl,
    evaluateJavascript,
    canGoBack,
    goBack,
    canGoForward,
    goForward,
    canGoBackOrForward,
    goBackOrForward,
    onResume,
    onPause,
    pauseTimers,
    resumeTimers,
    destroy,
    setJavaScriptEnabled,
    setPluginState,
    setJavaScriptCanOpenWindowsAutomatically,
    setUseWideViewPort,
    setLoadWithOverviewMode,
    setSupportZoom,
    setBuiltInZoomControls,
    setDisplayZoomControls,
    setAllowFileAccess,
    setDomStorageEnabled,
    setDatabaseEnabled,
    setAppCacheEnabled,
    setAppCachePath,
    setMediaPlaybackRequiresUserGesture,
    setStandardFontFamily,
    setFixedFontFamily,
    setSansSerifFontFamily,
    setSerifFontFamily,
    setCursiveFontFamily,
    setFantasyFontFamily,
    setTextZoom,
    setMinimumFontSize,
    setDefaultFontSize,
    setLayoutAlgorithm,
    setLoadsImagesAutomatically,
    setDefaultTextEncodingName,
    setNeedInitialFocus,
    setGeolocationEnabled,
    setBlockNetworkLoads,
    setSupportMultipleWindows,
    setAppCacheMaxSize,
    setRenderPriority,
    setCacheMode,
    setAllowContentAccess,
    setEnableSmoothTransition,
    setSaveFormData,
    setSavePassword,
    setTextSize,
    setDefaultZoom,
    setLightTouchEnabled,
    setMinimumLogicalFontSize,
    setDefaultFixedFontSize,
    setBlockNetworkImage,
    setAllowUniversalAccessFromFileURLs,
    setAllowFileAccessFromFileURLs,
    setDatabasePath,
    setGeolocationDatabasePath,
    setUserAgentString,
    setMixedContentMode,
    setOffscreenPreRaster,
    setSafeBrowsingEnabled,
    setForceDark,
    setDisabledActionModeMenuItems,
    initJavaScriptInterface,
    removeJavaScriptInterface,
    initWebViewFocus,
  }
}
