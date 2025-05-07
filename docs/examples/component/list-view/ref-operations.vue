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
// 新增数据
const addFn = () => {
  listDatas.value.push({ type: 1, title: 'new标题' })
}
// 插入数据
const insertFn = () => {
  listDatas.value.splice(1, 0, { type: 1, title: 'new标题' })
}
//删除数据
const deleteFn = () => {
  listDatas.value.splice(1, 1)
  // 删除最后一条数据
  // listDatas.value.pop()
  // 删除第一条数据
  // listDatas.value.shift()
}
// 清空数据
const clearFn = () => {
  listDatas.value = [] //直接赋值为空数组即可
}
// 重置数据
const resetFn = () => {
  listDatas.value = mockData(2)
}

const mockData = (flag = 1) => {
  return new Array(20).fill(1).map((item, i) => {
    return {
      id: `${flag}id${i}`,
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
