<script lang="ts">
import { defineComponent, ref } from 'vue'
import type {
  QTIListView,
  QTListViewItem,
  QTPoster,
} from '@quicktvui/quicktvui3'

export default defineComponent({
  setup() {
    const gridViewRef = ref<QTIListView>()
    const arr: Array<QTListViewItem> = []
    const listDataRec: Array<QTListViewItem> = []
    for (let i = 0; i < 24; i++) {
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

    // listDataRec = gridViewRef.value!.init(arr);
    // 	 初始化组件之后返回值常用操作
    //   获取引用类型值 let getData = JSON.parse(JSON.stringify(listDataRec))
    //   获取基本类型值 listDataRec[0].assetTitle
    //   修改值 listDataRec[0].assetTitle = '更新assetTitle'
    //   push   listDataRec.push({ 单条数据 }) | listDataRec.push(...[多条数据]) //push方法
    //   pop    listDataRec.pop() //pop方法 末尾删除一条item
    //   concat listDataRec.concat(data) //concat方法 链接listDataRec数据
    // 	 splice(1个参数) 删除 listDataRec.splice(1)    //splice方法删除 从第一项开始删除之后所有item
    // 	 splice(2个参数) 删除 listDataRec.splice(1, 2) //splice方法删除 （从第1个开始 删除2条item）
    // 	 splice(3个参数 - 替换) listDataRec.splice(4, 2, data)    //splice方法-替换 从索引位置 4 开始，替换两个元素，替换的data （当三个参数第二个参数不为0时 为替换）
    // 	 splice(3个参数 - 插入) listDataRec.splice(4, 0, data)    //splice方法-插入 从索引位置 4 开始，替换0，插入的data （当三个参数第二个参数为0时 为插入）仅支持runtime版本 2.3+
    //   forEach循环   listDataRec.forEach(el => { el.assetTitle = '修改assetTitle' }) //循环修改每个item的值 整体更新
    //   for循环   for (let i = 0; i < listDataRec.length; i++) { if () { } } //循环更新符合条件的每个item 当筛选个别条件的item时可以使用for循环，当循环修改每个item的值时建议使用forEach循环
    //   重新赋值   listDataRec.splice(0); listDataRec.push(...data)  // 整体更新
  },
})
</script>

<template>
  <qt-grid-view
    ref="gridViewRef"
    class="grid_view"
    :spanCount="6"
    :areaWidth="1800"
  >
    <!-- 结合poster组件快速生成item 亦可自定义item-->
    <qt-poster />
  </qt-grid-view>
</template>
