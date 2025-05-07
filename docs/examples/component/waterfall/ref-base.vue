<template>
  <qt-waterfall :listData="waterfallDatas" class="qt-waterfall-ref-css" />
</template>

<script lang="ts" setup>
import { QTWaterfallSectionType, qtRef } from '@quicktvui/quicktvui3'
import type { QTPoster, QTWaterfallItem } from '@quicktvui/quicktvui3'

const waterfallDatas = qtRef()

defineExpose({
  onESCreate() {
    waterfallDatas.value = mockData('initFn')
  },
})
// 模拟数据
function mockPosterItemList(
  sectionId: string,
  size = 15
): Array<QTWaterfallItem> {
  const data: Array<QTWaterfallItem> = []
  const imgURL =
    'https://img1.baidu.com/it/u=2666955302,2339578501&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=750'
  for (let i = 0; i < size; i++) {
    const poster: QTPoster = {
      _id: `${sectionId}_${i}`,
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
    data.push(poster)
  }
  return data
}
// 模拟数据
const mockData = (flag = '') => {
  return new Array(5).fill(1).map((item, i) => {
    return {
      _id: `${i}`,
      type: QTWaterfallSectionType.QT_WATERFALL_SECTION_TYPE_FLEX,
      title: `板块标题${i}${flag}`,
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
        height: -1,
      },
      decoration: {
        left: 1,
        right: 1,
        top: 10,
      },
    }
  })
}
</script>

<style scoped>
.qt-waterfall-ref-css {
  width: 1620px;
  height: 1080px;
  background-color: transparent;
}
</style>
