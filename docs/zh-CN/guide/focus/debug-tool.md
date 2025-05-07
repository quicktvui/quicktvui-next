---
title: 'FocusDebug'
lang: zh-CN
---

# 焦点调试

## UI调试

::: tip sdk >= 2.8
:::

可在任意版本`>=2.8`的 [Runtime](/zh-CN/resource/runtime) 打开焦点UI调试工具 可以通过些工具查看以下信息：

* 当前焦点元素信息
  * 元素`id、sid、name`
  * 元素`尺寸、alpha、visibility、hashcode`
  * `nextFocusName`信息
  * `nextFocusSID`信息
* 焦点关键日志

开启命令：

```shell
qui debug -f true
```

<img src="/guide/focus/debug-focus.png">


::: tip qui debug

***[点击查看 qui debug 命令](/zh-CN/tool/cli/debug)***

:::





