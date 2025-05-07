---
title: GridView
lang: zh-CN
---

# GridView

`qt-grid-view`是实现网格排版的ui组件，常用于多行多列的内容排版。支持数据分页。 特点: 初始化组件返回数据代理值，直接操作返回值更新ui视图，减少冗余api，降低开发成本。

::: warning 注意:

* 不支持`qt-grid-view`嵌套,最低支持SDK版本`2.1`。
* 组件中默认item样式使用[`qt-poster`](/zh-CN/component/poster)，在构建数据中可查看其使用方式。也可自定义item。
* 自定义item样式中文本标签仅支持[`text-view`](/zh-CN/component/text)。[`qt-list-view`](/zh-CN/component/list-view) 是同 `ul`
  一样注册的用于多功能的列表组件，增加数据代理，常用于单行多列的内容排版。支持横向纵向排列滚动，支持数据分页。
  :::

:::demo ## 基础用法

component/grid-view/basic

:::

<img src="/component/grid-view/grid_view_basic.gif" />

::: warning 注意:

* `qt-grid-view`HTML片段中type属性值要与data中的type值对应。
* `qt-grid-view`HTML片段中设置属性值需要使用`${属性值}`。
* `qt-grid-view`HTML片段中文本标签仅支持`<text-view>`。
* `qt-grid-view`设置css宽度要与`areaWidth`属性值一样。
  :::

:::demo ## 分页效果

component/grid-view/page

:::

<img src="/component/grid-view/grid_view_page.gif" />


::: warning 注意:

* `listenBoundEvent`属性必须设置为true `@item-bind`方法必须添加 可以不做任何处理 `openPage`属性值为true
* `pageSize` 分页每页条数（当不确定每页条数时可以不设置）建议分页时必传
* `loading type`必须设置为1002,loading必须以具名插槽slot="loading"形式添加
* `stopPage()` 分页结束后调用该方法停止分页
* 分页结束后重新开启分页可v-if刷新组件
  :::

## 数据双向绑定用法

:::demo ### 基础用法

component/grid-view/ref-base

:::

:::demo ### 使用分页加载数据

component/grid-view/ref-page

:::

## API

### Attributes

