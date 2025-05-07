---
title: 应用入口
lang: zh-CN
---

# 应用入口

应用的入口需要配置在`RouterOptions`中。以`main`字段为key，入口页面路径为value。 例如：在`RouterOptions`中设置应用入口页面为`index`。

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
