---
title: Waterfall
lang: zh-CN
---

# Waterfall

Section列表组成Waterfall。 item列表组成Section。

## 瀑布流结构图

<img src="/component/waterfall/waterfall_structure.jpg" />

:::demo ## 基础用法

component/waterfall/basic

:::

:::demo ## 事件

component/waterfall/event

:::

## 瀑布流板块

### 瀑布流板块类型

瀑布流内置如下类型板块：

* 加载板块：`QT_WATERFALL_SECTION_TYPE_LOADING`
* 标题板块：`QT_WATERFALL_SECTION_TYPE_TITLE`
* 弹性布局板块：`QT_WATERFALL_SECTION_TYPE_FLEX`
* 横向列表板块：`QT_WATERFALL_SECTION_TYPE_LIST`
* 标签板块：`QT_WATERFALL_SECTION_TYPE_TAB`
* 标签列表板块：`QT_WATERFALL_SECTION_TYPE_TAB_LIST`
* 卡片板块：`QT_WATERFALL_SECTION_TYPE_CARD`
* 原生`Vue`板块：`QT_WATERFALL_SECTION_TYPE_VUE`
* 结束板块：`QT_WATERFALL_SECTION_TYPE_END`
* 空板块：`QT_WATERFALL_SECTION_TYPE_BLANK`

#### List Section

使用内置列表板块，设置section类型为`QT_WATERFALL_SECTION_TYPE_LIST`即可

:::demo

component/waterfall/section-list

:::

#### End Section

使用内置底部板块，设置section类型为`QT_WATERFALL_SECTION_TYPE_END`即可

:::demo

component/waterfall/section-end

:::

#### Blank Section

使用内置空板块，设置section类型为`QT_WATERFALL_SECTION_TYPE_BLANK`即可

:::demo

component/waterfall/section-blank

:::

#### Tabs Section

使用内置标签板块，设置section类型为`QT_WATERFALL_ITEM_TYPE_TAB`即可

:::demo

component/waterfall/section-tabs

:::

:::demo #### Tabs List Section

component/waterfall/section-tabs-list

:::

#### Vue Section

:::demo

component/waterfall/section-vue

:::

:::demo

component/waterfall/section-time

:::

:::demo #### Card Section

component/waterfall/section-card

:::

:::demo #### Card Section Placeholder

component/waterfall/section-card-placeholder

:::

### 瀑布流板块操作

:::demo #### 添加板块

component/waterfall/section-add

:::

:::demo #### 查询板块

component/waterfall/section-get

:::

:::demo #### 删除板块

component/waterfall/section-delete

:::

:::demo #### 更新板块

component/waterfall/section-update

:::

:::demo ### 自定义板块

component/waterfall/section-custom

:::

:::demo ### 板块装饰信息

component/waterfall/section-decoration

:::

:::demo ### 板块背景

component/waterfall/section-background

:::

## 瀑布流条目

### 瀑布流条目类型

瀑布流内置如下类型条目：

* 海报条目：`QT_WATERFALL_ITEM_TYPE_POSTER`
* 标签条目：`QT_WATERFALL_ITEM_TYPE_TAB`
* 卡片条目：`QT_WATERFALL_ITEM_TYPE_CARD`
* 空条目：`QT_WATERFALL_ITEM_TYPE_BLANK`

#### Card Item

:::demo

component/waterfall/item-card

:::

#### Card Item Placeholder

:::demo

component/waterfall/item-card-placeholder

:::

### 瀑布流条目操作

#### 添加条目

:::demo

component/waterfall/item-add

:::

#### 查询条目

:::demo

component/waterfall/item-get

:::

#### 删除条目

:::demo

component/waterfall/item-delete

:::

#### 更新条目

:::demo

component/waterfall/item-update

:::

### 条目装饰信息

:::demo

component/waterfall/item-decoration

:::

### 自定义条目

:::demo

component/waterfall/item-custom

:::

## 数据双向绑定用法

:::demo ### 基础用法

component/waterfall/ref-base

:::

:::demo ### 增删改查操作示例

component/waterfall/ref-operations

:::

## API

### DataStructure

#### QTWaterfall

用来描述瀑布流信息

