<template>
  <div class="es-sdk-root-css">
    <s-title-view class="es-sdk-content-title-css" :text="$options.name" />
    <div class="es-sdk-content-divider-css" />
    <div class="es-sdk-content-column-css">
      <s-text-view :text="'当前数据：' + currentData" />
      <div class="es-sdk-content-row-css">
        <s-text-button text="插入数据" @onButtonClicked="insertData" />
        <s-text-button text="查询数据" @onButtonClicked="queryData" />
        <s-text-button text="更新数据" @onButtonClicked="updateData" />
        <s-text-button text="删除数据" @onButtonClicked="deleteData" />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { ref } from 'vue'
import { defineComponent } from '@vue/runtime-core'
import { createESContentProvider, useESToast } from '@extscreen/es3-core'

export default defineComponent({
  name: 'ContentProvider模块',
  setup() {
    const testView = ref()
    const provider = createESContentProvider()
    const toast = useESToast()
    const currentData = ref('')
    const uri =
      'content://com.extscreen.mytest4.UserContentProvider.provider/user'
    // const uri2 = 'content://com.android.contacts/data/phones';
    // const uri3 = 'content://stbauthinfo/authentication/user_token';
    const insertDatas = {
      uid: 4,
      first_name: 'yuyuyu',
      age: 50,
      money: 453.143,
    }
    const queryDatas = {
      uid: 0,
      first_name: '1',
      age: 0,
      money: 0.0,
    }
    const emptyData = {
      display_name: '0',
      data1: '0',
    }

    function insertData() {
      provider.insert(uri, insertDatas).then((value) => {
        const result = value.result
        const message = value.message
        toast.showToast(`插入结果：${result}---message:${message}`)
      })
      // testView.value?.showPlaceHolder(true)
    }

    function queryData() {
      provider.query(uri).then((value) => {
        const result = value.result
        const message = value.message
        const data = value.data
        toast.showToast(`查询结果：${result}----message:${message}`)
        currentData.value = JSON.stringify(data)
      })
    }

    function updateData() {
      //
    }

    function deleteData() {
      //
    }

    return {
      currentData,
      insertData,
      queryData,
      updateData,
      deleteData,
      testView,
    }
  },
})
</script>
<style>
.es-test-view-css {
  width: 200px;
  height: 200px;
}
</style>
