<template>
  <radio-button-view
    ref="viewRef"
    :class="radiobuttonKls"
    :size="size"
    :value="value"
    :disabled="disabled"
    :textColor="textColor"
    :fillColor="fillColor"
    :disabledColor="disabledColor"
    :defaultColor="defaultColor"
    :selectedColor="selectedColor"
    :focusCheckColor="focusCheckColor"
    :disabledDrawable="disabledDrawable"
    :defaultDrawable="defaultDrawable"
    :selectDrawable="selectDrawable"
    :focusDrawable="focusDrawable"
    :drawableSize="drawableSize"
    :drawableLocation="drawableLocation"
    :padding="padding"
    :drawablePadding="drawablePadding"
    :checked="checked"
    :borderRadius="borderRadius"
    :enableFocusBorder="enableFocusBorder"
    :enableFocusBackground="enableFocusBackground"
  />
</template>
<script lang="ts">
import { computed, defineComponent, ref } from 'vue'
import { useNamespace } from '@quicktvui/hooks'
import useBaseView from '../../base/src/useBaseView'
import { radioButtonProps } from './radio-button-props'
import RadioButtonView from './radio-button'

export default defineComponent({
  name: 'QtRadioButton',
  components: { RadioButtonView },
  props: radioButtonProps,
  emits: [],
  setup(props, context) {
    const viewRef = ref()
    const ns = useNamespace('radiobutton')
    //style
    const radiobuttonKls = computed(() => [ns.b(), ns.m(props.size)])

    return {
      viewRef,
      radiobuttonKls,
      ...useBaseView(viewRef),
    }
  },
})
</script>
