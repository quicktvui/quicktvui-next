---
title: IndicatorListView
lang: zh-CN
---

# IndicatorListView

`qt-indicator-list-view` 是基于 `qt-list-view` 组件封装的具有导航功能样式的组件,支持dot和文字样式的导航展示效果,支持qt-list相关的所有功能。

:::demo ## 基础用法

component/indicator-list-view/basic

:::


## API

### Attributes

| Name                               | Description                                                    | Type                                                                                                                             | Default                        |
|------------------------------------|----------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------|--------------------------------|
| listData ^(beta)                   | 双向绑定数据集                                                        | ^[Array]                                                                                                                         | `[]`                           |
| indList  ^(beta)                   | 当前数据集合                                                         | ^[Array]                                                                                                                         | `[]`                           |
| setIndicatorEnable ^(beta)         | 循环模式                                                           | ^[boolean]                                                                                                                       | false                          |
| setIndicatorType ^(beta)           | 设置指示器样式0圆点导航 1文字导航                                             | ^[number]                                                                                                                        | 0                              |
| setIndicatorMargin ^(beta)         | 设置指示器距离父元素间距                                                   | ^[number]                                                                                                                        | -                              |
| setIndicatorSpace ^(beta)          | 设置指示器之前位置间距(圆点导航模式下生效)                                         | ^[number]                                                                                                                        | -                              |
| setIndicatorNormalColor ^(beta)    | 设置指示器默认颜色-未选中状态(圆点导航模式下生效)                                     | ^[string]                                                                                                                             | #80ffffff                      |
| setIndicatorSelectedColor ^(beta)  | 设置指示器选中状态颜色(圆点导航模式下生效)                                         | ^[string]                                                                                                                        | #ffffffff                      |
| setIndicatorRadiusSize ^(beta)     | 设置指示器半径(圆点导航模式下生效)                                             | ^[number]                                                                                                                        | 18                             |
| setIndicatorRadiusSize ^(beta)     | 设置指示器半径(圆点导航模式下生效)                                             | ^[number]                                                                                                                        | 18                             |
| isAutoLoop ^(beta)                 | 设置指示器是否自动循环                                                    | ^[boolean]                                                                                                                       | true                           |
| loopInterval ^(beta)               | 设置指示器自动循环间隔(单位毫秒)                                              | ^[number]                                                                                                                       | 5000                           |
| setIndicatorTextSize ^(beta)       | 设置指示器文字大小(文字导航模式下生效)                                           | ^[number]                                                                                                                       | 16                             |
| setIndicatorHorizontalMargin ^(beta)       | 设置指示器距离父元素水平间距                                                 | ^[number]                                                                                                                       | 20                             |
| setIndicatorVerticalMargin ^(beta)       | 设置指示器距离父元素垂直间距                                                 | ^[number]                                                                                                                       | 20                             |
| setIndicatorCenterType ^(beta)       | 设置指示器位置0默认居中 1右 2左(圆点导航模式下生效)                                  | ^[number]                                                                                                                       | 0                              |
| setIndicatorTitle ^(beta)       | 设置指示器添加title文字描述                                               | ^[string]                                                                                                                       | -                              |
| drawBackground ^(beta)       | 设置指示器是否支持绘制地图渐变颜色背景(渐变颜色固定)                                    | ^[boolean]                                                                                                                       | false                          |

### Events

| Name                    | Description | Type                                         |
| ------------------------|-------------| -------------------------------------------- |
| item-click              | 条目点击事件      | ^[Function]`(event: QTIndicatorListViewEvent) => void` |
| scroll                  | 滚动事件        | ^[Function]`(event: QTIndicatorListViewEvent) => void` |
| item-focused            | 条目焦点事件      | ^[Function]`(event: QTIndicatorListViewEvent) => void` |
| item-attached           | 条目连接事件      | ^[Function]`(event: QTIndicatorListViewEvent) => void` |
| item-detached           | 条目断开连接事件    | ^[Function]`(event: QTIndicatorListViewEvent) => void` |
| item-bind               | 条目绑定事件      | ^[Function]`(event: QTIndicatorListViewEvent) => void` |
| item-unbind             | 条目取消绑定事件    | ^[Function]`(event: QTIndicatorListViewEvent) => void` |
| load-more               | 加载更多数据事件    | ^[Function]`(event: QTIndicatorListViewEvent) => void` |
| scroll-state-changed    | 滚动状态变化事件    | ^[Function]`(event: QTIndicatorListViewEvent) => void` |
| focus-search-failed     | 寻找焦点失败事件    | ^[Function]`(event: QTIndicatorListViewEvent) => void` |
| scrollYGreaterReference | Y轴滚动增加事件    | ^[Function]`(event: QTIndicatorListViewEvent) => void` |
| scrollYLesserReference  | Y轴滚动减少事件    | ^[Function]`(event: QTIndicatorListViewEvent) => void` |
| current-indicator-page-index  | 当前滚动格子选中位置  | ^[Function]`(event: QTIndicatorListViewEvent) => void` |

### Slots

| Name        | Description             |
| ----------- | ----------------------- |
| default     | 自定义默认内容             |

### Exposes

