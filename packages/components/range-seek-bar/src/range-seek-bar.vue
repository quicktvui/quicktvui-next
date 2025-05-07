<template>
  <range-seek-bar-view
    ref="viewRef"
    :visible="visible"
    :focusable="focusable"
    :clickable="clickable"
    :leftSeekBarVisible="leftSeekBarVisible"
    :rightSeekBarVisible="rightSeekBarVisible"
    :seekBarMode="seekBarMode"
    :progress="progress"
    :rangeProgress="rangeProgress"
    :range="range"
    :gravity="gravity"
    :progressWidth="progressWidth"
    :progressHeight="progressHeight"
    :progressLeft="progressLeft"
    :progressRight="progressRight"
    :progressTop="progressTop"
    :progressBottom="progressBottom"
    :progressRadius="progressRadius"
    :progressColor="progressColor"
    :progressDefaultColor="progressDefaultColor"
    :progressDrawable="progressDrawable"
    :progressDefaultDrawable="progressDefaultDrawable"
    :progressUrl="progressUrl"
    :progressDefaultUrl="progressDefaultUrl"
    :showIndicator="showIndicator"
    :showLeftIndicator="showLeftIndicator"
    :showRightIndicator="showRightIndicator"
    :indicatorShowMode="indicatorShowMode"
    :leftIndicatorShowMode="leftIndicatorShowMode"
    :rightIndicatorShowMode="rightIndicatorShowMode"
    :indicatorWidth="indicatorWidth"
    :leftIndicatorWidth="leftIndicatorWidth"
    :rightIndicatorWidth="rightIndicatorWidth"
    :indicatorHeight="indicatorHeight"
    :leftIndicatorHeight="leftIndicatorHeight"
    :rightIndicatorHeight="rightIndicatorHeight"
    :indicatorTextDecimalFormat="indicatorTextDecimalFormat"
    :leftIndicatorTextDecimalFormat="leftIndicatorTextDecimalFormat"
    :rightIndicatorTextDecimalFormat="rightIndicatorTextDecimalFormat"
    :indicatorTextStringFormat="indicatorTextStringFormat"
    :leftIndicatorTextStringFormat="leftIndicatorTextStringFormat"
    :rightIndicatorTextStringFormat="rightIndicatorTextStringFormat"
    :indicatorMargin="indicatorMargin"
    :leftIndicatorMargin="leftIndicatorMargin"
    :rightIndicatorMargin="rightIndicatorMargin"
    :indicatorPaddingBottom="indicatorPaddingBottom"
    :leftIndicatorPaddingBottom="leftIndicatorPaddingBottom"
    :rightIndicatorPaddingBottom="rightIndicatorPaddingBottom"
    :indicatorPaddingTop="indicatorPaddingTop"
    :leftIndicatorPaddingTop="leftIndicatorPaddingTop"
    :rightIndicatorPaddingTop="rightIndicatorPaddingTop"
    :indicatorPaddingLeft="indicatorPaddingLeft"
    :leftIndicatorPaddingLeft="leftIndicatorPaddingLeft"
    :rightIndicatorPaddingLeft="rightIndicatorPaddingLeft"
    :indicatorPaddingRight="indicatorPaddingRight"
    :leftIndicatorPaddingRight="leftIndicatorPaddingRight"
    :rightIndicatorPaddingRight="rightIndicatorPaddingRight"
    :indicatorBackgroundColor="indicatorBackgroundColor"
    :leftIndicatorBackgroundColor="leftIndicatorBackgroundColor"
    :rightIndicatorBackgroundColor="rightIndicatorBackgroundColor"
    :indicatorRadius="indicatorRadius"
    :leftIndicatorRadius="leftIndicatorRadius"
    :rightIndicatorRadius="rightIndicatorRadius"
    :indicatorTextSize="indicatorTextSize"
    :leftIndicatorTextSize="leftIndicatorTextSize"
    :rightIndicatorTextSize="rightIndicatorTextSize"
    :indicatorTextColor="indicatorTextColor"
    :leftIndicatorTextColor="leftIndicatorTextColor"
    :rightIndicatorTextColor="rightIndicatorTextColor"
    :indicatorArrowSize="indicatorArrowSize"
    :leftIndicatorArrowSize="leftIndicatorArrowSize"
    :rightIndicatorArrowSize="rightIndicatorArrowSize"
    :indicatorDrawable="indicatorDrawable"
    :leftIndicatorDrawable="leftIndicatorDrawable"
    :rightIndicatorDrawable="rightIndicatorDrawable"
    :indicatorUrl="indicatorUrl"
    :leftIndicatorUrl="leftIndicatorUrl"
    :rightIndicatorUrl="rightIndicatorUrl"
    :thumbWidth="thumbWidth"
    :leftThumbWidth="leftThumbWidth"
    :rightThumbWidth="rightThumbWidth"
    :thumbHeight="thumbHeight"
    :leftThumbHeight="leftThumbHeight"
    :rightThumbHeight="rightThumbHeight"
    :thumbScaleRatio="thumbScaleRatio"
    :leftThumbScaleRatio="leftThumbScaleRatio"
    :rightThumbScaleRatio="rightThumbScaleRatio"
    :thumbActivate="thumbActivate"
    :leftThumbActivate="leftThumbActivate"
    :rightThumbActivate="rightThumbActivate"
    :thumbDrawable="thumbDrawable"
    :leftThumbDrawable="leftThumbDrawable"
    :rightThumbDrawable="rightThumbDrawable"
    :thumbUrl="thumbUrl"
    :leftThumbUrl="leftThumbUrl"
    :rightThumbUrl="rightThumbUrl"
    :thumbInactivatedDrawable="thumbInactivatedDrawable"
    :leftThumbInactivatedDrawable="leftThumbInactivatedDrawable"
    :rightThumbInactivatedDrawable="rightThumbInactivatedDrawable"
    :thumbInactivatedUrl="thumbInactivatedUrl"
    :leftThumbInactivatedUrl="leftThumbInactivatedUrl"
    :rightThumbInactivatedUrl="rightThumbInactivatedUrl"
    :tickMarkMode="tickMarkMode"
    :tickMarkGravity="tickMarkGravity"
    :tickMarkLayoutGravity="tickMarkLayoutGravity"
    :tickMarkTextArray="tickMarkTextArray"
    :tickMarkTextMargin="tickMarkTextMargin"
    :tickMarkTextSize="tickMarkTextSize"
    :tickMarkTextColor="tickMarkTextColor"
    :tickMarkInRangeTextColor="tickMarkInRangeTextColor"
    :steps="steps"
    :stepsWidth="stepsWidth"
    :stepsHeight="stepsHeight"
    :stepsRadius="stepsRadius"
    :stepsColor="stepsColor"
    :stepsAutoBonding="stepsAutoBonding"
    :stepsDrawable="stepsDrawable"
    :stepsUrl="stepsUrl"
    :class="rangeSeekBarKls"
    @onFocusChanged="onFocusChanged"
    @onSeekChanged="onSeekChanged"
  />
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue'
import { useNamespace } from '@quicktvui/hooks'
import useBaseView from '../../base/src/useBaseView'
import { rangeSeekBarProps } from './range-seek-props'
import RangeSeekBarView from './range-seek-bar'
import type { QTGradient } from '../../gradient'