| Name                 | Description  | Type                                      | Default |
| -------------------- | ------------ | ----------------------------------------- | ------- |
| loadMore             | 加载更多       | ^[Function]`(pageNo: number) => void`     | -       |
| openPage             | 是否分页加载数据 | ^[boolean]                                | false   |
| spanCount            | span数量      | ^[number]                                  | -       |
| pageSize             | 每页数量       | ^[number]                                  | -       |
| preloadNo            | 预加载的页码数  | ^[number]                                  | 0       |
| defaultFocus         | 默认焦点       | ^[number]                                  | -       |
| areaWidth            | 宽度          | ^[number]                                  | -       |
| loadingDecoration    | 加载组件的装饰  | ^[object]`{ up: string, left: string, right: string, bottom: string, }`| `{top:15,left:30}`   |
| blockFocusDirections | 拦截焦点的方向  | ^[object]`string[]`  | ['left', 'right', 'top', 'bottom']      |
| focusable                          | 是否可以获得焦点                                                                                                     | ^[boolean]                                                                                                                       | false                          |
| clipChildren                       | 裁剪子布局                                                                                                        | ^[boolean]                                                                                                                       | false                          |
| clipPadding                        | 从padding区域向外裁剪                                                                                               | ^[boolean]                                                                                                                       | false                          |
| nextFocusDownSID ^(2.7)            | 向下时指定下一个焦点sid                                                                                                | ^[string]                                                                                                                        | -                              |
| nextFocusUpSID ^(2.7)              | 向上时指定下一个焦点sid                                                                                                | ^[string]                                                                                                                        | -                              |
| nextFocusLeftSID ^(2.7)            | 向左时指定下一个焦点sid                                                                                                | ^[string]                                                                                                                        | -                              |
| nextFocusRightSID ^(2.7)           | 向右时指定下一个焦点sid                                                                                                | ^[string]                                                                                                                        | -                              |
| nextFocusSID ^(2.7)                | 指定各方向下一个焦点sid                                                                                                | ^[object]`'{left : string, right: string, up: string, down: string}'`                                                            | -                              |
| sid ^(2.7)                         | 给一个元素标记一个`string id`，可随意赋值，需确保唯一                                                                             | ^[string]                                                                                                                        | -                              |
| fadingEdgeLength ^(2.5)            | 淡出效果长度                                                                                                       | ^[number]                                                                                                                        | 0                              |
| horizontalFadingEdgeEnabled ^(2.5) | 开启横向淡出效果                                                                                                     | ^[boolean]                                                                                                                       | false                          |
| verticalFadingEdgeEnabled ^(2.5)   | 开启纵向淡出效果                                                                                                     | ^[boolean]                                                                                                                       | false                          |
| autofocus ^(2.7)                   | 组件内根据状态（`初始化、可见性改变、尺寸改变`)变化自动获焦,focusable为true时自己获焦                                                          | ^[boolean]                                                                                                                       | false                          |
| renderToHardwareTextureAndroid     | 设置`layerType`为`LAYER_TYPE_HARDWARE`                                                                          | ^[boolean]                                                                                                                       | false                          |
| viewLayerType                      | 设置`layerType`                                                                                                | ^[enum]`'hardware' \| 'soft' \| 'none'`                                                                                          | -                              |
| clipBounds                         | 设置裁剪区域                                                                                                       | ^[object]`'{left : number, right: number, top: number, bottom: number}'`                                                         | -                              |
| descendantFocusability             | 设置子孙组件的可聚焦性策略                                                                                                | ^[enum]`'0：先于子孙' \| '1：子孙之后' \| '2：阻止所有'`                                                                                        | -                              |
| name                               | 指定元素的`name`                                                                                                  | ^[string]                                                                                                                        | -                              |
| nextFocusName                      | 指定各方向下一个焦点元素的`name`                                                                                          | ^[object]`'{left : string, right: string, up: string, down: string}'`                                                            | -                              |
| visible                            | 是否可见                                                                                                         | ^[boolean]                                                                                                                       | false                          |
| visibility                         | 可见性                                                                                                          | ^[enum]`'visible' \| 'invisible' \| 'gone'`                                                                                      | visible                        |
| size                               | 设置元素大小                                                                                                       | ^[array]`[width : number,height : number]`                                                                                       | -                              |
| layout                             | 设置元素位置及大小                                                                                                    | ^[array]`[x : number, y : number, width : number,height : number]`                                                               | -                              |
| selectChildPosition                | 设置选中子元素位置                                                                                                    | ^[number]                                                                                                                        | -1                             |
| enableSelectOnFocus                | 开启当焦点时自动设置选中子元素位置                                                                                            | ^[number]                                                                                                                        | -1                             |
| focusMemory                        | 开启子元素焦点记忆                                                                                                    | ^[boolean]                                                                                                                       | false                          |
| useDiff                            | 开启时更新diff算法，提高性能，解决多次刷新问题 ^(beta)                                                                            | ^[boolean]                                                                                                                       | false                          |
| initPosition                       | 列表初始化时一些滚动位置、初始化焦点等设置 ^(deprecated) 使用`autofocus、autoscroll替代`                                               | ^[object]`{focusPosition : number(默认焦点位置), scrollToPosition: number(默认定位位置), scrollOffset: number(滚动offset), force: true(强制刷新)}` | -                              |
| listenBoundEvent                   | 开启监听`item-focused`等事件                                                                                        | ^[boolean]                                                                                                                       | false                          |
| enableItemAnimator                 | 开启item加载动画                                                                                                   | ^[boolean]                                                                                                                       | false                          |
| disableScrollOnFirstScreen         | 首屏时焦点切换不滚动 ^(beta)                                                                                           | ^[boolean]                                                                                                                       | false                          |
| skipFocusOnPause                   | `pause`状态时不可获焦                                                                                               | ^[boolean]                                                                                                                       | false                          |
| taskPaused                         | 将组件`活动`（如创建item等,`postDelay`的组件）暂停                                                                           | ^[boolean]                                                                                                                       | false                          |
| pauseTaskOnHide                    | 组件不可见时`pause`                                                                                                | ^[boolean]                                                                                                                       | false                          |
| resetOnDetach                      | 开启时自动在离开屏幕时重置状态、滚动到头部                                                                                        | ^[boolean]                                                                                                                       | false                          |
| touchScrollEnabled                 | 开启触屏时滚动                                                                                                      | ^[boolean]                                                                                                                       | true                           |
| firstFocusChild ^(2.87)            | 指定从各方向获焦时，首个获焦对象，由`child`的`position`或`sid`指定                                                                 | ^[object]`{left : number \| string,right : number \| string,up : number \| string,down : number \| string}`                      | -                              |
| enableFirstFocusAtStart ^(2.87)    | 开启首个获焦对象为头部`child`                                                                                           | ^[boolean]                                                                                                                       | false                          |
| enablePlaceholder ^(2.5)           | 加载时是否先展示`placeholder`                                                                                        | ^[boolean]                                                                                                                       | false                          |
| checkScrollOffsetOnStateChanged    | 是否在滚动事件时触发事件监听                                                                                               | ^[boolean]                                                                                                                       | false                          |
| onScrollEnable                     | 开启`scroll`事件监听                                                                                               | ^[boolean]                                                                                                                       | true                           |
| makeChildVisibleType               | 列表随焦点变化滚动方式                                                                                                  | ^[enum]`center \| normal`                                                                                                        | center                         |
| makeChildVisibleClampBackward      | 列表向后滚动时的留白^(beta)                                                                                            | ^[number]                                                                                                                        | 0                              |
| makeChildVisibleClampForward       | 列表向后滚动时的留白^(beta)                                                                                            | ^[number]                                                                                                                        | 0                              |
| scrollThresholdHorizontal          | 横向焦点触发滚动的阈值                                                                                                  | ^[number]                                                                                                                        | 0                              |
| scrollThresholdVertical            | 纵向焦点触发滚动的阈值                                                                                                  | ^[number]                                                                                                                        | 0                              |
| cachePool                          | `item`缓存池，可以设置缓存池`name`,指定不同`type`类型`item`的数量，以优化性能                                                          | ^[object]`{name : string,size : object({type : number...}) }`                                                                    | -                              |
| cachePoolName                      | `cachePool`简化版，只可指定缓存池`name`,不同实例，相同`name`使用同一缓存池                                                            | ^[string]                                                                                                                        | -                              |
| selectChildPosition                | 选中子item位置                                                                                                    | ^[number]                                                                                                                        | -1                             |
| shakePreCheckNumber                | 到底抖动提示提前位置                                                                                                   | ^[number]                                                                                                                        | 2                              |
| placeholderFocusScale ^(2.7)      | `placeholder`焦点放大倍数                                                                                          | ^[number]                                                                                                                        | 1.1                            |
| placeholderColorString ^(2.7)    | `placeholder`背景颜色(`#RRGGBBAA`)                                                                               | ^[string]                                                                                                                        | #FFFFFF1A                      |
| placeholderColor ^(2.7)         | `placeholder`背景颜色                                                                                            | ^[number]                                                                                                                        | (255,255,255,0.1)              |
| placeholderBorderRadius ^(2.7)  | `placeholder`圆角                                                                                              | ^[number]                                                                                                                        | 8                              |
| endShakeEnabled                    | 到底反馈                                                                                                         | ^[boolean]                                                                                                                       | true                           |
| listenFocusSearchOnFail            | 监听内部寻焦失败                                                                                                     | ^[boolean]                                                                                                                       | false                          |
| enableStatesOnFocus                | 子item获焦时自动改变`自定义`名称的状态                                                                                       | ^[array]`[selected,customxx...]`                                                                                                 | false                          |
| placeholderPostDelay ^(2.5)       | `placeholder`变为真实内容的delay时间                                                                                  | ^[number]                                                                                                                        | 100ms                          |
| enableKeepFocus                    | 保持焦点在内部                                                                                                      | ^[boolean]                                                                                                                       | false                          |
| scrollFactor                       | 滚动速度参数                                                                                                       | ^[number]                                                                                                                        | 1                              |
| autofocusPosition ^(2.7)          | 自动焦点位置                                                                                                       | ^[number]   
| autofocusSID ^(2.8)          | 自动焦点位置                                                                                                       | ^[string]                                                                                                                     |                             |
| autoscroll ^(2.7)                 | 自动滚动参数`[position,offset]`                                                                                    | ^[array]                                                                                                                         | -                              |
| autoSelectPosition ^(2.7)         | 自动选择位置^(beta)                                                                                                | ^[number]                                                                                                                        | -1                             |
| infiniteMode ^(2.87)              | 循环模式                                                                                                         | ^[boolean]                                                                                                                       | false                          |
| infiniteParams ^(2.87)            | 循环模式参数 | ^[object]`{autoscroll:array,scrollOffset:number, itemSize : number,selectPosition:number,minChildScale:number}`
| listData ^(beta) | 双向绑定数据集 | ^[Array] | `[]` |

