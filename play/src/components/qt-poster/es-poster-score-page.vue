<template>
  <div class="es-sdk-root-css">
    <s-title-view class="es-sdk-content-title-css" :text="this.$options.name"/>
    <div class="es-sdk-content-divider-css"/>
    <div class="es-sdk-content-row-css">
      <tv-list ref="listViewRef" class="qt_tv_list_view_root_css" horizontal="true"
               :clipChildren="false" :clipPadding="false"
               @item-click="onItemClick" @item-bind="onItemBind">
        <qt-poster/>
      </tv-list>
    </div>
  </div>
</template>

<script lang="ts">

import {defineComponent} from "@vue/runtime-core";
import {ref} from "vue";
import {QTIListView, QTListViewItem, QTPoster} from "quicktvui";

export default defineComponent({
  name: '评分',
  setup(props, context) {
    const listViewRef = ref<QTIListView>()

    const onESCreate = (params) => {
      console.log('------------onESCreate------>>>>')
      let data: Array<QTListViewItem> = []
      for (let i = 0; i < 2; i++) {
        const poster: QTPoster = {
          type: 10001,
          focus: {
            enable: true,
            scale: 1.1,
            border: false
          },
          decoration: {
            top: 20,
            left: 20,
            right: 20,
            bottom: 20
          },
          title: {
            text: '主标题',
            enable: true,
            style: {
              width: 260,
            }
          },
          focusTitle: {
            text: '焦点主标题',
            enable: true,
            style: {
              width: 260,
            }
          },
          score: {
            text: '1.1',
            enable: true,
            style: {
              width: 100,
              height: 100,
              left: 20,
              fontSize: 24,
              background: {colors: ['#e5000000', '#00000000'], orientation: 4}
            }
          },
          style: {
            width: 260,
            height: 320,
          },
          titleStyle: {
            width: 260,
            marginTop: 0,
          },
          titleFocusStyle: {width: 260, marginTop: -10},
        }
        data.push(poster)
      }
      console.log('-------xxx-----onESCreate------>>>>', data)
      listViewRef.value?.setListData(data)
    }

    function onItemClick(el) {
    }

    function onItemBind(el) {
    }

    return {
      listViewRef,
      onESCreate,
      onItemClick,
      onItemBind,
    }
  },
});

</script>

<style>
.qt_tv_list_view_root_css {
  width: 1920px;
  height: 1080px;
}

</style>
