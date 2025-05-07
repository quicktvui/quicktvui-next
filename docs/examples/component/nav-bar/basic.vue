<template>
  <!-- horizontal: 是否横向   :item-gap： 间距-->
  <qt-nav-bar ref="navBar" :itemGap="10" @tab-select="onTabSelect" />
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { QTNavBarItemType } from '@quicktvui/quicktvui3'
import type { QTINavBar, QTNavBar, QTNavBarItem } from '@quicktvui/quicktvui3'

export default defineComponent({
  setup() {
    const navBar = ref<QTINavBar>()
    const horizontalItemList: Array<QTNavBarItem> = []
    for (let i = 0; i < 10; i++) {
      const tabItem: QTNavBarItem = {
        type: QTNavBarItemType.QT_NAV_BAR_ITEM_TYPE_TEXT,
        text: `Tab:${i}`,
        titleSize: 20,
        decoration: {
          left: 40,
          right: 20,
        },
      }
      horizontalItemList.push(tabItem)
    }

    const horizontalNavBar: QTNavBar = {
      data: horizontalItemList,
    }

    navBar.value?.init(horizontalNavBar)

    //导航切换时的回调，当前选中导航的info(e)
    const onTabSelect = (e) => {
      //
    }

    return {
      onTabSelect,
    }
  },
})
</script>
<style lang="css" scoped></style>
