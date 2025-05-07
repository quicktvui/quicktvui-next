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
import type { QTGradient } from '../../gradient'
import type { Ref } from '@vue/reactivity'
import type {
  QTSeekBarGravity,
  QTSeekBarIndicatorMode,
  QTSeekBarMode,
  QTSeekBarTickMarkGravity,
  QTSeekBarTickMarkLayoutGravity,
  QTSeekBarTickMarkMode,
} from '../../seek-bar'
import type { QTIProgressBar } from './progress-bar-instance'

export interface QtProgressBarAPI {
  //--------------------------------BaseView------------------------------------------------
  requestFocus(
    instance: string | Ref<QTIProgressBar | undefined>,
    direction?: QTFocusDirection
  ): void

  requestChildFocus(
    instance: string | Ref<QTIProgressBar | undefined>,
    position: number
  ): void

  clearFocus(instance: string | Ref<QTIProgressBar | undefined>): void

  requestFocusDirectly(
    instance: string | Ref<QTIProgressBar | undefined>,
    direction?: QTFocusDirection
  ): void

  setVisibility(
    instance: string | Ref<QTIProgressBar | undefined>,
    v: QTVisibility
  ): void

  requestRootLayout(instance: string | Ref<QTIProgressBar | undefined>): void

  requestLayout(instance: string | Ref<QTIProgressBar | undefined>): void

  //
  setDescendantFocusability(
    instance: string | Ref<QTIProgressBar | undefined>,
    descendant: QTFocusDescendant
  ): void

  changeDescendantFocusability(
    instance: string | Ref<QTIProgressBar | undefined>,
    descendant: QTDescendantFocusability
  ): void

  forceUpdateRenderNode(
    instance: string | Ref<QTIProgressBar | undefined>
  ): void

  setBackGroundColor(
    instance: string | Ref<QTIProgressBar | undefined>,
    color: string
  ): void

  layoutViewManual(instance: string | Ref<QTIProgressBar | undefined>): void

  blockRootFocus(instance: string | Ref<QTIProgressBar | undefined>): void

  unBlockRootFocus(instance: string | Ref<QTIProgressBar | undefined>): void

  changeAlpha(
    instance: string | Ref<QTIProgressBar | undefined>,
    alpha: number
  ): void

  setScale(
    instance: string | Ref<QTIProgressBar | undefined>,
    x: number,
    y: number,
    duration: number
  ): void

  setPosition(
    instance: string | Ref<QTIProgressBar | undefined>,
    x: number,
    y: number,
    z: number
  ): void

  updateLayout(
    instance: string | Ref<QTIProgressBar | undefined>,
    width: number,
    height: number,
    x: number,
    y: number
  ): void

  invalidate(instance: string | Ref<QTIProgressBar | undefined>): void

  dispatchFunctionForTarget(
    instance: string | Ref<QTIProgressBar | undefined>,
    targetName: string,
    functionTargetName: string,
    params: Array<QTNativeParams>,
    delay: number
  ): void

  setBlockFocusDirections(
    instance: string | Ref<QTIProgressBar | undefined>,
    directionList: Array<QTFocusDirectionName>
  ): void

  setBlockFocusDirectionsOnFail(
    instance: string | Ref<QTIProgressBar | undefined>,
    directionList: Array<QTFocusDirectionName>
  ): void

  setInitFocus(
    instance: string | Ref<QTIProgressBar | undefined>,
    sid: string,
    delay?: number
  ): void

  setAutoFocus(
    instance: string | Ref<QTIProgressBar | undefined>,
    sid: string,
    delay?: number
  ): void

  enabledAutofocus(
    instance: string | Ref<QTIProgressBar | undefined>,
    autofocus: boolean
  ): void

  requestAutofocus(instance: string | Ref<QTIProgressBar | undefined>): void

  //
  hasFocus(instance: string | Ref<QTIProgressBar | undefined>): Promise<boolean>

  isFocused(
    instance: string | Ref<QTIProgressBar | undefined>
  ): Promise<boolean>

  getLocationOnScreen(
    instance: string | Ref<QTIProgressBar | undefined>
  ): Promise<QTEventData<QTLocation>>

  getViewState(
    instance: string | Ref<QTIProgressBar | undefined>
  ): Promise<QTViewState>

  getChildViewState(
    instance: string | Ref<QTIProgressBar | undefined>,
    position: number
  ): Promise<QTViewState>

  //------------------------------------ProgressBar--------------------------------------------
  invalidateProgressBar(
    instance: string | Ref<QTIProgressBar | undefined>
  ): void

  setFocusable(
    instance: string | Ref<QTIProgressBar | undefined>,
    focusable: boolean
  ): void

  setClickable(
    instance: string | Ref<QTIProgressBar | undefined>,
    clickable: boolean
  ): void

  setVisible(
    instance: string | Ref<QTIProgressBar | undefined>,
    visible: boolean
  ): void

  setLeftSeekBarVisible(
    instance: string | Ref<QTIProgressBar | undefined>,
    visible: boolean
  ): void

  setRightSeekBarVisible(
    instance: string | Ref<QTIProgressBar | undefined>,
    visible: boolean
  ): void

  setSeekBarMode(
    instance: string | Ref<QTIProgressBar | undefined>,
    mode: QTSeekBarMode
  ): void

  setProgress(
    instance: string | Ref<QTIProgressBar | undefined>,
    progress: number
  ): void

  setSecondProgress(
    instance: string | Ref<QTIProgressBar | undefined>,
    progress: number
  ): void

  show(instance: string | Ref<QTIProgressBar | undefined>, value: boolean): void

  setMaxProgress(
    instance: string | Ref<QTIProgressBar | undefined>,
    progress: number
  ): void

  setRangeProgress(
    instance: string | Ref<QTIProgressBar | undefined>,
    leftValue: number,
    rightValue: number
  ): void

  getProgress(instance: string | Ref<QTIProgressBar | undefined>): void

  getLeftProgress(instance: string | Ref<QTIProgressBar | undefined>): void

  getRightProgress(instance: string | Ref<QTIProgressBar | undefined>): void

  setRange(
    instance: string | Ref<QTIProgressBar | undefined>,
    min: number,
    max: number,
    minInterval: number
  ): void

  setGravity(
    instance: string | Ref<QTIProgressBar | undefined>,
    gravity: QTSeekBarGravity
  ): void

  setProgressWidth(
    instance: string | Ref<QTIProgressBar | undefined>,
    progressWidth: number
  ): void

  setProgressHeight(
    instance: string | Ref<QTIProgressBar | undefined>,
    progressHeight: number
  ): void

  setProgressRadius(
    instance: string | Ref<QTIProgressBar | undefined>,
    progressRadius: number
  ): void

  setProgressColor(
    instance: string | Ref<QTIProgressBar | undefined>,
    progressColor: number
  ): void

  setProgressDefaultColor(
    instance: string | Ref<QTIProgressBar | undefined>,
    defaultProgressColor: number
  ): void

  setProgressDrawable(
    instance: string | Ref<QTIProgressBar | undefined>,
    progressDrawable: QTGradient
  ): void

  setProgressDefaultDrawable(
    instance: string | Ref<QTIProgressBar | undefined>,
    progressDefaultDrawable: QTGradient
  ): void

  setProgressUrl(
    instance: string | Ref<QTIProgressBar | undefined>,
    progressUrl: string
  ): void

  setProgressDefaultUrl(
    instance: string | Ref<QTIProgressBar | undefined>,
    progressDefaultUrl: string
  ): void

  showIndicator(
    instance: string | Ref<QTIProgressBar | undefined>,
    showIndicator: boolean
  ): void

  showLeftIndicator(
    instance: string | Ref<QTIProgressBar | undefined>,
    showIndicator: boolean
  ): void

  showRightIndicator(
    instance: string | Ref<QTIProgressBar | undefined>,
    showIndicator: boolean
  ): void

  setIndicatorShowMode(
    instance: string | Ref<QTIProgressBar | undefined>,
    indicatorShowMode: QTSeekBarIndicatorMode
  ): void

  setLeftIndicatorShowMode(
    instance: string | Ref<QTIProgressBar | undefined>,
    indicatorShowMode: QTSeekBarIndicatorMode
  ): void

  setRightIndicatorShowMode(
    instance: string | Ref<QTIProgressBar | undefined>,
    indicatorShowMode: QTSeekBarIndicatorMode
  ): void

  setIndicatorWidth(
    instance: string | Ref<QTIProgressBar | undefined>,
    indicatorWidth: number
  ): void

  setLeftIndicatorWidth(
    instance: string | Ref<QTIProgressBar | undefined>,
    indicatorWidth: number
  ): void

