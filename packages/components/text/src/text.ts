import { defineComponent, h, ref } from 'vue'
import { Native } from '@extscreen/es3-vue'
import useBaseView from '../../base/src/useBaseView'
import { textProps } from './text-props'
import type { QTTextSpan } from './text-types'

const QtText = defineComponent({
  name: 'QtText',
  props: textProps,
  setup(props, context) {
    const viewRef = ref()

    function setText(text: string): void {
      Native.callUIFunction(viewRef.value, 'setText', [text])
    }

    function setTextSize(size: number): void {
      Native.callUIFunction(viewRef.value, 'setTextSize', [size])
    }

    function setTextColor(color: string): void {
      Native.callUIFunction(viewRef.value, 'setTextColor', [color])
    }

    function textSpan(span: QTTextSpan): void {
      Native.callUIFunction(viewRef.value, 'textSpan', [span])
    }

    const textProps = {
      ref: viewRef,
    }

    if (props.text != undefined) {
      Object.assign(textProps, {
        text: props.text,
      })
    }
    if (props.autoWidth != undefined) {
      Object.assign(textProps, {
        autoWidth: props.autoWidth,
      })
    }
    if (props.autoHeight != undefined) {
      Object.assign(textProps, {
        autoHeight: props.autoHeight,
      })
    }
    if (props.lineSpacing != undefined) {
      Object.assign(textProps, {
        lineSpacing: props.lineSpacing,
      })
    }
    if (props.textHtml != undefined) {
      Object.assign(textProps, {
        textHtml: props.textHtml,
      })
    }
    if (props.typeface != undefined) {
      Object.assign(textProps, {
        typeface: props.typeface,
      })
    }
    if (props.gravity != undefined) {
      Object.assign(textProps, {
        gravity: props.gravity,
      })
    }
    if (props.fontSize != undefined) {
      Object.assign(textProps, {
        fontSize: props.fontSize,
      })
    }
    if (props.paddingRect != undefined) {
      Object.assign(textProps, {
        paddingRect: props.paddingRect,
      })
    }
    if (props.textAlignment != undefined) {
      Object.assign(textProps, {
        textAlignment: props.textAlignment,
      })
    }
    if (props.ellipsizeMode != undefined) {
      Object.assign(textProps, {
        ellipsizeMode: props.ellipsizeMode,
      })
    }
    if (props.lines != undefined) {
      Object.assign(textProps, {
        lines: props.lines,
      })
    }
    if (props.maxLines != undefined) {
      Object.assign(textProps, {
        maxLines: props.maxLines,
      })
    }
    if (props.textColor != undefined) {
      Object.assign(textProps, {
        textColor: props.textColor,
      })
    }
    if (props.maxWidth != undefined) {
      Object.assign(textProps, {
        maxWidth: props.maxWidth,
      })
    }
    if (props.textSize != undefined) {
      Object.assign(textProps, {
        textSize: props.textSize,
      })
    }
    if (props.lineHeight != undefined) {
      Object.assign(textProps, {
        lineHeight: props.lineHeight,
      })
    }
    if (props.select != undefined) {
      Object.assign(textProps, {
        select: props.select,
      })
    }
    if (props.gradientBackground != undefined) {
      Object.assign(textProps, {
        gradientBackground: props.gradientBackground,
      })
    }
    if (props.duplicateParentState != undefined) {
      Object.assign(textProps, {
        duplicateParentState: props.duplicateParentState,
      })
    }
    const render = () => {
      return h('TextView', textProps)
    }

    return {
      viewRef,
      ...useBaseView(viewRef),
      render,
      setText,
      setTextSize,
      setTextColor,
      textSpan,
    }
  },
  render() {
    return this.render()
  },
})

export default QtText
