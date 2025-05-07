---
title: Button
lang: zh-CN
---

# Button

<img src="/component/button/button_component.png" />

:::demo ## 基础用法

component/button/basic

:::

:::demo ## 不同尺寸

component/button/size

:::

:::demo ## 自定义按钮样式

component/button/custom-style

:::

:::demo ## 禁用状态

component/button/disabled

:::

:::demo ## 圆角按钮

component/button/round

:::

:::demo ## 正方形按钮

component/button/square

:::

:::demo ## 渐变背景

component/button/background

:::

:::demo ## 自定义文字样式

component/button/custom-text

:::

:::demo ## 自定义按钮内容

component/button/custom-content

:::

:::demo ## 自定义本地图标

component/button/custom-icon

:::

:::demo ## 自定义网络图标

component/button/custom-net-icon

:::

:::demo ## 带边框

component/button/border

:::

:::demo ## 自定义图标样式

component/button/custom-icon-style

:::

## API

### Attributes

| Name                            | Description       | Type                                                           | Default  |
| ------------------------------- | ----------------- | --------------------------------------------------------------  | ------- |
| size                            | 尺寸               | ^[enum]`'default' \| 'large' \| 'medium' \| 'small'\| 'mini'`  | default  |
| itemType                        | 类型               | ^[number]                                                      | 20000    |
| focusBorder                     | 是否显示边框         | ^[boolean]                                                     | false   |
| focusScale                      | 焦点放大倍数         | ^[number]                                                      | 1.08    |
| focusable                       | 是否可以获得焦点      | ^[boolean]                                                     | true    |
| enableFlexStyle                 | 是否支持flex样式     | ^[boolean]                                                     | false   |
| icon                            | 标准状态图标         | ^[string]                                                      | -       |
| focusIcon                       | 焦点状态图标         | ^[string]                                                      | -       |
| text                            | 按钮的文本           | ^[string]                                                      | -       |
| gradientFocusBackground         | 焦点状态背景颜色      | ^[QTGradient]                                                  | -       |
| gradientSelectedBackground      | 选中状态背景颜色      | ^[QTGradient]                                                  | -       |
| gradientBackground              | 标准背景颜色         | ^[QTGradient]                                                  | -       |
| disabled                        | 是否显示可用样式      | ^[boolean]                                                     | false   |
| round                           | 是否显示圆角样式      | ^[boolean]                                                     | false   | | -       |

### Events

| Name  | Description      | Type                                        |
| ------| ---------------- | ------------------------------------------- |
| focus | 焦点变化事件       | ^[Function]`(isFocused: boolean) => void`   |
| click | 点击事件          | ^[Function]`() => void`                     |

### Slots

| Name        | Description             |
| ----------- | ----------------------- |
| default     | 自定义默认内容             |
