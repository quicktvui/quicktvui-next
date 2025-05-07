---
title: Tabs
lang: zh-CN
---

# Tabs

:::demo ## 基础用法

component/tabs/basic

:::

:::demo ## 单Tab

component/tabs/single-tab

:::

:::demo ## 设置数据

component/tabs/data

:::

:::demo ## 横向

component/tabs/horizontal

:::

:::demo ## 自定义TabItem

component/tabs/custom-tab-item

:::

## 标签页板块

:::demo ### Vue 板块

component/tabs/section-vue

:::

### 标签页板块操作

:::demo #### 添加板块

component/tabs/section-add

:::

:::demo #### 删除板块

component/tabs/section-delete

:::

:::demo #### 查询板块

component/tabs/section-get

:::

:::demo #### 更新板块

component/tabs/section-update

:::

## 标签页条目

:::demo ### 自定义条目

component/tabs/item-custom

:::

### 标签页条目操作

:::demo #### 添加条目

component/tabs/item-add

:::

:::demo #### 删除条目

component/tabs/item-delete

:::

:::demo #### 查询条目

component/tabs/item-get

:::

:::demo #### 更新条目

component/tabs/item-update

:::

## 数据双向绑定用法

:::demo ### tabs-数据双向绑定-基础用法

component/tabs/ref-basic

:::

:::demo ### tabs-数据双向绑定-分页加载数据

component/tabs/ref-page

:::

:::demo ### tabs-数据双向绑定-增删改查操作示例

component/tabs/ref-operations

:::

## API

### DataStructure

#### QTTab

用来描述标签页面信息

| Name              | Description       | Type                  |   Default   |
| ----------------- | ------------------| ----------------------|-------------|
| defaultIndex      | 默认选中的标签的索引  | ^[number]             |   -    |
| defaultFocusIndex | 默认焦点的标签的索引  | ^[number]             |   -    |
| itemList          | 标签条目列表         | ^[Array<QTTabItem>]   |   -    |

#### QTTabItem

用来描述标签条目信息

| Name         | Description       | Type                  |   Default   |
| ------------ | ------------------| ----------------------|-------------|
| text         | 标签条目的名称       | `string`              |   -    |
| titleSize    | 标签条目名称的文字大小 | `number`              |   -    |

### Attributes

