<template>
  <qt-tabs ref="tabRef" class="qt-tabs-ref" :tabs="tabDatas">
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

// 添加板块数据
const addSectionFn = () => {
  tabDatas.value[0].content.push(mockSectionData('section-1'))
}
// 插入板块数据
const insertSectionFn = () => {
  tabDatas.value[0].content.splice(1, 0, mockSectionData('section-2'))
}
// 删除板块数据
const deleteSectionFn = () => {
  tabDatas.value[0].content.splice(1, 1)
}
// 更新板块数据
const updateSectionFn = () => {
  tabDatas.value[0].content[0].title = `updateSectionFn${Math.random()}`
}
// 新增板块格子
const addItemFn = () => {
  tabDatas.value[0].content[0].itemList.push(mockItemData('item-1'))
}
// 插入格子
const insertItemFn = () => {
  tabDatas.value[0].content[0].itemList.splice(1, 0, mockItemData('item-1'))
}
// 删除格子
const deleteItemFn = () => {
  // tabDatas.value[0].content[0].itemList.splice(1,1)
  tabDatas.value[0].content[0].itemList.pop()
}
// 修改格子
const updateItemFn = () => {
  tabDatas.value[0].content[0].itemList[1].appName = `updateItemFn${Math.random()}`
}

// 模拟接口数据
const mockNavData = () => {
  return Array.from({ length: 10 })
    .fill(1)
    .map((item, index) => {
      return {
        _id: `001${index}`,
        type: 20000,
        text: `tab${index}`,
        titleSize: 20,
        decoration: { left: 40, right: 20 },
        content: [mockSectionData('section-0')],
      }
    })
}
// 模拟分页数据
const mockSectionData = (sectionid = '') => {
  return {
    _id: `${sectionid}section-id${Math.random()}`,
    type: 1002,
    title: '板块标题',
    titleStyle: { width: 1620, height: 60 },
    style: { width: 1620, height: -1 },
    itemList: [mockItemData(`${sectionid}-1`), mockItemData(`${sectionid}-2`)],
  }
}
const mockItemData = (indexid = '') => {
  return {
    _id: `${indexid}itemid${Math.random()}`,
    type: 1,
    decoration: { left: 90, bottom: 40 },
    appIcon:
      'http://qcloudimg.a311.ottcn.com/data_center/files/2022/08/02/56c9ff53-0117-44cf-b5c3-e732bd3c7ef8.jpg',
    appName: '标题',
    style: { width: 170, height: 220 },
  }
}
</script>
<style scoped>
.qt-tabs-ref {
  width: 1920px;
  height: 1000px;
  background-color: transparent;
}
</style>
