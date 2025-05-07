# 简介

::: warning sdk >= 2.9
:::

快应用[轻卡](/zh-CN/sdk/light-card)是专为原生应用与快应用混合开发的解决方案。

[点击查看轻卡详细信息](/zh-CN/sdk/light-card)

轻卡路由和页面路由相同，都使用`ESRouter`。

::: warning 注意：显示轻卡和关闭轻卡，不需要业务项目调用。

框架层默认接收来自安卓端的指令进行轻卡的显示和关闭。

:::

## 显示轻卡

示例代码

```js
const router = useESRouter()
router.push({
  name: 'router/router_zero_page',
  params: {
    from: 'router_first'
  },
});
```

## 关闭轻卡

示例代码

```js
const router = useESRouter()
router.splice({
  name: 'router/router_zero_page',
  params: {
    from: 'router_first'
  },
});
```

