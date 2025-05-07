<template>
  <div class="es-sdk-root-css">
    <div class="es-sdk-content-row-css">
      <tv-list
        ref="listViewRef"
        class="qt_tv_list_view_root_css"
        horizontal="true"
        :clipChildren="false"
        :clipPadding="false"
        @item-click="onItemClick"
        @item-bind="onItemBind"
      >
        <qt-poster />
      </tv-list>
    </div>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue'
import { defineComponent } from '@vue/runtime-core'
import type {
  QTIListView,
  QTListViewItem,
  QTPoster,
} from '@quicktvui/quicktvui3'

export default defineComponent({
  name: '角标',
  setup() {
    const listViewRef = ref<QTIListView>()

    const onESCreate = () => {
      const data: Array<QTListViewItem> = []
      for (let i = 0; i < 2; i++) {
        const poster: QTPoster = {
          type: 10001,
          focus: {
            enable: true,
            scale: 1.1,
            border: false,
          },
          decoration: {
            top: 20,
            left: 20,
            right: 20,
            bottom: 20,
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
            height: 320,
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
      listViewRef.value?.setListData(data)
    }

    function onItemClick() {
      //
    }

    function onItemBind() {
      //
    }

    return {
      listViewRef,
      onESCreate,
      onItemClick,
      onItemBind,
    }
  },
})
</script>

<style>
.qt_tv_list_view_root_css {
  width: 1920px;
  height: 1080px;
}
</style>
