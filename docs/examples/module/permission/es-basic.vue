<template>
  <div class="es-sdk-root-css">
    <s-title-view class="es-sdk-content-title-css" :text="$options.name" />
    <div class="es-sdk-content-divider-css" />
    <div class="es-sdk-content-column-css">
      <s-text-view text="[android.permission.RECORD_AUDIO]" />
      <div class="es-sdk-content-row-css">
        <s-text-button
          text="是否有权限"
          @onButtonClicked="isPermissionsGranted"
        />
        <s-text-button text="请求权限" @onButtonClicked="requestPermissions" />
      </div>
      <s-text-view :text="text" />
    </div>
  </div>
</template>
<script lang="ts">
import { ref } from 'vue'
import { defineComponent } from '@vue/runtime-core'
import { useESPermission } from '@extscreen/es3-core'

export default defineComponent({
  name: '权限模块',
  setup() {
    const permission = useESPermission()

    const text = ref('')

    function isPermissionsGranted() {
      const permissionList = ['android.permission.RECORD_AUDIO']
      permission.isPermissionsGranted(permissionList).then(
        (result) => {
          text.value = JSON.stringify(result)
        },
        (error) => {
          text.value = JSON.stringify(error)
        }
      )
    }

    function requestPermissions() {
      const permissionList = ['android.permission.RECORD_AUDIO']
      permission.requestPermissions(permissionList).then(
        (result) => {
          text.value = JSON.stringify(result)
        },
        (error) => {
          text.value = JSON.stringify(error)
        }
      )
    }

    return {
      text,
      requestPermissions,
      isPermissionsGranted,
    }
  },
})
</script>
<style></style>
