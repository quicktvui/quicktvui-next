<template>
  <qt-grid-view
    ref="gridViewRef"
    class="grid_view"
    :listData="listData"
    :spanCount="6"
    :preloadNo="5"
    :loadMore="loadMoreFn"
    :listenBoundEvent="true"
    :openPage="true"
  >
    <qt-view type="1" class="qt_list_item" :focusable="true" eventClick>
      <qt-text text="${text}" class="qt_list_item_text" />
    </qt-view>
    <!-- 加载更多loading-模板【type必须是1002】 -->
    <template #loading>
      <qt-loading-view
        :type="1002"
        name="loading"
        color="rgba(255,255,255,0.3)"
        style="height: 40px; width: 40px"
        :focusable="false"
      />
    </template>
    <!-- 分页结束提示语-模板【type必须是1003】 -->
    <qt-text
      :type="1003"
      style="width: 1920px; height: 100px"
      gravity="center"
      :focusable="false"
      text="已经到底啦"
    />
  </qt-grid-view>
</template>
<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { qtRef } from '@quicktvui/quicktvui3'

const gridViewRef = ref()
const listData = qtRef()

onMounted(() => {
  mockData(1).then((res) => {
    listData.value = res.lists //初始化数据
  })
})
const loadMoreFn = (pageNo: number) => {
  mockData(pageNo).then((res) => {
    if (res.lists && res.lists.length) {
      listData.value.push(...res.lists)
    } else {
      // gridViewRef.value.stopPage()//结束分页-默认不显示到底提示
      gridViewRef.value.stopPage(true) //结束分页-显示到底提示
    }
  })
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
          lists: new Array(30).fill(1).map((_, index) => {
            return {
              text: `${pageNo}标题${index}`,
              type: 1,
              decoration: { left: 30, right: 30, bottom: 6 },
            }
          }),
        })
      }, 1000)
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
