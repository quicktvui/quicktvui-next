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
import type { QTILottieView } from './lottie-instance'
import type {
  QTLottieAsyncUpdates,
  QTLottieRenderMode,
  QTLottieRepeatMode,
} from './lottie-types'
import type { Ref } from '@vue/reactivity'

export interface QtLottieViewAPI {
  //-------------------------------LottieView-------------------------------------------------
  loadRaw(
    instance: string | Ref<QTILottieView | undefined>,
    rawRes: string
  ): void

  loadFile(
    instance: string | Ref<QTILottieView | undefined>,
    fileName: string
  ): void

  loadUrl(instance: string | Ref<QTILottieView | undefined>, url: string): void

  loadCacheUrl(
    instance: string | Ref<QTILottieView | undefined>,
    url: string,
    cacheKey: string
  ): void

  setFallbackResource(
    instance: string | Ref<QTILottieView | undefined>,
    res: number
  ): void

  setAutoPlay(
    instance: string | Ref<QTILottieView | undefined>,
    auto: boolean
  ): void

  setLottieLoop(
    instance: string | Ref<QTILottieView | undefined>,
    loop: boolean
  ): void

  setRepeatMode(
    instance: string | Ref<QTILottieView | undefined>,
    mode: QTLottieRepeatMode
  ): void

  setRepeatCount(
    instance: string | Ref<QTILottieView | undefined>,
    repeatCount: number
  ): void

  setSpeed(
    instance: string | Ref<QTILottieView | undefined>,
    speed: string
  ): void

  setClipToCompositionBounds(
    instance: string | Ref<QTILottieView | undefined>,
    clipToCompositionBounds: boolean
  ): void

  setDefaultFontFileExtension(
    instance: string | Ref<QTILottieView | undefined>,
    extension: string
  ): void

  setImageAssetsFolder(
    instance: string | Ref<QTILottieView | undefined>,
    imageAssetsFolder: string
  ): void

  setProgress(
    instance: string | Ref<QTILottieView | undefined>,
    progress: string
  ): void

  enableMergePathsForKitKatAndAbove(
    instance: string | Ref<QTILottieView | undefined>,
    enable: boolean
  ): void

  setColorFilter(
    instance: string | Ref<QTILottieView | undefined>,
    colorRes: string
  ): void

  setRenderMode(
    instance: string | Ref<QTILottieView | undefined>,
    renderModeOrdinal: QTLottieRenderMode
  ): void

  setAsyncUpdate(
    instance: string | Ref<QTILottieView | undefined>,
    asyncUpdatesOrdinal: QTLottieAsyncUpdates
  ): void

  setIgnoreDisabledSystemAnimations(
    instance: string | Ref<QTILottieView | undefined>,
    ignore: boolean
  ): void

  setUseCompositionFrameRate(
    instance: string | Ref<QTILottieView | undefined>,
    useCompositionFrameRate: boolean
  ): void

  playAnimation(instance: string | Ref<QTILottieView | undefined>): void

  resumeAnimation(instance: string | Ref<QTILottieView | undefined>): void

  pauseAnimation(instance: string | Ref<QTILottieView | undefined>): void

  cancelAnimation(instance: string | Ref<QTILottieView | undefined>): void

  cacheComposition(
    instance: string | Ref<QTILottieView | undefined>,
    cache: boolean
  ): void

  removeAllListener(instance: string | Ref<QTILottieView | undefined>): void

  //-------------------------------BaseView-------------------------------------------------
  requestFocus(
    instance: string | Ref<QTILottieView | undefined>,
    direction?: QTFocusDirection
  ): void

  requestChildFocus(
    instance: string | Ref<QTILottieView | undefined>,
    position: number
  ): void

  clearFocus(instance: string | Ref<QTILottieView | undefined>): void

  requestFocusDirectly(
    instance: string | Ref<QTILottieView | undefined>,
    direction?: QTFocusDirection
  ): void

  setVisibility(
    instance: string | Ref<QTILottieView | undefined>,
    v: QTVisibility
  ): void

  requestRootLayout(instance: string | Ref<QTILottieView | undefined>): void

  requestLayout(instance: string | Ref<QTILottieView | undefined>): void

