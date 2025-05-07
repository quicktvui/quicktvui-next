---
title: 'FocusBasic'
lang: zh-CN
---

# 焦点

与手机、PC等触控交互不同，目前用户通过遥控器控制`焦点`移动、点击确定的方式来达到与智能电视交互的目的。 所以在智能电视应用开发时，焦点是一个重点也是难点，应当特别关注。

::: tip 焦点（focus）一般在一个窗口（例如页面或者弹窗）中是唯一存在的，即当一个元素获得焦点时，其它元素将失去焦点。
:::

## focusable属性

一个页面中元素，需要通过
`focusable`属性来表示其是否可以获焦，当用户操作摇控器移动时，不可获焦的元素，在寻焦时将被忽略。例如：

```vue
<!-- 此div可获得焦点-->
<div :focusable="true"></div>

<!-- 此div不可获得焦点-->
<div :focusable="false">
<!-- 此img标签可获得焦点-->
<img :focusable="true" />
</div>
```

::: warning 注意：这里 div 也可替换成 qt-view。一般情况下，除确定的可聚焦元素外，应尽量将focusable属性设置为false，以防止焦点丢失等问题。
:::

## 焦点指示

当一个元素获得焦点时，应改变其与普通状态的样式来指示焦点位置。

通过改变以下属性来区别焦点状态：

* 缩放 - 更改聚焦元素的大小
* 边框 - 在元素周围绘制轮廓
* 颜色 - 更新元素背景和文本颜色

<img src="/guide/focus/focus-style.png" />

以下是一个典型示例及实现代码：

```vue

<div class="box" :focusable="true" :focusScale="1.1" :enableFocusBorder="true">
<qt-text class="text" text="Text"></qt-text>
</div>
```

<img src="/guide/focus/list-auto-focus-2.png" />

::: tip

* `focusScale`属性表示焦点时放大倍数
* `enableFocusBorder`表示焦点时是否显示边框。
  :::

css:

```css
.box {
  width: 200px;
  height: 100px;
  background-color: grey; /*默认背景色*/
  focus-background-color: black; /*焦点变为黑色*/
  focus-scale: 1.1; /*css中也可以指定缩放倍数*/
}

.text {
  width: 50px;
  height: 20px;
  color: black;
  /*焦点状态文字变色*/
  focus-color: white;
}
```

通过以上代码，可实现一个div在焦点状态时背景变为黑色、文字变为白色、放大1.1倍并且展示默认的焦点边框。

::: warning 注意: 当`enableFocusBorder`开启时，焦点框默认白色圆角边框，如需修改，可以通过`css`来设置:

```css
.box {
  focus-border-radius: 5px; /*焦点边框圆角*/
  focus-border-width: 3px; /*焦点边框宽度*/
  focus-border-color: red; /*焦点边框颜色*/
  enable-black-border: true; /*焦点内部黑色边框开关*/
}

```

:::

## 全局设置

另外使用全局模块`FocusModule`可以在应用初始化时设置默认焦点样式。

示例：

```javascript
//设置默认焦点颜色
Native.callNative('FocusModule', 'setDefaultFocusBorderColor', '#ffffff');
//设置焦点框是否有内里黑色边框
Native.callNative('FocusModule', 'setDefaultFocusInnerBorderEnable', true);
//设置默认焦点边框圆角
Native.callNative('FocusModule', 'setDefaultFocusBorderCorner', 5);
//设置默认焦点边框是否开启
Native.callNative('FocusModule', 'setDefaultFocusBorderEnable', true);
//设置默认焦点放大倍数
Native.callNative('FocusModule', 'setDefaultFocusScale', 1.1);
```

## 状态变化

当`div`设置`focusable`为`true`时，内部的元素可通过将`duplicateParentState`属性设置为`true`，跟随`div`的状态改变。

示例：

```vue

<div class="divBoxClass" :focusable="true">
<div class="divBoxTest" :duplicateParentState="true">
  <p :duplicateParentState="true">焦点时变色</p>
  <p :duplicateParentState="false">焦点时不变</p>
</div>
</div>

```

上述代码可实现`p`标签随着焦点状态改变颜色
