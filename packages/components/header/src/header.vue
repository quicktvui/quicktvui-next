<template v-slot:header>
  <div :focusable="false" :class="ns.b()">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useNamespace } from '@quicktvui/hooks'
import useBaseView from '../../base/src/useBaseView'
import { headerProps } from './header-props'

export default defineComponent({
  name: 'QtHeader',
  props: headerProps,
  emits: [],
  setup() {
    const viewRef = ref()
    const ns = useNamespace('header')
    return {
      viewRef,
      ...useBaseView(viewRef),
      ns,
    }
  },
})
</script>
