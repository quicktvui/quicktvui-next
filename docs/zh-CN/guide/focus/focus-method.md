---

---

# 焦点进阶

在处理`焦点`相关交互时，可通过一些`焦点`相关便利的方法来满足产品需要。

## 焦点属性

### nextFocusName
通过名称，指定下一个焦点元素

`(up: 'string', left: 'string', right: 'string', down: 'string')`
 * `up`: string - 按'上'方向的name名称 ；
 * `left`: string - 按'左'方向的name名称 ；
 * `right`: string - 按'右'方向的name名称 ；
 * `down`: string - 按'下'方向的name名称 ；

指定下一个焦点名称，寻焦默认逻辑是顺找最近的焦点，为防止焦点出现在需求以外的地方，可以在标签中指定下个焦点的name;
 * `nextFocusName`属性可使用于`focusable=true`的标签，和`ul`标签。
 * 在`focusable=true`的标签中使用`nextFocusName`优先级高于ul中使用的`nextFocusName`
 * 如果在ul上或者ul列表的子标签上使用`nextFocusName`，会在列表的边界执行，例如横向列表`listA`中设置`right`为`listB`，当焦点在`A3`时按`右`，焦点才会到`listB`中，由于ul列表默认带记忆焦点功能，焦点会落在`listB`中的`上一次焦点`所在，如果是`第一次`默认选中`第一个`。

示例


::: details 点击查看源码
```html

<div class="focus-next">
    <div>
        <ul horizontal name="listA" :nextFocusName="{down: 'listC', right: 'listB'}" ref="giftTabs">
            <li>
                <div :focusable=true class="button"><p duplicateParentState>A1</p></div>
            </li>
            <li>
                <div :focusable=true class="button"><p duplicateParentState>A2</p></div>
            </li>
            <li>
                <div :focusable=true class="button"><p duplicateParentState>A3</p></div>
            </li>
        </ul>
        <ul horizontal name="listB">
            <li>
                <div :focusable=true class="button"><p duplicateParentState>B1</p></div>
            </li>
            <li>
                <div :focusable=true class="button" :nextFocusName="{up: 'btnE'}"><p duplicateParentState>B2</p></div>
            </li>
            <li>
                <div :focusable=true class="button"><p duplicateParentState>B3</p></div>
            </li>
        </ul>
        <ul horizontal name="listC">
            <li>
                <div :focusable=true class="button" ref="listC"><p duplicateParentState>C1</p></div>
            </li>
            <li>
                <div :focusable=true class="button"><p duplicateParentState>C2</p></div>
            </li>
            <li>
                <div :focusable=true class="button"><p duplicateParentState>C3</p></div>
            </li>
        </ul>
    </div>
    <div>
        <div class="feature-item">
            <div :focusable=true class="button" name="btnD" :nextFocusName="{down: 'listB'}"><p duplicateParentState>
                DD</p></div>
            <div :focusable=true class="button" name="btnE" :nextFocusName="{left: 'listB', down: 'listC'}"><p
                    duplicateParentState>EE</p></div>
        </div>
    </div>
</div>
```

:::
### descendantFocusability

禁用焦点，适用场景如自定义弹出框显示时，主页面需禁用焦点，防止焦点误操作焦点丢失。
 * `1`: int - 1为不禁用，默认为1 ；
 * `2`: int - 2为禁用 ；

示例


```html

<div :descendantFocusability="modalShow ? 2 : 1">
    ...
    <!--主页面内容-->
</div>
<div v-show="modalShow">
    ...
    <!--自定义弹出框-->
</div>
```

### ⁣blockFocusDirections

阻止焦点方向，适用于焦点标签或焦点父标签
 * `left`: string - 左 ；
 * `right`: string - 右 ；
 * `up`: string - 上 ；
 * `down`: string - 下 ；

示例


```html

<div :⁣blockFocusDirections="blockAll" :focusable="true"><p>按钮</p></div>
<ul ref="list" :⁣blockFocusDirections="blockLeftRight">
    <li :focusable="true"><p>超清</p></li>
    <li class="selected" :focusable="true"><p>高清</p></li>
    <li :focusable="true"><p>超清</p></li>
</ul>
```


```js
data()
{
    return {
        blockAll: ['left', 'right', 'up', 'down'],
        blockLeftRightTop: ['left', 'right', 'up'],
        blockLeftRight: ['left', 'right'],
    }
}
```

### showOnState

相应焦点状态时显示，三个状态一组使用。`view`根据状态会自动显示或者隐藏。
 * `normal`: string - 正常 ；
 * `focused`: string - 焦点 ；
 * `selected`: string - 选中，在`ul`组件中生效，移出`ul`时触发，如果不需要`selected`状态，`ul`标签中添加`:enableSelectOnFocus="false"` ；

