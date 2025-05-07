---
title: 路由错误页面
lang: zh-CN
---

# 路由错误页面

当要启动的页面不存在的时候，可以展示一个错误页面。 错误页面需要配置在`RouterOptions`中。以`error`字段为key，入口页面路径为value。 例如：在`RouterOptions`中设置错误页面为`error`。

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
