import { defineComponent, h, ref } from 'vue'
import useBaseView from '../../base/src/useBaseView'
import { radioButtonProps } from './radio-button-props'

const RadioButtonView = defineComponent({
  name: 'RadioButtonView',
  props: radioButtonProps,
  setup(props, context) {
    const viewRef = ref()

    const render = () => {
      const children = context.slots.default && context.slots.default()
      return h(
        'RadioButtonView',
        {
          ref: viewRef,
          ...(props.size !== undefined && { size: props.size }),
          ...(props.disabled !== undefined && { disabled: props.disabled }),
          ...(props.textColor !== undefined && { textColor: props.textColor }),
          ...(props.fillColor !== undefined && { fillColor: props.fillColor }),
          ...(props.disabledColor !== undefined && {
            disabledColor: props.disabledColor,
          }),
          ...(props.defaultColor !== undefined && {
            defaultColor: props.defaultColor,
          }),
          ...(props.selectedColor !== undefined && {
            selectedColor: props.selectedColor,
          }),
          ...(props.focusCheckColor !== undefined && {
            focusCheckColor: props.focusCheckColor,
          }),
          ...(props.defaultDrawable !== undefined && {
            defaultDrawable: props.defaultDrawable,
          }),
          ...(props.selectDrawable !== undefined && {
            selectDrawable: props.selectDrawable,
          }),
          ...(props.focusDrawable !== undefined && {
            focusDrawable: props.focusDrawable,
          }),
          ...(props.disabledDrawable !== undefined && {
            disabledDrawable: props.disabledDrawable,
          }),
          ...(props.drawableSize !== undefined && {
            drawableSize: props.drawableSize,
          }),
          ...(props.drawableLocation !== undefined && {
            drawableLocation: props.drawableLocation,
          }),
          ...(props.padding !== undefined && {
            padding: props.padding,
          }),
          ...(props.drawablePadding !== undefined && {
            drawablePadding: props.drawablePadding,
          }),
          ...(props.checked !== undefined && { checked: props.checked }),
          ...(props.borderRadius !== undefined && {
            borderRadius: props.borderRadius,
          }),
          ...(props.enableFocusBorder !== undefined && {
            enableFocusBorder: props.enableFocusBorder,
          }),
          ...(props.enableFocusBackground !== undefined && {
            enableFocusBackground: props.enableFocusBackground,
          }),
        },
        children
      )
    }

    return {
      viewRef,
      ...useBaseView(viewRef),
      render,
    }
  },
  render() {
    return this.render()
  },
})

export default RadioButtonView