### Events

| Name                    | Description   | Type                                         |
| ------------------------| ------------- | -------------------------------------------- |
| item-click              | 条目点击事件    | ^[Function]`(event: QTGridViewEvent) => void` |
| scroll                  | 滚动事件       | ^[Function]`(event: QTGridViewEvent) => void` |
| item-focused            | 条目焦点事件    | ^[Function]`(event: QTGridViewEvent) => void` |
| item-bind               | 条目绑定事件    | ^[Function]`(event: QTGridViewEvent) => void` |
| item-unbind             | 条目取消绑定事件 | ^[Function]`(event: QTGridViewEvent) => void` |
| scroll-state-changed    | 滚动状态变化事件 | ^[Function]`(event: QTGridViewEvent) => void` |

### Slots

| Name        | Description             |
| ----------- | ----------------------- |
| default     | 自定义默认内容             |
| header      | 自定义顶部内容             |
| footer      | 自定义底部内容             |
| loading     | 自定义加载组件内容          |

### Exposes

| Method                       | Description                    | Type                                                                          |
|------------------------------|--------------------------------|-------------------------------------------------------------------------------|
| init                         | 初始化                          | ^[Function]`(target: Array<QTGridViewItem>) => void`   |
| stopPage                     | 停止分页                          | ^[Function]`() => void`   |
| restartPage                  | 重新分页                          | ^[Function]`() => void`   |
| setItemFocused               | 请求条目焦点                       | ^[Function]`(position: number) => void`   |
| scrollToFocused              | 滚动到焦点位置                     | ^[Function]`(position: number) => void`   |
| setItemSelected              | 选中条目                          | ^[Function]`(position: number, b: boolean) => void`   |
| scrollToSelected             | 滚动到选中位置                     | ^[Function]`(position: number, b: boolean) => void`   |
| setInitPosition              | 设置初始位置                     | ^[Function]`(position: number) => void`   |
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
