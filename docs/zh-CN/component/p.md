---
title: p
lang: zh-CN
---

# p

::: warning 注意：p标签需要设置宽高尺寸才能正确显示。
:::

## 基础用法

:::demo

component/p/basic

:::

## gravity

* `center`
* `left`
* `right`

<img src="/component/p/gravity.jpg" />

:::demo

component/p/gravity

:::

## API

### Attributes

| Name                | Description        | Type                                                                    | Default      |
| ------------------- | -------------------|-------------------------------------------------------------------------|--------------|
| focusable           | 是否可以获得焦点      | ^[boolean]                                                              | false        |
| duplicateParentState | 继承父类的状态        | ^[boolean]                                                              | false        |
| sid ^(2.7)                        | 给一个元素标记一个`string id`，可随意赋值，需确保唯一                    | ^[string]                                                               | -            |
| viewLayerType                     | 设置`layerType`                                       | ^[enum]`'hardware' \| 'soft' \| 'none'`                                 | -            |
| clipBounds                        | 设置裁剪区域                                              | ^[object]`'{left : number, right: number, top: number, bottom: number}'` | -            |
| name                              | 指定元素的`name`                                         | ^[string]                                                               | -            |
| selected                          | 选择状态                                                | ^[boolean]                                                              | false        |
| visible                           | 是否可见                                                | ^[boolean]                                                              | false        |
| visibility                        | 可见性                                                 | ^[enum]`'visible' \| 'invisible' \| 'gone'`                             | visible      |
| size                              | 设置元素大小                                              | ^[array]`[width : number,height : number]`                              | -            |
| layout                            | 设置元素位置及大小                                           | ^[array]`[x : number, y : number, width : number,height : number]`      | -            |
| textColor           | 文字颜色            | ^[string]                                                               | —            |
| focusColor          | 焦点文字颜色         | ^[string]                                                               | —            |
| selectColor         | 选中文字颜色         | ^[string]                                                               | —            |
| numberOfLines | 用来当文本过长的时候裁剪文本。包括折叠产生的换行在内，总的行数不会超过这个属性的限制。 | `number`                                                                | —            |
| ellipsizeMode | 当设定了 `numberOfLines` 值后，这个参数指定了字符串如何被截断。所以，在使用 `ellipsizeMode` 时，必须得同时指定 `numberOfLines` 数值。 | ^[enum]`head \| middle \| tail \| clip`                                 |—       |

