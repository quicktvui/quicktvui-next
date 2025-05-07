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

::: warning 注意：

生命周期方法前面不能添加`async`关键字。

下面的方法使用错误
```js
async function onESCreate(){
  //
}
```

:::

在`App.vue`中监听Application生命周期。

:::demo ## 基础用法

module/page/es-app-lifecycle

:::