| Name         | Description       | Type                  |   Default   |
| ------------ | ------------------| ----------------------|---------|
| width        | 瀑布流的宽度       | ^[number]               |   -    |
| height       | 瀑布流的高度       | ^[number]               |   -    |
| visibleType  | 瀑布流显示的类型    | ^[QTWaterfallVisibleType]|   -    |

#### QTWaterfallItem

用来描述瀑布流`Item`信息

| Name         | Description       | Type                          |   Default   |
| ------------ | ------------------| ------------------------------|---------|
| _id          | 瀑布流item的id       | ^[string]                    |   -    |
| type         | 瀑布流item的类型      | ^[number]                    |   -    |
| decoration   | 瀑布流item的装饰尺寸   | ^[QTListViewItemDecoration]  |   -    |
| style        | 瀑布流item视图的样式   | ^[QTWaterfallFlexStyle]      |   -    |

#### QTWaterfallSection

用来描述瀑布流`Section`信息

| Name         | Description             | Type                                     |   Default   |
| ------------ | ------------------------| -----------------------------------------|---------|
| _id          | 瀑布流section的id         | `string`                                 |   -    |
| type         | 瀑布流section的类型        | `number`                                 |   -    |
| decoration   | 瀑布流section的装饰尺寸     | `QTListViewItemDecoration`               |   -    |
| style        | 瀑布流section视图的样式     | `QTWaterfallFlexStyle`                   |   -    |
| title        | 瀑布流section的标题         | `string`                                |   -    |
| titleStyle   | 瀑布流section的标题样式     |`QTWaterfallFlexStyle & QTFlexStyleText`  |   -    |
| itemList     | 瀑布流section中的item列表   | `Array<QTWaterfallItem>`                 |   -    |
| placeholder  | 瀑布流section中的占位       | `QTWaterfallPlaceholder`                 |   -    |

### Attributes