  //
  setDescendantFocusability(
    instance: string | Ref<QTILottieView | undefined>,
    descendant: QTFocusDescendant
  ): void

  changeDescendantFocusability(
    instance: string | Ref<QTILottieView | undefined>,
    descendant: QTDescendantFocusability
  ): void

  forceUpdateRenderNode(instance: string | Ref<QTILottieView | undefined>): void

  setBackGroundColor(
    instance: string | Ref<QTILottieView | undefined>,
    color: string
  ): void

  layoutViewManual(instance: string | Ref<QTILottieView | undefined>): void

  blockRootFocus(instance: string | Ref<QTILottieView | undefined>): void

  unBlockRootFocus(instance: string | Ref<QTILottieView | undefined>): void

  changeAlpha(
    instance: string | Ref<QTILottieView | undefined>,
    alpha: number
  ): void

  setScale(
    instance: string | Ref<QTILottieView | undefined>,
    x: number,
    y: number,
    duration: number
  ): void

  setPosition(
    instance: string | Ref<QTILottieView | undefined>,
    x: number,
    y: number,
    z: number
  ): void

  updateLayout(
    instance: string | Ref<QTILottieView | undefined>,
    width: number,
    height: number,
    x: number,
    y: number
  ): void

  invalidate(instance: string | Ref<QTILottieView | undefined>): void

  dispatchFunctionForTarget(
    instance: string | Ref<QTILottieView | undefined>,
    targetName: string,
    functionTargetName: string,
    params: Array<QTNativeParams>,
    delay: number
  ): void

  setBlockFocusDirections(
    instance: string | Ref<QTILottieView | undefined>,
    directionList: Array<QTFocusDirectionName>
  ): void

  setBlockFocusDirectionsOnFail(
    instance: string | Ref<QTILottieView | undefined>,
    directionList: Array<QTFocusDirectionName>
  ): void

  setInitFocus(
    instance: string | Ref<QTILottieView | undefined>,
    sid: string,
    delay?: number
  ): void

  setAutoFocus(
    instance: string | Ref<QTILottieView | undefined>,
    sid: string,
    delay?: number
  ): void

  enabledAutofocus(
    instance: string | Ref<QTILottieView | undefined>,
    autofocus: boolean
  ): void

  requestAutofocus(instance: string | Ref<QTILottieView | undefined>): void

  //
  hasFocus(instance: string | Ref<QTILottieView | undefined>): Promise<boolean>

  isFocused(instance: string | Ref<QTILottieView | undefined>): Promise<boolean>

  getLocationOnScreen(
    instance: string | Ref<QTILottieView | undefined>
  ): Promise<QTEventData<QTLocation>>

  getViewState(
    instance: string | Ref<QTILottieView | undefined>
  ): Promise<QTViewState>

  getChildViewState(
    instance: string | Ref<QTILottieView | undefined>,
    position: number
  ): Promise<QTViewState>
}

