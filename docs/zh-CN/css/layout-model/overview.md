---
title: LayoutModel
lang: zh-CN
---

# 布局模型

## CSS 布局模型速查表

| Layout Model         | 说明                                                       | 典型属性/用法                                          | 是否支持     |
|----------------------|------------------------------------------------------------|------------------------------------------------------|------------|
| 块级布局（Block）      | 元素在垂直方向排列，宽度默认撑满父元素                     | `display: block;`                                     | ❌         |
| 内联布局（Inline）     | 元素水平排列，占据内容宽度，不换行                         | `display: inline;`                                    | ❌         |
| 内联块布局（Inline-Block） | 行内元素特性，支持宽高和边距设置                            | `display: inline-block;`                              | ❌         |
| 弹性盒布局（Flexbox）  | 一维布局，灵活分配空间和对齐                               | `display: flex;`, `justify-content`, `align-items`  | ✅         |
| 网格布局（Grid）       | 二维布局，支持行和列同时控制                               | `display: grid;`, `grid-template-columns`             | ❌         |
| 定位布局（Positioning）| 通过 `position` 属性控制元素相对或绝对定位                 | `position: static/relative/absolute/fixed/sticky;`   | ✅         |
| 浮动布局（Float）      | 利用浮动实现文本环绕或元素排布                            | `float: left/right;`, `clear`                         | ❌         |
| 多列布局（Multi-column）| 将内容分割成多列显示                                       | `column-count`, `column-gap`                          | ❌         |
| 表格布局（Table）      | 使用表格样式进行布局                                       | `display: table`, `table-row`, `table-cell`          | ❌         |
| 粘性布局（Sticky）     | 元素根据滚动位置在 `relative` 和 `fixed` 之间切换           | `position: sticky;`                                   | ❌         |