| Name                            | Description       | Type                 | Default |
| ------------------------------- | ----------------- | ---------------------| ------- |
| enablePlaceholder               | 是否启用占位图       | ^[boolean]           | false   |
| blockFocusDirections            | 拦截焦点的方向       | ^[object]`string[]`  | ['left', 'right']      |
| scrollYLesserReferenceValue     | Y轴滚动减少的阈值    | ^[number]            | 0       |
| scrollYGreaterReferenceValue    | Y轴滚动增加的阈值    | ^[number]            | 0       |
| focusable                          | 是否可以获得焦点                                                                                                      | ^[boolean]                                                                                                                       | false                          |
| clipChildren                       | 裁剪子布局                                                                                                         | ^[boolean]                                                                                                                       | false                          |
| clipPadding                        | 从padding区域向外裁剪                                                                                                | ^[boolean]                                                                                                                       | false                          |
| nextFocusDownSID ^(2.7)            | 向下时指定下一个焦点sid                                                                                                 | ^[string]                                                                                                                        | -                              |
| nextFocusUpSID ^(2.7)              | 向上时指定下一个焦点sid                                                                                                 | ^[string]                                                                                                                        | -                              |
| nextFocusLeftSID ^(2.7)            | 向左时指定下一个焦点sid                                                                                                 | ^[string]                                                                                                                        | -                              |
| nextFocusRightSID ^(2.7)           | 向右时指定下一个焦点sid                                                                                                 | ^[string]                                                                                                                        | -                              |
| nextFocusSID ^(2.7)                | 指定各方向下一个焦点sid                                                                                                 | ^[object]`'{left : string, right: string, up: string, down: string}'`                                                            | -                              |
| sid ^(2.7)                         | 给一个元素标记一个`string id`，可随意赋值，需确保唯一                                                                              | ^[string]                                                                                                                        | -                              |
| fadingEdgeLength ^(2.5)            | 淡出效果长度                                                                                                        | ^[number]                                                                                                                        | 0                              |
| horizontalFadingEdgeEnabled ^(2.5) | 开启横向淡出效果                                                                                                      | ^[boolean]                                                                                                                       | false                          |
| verticalFadingEdgeEnabled ^(2.5)   | 开启纵向淡出效果                                                                                                      | ^[boolean]                                                                                                                       | false                          |
| autofocus ^(2.7)                   | 组件内根据状态（`初始化、可见性改变、尺寸改变`)变化自动获焦,focusable为true时自己获焦                                                           | ^[boolean]                                                                                                                       | false                          |
| renderToHardwareTextureAndroid     | 设置`layerType`为`LAYER_TYPE_HARDWARE`                                                                           | ^[boolean]                                                                                                                       | false                          |
| viewLayerType                      | 设置`layerType`                                                                                                 | ^[enum]`'hardware' \| 'soft' \| 'none'`                                                                                          | -                              |
| clipBounds                         | 设置裁剪区域                                                                                                        | ^[object]`'{left : number, right: number, top: number, bottom: number}'`                                                         | -                              |
| descendantFocusability             | 设置子孙组件的可聚焦性策略                                                                                                 | ^[enum]`'0：先于子孙' \| '1：子孙之后' \| '2：阻止所有'`                                                                                        | -                              |
| name                               | 指定元素的`name`                                                                                                   | ^[string]                                                                                                                        | -                              |
| nextFocusName                      | 指定各方向下一个焦点元素的`name`                                                                                           | ^[object]`'{left : string, right: string, up: string, down: string}'`                                                            | -                              |
| visible                            | 是否可见                                                                                                          | ^[boolean]                                                                                                                       | false                          |
| visibility                         | 可见性                                                                                                           | ^[enum]`'visible' \| 'invisible' \| 'gone'`                                                                                      | visible                        |
| size                               | 设置元素大小                                                                                                        | ^[array]`[width : number,height : number]`                                                                                       | -                              |
| layout                             | 设置元素位置及大小                                                                                                     | ^[array]`[x : number, y : number, width : number,height : number]`                                                               | -                              |
| selectChildPosition                | 设置选中子元素位置                                                                                                     | ^[number]                                                                                                                        | -1                             |
| enableSelectOnFocus                | 开启当焦点时自动设置选中子元素位置                                                                                             | ^[number]                                                                                                                        | -1                             |
| focusMemory                        | 开启子元素焦点记忆                                                                                                     | ^[boolean]                                                                                                                       | false                          |
| useDiff                            | 开启时更新diff算法，提高性能，解决多次刷新问题 ^(beta)                                                                             | ^[boolean]                                                                                                                       | false                          |
| initPosition                       | 列表初始化时一些滚动位置、初始化焦点等设置 ^(deprecated) 使用`autofocus、autoscroll替代`                                                | ^[object]`{focusPosition : number(默认焦点位置), scrollToPosition: number(默认定位位置), scrollOffset: number(滚动offset), force: true(强制刷新)}` | -                              |
| listenBoundEvent                   | 开启监听`item-focused`等事件                                                                                         | ^[boolean]                                                                                                                       | false                          |
| enableItemAnimator                 | 开启item加载动画                                                                                                    | ^[boolean]                                                                                                                       | false                          |
| disableScrollOnFirstScreen         | 首屏时焦点切换不滚动 ^(beta)                                                                                            | ^[boolean]                                                                                                                       | false                          |
| skipFocusOnPause                   | `pause`状态时不可获焦                                                                                                | ^[boolean]                                                                                                                       | false                          |
| taskPaused                         | 将组件`活动`（如创建item等,`postDelay`的组件）暂停                                                                            | ^[boolean]                                                                                                                       | false                          |
| pauseTaskOnHide                    | 组件不可见时`pause`                                                                                                 | ^[boolean]                                                                                                                       | false                          |
| resetOnDetach                      | 开启时自动在离开屏幕时重置状态、滚动到头部                                                                                         | ^[boolean]                                                                                                                       | false                          |
| touchScrollEnabled                 | 开启触屏时滚动                                                                                                       | ^[boolean]                                                                                                                       | true                           |
| firstFocusChild ^(2.87)            | 指定从各方向获焦时，首个获焦对象，由`child`的`position`或`sid`指定                                                                  | ^[object]`{left : number \| string,right : number \| string,up : number \| string,down : number \| string}`                      | -                              |
| enableFirstFocusAtStart ^(2.87)    | 开启首个获焦对象为头部`child`                                                                                            | ^[boolean]                                                                                                                       | false                          |
| enablePlaceholder ^(2.5)           | 加载时是否先展示`placeholder`                                                                                         | ^[boolean]                                                                                                                       | false                          |
| checkScrollOffsetOnStateChanged    | 是否在滚动事件时触发事件监听                                                                                                | ^[boolean]                                                                                                                       | false                          |
| onScrollEnable                     | 开启`scroll`事件监听                                                                                                | ^[boolean]                                                                                                                       | true                           |
| makeChildVisibleType               | 列表随焦点变化滚动方式                                                                                                   | ^[enum]`center \| normal`                                                                                                        | center                         |
| makeChildVisibleClampBackward      | 列表向后滚动时的留白^(beta)                                                                                             | ^[number]                                                                                                                        | 0                              |
| makeChildVisibleClampForward       | 列表向后滚动时的留白^(beta)                                                                                             | ^[number]                                                                                                                        | 0                              |
| scrollThresholdHorizontal          | 横向焦点触发滚动的阈值                                                                                                   | ^[number]                                                                                                                        | 0                              |
| scrollThresholdVertical            | 纵向焦点触发滚动的阈值                                                                                                   | ^[number]                                                                                                                        | 0                              |
| cachePool                          | `item`缓存池，可以设置缓存池`name`,指定不同`type`类型`item`的数量，以优化性能                                                           | ^[object]`{name : string,size : object({type : number...}) }`                                                                    | -                              |
| cachePoolName                      | `cachePool`简化版，只可指定缓存池`name`,不同实例，相同`name`使用同一缓存池                                                             | ^[string]                                                                                                                        | -                              |
| selectChildPosition                | 选中子item位置                                                                                                     | ^[number]                                                                                                                        | -1                             |
| shakePreCheckNumber                | 到底抖动提示提前位置                                                                                                    | ^[number]                                                                                                                        | 2                              |
| placeholderFocusScale ^(2.7)      | `placeholder`焦点放大倍数                                                                                           | ^[number]                                                                                                                        | 1.1                            |
| placeholderColorString ^(2.7)    | `placeholder`背景颜色(`#RRGGBBAA`)                                                                                | ^[string]                                                                                                                        | #FFFFFF1A                      |
| placeholderColor ^(2.7)         | `placeholder`背景颜色                                                                                             | ^[number]                                                                                                                        | (255,255,255,0.1)              |
| placeholderBorderRadius ^(2.7)  | `placeholder`圆角                                                                                               | ^[number]                                                                                                                        | 8                              |
| endShakeEnabled                    | 到底反馈                                                                                                          | ^[boolean]                                                                                                                       | true                           |
| listenFocusSearchOnFail            | 监听内部寻焦失败                                                                                                      | ^[boolean]                                                                                                                       | false                          |
| enableStatesOnFocus                | 子item获焦时自动改变`自定义`名称的状态                                                                                        | ^[array]`[selected,customxx...]`                                                                                                 | false                          |
| placeholderPostDelay ^(2.5)       | `placeholder`变为真实内容的delay时间                                                                                   | ^[number]                                                                                                                        | 100ms                          |
| enableKeepFocus                    | 保持焦点在内部                                                                                                       | ^[boolean]                                                                                                                       | false                          |
| scrollFactor                       | 滚动速度参数                                                                                                        | ^[number]                                                                                                                        | 1                              |
| autofocusPosition ^(2.7)          | 自动焦点位置                                                                                                        | ^[number]                                                                                                                        | -1                             |
| autofocusSID ^(2.8)          | 自动焦点位置                                                                                                       | ^[string]                                                                                                                     |                             |
| autoscroll ^(2.7)                 | 自动滚动参数`[position,offset]`                                                                                     | ^[array]                                                                                                                         | -                              |
| autoSelectPosition ^(2.7)         | 自动选择位置^(beta)                                                                                                 | ^[number]                                                                                                                        | -1                             |
| infiniteMode ^(2.87)              | 循环模式                                                                                                          | ^[boolean]                                                                                                                       | false                          |
| infiniteParams ^(2.87)            | 循环模式参数:`{autoscroll:array,scrollOffset:number, itemSize : number,selectPosition:number,minChildScale:number}` | ^[object]                                                                                                                        | -                              |
| listData ^(beta) | 双向绑定数据集 | ^[Array] | `[]` |