| Method                       | Description                    | Type                                                                          |
|------------------------------|--------------------------------|-------------------------------------------------------------------------------|
| init                         | 初始化                           | ^[Function]`(target: Array<QTListViewItem>, isInit?: boolean) => void`   |
| stopPage                     | 停止分页                         | ^[Function]`() => void`   |
| setItemFocused               | 设置条目焦点                      | ^[Function]`(position: number) => void`   |
| scrollToFocused              | 滚动到焦点位置                    | ^[Function]`(position: number) => void`   |
| setItemSelected              | 选中条目                         | ^[Function]`(position: number, requestFocus: boolean) => void`   |
| scrollToSelected             | 滚动到选中位置                    | ^[Function]`(position: number, requestFocus: boolean) => void`   |
| deleteItem                   | 删除条目                         | ^[Function]`(position: number, count: number) => void`   |
| updateItemList               | 更新条目列表                      | ^[Function]`(position: number, count: number, data: Array<QTListViewItem>) => void`   |
| scrollToIndex                             | 滚动到指定位置                    | ^[Function]`(x: number, y: number, animated?: boolean, duration?: number, offset?: number) => void`   |
| startScroll                               | 开始滚动                         | ^[Function]`(position: QTListInitPosition) => void`   |
| setSelectChildPosition                    | 选中指定位置的条目                 | ^[Function]`(position: number, changeTargetFocusChild?: boolean) => void`   |
| scrollToPositionWithOffset                | 滚动到指定的位置                   | ^[Function]`(position: number, offset: number, animated: boolean) => void`   |
| scrollToPositionWithOffsetInfiniteMode    | 滚动到指定的位置                   | ^[Function]`(position: number, offset: number, animated: boolean) => void`   |
| scrollToPosition                          | 滚动到指定的位置                   | ^[Function]`(position: number, offset?: number) => void`   |
| refreshListData                           | 刷新列表数据                      | ^[Function]`() => void`   |
| updateItemTraverse                        | 更新条目                         | ^[Function]`(position: number, data?: QTListViewItem, traverse?: boolean) => void`   |
| requestItemLayout                         | 条目刷新布局                      | ^[Function]`(position: number) => void`   |
| updateItemRange                           | 更新条目                         | ^[Function]`(position: number, count: number, itemList: Array<QTListViewItem>) => void`   |
| insertItemRange                           | 插入条目                         | ^[Function]`(position: number, itemList: Array<QTListViewItem>) => void`   |
| updateItemMatched                         | 更新条目                         | ^[Function]`(params: QTNativeParams, data: QTListViewItem) => void`   |
| updateItemMatchedByKey                    | 更新条目                         | ^[Function]`(idKey: string, params: QTNativeParams, data: QTListViewItem) => void`   |
| deleteItemRange                           | 删除条目                         | ^[Function]`(position: number, count: number) => void`   |
| setListData                               | 设置列表数据                      | ^[Function]`(itemList: Array<QTListViewItem>) => void`   |
| setListDataWithParams                     | 设置列表数据                      | ^[Function]`(itemList: Array<QTListViewItem>, autoChangeVisible: boolean, useDiff: boolean) => void`   |
| addListData                               | 添加数据                         | ^[Function]`(itemList: Array<QTListViewItem>) => void`   |
| addListDataWithParams                     | 添加数据                         | ^[Function]`(itemList: Array<QTListViewItem>, deleteCount: number) => void`   |
| destroy                                   | 销毁                            | ^[Function]`() => void`   |
| recycle                                   | 回收                            | ^[Function]`() => void`   |
| scrollToTop                               | 滚动到顶部                       | ^[Function]`() => void`   |
| scrollToFocus                             | 滚动到焦点                       | ^[Function]`(position: number, scrollOffset: number, delay: number, target: string) => void`   |
| prepareForRecycle                         | 准备回收                         | ^[Function]`() => void`   |
| setDisplay                                | 是否显示                         | ^[Function]`(display: boolean) => void`   |
| changeDisplayState                        | 改变显示状态                      | ^[Function]`(display: boolean, autoDataState: boolean) => void`   |
| notifySaveInstance                        | 请求保存状态                      | ^[Function]`() => void`   |
| updateItemProps                           | 更新条目属性                      | ^[Function]`(name: string, position: number, dataToUpdate: QTNativeMap, updateView: boolean) => void`   |
| updateItem                                | 更新条目                         | ^[Function]`(position: number, data: QTListViewItem) => void`   |
| dispatchItemFunction                      | 执行条目方法                      | ^[Function]`(params: QTNativeArray) => void`   |
| clearPostTask                             | 清空任务                         | ^[Function]`() => void`   |
| clearPostTaskByCate                       | 清空任务                         | ^[Function]`(data: Array<number>) => void`   |
| clearData                                 | 清空数据                         | ^[Function]`() => void`   |
| pausePostTask                             | 暂停任务                         | ^[Function]`() => void`   |
| resumePostTask                            | 恢复任务                         | ^[Function]`() => void`   |
| requestLayoutManual                       | 手动刷新布局                      | ^[Function]`() => void`   |
| setSpanCount                              | 设置格子数量                      | ^[Function]`(spanCount: number) => void`   |
| searchReplaceItem                         | 请求替换条目                      | ^[Function]`(id: string, item: QTListViewItem) => void`   |
| setCustomStateEnableOnFocus               | 设置自定义状态在焦点时是否可用        | ^[Function]`(id: string, params: Array<Array<string>>) => void`   |
| setItemCustomState                        | 设置条目自定义状态                  | ^[Function]`(position: number, state: string, on: boolean) => void`   |
| dispatchItemFunctionWithPromise           | 执行条目的方法                     | ^[Function]`(position: number, targetName: string, functionTargetName: string, params: Array<QTNativeParams>) => Promise<QTNativeParams>`   |
| getScrollOffset                           | 获取滚动的偏移量                    | ^[Function]`() => Promise<QTPosition>`   |
