---
title: Poster
lang: zh-CN
---

# Poster

:::demo ## 基础用法

component/poster/basic

:::

:::demo ## 间距

component/poster/decoration

:::

:::demo ## 主标题

component/poster/title

:::

:::demo ## 次标题

component/poster/sub-title

:::

:::demo ## 浮动标题

component/poster/float-title

:::

:::demo ## 角标

component/poster/corner

:::

:::demo ## 评分

component/poster/score

:::

:::demo ## 阴影

component/poster/shadow

:::

:::demo ## 高光

component/poster/shimmer

:::

:::demo ## 水波

component/poster/ripple

:::

## API

### DataStructure

用来描述海报信息

| Name         | Description       | Type                                                    |   Default   |
| ------------ | ------------------| --------------------------------------------------------|---------|
| focus        | 焦点               | ^[QTFocusable]                                          |   否    |
| image        | 图片               | ^[QTPosterImage]                                        |   否    |
| shadow       | 阴影               | ^[QTPosterShadow]                                       |   否    |
| shimmer      | 流光               | ^[QTPosterShimmer]                                      |   否    |
| title        | 标题               | ^[QTPosterTitle]                                        |   否    |
| focusTitle   | 焦点状态标题         | ^[QTPosterTitle]                                        |   否    |
| subTitle     | 副标题              | ^[QTPosterTitle]                                        |   否    |
| floatTitle   | 浮动标题            | ^[QTPosterTitle]                                         |   否    |
| ripple       | 水波纹             | ^[QTPosterRipple]                                        |   否    |
| corner       | 角标               | ^[QTPosterCorner]                                        |   否    |
| score        | 评分               | ^[QTPosterScore]                                          |   否    |
| titleStyle   | 标题样式            | ^[QTFlexStyleMargin & QTFlexStylePadding & QTFlexStyleSize]|   否    |
| titleFocusStyle| 焦点状态标题样式   | ^[QTFlexStyleMargin & QTFlexStylePadding & QTFlexStyleSize] |   否    |

### Attributes

| Name                            | Description       | Type                 | Default |
| ------------------------------- | ----------------- | ---------------------| ------- |
| requestFirstFocus               | 请求焦点            | ^[boolean]           | false   |
| loadDelay                       | 加载延迟事件         | ^[number]            | 500     |
| type                            | 类型                | ^[number]            | 10001   |
| borderRadius                    | 圆角                | ^[number]            | 8       |
| rippleColor                     | 水波纹颜色           | ^[string]            | -       |
| focusBgColor                    | 焦点背景色           | ^[QTGradient]        | -       |
| focusTitleColor                 | 标题焦点色           | ^[string]            | -       |
| focusSubTitleColor              | 副标题焦点色         | ^[string]            | -       |
| floatTitleBgColor               | 浮动标题背景色       | ^[object]`string[]`            | -       |