### Events

| Name                     | Description     | Type                                                                                                      |
| ------------------------ | ----------------| --------------------------------------------------------------------------------------------------------- |
| onScroll                 | 页面滚动          | ^[Function]`(scrollX: number, scrollY: number) => void`                                                   |
| onScrollStateChanged     | 页面滚动状态变化    | ^[Function]`(offsetX: number, scrollY: number, newState: number, oldState: number) => void`               |
| onItemClick              | 条目点击事件       | ^[Function]`(sectionIndex: number, itemIndex: number, item: QTWaterfallItem) => void`                     |
| onItemFocused            | 条目焦点变化       | ^[Function]`(sectionIndex: number, itemIndex: number, isFocused: boolean, item: QTWaterfallItem) => void` |
| onSectionBind            | 板块绑定          | ^[Function]`(pageIndex: number, sectionIndex: number) => void`                                            |
| onSectionAttached        | 板块Attached     | ^[Function]`(pageIndex: number, sectionIndex: number) => void`                                            |
| onSectionDetached        | 板块Detached     | ^[Function]`(pageIndex: number, sectionIndex: number) => void`                                            |
| onScrollYGreaterReference| Y轴滚动增加事件    | ^[Function]`() => void`                                                                                   |
| onScrollYLesserReference | Y轴滚动减少事件    | ^[Function]`() => void`                                                                                   |
| onPluginLoadSuccess      | 插件加载成功       | ^[Function]`(event: QTPluginViewEvent) => void`                                                           |
| onPluginLoadError        | 插件加载失败       | ^[Function]`(event: QTPluginViewEvent) => void`                                                           |

