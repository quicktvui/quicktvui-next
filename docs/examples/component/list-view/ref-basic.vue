<template>
  <qt-list-view class="list_view_ref" :listData="listDatas">
    <qt-button type="1" enableFlexStyle text="title" />
  </qt-list-view>
</template>
<script lang="ts" setup>
import { onMounted } from 'vue'
import { qtRef } from '@quicktvui/quicktvui3'

const listDatas = qtRef()

onMounted(() => {
  listDatas.value = mockData() //初始化数据
})
// 模拟数据
const mockData = () => {
  return new Array(20).fill(1).map((item, i) => {
    return {
      type: 1,
      focus: { enable: true, scale: 1.1, border: false },
      decoration: { top: 20, left: 10 },
      title: `主标题${i}`,
    }
  })
}
</script>
<style scoped>
.list_view_ref {
  width: 300px;
  height: 1080px;
  background-color: #191919;
}
</style>