| Name                           | Description                               | Type                 | Default                         |
|--------------------------------|-------------------------------------------| ---------------------|---------------------------------|
| enablePlaceholder              | 是否启用占位图                                   | ^[boolean]           | false                           |
| preloadNumber                  | 预加载板块个数                                   | ^[number]            | 3                               |
| tabNavBarClass                 | tabNavBar的样式                              | ^[string]            | -                               |
| tabClass                       | tab的样式                                    | ^[string]            | -                               |
| tabPageClass                   | tab内容的样式                                  | ^[string]            | -                               |
| tabNavBarSid                   | tabNavBar的Sid                             | ^[string]            | -                               |
| tabsDataStrategy               | tab的数据策略                                  | ^[enum]`'overTime' \| 'always' \| 'oneShot'`| overTime                        |
| horizontal                     | 横向或纵向排布                                   | ^[boolean]            | true                            |
| pageTransform                  | 页面变换动画                                    | ^[boolean]            | true                            |
| hideOnSingleTab                | 只有一个tab的时候隐藏导航栏                           | ^[boolean]            | true                            |
| floatNavBar                    | 浮动导航栏                                     | ^[boolean]            | true                            |
| useNavBarBg                    | 使用导航栏背景                                   | ^[boolean]            | true                            |
| contentNextFocus               | 内容的下一个焦点                                  | ^[object]`{ up: string, left: string, down: string, right: string}`| `{up:'tabList',left:'tabList'`} |
| triggerTask                    | 触发任务                                      | ^[object]`Record<string, any>[]`  | [ ]                             |
| blockViewPager                 | 拦截tab内容焦点                                 | ^[object]`string[]`  | [ ]                             |
| blockViewPagerVertical         | 拦截tab垂直内容焦点                               | ^[object]`string[]`  | [ ]                             |
| tabContentBlockFocusDirections | 拦截焦点的方向                                   | ^[object]`string[]`  | ['down']                        |
| tabContentResumeDelay          | tab内容恢复延迟时间                               | ^[number]            | 300ms                           |
| tabContentSwitchDelay          | tab导航切换延迟时间                               | ^[number]            | 0                               |
| endHintEnabled                 | 版块内容的到底提示开关                               | ^[boolean]           | true                            |
| outOfDateTime                  | 当`tabsDataStrategy`为`overtime`时，tab内容缓存时间 | ^[number]            | 5* 60*1000                       |
| customPool                     | 瀑布版块的缓存池                                  | ^[object]            | -                               |
| customItemPool                 | 瀑布item的缓存池                                | ^[object]            | -                               |
| navBarNextFocusName            | 导航栏指定nextFocus                            | ^[object]`{ up: string, left: string, right: string, down: string}`            | {down: 'content'}               |
| horizontalFadingEdgeEnabled    | 开启横向导航栏谈出效果                               | ^[boolean]            | false                           |
| verticalFadingEdgeEnabled      | 开启纵向导航栏谈出效果                               | ^[boolean]            | false                           |
| fadingEdgeLength               | 导航栏谈出效果长度                                 | ^[number]             | 0                               |
| speedPerPixel ^(2.7)           | tab切换时的速度                                 | ^[number]             | 0                               |
| autoHandleBackKey              | 是否自动处理back键事件                             | ^[boolean]             | true                            |
| autoBackToDefault              | 按back键时，是否先回到`defaultIndex`指定的tab上        | ^[boolean]             | true                            |
| autoScrollToTop              | 按back键时，是否先回到列表头部                         | ^[boolean]             | true                            |
| useClickMode              | tab使用点击切换，而不是焦点时切换内容                      | ^[boolean]             | false                           |
| firstResumeTaskDelay              | 首次加载时页面由`pase`变为`resume`的时间               | ^[number]             | 1000                            |
| alphaTransform              | tab切换时，是否开启alpha动画                        | ^[boolean]             | false                           |
| offscreenPageLimit              | tab页缓存数,注意数量不要过多，防止内存占用过多（1-N)            | ^[number]             | 1                               |
| tabConfig ^(beta) | tab配置信息 | ^[object]`{defaultFocusIndex:number,defaultIndex:number}` | `{defaultFocusIndex: 0,defaultIndex: 0}` |
| waterfallConfig ^(beta) | tab页下瀑布流的配置信息 | ^[object]`{width:number, height:number}` | `{width: 1920, height: 1080}` |
| tabs ^(beta) | 双向绑定数据集 | ^[Array<IQtTabDatas>] | `[]` |
### Events

| Name                          | Description           | Type                                                                                                      |
| ----------------------------- | --------------------  | --------------------------------------------------------------------------------------------------------- |
| onTabPageLoadData             | tab加载数据             | ^[Function]`(pageIndex: number, pageNo: number, useDiff: boolean) => void`                                |
| onTabPageChanged              | tab切换页面             | ^[Function]`(pageIndex: number, data: QTTabItem) => void`                                                 |
| onTabEvent                    | tab事件                | ^[Function]`(tabIndex: number, eventName: string, params: QTTabEventParams) => void`                      |
| onTabPageItemClick            | tab页面item点击事件      | ^[Function]`(pageIndex: number, sectionIndex: number, itemIndex: number, item: QTWaterfallItem) => void`  |
| onTabPageItemFocused          | tab页面item焦点事件      | ^[Function]`(pageIndex: number, sectionIndex: number, itemIndex: number, isFocused: boolean, item: QTWaterfallItem) => void`|
| onTabPageSectionAttached      | tab页面板块Attached     | ^[Function]`(pageIndex: number, sectionList: Array<QTWaterfallSection>) => void`                          |
| onTabPageScroll               | tab页面滚动             | ^[Function]`(scrollX: number, scrollY: number) => void`                                                   |
| onTabPageScrollStateChanged   | tab页面滚动状态变化       | ^[Function]`(offsetX: number, scrollY: number, newState: number) => void`                                 |
| onTabMoveToTopStart           | tab页面开始滚动到顶部     | ^[Function]`(tabIndex: number, eventName: string, params: QTTabEventParams) => void`                      |
| onTabMoveToTopEnd             | tab页面结束滚动到顶部     | ^[Function]`(tabIndex: number, eventName: string, params: QTTabEventParams) => void`                      |
| onTabMoveToBottomStart        | tab页面开始滚动到底部     | ^[Function]`(tabIndex: number, eventName: string, params: QTTabEventParams) => void`                      |
| onTabMoveToBottomEnd          | tab页面结束滚动到底部     | ^[Function]`(tabIndex: number, eventName: string, params: QTTabEventParams) => void`                      |
| onTabChanged                  | tab导航切换             | ^[Function]`(tabIndex: number, eventName: string, params: QTTabEventParams) => void`                                            |
| onTabPageScrollToEnd          | tab页面滚动到底部        | ^[Function]`(pageIndex: number) => void`                                                                                   |
| onTabPageScrollToStart        | tab页面滚动到顶部        | ^[Function]`(pageIndex: number) => void`                                                                                   |
| onTabClick                    | tab导航点击             | ^[Function]`(tabItem: QTTabItem) => void`                                                           |
| onPluginLoadSuccess           | tab页面内容插件加载成功   | ^[Function]`(event: QTPluginViewEvent) => void`                                                           |
| onPluginLoadError             | tab页面内容插件加载失败   | ^[Function]`(event: QTPluginViewEvent) => void`                                                           |

