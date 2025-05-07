<template>
  <qt-view class="es-sdk-root-css">
    <s-title-view
      class="es-sdk-content-title-css"
      text="QTInputView"
    ></s-title-view>
    <qt-view class="es-sdk-content-divider-css" />
    <qt-view class="es-sdk-content-column-css">
      <qt-view class="es-sdk-content-row-css">
        <s-nav-button
          v-for="item in pageList"
          :key="item.id"
          :text="item.name"
          :url="`input/${item.id}`"
        />
      </qt-view>
    </qt-view>
  </qt-view>
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core'
import QTInputViewPageList from '../../components/qt-input'

export default defineComponent({
  name: 'QTInput',
  setup() {
    const pageList = Object.keys(QTInputViewPageList).map((data) => ({
      id: data,
      name: QTInputViewPageList[data].name,
    }))
    return {
      pageList,
    }
  },
})
</script>
<style></style>