  setRightIndicatorWidth(
    instance: string | Ref<QTIProgressBar | undefined>,
    indicatorWidth: number
  ): void

  setIndicatorHeight(
    instance: string | Ref<QTIProgressBar | undefined>,
    indicatorHeight: number
  ): void

  setLeftIndicatorHeight(
    instance: string | Ref<QTIProgressBar | undefined>,
    indicatorHeight: number
  ): void

  setRightIndicatorHeight(
    instance: string | Ref<QTIProgressBar | undefined>,
    indicatorHeight: number
  ): void

  setIndicatorTextDecimalFormat(
    instance: string | Ref<QTIProgressBar | undefined>,
    formatPattern: string
  ): void

  setLeftIndicatorTextDecimalFormat(
    instance: string | Ref<QTIProgressBar | undefined>,
    formatPattern: string
  ): void

  setRightIndicatorTextDecimalFormat(
    instance: string | Ref<QTIProgressBar | undefined>,
    formatPattern: string
  ): void

  setIndicatorTextStringFormat(
    instance: string | Ref<QTIProgressBar | undefined>,
    formatPattern: string
  ): void

  setLeftIndicatorTextStringFormat(
    instance: string | Ref<QTIProgressBar | undefined>,
    formatPattern: string
  ): void

  setRightIndicatorTextStringFormat(
    instance: string | Ref<QTIProgressBar | undefined>,
    formatPattern: string
  ): void

  setIndicatorMargin(
    instance: string | Ref<QTIProgressBar | undefined>,
    indicatorMargin: number
  ): void

  setLeftIndicatorMargin(
    instance: string | Ref<QTIProgressBar | undefined>,
    indicatorMargin: number
  ): void

  setRightIndicatorMargin(
    instance: string | Ref<QTIProgressBar | undefined>,
    indicatorMargin: number
  ): void

  setIndicatorPaddingBottom(
    instance: string | Ref<QTIProgressBar | undefined>,
    indicatorPaddingBottom: number
  ): void

  setLeftIndicatorPaddingBottom(
    instance: string | Ref<QTIProgressBar | undefined>,
    indicatorPaddingBottom: number
  ): void

  setRightIndicatorPaddingBottom(
    instance: string | Ref<QTIProgressBar | undefined>,
    indicatorPaddingBottom: number
  ): void

  setIndicatorPaddingTop(
    instance: string | Ref<QTIProgressBar | undefined>,
    indicatorPaddingTop: number
  ): void

  setLeftIndicatorPaddingTop(
    instance: string | Ref<QTIProgressBar | undefined>,
    indicatorPaddingTop: number
  ): void

  setRightIndicatorPaddingTop(
    instance: string | Ref<QTIProgressBar | undefined>,
    indicatorPaddingTop: number
  ): void

  setIndicatorPaddingLeft(
    instance: string | Ref<QTIProgressBar | undefined>,
    indicatorPaddingLeft: number
  ): void

  setLeftIndicatorPaddingLeft(
    instance: string | Ref<QTIProgressBar | undefined>,
    indicatorPaddingLeft: number
  ): void

  setRightIndicatorPaddingLeft(
    instance: string | Ref<QTIProgressBar | undefined>,
    indicatorPaddingLeft: number
  ): void

  setIndicatorPaddingRight(
    instance: string | Ref<QTIProgressBar | undefined>,
    indicatorPaddingRight: number
  ): void

  setLeftIndicatorPaddingRight(
    instance: string | Ref<QTIProgressBar | undefined>,
    indicatorPaddingRight: number
  ): void

  setRightIndicatorPaddingRight(
    instance: string | Ref<QTIProgressBar | undefined>,
    indicatorPaddingRight: number
  ): void

  setIndicatorBackgroundColor(
    instance: string | Ref<QTIProgressBar | undefined>,
    indicatorBackgroundColor: number
  ): void

  setLeftIndicatorBackgroundColor(
    instance: string | Ref<QTIProgressBar | undefined>,
    indicatorBackgroundColor: number
  ): void

  setRightIndicatorBackgroundColor(
    instance: string | Ref<QTIProgressBar | undefined>,
    indicatorBackgroundColor: number
  ): void

  setIndicatorRadius(
    instance: string | Ref<QTIProgressBar | undefined>,
    indicatorRadius: number
  ): void

  setLeftIndicatorRadius(
    instance: string | Ref<QTIProgressBar | undefined>,
    indicatorRadius: number
  ): void

  setRightIndicatorRadius(
    instance: string | Ref<QTIProgressBar | undefined>,
    indicatorRadius: number
  ): void

  setIndicatorTextSize(
    instance: string | Ref<QTIProgressBar | undefined>,
    indicatorTextSize: number
  ): void

  setLeftIndicatorTextSize(
    instance: string | Ref<QTIProgressBar | undefined>,
    indicatorTextSize: number
  ): void

  setRightIndicatorTextSize(
    instance: string | Ref<QTIProgressBar | undefined>,
    indicatorTextSize: number
  ): void

  setIndicatorTextColor(
    instance: string | Ref<QTIProgressBar | undefined>,
    indicatorTextColor: number
  ): void

  setLeftIndicatorTextColor(
    instance: string | Ref<QTIProgressBar | undefined>,
    indicatorTextColor: number
  ): void

  setRightIndicatorTextColor(
    instance: string | Ref<QTIProgressBar | undefined>,
    indicatorTextColor: number
  ): void

  setIndicatorArrowSize(
    instance: string | Ref<QTIProgressBar | undefined>,
    indicatorArrowSize: number
  ): void

  setLeftIndicatorArrowSize(
    instance: string | Ref<QTIProgressBar | undefined>,
    indicatorArrowSize: number
  ): void

  setRightIndicatorArrowSize(
    instance: string | Ref<QTIProgressBar | undefined>,
    indicatorArrowSize: number
  ): void

  setIndicatorDrawable(
    instance: string | Ref<QTIProgressBar | undefined>,
    indicatorDrawable: QTGradient
  ): void

  setLeftIndicatorDrawable(
    instance: string | Ref<QTIProgressBar | undefined>,
    leftIndicatorDrawable: QTGradient
  ): void

  setRightIndicatorDrawable(
    instance: string | Ref<QTIProgressBar | undefined>,
    rightIndicatorDrawable: QTGradient
  ): void

  setIndicatorUrl(
    instance: string | Ref<QTIProgressBar | undefined>,
    indicatorUrl: string
  ): void

  setLeftIndicatorUrl(
    instance: string | Ref<QTIProgressBar | undefined>,
    leftIndicatorUrl: string
  ): void

  setRightIndicatorUrl(
    instance: string | Ref<QTIProgressBar | undefined>,
    rightIndicatorUrl: string
  ): void

  setThumbWidth(
    instance: string | Ref<QTIProgressBar | undefined>,
    thumbWidth: number
  ): void

  setLeftThumbWidth(
    instance: string | Ref<QTIProgressBar | undefined>,
    thumbWidth: number
  ): void

  setRightThumbWidth(
    instance: string | Ref<QTIProgressBar | undefined>,
    thumbWidth: number
  ): void

  setThumbHeight(
    instance: string | Ref<QTIProgressBar | undefined>,
    thumbHeight: number
  ): void

  setLeftThumbHeight(
    instance: string | Ref<QTIProgressBar | undefined>,
    thumbHeight: number
  ): void

  setRightThumbHeight(
    instance: string | Ref<QTIProgressBar | undefined>,
    thumbHeight: number
  ): void

  scaleThumb(instance: string | Ref<QTIProgressBar | undefined>): void

  scaleLeftThumb(instance: string | Ref<QTIProgressBar | undefined>): void

  scaleRightThumb(instance: string | Ref<QTIProgressBar | undefined>): void

  resetThumb(instance: string | Ref<QTIProgressBar | undefined>): void

  resetLeftThumb(instance: string | Ref<QTIProgressBar | undefined>): void

  resetRightThumb(instance: string | Ref<QTIProgressBar | undefined>): void

  setThumbScaleRatio(
    instance: string | Ref<QTIProgressBar | undefined>,
    thumbScaleRatio: number
  ): void

  setLeftThumbScaleRatio(
    instance: string | Ref<QTIProgressBar | undefined>,
    thumbScaleRatio: number
  ): void

  setRightThumbScaleRatio(
    instance: string | Ref<QTIProgressBar | undefined>,
    thumbScaleRatio: number
  ): void

  setThumbActivate(
    instance: string | Ref<QTIProgressBar | undefined>,
    activate: boolean
  ): void

  setLeftThumbActivate(
    instance: string | Ref<QTIProgressBar | undefined>,
    activate: boolean
  ): void

