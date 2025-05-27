<template>
  <div id="root">
    <es-router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core'
import { useESRouterManager } from '@extscreen/es3-core'
import { useESRouter } from '@extscreen/es3-router'
import type { ESAppParams } from '@extscreen/es3-core'
import type { ESApp } from '@extscreen/es3-vue'

export default defineComponent({
  name: 'App',
  emits: [],
  setup() {
    const router = useESRouter()

    //控制是否自动跳转到首页
    const routerManager = useESRouterManager()
    routerManager.setAutoRedirectEnabled(false)

    function onESCreate(app: ESApp, params: ESAppParams) {
      //
    }

    function onESCreated(success: boolean) {
      //初始化完毕，进行跳转
      router.push({
        name: 'index',
        params: {},
      })
    }

    return {
      onESCreate,
      onESCreated,
    }
  },
})
</script>

<style scoped>
#root {
  width: 1920px;
  height: 1080px;
  flex: 1;
  display: flex;
  flex-direction: column;
}
</style>