示例


::: details 点击查看源码
```html

<div class="item" :focusable="true">
    <img class="content" showOnState="normal" src="file://assets/img.png">
    <img class="content" showOnState="focused" src="file://assets/img_focus.png">
</div>
<div class="item" :focusable="true">
    <div class="content" showOnState="normal"><p>我是初始化显示的内容</p></div>
    <div class="content" showOnState="focused"><p>我是焦点时显示的内容</p></div>
</div>
<div class="list">
    <ul horizontal>
        <li>
            <div class="item" :focusable="true">
                <div class="content" showOnState="normal"><p>我是初始化显示的内容1</p></div>
                <div class="content" showOnState="focused"><p>我是焦点时显示的内容1</p></div>
                <div class="content" showOnState="selected"><p>我是选中时显示的内容1</p></div>
            </div>
        </li>
        <li>
            <div class="item" :focusable="true">
                <div class="content" showOnState="normal"><p>我是初始化显示的内容2</p></div>
                <div class="content" showOnState="focused"><p>我是焦点时显示的内容2</p></div>
                <div class="content" showOnState="selected"><p>我是选中时显示的内容2</p></div>
            </div>
        </li>
        <li>
            <div class="item" :focusable="true">
                <div class="content" showOnState="normal"><p>我是初始化显示的内容3</p></div>
                <div class="content" showOnState="focused"><p>我是焦点时显示的内容3</p></div>
                <div class="content" showOnState="selected"><p>我是选中时显示的内容3</p></div>
            </div>
        </li>
    </ul>
</div>
```

:::

::: details 点击查看源码
```css
.item {
    width: 200px;
    height: 100px;
    background-color: transparent;
    focus-background-color: antiquewhite;
}

.content {
    position: absolute;
    width: 200px;
    height: 100px;
    left: 0;
    top: 0;
    background-color: transparent;
}

.list ul {
    flex-direction: row;
}
```

:::
注意：
1.  使用`showOnState`的标签需要使用`position: absolute;`，使3个状态标签处于重叠的位置；
2. `showOnState`元素层级需格外注意控制，避免层级过多，导致页面加载慢、帧率低等问题。

`showOnState`错误示范：
```html
<div>
    <div showOnState="normal">
        <img :src="myImg">
        <div>
            <qt-text text="我普通状态展示"/>
        </div>
    </div>
    <div showOnState="focused">
        <img :src="myImg">
        <div>
            <qt-text text="我焦点状态展示"/>
        </div>
    </div>
</div>
```
正确示范：
```html
<div>
    <div>
        <img src="myImg">
        <div>
            <qt-text showOnState="normal" text="我普通状态展示"/>
            <qt-text showOnState="focused" text="我焦点状态展示"/>
        </div>
    </div>
</div>
```
上述示例中，实现同样效果，但错误示例相对于正确的元素多了近一倍，当页面元素过多时，会导致页面加载慢、帧率低、内存不足等问题。
## 主动定位焦点

### requestFocus

`($refs: object)`
 * `$refs`: object - `focusable="true"`的元素的$refs对象，例如：this.$refs.view ；

示例


```html

<div :focusable="true" ref="view"></div>
```


```js
import {ESFocusManager} from "@extscreen/es-core";
ESFocusManager.requestFocus(this.$refs.view);
```

或者


```js
Native.callUIFunction(this.$refs.view, 'requestFocus', []);
```


也可通过requestFocus属性来请求焦点，不过此种方法仅在元素`初始化`时生效，如下
```html
<div :focusable="true" :requestFocus="true"></div>
```

## 预设焦点

### setSelectChildPosition

`($refs: object, index: int)`

预设焦点适用于ul列表，ul列表第一次有焦点时默认为第一个子view；

适用场景如下：当前默认清晰度为高清，需求为移动到清晰度区域时焦点在当前使用清晰度上。
 * `$refs`: object - ul的$refs对象，例如：this.$refs.view ；
 * `index`: int - 第几个子标签, 从0开始 ；

示例


```html

<ul ref="list">
    <li :focusable="true"><p>超清</p></li>
    <li class="selected" :focusable="true"><p>高清</p></li>
    // 默认清晰度
    <li :focusable="true"><p>超清</p></li>
</ul>
```


```js
Native.callUIFunction(this.$refs.list, 'setSelectChildPosition', [1]);
```

## 清除记忆焦点

### clearFocusMemory

`($refs: object)`

清除记忆焦点适用于ul列表，ul列表默认有记忆焦点功能，使用此方法后下次焦点移动到此ul上焦点到第一个子view上。

 * `$refs`: object - ul的$refs对象，例如：this.$refs.view ；

```js
Native.callUIFunction(this.$refs.list, 'clearFocusMemory', []);
```
