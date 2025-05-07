---
title: View
lang: zh-CN
---

# View

View组件的功能和 div 相同，作为其他组件的容器。

## 基础用法

::: warning 注意：

* ***必须设置宽（[width](/zh-CN/css/layout/width)）高（[height](/zh-CN/css/layout/height)）属性***

* ***背景颜色建议设置为透明，`background-color: transparent;`***

:::

:::demo

component/view/basic

:::

## 焦点事件

* 监听`focus`事件。

```ts
const onFocus = (e) => {
  //判断是否获得焦点
  const focused = e.isFocused;
}
```

* 是否可获得焦点：`focusable`
* 是否显示焦点框：`enableFocusBorder`
* 焦点变形倍数：`focusScale`

:::demo

component/view/focus

:::

## 点击事件

监听`click`事件。

```ts
const onClick = (e) => {
  //
}
```

::: warning 注意：组件必须获得了焦点，点击才生效。

:::

:::demo

component/view/click

:::

## 背景色

使用 `background-color`设置背景颜色，[点击查看颜色](/zh-CN/css/color/rgb)

::: warning 注意：不支持 background 属性

:::

:::demo

component/view/background

:::

## 焦点背景色

使用`focus-background-color`设置焦点状态背景颜色，[点击查看颜色](/zh-CN/css/color/rgb)

:::demo

component/view/focus-background

:::

## 渐变背景色

使用`gradientBackground`设置渐变颜色，[点击查看`gradient`](/zh-CN/css/color/gradient)

::: warning 注意：背景颜色需要设置为透明 background-color: transparent;
:::

:::demo

component/view/gradient-background

:::

## 背景图片

***暂时不支持***

可以通过嵌套`<qt-image>`来实现背景图片

:::demo

component/view/background-img

:::

## 边框

***正常状态：***

* 边框颜色：`border-color`
* 边框宽度：`border-width`
* 边框圆角：`border-radius`

***焦点状态***

* 边框颜色：`focus-border-width`
* 边框宽度：`focus-border-color`
* 边框圆角：`focus-border-radius`

:::demo

component/view/border

:::

## API

### Attributes

