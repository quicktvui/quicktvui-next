<template>
  <qt-tabs
    ref="tabRef"
    class="qt-tabs-css"
    :tabs="tabDatas"
    @onTabPageLoadData="onTabPageLoadData"
  >
    <template #waterfall-item>
      <appListItem :type="1" />
    </template>
  </qt-tabs>
</template>
<script lang="ts" setup>
import { onMounted } from 'vue'
import { qtTabsRef } from '@quicktvui/quicktvui3'
import appListItem from './item/app-list-item.vue'

const tabDatas = qtTabsRef()

onMounted(() => {
  tabDatas.value = mockNavData() //初始化数据
})

// 分页回调函数
const onTabPageLoadData = (
  pageIndex: number,
  pageNo: number,
  useDiff: boolean
) => {
  const pageData = mockPageData(pageIndex, pageNo) //获取模拟分页数据

  if (pageData.lists && pageData.lists.length) {
    tabDatas.value[pageIndex].content.push(...pageData.lists) //添加tab页数据
  }
}
// 模拟接口数据
const mockNavData = () => {
  return Array.from({ length: 10 })
    .fill(1)
    .map((item, index) => {
      return {
        _id: `001${index}`,
        type: 20000,
        text: 'tab01',
        titleSize: 20,
        decoration: { left: 40, right: 20 },
        content: [],
      }
    })
}
// 模拟分页数据
const mockPageData = (pageIndex: number, pageNo: number) => {
  if (pageNo >= 2) {
    return { lists: [] }
  }
  return {
    lists: Array.from({ length: 2 })
      .fill(1)
      .map((item, index) => {
        return {
          _id: `${pageIndex}section-id${pageNo}${index}`,
          type: 1002,
          title: '板块标题',
          titleStyle: { width: 1620, height: 60 },
          style: { width: 1620, height: -1 },
          itemList: Array.from({ length: 5 })
            .fill(1)
            .map((iitem, iindex) => {
              return {
                _id: `${pageIndex}item-id${pageNo}${index}${iindex}`,
                type: 1,
                decoration: { left: 90, bottom: 40 },
                appIcon:
                  'http://qcloudimg.a311.ottcn.com/data_center/files/2022/08/02/56c9ff53-0117-44cf-b5c3-e732bd3c7ef8.jpg',
                appName: `格子标题${iindex}`,
                style: { width: 170, height: 220 },
              }
            }),
        }
      }),
  }
}
</script>
<style scoped>
.qt-tabs-css {
  width: 1920px;
  height: 1080px;
}
</style>
