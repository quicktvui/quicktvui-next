<template>
  <qt-grid-view class="grid_view" :listData="listData" :spanCount="6">
    <qt-view type="1" class="qt_list_item" :focusable="true" eventClick>
      <qt-text text="${text}" class="qt_list_item_text" />
    </qt-view>
  </qt-grid-view>
</template>
<script lang="ts" setup>
import { onMounted } from 'vue'
import { qtRef } from '@quicktvui/quicktvui3'

const listData = qtRef()

onMounted(() => {
  listData.value = mockData() //初始化数据
})
// 模拟数据
const mockData = (num = 30, flag = '') => {
  return new Array(num).fill(1).map((_, index) => {
    return {
      text: index + flag,
      type: 1,
      decoration: { left: 30, right: 30, bottom: 6 },
    }
  })
}
</script>
<style scoped>
.grid_view {
  width: 1920px;
  height: 1080px;
  background-color: transparent;
}

.qt_list_item {
  width: 260px;
  height: 300px;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  focus-background-color: #ffffff;
}

.qt_list_item_text {
  width: 200px;
  height: 300px;
  font-size: 30px;
  background-color: transparent;
}
</style>
