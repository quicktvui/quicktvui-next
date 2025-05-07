---
title: 异步路由
lang: zh-CN
---
# 异步路由

::: warning 注意：异步路由前提必须使用异步加载机制。
[点击查看编译分包和异步加载](/zh-CN/guide/compile/split-chunks)
:::

`routes.ts`引入异步组件 引入方式：
`() => import('xxx.vue')`

```ts
const routes = [
  {
    path: '/async-component',
    name: 'async-component',
    //示例如下：
    component: () => import('./views/async/index.vue')
  }
]
```

配置完成，路由会异步加载此路由。