  setRightThumbActivate(
    instance: string | Ref<QTIProgressBar | undefined>,
    activate: boolean
  ): void

  setThumbDrawable(
    instance: string | Ref<QTIProgressBar | undefined>,
    drawable: QTGradient
  ): void

  setLeftThumbDrawable(
    instance: string | Ref<QTIProgressBar | undefined>,
    drawable: QTGradient
  ): void

  setRightThumbDrawable(
    instance: string | Ref<QTIProgressBar | undefined>,
    drawable: QTGradient
  ): void

  setThumbUrl(
    instance: string | Ref<QTIProgressBar | undefined>,
    url: string
  ): void

  setLeftThumbUrl(
    instance: string | Ref<QTIProgressBar | undefined>,
    url: string
  ): void

  setRightThumbUrl(
    instance: string | Ref<QTIProgressBar | undefined>,
    url: string
  ): void

  setThumbInactivatedDrawable(
    instance: string | Ref<QTIProgressBar | undefined>,
    drawable: QTGradient
  ): void

  setLeftThumbInactivatedDrawable(
    instance: string | Ref<QTIProgressBar | undefined>,
    drawable: QTGradient
  ): void

  setRightThumbInactivatedDrawable(
    instance: string | Ref<QTIProgressBar | undefined>,
    drawable: QTGradient
  ): void

  setThumbInactivatedUrl(
    instance: string | Ref<QTIProgressBar | undefined>,
    url: string
  ): void

  setLeftThumbInactivatedUrl(
    instance: string | Ref<QTIProgressBar | undefined>,
    url: string
  ): void

  setRightThumbInactivatedUrl(
    instance: string | Ref<QTIProgressBar | undefined>,
    url: string
  ): void

  setTickMarkMode(
    instance: string | Ref<QTIProgressBar | undefined>,
    tickMarkMode: QTSeekBarTickMarkMode
  ): void

  setTickMarkGravity(
    instance: string | Ref<QTIProgressBar | undefined>,
    tickMarkGravity: QTSeekBarTickMarkGravity
  ): void

  setTickMarkLayoutGravity(
    instance: string | Ref<QTIProgressBar | undefined>,
    tickMarkLayoutGravity: QTSeekBarTickMarkLayoutGravity
  ): void

  setTickMarkTextArray(
    instance: string | Ref<QTIProgressBar | undefined>,
    tickMarkTextArray: Array<string>
  ): void

  setTickMarkTextMargin(
    instance: string | Ref<QTIProgressBar | undefined>,
    tickMarkTextMargin: number
  ): void

  setTickMarkTextSize(
    instance: string | Ref<QTIProgressBar | undefined>,
    tickMarkTextSize: number
  ): void

  setTickMarkTextColor(
    instance: string | Ref<QTIProgressBar | undefined>,
    tickMarkTextColor: number
  ): void

  setTickMarkInRangeTextColor(
    instance: string | Ref<QTIProgressBar | undefined>,
    tickMarkInRangeTextColor: number
  ): void

  setSteps(
    instance: string | Ref<QTIProgressBar | undefined>,
    steps: number
  ): void

  setStepsWidth(
    instance: string | Ref<QTIProgressBar | undefined>,
    stepsWidth: number
  ): void

  setStepsHeight(
    instance: string | Ref<QTIProgressBar | undefined>,
    stepsHeight: number
  ): void

  setStepsRadius(
    instance: string | Ref<QTIProgressBar | undefined>,
    stepsRadius: number
  ): void

  setStepsColor(
    instance: string | Ref<QTIProgressBar | undefined>,
    stepsColor: number
  ): void

  setStepsAutoBonding(
    instance: string | Ref<QTIProgressBar | undefined>,
    stepsAutoBonding: boolean
  ): void

  setStepsDrawable(
    instance: string | Ref<QTIProgressBar | undefined>,
    drawableArray: Array<QTGradient>
  ): void

  setStepsUrl(
    instance: string | Ref<QTIProgressBar | undefined>,
    urlArray: Array<string>
  ): void
}