### Slots

| Name        | Description             |
| ----------- | ----------------------- |
| item        | flex section中自定义item. |
| list-item   | list section 中自定义item.|
| vue-section | vue section 中内容.       |
| section     | 自定义section.            |

### Exposes

| Name                           | Description                                     | Type                                           |
| ------------------------------ | ----------------------------------------------- | -----------------------------------------------|
| init                           | 该方法根据初始化瀑布流                              | ^[Function]`(waterfall: QTWaterfall)) => void`      |
| getSectionList                 | 该方法获取瀑布流包含的板块列表数据                    | ^[Function]`() => Array<QTWaterfallSection>`      |
| setSectionList                 | 该方法设置瀑布流板块列表数据                         | ^[Function]`(sections: Array<QTWaterfallSection>) => void`      |
| addSectionList                 | 该方法给瀑布流添加板块                              | ^[Function]`(sections: Array<QTWaterfallSection>) => void`      |
| deleteSection                  | 该方法删除指定的板块                                | ^[Function]`(sectionIndex: number, count: number) => void`      |
| updateSection                  | 该方法更新指定index的瀑布流板块                      | ^[Function]`(sectionIndex: number, section: QTWaterfallSection) => void`      |
| updateSectionList              | 该方法更新瀑布流板块列表                             | ^[Function]`(sectionIndex: number, count: number, sectionList: Array<QTWaterfallSection>) => void`      |
| getSection                     | 该方法获取指定索引的瀑布流板块                        | ^[Function]`(sectionIndex: number) => QTWaterfallSection \| undefined`      |
| addItemList                    | 该方法向指定索引的板块中添加条目                       | ^[Function]`(sectionIndex: number, itemList: Array<QTWaterfallItem>) => void`      |
| deleteItem                     | 该方法删除指定索引板块中的条目                        | ^[Function]`(sectionIndex: number, itemIndex: number, count: number) => void`      |
| updateItem                     | 该方法更新指定索引板块中的条目                        | ^[Function]`(sectionIndex: number, itemIndex: number, item: QTWaterfallItem) => void`      |
| updateItemList                 | 该方法更新指定索引板块中的条目列表                     | ^[Function]`(sectionIndex: number, itemIndex: number, count: number, itemList: Array<QTWaterfallItem>) => void`      |
| getItem                        | 该方法获取指定索引板块中的条目                        | ^[Function]`(sectionIndex: number, itemIndex: number) => QTWaterfallItem \| undefined`      |
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
