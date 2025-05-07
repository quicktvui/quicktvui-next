---
title: 集成
lang: zh-CN
---

# 集成

## 第1步：`package.json`引入库

```json
{
  "@extscreen/es3-router": "^1.1.0"
}
```

## 第2步：创建`RouteMap`

创建`routes.ts`加入页面路由配置。

下面以`index.vue`页面为例：

```ts
import index from "./views/index.vue";

const routes = [
  {
    path: '/index',
    name: 'index',
    component: index,
  },
  {
    path: '/error',
    name: 'error',
    component: error,
  },
]
```

## 第3步：`main.ts`中初始化

```ts

import { createESRouter } from '@extscreen/es3-router'
import routes from "./routes.ts";
import type { Router } from '@extscreen/es3-router';

const routerOptions = {
  main: 'index',
  error: 'error',
  limit: 10,
  routes,
}
const router: Router = createESRouter(routerOptions)
const app: ESApp = createESApp(application, router);
app.use(install);

```

## 第4步：`App.vue`中初始化

```vue

<template>
  <div id="root">
    <es-router-view />
  </div>
</template>
```

配置完成，并且初始化成功后就可以进行页面的跳转了。
