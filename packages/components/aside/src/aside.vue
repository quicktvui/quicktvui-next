<template v-slot:aside>
  <div :focusable="false" :class="ns.b()">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useNamespace } from '@quicktvui/hooks'
import useBaseView from '../../base/src/useBaseView'
import { asideProps } from './aside-props'

export default defineComponent({
  name: 'QtAside',
  props: asideProps,
  emits: [],
  setup() {
    const viewRef = ref()
    const ns = useNamespace('aside')
    return {
      viewRef,
      ...useBaseView(viewRef),
      ns,
    }
  },
})
</script>