| Name                               | Description                                         | Type                                                                  | Default |
|------------------------------------|-----------------------------------------------------|-----------------------------------------------------------------------|---------|
| focusable                          | 是否可以获得焦点                                            | ^[boolean]                                                               | false  |
| clipChildren                       | 裁剪子布局                                               | ^[boolean]                                                               | false  |
| clipPadding                        | 从padding区域向外裁剪                                      | ^[boolean]                                                               | false  |
| enableFocusBorder                  | 是否显示焦点框                                             | ^[boolean]                                                               | false  |
| focusScale                         | 焦点放大倍数                                              | ^[number]                                                                | 1.1    |
| duplicateParentState               | 继承父类的状态                                             | ^[boolean]                                                               | false  |
| showOnState                        | 在指定状态显示                                             | ^[enum]`'normal' \| 'selected' \| 'focused'`                             | normal  |
| backgroundColorStr ^(2.87)         | 以字符串形式指定的背景色                                        | ^[string]`'例如黑色：#000000 或者 #ff000000`                                    | -       |
| nextFocusDownSID ^(2.7)            | 向下时指定下一个焦点sid                                       | ^[string]                                                                | -       |
| nextFocusUpSID ^(2.7)              | 向上时指定下一个焦点sid                                       | ^[string]                                                                | -       |
| nextFocusLeftSID ^(2.7)            | 向左时指定下一个焦点sid                                       | ^[string]                                                                | -       |
| nextFocusRightSID ^(2.7)           | 向右时指定下一个焦点sid                                       | ^[string]                                                                | -       |
| nextFocusSID ^(2.7)                | 指定各方向下一个焦点sid                                       | ^[object]`'{left : string, right: string, up: string, down: string}'`    | -       |
| sid ^(2.7)                         | 给一个元素标记一个`string id`，可随意赋值，需确保唯一                    | ^[string]                                                                | -       |
| scrollOverride ^(2.7)              | 当`parent`是`qt-list`等列表时，可以覆写各方向获焦时滚动的值              | ^[object]`'{left number: , right: number, up: number, down: number}'`    | -       |
| skipRequestFocus ^(2.7)            | 忽略组件内自动寻焦（例如聚焦元素丢焦时）                                | ^[boolean]                                                               | false   |
| fadingEdgeLength ^(2.5)            | 淡出效果长度                                              | ^[number]                                                                | 0       |
| horizontalFadingEdgeEnabled ^(2.5) | 开启横向淡出效果                                            | ^[boolean]                                                               | false   |
| verticalFadingEdgeEnabled ^(2.5)   | 开启纵向淡出效果                                            | ^[boolean]                                                               | false   |
| autofocus ^(2.7)                   | 组件内根据状态（`初始化、可见性改变、尺寸改变`)变化自动获焦,focusable为true时自己获焦 | ^[boolean]                                                               | false   |
| renderToHardwareTextureAndroid     | 设置`layerType`为`LAYER_TYPE_HARDWARE`                 | ^[boolean]                                                               | false   |
| viewLayerType                      | 设置`layerType`                                       | ^[enum]`'hardware' \| 'soft' \| 'none'`                                  | -       |
| clipBounds                         | 设置裁剪区域                                              | ^[object]`'{left : number, right: number, top: number, bottom: number}'` | -       |
| descendantFocusability             | 设置子孙组件的可聚焦性策略                                       | ^[enum]`'0：先于子孙' \| '1：子孙之后' \| '2：阻止所有'`                                | -       |
| name                               | 指定元素的`name`                                         | ^[string]                                                                | -       |
| nextFocusName                      | 指定各方向下一个焦点元素的`name`                                 | ^[object]`'{left : string, right: string, up: string, down: string}'`    | -       |
| bringFocusChildToFront             | 是否自动将获焦元素绘制在顶层                                      | ^[boolean]                                                               | false   |
| dispatchChildFocusEvent            | 发送子元素焦点事件                                           | ^[boolean]                                                               | false   |
| selected                           | 选择状态                                                | ^[boolean]                                                               | false   |
| visible                            | 是否可见                                                | ^[boolean]                                                               | false   |
| visibility                         | 可见性                                                 | ^[enum]`'visible' \| 'invisible' \| 'gone'`                              | visible |
| size ^(virtual dom组件中使用)                             | 设置元素大小                                              | ^[array]`[width : number,height : number]`                               | -       |
| layout ^(virtual dom组件中使用)                           | 设置元素位置及大小                                           | ^[array]`[x : number, y : number, width : number,height : number]`       | -       |
| showDialog ^(2.87)                 | 以dialog形式展示或隐藏，`焦点`会自动保存、恢复                         | ^[boolean]                                                               | -       |
| interceptAllKeys                   | 阻止元素内所有key事件                                        | ^[boolean]                                                               | false   |
| enableOverScrollY ^(2.87)          | 开启获焦时纵向自动滚动                                         | ^[boolean]                                                               | false   |
| enableOverScrollX ^(2.87)          | 开启获焦时横向自动滚动                                         | ^[boolean]                                                               | false   |
| selectChildPosition ^(2.87)        | 设置选中子元素位置                                           | ^[number]                                                                | -1      |
| enableSelectOnFocus ^(2.87)        | 开启当焦点时自动设置选中子元素位置                                   | ^[number]                                                                | -1      |
| focusMemory                        | 开启子元素焦点记忆                                           | ^[boolean]                                                               | false   |
| gradientBackground                 | 设置渐变背景色                                             | ^[object]                                                                | false   |
| listenHasFocusChange               | 开启hasFocus事件监听                                      | ^[boolean]                                                               | false   |
| shakeSelf                | 开启焦点终止时抖动                                           | ^[boolean]                                                               | false   |

### Events

| Name              | Description                   | Type                                                              |
|-------------------|-------------------------------|-------------------------------------------------------------------|
| layout            | 当元素挂载或者布局改变的时候调用。   | ^[Function]`(x:number,y:number,width:number,height:number)=>void` |
| focus             | 焦点变化事件                     | ^[Function]`(isFocused : boolean) => void`                        |
| click             | 点击事件                        | ^[Function]`() => void`                                           |
| select            | 选择事件                        | ^[Function]`(isSelected : boolean) => void`                       |
| interceptKeyEvent | 使用`interceptAllKeys`时回调    | ^[Function]`(keyCode : number,action:number) => void`             |
| childFocus        | 子元素焦点变化时回调              | ^[Function]`(child : object,focused:object) => void`              |

