<template>
  <qt-list-view
    ref="listViewRef"
    class="list_view_ref"
    :listData="listDatas"
    :loadMore="loadMoreFn"
    :openPage="true"
    :preloadNo="0"
    :listenBoundEvent="true"
  >
    <qt-button type="1" enableFlexStyle text="title" />
    <!-- 加载更多loading-模板【type必须是1002】 -->
    <qt-loading-view
      :type="1002"
      name="loading"
      color="rgba(255,255,255,0.3)"
      style="height: 40px; width: 40px"
      :focusable="false"
    />
    <!-- 分页结束提示语-模板【type必须是1003】 -->
    <qt-text
      :type="1003"
      style="width: 300px; height: 100px"
      gravity="center"
      :focusable="false"
      text="已经到底啦"
    />
  </qt-list-view>
</template>
<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { qtRef } from '@quicktvui/quicktvui3'

const listViewRef = ref()
const listDatas = qtRef()

onMounted(() => {
  mockData(1).then((res) => {
    listDatas.value = res.lists
  })
})
const loadMoreFn = async (pageNo: number) => {
  const res = await mockData(pageNo)
  if (res.lists && res.lists.length) {
    listDatas.value.push(...res.lists)
  } else {
    // listViewRef.value.stopPage()//结束分页-默认不显示到底提示
    listViewRef.value.stopPage(true) //结束分页-显示到底提示
  }
}
let timerId
// 模拟数据
const mockData = (pageNo: number): Promise<any> => {
  return new Promise((resolve) => {
    if (pageNo > 3) {
      resolve({ lists: [] })
    } else {
      clearTimeout(timerId)
      timerId = setTimeout(() => {
        resolve({
          lists: new Array(20).fill(1).map((item, i) => {
            return {
              id: `${pageNo}id${i}`,
              type: 1,
              focus: { enable: true, scale: 1.1, border: false },
              decoration: { top: 20, left: 10 },
              title: `${pageNo}主标题${i}`,
            }
          }),
        })
      }, 1000)
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
