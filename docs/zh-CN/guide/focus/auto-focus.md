---
title: 'AutoFocus'
lang: zh-CN
---

# 自动获焦

::: tip sdk >= 2.8
:::

当需要一个元素请求焦点时，使用`requestFocus`等`主动`请求焦点的方法存在延迟等问题，体验不佳。
更好的方式是通过指定`autofocus`属性，在一些`时机`下底层会`自动`的获取焦点。`autofocus`不仅方便使用，而且提升焦点体验、推荐使用。

## 使用方法
* 在div、qt-view组件上指定`autofocus`属性，如
```html
<div :autofocus="true"></div>
```
详情用法请查看[es-auto-focus](https://github.com/quicktvui/quicktvui-api-demo-vue3/blob/main/src/components/es-focus/es-auto-focus.vue)

* 在qt-list-view、qt-grid-view等`列表`型组件上使用`autofocusPosition`属性，如
```html
<!--list-view中position为5的元素展现时将自动获焦-->
<qt-list-view :autofocusPosition="5"></qt-list-view>
```
`列表`自动获焦的具体用法，请参考[列表中自动获焦](/zh-CN/guide/focus/list-auto-focus)

::: tip ul 暂不支持
:::


## 自动时机
不同组件会根据自身状态触发自动获焦，以下是一些触发时机：
###  元素初始化时
元素首次创建并展示出来时
```html
<!--root-->
<div>
    <div :autofocus="true">
        <p>我进入页面后自动获焦</p>
    </div>
</div>
```
使用v-if标签由不可见变为可见时
```html
<div  v-if="created">
    <div  :autofocus="true">
        <!--支持嵌套的-->
        <div>
            <p>我会在created为true时自动获焦</p>
        </div>
    </div>
</div>
```

### 由不可见变为可见时
使用v-show或者visible属性由不可见变为可见时
```html
<!--v-show时-->
<div :autofocus="true" v-show="visible">
    <p>visible为true时我会获焦</p>
</div>
<!--visible时-->
<div :autofocus="true" :visible="visible">
    <p>visible为true时我会获焦</p>
</div>
```

### list-view等列表组件，重新设置数据时
list-view、grid-view等列表组件除了在可见性变化时会自动获焦，
在重新设置数据时，也会根据`autofocusPosition`属性自动获焦；
```vue
<qt-list-view :autofocusPosition="5"  ref="list"></qt-list-view>
this.$refs.list.init(data);
<!--只要重新设置数据，position为5的子元素就会自动获焦-->
```

::: warning 注意: 这里只是init方法为伪代码
重新设置数据方法请查看[qt-list-view组件](/zh-CN/component/list-view)文档
:::
>

### 取消自动获焦
将`autofocus`设为`false`即可
```html
<div :autofocus="isAutofocus"></div>
```
```js
isAutofocus = false;
```




