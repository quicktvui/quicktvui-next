<template>
  <div class="es-sdk-root-css">
    <s-title-view class="es-sdk-content-title-css" :text="$options.name" />
    <div class="es-sdk-content-divider-css" />
    <div class="es-sdk-content-row-css">
      <s-text-view text="按返回键查看效果" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core'
import { useESToast } from '@extscreen/es3-core'
import { useESRouter } from '@extscreen/es3-router'
import { onBackPressed } from '@extscreen/es3-vue'

export default defineComponent({
  name: '返回键',
  emits: [],
  setup() {
    const toast = useESToast()
    const router = useESRouter()

    onBackPressed(() => {
      toast.showToast('按了返回键')
      router.back()
    })
  },
})
</script>
