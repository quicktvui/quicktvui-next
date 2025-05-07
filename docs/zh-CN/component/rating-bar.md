---
title: RatingBar
lang: zh-CN
---

# RatingBar ^(2.9)^(alpha)

:::demo ## 基础用法

component/rating-bar/basic

:::

## API

### Attributes

| Name                  | Description | Type               | Default |
|-----------------------|-------------|--------------------|---------|
| icon                  | 高亮图         | ^[string]          | —       |
| voidIcon              | 默认底图        | ^[string]          | -       |
| allow-half            | 是否支持半角评价    | ^[string]          | -       |
| max                   | 设置最大图片数量    | ^[number]          | 5       |
| size                  | 设置最大图片大小    | ^[number]          | 30      |
| iconDistance          | 设置图片间距      | ^[number]          | 10      |
| duplicateParentState  | 继承父类的状态     | ^[boolean]         | false   |
| enableFocusBorder     | 激活边框        | ^[boolean]         | false   |
| horizontalMargin      | 组件距离父组件横向间距 | ^[number]          | 0       |
| verticalMargin        | 组件距离父组件纵向间距 | ^[number]          | 0       |
| disabled              | 是否禁用        | ^[boolean]        | false   |

### Callback

| Method         | Description | 返回类型                       |
| -------------- |-------------| ------------------------------ |
| onScoreChanged | 评价积分变化      | `{scoreNum: 'xxx'}` |

### Exposes

| Method           | Description   | Type                                                                   |
|------------------|---------------|------------------------------------------------------------------------|
| setStarMark      | 设置评价值(数字或字符串) | ^[Function]`(mark: string/number) => void`                      |

