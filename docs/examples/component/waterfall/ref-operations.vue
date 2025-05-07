<template>
  <qt-waterfall :listData="waterfallDatas" class="qt-waterfall-ref-css" />
</template>

<script lang="ts" setup>
import { onMounted } from 'vue'
import { QTWaterfallSectionType, qtRef } from '@quicktvui/quicktvui3'
import type { QTWaterfallItem, QTWaterfallSection } from '@quicktvui/quicktvui3'

const waterfallDatas = qtRef<QTWaterfallSection[]>()

// 新增板块数据
const addFn = () => {
  waterfallDatas.value.push(mockSectionData(7, 'addFn'))
}
// 插入板块数据
const insertFn = () => {
  waterfallDatas.value.splice(0, 0, mockSectionData(6, 'insertFn'))
}
// 更新板块数据
const updateFn = () => {
  waterfallDatas.value[0].title = `${Math.random()}-update`
}
// 删除板块数据
const deleteFn = () => {
  waterfallDatas.value.splice(1, 1)
}
// 新增板块格子数据
const addItemFn = () => {
  waterfallDatas.value[0].itemList.push(
    mockPosterData(`addItemFn${Math.random()}`, 1)
  )
}
// 更新板块格子数据
const updateItemFn = () => {
  waterfallDatas.value[0].itemList[0].title.text = `${Math.random()}updateItemFn`
}
// 重置板块格子数据
const resetItemAllFn = () => {
  waterfallDatas.value[0].itemList = mockPosterItemList('resetItemAllFn', 5)
}
// 删除板块格子数据
const deleteItemFn = () => {
  waterfallDatas.value[0].itemList.splice(0, 1)
}
// 插入板块格子数据
const insertItemFn = () => {
  waterfallDatas.value[0].itemList.splice(0, 0, mockPosterData('addItemFn', 1))
}
// 清空所有数据
const clearFn = () => {
  waterfallDatas.value = []
}

onMounted(() => {
  waterfallDatas.value = mockList()
})

const imgURL =
  'https://img1.baidu.com/it/u=2666955302,2339578501&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=750'
// 模拟格子数据
const mockPosterData = (sectionId, i) => {
  return {
    _id: `${sectionId}_${i}${Math.random()}`,
    focus: {
      enable: true,
      scale: 1.1,
      border: false,
    },
    type: 10001,
    decoration: {
      left: 60,
      bottom: 20,
    },
    title: {
      text: `主标题${i}`,
      enable: true,
      style: {
        width: 260,
      },
    },
    subTitle: {
      text: '副标题',
      enable: true,
      style: {
        width: 260,
      },
    },
    floatTitle: {
      text: '浮动标题',
      enable: true,
      style: {
        width: 260,
      },
      background: { colors: ['#e5000000', '#00000000'], orientation: 4 },
    },
    shimmer: {
      enable: true,
    },
    ripple: {
      enable: true,
      style: {
        right: 0,
        bottom: 0,
        marginRight: -12,
      },
    },
    image: {
      src: imgURL,
      enable: true,
      style: {
        width: 260,
        height: 320,
      },
    },
    corner: {
      text: '角标',
      enable: true,
      style: {
        width: 260,
        height: 30,
      },
      background: {
        colors: ['#FE3824', '#F0051E'],
        cornerRadii4: [0, 8, 0, 8],
        orientation: 2,
      },
    },
    style: {
      width: 260,
      height: 400,
    },
    titleStyle: {
      width: 260,
      height: 120,
      marginTop: 320 - 60,
    },
    titleFocusStyle: { width: 260, marginTop: 320 - 100 },
  }
}
// 模拟格子列表
function mockPosterItemList(
  sectionId: string,
  size = 15
): Array<QTWaterfallItem> {
  return new Array(size).fill(1).map((item, i) => {
    return mockPosterData(sectionId, i)
  })
}
// 模拟板块数据
const mockSectionData = (i, flag) => {
  return {
    _id: `${i}${Math.random()}`,
    type: QTWaterfallSectionType.QT_WATERFALL_SECTION_TYPE_FLEX,
    title: `板块标题:${i}${flag}`,
    titleStyle: {
      width: 1000,
      height: 50,
      marginTop: 10,
      marginBottom: 10,
      fontSize: 50,
    },
    itemList: mockPosterItemList(i + flag, 5),
    style: {
      width: 1620,
      // height: -1,
    },
    decoration: {
      left: 1,
      right: 1,
      top: 10,
    },
  }
}
// 模拟数据集
const mockList = (flag = '', num = 5) => {
  return new Array(num).fill(1).map((item, i) => {
    return mockSectionData(i, flag)
  })
}
</script>

<style>
.qt-waterfall-ref-css {
  width: 1620px;
  height: 1080px;
  background-color: transparent;
}
</style>
