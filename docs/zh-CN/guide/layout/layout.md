---
title: 'Layout'
lang: zh-CN
---

# 布局

* [点击查看支持的布局](/zh-CN/css/overview)
* [点击查看布局样式相关问题](/zh-CN/guide/faq/layout-style-faq)

::: warning 注意：
* ***布局中基础组件都需要明确指定组件的宽高尺寸***

* ***仅使用 px 来设定单位。暂不支持百分比等其它的长度值，只支持具体数值。***
:::

## 盒子模型

布局样式用`CSS`的盒模型构建。 绘制布局的时，引擎会根据 `CSS-Box` 模型将所有元素表示为一个矩形盒子，样式配置决定这些盒子的`大小`，`位置`以及`属性` （颜色，背景，边框尺寸...)。
使用标准盒模型描述这些矩形盒子中的每一个元素。
这个模型描述了元素所占空间的内容。每个盒子有四个边：`外边距边`, `边框边`, `内填充边` 与 `内容边`。

[box-sizing参考文档](https://developer.mozilla.org/zh-CN/docs/Web/CSS/box-sizing)


<img src="/guide/layout/border-box.png">

## 布局（Flex）

默认采用现在移动端最流行的 `Flex` 布局。
因为仅支持 `Flex` 布局，所以不需要手写 `display: flex` 即可使用。
`Flex` 布局与 `Web` 的 `Flex` 类似，它们都旨在提供一个更加有效的方式制定、调整和分布一个容器里的项目布局，即使他们的大小是未知或者是动态的。
`Flex` 规定了弹性元素如何伸长或缩短，以适应`flex容器`中的可用空间。

[CSS教程文档参考](https://www.w3cplus.com/css3/a-visual-guide-to-css3-flexbox-properties.html)

::: warning 注意：

***1、默认使用 flex 布局***

***2、flex 布局中`flex-direction`默认值为`column`***
:::