export function createQtLottieViewAPI(): QtLottieViewAPI {
  function loadRaw(
    instance: string | Ref<QTILottieView | undefined>,
    rawRes: string
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'lottie_rawRes', [rawRes])
    } else if (isRef(instance)) {
      instance.value?.loadRaw(rawRes)
    }
  }

  function loadFile(
    instance: string | Ref<QTILottieView | undefined>,
    fileName: string
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'lottie_localRes', [fileName])
    } else if (isRef(instance)) {
      instance.value?.loadFile(fileName)
    }
  }

  function loadUrl(
    instance: string | Ref<QTILottieView | undefined>,
    url: string
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'lottie_url', [url])
    } else if (isRef(instance)) {
      instance.value?.loadUrl(url)
    }
  }

  function loadCacheUrl(
    instance: string | Ref<QTILottieView | undefined>,
    url: string,
    cacheKey: string
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'lottie_cache_url', [url, cacheKey])
    } else if (isRef(instance)) {
      instance.value?.loadCacheUrl(url, cacheKey)
    }
  }

  function setFallbackResource(
    instance: string | Ref<QTILottieView | undefined>,
    res: number
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'lottie_fallbackRes', [res])
    } else if (isRef(instance)) {
      instance.value?.setFallbackResource(res)
    }
  }

  function setAutoPlay(
    instance: string | Ref<QTILottieView | undefined>,
    auto: boolean
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'lottie_autoPlay', [auto])
    } else if (isRef(instance)) {
      instance.value?.setAutoPlay(auto)
    }
  }

  function setLottieLoop(
    instance: string | Ref<QTILottieView | undefined>,
    loop: boolean
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'lottie_loop', [loop])
    } else if (isRef(instance)) {
      instance.value?.setLottieLoop(loop)
    }
  }

  function setRepeatMode(
    instance: string | Ref<QTILottieView | undefined>,
    mode: QTLottieRepeatMode
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'lottie_repeatMode', [mode])
    } else if (isRef(instance)) {
      instance.value?.setRepeatMode(mode)
    }
  }

  function setRepeatCount(
    instance: string | Ref<QTILottieView | undefined>,
    repeatCount: number
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'lottie_repeatCount', [repeatCount])
    } else if (isRef(instance)) {
      instance.value?.setRepeatCount(repeatCount)
    }
  }

  function setSpeed(
    instance: string | Ref<QTILottieView | undefined>,
    speed: string
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'lottie_speed', [speed])
    } else if (isRef(instance)) {
      instance.value?.setSpeed(speed)
    }
  }

  function setClipToCompositionBounds(
    instance: string | Ref<QTILottieView | undefined>,
    clipToCompositionBounds: boolean
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'lottie_clipToCompositionBounds', [
        clipToCompositionBounds,
      ])
    } else if (isRef(instance)) {
      instance.value?.setClipToCompositionBounds(clipToCompositionBounds)
    }
  }

  function setDefaultFontFileExtension(
    instance: string | Ref<QTILottieView | undefined>,
    extension: string
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'lottie_defaultFontFileExtension', [extension])
    } else if (isRef(instance)) {
      instance.value?.setDefaultFontFileExtension(extension)
    }
  }

  function setImageAssetsFolder(
    instance: string | Ref<QTILottieView | undefined>,
    imageAssetsFolder: string
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'lottie_imageAssetsFolder', [imageAssetsFolder])
    } else if (isRef(instance)) {
      instance.value?.setImageAssetsFolder(imageAssetsFolder)
    }
  }

  function setProgress(
    instance: string | Ref<QTILottieView | undefined>,
    progress: string
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'lottie_progress', [progress])
    } else if (isRef(instance)) {
      instance.value?.setProgress(progress)
    }
  }

  function enableMergePathsForKitKatAndAbove(
    instance: string | Ref<QTILottieView | undefined>,
    enable: boolean
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'lottie_enableMergePathsForKitKatAndAbove', [
        enable,
      ])
    } else if (isRef(instance)) {
      instance.value?.enableMergePathsForKitKatAndAbove(enable)
    }
  }

  function setColorFilter(
    instance: string | Ref<QTILottieView | undefined>,
    colorRes: string
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'lottie_colorFilter', [colorRes])
    } else if (isRef(instance)) {
      instance.value?.setColorFilter(colorRes)
    }
  }

  function setRenderMode(
    instance: string | Ref<QTILottieView | undefined>,
    renderModeOrdinal: QTLottieRenderMode
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'lottie_renderMode', [renderModeOrdinal])
    } else if (isRef(instance)) {
      instance.value?.setRenderMode(renderModeOrdinal)
    }
  }

  function setAsyncUpdate(
    instance: string | Ref<QTILottieView | undefined>,
    asyncUpdatesOrdinal: QTLottieAsyncUpdates
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'lottie_asyncUpdates', [asyncUpdatesOrdinal])
    } else if (isRef(instance)) {
      instance.value?.setAsyncUpdate(asyncUpdatesOrdinal)
    }
  }

  function setIgnoreDisabledSystemAnimations(
    instance: string | Ref<QTILottieView | undefined>,
    ignore: boolean
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'lottie_ignoreDisabledSystemAnimations', [
        ignore,
      ])
    } else if (isRef(instance)) {
      instance.value?.setIgnoreDisabledSystemAnimations(ignore)
    }
  }

  function setUseCompositionFrameRate(
    instance: string | Ref<QTILottieView | undefined>,
    useCompositionFrameRate: boolean
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'lottie_useCompositionFrameRate', [
        useCompositionFrameRate,
      ])
    } else if (isRef(instance)) {
      instance.value?.setUseCompositionFrameRate(useCompositionFrameRate)
    }
  }

  function playAnimation(
    instance: string | Ref<QTILottieView | undefined>
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'playAnimation', [])
    } else if (isRef(instance)) {
      instance.value?.playAnimation()
    }
  }

  function resumeAnimation(
    instance: string | Ref<QTILottieView | undefined>
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'resumeAnimation', [])
    } else if (isRef(instance)) {
      instance.value?.resumeAnimation()
    }
  }

  function pauseAnimation(
    instance: string | Ref<QTILottieView | undefined>
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'pauseAnimation', [])
    } else if (isRef(instance)) {
      instance.value?.pauseAnimation()
    }
  }

  function cancelAnimation(
    instance: string | Ref<QTILottieView | undefined>
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'cancelAnimation', [])
    } else if (isRef(instance)) {
      instance.value?.cancelAnimation()
    }
  }

  function cacheComposition(
    instance: string | Ref<QTILottieView | undefined>,
    cache: boolean
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'cacheComposition', [cache])
    } else if (isRef(instance)) {
      instance.value?.cacheComposition(cache)
    }
  }

  function removeAllListener(
    instance: string | Ref<QTILottieView | undefined>
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'removeAllListener', [])
    } else if (isRef(instance)) {
      instance.value?.removeAllListener()
    }
  }

  //--------------------------------------------------------------------------------
  function requestFocus(
    instance: string | Ref<QTILottieView | undefined>,
    direction?: QTFocusDirection
  ) {
    if (isString(instance)) {
      callUIFunction(instance, 'requestFocus', [direction])
    } else if (isRef(instance)) {
      instance.value?.requestFocus(direction)
    }
  }

  function requestChildFocus(
    instance: string | Ref<QTILottieView | undefined>,
    position: number
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'requestChildFocus', [position])
    } else if (isRef(instance)) {
      instance.value?.requestChildFocus(position)
    }
  }

  function clearFocus(instance: string | Ref<QTILottieView | undefined>) {
    if (isString(instance)) {
      callUIFunction(instance, 'clearFocus', [])
    } else if (isRef(instance)) {
      instance.value?.clearFocus()
    }
  }

  function requestFocusDirectly(
    instance: string | Ref<QTILottieView | undefined>,
    direction?: QTFocusDirection
  ) {
    if (isString(instance)) {
      callUIFunction(instance, 'requestFocusDirectly', [direction])
    } else if (isRef(instance)) {
      instance.value?.requestFocusDirectly(direction)
    }
  }

  function setVisibility(
    instance: string | Ref<QTILottieView | undefined>,
    v: QTVisibility
  ) {
    if (isString(instance)) {
      callUIFunction(instance, 'changeVisibility', [v])
    } else if (isRef(instance)) {
      instance.value?.setVisibility(v)
    }
  }

  function requestRootLayout(
    instance: string | Ref<QTILottieView | undefined>
  ) {
    if (isString(instance)) {
      callUIFunction(instance, 'requestRootLayout', [])
    } else if (isRef(instance)) {
      instance.value?.requestRootLayout()
    }
  }

  function requestLayout(instance: string | Ref<QTILottieView | undefined>) {
    if (isString(instance)) {
      callUIFunction(instance, 'requestLayout', [])
    } else if (isRef(instance)) {
      instance.value?.requestLayout()
    }
  }

  function setDescendantFocusability(
    instance: string | Ref<QTILottieView | undefined>,
    descendant: QTFocusDescendant
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'setDescendantFocusability', [descendant])
    } else if (isRef(instance)) {
      instance.value?.setDescendantFocusability(descendant)
    }
  }

  function changeDescendantFocusability(
    instance: string | Ref<QTILottieView | undefined>,
    descendant: QTDescendantFocusability
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'changeDescendantFocusability', [descendant])
    } else if (isRef(instance)) {
      instance.value?.changeDescendantFocusability(descendant)
    }
  }

  function forceUpdateRenderNode(
    instance: string | Ref<QTILottieView | undefined>
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'forceUpdateRenderNode', [])
    } else if (isRef(instance)) {
      instance.value?.forceUpdateRenderNode()
    }
  }

  function setBackGroundColor(
    instance: string | Ref<QTILottieView | undefined>,
    color: string
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'setBackGroundColor', [color])
    } else if (isRef(instance)) {
      instance.value?.setBackGroundColor(color)
    }
  }

  function layoutViewManual(
    instance: string | Ref<QTILottieView | undefined>
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'layoutViewManual', [])
    } else if (isRef(instance)) {
      instance.value?.layoutViewManual()
    }
  }

  function blockRootFocus(
    instance: string | Ref<QTILottieView | undefined>
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'blockRootFocus', [])
    } else if (isRef(instance)) {
      instance.value?.blockRootFocus()
    }
  }

  function unBlockRootFocus(
    instance: string | Ref<QTILottieView | undefined>
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'unBlockRootFocus', [])
    } else if (isRef(instance)) {
      instance.value?.unBlockRootFocus()
    }
  }

  function changeAlpha(
    instance: string | Ref<QTILottieView | undefined>,
    alpha: number
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'changeAlpha', [alpha])
    } else if (isRef(instance)) {
      instance.value?.changeAlpha(alpha)
    }
  }

  function setScale(
    instance: string | Ref<QTILottieView | undefined>,
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
    instance: string | Ref<QTILottieView | undefined>,
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
    instance: string | Ref<QTILottieView | undefined>,
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

  function invalidate(instance: string | Ref<QTILottieView | undefined>): void {
    if (isString(instance)) {
      callUIFunction(instance, 'invalidate', [])
    } else if (isRef(instance)) {
      instance.value?.invalidate()
    }
  }

  function dispatchFunctionForTarget(
    instance: string | Ref<QTILottieView | undefined>,
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
    instance: string | Ref<QTILottieView | undefined>,
    directionList: Array<QTFocusDirectionName>
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'setBlockFocusDirections', [directionList])
    } else if (isRef(instance)) {
      instance.value?.setBlockFocusDirections(directionList)
    }
  }

  function setBlockFocusDirectionsOnFail(
    instance: string | Ref<QTILottieView | undefined>,
    directionList: Array<QTFocusDirectionName>
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'setBlockFocusDirectionsOnFail', [directionList])
    } else if (isRef(instance)) {
      instance.value?.setBlockFocusDirectionsOnFail(directionList)
    }
  }

  function setInitFocus(
    instance: string | Ref<QTILottieView | undefined>,
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
    instance: string | Ref<QTILottieView | undefined>,
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
    instance: string | Ref<QTILottieView | undefined>,
    autofocus: boolean
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'setAutoFocus', [autofocus])
    } else if (isRef(instance)) {
      instance.value?.enabledAutofocus(autofocus)
    }
  }

  function requestAutofocus(
    instance: string | Ref<QTILottieView | undefined>
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'requestAutofocus', [])
    } else if (isRef(instance)) {
      instance.value?.requestAutofocus()
    }
  }

  function hasFocus(
    instance: string | Ref<QTILottieView | undefined>
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
    instance: string | Ref<QTILottieView | undefined>
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
    instance: string | Ref<QTILottieView | undefined>
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
    instance: string | Ref<QTILottieView | undefined>
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
    instance: string | Ref<QTILottieView | undefined>,
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
    //
    loadRaw,
    loadFile,
    loadUrl,
    loadCacheUrl,
    setFallbackResource,
    setAutoPlay,
    setLottieLoop,
    setRepeatMode,
    setRepeatCount,
    setSpeed,
    setClipToCompositionBounds,
    setDefaultFontFileExtension,
    setImageAssetsFolder,
    setProgress,
    enableMergePathsForKitKatAndAbove,
    setColorFilter,
    setRenderMode,
    setAsyncUpdate,
    playAnimation,
    setIgnoreDisabledSystemAnimations,
    setUseCompositionFrameRate,
    resumeAnimation,
    pauseAnimation,
    cancelAnimation,
    cacheComposition,
    removeAllListener,
  }
}
