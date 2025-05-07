<script lang="ts">
import { defineComponent, nextTick, ref } from 'vue'
import type {
  QTIListView,
  QTListViewItem,
  QTPoster,
} from '@quicktvui/quicktvui3'

export default defineComponent({
  setup() {
    const gridViewRef = ref<QTIListView>()
    let listDataRec: Array<QTListViewItem> = []
    const loadMore = (pageNo: number) => {
      const arr: Array<QTListViewItem> = []
      for (let i = pageNo * 6 - 6; i < pageNo * 6; i++) {
        const poster: QTPoster = {
          type: 10001,
          decoration: { top: 20, left: 20, right: 20, bottom: 20 },
          title: {
            text: `主标题${i}`,
            enable: true,
            style: { width: 260 },
          },
          style: { width: 260, height: 320 },
          titleStyle: { width: 260, height: 120, marginTop: 320 - 60 },
          titleFocusStyle: { width: 260, marginTop: 320 - 100 },
        }
        arr.push(poster)
      }
      if (listDataRec.length > 0) {
        if (pageNo > 4) {
          //如果分页请求完毕 调用 stopPage 方法
          gridViewRef.value?.stopPage()
        } else {
          listDataRec.push(...arr)
        }
      } else {
        nextTick(() => {
          listDataRec = gridViewRef.value!.init(arr)
        })
      }
    }

    const onItemBind = () => {
      //
    }

    return {
      gridViewRef,
      onItemBind,
      loadMore,
    }
  },
})
</script>
<template>
  <qt-grid-view
    ref="gridViewRef"
    class="list_view"
    :spanCount="6"
    :areaWidth="1800"
    :itemHeight="320"
    :listenBoundEvent="true"
    :loadMore="loadMore"
    :openPage="true"
    @item-bind="onItemBind"
  >
    <qt-poster />
    <!-- loading样式  -->
    <qt-view
      ref="loading"
      class="loading"
      type="1002"
      name="loading"
      :focusable="false"
    >
      <qt-loading-view color="#409eff" style="height: 30px; width: 30px" />
    </qt-view>
  </qt-grid-view>
</template>
