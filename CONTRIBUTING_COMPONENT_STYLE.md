# 自定义组件样式

以为定义`affix`组件为例

## 编译输出

`element-plus/theme-chalk/src/alert.scss`

`element-plus/theme-chalk/el-alert.css`

`element-plus/theme-chalk/index.css`

`element-plus/theme-chalk/base.css`

--------------------------------------------------------------------

## `components`

--------------------------------------------------------------------

### `affix`

#### 一、`css.ts`

`element-plus/packages/components/affix/style/css.ts`

```ts
//base文件夹里面编译后的样式
import '@element-plus/components/base/style/css' //---> @element-plus/components/base/style/css.js'
//最后编译出的样式路径
import '@element-plus/theme-chalk/el-affix.css'
```

#### 二、`index.ts`

`element-plus/packages/components/affix/style/index.ts`

```ts
import '@element-plus/components/base/style' //---> '@element-plus/components/base/style/index.js'
import '@element-plus/theme-chalk/src/affix.scss'
```

--------------------------------------------------------------------

### `base`

#### 一、`css.ts`

`element-plus/packages/components/base/style/css.ts`

```ts
//编译好的路径
import '@element-plus/theme-chalk/base.css'
```

#### 二、`index.ts`

```ts
//源码路径
import '@element-plus/theme-chalk/src/base.scss'
```

-------------------------------------------------------------------------

## `theme-chalk`

### 一、`affix.scss`

`element-plus/packages/theme-chalk/src/affix.scss`

```scss
@include b(anchor) {

}
```

最终生成：

`element-plus/theme-chalk/el-alert.css`

-------------------------------------------------------------

### 二、`index.scss`

`element-plus/packages/theme-chalk/src/index.scss`

```scss
@use './affix.scss';
```

最终生成：

`element-plus/theme-chalk/index.css`

-------------------------------------------------------------

### 三、`base.scss`

`element-plus/packages/theme-chalk/src/base.scss`

```scss
@use 'var.scss';
```

最终生成：

`element-plus/theme-chalk/base.css`

-----------------------------------------------------------------
### 四、`index.scss`

`index.scss`
-----------> `var.scss`  常用
-----------------------> `common/var.scss` 全局颜色和组件样式
-----------------------> `mixins/_var.scss` 通用设置样式方法
-----------------------> `mixins/mixins.scss` BEM 规则
