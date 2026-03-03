<template>
  <div class="hero-content">
    <Content />
  </div>
  <el-divider style="margin-bottom: 0" />
  <div class="text-center py-6 text-xs">
    <p class="mb-1">
      Copyright © 2023-present quicktvui.com All rights reserved
      <a
        href="https://beian.miit.gov.cn/"
        target="_blank"
        rel="noopener noreferer"
        >{{ text }}</a
      >
    </p>
    <!--    <p class="mt-1">-->
    <!--      Made with ❤️ by-->
    <!--      <a-->
    <!--        href="https://github.com/quicktvui"-->
    <!--        target="_blank"-->
    <!--        rel="noopener noreferer"-->
    <!--        >QuickTVUI</a-->
    <!--      >-->
    <!--    </p>-->
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'

const text = ref<string>('京ICP备19043080号-7')
onMounted(() => {
  // 此时 DOM 已经渲染完成，可以做真正的 DOM 操作
  if (window.location.hostname == 'quicktv.net') {
    text.value = '京ICP备2024066042号-2'
  } else {
    text.value = '京ICP备19043080号-7'
  }
})
</script>
