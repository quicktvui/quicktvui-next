# 轻卡生命周期

轻卡和[`页面生命周期周期`](/zh-CN/guide/page/lifecycle) 类似。

相比页面生命周期相比：

* 添加了`onESBind`、`onESRecycle`、`onESAttached`、`onESDetached`生命周期。
* 去掉了`onESNewIntent`、`onESSaveInstanceState`、`onESRestoreInstanceState`
* 添加了`onESSlotEvent` 轻卡事件方法。

::: warning 注意：onESBind、onESRecycle、onESAttached、onESDetached 生命周期只会在瀑布流里面使用轻卡被调用。
:::

:::demo ## 生命周期示例

guide/slot/lifecycle

:::
