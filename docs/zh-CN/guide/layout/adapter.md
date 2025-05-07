---
title: 'Adapter'
lang: zh-CN
---

# 适配

## 开发尺寸

::: warning 注意： 实际中根据 1920x1080 的开发尺寸进行设计、布局。
:::

框架本身会自动拉伸适配其他电视屏幕尺寸。

## 长度单位

::: warning 注意： 仅使用 px 来设定单位。暂不支持百分比等其它的长度值，只支持具体数值。
:::

例如：

```css
#div {
  margin-left: 10px;
  width: 100px;
  height: 60px;
}
```

``` vue
<div style="{width: '100px',height:'60px'}">
</div>
```
