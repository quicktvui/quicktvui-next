---
title: Page状态管理
lang: zh-CN
---

# 页面类型

::: warning 注意：声明在路由表 routes.ts 里面的组件才能作为快应用的 Page 或者 Dialog。
`routes.ts`配置的路由，如果不添加类型，则默认是 Page 类型。
:::


## 页面类型

路由配置中添加类型：`type: ESRouteType.ES_ROUTE_TYPE_PAGE`

下面以`index.vue`页面为例：

```ts
import index from "./views/index.vue";

const routes = [
  {
    path: '/index',
    name: 'index',
    component: index,
    type: ESRouteType.ES_ROUTE_TYPE_PAGE
  },
]
```

## 对话框类型

下面以`index.vue`页面为例：

路由配置中添加类型：`type: ESRouteType.ES_ROUTE_TYPE_DIALOG`

```ts
import index from "./views/index.vue";

const routes = [
  {
    path: '/index',
    name: 'index',
    component: index,
    type: ESRouteType.ES_ROUTE_TYPE_DIALOG
  },
]
```
