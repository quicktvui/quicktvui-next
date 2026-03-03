---
title: Page状态管理
lang: zh-CN
---

# Page状态管理

`ES运行环境`根据所需会销毁和重新创建`ESRouter`堆栈中的页面。 这个时候就需要根据所需在销毁的保存页面状态。 在重新创建页面的时候恢复页面状态。

## 保存页面状态

`ES运行环境`在销毁页面之前会调用页面方法`onESSaveInstanceState(savedInstanceState)`
开发者可以在`savedInstanceState`对象中保存数据。

调用顺序为`onESPause()` ==> `onESSaveInstanceState(savedInstanceState)`
==> `onESStop()` ==> `onESDestroy()`

## 恢复页面状态

`ES运行环境`在重新创建页面之前会调用页面方法`onESRestoreInstanceState(savedInstanceState)`
开发者可以在`savedInstanceState`获取在页面销毁时保存的数据。

调用顺序为`onESStart()` ==> `onESRestoreInstanceState(savedInstanceState)`
==> `onESResume()`

### 1、普通函数用法

:::demo

module/page/es-page-state

:::

### 2、Hooks 函数用法

::: warning 注意

***@extscreen/es3-core" ≥ 1.2.6***

***@extscreen/es3-router ≥ 1.2.3***

***@extscreen/es3-vue ≥ 2.0.11***

***@extscreen/es3-vue-style-parser ≥ 2.0.0***

***@extscreen/es3-vue-css-loader ≥ 2.0.0***

:::

:::demo

module/page/es-page-state-hooks

:::
