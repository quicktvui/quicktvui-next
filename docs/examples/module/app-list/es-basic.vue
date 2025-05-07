<template>
  <div class="es-sdk-root-css">
    <s-title-view class="es-sdk-content-title-css" :text="$options.name" />
    <div class="es-sdk-content-divider-css" />
    <div class="es-sdk-content-row-css">
      <s-text-view
        text="----------------------系统应用----------------------"
      />
      <s-text-view
        v-for="item in systemAppList"
        :key="item"
        :text="JSON.stringify(item)"
      />
      <s-text-view
        text="----------------------用户应用----------------------"
      />
      <s-text-view
        v-for="item in userAppList"
        :key="item"
        :text="JSON.stringify(item)"
      />
    </div>
  </div>
</template>
<script lang="ts">
import { ref } from 'vue'
import { defineComponent } from '@vue/runtime-core'
import { useESAppList } from '@extscreen/es3-core'

export default defineComponent({
  name: '应用列表模块',
  setup() {
    const appList = useESAppList()

    const systemAppList = ref([])
    const userAppList = ref([])

    const onESCreate = () => {
      appList.getAppList().then((appList) => {
        systemAppList.value = appList.system ?? []
        userAppList.value = appList.user ?? []
      })
    }

    return {
      onESCreate,
      systemAppList,
      userAppList,
    }
  },
})
</script>
<style></style>
