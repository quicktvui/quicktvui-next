---
title: 应用入口
lang: zh-CN
---

# 应用入口

## 自动打开入口页面（默认）

应用的入口需要配置在`RouterOptions`中。以`main`字段为key，入口页面路径为value。

例如：在`RouterOptions`中设置应用入口页面为`index`。应用启动后自动打开`index`页面。

```ts

import { createESRouter } from '@extscreen/es3-router'
import routes from "./routes.ts";
import type { Router } from '@extscreen/es3-router';

const routerOptions = {
  main: 'index',
  error: 'error',
  routes,
}
const router: Router = createESRouter(routerOptions)
const app: ESApp = createESApp(application, router);
app.use(install);

```

## 手动打开入口页面

### 第一步、关闭自动跳转页面

在`app.vue`的`setup`中调用：

```ts
import { useESRouterManager } from "@extscreen/es3-core";

const routerManager = useESRouterManager();
routerManager.setAutoRedirectEnabled(false);
```

### 第二步、手动跳转页面

在`app.vue`的声明周期方法`onESCreated`中调用：

```ts
const router = useESRouter();

router.push({
  name: '需要跳转的页面路由名称',
  params: {},//需要跳转的页面路由参数
});
```
:::demo ## 完整示例

guide/router/app

:::