export function createQtProgressBarAPI(): QtProgressBarAPI {
  //--------------------------------------------------------------------------------
  function requestFocus(
    instance: string | Ref<QTIProgressBar | undefined>,
    direction?: QTFocusDirection
  ) {
    if (isString(instance)) {
      callUIFunction(instance, 'requestFocus', [direction])
    } else if (isRef(instance)) {
      instance.value?.requestFocus(direction)
    }
  }

  function requestChildFocus(
    instance: string | Ref<QTIProgressBar | undefined>,
    position: number
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'requestChildFocus', [position])
    } else if (isRef(instance)) {
      instance.value?.requestChildFocus(position)
    }
  }

  function clearFocus(instance: string | Ref<QTIProgressBar | undefined>) {
    if (isString(instance)) {
      callUIFunction(instance, 'clearFocus', [])
    } else if (isRef(instance)) {
      instance.value?.clearFocus()
    }
  }

  function requestFocusDirectly(
    instance: string | Ref<QTIProgressBar | undefined>,
    direction?: QTFocusDirection
  ) {
    if (isString(instance)) {
      callUIFunction(instance, 'requestFocusDirectly', [direction])
    } else if (isRef(instance)) {
      instance.value?.requestFocusDirectly(direction)
    }
  }

  function setVisibility(
    instance: string | Ref<QTIProgressBar | undefined>,
    v: QTVisibility
  ) {
    if (isString(instance)) {
      callUIFunction(instance, 'changeVisibility', [v])
    } else if (isRef(instance)) {
      instance.value?.setVisibility(v)
    }
  }

  function requestRootLayout(
    instance: string | Ref<QTIProgressBar | undefined>
  ) {
    if (isString(instance)) {
      callUIFunction(instance, 'requestRootLayout', [])
    } else if (isRef(instance)) {
      instance.value?.requestRootLayout()
    }
  }

  function requestLayout(instance: string | Ref<QTIProgressBar | undefined>) {
    if (isString(instance)) {
      callUIFunction(instance, 'requestLayout', [])
    } else if (isRef(instance)) {
      instance.value?.requestLayout()
    }
  }

  function setDescendantFocusability(
    instance: string | Ref<QTIProgressBar | undefined>,
    descendant: QTFocusDescendant
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'setDescendantFocusability', [descendant])
    } else if (isRef(instance)) {
      instance.value?.setDescendantFocusability(descendant)
    }
  }

  function changeDescendantFocusability(
    instance: string | Ref<QTIProgressBar | undefined>,
    descendant: QTDescendantFocusability
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'changeDescendantFocusability', [descendant])
    } else if (isRef(instance)) {
      instance.value?.changeDescendantFocusability(descendant)
    }
  }

  function forceUpdateRenderNode(
    instance: string | Ref<QTIProgressBar | undefined>
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'forceUpdateRenderNode', [])
    } else if (isRef(instance)) {
      instance.value?.forceUpdateRenderNode()
    }
  }

  function setBackGroundColor(
    instance: string | Ref<QTIProgressBar | undefined>,
    color: string
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'setBackGroundColor', [color])
    } else if (isRef(instance)) {
      instance.value?.setBackGroundColor(color)
    }
  }

  function layoutViewManual(
    instance: string | Ref<QTIProgressBar | undefined>
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'layoutViewManual', [])
    } else if (isRef(instance)) {
      instance.value?.layoutViewManual()
    }
  }

  function blockRootFocus(
    instance: string | Ref<QTIProgressBar | undefined>
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'blockRootFocus', [])
    } else if (isRef(instance)) {
      instance.value?.blockRootFocus()
    }
  }

  function unBlockRootFocus(
    instance: string | Ref<QTIProgressBar | undefined>
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'unBlockRootFocus', [])
    } else if (isRef(instance)) {
      instance.value?.unBlockRootFocus()
    }
  }

  function changeAlpha(
    instance: string | Ref<QTIProgressBar | undefined>,
    alpha: number
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'changeAlpha', [alpha])
    } else if (isRef(instance)) {
      instance.value?.changeAlpha(alpha)
    }
  }

  function setScale(
    instance: string | Ref<QTIProgressBar | undefined>,
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
    instance: string | Ref<QTIProgressBar | undefined>,
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
    instance: string | Ref<QTIProgressBar | undefined>,
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
    instance: string | Ref<QTIProgressBar | undefined>
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'invalidate', [])
    } else if (isRef(instance)) {
      instance.value?.invalidate()
    }
  }

  function dispatchFunctionForTarget(
    instance: string | Ref<QTIProgressBar | undefined>,
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
    instance: string | Ref<QTIProgressBar | undefined>,
    directionList: Array<QTFocusDirectionName>
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'setBlockFocusDirections', [directionList])
    } else if (isRef(instance)) {
      instance.value?.setBlockFocusDirections(directionList)
    }
  }

  function setBlockFocusDirectionsOnFail(
    instance: string | Ref<QTIProgressBar | undefined>,
    directionList: Array<QTFocusDirectionName>
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'setBlockFocusDirectionsOnFail', [directionList])
    } else if (isRef(instance)) {
      instance.value?.setBlockFocusDirectionsOnFail(directionList)
    }
  }

  function setInitFocus(
    instance: string | Ref<QTIProgressBar | undefined>,
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
    instance: string | Ref<QTIProgressBar | undefined>,
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
    instance: string | Ref<QTIProgressBar | undefined>,
    autofocus: boolean
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'setAutoFocus', [autofocus])
    } else if (isRef(instance)) {
      instance.value?.enabledAutofocus(autofocus)
    }
  }

  function requestAutofocus(
    instance: string | Ref<QTIProgressBar | undefined>
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'requestAutofocus', [])
    } else if (isRef(instance)) {
      instance.value?.requestAutofocus()
    }
  }

  function hasFocus(
    instance: string | Ref<QTIProgressBar | undefined>
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
    instance: string | Ref<QTIProgressBar | undefined>
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
    instance: string | Ref<QTIProgressBar | undefined>
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
    instance: string | Ref<QTIProgressBar | undefined>
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
    instance: string | Ref<QTIProgressBar | undefined>,
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

  function invalidateProgressBar(
    instance: string | Ref<QTIProgressBar | undefined>
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'invalidateSeekBar', [])
    } else if (isRef(instance)) {
      instance.value?.invalidateProgressBar()
    }
  }

  function setFocusable(
    instance: string | Ref<QTIProgressBar | undefined>,
    focusable: boolean
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'setFocusable', [focusable])
    } else if (isRef(instance)) {
      instance.value?.setFocusable(focusable)
    }
  }

  function setClickable(
    instance: string | Ref<QTIProgressBar | undefined>,
    clickable: boolean
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'setClickable', [clickable])
    } else if (isRef(instance)) {
      instance.value?.setClickable(clickable)
    }
  }

  function setVisible(
    instance: string | Ref<QTIProgressBar | undefined>,
    visible: boolean
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'setVisible', [visible])
    } else if (isRef(instance)) {
      instance.value?.setVisible(visible)
    }
  }

  function setLeftSeekBarVisible(
    instance: string | Ref<QTIProgressBar | undefined>,
    visible: boolean
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'setLeftSeekBarVisible', [visible])
    } else if (isRef(instance)) {
      instance.value?.setLeftSeekBarVisible(visible)
    }
  }

  function setRightSeekBarVisible(
    instance: string | Ref<QTIProgressBar | undefined>,
    visible: boolean
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'setRightSeekBarVisible', [visible])
    } else if (isRef(instance)) {
      instance.value?.setRightSeekBarVisible(visible)
    }
  }

  function setSeekBarMode(
    instance: string | Ref<QTIProgressBar | undefined>,
    mode: QTSeekBarMode
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'setSeekBarMode', [mode])
    } else if (isRef(instance)) {
      instance.value?.setSeekBarMode(mode)
    }
  }

  function setProgress(
    instance: string | Ref<QTIProgressBar | undefined>,
    progress: number
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'setProgress', [progress])
    } else if (isRef(instance)) {
      instance.value?.setProgress(progress)
    }
  }

  function setSecondProgress(
    instance: string | Ref<QTIProgressBar | undefined>,
    progress: number
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'setSecondProgress', [progress])
    } else if (isRef(instance)) {
      instance.value?.setSecondProgress(progress)
    }
  }

  function show(
    instance: string | Ref<QTIProgressBar | undefined>,
    value: boolean
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'show', [value])
    } else if (isRef(instance)) {
      instance.value?.show(value)
    }
  }

  function setMaxProgress(
    instance: string | Ref<QTIProgressBar | undefined>,
    progress: number
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'setMaxProgress', [progress])
    } else if (isRef(instance)) {
      instance.value?.setMaxProgress(progress)
    }
  }

  function setRangeProgress(
    instance: string | Ref<QTIProgressBar | undefined>,
    leftValue: number,
    rightValue: number
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'setRangeProgress', [leftValue, rightValue])
    } else if (isRef(instance)) {
      instance.value?.setRangeProgress(leftValue, rightValue)
    }
  }

  function getProgress(
    instance: string | Ref<QTIProgressBar | undefined>
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'getProgress', [])
    } else if (isRef(instance)) {
      instance.value?.getProgress()
    }
  }

  function getLeftProgress(
    instance: string | Ref<QTIProgressBar | undefined>
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'getLeftProgress', [])
    } else if (isRef(instance)) {
      instance.value?.getLeftProgress()
    }
  }

  function getRightProgress(
    instance: string | Ref<QTIProgressBar | undefined>
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'getRightProgress', [])
    } else if (isRef(instance)) {
      instance.value?.getRightProgress()
    }
  }

  function setRange(
    instance: string | Ref<QTIProgressBar | undefined>,
    min: number,
    max: number,
    minInterval: number
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'setRange', [min, max, minInterval])
    } else if (isRef(instance)) {
      instance.value?.setRange(min, max, minInterval)
    }
  }

  function setGravity(
    instance: string | Ref<QTIProgressBar | undefined>,
    gravity: QTSeekBarGravity
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'setGravity', [gravity])
    } else if (isRef(instance)) {
      instance.value?.setGravity(gravity)
    }
  }

  function setProgressWidth(
    instance: string | Ref<QTIProgressBar | undefined>,
    progressWidth: number
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'setProgressWidth', [progressWidth])
    } else if (isRef(instance)) {
      instance.value?.setProgressWidth(progressWidth)
    }
  }

  function setProgressHeight(
    instance: string | Ref<QTIProgressBar | undefined>,
    progressHeight: number
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'setProgressHeight', [progressHeight])
    } else if (isRef(instance)) {
      instance.value?.setProgressHeight(progressHeight)
    }
  }

  function setProgressRadius(
    instance: string | Ref<QTIProgressBar | undefined>,
    progressRadius: number
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'setProgressRadius', [progressRadius])
    } else if (isRef(instance)) {
      instance.value?.setProgressRadius(progressRadius)
    }
  }

  function setProgressColor(
    instance: string | Ref<QTIProgressBar | undefined>,
    progressColor: number
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'setProgressColor', [progressColor])
    } else if (isRef(instance)) {
      instance.value?.setProgressColor(progressColor)
    }
  }

  function setProgressDefaultColor(
    instance: string | Ref<QTIProgressBar | undefined>,
    defaultProgressColor: number
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'setProgressDefaultColor', [
        defaultProgressColor,
      ])
    } else if (isRef(instance)) {
      instance.value?.setProgressDefaultColor(defaultProgressColor)
    }
  }

  function setProgressDrawable(
    instance: string | Ref<QTIProgressBar | undefined>,
    progressDrawable: QTGradient
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'setProgressDrawable', [progressDrawable])
    } else if (isRef(instance)) {
      instance.value?.setProgressDrawable(progressDrawable)
    }
  }

  function setProgressDefaultDrawable(
    instance: string | Ref<QTIProgressBar | undefined>,
    progressDefaultDrawable: QTGradient
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'setProgressDefaultDrawable', [
        progressDefaultDrawable,
      ])
    } else if (isRef(instance)) {
      instance.value?.setProgressDefaultDrawable(progressDefaultDrawable)
    }
  }

  function setProgressUrl(
    instance: string | Ref<QTIProgressBar | undefined>,
    progressUrl: string
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'setProgressUrl', [progressUrl])
    } else if (isRef(instance)) {
      instance.value?.setProgressUrl(progressUrl)
    }
  }

  function setProgressDefaultUrl(
    instance: string | Ref<QTIProgressBar | undefined>,
    progressDefaultUrl: string
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'setProgressDefaultUrl', [progressDefaultUrl])
    } else if (isRef(instance)) {
      instance.value?.setProgressDefaultUrl(progressDefaultUrl)
    }
  }

  function showIndicator(
    instance: string | Ref<QTIProgressBar | undefined>,
    showIndicator: boolean
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'showIndicator', [showIndicator])
    } else if (isRef(instance)) {
      instance.value?.showIndicator(showIndicator)
    }
  }

  function showLeftIndicator(
    instance: string | Ref<QTIProgressBar | undefined>,
    showIndicator: boolean
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'showLeftIndicator', [showIndicator])
    } else if (isRef(instance)) {
      instance.value?.showLeftIndicator(showIndicator)
    }
  }

  function showRightIndicator(
    instance: string | Ref<QTIProgressBar | undefined>,
    showIndicator: boolean
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'showRightIndicator', [showIndicator])
    } else if (isRef(instance)) {
      instance.value?.showRightIndicator(showIndicator)
    }
  }

  function setIndicatorShowMode(
    instance: string | Ref<QTIProgressBar | undefined>,
    indicatorShowMode: QTSeekBarIndicatorMode
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'setIndicatorShowMode', [indicatorShowMode])
    } else if (isRef(instance)) {
      instance.value?.setIndicatorShowMode(indicatorShowMode)
    }
  }

  function setLeftIndicatorShowMode(
    instance: string | Ref<QTIProgressBar | undefined>,
    indicatorShowMode: QTSeekBarIndicatorMode
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'setLeftIndicatorShowMode', [indicatorShowMode])
    } else if (isRef(instance)) {
      instance.value?.setLeftIndicatorShowMode(indicatorShowMode)
    }
  }

  function setRightIndicatorShowMode(
    instance: string | Ref<QTIProgressBar | undefined>,
    indicatorShowMode: QTSeekBarIndicatorMode
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'setRightIndicatorShowMode', [indicatorShowMode])
    } else if (isRef(instance)) {
      instance.value?.setRightIndicatorShowMode(indicatorShowMode)
    }
  }

  function setIndicatorWidth(
    instance: string | Ref<QTIProgressBar | undefined>,
    indicatorWidth: number
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'setIndicatorWidth', [indicatorWidth])
    } else if (isRef(instance)) {
      instance.value?.setIndicatorWidth(indicatorWidth)
    }
  }

  function setLeftIndicatorWidth(
    instance: string | Ref<QTIProgressBar | undefined>,
    indicatorWidth: number
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'setLeftIndicatorWidth', [indicatorWidth])
    } else if (isRef(instance)) {
      instance.value?.setLeftIndicatorWidth(indicatorWidth)
    }
  }

  function setRightIndicatorWidth(
    instance: string | Ref<QTIProgressBar | undefined>,
    indicatorWidth: number
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'setRightIndicatorWidth', [indicatorWidth])
    } else if (isRef(instance)) {
      instance.value?.setRightIndicatorWidth(indicatorWidth)
    }
  }

  function setIndicatorHeight(
    instance: string | Ref<QTIProgressBar | undefined>,
    indicatorHeight: number
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'setIndicatorHeight', [indicatorHeight])
    } else if (isRef(instance)) {
      instance.value?.setIndicatorHeight(indicatorHeight)
    }
  }

  function setLeftIndicatorHeight(
    instance: string | Ref<QTIProgressBar | undefined>,
    indicatorHeight: number
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'setLeftIndicatorHeight', [indicatorHeight])
    } else if (isRef(instance)) {
      instance.value?.setLeftIndicatorHeight(indicatorHeight)
    }
  }

  function setRightIndicatorHeight(
    instance: string | Ref<QTIProgressBar | undefined>,
    indicatorHeight: number
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'setRightIndicatorHeight', [indicatorHeight])
    } else if (isRef(instance)) {
      instance.value?.setRightIndicatorHeight(indicatorHeight)
    }
  }

  function setIndicatorTextDecimalFormat(
    instance: string | Ref<QTIProgressBar | undefined>,
    formatPattern: string
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'setIndicatorTextDecimalFormat', [formatPattern])
    } else if (isRef(instance)) {
      instance.value?.setIndicatorTextDecimalFormat(formatPattern)
    }
  }

  function setLeftIndicatorTextDecimalFormat(
    instance: string | Ref<QTIProgressBar | undefined>,
    formatPattern: string
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'setLeftIndicatorTextDecimalFormat', [
        formatPattern,
      ])
    } else if (isRef(instance)) {
      instance.value?.setLeftIndicatorTextDecimalFormat(formatPattern)
    }
  }

  function setRightIndicatorTextDecimalFormat(
    instance: string | Ref<QTIProgressBar | undefined>,
    formatPattern: string
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'setRightIndicatorTextDecimalFormat', [
        formatPattern,
      ])
    } else if (isRef(instance)) {
      instance.value?.setRightIndicatorTextDecimalFormat(formatPattern)
    }
  }

  function setIndicatorTextStringFormat(
    instance: string | Ref<QTIProgressBar | undefined>,
    formatPattern: string
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'setIndicatorTextStringFormat', [formatPattern])
    } else if (isRef(instance)) {
      instance.value?.setIndicatorTextStringFormat(formatPattern)
    }
  }

  function setLeftIndicatorTextStringFormat(
    instance: string | Ref<QTIProgressBar | undefined>,
    formatPattern: string
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'setLeftIndicatorTextStringFormat', [
        formatPattern,
      ])
    } else if (isRef(instance)) {
      instance.value?.setLeftIndicatorTextStringFormat(formatPattern)
    }
  }

  function setRightIndicatorTextStringFormat(
    instance: string | Ref<QTIProgressBar | undefined>,
    formatPattern: string
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'setRightIndicatorTextStringFormat', [
        formatPattern,
      ])
    } else if (isRef(instance)) {
      instance.value?.setRightIndicatorTextStringFormat(formatPattern)
    }
  }

  function setIndicatorMargin(
    instance: string | Ref<QTIProgressBar | undefined>,
    indicatorMargin: number
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'setIndicatorMargin', [indicatorMargin])
    } else if (isRef(instance)) {
      instance.value?.setIndicatorMargin(indicatorMargin)
    }
  }

  function setLeftIndicatorMargin(
    instance: string | Ref<QTIProgressBar | undefined>,
    indicatorMargin: number
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'setLeftIndicatorMargin', [indicatorMargin])
    } else if (isRef(instance)) {
      instance.value?.setLeftIndicatorMargin(indicatorMargin)
    }
  }

  function setRightIndicatorMargin(
    instance: string | Ref<QTIProgressBar | undefined>,
    indicatorMargin: number
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'setRightIndicatorMargin', [indicatorMargin])
    } else if (isRef(instance)) {
      instance.value?.setRightIndicatorMargin(indicatorMargin)
    }
  }

  function setIndicatorPaddingBottom(
    instance: string | Ref<QTIProgressBar | undefined>,
    indicatorPaddingBottom: number
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'setIndicatorPaddingBottom', [
        indicatorPaddingBottom,
      ])
    } else if (isRef(instance)) {
      instance.value?.setIndicatorPaddingBottom(indicatorPaddingBottom)
    }
  }

  function setLeftIndicatorPaddingBottom(
    instance: string | Ref<QTIProgressBar | undefined>,
    indicatorPaddingBottom: number
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'setLeftIndicatorPaddingBottom', [
        indicatorPaddingBottom,
      ])
    } else if (isRef(instance)) {
      instance.value?.setLeftIndicatorPaddingBottom(indicatorPaddingBottom)
    }
  }

  function setRightIndicatorPaddingBottom(
    instance: string | Ref<QTIProgressBar | undefined>,
    indicatorPaddingBottom: number
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'setRightIndicatorPaddingBottom', [
        indicatorPaddingBottom,
      ])
    } else if (isRef(instance)) {
      instance.value?.setRightIndicatorPaddingBottom(indicatorPaddingBottom)
    }
  }

  function setIndicatorPaddingTop(
    instance: string | Ref<QTIProgressBar | undefined>,
    indicatorPaddingTop: number
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'setIndicatorPaddingTop', [indicatorPaddingTop])
    } else if (isRef(instance)) {
      instance.value?.setIndicatorPaddingTop(indicatorPaddingTop)
    }
  }

  function setLeftIndicatorPaddingTop(
    instance: string | Ref<QTIProgressBar | undefined>,
    indicatorPaddingTop: number
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'setLeftIndicatorPaddingTop', [
        indicatorPaddingTop,
      ])
    } else if (isRef(instance)) {
      instance.value?.setLeftIndicatorPaddingTop(indicatorPaddingTop)
    }
  }

  function setRightIndicatorPaddingTop(
    instance: string | Ref<QTIProgressBar | undefined>,
    indicatorPaddingTop: number
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'setRightIndicatorPaddingTop', [
        indicatorPaddingTop,
      ])
    } else if (isRef(instance)) {
      instance.value?.setRightIndicatorPaddingTop(indicatorPaddingTop)
    }
  }

  function setIndicatorPaddingLeft(
    instance: string | Ref<QTIProgressBar | undefined>,
    indicatorPaddingLeft: number
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'setIndicatorPaddingLeft', [
        indicatorPaddingLeft,
      ])
    } else if (isRef(instance)) {
      instance.value?.setIndicatorPaddingLeft(indicatorPaddingLeft)
    }
  }

  function setLeftIndicatorPaddingLeft(
    instance: string | Ref<QTIProgressBar | undefined>,
    indicatorPaddingLeft: number
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'setLeftIndicatorPaddingLeft', [
        indicatorPaddingLeft,
      ])
    } else if (isRef(instance)) {
      instance.value?.setLeftIndicatorPaddingLeft(indicatorPaddingLeft)
    }
  }

  function setRightIndicatorPaddingLeft(
    instance: string | Ref<QTIProgressBar | undefined>,
    indicatorPaddingLeft: number
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'setRightIndicatorPaddingLeft', [
        indicatorPaddingLeft,
      ])
    } else if (isRef(instance)) {
      instance.value?.setRightIndicatorPaddingLeft(indicatorPaddingLeft)
    }
  }

  function setIndicatorPaddingRight(
    instance: string | Ref<QTIProgressBar | undefined>,
    indicatorPaddingRight: number
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'setIndicatorPaddingRight', [
        indicatorPaddingRight,
      ])
    } else if (isRef(instance)) {
      instance.value?.setIndicatorPaddingRight(indicatorPaddingRight)
    }
  }

  function setLeftIndicatorPaddingRight(
    instance: string | Ref<QTIProgressBar | undefined>,
    indicatorPaddingRight: number
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'setLeftIndicatorPaddingRight', [
        indicatorPaddingRight,
      ])
    } else if (isRef(instance)) {
      instance.value?.setLeftIndicatorPaddingRight(indicatorPaddingRight)
    }
  }

  function setRightIndicatorPaddingRight(
    instance: string | Ref<QTIProgressBar | undefined>,
    indicatorPaddingRight: number
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'setRightIndicatorPaddingRight', [
        indicatorPaddingRight,
      ])
    } else if (isRef(instance)) {
      instance.value?.setRightIndicatorPaddingRight(indicatorPaddingRight)
    }
  }

  function setIndicatorBackgroundColor(
    instance: string | Ref<QTIProgressBar | undefined>,
    indicatorBackgroundColor: number
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'setIndicatorBackgroundColor', [
        indicatorBackgroundColor,
      ])
    } else if (isRef(instance)) {
      instance.value?.setIndicatorBackgroundColor(indicatorBackgroundColor)
    }
  }

  function setLeftIndicatorBackgroundColor(
    instance: string | Ref<QTIProgressBar | undefined>,
    indicatorBackgroundColor: number
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'setLeftIndicatorBackgroundColor', [
        indicatorBackgroundColor,
      ])
    } else if (isRef(instance)) {
      instance.value?.setLeftIndicatorBackgroundColor(indicatorBackgroundColor)
    }
  }

  function setRightIndicatorBackgroundColor(
    instance: string | Ref<QTIProgressBar | undefined>,
    indicatorBackgroundColor: number
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'setLeftIndicatorBackgroundColor', [
        indicatorBackgroundColor,
      ])
    } else if (isRef(instance)) {
      instance.value?.setLeftIndicatorBackgroundColor(indicatorBackgroundColor)
    }
  }

  function setIndicatorRadius(
    instance: string | Ref<QTIProgressBar | undefined>,
    indicatorRadius: number
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'setIndicatorRadius', [indicatorRadius])
    } else if (isRef(instance)) {
      instance.value?.setIndicatorRadius(indicatorRadius)
    }
  }

  function setLeftIndicatorRadius(
    instance: string | Ref<QTIProgressBar | undefined>,
    indicatorRadius: number
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'setLeftIndicatorRadius', [indicatorRadius])
    } else if (isRef(instance)) {
      instance.value?.setLeftIndicatorRadius(indicatorRadius)
    }
  }

  function setRightIndicatorRadius(
    instance: string | Ref<QTIProgressBar | undefined>,
    indicatorRadius: number
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'setRightIndicatorRadius', [indicatorRadius])
    } else if (isRef(instance)) {
      instance.value?.setRightIndicatorRadius(indicatorRadius)
    }
  }

  function setIndicatorTextSize(
    instance: string | Ref<QTIProgressBar | undefined>,
    indicatorTextSize: number
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'setIndicatorTextSize', [indicatorTextSize])
    } else if (isRef(instance)) {
      instance.value?.setIndicatorTextSize(indicatorTextSize)
    }
  }

  function setLeftIndicatorTextSize(
    instance: string | Ref<QTIProgressBar | undefined>,
    indicatorTextSize: number
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'setLeftIndicatorTextSize', [indicatorTextSize])
    } else if (isRef(instance)) {
      instance.value?.setLeftIndicatorTextSize(indicatorTextSize)
    }
  }

  function setRightIndicatorTextSize(
    instance: string | Ref<QTIProgressBar | undefined>,
    indicatorTextSize: number
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'setRightIndicatorTextSize', [indicatorTextSize])
    } else if (isRef(instance)) {
      instance.value?.setRightIndicatorTextSize(indicatorTextSize)
    }
  }

  function setIndicatorTextColor(
    instance: string | Ref<QTIProgressBar | undefined>,
    indicatorTextColor: number
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'setIndicatorTextColor', [indicatorTextColor])
    } else if (isRef(instance)) {
      instance.value?.setIndicatorTextColor(indicatorTextColor)
    }
  }

  function setLeftIndicatorTextColor(
    instance: string | Ref<QTIProgressBar | undefined>,
    indicatorTextColor: number
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'setLeftIndicatorTextColor', [
        indicatorTextColor,
      ])
    } else if (isRef(instance)) {
      instance.value?.setLeftIndicatorTextColor(indicatorTextColor)
    }
  }

  function setRightIndicatorTextColor(
    instance: string | Ref<QTIProgressBar | undefined>,
    indicatorTextColor: number
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'setRightIndicatorTextColor', [
        indicatorTextColor,
      ])
    } else if (isRef(instance)) {
      instance.value?.setRightIndicatorTextColor(indicatorTextColor)
    }
  }

  function setIndicatorArrowSize(
    instance: string | Ref<QTIProgressBar | undefined>,
    indicatorArrowSize: number
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'setIndicatorArrowSize', [indicatorArrowSize])
    } else if (isRef(instance)) {
      instance.value?.setIndicatorArrowSize(indicatorArrowSize)
    }
  }

  function setLeftIndicatorArrowSize(
    instance: string | Ref<QTIProgressBar | undefined>,
    indicatorArrowSize: number
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'setLeftIndicatorArrowSize', [
        indicatorArrowSize,
      ])
    } else if (isRef(instance)) {
      instance.value?.setLeftIndicatorArrowSize(indicatorArrowSize)
    }
  }

  function setRightIndicatorArrowSize(
    instance: string | Ref<QTIProgressBar | undefined>,
    indicatorArrowSize: number
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'setRightIndicatorArrowSize', [
        indicatorArrowSize,
      ])
    } else if (isRef(instance)) {
      instance.value?.setRightIndicatorArrowSize(indicatorArrowSize)
    }
  }

  function setIndicatorDrawable(
    instance: string | Ref<QTIProgressBar | undefined>,
    indicatorDrawable: QTGradient
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'setIndicatorDrawable', [indicatorDrawable])
    } else if (isRef(instance)) {
      instance.value?.setIndicatorDrawable(indicatorDrawable)
    }
  }

  function setLeftIndicatorDrawable(
    instance: string | Ref<QTIProgressBar | undefined>,
    leftIndicatorDrawable: QTGradient
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'setLeftIndicatorDrawable', [
        leftIndicatorDrawable,
      ])
    } else if (isRef(instance)) {
      instance.value?.setLeftIndicatorDrawable(leftIndicatorDrawable)
    }
  }

  function setRightIndicatorDrawable(
    instance: string | Ref<QTIProgressBar | undefined>,
    rightIndicatorDrawable: QTGradient
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'setRightIndicatorDrawable', [
        rightIndicatorDrawable,
      ])
    } else if (isRef(instance)) {
      instance.value?.setRightIndicatorDrawable(rightIndicatorDrawable)
    }
  }

  function setIndicatorUrl(
    instance: string | Ref<QTIProgressBar | undefined>,
    indicatorUrl: string
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'setIndicatorUrl', [indicatorUrl])
    } else if (isRef(instance)) {
      instance.value?.setIndicatorUrl(indicatorUrl)
    }
  }

  function setLeftIndicatorUrl(
    instance: string | Ref<QTIProgressBar | undefined>,
    leftIndicatorUrl: string
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'setLeftIndicatorUrl', [leftIndicatorUrl])
    } else if (isRef(instance)) {
      instance.value?.setLeftIndicatorUrl(leftIndicatorUrl)
    }
  }

  function setRightIndicatorUrl(
    instance: string | Ref<QTIProgressBar | undefined>,
    rightIndicatorUrl: string
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'setRightIndicatorUrl', [rightIndicatorUrl])
    } else if (isRef(instance)) {
      instance.value?.setRightIndicatorUrl(rightIndicatorUrl)
    }
  }

  function setThumbWidth(
    instance: string | Ref<QTIProgressBar | undefined>,
    thumbWidth: number
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'setThumbWidth', [thumbWidth])
    } else if (isRef(instance)) {
      instance.value?.setThumbWidth(thumbWidth)
    }
  }

  function setLeftThumbWidth(
    instance: string | Ref<QTIProgressBar | undefined>,
    thumbWidth: number
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'setLeftThumbWidth', [thumbWidth])
    } else if (isRef(instance)) {
      instance.value?.setLeftThumbWidth(thumbWidth)
    }
  }

  function setRightThumbWidth(
    instance: string | Ref<QTIProgressBar | undefined>,
    thumbWidth: number
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'setRightThumbWidth', [thumbWidth])
    } else if (isRef(instance)) {
      instance.value?.setRightThumbWidth(thumbWidth)
    }
  }

  function setThumbHeight(
    instance: string | Ref<QTIProgressBar | undefined>,
    thumbHeight: number
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'setThumbHeight', [thumbHeight])
    } else if (isRef(instance)) {
      instance.value?.setThumbHeight(thumbHeight)
    }
  }

  function setLeftThumbHeight(
    instance: string | Ref<QTIProgressBar | undefined>,
    thumbHeight: number
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'setLeftThumbHeight', [thumbHeight])
    } else if (isRef(instance)) {
      instance.value?.setLeftThumbHeight(thumbHeight)
    }
  }

  function setRightThumbHeight(
    instance: string | Ref<QTIProgressBar | undefined>,
    thumbHeight: number
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'setRightThumbHeight', [thumbHeight])
    } else if (isRef(instance)) {
      instance.value?.setRightThumbHeight(thumbHeight)
    }
  }

  function scaleThumb(
    instance: string | Ref<QTIProgressBar | undefined>
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'scaleThumb', [])
    } else if (isRef(instance)) {
      instance.value?.scaleThumb()
    }
  }

  function scaleLeftThumb(
    instance: string | Ref<QTIProgressBar | undefined>
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'scaleLeftThumb', [])
    } else if (isRef(instance)) {
      instance.value?.scaleLeftThumb()
    }
  }

  function scaleRightThumb(
    instance: string | Ref<QTIProgressBar | undefined>
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'scaleRightThumb', [])
    } else if (isRef(instance)) {
      instance.value?.scaleRightThumb()
    }
  }

  function resetThumb(
    instance: string | Ref<QTIProgressBar | undefined>
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'resetThumb', [])
    } else if (isRef(instance)) {
      instance.value?.resetThumb()
    }
  }

  function resetLeftThumb(
    instance: string | Ref<QTIProgressBar | undefined>
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'resetLeftThumb', [])
    } else if (isRef(instance)) {
      instance.value?.resetLeftThumb()
    }
  }

  function resetRightThumb(
    instance: string | Ref<QTIProgressBar | undefined>
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'resetRightThumb', [])
    } else if (isRef(instance)) {
      instance.value?.resetRightThumb()
    }
  }

  function setThumbScaleRatio(
    instance: string | Ref<QTIProgressBar | undefined>,
    thumbScaleRatio: number
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'setThumbScaleRatio', [thumbScaleRatio])
    } else if (isRef(instance)) {
      instance.value?.setThumbScaleRatio(thumbScaleRatio)
    }
  }

  function setLeftThumbScaleRatio(
    instance: string | Ref<QTIProgressBar | undefined>,
    thumbScaleRatio: number
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'setLeftThumbScaleRatio', [thumbScaleRatio])
    } else if (isRef(instance)) {
      instance.value?.setLeftThumbScaleRatio(thumbScaleRatio)
    }
  }

  function setRightThumbScaleRatio(
    instance: string | Ref<QTIProgressBar | undefined>,
    thumbScaleRatio: number
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'setRightThumbScaleRatio', [thumbScaleRatio])
    } else if (isRef(instance)) {
      instance.value?.setRightThumbScaleRatio(thumbScaleRatio)
    }
  }

  function setThumbActivate(
    instance: string | Ref<QTIProgressBar | undefined>,
    activate: boolean
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'setThumbActivate', [activate])
    } else if (isRef(instance)) {
      instance.value?.setThumbActivate(activate)
    }
  }

  function setLeftThumbActivate(
    instance: string | Ref<QTIProgressBar | undefined>,
    activate: boolean
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'setLeftThumbActivate', [activate])
    } else if (isRef(instance)) {
      instance.value?.setLeftThumbActivate(activate)
    }
  }

  function setRightThumbActivate(
    instance: string | Ref<QTIProgressBar | undefined>,
    activate: boolean
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'setRightThumbActivate', [activate])
    } else if (isRef(instance)) {
      instance.value?.setRightThumbActivate(activate)
    }
  }

  function setThumbDrawable(
    instance: string | Ref<QTIProgressBar | undefined>,
    drawable: QTGradient
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'setThumbDrawable', [drawable])
    } else if (isRef(instance)) {
      instance.value?.setThumbDrawable(drawable)
    }
  }

  function setLeftThumbDrawable(
    instance: string | Ref<QTIProgressBar | undefined>,
    drawable: QTGradient
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'setLeftThumbDrawable', [drawable])
    } else if (isRef(instance)) {
      instance.value?.setLeftThumbDrawable(drawable)
    }
  }

  function setRightThumbDrawable(
    instance: string | Ref<QTIProgressBar | undefined>,
    drawable: QTGradient
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'setRightThumbDrawable', [drawable])
    } else if (isRef(instance)) {
      instance.value?.setRightThumbDrawable(drawable)
    }
  }

  function setThumbUrl(
    instance: string | Ref<QTIProgressBar | undefined>,
    url: string
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'setThumbUrl', [url])
    } else if (isRef(instance)) {
      instance.value?.setThumbUrl(url)
    }
  }

  function setLeftThumbUrl(
    instance: string | Ref<QTIProgressBar | undefined>,
    url: string
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'setLeftThumbUrl', [url])
    } else if (isRef(instance)) {
      instance.value?.setLeftThumbUrl(url)
    }
  }

  function setRightThumbUrl(
    instance: string | Ref<QTIProgressBar | undefined>,
    url: string
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'setRightThumbUrl', [url])
    } else if (isRef(instance)) {
      instance.value?.setRightThumbUrl(url)
    }
  }

  function setThumbInactivatedDrawable(
    instance: string | Ref<QTIProgressBar | undefined>,
    drawable: QTGradient
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'setThumbInactivatedDrawable', [drawable])
    } else if (isRef(instance)) {
      instance.value?.setThumbInactivatedDrawable(drawable)
    }
  }

  function setLeftThumbInactivatedDrawable(
    instance: string | Ref<QTIProgressBar | undefined>,
    drawable: QTGradient
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'setLeftThumbInactivatedDrawable', [drawable])
    } else if (isRef(instance)) {
      instance.value?.setLeftThumbInactivatedDrawable(drawable)
    }
  }

  function setRightThumbInactivatedDrawable(
    instance: string | Ref<QTIProgressBar | undefined>,
    drawable: QTGradient
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'setRightThumbInactivatedDrawable', [drawable])
    } else if (isRef(instance)) {
      instance.value?.setRightThumbInactivatedDrawable(drawable)
    }
  }

  function setThumbInactivatedUrl(
    instance: string | Ref<QTIProgressBar | undefined>,
    url: string
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'setThumbInactivatedUrl', [url])
    } else if (isRef(instance)) {
      instance.value?.setThumbInactivatedUrl(url)
    }
  }

  function setLeftThumbInactivatedUrl(
    instance: string | Ref<QTIProgressBar | undefined>,
    url: string
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'setLeftThumbInactivatedUrl', [url])
    } else if (isRef(instance)) {
      instance.value?.setLeftThumbInactivatedUrl(url)
    }
  }

  function setRightThumbInactivatedUrl(
    instance: string | Ref<QTIProgressBar | undefined>,
    url: string
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'setRightThumbInactivatedUrl', [url])
    } else if (isRef(instance)) {
      instance.value?.setRightThumbInactivatedUrl(url)
    }
  }

  function setTickMarkMode(
    instance: string | Ref<QTIProgressBar | undefined>,
    tickMarkMode: QTSeekBarTickMarkMode
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'setTickMarkMode', [tickMarkMode])
    } else if (isRef(instance)) {
      instance.value?.setTickMarkMode(tickMarkMode)
    }
  }

  function setTickMarkGravity(
    instance: string | Ref<QTIProgressBar | undefined>,
    tickMarkGravity: QTSeekBarTickMarkGravity
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'setTickMarkGravity', [tickMarkGravity])
    } else if (isRef(instance)) {
      instance.value?.setTickMarkGravity(tickMarkGravity)
    }
  }

  function setTickMarkLayoutGravity(
    instance: string | Ref<QTIProgressBar | undefined>,
    tickMarkLayoutGravity: QTSeekBarTickMarkLayoutGravity
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'setTickMarkLayoutGravity', [
        tickMarkLayoutGravity,
      ])
    } else if (isRef(instance)) {
      instance.value?.setTickMarkLayoutGravity(tickMarkLayoutGravity)
    }
  }

  function setTickMarkTextArray(
    instance: string | Ref<QTIProgressBar | undefined>,
    tickMarkTextArray: Array<string>
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'setTickMarkTextArray', [tickMarkTextArray])
    } else if (isRef(instance)) {
      instance.value?.setTickMarkTextArray(tickMarkTextArray)
    }
  }

  function setTickMarkTextMargin(
    instance: string | Ref<QTIProgressBar | undefined>,
    tickMarkTextMargin: number
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'setTickMarkTextMargin', [tickMarkTextMargin])
    } else if (isRef(instance)) {
      instance.value?.setTickMarkTextMargin(tickMarkTextMargin)
    }
  }

  function setTickMarkTextSize(
    instance: string | Ref<QTIProgressBar | undefined>,
    tickMarkTextSize: number
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'setTickMarkTextSize', [tickMarkTextSize])
    } else if (isRef(instance)) {
      instance.value?.setTickMarkTextSize(tickMarkTextSize)
    }
  }

  function setTickMarkTextColor(
    instance: string | Ref<QTIProgressBar | undefined>,
    tickMarkTextColor: number
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'setTickMarkTextColor', [tickMarkTextColor])
    } else if (isRef(instance)) {
      instance.value?.setTickMarkTextColor(tickMarkTextColor)
    }
  }

  function setTickMarkInRangeTextColor(
    instance: string | Ref<QTIProgressBar | undefined>,
    tickMarkInRangeTextColor: number
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'setTickMarkInRangeTextColor', [
        tickMarkInRangeTextColor,
      ])
    } else if (isRef(instance)) {
      instance.value?.setTickMarkInRangeTextColor(tickMarkInRangeTextColor)
    }
  }

  function setSteps(
    instance: string | Ref<QTIProgressBar | undefined>,
    steps: number
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'setSteps', [steps])
    } else if (isRef(instance)) {
      instance.value?.setSteps(steps)
    }
  }

  function setStepsWidth(
    instance: string | Ref<QTIProgressBar | undefined>,
    stepsWidth: number
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'setStepsWidth', [stepsWidth])
    } else if (isRef(instance)) {
      instance.value?.setStepsWidth(stepsWidth)
    }
  }

  function setStepsHeight(
    instance: string | Ref<QTIProgressBar | undefined>,
    stepsHeight: number
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'setStepsHeight', [stepsHeight])
    } else if (isRef(instance)) {
      instance.value?.setStepsHeight(stepsHeight)
    }
  }

  function setStepsRadius(
    instance: string | Ref<QTIProgressBar | undefined>,
    stepsRadius: number
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'setStepsRadius', [stepsRadius])
    } else if (isRef(instance)) {
      instance.value?.setStepsRadius(stepsRadius)
    }
  }

  function setStepsColor(
    instance: string | Ref<QTIProgressBar | undefined>,
    stepsColor: number
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'setStepsColor', [stepsColor])
    } else if (isRef(instance)) {
      instance.value?.setStepsColor(stepsColor)
    }
  }

  function setStepsAutoBonding(
    instance: string | Ref<QTIProgressBar | undefined>,
    stepsAutoBonding: boolean
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'setStepsAutoBonding', [stepsAutoBonding])
    } else if (isRef(instance)) {
      instance.value?.setStepsAutoBonding(stepsAutoBonding)
    }
  }

  function setStepsDrawable(
    instance: string | Ref<QTIProgressBar | undefined>,
    drawableArray: Array<QTGradient>
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'setStepsDrawable', [drawableArray])
    } else if (isRef(instance)) {
      instance.value?.setStepsDrawable(drawableArray)
    }
  }

  function setStepsUrl(
    instance: string | Ref<QTIProgressBar | undefined>,
    urlArray: Array<string>
  ): void {
    if (isString(instance)) {
      callUIFunction(instance, 'setStepsUrl', [urlArray])
    } else if (isRef(instance)) {
      instance.value?.setStepsUrl(urlArray)
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
    invalidateProgressBar,
    setFocusable,
    setClickable,
    setVisible,
    setLeftSeekBarVisible,
    setRightSeekBarVisible,
    setSeekBarMode,
    setProgress,
    setSecondProgress,
    show,
    setMaxProgress,
    setRangeProgress,
    getProgress,
    getLeftProgress,
    getRightProgress,
    setRange,
    setGravity,
    setProgressWidth,
    setProgressHeight,
    setProgressRadius,
    setProgressColor,
    setProgressDefaultColor,
    setProgressDrawable,
    setProgressDefaultDrawable,
    setProgressUrl,
    setProgressDefaultUrl,
    showIndicator,
    showLeftIndicator,
    showRightIndicator,
    setIndicatorShowMode,
    setLeftIndicatorShowMode,
    setRightIndicatorShowMode,
    setIndicatorWidth,
    setLeftIndicatorWidth,
    setRightIndicatorWidth,
    setIndicatorHeight,
    setLeftIndicatorHeight,
    setRightIndicatorHeight,
    setIndicatorTextDecimalFormat,
    setLeftIndicatorTextDecimalFormat,
    setRightIndicatorTextDecimalFormat,
    setIndicatorTextStringFormat,
    setLeftIndicatorTextStringFormat,
    setRightIndicatorTextStringFormat,
    setIndicatorMargin,
    setLeftIndicatorMargin,
    setRightIndicatorMargin,
    setIndicatorPaddingBottom,
    setLeftIndicatorPaddingBottom,
    setRightIndicatorPaddingBottom,
    setIndicatorPaddingTop,
    setLeftIndicatorPaddingTop,
    setRightIndicatorPaddingTop,
    setIndicatorPaddingLeft,
    setLeftIndicatorPaddingLeft,
    setRightIndicatorPaddingLeft,
    setIndicatorPaddingRight,
    setLeftIndicatorPaddingRight,
    setRightIndicatorPaddingRight,
    setIndicatorBackgroundColor,
    setLeftIndicatorBackgroundColor,
    setRightIndicatorBackgroundColor,
    setIndicatorRadius,
    setLeftIndicatorRadius,
    setRightIndicatorRadius,
    setIndicatorTextSize,
    setLeftIndicatorTextSize,
    setRightIndicatorTextSize,
    setIndicatorTextColor,
    setLeftIndicatorTextColor,
    setRightIndicatorTextColor,
    setIndicatorArrowSize,
    setLeftIndicatorArrowSize,
    setRightIndicatorArrowSize,
    setIndicatorDrawable,
    setLeftIndicatorDrawable,
    setRightIndicatorDrawable,
    setIndicatorUrl,
    setLeftIndicatorUrl,
    setRightIndicatorUrl,
    setThumbWidth,
    setLeftThumbWidth,
    setRightThumbWidth,
    setThumbHeight,
    setLeftThumbHeight,
    setRightThumbHeight,
    scaleThumb,
    scaleLeftThumb,
    scaleRightThumb,
    resetThumb,
    resetLeftThumb,
    resetRightThumb,
    setThumbScaleRatio,
    setLeftThumbScaleRatio,
    setRightThumbScaleRatio,
    setThumbActivate,
    setLeftThumbActivate,
    setRightThumbActivate,
    setThumbDrawable,
    setLeftThumbDrawable,
    setRightThumbDrawable,
    setThumbUrl,
    setLeftThumbUrl,
    setRightThumbUrl,
    setThumbInactivatedDrawable,
    setLeftThumbInactivatedDrawable,
    setRightThumbInactivatedDrawable,
    setThumbInactivatedUrl,
    setLeftThumbInactivatedUrl,
    setRightThumbInactivatedUrl,
    setTickMarkMode,
    setTickMarkGravity,
    setTickMarkLayoutGravity,
    setTickMarkTextArray,
    setTickMarkTextMargin,
    setTickMarkTextSize,
    setTickMarkTextColor,
    setTickMarkInRangeTextColor,
    setSteps,
    setStepsWidth,
    setStepsHeight,
    setStepsRadius,
    setStepsColor,
    setStepsAutoBonding,
    setStepsDrawable,
    setStepsUrl,
  }
}
