---
title: ul
lang: zh-CN
---

# ul

## API

### Attributes

| Name                          | Description                                                                                                        | Type                                                                                                                            | Default  |
|-------------------------------|--------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------|----------|
| horizontal                    | 开启横向列表模式，默认为false。                                                                                                 | `boolean`                                                                                                                       | false    |
| numberOfRows                  | 指定列表的行数，一般直接传入数据源条数 `length` 即可。                                                                                   | `number`                                                                                                                        | -        |
| initialContentOffset          | 初始位移值 -- 在列表初始化时即可指定滚动距离，避免初始化后再通过 scrollTo 系列方法产生的闪动。                                                             | `number`                                                                                                                        | 0        |
| scrollEventThrottle           | 指定滑动事件的回调频率，传入数值指定了多少毫秒(ms)组件会调用一次 `onScroll` 回调事件，默认 200ms                                                        | `number`                                                                                                                        | 200      |
| showScrollIndicator           | 是否显示垂直滚动条。 因为目前 ListView 其实仅有垂直滚动一种方向，水平滚动会导致 `onEndReached` 等一堆问题暂不建议使用，所以 `showScrollIndicator` 也仅用来控制是否显示垂直滚动条。 | `boolean`                                                                                                                       | false    |
| preloadItemNumber             | 预加载：指定当列表滚动至倒数第几个时触发 `onLoadMore` 回调。                                                                              | `number`                                                                                                                        | 1        |
| disableAdvancedFocusSearch    | 关闭`ul`寻焦性能优化，在某些不正常情况下，可尝试关闭，默认开启                                                                                  | `boolean`                                                                                                                       | true     |
| endHintEnabled                | 设置是否开启底部回弹反馈效果                                                                                                     | `boolean`                                                                                                                       | true     |
| focusMemory                   | 设置是否记忆列表上次选中焦点的问题                                                                                                  | `boolean`                                                                                                                       | true     |
| initFocusPositionAfterLayout  | 设置在`ul`布局完成后，首次获得焦点的子`View`                                                                                        | `number`                                                                                                                        | -1       |
| listenFocusSearchOnFail       | 设置是否监听在`ul`内部寻焦失败事件                                                                                                | `number`                                                                                                                        | false    |
| makeChildVisibleType          | 设置子`View`获得焦点时，如果展示不完整，如何滚动`ul`的方式，分别为`normal`和`center`                                                            | `string`                                                                                                                        | `center` |
| makeChildVisibleClampBackward | 设置子`View`获得焦点时，如果展示不完整，向前滚动`ul`时设置的偏移量                                                                             | `number`                                                                                                                        | 0        |
| makeChildVisibleClampForward  | 设置子`View`获得焦点时，如果展示不完整，向后滚动`ul`时设置的偏移量                                                                             | `number`                                                                                                                        | 0        |
| enableSelectOnFocus           | 设置子`View`的`select`状态是否跟随焦点的变化而变化                                                                                   | `number`                                                                                                                        | `ALL`    |  |
| scrollStateChangeEnabled      | `scrollStateChanged` 事件开关，默认true                                                                                   | `boolean`                                                                                                                       | true     |
| clipChildren                  | 设置是否将超出边界的子`View`切除                                                                                                | `boolean`                                                                                                                       | false    |
| descendantFocusability        | 设置焦点的分发方式,`0`为在后代元素前，`1`为在后代元素后，`2`为阻止分发                                                                           | `number`                                                                                                                           | 0        |
| blockFocusDirections          | 当`div`内部寻焦为空时，是否拦截焦点                                                                                               | ^[object]`['left', 'right', 'top', 'bottom'] `                                                                                  | -        |
| nextFocusName                 | 按下媒体键下一个焦点的目标                                                                                                      | ^[object]`{left:'',right:'',up:'',down:'')}`                                                                                    | -        |
| disableAdvancedFocusSearch    | 关闭默认的焦点搜索方式。默认ul优先在列表内部寻焦以提高效率                                                                                     | `boolean`                                                                                                                       | false    |
| listenBoundEvent              | 是否开启on-bind,un-bind事件监听                                                                                            | `boolean`                                                                                                                       | false    |
| setUseNegativeLayout          | 是否打开消极的layout方式，兼容性api，防止某些场景列表频繁刷新。                                                                               | `boolean`                                                                                                                       | false    |
| initPosition                  | 列表初始化时一些滚动位置、初始化焦点等设置                                                                                              | ^[object]`{focusPosition : number(默认焦点位置), scrollToPosition: number(默认定位位置), scrollOffset: number(滚动offset), force: true(强制刷新)}` | -        |
| scrollThresholdHorizontal     | 焦点在列表内部横向焦点变化时，小于此值的滚动会被忽略                                                                                         | `number`                                                                                                                        | 0        |
| scrollThresholdVertical       | 焦点在列表内部纵向焦点变化时，小于此值的滚动会被忽略                                                                                         | `number`                                                                                                                        | 0        |
| shakePreCheckNumber           | 底部回弹效果触发时距最后一个item的个数                                                                                              | `number`                                                                                                                        | 1        |
| setSelectChildPosition           | 设置默认选中的孩子的位置                                                                                              | `number`                                                                                                                        | -        |


