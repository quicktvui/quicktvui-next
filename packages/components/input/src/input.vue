<template>
  <input-view
    ref="viewRef"
    :text="text"
    :size="size"
    :EWidth="EWidth"
    :EHeight="EHeight"
    :strokeWidth="strokeWidth"
    :strokeColor="strokeColor"
    :strokeRadius="strokeRadius"
    :focusStrokeWidth="focusStrokeWidth"
    :focusStrokeColor="focusStrokeColor"
    :textSize="textSize"
    :hintColor="hintColor"
    :hintText="hintText"
    :textColor="textColor"
    :EType="EType"
    :suffixIcon="suffixIcon"
    :disable="disable"
    :mutiline="mutiline"
    :maxlength="maxlength"
    :ident="ident"
    :succFocusStrokeColor="succFocusStrokeColor"
    :succFocusTextColor="succFocusTextColor"
    :errorFocusStrokeColor="errorFocusStrokeColor"
    :errorFocusTextColor="errorFocusTextColor"
    :name="eName"
    :gravity="gravity"
    :leftPadding="leftPadding"
    :rightPadding="rightPadding"
    :class="qtInputKls"
  />
</template>
<script lang="ts">
import { computed, defineComponent, ref } from 'vue'
import { useNamespace } from '@quicktvui/hooks'
import useBaseView from '../../base/src/useBaseView'
import InputView from './input-view'
import { inputViewProps } from './input-view-props'
import type { InputCallback } from './input-view'

export default defineComponent({
  name: 'QtInputView',
  components: { InputView },
  props: inputViewProps,
  emits: [],
  setup(props, context) {
    const eName = ref(props.name)
    const viewRef = ref()
    const ns = useNamespace('qt-input')
    // eslint-disable-next-line no-console
    console.log('===wk===', props, viewRef)

    //style
    const qtInputKls = computed(() => [
      ns.b(),
      ns.m(props.size), //尺寸
    ])

    function getEsInfo(callback: InputCallback) {
      viewRef.value.getEsInfo(callback)
    }
    function setFocusable(focusable: boolean) {
      viewRef.value.setFocusable(focusable)
    }


    return {
      viewRef,
      qtInputKls,
      eName,
      ...useBaseView(viewRef),
      getEsInfo,
      setFocusable,
    }
  },
})
</script>
