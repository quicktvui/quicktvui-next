---
title: 页面回收策略
lang: zh-CN
---

# 页面回收策略

可以设置同时存活的页面的总数量。 开发者可以通过`RouterOptions`配置。

* 打开页面后，如果当前页面堆栈总数量超过`页面的总数量`后，`ES运行环境`会销毁页面堆栈底部相应数量的页面。
* 关闭页面后，如果当前页面堆栈总数量小于`页面的总数量`时，`ES运行环境`会重新创建之前销毁的页面。

## 通过`RouterOptions`设置

`RouterOptions`中加入`limit`属性既可。

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
