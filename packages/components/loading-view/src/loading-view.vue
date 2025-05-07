<template>
  <LoadingView ref="viewRef" :class="loadingKls" />
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue'
import { useNamespace } from '@quicktvui/hooks'
import useBaseView from '../../base/src/useBaseView'
import { loadingViewProps } from './loading-view-props'
import LoadingView from './loading-view'

export default defineComponent({
  name: 'QtLoadingView',
  components: { LoadingView },
  props: loadingViewProps,
  emits: [],
  setup(props, context) {
    const viewRef = ref()
    const ns = useNamespace('loading')

    const loadingKls = computed(() => [ns.b(), ns.m(props.size)])

    return {
      viewRef,
      loadingKls,
      ...useBaseView(viewRef),
    }
  },
})
</script>
