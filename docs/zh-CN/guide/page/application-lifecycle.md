---
title: App生命周期
lang: zh-CN
---

# App生命周期

在`main.ts`中创建Application

```ts
import application from './App.vue';

const app: ESApp = createESApp(application, routerOptions);
```

在`App.vue`中监听Application生命周期。

## 基础用法

### 1、普通函数用法

::: warning 注意：

生命周期方法前面不能添加`async`关键字。

下面的方法使用错误

```js
async function onESCreate() {
  //
}
```

:::
:::demo

module/page/es-app-lifecycle

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

module/page/es-app-lifecycle-hooks

:::
