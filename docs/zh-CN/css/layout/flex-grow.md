---
title: FlexGrow
lang: zh-CN
---

# flexGrow

`flexGrow` 定义伸缩项目的扩展能力。它接受一个不带单位的值做为一个比例。主要用来决定伸缩容器剩余空间按比例应扩展多少空间。

如果所有伸缩项目的 `flex-grow` 设置了 `1`，那么每个伸缩项目将设置为一个大小相等的剩余空间。如果你给其中一个伸缩项目设置了 `flex-grow` 值为 `2`
，那么这个伸缩项目所占的剩余空间是其他伸缩项目所占剩余空间的两倍。 默认值为 `0`

| Name               | Description      | Type                         | Default |
|--------------------|------------------|------------------------------| ------- |
| flexGrow         |[MDN 文档](http://developer.mozilla.org/zh-CN/docs/Web/CSS/flex-grow) | ^[number]| - |
