<template v-slot:footer>
  <div :focusable="false" :class="ns.b()">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useNamespace } from '@quicktvui/hooks'
import useBaseView from '../../base/src/useBaseView'
import { footerProps } from './footer-props'

export default defineComponent({
  name: 'QtFooter',
  props: footerProps,
  emits: [],
  setup() {
    const viewRef = ref()
    const ns = useNamespace('footer')
    return {
      viewRef,
      ...useBaseView(viewRef),
      ns,
    }
  },
})
</script>
