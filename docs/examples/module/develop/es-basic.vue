<template>
  <div class="es-sdk-root-css">
    <s-title-view class="es-sdk-content-title-css" :text="$options.name" />
    <div class="es-sdk-content-divider-css" />
    <div class="es-sdk-content-column-css">
      <s-text-view text="开发信息模块用来获取开发相关runtime信息" />
      <s-text-view :text="'Runtime版本名称：' + versionName" />
      <s-text-view :text="'Runtime版本号：' + versionCode" />
      <s-text-view :text="'Runtime包名：' + packageName" />
      <s-text-view :text="'Runtime渠道：' + channel" />
    </div>
  </div>
</template>
<script lang="ts">
import { ref } from 'vue'
import { defineComponent } from '@vue/runtime-core'
import { useESDevelop } from '@extscreen/es3-core'

export default defineComponent({
  name: '开发信息模块',
  setup() {
    const develop = useESDevelop()
    const versionCode = ref(-1)
    const versionName = ref('')
    const packageName = ref('')
    const channel = ref('')

    const onESCreate = () => {
      versionCode.value = develop.getVersionCode()
      versionName.value = develop.getVersionName()
      packageName.value = develop.getPackageName()
      channel.value = develop.getChannel()
    }

    return {
      onESCreate,
      versionCode,
      versionName,
      packageName,
      channel,
    }
  },
})
</script>
<style></style>