### Slots

| Name                  | Description                   |
| --------------------- | ----------------------------- |
| tab-item              | 自定义导航栏item.               |
| waterfall-item        | 瀑布流flex section中自定义item. |
| waterfall-list-item   | 瀑布流list section 中自定义item.|
| waterfall-vue-section | 瀑布流vue section 中内容.       |
| waterfall-section     | 瀑布流自定义section.            |

### Exposes

| Name                           | Description                                     | Type                                           |
| ------------------------------ | ----------------------------------------------- | -----------------------------------------------|
| initTab                        | 该方法初始化标签页条目                              | ^[Function]`(tab: QTTab) => void`   |
| initPage                       | 该方法初始化标签页面                                | ^[Function]`(waterfall: QTTabPage) => void`   |
| setPageState                   | 该方法设置标签页面状态                               | ^[Function]`(pageIndex: number, state: QTTabPageState) => void`   |
| getCurrentPageIndex            | 该方法获取当前的标签页的索引                          | ^[Function]`() => number`   |
| setPageData                    | 该方法设置标签页的数据                               | ^[Function]`(pageIndex: number, tabPage: QTTabPageData) => void`   |
| addPageData                    | 该方法向标签页添加数据                               | ^[Function]`(pageIndex: number, tabPageData: QTTabPageData, deleteCount: number) => void`   |
| updatePageData                 | 该方法更新标签页的数据                               | ^[Function]`(pageIndex: number, tabPageData: QTTabPageData) => void`   |
| updatePageSection              | 该方法更新标签页的板块                               | ^[Function]`(pageIndex: number, sectionIndex: number, section: QTWaterfallSection) => void`   |
| deletePageSection              | 该方法删除标签页的板块                               | ^[Function]`(pageIndex: number, sectionIndex: number, count: number) => void`   |
| getPageSection                 | 该方法获取指定索引标签页的指定索引板块                  | ^[Function]`(pageIndex: number, sectionIndex: number) => QTWaterfallSection \| undefined`   |
| getPageSectionList             | 该方法获取指定标签页的板块列表                        | ^[Function]`(pageIndex: number) => Array<QTWaterfallSection>`   |
| getPageItem                    | 该方法获取指定索引标签页的指定索引板块的指定索引的条目     | ^[Function]`(pageIndex: number, sectionIndex: number, itemIndex: number) => QTWaterfallItem \| undefined`   |
| updatePageItem                 | 该方法更新指定索引标签页的指定索引板块的指定索引的条目     | ^[Function]`(pageIndex: number, sectionIndex: number, itemIndex: number, item: QTWaterfallItem) => void`   |
| deletePageItem                 | 该方法删除指定索引标签页的指定索引板块的指定索引的条目     | ^[Function]`(pageIndex: number, sectionIndex: number, itemIndex: number, count: number) => void`   |
| addPageItemList                | 该方法向指定索引标签页的指定索引板块添加条目列表          | ^[Function]`(pageIndex: number, sectionIndex: number, itemList: Array<QTWaterfallItem>) => void`   |
| reloadAll                      | 该方法重新加载所有的标签页                            | ^[Function]`(updateCurrent: boolean) => void`   |
| reloadPage                     | 该方法重新加载标签页数据                              | ^[Function]`(pageIndex: number) => void`   |
| setCurrentPage                 | 该方法显示指定索引的标签页                            | ^[Function]`(pageIndex: number) => void`   |
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
