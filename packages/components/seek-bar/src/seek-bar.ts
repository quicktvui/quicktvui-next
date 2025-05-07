import { defineComponent, h, ref } from 'vue'
import { Native } from '@extscreen/es3-vue'
import useBaseView from '../../base/src/useBaseView'
import { seekBarProps } from './seek-bar-props'
import type { QTGradient } from '../../gradient'
import type { QTViewEvent } from '../../view'
import type { QTSeekBarEvent } from './seek-bar-types'

const SeekBar = defineComponent({
  name: 'SeekBarView',
  props: seekBarProps,
  emits: ['onSeekStart', 'onSeekStop', 'onFocusChanged', 'onSeekChanged'],
  setup(props, context) {
    const viewRef = ref()

    const QT_SEEK_BAR_MODE_PROGRESS = 1 //
    const QT_SEEK_BAR_MODE_SEEK = 2 //

    const isSeekBarFocused = ref(false)
    const seekBarMode = ref(1)
    const seekCount = ref(0)
    const progressCallBackTime = ref(0)

    const maxProgress = ref(0)
    const progress = ref(0)

    //--------------------------------------------------------------------
    function setProgress(p: number) {
      if (seekBarMode.value === QT_SEEK_BAR_MODE_PROGRESS) {
        progress.value = p
        Native.callUIFunction(viewRef.value, 'setProgress', [p], () => {
          //
        })
      }
    }

    function setMaxProgress(value: number) {
      if (seekBarMode.value === QT_SEEK_BAR_MODE_PROGRESS) {
        maxProgress.value = value
        Native.callUIFunction(viewRef.value, 'setMaxProgress', [value], () => {
          //
        })
      }
    }

    function resetSeekbar() {
      seekBarMode.value = QT_SEEK_BAR_MODE_PROGRESS
      setMaxProgress(0)
      setProgress(0)
    }

    function startSeek(forward: boolean) {
      if (isSeekBarFocused.value) {
        seekBarMode.value = QT_SEEK_BAR_MODE_SEEK
        context.emit('onSeekStart', progress.value)
        seekCount.value += 1
        let base = 1
        if (seekCount.value > 20) {
          base = 2
        } else if (seekCount.value > 50) {
          base = 4
        } else if (seekCount.value > 100) {
          base = 6
        }
        const duration = maxProgress.value
        const seekProgress = Math.floor(duration * 0.01 * base)
        progress.value =
          progress.value + (forward ? seekProgress : -seekProgress)

        if (progress.value > duration) {
          progress.value = duration
        } else if (progress.value < 0) {
          progress.value = 0
        }

        Native.callUIFunction(
          viewRef.value,
          'setProgress',
          [progress.value],
          () => {
            //
          }
        )

        if (props.onProgressChanged) {
          const now = Date.now()
          if (now - progressCallBackTime.value > props.emitEventDelay) {
            props.onProgressChanged(progress.value)
            progressCallBackTime.value = now
          }
        }
      }
    }

    function stopSeek() {
      seekCount.value = 0
      if (seekBarMode.value == QT_SEEK_BAR_MODE_SEEK) {
        context.emit('onSeekStop', progress.value)
      }
      seekBarMode.value = QT_SEEK_BAR_MODE_PROGRESS
    }

    function isFocused() {
      return isSeekBarFocused.value
    }

    //--------------------------------------------------------------------
    function invalidateSeekBar() {
      Native.callUIFunction(viewRef.value, 'invalidateSeekBar', [], () => {
        //
      })
    }

    function setFocusable(focusable: boolean) {
      Native.callUIFunction(viewRef.value, 'setFocusable', [focusable], () => {
        //
      })
    }

    function setClickable(clickable: boolean) {
      Native.callUIFunction(viewRef.value, 'setClickable', [clickable], () => {
        //
      })
    }

    function requestLayout() {
      Native.callUIFunction(viewRef.value, 'requestLayout', [], () => {
        //
      })
    }

    function invalidate() {
      Native.callUIFunction(viewRef.value, 'invalidate', [], () => {
        //
      })
    }

    function setVisible(visible: boolean) {
      Native.callUIFunction(viewRef.value, 'setVisible', [visible], () => {
        //
      })
    }

    function setLeftSeekBarVisible(visible: boolean) {
      Native.callUIFunction(
        viewRef.value,
        'setLeftSeekBarVisible',
        [visible],
        () => {
          //
        }
      )
    }

    function setRightSeekBarVisible(visible: boolean) {
      Native.callUIFunction(
        viewRef.value,
        'setRightSeekBarVisible',
        [visible],
        () => {
          //
        }
      )
    }

    function setSeekBarMode(mode: number) {
      Native.callUIFunction(viewRef.value, 'setSeekBarMode', [mode], () => {
        //
      })
    }

    function setRangeProgress(leftValue: number, rightValue: number) {
      Native.callUIFunction(
        viewRef.value,
        'setProgress',
        [leftValue, rightValue],
        () => {
          //
        }
      )
    }

    function getProgress() {
      Native.callUIFunction(viewRef.value, 'getProgress', [], () => {
        //
      })
    }

    function getLeftProgress() {
      Native.callUIFunction(viewRef.value, 'getLeftProgress', [], () => {
        //
      })
    }

    function getRightProgress() {
      Native.callUIFunction(viewRef.value, 'getRightProgress', [], () => {
        //
      })
    }

    function setRange(min: number, max: number, minInterval: number) {
      Native.callUIFunction(
        viewRef.value,
        'setRange',
        [min, max, minInterval],
        () => {
          //
        }
      )
    }

    function setGravity(gravity: number) {
      Native.callUIFunction(viewRef.value, 'setGravity', [gravity], () => {
        //
      })
    }

    function setProgressWidth(progressWidth: number) {
      Native.callUIFunction(
        viewRef.value,
        'setProgressWidth',
        [progressWidth],
        () => {
          //
        }
      )
    }

    function setProgressHeight(progressHeight: number) {
      Native.callUIFunction(
        viewRef.value,
        'setProgressHeight',
        [progressHeight],
        () => {
          //
        }
      )
    }

    function setProgressRadius(progressRadius: number) {
      Native.callUIFunction(
        viewRef.value,
        'setProgressRadius',
        [progressRadius],
        () => {
          //
        }
      )
    }

    function setProgressColor(progressColor: number) {
      Native.callUIFunction(
        viewRef.value,
        'setProgressColor',
        [progressColor],
        () => {
          //
        }
      )
    }

    function setProgressDefaultColor(defaultProgressColor: number) {
      Native.callUIFunction(
        viewRef.value,
        'setProgressDefaultColor',
        [defaultProgressColor],
        () => {
          //
        }
      )
    }

    function setProgressDrawable(progressDrawable: QTGradient) {
      Native.callUIFunction(
        viewRef.value,
        'setProgressDrawable',
        [progressDrawable],
        () => {
          //
        }
      )
    }

    function setProgressDefaultDrawable(progressDefaultDrawable: QTGradient) {
      Native.callUIFunction(
        viewRef.value,
        'setProgressDefaultDrawable',
        [progressDefaultDrawable],
        () => {
          //
        }
      )
    }

    function setProgressUrl(progressUrl: string) {
      Native.callUIFunction(
        viewRef.value,
        'setProgressUrl',
        [progressUrl],
        () => {
          //
        }
      )
    }

    function setProgressDefaultUrl(progressDefaultUrl: string) {
      Native.callUIFunction(
        viewRef.value,
        'setProgressDefaultUrl',
        [progressDefaultUrl],
        () => {
          //
        }
      )
    }

    function showIndicator(showIndicator: boolean) {
      Native.callUIFunction(
        viewRef.value,
        'showIndicator',
        [showIndicator],
        () => {
          //
        }
      )
    }

    function showLeftIndicator(showLeftIndicator: boolean) {
      Native.callUIFunction(
        viewRef.value,
        'showLeftIndicator',
        [showLeftIndicator],
        () => {
          //
        }
      )
    }

    function showRightIndicator(showRightIndicator: boolean) {
      Native.callUIFunction(
        viewRef.value,
        'showRightIndicator',
        [showRightIndicator],
        () => {
          //
        }
      )
    }

    function setIndicatorShowMode(indicatorShowMode: number) {
      Native.callUIFunction(
        viewRef.value,
        'setIndicatorShowMode',
        [indicatorShowMode],
        () => {
          //
        }
      )
    }

    function setLeftIndicatorShowMode(indicatorShowMode: number) {
      Native.callUIFunction(
        viewRef.value,
        'setLeftIndicatorShowMode',
        [indicatorShowMode],
        () => {
          //
        }
      )
    }

    function setRightIndicatorShowMode(indicatorShowMode: number) {
      Native.callUIFunction(
        viewRef.value,
        'setRightIndicatorShowMode',
        [indicatorShowMode],
        () => {
          //
        }
      )
    }

    function setIndicatorWidth(indicatorWidth: number) {
      Native.callUIFunction(
        viewRef.value,
        'setIndicatorWidth',
        [indicatorWidth],
        () => {
          //
        }
      )
    }

    function setLeftIndicatorWidth(indicatorWidth: number) {
      Native.callUIFunction(
        viewRef.value,
        'setLeftIndicatorWidth',
        [indicatorWidth],
        () => {
          //
        }
      )
    }

    function setRightIndicatorWidth(indicatorWidth: number) {
      Native.callUIFunction(
        viewRef.value,
        'setRightIndicatorWidth',
        [indicatorWidth],
        () => {
          //
        }
      )
    }

    function setIndicatorHeight(indicatorHeight: number) {
      Native.callUIFunction(
        viewRef.value,
        'setIndicatorHeight',
        [indicatorHeight],
        () => {
          //
        }
      )
    }

    function setLeftIndicatorHeight(indicatorHeight: number) {
      Native.callUIFunction(
        viewRef.value,
        'setLeftIndicatorHeight',
        [indicatorHeight],
        () => {
          //
        }
      )
    }

    function setRightIndicatorHeight(indicatorHeight: number) {
      Native.callUIFunction(
        viewRef.value,
        'setRightIndicatorHeight',
        [indicatorHeight],
        () => {
          //
        }
      )
    }

    function setIndicatorTextDecimalFormat(formatPattern: string) {
      Native.callUIFunction(
        viewRef.value,
        'setIndicatorTextDecimalFormat',
        [formatPattern],
        () => {
          //
        }
      )
    }

    function setLeftIndicatorTextDecimalFormat(formatPattern: string) {
      Native.callUIFunction(
        viewRef.value,
        'setLeftIndicatorTextDecimalFormat',
        [formatPattern],
        () => {
          //
        }
      )
    }

    function setRightIndicatorTextDecimalFormat(formatPattern: string) {
      Native.callUIFunction(
        viewRef.value,
        'setRightIndicatorTextDecimalFormat',
        [formatPattern],
        () => {
          //
        }
      )
    }

    function setIndicatorTextStringFormat(formatPattern: string) {
      Native.callUIFunction(
        viewRef.value,
        'setIndicatorTextStringFormat',
        [formatPattern],
        () => {
          //
        }
      )
    }

    function setLeftIndicatorTextStringFormat(formatPattern: string) {
      Native.callUIFunction(
        viewRef.value,
        'setLeftIndicatorTextStringFormat',
        [formatPattern],
        () => {
          //
        }
      )
    }

    function setRightIndicatorTextStringFormat(formatPattern: string) {
      Native.callUIFunction(
        viewRef.value,
        'setRightIndicatorTextStringFormat',
        [formatPattern],
        () => {
          //
        }
      )
    }

    function setIndicatorMargin(indicatorMargin: number) {
      Native.callUIFunction(
        viewRef.value,
        'setIndicatorMargin',
        [indicatorMargin],
        () => {
          //
        }
      )
    }

    function setLeftIndicatorMargin(indicatorMargin: number) {
      Native.callUIFunction(
        viewRef.value,
        'setLeftIndicatorMargin',
        [indicatorMargin],
        () => {
          //
        }
      )
    }

    function setRightIndicatorMargin(indicatorMargin: number) {
      Native.callUIFunction(
        viewRef.value,
        'setRightIndicatorMargin',
        [indicatorMargin],
        () => {
          //
        }
      )
    }

    function setIndicatorPaddingBottom(indicatorPaddingBottom: number) {
      Native.callUIFunction(
        viewRef.value,
        'setIndicatorPaddingBottom',
        [indicatorPaddingBottom],
        () => {
          //
        }
      )
    }

    function setLeftIndicatorPaddingBottom(indicatorPaddingBottom: number) {
      Native.callUIFunction(
        viewRef.value,
        'setLeftIndicatorPaddingBottom',
        [indicatorPaddingBottom],
        () => {
          //
        }
      )
    }

    function setRightIndicatorPaddingBottom(indicatorPaddingBottom: number) {
      Native.callUIFunction(
        viewRef.value,
        'setRightIndicatorPaddingBottom',
        [indicatorPaddingBottom],
        () => {
          //
        }
      )
    }

    function setIndicatorPaddingTop(indicatorPaddingTop: number) {
      Native.callUIFunction(
        viewRef.value,
        'setIndicatorPaddingTop',
        [indicatorPaddingTop],
        () => {
          //
        }
      )
    }

    function setLeftIndicatorPaddingTop(indicatorPaddingTop: number) {
      Native.callUIFunction(
        viewRef.value,
        'setLeftIndicatorPaddingTop',
        [indicatorPaddingTop],
        () => {
          //
        }
      )
    }

    function setRightIndicatorPaddingTop(indicatorPaddingTop: number) {
      Native.callUIFunction(
        viewRef.value,
        'setRightIndicatorPaddingTop',
        [indicatorPaddingTop],
        () => {
          //
        }
      )
    }

    function setIndicatorPaddingLeft(indicatorPaddingLeft: number) {
      Native.callUIFunction(
        viewRef.value,
        'setIndicatorPaddingLeft',
        [indicatorPaddingLeft],
        () => {
          //
        }
      )
    }

    function setLeftIndicatorPaddingLeft(indicatorPaddingLeft: number) {
      Native.callUIFunction(
        viewRef.value,
        'setLeftIndicatorPaddingLeft',
        [indicatorPaddingLeft],
        () => {
          //
        }
      )
    }

    function setRightIndicatorPaddingLeft(indicatorPaddingLeft: number) {
      Native.callUIFunction(
        viewRef.value,
        'setRightIndicatorPaddingLeft',
        [indicatorPaddingLeft],
        () => {
          //
        }
      )
    }

    function setIndicatorPaddingRight(indicatorPaddingRight: number) {
      Native.callUIFunction(
        viewRef.value,
        'setIndicatorPaddingRight',
        [indicatorPaddingRight],
        () => {
          //
        }
      )
    }

    function setLeftIndicatorPaddingRight(indicatorPaddingRight: number) {
      Native.callUIFunction(
        viewRef.value,
        'setLeftIndicatorPaddingRight',
        [indicatorPaddingRight],
        () => {
          //
        }
      )
    }

    function setRightIndicatorPaddingRight(indicatorPaddingRight: number) {
      Native.callUIFunction(
        viewRef.value,
        'setRightIndicatorPaddingRight',
        [indicatorPaddingRight],
        () => {
          //
        }
      )
    }

    function setIndicatorBackgroundColor(indicatorBackgroundColor: number) {
      Native.callUIFunction(
        viewRef.value,
        'setIndicatorBackgroundColor',
        [indicatorBackgroundColor],
        () => {
          //
        }
      )
    }

    function setLeftIndicatorBackgroundColor(indicatorBackgroundColor: number) {
      Native.callUIFunction(
        viewRef.value,
        'setLeftIndicatorBackgroundColor',
        [indicatorBackgroundColor],
        () => {
          //
        }
      )
    }

    function setRightIndicatorBackgroundColor(
      indicatorBackgroundColor: number
    ) {
      Native.callUIFunction(
        viewRef.value,
        'setRightIndicatorBackgroundColor',
        [indicatorBackgroundColor],
        () => {
          //
        }
      )
    }

    function setIndicatorRadius(indicatorRadius: number) {
      Native.callUIFunction(
        viewRef.value,
        'setIndicatorRadius',
        [indicatorRadius],
        () => {
          //
        }
      )
    }

    function setLeftIndicatorRadius(indicatorRadius: number) {
      Native.callUIFunction(
        viewRef.value,
        'setLeftIndicatorRadius',
        [indicatorRadius],
        () => {
          //
        }
      )
    }

    function setRightIndicatorRadius(indicatorRadius: number) {
      Native.callUIFunction(
        viewRef.value,
        'setRightIndicatorRadius',
        [indicatorRadius],
        () => {
          //
        }
      )
    }

    function setIndicatorTextSize(indicatorTextSize: number) {
      Native.callUIFunction(
        viewRef.value,
        'setIndicatorTextSize',
        [indicatorTextSize],
        () => {
          //
        }
      )
    }

    function setLeftIndicatorTextSize(indicatorTextSize: number) {
      Native.callUIFunction(
        viewRef.value,
        'setLeftIndicatorTextSize',
        [indicatorTextSize],
        () => {
          //
        }
      )
    }

    function setRightIndicatorTextSize(indicatorTextSize: number) {
      Native.callUIFunction(
        viewRef.value,
        'setRightIndicatorTextSize',
        [indicatorTextSize],
        () => {
          //
        }
      )
    }

    function setIndicatorTextColor(indicatorTextColor: number) {
      Native.callUIFunction(
        viewRef.value,
        'setIndicatorTextColor',
        [indicatorTextColor],
        () => {
          //
        }
      )
    }

    function setLeftIndicatorTextColor(indicatorTextColor: number) {
      Native.callUIFunction(
        viewRef.value,
        'setLeftIndicatorTextColor',
        [indicatorTextColor],
        () => {
          //
        }
      )
    }

    function setRightIndicatorTextColor(indicatorTextColor: number) {
      Native.callUIFunction(
        viewRef.value,
        'setRightIndicatorTextColor',
        [indicatorTextColor],
        () => {
          //
        }
      )
    }

    function setIndicatorArrowSize(indicatorArrowSize: number) {
      Native.callUIFunction(
        viewRef.value,
        'setIndicatorArrowSize',
        [indicatorArrowSize],
        () => {
          //
        }
      )
    }

    function setLeftIndicatorArrowSize(indicatorArrowSize: number) {
      Native.callUIFunction(
        viewRef.value,
        'setLeftIndicatorArrowSize',
        [indicatorArrowSize],
        () => {
          //
        }
      )
    }

    function setRightIndicatorArrowSize(indicatorArrowSize: number) {
      Native.callUIFunction(
        viewRef.value,
        'setRightIndicatorArrowSize',
        [indicatorArrowSize],
        () => {
          //
        }
      )
    }

    function setIndicatorDrawable(indicatorDrawable: QTGradient) {
      Native.callUIFunction(
        viewRef.value,
        'setIndicatorDrawable',
        [indicatorDrawable],
        () => {
          //
        }
      )
    }

    function setLeftIndicatorDrawable(leftIndicatorDrawable: QTGradient) {
      Native.callUIFunction(
        viewRef.value,
        'setLeftIndicatorDrawable',
        [leftIndicatorDrawable],
        () => {
          //
        }
      )
    }

    function setRightIndicatorDrawable(rightIndicatorDrawable: QTGradient) {
      Native.callUIFunction(
        viewRef.value,
        'setRightIndicatorDrawable',
        [rightIndicatorDrawable],
        () => {
          //
        }
      )
    }

    function setIndicatorUrl(indicatorUrl: string) {
      Native.callUIFunction(
        viewRef.value,
        'setIndicatorUrl',
        [indicatorUrl],
        () => {
          //
        }
      )
    }

    function setLeftIndicatorUrl(leftIndicatorUrl: string) {
      Native.callUIFunction(
        viewRef.value,
        'setLeftIndicatorUrl',
        [leftIndicatorUrl],
        () => {
          //
        }
      )
    }

    function setRightIndicatorUrl(rightIndicatorUrl: string) {
      Native.callUIFunction(
        viewRef.value,
        'setRightIndicatorUrl',
        [rightIndicatorUrl],
        () => {
          //
        }
      )
    }

    function setThumbWidth(thumbWidth: number) {
      Native.callUIFunction(
        viewRef.value,
        'setThumbWidth',
        [thumbWidth],
        () => {
          //
        }
      )
    }

    function setLeftThumbWidth(thumbWidth: number) {
      Native.callUIFunction(
        viewRef.value,
        'setLeftThumbWidth',
        [thumbWidth],
        () => {
          //
        }
      )
    }

    function setRightThumbWidth(thumbWidth: number) {
      Native.callUIFunction(
        viewRef.value,
        'setRightThumbWidth',
        [thumbWidth],
        () => {
          //
        }
      )
    }

    function setThumbHeight(thumbHeight: number) {
      Native.callUIFunction(
        viewRef.value,
        'setThumbHeight',
        [thumbHeight],
        () => {
          //
        }
      )
    }

    function setLeftThumbHeight(thumbHeight: number) {
      Native.callUIFunction(
        viewRef.value,
        'setLeftThumbHeight',
        [thumbHeight],
        () => {
          //
        }
      )
    }

    function setRightThumbHeight(thumbHeight: number) {
      Native.callUIFunction(
        viewRef.value,
        'setRightThumbHeight',
        [thumbHeight],
        () => {
          //
        }
      )
    }

    function scaleThumb() {
      Native.callUIFunction(viewRef.value, 'scaleThumb', [], () => {
        //
      })
    }

    function scaleLeftThumb() {
      Native.callUIFunction(viewRef.value, 'scaleLeftThumb', [], () => {
        //
      })
    }

    function scaleRightThumb() {
      Native.callUIFunction(viewRef.value, 'scaleLeftThumb', [], () => {
        //
      })
    }

    function resetThumb() {
      Native.callUIFunction(viewRef.value, 'resetThumb', [], () => {
        //
      })
    }

    function resetLeftThumb() {
      Native.callUIFunction(viewRef.value, 'resetLeftThumb', [], () => {
        //
      })
    }

    function resetRightThumb() {
      Native.callUIFunction(viewRef.value, 'resetRightThumb', [], () => {
        //
      })
    }

    function setThumbScaleRatio(thumbScaleRatio: number) {
      Native.callUIFunction(
        viewRef.value,
        'setThumbScaleRatio',
        [thumbScaleRatio],
        () => {
          //
        }
      )
    }

    function setLeftThumbScaleRatio(thumbScaleRatio: number) {
      Native.callUIFunction(
        viewRef.value,
        'setLeftThumbScaleRatio',
        [thumbScaleRatio],
        () => {
          //
        }
      )
    }

    function setRightThumbScaleRatio(thumbScaleRatio: number) {
      Native.callUIFunction(
        viewRef.value,
        'setRightThumbScaleRatio',
        [thumbScaleRatio],
        () => {
          //
        }
      )
    }

    function setThumbActivate(activate: boolean) {
      Native.callUIFunction(
        viewRef.value,
        'setThumbActivate',
        [activate],
        () => {
          //
        }
      )
    }

    function setLeftThumbActivate(activate: boolean) {
      Native.callUIFunction(
        viewRef.value,
        'setLeftThumbActivate',
        [activate],
        () => {
          //
        }
      )
    }

    function setRightThumbActivate(activate: boolean) {
      Native.callUIFunction(
        viewRef.value,
        'setRightThumbActivate',
        [activate],
        () => {
          //
        }
      )
    }

    function setThumbDrawable(drawable: QTGradient) {
      Native.callUIFunction(
        viewRef.value,
        'setThumbDrawable',
        [drawable],
        () => {
          //
        }
      )
    }

    function setLeftThumbDrawable(drawable: QTGradient) {
      Native.callUIFunction(
        viewRef.value,
        'setLeftThumbDrawable',
        [drawable],
        () => {
          //
        }
      )
    }

    function setRightThumbDrawable(drawable: QTGradient) {
      Native.callUIFunction(
        viewRef.value,
        'setRightThumbDrawable',
        [drawable],
        () => {
          //
        }
      )
    }

    function setThumbUrl(url: string) {
      Native.callUIFunction(viewRef.value, 'setThumbUrl', [url], () => {
        //
      })
    }

    function setLeftThumbUrl(url: string) {
      Native.callUIFunction(viewRef.value, 'setLeftThumbUrl', [url], () => {
        //
      })
    }

    function setRightThumbUrl(url: string) {
      Native.callUIFunction(viewRef.value, 'setRightThumbUrl', [url], () => {
        //
      })
    }

    function setThumbInactivatedDrawable(drawable: QTGradient) {
      Native.callUIFunction(
        viewRef.value,
        'setThumbInactivatedDrawable',
        [drawable],
        () => {
          //
        }
      )
    }

    function setLeftThumbInactivatedDrawable(drawable: QTGradient) {
      Native.callUIFunction(
        viewRef.value,
        'setLeftThumbInactivatedDrawable',
        [drawable],
        () => {
          //
        }
      )
    }

    function setRightThumbInactivatedDrawable(drawable: QTGradient) {
      Native.callUIFunction(
        viewRef.value,
        'setRightThumbInactivatedDrawable',
        [drawable],
        () => {
          //
        }
      )
    }

    function setThumbInactivatedUrl(url: string) {
      Native.callUIFunction(
        viewRef.value,
        'setThumbInactivatedUrl',
        [url],
        () => {
          //
        }
      )
    }

    function setLeftThumbInactivatedUrl(url: string) {
      Native.callUIFunction(
        viewRef.value,
        'setLeftThumbInactivatedUrl',
        [url],
        () => {
          //
        }
      )
    }

    function setRightThumbInactivatedUrl(url: string) {
      Native.callUIFunction(
        viewRef.value,
        'setRightThumbInactivatedUrl',
        [url],
        () => {
          //
        }
      )
    }

    function setTickMarkMode(tickMarkMode: number) {
      Native.callUIFunction(
        viewRef.value,
        'setTickMarkMode',
        [tickMarkMode],
        () => {
          //
        }
      )
    }

    function setTickMarkGravity(tickMarkGravity: number) {
      Native.callUIFunction(
        viewRef.value,
        'setTickMarkGravity',
        [tickMarkGravity],
        () => {
          //
        }
      )
    }

    function setTickMarkLayoutGravity(tickMarkLayoutGravity: number) {
      Native.callUIFunction(
        viewRef.value,
        'setTickMarkLayoutGravity',
        [tickMarkLayoutGravity],
        () => {
          //
        }
      )
    }

    function setTickMarkTextArray(tickMarkTextArray: Array<string>) {
      Native.callUIFunction(
        viewRef.value,
        'setTickMarkTextArray',
        [tickMarkTextArray],
        () => {
          //
        }
      )
    }

    function setTickMarkTextMargin(tickMarkTextMargin: number) {
      Native.callUIFunction(
        viewRef.value,
        'setTickMarkTextMargin',
        [tickMarkTextMargin],
        () => {
          //
        }
      )
    }

    function setTickMarkTextSize(tickMarkTextSize: number) {
      Native.callUIFunction(
        viewRef.value,
        'setTickMarkTextSize',
        [tickMarkTextSize],
        () => {
          //
        }
      )
    }

    function setTickMarkTextColor(tickMarkTextColor: number) {
      Native.callUIFunction(
        viewRef.value,
        'setTickMarkTextColor',
        [tickMarkTextColor],
        () => {
          //
        }
      )
    }

    function setTickMarkInRangeTextColor(tickMarkInRangeTextColor: number) {
      Native.callUIFunction(
        viewRef.value,
        'setTickMarkInRangeTextColor',
        [tickMarkInRangeTextColor],
        () => {
          //
        }
      )
    }

    function setSteps(steps: number) {
      Native.callUIFunction(viewRef.value, 'setSteps', [steps], () => {
        //
      })
    }

    function setStepsWidth(stepsWidth: number) {
      Native.callUIFunction(
        viewRef.value,
        'setStepsWidth',
        [stepsWidth],
        () => {
          //
        }
      )
    }

    function setStepsHeight(stepsHeight: number) {
      Native.callUIFunction(
        viewRef.value,
        'setStepsHeight',
        [stepsHeight],
        () => {
          //
        }
      )
    }

    function setStepsRadius(stepsRadius: number) {
      Native.callUIFunction(
        viewRef.value,
        'setStepsRadius',
        [stepsRadius],
        () => {
          //
        }
      )
    }

    function setStepsColor(stepsColor: number) {
      Native.callUIFunction(
        viewRef.value,
        'setStepsColor',
        [stepsColor],
        () => {
          //
        }
      )
    }

    function setStepsAutoBonding(stepsAutoBonding: boolean) {
      Native.callUIFunction(
        viewRef.value,
        'setStepsAutoBonding',
        [stepsAutoBonding],
        () => {
          //
        }
      )
    }

    function setStepsDrawable(drawableArray: Array<QTGradient>) {
      Native.callUIFunction(
        viewRef.value,
        'setStepsDrawable',
        [drawableArray],
        () => {
          //
        }
      )
    }

    function setStepsUrl(urlArray: Array<string>) {
      Native.callUIFunction(viewRef.value, 'setStepsUrl', [urlArray], () => {
        //
      })
    }

    function setSecondProgress(progress: number) {
      Native.callUIFunction(
        viewRef.value,
        'setSecondProgress',
        [progress],
        () => {
          //
        }
      )
    }

    function show(value: boolean) {
      Native.callUIFunction(viewRef.value, 'show', [value], () => {
        //
      })
    }

    const render = () => {
      return h('TVSeekBarViewComponent', {
        ref: viewRef,
        ...(props.visible !== undefined && { visible: props.visible }),
        ...(props.focusable !== undefined && { focusable: props.focusable }),
        ...(props.clickable !== undefined && { clickable: props.clickable }),
        ...(props.leftSeekBarVisible !== undefined && {
          leftSeekBarVisible: props.leftSeekBarVisible,
        }),
        ...(props.rightSeekBarVisible !== undefined && {
          rightSeekBarVisible: props.rightSeekBarVisible,
        }),
        ...(props.seekBarMode !== undefined && {
          seekBarMode: props.seekBarMode,
        }),
        ...(props.progress !== undefined && { progress: props.progress }),
        ...(props.rangeProgress !== undefined && {
          rangeProgress: props.rangeProgress,
        }),
        ...(props.range !== undefined && { range: props.range }),
        ...(props.gravity !== undefined && { gravity: props.gravity }),
        ...(props.progressWidth !== undefined && {
          progressWidth: props.progressWidth,
        }),
        ...(props.progressHeight !== undefined && {
          progressHeight: props.progressHeight,
        }),
        ...(props.progressLeft !== undefined && {
          progressLeft: props.progressLeft,
        }),
        ...(props.progressRight !== undefined && {
          progressRight: props.progressRight,
        }),
        ...(props.progressTop !== undefined && {
          progressTop: props.progressTop,
        }),
        ...(props.progressBottom !== undefined && {
          progressBottom: props.progressBottom,
        }),
        ...(props.progressRadius !== undefined && {
          progressRadius: props.progressRadius,
        }),
        ...(props.progressColor !== undefined && {
          progressColor: props.progressColor,
        }),
        ...(props.progressDefaultColor !== undefined && {
          progressDefaultColor: props.progressDefaultColor,
        }),
        ...(props.progressDrawable !== undefined && {
          progressDrawable: props.progressDrawable,
        }),
        ...(props.progressDefaultDrawable !== undefined && {
          progressDefaultDrawable: props.progressDefaultDrawable,
        }),
        ...(props.progressUrl !== undefined && {
          progressUrl: props.progressUrl,
        }),
        ...(props.progressDefaultUrl !== undefined && {
          progressDefaultUrl: props.progressDefaultUrl,
        }),
        ...(props.showIndicator !== undefined && {
          showIndicator: props.showIndicator,
        }),
        ...(props.showLeftIndicator !== undefined && {
          showLeftIndicator: props.showLeftIndicator,
        }),
        ...(props.showRightIndicator !== undefined && {
          showRightIndicator: props.showRightIndicator,
        }),
        ...(props.indicatorShowMode !== undefined && {
          indicatorShowMode: props.indicatorShowMode,
        }),
        ...(props.leftIndicatorShowMode !== undefined && {
          leftIndicatorShowMode: props.leftIndicatorShowMode,
        }),
        ...(props.rightIndicatorShowMode !== undefined && {
          rightIndicatorShowMode: props.rightIndicatorShowMode,
        }),
        ...(props.indicatorWidth !== undefined && {
          indicatorWidth: props.indicatorWidth,
        }),
        ...(props.leftIndicatorWidth !== undefined && {
          leftIndicatorWidth: props.leftIndicatorWidth,
        }),
        ...(props.rightIndicatorWidth !== undefined && {
          rightIndicatorWidth: props.rightIndicatorWidth,
        }),
        ...(props.indicatorHeight !== undefined && {
          indicatorHeight: props.indicatorHeight,
        }),
        ...(props.leftIndicatorHeight !== undefined && {
          leftIndicatorHeight: props.leftIndicatorHeight,
        }),
        ...(props.rightIndicatorHeight !== undefined && {
          rightIndicatorHeight: props.rightIndicatorHeight,
        }),
        ...(props.indicatorTextDecimalFormat !== undefined && {
          indicatorTextDecimalFormat: props.indicatorTextDecimalFormat,
        }),
        ...(props.leftIndicatorTextDecimalFormat !== undefined && {
          leftIndicatorTextDecimalFormat: props.leftIndicatorTextDecimalFormat,
        }),
        ...(props.rightIndicatorTextDecimalFormat !== undefined && {
          rightIndicatorTextDecimalFormat:
            props.rightIndicatorTextDecimalFormat,
        }),
        ...(props.indicatorTextStringFormat !== undefined && {
          indicatorTextStringFormat: props.indicatorTextStringFormat,
        }),
        ...(props.leftIndicatorTextStringFormat !== undefined && {
          leftIndicatorTextStringFormat: props.leftIndicatorTextStringFormat,
        }),
        ...(props.rightIndicatorTextStringFormat !== undefined && {
          rightIndicatorTextStringFormat: props.rightIndicatorTextStringFormat,
        }),
        ...(props.indicatorMargin !== undefined && {
          indicatorMargin: props.indicatorMargin,
        }),
        ...(props.leftIndicatorMargin !== undefined && {
          leftIndicatorMargin: props.leftIndicatorMargin,
        }),
        ...(props.rightIndicatorMargin !== undefined && {
          rightIndicatorMargin: props.rightIndicatorMargin,
        }),
        ...(props.indicatorPaddingBottom !== undefined && {
          indicatorPaddingBottom: props.indicatorPaddingBottom,
        }),
        ...(props.leftIndicatorPaddingBottom !== undefined && {
          leftIndicatorPaddingBottom: props.leftIndicatorPaddingBottom,
        }),
        ...(props.rightIndicatorPaddingBottom !== undefined && {
          rightIndicatorPaddingBottom: props.rightIndicatorPaddingBottom,
        }),
        ...(props.indicatorPaddingTop !== undefined && {
          indicatorPaddingTop: props.indicatorPaddingTop,
        }),
        ...(props.leftIndicatorPaddingTop !== undefined && {
          leftIndicatorPaddingTop: props.leftIndicatorPaddingTop,
        }),
        ...(props.rightIndicatorPaddingTop !== undefined && {
          rightIndicatorPaddingTop: props.rightIndicatorPaddingTop,
        }),
        ...(props.indicatorPaddingLeft !== undefined && {
          indicatorPaddingLeft: props.indicatorPaddingLeft,
        }),
        ...(props.leftIndicatorPaddingLeft !== undefined && {
          leftIndicatorPaddingLeft: props.leftIndicatorPaddingLeft,
        }),
        ...(props.rightIndicatorPaddingLeft !== undefined && {
          rightIndicatorPaddingLeft: props.rightIndicatorPaddingLeft,
        }),
        ...(props.indicatorPaddingRight !== undefined && {
          indicatorPaddingRight: props.indicatorPaddingRight,
        }),
        ...(props.leftIndicatorPaddingRight !== undefined && {
          leftIndicatorPaddingRight: props.leftIndicatorPaddingRight,
        }),
        ...(props.rightIndicatorPaddingRight !== undefined && {
          rightIndicatorPaddingRight: props.rightIndicatorPaddingRight,
        }),
        ...(props.indicatorBackgroundColor !== undefined && {
          indicatorBackgroundColor: props.indicatorBackgroundColor,
        }),
        ...(props.leftIndicatorBackgroundColor !== undefined && {
          leftIndicatorBackgroundColor: props.leftIndicatorBackgroundColor,
        }),
        ...(props.rightIndicatorBackgroundColor !== undefined && {
          rightIndicatorBackgroundColor: props.rightIndicatorBackgroundColor,
        }),
        ...(props.indicatorRadius !== undefined && {
          indicatorRadius: props.indicatorRadius,
        }),
        ...(props.leftIndicatorRadius !== undefined && {
          leftIndicatorRadius: props.leftIndicatorRadius,
        }),
        ...(props.rightIndicatorRadius !== undefined && {
          rightIndicatorRadius: props.rightIndicatorRadius,
        }),
        ...(props.indicatorTextSize !== undefined && {
          indicatorTextSize: props.indicatorTextSize,
        }),
        ...(props.leftIndicatorTextSize !== undefined && {
          leftIndicatorTextSize: props.leftIndicatorTextSize,
        }),
        ...(props.rightIndicatorTextSize !== undefined && {
          rightIndicatorTextSize: props.rightIndicatorTextSize,
        }),
        ...(props.indicatorTextColor !== undefined && {
          indicatorTextColor: props.indicatorTextColor,
        }),
        ...(props.leftIndicatorTextColor !== undefined && {
          leftIndicatorTextColor: props.leftIndicatorTextColor,
        }),
        ...(props.rightIndicatorTextColor !== undefined && {
          rightIndicatorTextColor: props.rightIndicatorTextColor,
        }),
        ...(props.indicatorArrowSize !== undefined && {
          indicatorArrowSize: props.indicatorArrowSize,
        }),
        ...(props.leftIndicatorArrowSize !== undefined && {
          leftIndicatorArrowSize: props.leftIndicatorArrowSize,
        }),
        ...(props.rightIndicatorArrowSize !== undefined && {
          rightIndicatorArrowSize: props.rightIndicatorArrowSize,
        }),
        ...(props.indicatorDrawable !== undefined && {
          indicatorDrawable: props.indicatorDrawable,
        }),
        ...(props.leftIndicatorDrawable !== undefined && {
          leftIndicatorDrawable: props.leftIndicatorDrawable,
        }),
        ...(props.rightIndicatorDrawable !== undefined && {
          rightIndicatorDrawable: props.rightIndicatorDrawable,
        }),
        ...(props.indicatorUrl !== undefined && {
          indicatorUrl: props.indicatorUrl,
        }),
        ...(props.leftIndicatorUrl !== undefined && {
          leftIndicatorUrl: props.leftIndicatorUrl,
        }),
        ...(props.rightIndicatorUrl !== undefined && {
          rightIndicatorUrl: props.rightIndicatorUrl,
        }),
        ...(props.thumbWidth !== undefined && { thumbWidth: props.thumbWidth }),
        ...(props.leftThumbWidth !== undefined && {
          leftThumbWidth: props.leftThumbWidth,
        }),
        ...(props.rightThumbWidth !== undefined && {
          rightThumbWidth: props.rightThumbWidth,
        }),
        ...(props.thumbHeight !== undefined && {
          thumbHeight: props.thumbHeight,
        }),
        ...(props.leftThumbHeight !== undefined && {
          leftThumbHeight: props.leftThumbHeight,
        }),
        ...(props.rightThumbHeight !== undefined && {
          rightThumbHeight: props.rightThumbHeight,
        }),
        ...(props.thumbScaleRatio !== undefined && {
          thumbScaleRatio: props.thumbScaleRatio,
        }),
        ...(props.leftThumbScaleRatio !== undefined && {
          leftThumbScaleRatio: props.leftThumbScaleRatio,
        }),
        ...(props.rightThumbScaleRatio !== undefined && {
          rightThumbScaleRatio: props.rightThumbScaleRatio,
        }),
        ...(props.thumbActivate !== undefined && {
          thumbActivate: props.thumbActivate,
        }),
        ...(props.leftThumbActivate !== undefined && {
          leftThumbActivate: props.leftThumbActivate,
        }),
        ...(props.rightThumbActivate !== undefined && {
          rightThumbActivate: props.rightThumbActivate,
        }),
        ...(props.thumbDrawable !== undefined && {
          thumbDrawable: props.thumbDrawable,
        }),
        ...(props.leftThumbDrawable !== undefined && {
          leftThumbDrawable: props.leftThumbDrawable,
        }),
        ...(props.rightThumbDrawable !== undefined && {
          rightThumbDrawable: props.rightThumbDrawable,
        }),
        ...(props.thumbUrl !== undefined && { thumbUrl: props.thumbUrl }),
        ...(props.leftThumbUrl !== undefined && {
          leftThumbUrl: props.leftThumbUrl,
        }),
        ...(props.rightThumbUrl !== undefined && {
          rightThumbUrl: props.rightThumbUrl,
        }),
        ...(props.thumbInactivatedDrawable !== undefined && {
          thumbInactivatedDrawable: props.thumbInactivatedDrawable,
        }),
        ...(props.leftThumbInactivatedDrawable !== undefined && {
          leftThumbInactivatedDrawable: props.leftThumbInactivatedDrawable,
        }),
        ...(props.rightThumbInactivatedDrawable !== undefined && {
          rightThumbInactivatedDrawable: props.rightThumbInactivatedDrawable,
        }),
        ...(props.thumbInactivatedUrl !== undefined && {
          thumbInactivatedUrl: props.thumbInactivatedUrl,
        }),
        ...(props.leftThumbInactivatedUrl !== undefined && {
          leftThumbInactivatedUrl: props.leftThumbInactivatedUrl,
        }),
        ...(props.rightThumbInactivatedUrl !== undefined && {
          rightThumbInactivatedUrl: props.rightThumbInactivatedUrl,
        }),
        ...(props.tickMarkMode !== undefined && {
          tickMarkMode: props.tickMarkMode,
        }),
        ...(props.tickMarkGravity !== undefined && {
          tickMarkGravity: props.tickMarkGravity,
        }),
        ...(props.tickMarkLayoutGravity !== undefined && {
          tickMarkLayoutGravity: props.tickMarkLayoutGravity,
        }),
        ...(props.tickMarkTextArray !== undefined && {
          tickMarkTextArray: props.tickMarkTextArray,
        }),
        ...(props.tickMarkTextMargin !== undefined && {
          tickMarkTextMargin: props.tickMarkTextMargin,
        }),
        ...(props.tickMarkTextSize !== undefined && {
          tickMarkTextSize: props.tickMarkTextSize,
        }),
        ...(props.tickMarkTextColor !== undefined && {
          tickMarkTextColor: props.tickMarkTextColor,
        }),
        ...(props.tickMarkInRangeTextColor !== undefined && {
          tickMarkInRangeTextColor: props.tickMarkInRangeTextColor,
        }),
        ...(props.steps !== undefined && { steps: props.steps }),
        ...(props.stepsWidth !== undefined && { stepsWidth: props.stepsWidth }),
        ...(props.stepsHeight !== undefined && {
          stepsHeight: props.stepsHeight,
        }),
        ...(props.stepsRadius !== undefined && {
          stepsRadius: props.stepsRadius,
        }),
        ...(props.stepsColor !== undefined && { stepsColor: props.stepsColor }),
        ...(props.stepsAutoBonding !== undefined && {
          stepsAutoBonding: props.stepsAutoBonding,
        }),
        ...(props.stepsDrawable !== undefined && {
          stepsDrawable: props.stepsDrawable,
        }),
        ...(props.stepsUrl !== undefined && { stepsUrl: props.stepsUrl }),
        onFocus: (evt: QTViewEvent) => {
          isSeekBarFocused.value = evt.isFocused
          context.emit('onFocusChanged', evt.isFocused)
        },
        onSeekBarChange: (evt: QTSeekBarEvent) => {
          context.emit('onSeekChanged', evt.progress)
        },
      })
    }

    return {
      viewRef,
      ...useBaseView(viewRef),
      render,
      isSeekBarFocused,
      seekBarMode,
      seekCount,
      progressCallBackTime,
      maxProgress,
      progress,
      startSeek,
      stopSeek,
      isFocused,
      resetSeekbar,
      invalidateSeekBar,
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
      setSecondProgress,
      show,
      setMaxProgress,
    }
  },
  render() {
    return this.render()
  },
})

export default SeekBar
