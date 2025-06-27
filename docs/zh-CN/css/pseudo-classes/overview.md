---
title: PseudoClasses
lang: zh-CN
---

# 伪类

## CSS 伪类速查表

| 伪类名称             | 中文名称         | 说明                                                                 | 是否支持 |
|----------------------|------------------|----------------------------------------------------------------------|-----------|
| `:focus`             | 获取焦点         | 元素获得焦点时触发（如输入框）                                      | ✅        |
| `:first-child`       | 第一个子元素     | 父元素下的第一个子元素                                               | ✅        |
| `:last-child`        | 最后一个子元素   | 父元素下的最后一个子元素                                             | ✅        |
| `:nth-child(n)`      | 第 n 个子元素    | 匹配父元素下第 n 个子元素                                            | ✅        |
| `:empty`             | 空元素           | 没有子元素（不含文本/空格）的元素                                   | ✅        |
| `:not(selector)`     | 非某类选择器     | 匹配不符合选择器的元素                                               | ✅        |
| `:hover`             | 悬停状态         | 鼠标悬停在元素上时触发                                               | ❌        |
| `:active`            | 激活状态         | 元素被激活（如按钮点击中）时触发                                    | ❌        |
| `:visited`           | 已访问链接       | 表示用户访问过的链接                                                 | ❌        |
| `:link`              | 未访问链接       | 表示尚未访问的链接                                                   | ❌        |
| `:checked`           | 选中状态         | 复选框或单选框被选中时                                                | ❌        |
| `:disabled`          | 禁用状态         | 表示元素被禁用                                                       | ❌        |
| `:enabled`           | 启用状态         | 表示元素处于启用状态                                                 | ❌        |
| `:nth-last-child(n)` | 倒数第 n 个子元素| 匹配父元素下倒数第 n 个子元素                                        | ❌        |
| `:first-of-type`     | 类型中第一个     | 同类型元素中的第一个                                                 | ❌        |
| `:last-of-type`      | 类型中最后一个   | 同类型元素中的最后一个                                               | ❌        |
| `:nth-of-type(n)`    | 类型中第 n 个    | 同类型元素中的第 n 个                                                | ❌        |
| `:root`              | 根元素           | HTML 文档中的 `<html>` 元素                                          | ❌        |
| `:target`            | URL 目标元素     | 当前 URL 哈希值匹配的元素（如锚点跳转）                              | ❌        |
| `:required`          | 必填字段         | 表单中设置了 `required` 属性的字段                                   | ❌        |
| `:optional`          | 非必填字段       | 表单中未设置 `required` 的字段                                       | ❌        |
| `:valid`             | 有效字段         | 表单字段通过验证                                                     | ❌        |
| `:invalid`           | 无效字段         | 表单字段未通过验证                                                   | ❌        |
| `:in-range`          | 范围内字段       | 输入值在设定范围内                                                   | ❌        |
| `:out-of-range`      | 范围外字段       | 输入值超出设定范围                                                   | ❌        |
| `:read-only`         | 只读元素         | 表示不可编辑的输入元素                                               | ❌        |
| `:read-write`        | 可读写元素       | 表示可编辑的输入元素                                                 | ❌        |
| `:is()`              | 多选择器匹配     | 接受多个选择器，匹配任一即可（CSS4 新增）                            | ❌ |
| `:where()`           | 不影响权重匹配   | 类似 `:is()`，但不增加 specificity                                   | ❌ |
| `:has()`             | 父级选择器       | 选择包含某些子元素的父元素（CSS4 特性）                              | ❌ |


## 二、伪类指令`v-pseudo`

`v-pseudo`是元素标签上用来控制是否启用对应的伪类的指令。

### 1、自定义伪类指令`test`

`v-pseudo:test="value"`

```vue

<div
  v-pseudo:test='value'
  class='div-v-pseudo-css'
  :focusable='true'
  :enableFocusBorder='true'
  :focusScale='1'
  @focus='onFocus'
/>
```

### 2、编写伪类`test`

```css
.div-v-pseudo-css:test {
  width: 384px;
  height: 216px;
  margin: 20px;
  background: palevioletred;
}
```

:::demo ## 完整示例

css/pseudo-classes/v-pseudo

:::
