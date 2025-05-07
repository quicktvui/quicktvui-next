<template>
  <qt-view class='es-sdk-root-css'>
    <s-title-view class='es-sdk-content-title-css' text='QTAppIconSample'></s-title-view>
    <qt-view class='es-sdk-content-divider-css' />
    <qt-view class='es-sdk-content-column-css'>
      <qt-view class='es-sdk-content-row-css'>
        <s-nav-button
          v-for='item in pageList' :key='item.id'
          :text='item.name'
          :url='`qt-app-icon-sample/${item.id}`' />
      </qt-view>
    </qt-view>
  </qt-view>
</template>

<script lang='ts'>

import { defineComponent } from '@vue/runtime-core'
import QTAppIconSamplePageList from '../../components/qt-app-icon-sample'

export default defineComponent({
  name: 'QTAppIconSample',
  emits:[],
  setup() {
    const pageList = Object.keys(QTAppIconSamplePageList).map(data => ({
      id: data,
      name: QTAppIconSamplePageList[data].name
    }))
    return {
      pageList
    }
  }
})

</script>
<style>
</style>
