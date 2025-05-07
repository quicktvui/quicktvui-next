<template>
  <check-box-view
    ref="viewRef"
    :class="checkboxKls"
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
import { checkBoxProps } from './check-box-props'
import CheckBoxView from './check-box'

export default defineComponent({
  name: 'QtCheckbox',
  components: { CheckBoxView },
  props: checkBoxProps,
  emits: [],
  setup(props, context) {
    const viewRef = ref()
    const ns = useNamespace('checkbox')

    function selectAll(): void {
      viewRef.value.selectAll()
    }

    function cancelAll(): void {
      viewRef.value.cancelAll()
    }

    //style
    const checkboxKls = computed(() => [ns.b(), ns.m(props.size)])

    return {
      viewRef,
      checkboxKls,
      ...useBaseView(viewRef),
      selectAll,
      cancelAll,
    }
  },
})
</script>