export default defineComponent({
  name: 'QtRangeSeekBar',
  components: { RangeSeekBarView },
  props: rangeSeekBarProps,
  emits: ['onSeekChanged', 'onFocusChanged'],
  setup(props, context) {
    const viewRef = ref()
    const ns = useNamespace('range-seek-bar')

    //style
    const rangeSeekBarKls = computed(() => [ns.b()])

    function onSeekChanged(progress: number) {
      context.emit('onSeekChanged', progress)
    }

    function onFocusChanged(isFocused: boolean) {
      context.emit('onFocusChanged', isFocused)
    }

    function invalidateProgressBar() {
      viewRef.value?.invalidateProgressBar()
    }

    function setFocusable(focusable: boolean) {
      viewRef.value?.setFocusable(focusable)
    }

    function setClickable(clickable: boolean) {
      viewRef.value?.setClickable(clickable)
    }

    function requestLayout() {
      viewRef.value?.requestLayout()
    }

    function invalidate() {
      viewRef.value?.invalidate()
    }

    function setVisible(visible: boolean) {
      viewRef.value?.setVisible(visible)
    }

    function setLeftSeekBarVisible(visible: boolean) {
      viewRef.value?.setLeftSeekBarVisible(visible)
    }

    function setRightSeekBarVisible(visible: boolean) {
      viewRef.value?.setRightSeekBarVisible(visible)
    }

    function setSeekBarMode(mode: number) {
      viewRef.value?.setSeekBarMode(mode)
    }

    function setProgress(progress: number) {
      viewRef.value?.setProgress(progress)
    }

    function setSecondProgress(progress: number) {
      viewRef.value?.setSecondProgress(progress)
    }

    function show(value: boolean) {
      viewRef.value?.show(value)
    }

    function setMaxProgress(progress: number) {
      viewRef.value?.setMaxProgress(progress)
    }

    function setRangeProgress(leftValue: number, rightValue: number) {
      viewRef.value?.setRangeProgress(leftValue, rightValue)
    }

    function getProgress() {
      viewRef.value?.getProgress()
    }

    function getLeftProgress() {
      viewRef.value?.getLeftProgress()
    }

    function getRightProgress() {
      viewRef.value?.getRightProgress()
    }

    function setRange(min: number, max: number, minInterval: number) {
      viewRef.value?.setRange(min, max, minInterval)
    }

    function setGravity(gravity: number) {
      viewRef.value?.setGravity(gravity)
    }

    function setProgressWidth(progressWidth: number) {
      viewRef.value?.setProgressWidth(progressWidth)
    }

    function setProgressHeight(progressHeight: number) {
      viewRef.value?.setProgressHeight(progressHeight)
    }

    function setProgressRadius(progressRadius: number) {
      viewRef.value?.setProgressRadius(progressRadius)
    }

    function setProgressColor(progressColor: number) {
      viewRef.value?.setProgressColor(progressColor)
    }

    function setProgressDefaultColor(defaultProgressColor: number) {
      viewRef.value?.setProgressDefaultColor(defaultProgressColor)
    }

    function setProgressDrawable(progressDrawable: QTGradient) {
      viewRef.value?.setProgressDrawable(progressDrawable)
    }

    function setProgressDefaultDrawable(progressDefaultDrawable: QTGradient) {
      viewRef.value?.setProgressDefaultDrawable(progressDefaultDrawable)
    }

    function setProgressUrl(progressUrl: string) {
      viewRef.value?.setProgressUrl(progressUrl)
    }

    function setProgressDefaultUrl(progressDefaultUrl: string) {
      viewRef.value?.setProgressDefaultUrl(progressDefaultUrl)
    }

    function showProgressBarIndicator(show: boolean) {
      viewRef.value?.showIndicator(show)
    }

    function showProgressBarLeftIndicator(show: boolean) {
      viewRef.value?.showLeftIndicator(show)
    }

    function showProgressBarRightIndicator(show: boolean) {
      viewRef.value?.showRightIndicator(show)
    }

    function setIndicatorShowMode(indicatorShowMode: number) {
      viewRef.value?.setIndicatorShowMode(indicatorShowMode)
    }

    function setLeftIndicatorShowMode(indicatorShowMode: number) {
      viewRef.value?.setLeftIndicatorShowMode(indicatorShowMode)
    }

    function setRightIndicatorShowMode(indicatorShowMode: number) {
      viewRef.value?.setRightIndicatorShowMode(indicatorShowMode)
    }

    function setIndicatorWidth(indicatorWidth: number) {
      viewRef.value?.setIndicatorWidth(indicatorWidth)
    }

    function setLeftIndicatorWidth(indicatorWidth: number) {
      viewRef.value?.setLeftIndicatorWidth(indicatorWidth)
    }

    function setRightIndicatorWidth(indicatorWidth: number) {
      viewRef.value?.setRightIndicatorWidth(indicatorWidth)
    }

    function setIndicatorHeight(indicatorHeight: number) {
      viewRef.value?.setIndicatorHeight(indicatorHeight)
    }

    function setLeftIndicatorHeight(indicatorHeight: number) {
      viewRef.value?.setLeftIndicatorHeight(indicatorHeight)
    }

    function setRightIndicatorHeight(indicatorHeight: number) {
      viewRef.value?.setRightIndicatorHeight(indicatorHeight)
    }

    function setIndicatorTextDecimalFormat(formatPattern: string) {
      viewRef.value?.setIndicatorTextDecimalFormat(formatPattern)
    }

    function setLeftIndicatorTextDecimalFormat(formatPattern: string) {
      viewRef.value?.setLeftIndicatorTextDecimalFormat(formatPattern)
    }

    function setRightIndicatorTextDecimalFormat(formatPattern: string) {
      viewRef.value?.setRightIndicatorTextDecimalFormat(formatPattern)
    }

    function setIndicatorTextStringFormat(formatPattern: string) {
      viewRef.value?.setIndicatorTextStringFormat(formatPattern)
    }

    function setLeftIndicatorTextStringFormat(formatPattern: string) {
      viewRef.value?.setLeftIndicatorTextStringFormat(formatPattern)
    }

    function setRightIndicatorTextStringFormat(formatPattern: string) {
      viewRef.value?.setRightIndicatorTextStringFormat(formatPattern)
    }

    function setIndicatorMargin(indicatorMargin: number) {
      viewRef.value?.setIndicatorMargin(indicatorMargin)
    }

    function setLeftIndicatorMargin(indicatorMargin: number) {
      viewRef.value?.setLeftIndicatorMargin(indicatorMargin)
    }

    function setRightIndicatorMargin(indicatorMargin: number) {
      viewRef.value?.setRightIndicatorMargin(indicatorMargin)
    }

    function setIndicatorPaddingBottom(indicatorPaddingBottom: number) {
      viewRef.value?.setIndicatorPaddingBottom(indicatorPaddingBottom)
    }

    function setLeftIndicatorPaddingBottom(indicatorPaddingBottom: number) {
      viewRef.value?.setLeftIndicatorPaddingBottom(indicatorPaddingBottom)
    }

    function setRightIndicatorPaddingBottom(indicatorPaddingBottom: number) {
      viewRef.value?.setRightIndicatorPaddingBottom(indicatorPaddingBottom)
    }

    function setIndicatorPaddingTop(indicatorPaddingTop: number) {
      viewRef.value?.setIndicatorPaddingTop(indicatorPaddingTop)
    }

    function setLeftIndicatorPaddingTop(indicatorPaddingTop: number) {
      viewRef.value?.setLeftIndicatorPaddingTop(indicatorPaddingTop)
    }

    function setRightIndicatorPaddingTop(indicatorPaddingTop: number) {
      viewRef.value?.setRightIndicatorPaddingTop(indicatorPaddingTop)
    }

    function setIndicatorPaddingLeft(indicatorPaddingLeft: number) {
      viewRef.value?.setIndicatorPaddingLeft(indicatorPaddingLeft)
    }

    function setLeftIndicatorPaddingLeft(indicatorPaddingLeft: number) {
      viewRef.value?.setLeftIndicatorPaddingLeft(indicatorPaddingLeft)
    }

    function setRightIndicatorPaddingLeft(indicatorPaddingLeft: number) {
      viewRef.value?.setRightIndicatorPaddingLeft(indicatorPaddingLeft)
    }

    function setIndicatorPaddingRight(indicatorPaddingRight: number) {
      viewRef.value?.setIndicatorPaddingRight(indicatorPaddingRight)
    }

    function setLeftIndicatorPaddingRight(indicatorPaddingRight: number) {
      viewRef.value?.setLeftIndicatorPaddingRight(indicatorPaddingRight)
    }

    function setRightIndicatorPaddingRight(indicatorPaddingRight: number) {
      viewRef.value?.setRightIndicatorPaddingRight(indicatorPaddingRight)
    }

    function setIndicatorBackgroundColor(indicatorBackgroundColor: number) {
      viewRef.value?.setIndicatorBackgroundColor(indicatorBackgroundColor)
    }

    function setLeftIndicatorBackgroundColor(indicatorBackgroundColor: number) {
      viewRef.value?.setLeftIndicatorBackgroundColor(indicatorBackgroundColor)
    }

    function setRightIndicatorBackgroundColor(
      indicatorBackgroundColor: number
    ) {
      viewRef.value?.setRightIndicatorBackgroundColor(indicatorBackgroundColor)
    }

    function setIndicatorRadius(indicatorRadius: number) {
      viewRef.value?.setIndicatorRadius(indicatorRadius)
    }

    function setLeftIndicatorRadius(indicatorRadius: number) {
      viewRef.value?.setLeftIndicatorRadius(indicatorRadius)
    }

    function setRightIndicatorRadius(indicatorRadius: number) {
      viewRef.value?.setRightIndicatorRadius(indicatorRadius)
    }

    function setIndicatorTextSize(indicatorTextSize: number) {
      viewRef.value?.setIndicatorTextSize(indicatorTextSize)
    }

    function setLeftIndicatorTextSize(indicatorTextSize: number) {
      viewRef.value?.setLeftIndicatorTextSize(indicatorTextSize)
    }

    function setRightIndicatorTextSize(indicatorTextSize: number) {
      viewRef.value?.setRightIndicatorTextSize(indicatorTextSize)
    }

    function setIndicatorTextColor(indicatorTextColor: number) {
      viewRef.value?.setIndicatorTextColor(indicatorTextColor)
    }

    function setLeftIndicatorTextColor(indicatorTextColor: number) {
      viewRef.value?.setLeftIndicatorTextColor(indicatorTextColor)
    }

    function setRightIndicatorTextColor(indicatorTextColor: number) {
      viewRef.value?.setRightIndicatorTextColor(indicatorTextColor)
    }

    function setIndicatorArrowSize(indicatorArrowSize: number) {
      viewRef.value?.setIndicatorArrowSize(indicatorArrowSize)
    }

    function setLeftIndicatorArrowSize(indicatorArrowSize: number) {
      viewRef.value?.setLeftIndicatorArrowSize(indicatorArrowSize)
    }

    function setRightIndicatorArrowSize(indicatorArrowSize: number) {
      viewRef.value?.setRightIndicatorArrowSize(indicatorArrowSize)
    }

    function setIndicatorDrawable(indicatorDrawable: QTGradient) {
      viewRef.value?.setIndicatorDrawable(indicatorDrawable)
    }

    function setLeftIndicatorDrawable(leftIndicatorDrawable: QTGradient) {
      viewRef.value?.setLeftIndicatorDrawable(leftIndicatorDrawable)
    }

    function setRightIndicatorDrawable(rightIndicatorDrawable: QTGradient) {
      viewRef.value?.setRightIndicatorDrawable(rightIndicatorDrawable)
    }

    function setIndicatorUrl(indicatorUrl: string) {
      viewRef.value?.setIndicatorUrl(indicatorUrl)
    }

    function setLeftIndicatorUrl(leftIndicatorUrl: string) {
      viewRef.value?.setLeftIndicatorUrl(leftIndicatorUrl)
    }

    function setRightIndicatorUrl(rightIndicatorUrl: string) {
      viewRef.value?.setRightIndicatorUrl(rightIndicatorUrl)
    }

    function setThumbWidth(thumbWidth: number) {
      viewRef.value?.setThumbWidth(thumbWidth)
    }

    function setLeftThumbWidth(thumbWidth: number) {
      viewRef.value?.setLeftThumbWidth(thumbWidth)
    }

    function setRightThumbWidth(thumbWidth: number) {
      viewRef.value?.setRightThumbWidth(thumbWidth)
    }

    function setThumbHeight(thumbHeight: number) {
      viewRef.value?.setThumbHeight(thumbHeight)
    }

    function setLeftThumbHeight(thumbHeight: number) {
      viewRef.value?.setLeftThumbHeight(thumbHeight)
    }

    function setRightThumbHeight(thumbHeight: number) {
      viewRef.value?.setRightThumbHeight(thumbHeight)
    }

    function scaleThumb() {
      viewRef.value?.scaleThumb()
    }

    function scaleLeftThumb() {
      viewRef.value?.scaleLeftThumb()
    }

    function scaleRightThumb() {
      viewRef.value?.scaleRightThumb()
    }

    function resetThumb() {
      viewRef.value?.resetThumb()
    }

    function resetLeftThumb() {
      viewRef.value?.resetLeftThumb()
    }

    function resetRightThumb() {
      viewRef.value?.resetRightThumb()
    }

    function setThumbScaleRatio(thumbScaleRatio: number) {
      viewRef.value?.setThumbScaleRatio(thumbScaleRatio)
    }

    function setLeftThumbScaleRatio(thumbScaleRatio: number) {
      viewRef.value?.setLeftThumbScaleRatio(thumbScaleRatio)
    }

    function setRightThumbScaleRatio(thumbScaleRatio: number) {
      viewRef.value?.setRightThumbScaleRatio(thumbScaleRatio)
    }

    function setThumbActivate(activate: boolean) {
      viewRef.value?.setThumbActivate(activate)
    }

    function setLeftThumbActivate(activate: boolean) {
      viewRef.value?.setLeftThumbActivate(activate)
    }

    function setRightThumbActivate(activate: boolean) {
      viewRef.value?.setRightThumbActivate(activate)
    }

    function setThumbDrawable(drawable: QTGradient) {
      viewRef.value?.setThumbDrawable(drawable)
    }

    function setLeftThumbDrawable(drawable: QTGradient) {
      viewRef.value?.setLeftThumbDrawable(drawable)
    }

    function setRightThumbDrawable(drawable: QTGradient) {
      viewRef.value?.setRightThumbDrawable(drawable)
    }

    function setThumbUrl(url: string) {
      viewRef.value?.setThumbUrl(url)
    }

    function setLeftThumbUrl(url: string) {
      viewRef.value?.setLeftThumbUrl(url)
    }

    function setRightThumbUrl(url: string) {
      viewRef.value?.setRightThumbUrl(url)
    }

    function setThumbInactivatedDrawable(drawable: QTGradient) {
      viewRef.value?.setThumbInactivatedDrawable(drawable)
    }

    function setLeftThumbInactivatedDrawable(drawable: QTGradient) {
      viewRef.value?.setLeftThumbInactivatedDrawable(drawable)
    }

    function setRightThumbInactivatedDrawable(drawable: QTGradient) {
      viewRef.value?.setRightThumbInactivatedDrawable(drawable)
    }

    function setThumbInactivatedUrl(url: string) {
      viewRef.value?.setThumbInactivatedUrl(url)
    }

    function setLeftThumbInactivatedUrl(url: string) {
      viewRef.value?.setLeftThumbInactivatedUrl(url)
    }

    function setRightThumbInactivatedUrl(url: string) {
      viewRef.value?.setRightThumbInactivatedUrl(url)
    }

    function setTickMarkMode(tickMarkMode: number) {
      viewRef.value?.setTickMarkMode(tickMarkMode)
    }

    function setTickMarkGravity(tickMarkGravity: number) {
      viewRef.value?.setTickMarkGravity(tickMarkGravity)
    }

    function setTickMarkLayoutGravity(tickMarkLayoutGravity: number) {
      viewRef.value?.setTickMarkLayoutGravity(tickMarkLayoutGravity)
    }

    function setTickMarkTextArray(tickMarkTextArray: Array<string>) {
      viewRef.value?.setTickMarkTextArray(tickMarkTextArray)
    }

    function setTickMarkTextMargin(tickMarkTextMargin: number) {
      viewRef.value?.setTickMarkTextMargin(tickMarkTextMargin)
    }

    function setTickMarkTextSize(tickMarkTextSize: number) {
      viewRef.value?.setTickMarkTextSize(tickMarkTextSize)
    }

    function setTickMarkTextColor(tickMarkTextColor: number) {
      viewRef.value?.setTickMarkTextColor(tickMarkTextColor)
    }

    function setTickMarkInRangeTextColor(tickMarkInRangeTextColor: number) {
      viewRef.value?.setTickMarkInRangeTextColor(tickMarkInRangeTextColor)
    }

    function setSteps(steps: number) {
      viewRef.value?.setSteps(steps)
    }

    function setStepsWidth(stepsWidth: number) {
      viewRef.value?.setStepsWidth(stepsWidth)
    }

    function setStepsHeight(stepsHeight: number) {
      viewRef.value?.setStepsHeight(stepsHeight)
    }

    function setStepsRadius(stepsRadius: number) {
      viewRef.value?.setStepsRadius(stepsRadius)
    }

    function setStepsColor(stepsColor: number) {
      viewRef.value?.setStepsColor(stepsColor)
    }

    function setStepsAutoBonding(stepsAutoBonding: boolean) {
      viewRef.value?.setStepsAutoBonding(stepsAutoBonding)
    }

    function setStepsDrawable(drawableArray: Array<QTGradient>) {
      viewRef.value?.setStepsDrawable(drawableArray)
    }

    function setStepsUrl(urlArray: Array<string>) {
      viewRef.value?.setStepsUrl(urlArray)
    }

    return {
      viewRef,
      rangeSeekBarKls,
      ...useBaseView(viewRef),
      //
      onSeekChanged,
      onFocusChanged,
      //
      invalidateProgressBar,
      setFocusable,
      setClickable,
      requestLayout,
      invalidate,
      setVisible,
      setLeftSeekBarVisible,
      setRightSeekBarVisible,
      setSeekBarMode,
      setProgress,
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
      showProgressBarIndicator,
      showProgressBarLeftIndicator,
      showProgressBarRightIndicator,
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
      setSecondProgress,
      show,
      setMaxProgress,
    }
  },
})
</script>
