import { defineComponent, h, ref } from 'vue'
import { Native } from '@extscreen/es3-vue'
import useBaseView from '../../base/src/useBaseView'
import { switchProps } from './switch-props'
import type { QTSwitchChangeEvent } from './switch-types'

const SwitchView = defineComponent({
  name: 'SwitchView',
  props: switchProps,
  emits: ['onSwitchChange'],
  setup(props, context) {
    const viewRef = ref()
    function setDisabled(isDisabled: boolean): void {
      Native.callUIFunction(viewRef.value, 'setDisabled', [isDisabled])
    }
    const render = () => {
      const children = context.slots.default && context.slots.default()
      return h(
        'EsSwitchComponent',
        {
          ref: viewRef,
          ...(props.size !== undefined && { size: props.size }),
          ...(props.activeColor !== undefined && {
            activeColor: props.activeColor,
          }),
          ...(props.inactiveColor !== undefined && {
            inactiveColor: props.inactiveColor,
          }),
          ...(props.inactiveBorderColor !== undefined && {
            inactiveBorderColor: props.inactiveBorderColor,
          }),
          ...(props.sliderColor !== undefined && {
            sliderColor: props.sliderColor,
          }),
          ...(props.disabled !== undefined && { disabled: props.disabled }),
          ...(props.modelValue !== undefined && {
            modelValue: props.modelValue,
          }),
          ...(props.borderSize !== undefined && {
            borderSize: props.borderSize,
          }),
          ...(props.sliderAssetsIcon !== undefined && {
            sliderAssetsIcon: props.sliderAssetsIcon,
          }),
          ...(props.sliderNetworkIcon !== undefined && {
            sliderNetworkIcon: props.sliderNetworkIcon,
          }),
          onSwitchChange: (evt: QTSwitchChangeEvent) => {
            context.emit('onSwitchChange', evt)
          },
        },
        children
      )
    }

    return {
      viewRef,
      ...useBaseView(viewRef),
      render,
      setDisabled,
    }
  },
  render() {
    return this.render()
  },
})

export default SwitchView
