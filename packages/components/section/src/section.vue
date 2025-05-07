<template>
  <tv-item
    ref="viewRef"
    :class="ns.b()"
    :clipChildren="false"
    :clipPadding="false"
    flexStyle="${style}"
    singleton
  >
    <slot />
  </tv-item>
</template>

<script lang="ts">
import { ref } from 'vue'
import { defineComponent } from '@vue/runtime-core'
import { useNamespace } from '../../../hooks'
import useBaseView from '../../base/src/useBaseView'
import { vueSectionProps } from './section-props'

export default defineComponent({
  name: 'QtVueSection',
  props: vueSectionProps,
  setup() {
    const ns = useNamespace('section')
    const viewRef = ref()
    return {
      ns,
      viewRef,
      ...useBaseView(viewRef),
    }
  },
})
</script>
