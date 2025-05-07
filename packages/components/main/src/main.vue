<template v-slot:main>
  <div :focusable="false" :class="ns.b()">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useNamespace } from '@quicktvui/hooks'
import useBaseView from '../../base/src/useBaseView'
import { mainProps } from './main-props'

export default defineComponent({
  name: 'QtMain',
  props: mainProps,
  emits: [],
  setup() {
    const viewRef = ref()
    const ns = useNamespace('main')
    return {
      viewRef,
      ...useBaseView(viewRef),
      ns,
    }
  },
})
</script>