### Exposes

| Method                       | Description                    | Type                                                                          |
|------------------------------|--------------------------------|-------------------------------------------------------------------------------|
| requestFocus                 | 请求焦点                         | ^[Function]`() => void`                                                         |
| requestChildFocus            | 请求孩子焦点                      | ^[Function]`(position: number) => void`                                       |
| clearFocus                   | 清除焦点                         | ^[Function]`() => void`                                                       |
| requestFocusDirectly         | 直接请求焦点                      | ^[Function]`(direction?: QTFocusDirection) => void`                                       |
| setVisibility                | 设置是否可见                      | ^[Function]`(v: QTVisibility) => void`                                       |
| requestRootLayout            | 请求根节点重新布局                 | ^[Function]`() => void`                                       |
| requestLayout                | 请求重新布局                      | ^[Function]`() => void`                                       |
| setDescendantFocusability    | 改变子元素获焦策略                 | ^[Function]`(descendant: QTFocusDescendant) => void`                                  |
| changeDescendantFocusability | 改变子元素获焦策略                 | ^[Function]`(descendant: QTDescendantFocusability) => void`                                  |
| forceUpdateRenderNode        | 强制刷新渲染节点                   | ^[Function]`() => void`                                  |
| setBackGroundColor           | 设置背景色                        | ^[Function]`(focusAbility : string) => void`                                  |
| layoutViewManual             | 手动布局界面                      | ^[Function]`() => void`                                  |
| blockRootFocus               | 阻塞焦点                         | ^[Function]`() => void`                                  |
| unBlockRootFocus             | 取消阻塞焦点                      | ^[Function]`() => void`                                  |
| changeAlpha                  | 设置alpha                        | ^[Function]`(alpha :number) => void`                                          |
| setScale                     | 设置形变                          | ^[Function]`(x :number, y :number, duration: number) => void`                                          |
| setPosition                  | 设置位置                          | ^[Function]`(x :number, y :number, z: number) => void`                                          |
| updateLayout                 | 改变布局                          | ^[Function]`(width :number, height:number, x:number, y:number) => void`           |
| invalidate                   | 刷新布局                          | ^[Function]`() => void`|
| dispatchFunctionForTarget    | 调用目标的方法                     | ^[Function]`(targetName: string, functionTargetName: string, params: Array<QTNativeParams>, delay: number) => void`|
| setBlockFocusDirections      | 设置阻塞焦点的方向                  | ^[Function]`(directionList: Array<QTFocusDirectionName>) => void`|
| setBlockFocusDirectionsOnFail| 失败的时候设置阻塞焦点的方向          | ^[Function]`(directionList: Array<QTFocusDirectionName>) => void`|
| setInitFocus                 | 设置初始焦点                       | ^[Function]`(delay?: number) => void`|
| setAutoFocus                 | 设置自动焦点                       | ^[Function]`(delay?: number) => void`|
| enabledAutofocus             | 设置自动焦点是否可用                 | ^[Function]`(autofocus: boolean) => void`|
| requestAutofocus             | 请求自动焦点                       | ^[Function]`() => void`|
| hasFocus                     | 是否有焦点                         | ^[Function]`() => Promise<boolean>`|
| isFocused                    | 是否获得了焦点                      | ^[Function]`() => Promise<boolean>`|
| getLocationOnScreen          | 获取在屏幕上的位置                   | ^[Function]`() => Promise<QTEventData<QTLocation>>`|
| getViewState                 | 获取视图的状态                      | ^[Function]`() => Promise<QTViewState>`|
| getChildViewState            | 获取孩子视图的状态                   | ^[Function]`(position: number) => Promise<QTViewState>`|
| changeVisibility             | 设置可见性                        | ^[Function]`(visibility : string) => void visibility: visible、invisible、gone`|
| requestChildFocusAtIndex     | 请求`index`值子元素焦点            | ^[Function]`(index:number) => void`                                           |
| clearMemoryFocused           | 清除记忆的焦点                     | ^[Function]`() => void`                                                       |
