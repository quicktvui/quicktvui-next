<template>
  <!-- 相当于包了一层 qt-app-icon-->
  <qt-app-icon
    ref="viewRef"
    :clipChildren="false"
    :packageName="packageName"
    :class="appIconSampleKls"
  />
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue'
import { useNamespace } from '@quicktvui/hooks'
import useBaseView from '../../base/src/useBaseView'
import { appIconSampleProps } from './app-icon-sample-props'

export default defineComponent({
  name: 'QtAppIconSample',
  props: appIconSampleProps,
  emits: [],
  setup(props, context) {
    const viewRef = ref()
    const ns = useNamespace('app-icon-sample')

    //style
    const appIconSampleKls = computed(() => [
      ns.b(),
      ns.m(props.size), //尺寸
    ])

    return {
      viewRef,
      appIconSampleKls,
      ...useBaseView(viewRef),
    }
  },
})
</script>
