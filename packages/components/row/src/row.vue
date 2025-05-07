<template>
  <component :is="tag" ref="viewRef" :class="rowKls" :style="style">
    <slot />
  </component>
</template>

<script lang="ts">
import { computed, defineComponent, provide, ref } from 'vue'
import { useNamespace } from '@quicktvui/hooks'
import useBaseView from '../../base/src/useBaseView'
import { rowContextKey } from './constants'
import { rowProps } from './row-props'
import type { CSSProperties } from 'vue'

export default defineComponent({
  name: 'QtRow',
  props: rowProps,
  emits: [],
  setup(props, context) {
    const ns = useNamespace('row')
    const gutter = computed(() => props.gutter)

    provide(rowContextKey, {
      gutter,
    })

    const style = computed(() => {
      const styles: CSSProperties = {}
      if (!props.gutter) {
        return styles
      }

      styles.marginRight = styles.marginLeft = `-${props.gutter / 2}px`
      return styles
    })

    const rowKls = computed(() => [
      ns.b(),
      ns.is(`justify-${props.justify}`, props.justify !== 'start'),
      ns.is(`align-${props.align}`, !!props.align),
    ])

    const viewRef = ref()

    return {
      viewRef,
      ...useBaseView(viewRef),
      ns,
      gutter,
      style,
      rowKls,
    }
  },
})
</script>
