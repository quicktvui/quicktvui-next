<template>
  <switch-view
    ref="viewRef"
    :class="switchKls"
    :activeColor="activeColor"
    :size="size"
    :inactiveColor="inactiveColor"
    :inactiveBorderColor="inactiveBorderColor"
    :sliderColor="sliderColor"
    :disabled="disabled"
    :modelValue="modelValue"
    :borderSize="borderSize"
    :sliderAssetsIcon="sliderAssetsIcon"
    :sliderNetworkIcon="sliderNetworkIcon"
  />
</template>
<script lang="ts">
import { computed, defineComponent, ref } from 'vue'
import { useNamespace } from '@quicktvui/hooks'
import useBaseView from '../../base/src/useBaseView'
import { switchProps } from './switch-props'
import SwitchView from './switch'

export default defineComponent({
  name: 'QtSwitch',
  components: { SwitchView },
  props: switchProps,
  emits: [],
  setup(props, context) {
    const viewRef = ref()
    const ns = useNamespace('switch')
    const switchKls = computed(() => [ns.b(), ns.m(props.size)])

    function setDisabled(isDisabled: boolean) {
      viewRef.value.setDisabled(isDisabled)
    }

    return {
      viewRef,
      switchKls,
      ns,
      setDisabled,
      ...useBaseView(viewRef),
    }
  },
})
</script>
