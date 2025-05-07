<template>
  <div ref="viewRef" :clipChildren="false">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core'

export default defineComponent({
  name: 'QtRow',
  setup() {
    const sayHello = () => {
      //
    }
    return {
      sayHello,
    }
  },
})
</script>

<!--<template>-->
<!--  <LoadingViewComponent />-->
<!--</template>-->

<!--<script lang="ts" setup="props, context">-->
<!--import { h } from 'vue'-->
<!--import { useNamespace } from '@quicktvui/hooks'-->
<!--import { loadingProps } from './loading'-->

<!--defineOptions({-->
<!--  name: 'QtLoading',-->
<!--})-->
<!--const props = defineProps(loadingProps)-->

<!--const ns = useNamespace('loading')-->

<!--const LoadingViewComponent = () =>-->
<!--  h('LoadingViewComponent', {-->
<!--    color: props.color,-->
<!--  })-->
<!--</script>-->
