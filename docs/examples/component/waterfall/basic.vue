<template>
  <div class="es-sdk-root-css">
    <qt-waterfall ref="waterfall" class="qt-waterfall-css" />
  </div>
</template>

<script lang="ts">
import { ref } from 'vue'
import { defineComponent } from '@vue/runtime-core'
import { QTWaterfallSectionType } from '@quicktvui/quicktvui3'
import type {
  QTIWaterfall,
  QTPoster,
  QTWaterfall,
  QTWaterfallItem,
  QTWaterfallSection,
} from '@quicktvui/quicktvui3'

export default defineComponent({
  name: '基础用法',
  setup() {
    const waterfall = ref<QTIWaterfall>()

    function onESCreate() {
      //1.初始化瀑布流
      const waterfallData: QTWaterfall = {
        width: 1920,
        height: 1080,
      }
      waterfall.value?.init(waterfallData)

      //2.构造section数据
      const sectionList: Array<QTWaterfallSection> = []
      for (let i = 0; i < 2; i++) {
        const section: QTWaterfallSection = {
          _id: `${i}`,
          type: QTWaterfallSectionType.QT_WATERFALL_SECTION_TYPE_FLEX,
          title: `板块:${i}`,
          titleStyle: {
            width: 1920,
            height: 60,
            marginLeft: 90,
            marginTop: 40,
            marginBottom: 40,
            fontSize: 80,
          },
          //3.构造section中item列表数据
          itemList: buildPosterItemList(`${i}`),
          style: {
            width: 1920,
            height: -1,
          },
        }
        sectionList.push(section)
      }

      //4.给瀑布流设置板块列表数据
      waterfall.value?.setSectionList(sectionList)
    }

    function buildPosterItemList(sectionId: string): Array<QTWaterfallItem> {
      const data: Array<QTWaterfallItem> = []
      const imgURL =
        'https://img1.baidu.com/it/u=2666955302,2339578501&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=750'
      for (let i = 0; i < 15; i++) {
        const poster: QTPoster = {
          _id: `${sectionId}_${i}`,
          focus: {
            enable: true,
            scale: 1.1,
            border: false,
          },
          type: 10001,
          decoration: {
            left: 90,
            bottom: 90,
          },
          title: {
            text: '主标题',
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

    return {
      waterfall,
      onESCreate,
    }
  },
})
</script>

<style>
.es-sdk-root-css {
  width: 1920px;
  height: 1080px;
  background-color: #26292f;
}

.qt-waterfall-css {
  width: 1920px;
  height: 850px;
}
</style>
