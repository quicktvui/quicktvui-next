import { defineComponent, h, ref } from 'vue'
import { Native } from '@extscreen/es3-vue'
import useBaseView from '../../base/src/useBaseView'
import { inputViewProps } from './input-view-props'
import type { QTViewEvent } from '../../view'
import type { QTInputTextChangeEvent } from './input-view-types'
export type InputCallback = (res: any) => void

const InputView = defineComponent({
  name: 'InputView',
  props: inputViewProps,
  emits: ['onFocusChanged', 'onTextChange'],
  setup(props, context) {
    const viewRef = ref()

    function getEsInfo(callback: InputCallback) {
      Native.callUIFunction(viewRef.value, 'getEsInfo', [], (res: any) => {
        //
        callback(res)
      })
    }

    function setFocusable(focusable: boolean) {
      Native.callUIFunction(viewRef.value, 'setFocusable', [focusable], () => {
        //
      })
    }


    const render = () => {
      return h('EsAppInputViewComponent', {
        ref: viewRef,
        size: props.size,
        EWidth: props.EWidth,
        EHeight: props.EHeight,
        strokeWidth: props.strokeWidth,
        strokeColor: props.strokeColor,
        strokeRadius: props.strokeRadius,
        focusStrokeWidth: props.focusStrokeWidth,
        focusStrokeColor: props.focusStrokeColor,
        textSize: props.textSize,
        hintColor: props.hintColor,
        hintText: props.hintText,
        textColor: props.textColor,
        EType: props.EType,
        text: props.text,
        suffixIcon: props.suffixIcon,
        disable: props.disable,
        mutiline: props.mutiline,
        maxlength: props.maxlength,
        ident: props.ident,
        succFocusStrokeColor: props.succFocusStrokeColor,
        succFocusTextColor: props.succFocusTextColor,
        errorFocusStrokeColor: props.errorFocusStrokeColor,
        errorFocusTextColor: props.errorFocusTextColor,
        name: props.name,
        leftPadding: props.leftPadding,
        rightPadding: props.rightPadding,
        gravity: props.gravity,
        onFocus: (evt: QTViewEvent) => {
          context.emit('onFocusChanged', evt)
        },
        onTextChange: (evt: QTInputTextChangeEvent) => {
          context.emit('onTextChange', evt)
        },
      })
    }

    return {
      viewRef,
      ...useBaseView(viewRef),
      render,
      getEsInfo,
      setFocusable,
    }
  },
  render() {
    return this.render()
  },
})

export default InputView
