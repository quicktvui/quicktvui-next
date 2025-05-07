---
title: 'Style'
lang: zh-CN
---

# 样式

* [点击查看支持的样式](/zh-CN/css/overview)
* [点击查看布局样式相关问题](/zh-CN/guide/faq/layout-style-faq)

::: warning 注意：
* ***布局中基础组件都需要明确指定组件的宽高尺寸***

* ***仅使用 px 来设定单位。暂不支持百分比等其它的长度值，只支持具体数值。***
  :::

## 样式主要依靠 css、sass、less 样式来实现。

::: warning 注意：目前仅支持基本的 ID、Class、Tag 选择器，而且可以支持基本的嵌套关系，其余选择器和 scoped 还未支持。
:::

```vue

<div class="div" />
```

```css

.div {
  width: 100px;
  height: 100px;
  background-color: red;
}
```

## 只支持部分CSS样式

::: warning 注意：

***1、不支持的 CSS 样式如下：***
* `background`
* `% 百分比尺寸`
* `auto`
* `!important`

***2、不支持 CSS 自定义属性（变量）：***

```css
element {
  background-color: var(--main-bg-color);
}
```

***3、不支持 CSS 复合属性写法：***

```css
element {
  margin: 5px 10px 20px 15px;
  padding: 5px 10px;
  font: oblique bold 16px Helvetica, Arial, Sans-Serif;
  border: 2px 5px 10px 3px;
}
```
:::
