---
title: img
lang: zh-CN
---

# img

## 网络图片

`<img src="图片地址"/>`

:::demo

component/img/network

:::

## 本地图片

::: tip 关于本地图片资源打包 file-loader 和 url-loader
[点击查看详细](/zh-CN/guide/compile/resource)
:::

```ts
import logoImg from '../../assets/logo.png'

export default defineComponent({
  setup() {
    return {
      logoImg,
    }
  },
});
```

:::demo

component/img/assets

:::

## API

### Attributes

| Name                           | Description                                         | Type                                                                   | Default |
|--------------------------------|-----------------------------------------------------|------------------------------------------------------------------------|---------|
| src                  | 图片地址            | ^[string]                                                                    | —       |
| focusable                      | 是否可以获得焦点                                            | ^[boolean]                                                             | false   |
| clipChildren                   | 裁剪子布局                                               | ^[boolean]                                                             | false   |
| clipPadding                    | 从padding区域向外裁剪                                      | ^[boolean]                                                             | false   |
| enableFocusBorder              | 是否显示焦点框                                             | ^[boolean]                                                             | false   |
| focusScale                     | 焦点放大倍数                                              | ^[number]                                                              | 1.1     |
| duplicateParentState           | 继承父类的状态                                             | ^[boolean]                                                             | false   |
| showOnState                    | 在指定状态显示                                             | ^[enum]`'normal' \| 'selected' \| 'focused'`                           | normal  |
| backgroundColorStr ^(2.87)     | 以字符串形式指定的背景色                                        | ^[string]`'例如黑色：#000000 或者 #ff000000`                                  | -       |
| nextFocusDownSID ^(2.7)        | 向下时指定下一个焦点sid                                       | ^[string]                                                              | -       |
| nextFocusUpSID ^(2.7)          | 向上时指定下一个焦点sid                                       | ^[string]                                                              | -       |
| nextFocusLeftSID ^(2.7)        | 向左时指定下一个焦点sid                                       | ^[string]                                                              | -       |
| nextFocusRightSID ^(2.7)       | 向右时指定下一个焦点sid                                       | ^[string]                                                              | -       |
| nextFocusSID ^(2.7)            | 指定各方向下一个焦点sid                                       | ^[object]`'{left : string, right: string, up: string, down: string}'`  | -       |
| sid ^(2.7)                     | 给一个元素标记一个`string id`，可随意赋值，需确保唯一                    | ^[string]                                                              | -       |
| autofocus ^(2.7)               | 组件内根据状态（`初始化、可见性改变、尺寸改变`)变化自动获焦,focusable为true时自己获焦 | ^[boolean]                                                             | false   |
| viewLayerType                  | 设置`layerType`                                       | ^[enum]`'hardware' \| 'soft' \| 'none'`                              | -       |
| clipBounds                     | 设置裁剪区域                                              | ^[object]`'{left : number, right: number, top: number, bottom: number}'` | -       |
| name                           | 指定元素的`name`                                         | ^[string]                                                              | -       |
| nextFocusName                  | 指定各方向下一个焦点元素的`name`                                 | ^[object]`'{left : string, right: string, up: string, down: string}'`  | -       |
| focusScaleDuplicateParentState | 焦点放大继承父类的状态                                         | ^[boolean]                                                             | false   |
| selected                       | 选择状态                                                | ^[boolean]                                                             | false   |
| visible                        | 是否可见                                                | ^[boolean]                                                             | false   |
| visibility                     | 可见性                                                 | ^[enum]`'visible' \| 'invisible' \| 'gone'`                            | visible |
| size                           | 设置元素大小                                              | ^[array]`[width : number,height : number]`                             | -       |
| layout                         | 设置元素位置及大小                                           | ^[array]`[x : number, y : number, width : number,height : number]`     | -       |
| enableFade ^(2.87)             | 开启图片加载淡入效果                                          | ^[boolean]     | false   |
| fadeDuration ^(2.87)          | 淡入效果时间                                         | ^[number]      | 200ms   |
| postDelay                      | 延迟图片加载以优化性能                                         | ^[number]      | 0ms     |
| colorFilter ^(2.6)            | colorFilter                                         | ^[number]`0 \| 1`                                                      | -       |
| tintColor ^(2.6)                | tintColor                                           | ^[number]                                                              | -       |
| resizeMode                     | resizeMode                                          | ^[string]`contain \| center \| origin \| repeat`                       | -       |

### Events

| Name  | Description      | Type                                                              |
| ------| ---------------- |-------------------------------------------------------------------|
| layout   | 当元素挂载或者布局改变的时候调用。 | ^[Function]`(x:number,y:number,width:number,height:number)=>void` |
| load     | 加载成功完成时调用此回调函数。                               | ^[Function]`()=>void`                                                 |
| loadStart | 加载开始时调用。 | ^[Function]`()=>void`                                                        |
| loadEnd  | 加载结束后，不论成功还是失败，调用此回调函数。               | ^[Function]`(success:boolean,image:any)=>void`                      |
| error    | 当加载错误的时候调用此回调函数。| ^[Function]`()=>void`                                                        |
| progress | 当加载错误的时候调用此回调函数。 | ^[Function]`()=>void`                                                        |

### Exposes

| Method                       | Description                    | Type                                                                          |
|------------------------------|--------------------------------|-------------------------------------------------------------------------------|
| setSrc                       | 设置图片地址                      | ^[Function]`(url: string) => void`                |
| resizeMode                   | 重置尺寸模式                      | ^[Function]`(mode: QTImageResizeMode) => void`    |
| requestFocus                 | 请求焦点                         | ^[Function]`() => void`    |
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
| updateLayout                 | 改变布局                          | ^[Function]`(width :number, height:number, x:number, y:number) => void`           |
| invalidate                   | 刷新布局                          | ^[Function]`() => void`|
| setBlockFocusDirections      | 设置阻塞焦点的方向                  | ^[Function]`(directionList: Array<QTFocusDirectionName>) => void`|
| setBlockFocusDirectionsOnFail| 失败的时候设置阻塞焦点的方向          | ^[Function]`(directionList: Array<QTFocusDirectionName>) => void`|
| hasFocus                     | 是否有焦点                         | ^[Function]`() => Promise<boolean>`|
| isFocused                    | 是否获得了焦点                      | ^[Function]`() => Promise<boolean>`|
| getLocationOnScreen          | 获取在屏幕上的位置                   | ^[Function]`() => Promise<QTEventData<QTLocation>>`|
| getViewState                 | 获取视图的状态                      | ^[Function]`() => Promise<QTViewState>`|
| getChildViewState            | 获取孩子视图的状态                   | ^[Function]`(position: number) => Promise<QTViewState>`|
| changeVisibility             | 设置可见性                        | ^[Function]`(visibility : string) => void visibility: visible、invisible、gone`|
