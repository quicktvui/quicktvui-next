<template>
  <component :is="tag" ref="viewRef" :class="colKls">
    <slot />
  </component>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue'
import { useNamespace } from '@quicktvui/hooks'
import useBaseView from '../../base/src/useBaseView'
import { columnProps } from './column-props'

export default defineComponent({
  name: 'QtColumn',
  props: columnProps,
  emits: [],
  setup(props, context) {
    const viewRef = ref()
    const ns = useNamespace('column')

    const colKls = computed(() => {
      const classes: string[] = []
      return [ns.b(), classes]
    })

    return {
      viewRef,
      ...useBaseView(viewRef),
      ns,
      colKls,
    }
  },
})
</script>
