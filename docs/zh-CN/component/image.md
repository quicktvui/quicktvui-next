---
title: Image
lang: zh-CN
---

# Image

::: tip 关于图片资源打包
[点击查看详细](/zh-CN/guide/compile/resource)
:::

## 网络图片

`<qt-image src="图片地址"/>`

:::demo

component/image/network

:::

## 本地图片

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

component/image/assets

:::

## API

### Attributes

| Name                           | Description                                         | Type                                                                   | Default |
|--------------------------------|-----------------------------------------------------|------------------------------------------------------------------------| ------- |
| src                            | 图片地址                                                | ^[string]                                                              | —       |
| backgroundColor                | 图片背景颜色                                              | ^[number]                                                              | —       |
| loadDelay                      | 延迟加载                                                | ^[number]                                                              | —       |
| focusable                      | 是否可以获得焦点                                            | ^[boolean]                                                             | false   |
| clipChildren                   | 裁剪子布局                                               | ^[boolean]                                                             | false   |
| clipPadding                    | 从padding区域向外裁剪                                      | ^[boolean]                                                             | false   |
| enableFocusBorder              | 是否显示焦点框                                             | ^[boolean]                                                             | false   |
| focusScale                     | 焦点放大倍数                                              | ^[number]                                                              | 1.1     |
| duplicateParentState           | 继承父类的状态                                             | ^[boolean]                                                             | false   |
| showOnState                    | 在指定状态显示                                             | ^[enum]`'normal' \| 'selected' \| 'focused'`                           | normal  |
| backgroundColorStr ^(2.87)     | 以字符串形式指定的背景色                                        | ^[string]`'例如黑色：#000000 或者 #ff000000'`                                 | -       |
| nextFocusDownSID ^(2.7)        | 向下时指定下一个焦点sid                                       | ^[string]                                                              | -       |
| nextFocusUpSID ^(2.7)          | 向上时指定下一个焦点sid                                       | ^[string]                                                              | -       |
| nextFocusLeftSID ^(2.7)        | 向左时指定下一个焦点sid                                       | ^[string]                                                              | -       |
| nextFocusRightSID ^(2.7)       | 向右时指定下一个焦点sid                                       | ^[string]                                                              | -       |
| nextFocusSID ^(2.7)            | 指定各方向下一个焦点sid                                       | ^[object]`'{left : string, right: string, up: string, down: string}'`  | -       |
| sid ^(2.7)                     | 给一个元素标记一个`string id`，可随意赋值，需确保唯一                    | ^[string]                                                              | -       |
| autofocus ^(2.7)               | 组件内根据状态（`初始化、可见性改变、尺寸改变`)变化自动获焦,focusable为true时自己获焦 | ^[boolean]                                                             | false   |
| viewLayerType                  | 设置`layerType`                                       | ^[enum]` 'hardware' \| 'soft' \| 'none'`                              | -       |
| clipBounds                     | 设置裁剪区域                                              | ^[object]`'{left : number, right: number, top: number, bottom: number}'` | -       |
| name                           | 指定元素的`name`                                         | ^[string]                                                              | -       |
| nextFocusName                  | 指定各方向下一个焦点元素的`name`                                 | ^[object]`'{left : string, right: string, up: string, down: string}'`  | -       |
| focusScaleDuplicateParentState | 焦点放大继承父类的状态                                         | ^[boolean]                                                             | false   |
| selected                       | 选择状态                                                | ^[boolean]                                                             | false   |
| visible                        | 是否可见                                                | ^[boolean]                                                             | false   |
| visibility                     | 可见性                                                 | ^[enum]`'visible' \| 'invisible' \| 'gone'`                            | visible |
| size                           | 设置元素大小                                              | ^[array]`[width : number,height : number]`                             | -       |
| layout                         | 设置元素位置及大小                                           | ^[array]`[x : number, y : number, width : number,height : number]`     | -       |
| enableFade ^(2.87)             | 开启图片加载淡入效果                                          | ^[boolean]                                                             | false   |
| fadeDuration ^(2.87)          | 淡入效果时间                                              | ^[number]                                                              | 200ms   |
| postDelay                      | 延迟图片加载以优化性能                                         | ^[number]                                                              | 0ms     |
| colorFilter ^(2.6)            | colorFilter                                         | ^[number]`'0 or 1'`                                                    | -       |
| tintColor ^(2.6)          | tintColor                                           | ^[number]                                                              | -       |
| resizeMode                     | resizeMode                                          | ^[string]`contain \| center \| origin \| repeat`                       | -       |

### Exposes

| Method                       | Description                    | Type                                                                          |
|------------------------------|--------------------------------|-------------------------------------------------------------------------------|
| setSrc                       | 设置图片地址                      | ^[Function]`(url: string) => void`                |
| resizeMode                   | 重置尺寸模式                      | ^[Function]`(mode: QTImageResizeMode) => void`    |
