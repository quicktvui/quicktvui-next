---
title: 简介
lang: zh-CN
---

# 简介

页面路由使用`ESRouter`。

::: tip ESRouter 和 Vue Router 4.x 接口保持一致。
[`点击查看Router 4.x`](https://router.vuejs.org)
:::

## 打开页面

示例代码

```ts
const router = useESRouter()
router.push({
  name: 'router/router_zero_page',
  params: {
    from: 'router_first'
  },
});
```

## 关闭当前页面

示例代码

```ts
const router = useESRouter()
router.back();
```
