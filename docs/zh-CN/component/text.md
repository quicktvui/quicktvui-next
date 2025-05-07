---
title: Text
lang: zh-CN
---

# Text

::: warning 注意：文本标签需要设置宽高尺寸才能正确显示。
:::

## 基础用法

:::demo

component/text/basic

:::

## gravity

* `center`
* `top`
* `bottom`
* `end`
* `centerHorizontal`
* `centerVertical`
* `start`

<img src="/component/text/gravity.jpg" />

:::demo

component/text/gravity

:::

## ellipsizeMode

::: warning 注意：

* 必须设置属性`:maxLines="1"`
* `:ellipsizeMode="3"`时，必须设置属性`:select="true"`
  :::

`ellipsizeMode`:

* `0: start`
* `1: middle`
* `2: end`
* `3: marqeue`
* `4: marquee on focus`

<img src="/component/text/ellipsize-mode.jpg" />


:::demo

component/text/ellipsize-mode

:::

## API

### Attributes

| Name                           | Description       | Type                                                                                                 | Default |
|--------------------------------| ----------------- |------------------------------------------------------------------------------------------------------|---------|
| text                           | 文字内容            | ^[string]                                                                                            | —       |
| lineSpacing                    | 行间距              | ^[number]                                                                                            | —       |
| textHtml                       | html格式文字        | ^[string]                                                                                            | —       |
| typeface                       | 字体               | ^[enum]`'bold' \| 'italic' \| 'normal' `                                                             | normal  |
| gravity                        | 重心               | ^[enum]`'center' \| 'top' \| 'bottom' \| 'end' \| 'centerHorizontal' \| 'centerVertical' \| 'start'` | center  |
| fontSize                       | 字体大小            | ^[number]                                                                                            | —       |
| paddingRect                    | 边距               | ^[object]`number[]`                                                                                  | —       |
| textAlignment                  | 对齐               | ^[number]`0 \| 1 \| 2 \| 3 \| 4 \| 5 \| 6`                                                           | —       |
| ellipsizeMode                  | 省略模式            | ^[number]`0 (start)\| 1 (middle) \| 2(end) \| 3(marqeue) \| 4(marquee on focus)`                     | —       |
| lines                          | 行数               | ^[number]                                                                                            | —       |
| maxLines                       | 最大行数            | ^[number]                                                                                            | —       |
| textColor                      | 文字颜色            | ^[string]                                                                                            | —       |
| focusColor                     | 焦点文字颜色         | ^[string]                                                                                            | —       |
| selectColor                    | 选中文字颜色         | ^[string]                                                                                            | —       |
| backgroundColor                | 背景颜色            | ^[string]                                                                                            | —       |
| maxWidth                       | 最大宽度            | ^[number]                                                                                            | —       |
| textSize                       | 文字大小            | ^[number]                                                                                            | —       |
| lineHeight                     | 行高               | ^[number]                                                                                            | —       |
| select                         | 选中               | ^[boolean]                                                                                           | —       |
| autoWidth ^(virtual dom组件中使用) | 宽度自适应                                               | ^[boolean]                                                                                           | false   |
| autoHeight ^(virtual dom组件中使用)                    | 高度自适应                                               | ^[boolean]                                                                                           | false   |
| focusable                      | 是否可以获得焦点      | ^[boolean]                                                                                           | false   |
| duplicateParentState           | 继承父类的状态        | ^[boolean]                                                                                           | false   |
| gradientBackground             | 渐变背景色           | ^[QTGradient]                                                                                        | false   |
| showOnState                    | 在指定状态显示        | ^[enum]`'normal' \| 'selected' \| 'focused'`                                                         | normal  |
| nextFocusDownSID ^(2.7)        | 向下时指定下一个焦点sid                                       | ^[string]                                                                                            | -       |
| nextFocusUpSID ^(2.7)          | 向上时指定下一个焦点sid                                       | ^[string]                                                                                            | -       |
| nextFocusLeftSID ^(2.7)        | 向左时指定下一个焦点sid                                       | ^[string]                                                                                            | -       |
| nextFocusRightSID ^(2.7)       | 向右时指定下一个焦点sid                                       | ^[string]                                                                                            | -       |
| nextFocusSID ^(2.7)            | 指定各方向下一个焦点sid                                       | ^[object]`'{left : string, right: string, up: string, down: string}'`                                | -       |
| sid ^(2.7)                     | 给一个元素标记一个`string id`，可随意赋值，需确保唯一                    | ^[string]                                                                                            | -       |
| viewLayerType                  | 设置`layerType`                                       | ^[enum]` 'hardware' \| 'soft' \| 'none'`                                                            | -       |
| clipBounds                     | 设置裁剪区域                                              | ^[object]`'{left : number, right: number, top: number, bottom: number}'`                             | -       |
| name                           | 指定元素的`name`                                         | ^[string]                                                                                            | -       |
| nextFocusName                  | 指定各方向下一个焦点元素的`name`                                 | ^[map]`'{left : string, right: string, up: string, down: string}'`                                   | -       |
| visible                        | 是否可见                                                | ^[boolean]                                                                                           | false   |
| visibility                     | 可见性                                                 | ^[enum]`'visible' \| 'invisible' \| 'gone'`                                                          | visible |
| size ^(virtual dom组件中使用)                      | 设置元素大小                                              | ^[array]`[width : number,height : number]`                                                           | -       |
| layout ^(virtual dom组件中使用)                     | 设置元素位置及大小                                           | ^[array]`[x : number, y : number, width : number,height : number]`                                   | -       |

### Exposes

| Method                       | Description                    | Type                                                                          |
|------------------------------|--------------------------------|-------------------------------------------------------------------------------|
| setText                      | 设置文本                         | ^[Function]`(text: string) => void` |
| setTextSize                  | 设置文字大小                         | ^[Function]`(size: number) => void` |
| setTextColor                 | 设置文字颜色                         | ^[Function]`(color: string) => void` |
| textSpan                     | 设置文字                         | ^[Function]`(span: QTTextSpan) => void` |
