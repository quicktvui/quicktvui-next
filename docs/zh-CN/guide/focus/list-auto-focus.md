---

---

# 列表中的焦点

::: tip sdk >= 2.8
:::

> sdk>=2.8

`qt-list-view`、`qt-grid-view`列表组件因其特殊实现方式，实现`自动获焦`的方式有所不同。

## 指定初始获焦位置
通过指定`autofocusPosition`属性，当其值`>=0`时，列表在初始化、可见性变化、重设数据时都会自动另对应`position`的子元素获焦；
```html
<!--list-view中第0个元素展现时将自动获焦-->
<qt-list-view :autofocusPosition="0">
    <!-- 子无素可直接获焦 -->
    <div :type="1" :focusable="true"></div>
    <!-- 也支持元素内部获焦 -->
    <div :type="2" :focusable="false">
        <div focusable="true"></div>
    </div>
</qt-list-view>
```
<img src="/guide/focus/list-auto-focus-1.png" />

## 自动滚动并获焦
当前列表创建完成时，有可能指定位置的元素不在可视区域内，此时如指定了`autofocusPosition`列表将自动滚动并获焦。
下例中，页面中只展示三个元素，希望初始时第5个元素获焦：

```html
<!--list-view中第5个元素展现时将自动获焦-->
<qt-list-view :autofocusPosition="4"></qt-list-view>
```
<img src="/guide/focus/list-auto-focus-2.png" />



[//]: # (## 自动滚动并获焦)

[//]: # ()
[//]: # (当前列表创建完成时，有可能指定位置的元素不在可视区域内，此时需要使用`autoscroll`自动滚动到指定位置;)

[//]: # ()
[//]: # (例如页面中只展示三个元素，如希望初始时第5个元素获焦，此时就需要使用`autoscroll`属性。)

[//]: # ()
[//]: # ()
[//]: # (```html)

[//]: # ()
[//]: # (<!--list-view中第0个元素展现时将自动获焦-->)

[//]: # ()
[//]: # (<qt-list-view :autofocusPosition="4" :autoscroll="[4,120]"></qt-list-view>)

[//]: # ()
[//]: # (```)

[//]: # ()
[//]: # (<img src="/guide/list-autofocus-2.png" />)

[//]: # ()
[//]: # ()
[//]: # (`autoscroll`属性为数组，即`autoscroll=[position,offset]`，其中第一个元素为`position`，第二个元素为`滚动偏移量`；)

[//]: # ()
[//]: # (> 上述例子中`offset`设置120是为了让第五个元素居中,`offset`通常计算方式为：`offset = &#40;list-view高度 - item高度&#41; / 2`；)


[//]: # (具体用法请参考`list-view中`的`autoscroll`属性。)


## 取消自动获焦
当列表中的元素不需要自动获焦时，可以通过`autofocusPosition`属性设置为`-1`来取消自动获焦。
```html
<qt-list-view :autofocusPosition="autofocusPosition"
              :autoscroll="[scrollPosition,0]">
```
```js
autofocusPosition = -1;
//如设置了滚动，也可能通过设成-1取消
scrollPosition = -1;
```

更多列表中的自动焦点用法请查看[es-auto-focus-list-demo](https://github.com/quicktvui/quicktvui-api-demo-vue3/blob/main/src/components/es-focus/es-auto-focus-list-demo.vue)






