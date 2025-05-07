<template>
  <div :focusable="false" :class="[ns.b(), ns.is('vertical', isVertical)]">
    <slot v-for="(item, keys) in $slots" :name="keys" />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref, useSlots } from 'vue'
import { useNamespace } from '@quicktvui/hooks'
import useBaseView from '../../base/src/useBaseView'
import { containerProps } from './container-props'
import type { Component, VNode } from 'vue'

export default defineComponent({
  name: 'QtContainer',
  props: containerProps,
  emits: [],
  setup(props, context) {
    const viewRef = ref()
    const slots = useSlots()
    const ns = useNamespace('container')

    const isVertical = computed(() => {
      if (props.direction === 'vertical') {
        return true
      } else if (props.direction === 'horizontal') {
        return false
      }
      if (slots && slots.default) {
        const vNodes: VNode[] = slots.default()
        return vNodes.some((vNode) => {
          const tag = (vNode.type as Component).name
          return tag === 'QtHeader' || tag === 'QtFooter'
        })
      } else {
        return false
      }
    })

    return {
      viewRef,
      ...useBaseView(viewRef),
      ns,
      isVertical,
    }
  },
})
</script>