### Events

| Name  | Description      | Type                                        |
| ------| ---------------- | ------------------------------------------- |
| endReached          | 当所有的数据都已经渲染过，并且列表被滚动到最后一条时，将触发 `onEndReached` 回调。                                                                                                                                                                                                                                                                                                   | `Function`                                 |
| momentumScrollBegin | 在 `ScrollView` 开始滑动的时候调起                                                                                                                                                                                                                                                                                                                                                   | `Function`                                 |
| momentumScrollEnd   | 在 `ScrollView` 结束滑动的时候调起                                                                                                                                                                                                                                                                                                                                                   | `Function`                                 |
| scrollStateChanged  | 当触发 `ListView` 的滑动状态时回调，Event.newState:1(开始滑动)、Event.newState:2(滑动中)、Event.newState:0(滑动结束)、Event.offsetX(x轴坐标)、Event.offsetY(x轴坐标)                                                                                                                                                                                                                 | `Function`                                 |
| scroll              | 当触发 `ListView` 的滑动事件时回调，在 `ListView` 滑动时回调，因此调用会非常频繁，请使用 `scrollEventThrottle` 进行频率控制。 注意：ListView 在滚动时会进行组件回收，不要在滚动时对 renderRow() 生成的 ListItemView 做任何 ref 节点级的操作（例如：所有 callUIFunction 和 measureInWindow 方法），回收后的节点将无法再进行操作而报错。Event.offsetX(x轴坐标)、Event.offsetY(x轴坐标) | `Function`                                 |
| loadMore            | 当需要`分页`加载数据时，将触发 `onLoadMore` 回调，会触发此函数，可配合参数（preloadItemNumber）使用                                                                                                                                                                                                                                                                                  | `Function`                                 |
| childFocus          | 同`div`相同                                                                                                                                                                                                                                                                                                                                                                          | `Function`                                 |
| item-bind           | ul中一个item创建时回调                                                                                                                                                                                                                                                                                                                                                               | `Function` (通过参数position获得item位置） |
| item-unbind         | ul中一个item回收利用时回调                                                                                                                                                                                                                                                                                                                                                           | `Function`(通过参数position获得item位置）  |

### Exposes

| Method                       | Description                    | Type                                                                          |
|------------------------------|--------------------------------|-------------------------------------------------------------------------------|
| requestFocus                 | 请求焦点                         | ^[Function]`() => void`                                                         |
| requestChildFocus            | 请求孩子焦点                      | ^[Function]`(position: number) => void`                                       |
| clearFocus                   | 清除焦点                         | ^[Function]`() => void`                                                       |
| requestFocusDirectly         | 直接请求焦点                      | ^[Function]`(direction?: QTFocusDirection) => void`                                       |
| setVisibility                | 设置是否可见                      | ^[Function]`(v: QTVisibility) => void`                                       |
| changeDescendantFocusability | 改变子元素获焦策略                 | ^[Function]`(descendant: QTDescendantFocusability) => void`                                  |
| setBackGroundColor           | 设置背景色                        | ^[Function]`(focusAbility : string) => void`                                  |
| blockRootFocus               | 阻塞焦点                         | ^[Function]`() => void`                                  |
| unBlockRootFocus             | 取消阻塞焦点                      | ^[Function]`() => void`                                  |
| changeAlpha                  | 设置alpha                        | ^[Function]`(alpha :number) => void`                                          |
| setScale                     | 设置形变                          | ^[Function]`(x :number, y :number, duration: number) => void`                                          |
| setPosition                  | 设置位置                          | ^[Function]`(x :number, y :number, z: number) => void`                                          |
| invalidate                   | 刷新布局                          | ^[Function]`() => void`|
| dispatchFunctionForTarget    | 调用目标的方法                     | ^[Function]`(targetName: string, functionTargetName: string, params: Array<QTNativeParams>, delay: number) => void`|
| setBlockFocusDirections      | 设置阻塞焦点的方向                  | ^[Function]`(directionList: Array<QTFocusDirectionName>) => void`|
| setBlockFocusDirectionsOnFail| 失败的时候设置阻塞焦点的方向          | ^[Function]`(directionList: Array<QTFocusDirectionName>) => void`|
| hasFocus                     | 是否有焦点                         | ^[Function]`() => Promise<boolean>`|
| isFocused                    | 是否获得了焦点                      | ^[Function]`() => Promise<boolean>`|
| getLocationOnScreen          | 获取在屏幕上的位置                   | ^[Function]`() => Promise<QTEventData<QTLocation>>`|
| getViewState                 | 获取视图的状态                      | ^[Function]`() => Promise<QTViewState>`|
| getChildViewState            | 获取孩子视图的状态                   | ^[Function]`(position: number) => Promise<QTViewState>`|
| changeVisibility             | 设置可见性                        | ^[Function]`(visibility : string) => void visibility: visible、invisible、gone`|
