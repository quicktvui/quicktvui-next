---
title: NavBar
lang: zh-CN
---

# NavBar

<img src="/component/nav-bar/nav_bar.gif" />

:::demo ## 基础用法

component/nav-bar/basic

:::

## API

### Attributes

| Name                        | Description       | Type                     | Default  |
| --------------------------- | ----------------- | -----------------------  | -------- |
| itemGap                     | 导航栏条目的间距     | ^[number]                | 0        |
| horizontal                  | 是否横向            | ^[boolean]               | true     |
| initSelect                  | 初始化选中位置       | ^[number]                | 0        |
| navs                        | 导航栏条目列表       | ^[object]`QTNavBarItem[]`| -        |
| tabNavBarClass              | 样式               | ^[string]                | -        |
| horizontalFadingEdgeEnabled | 启用横向边缘消失     | ^[boolean]                | false    |
| verticalFadingEdgeEnabled   | 启用竖向边缘消失     | ^[boolean]                | false    |
| fadingEdgeLength            | 消失边缘的长度       | ^[number]                 | 0        |

### Events

| Name      | Description      | Type                                        |
| --------- | ---------------- | ------------------------------------------- |
| tab-focus | 导航条目焦点变化事件 | ^[Function]`(isFocused: boolean) => void`   |
| tab-click | 导航条目点击事件    | ^[Function]`(item: QTNavBarItem) => void`   |
| tab-select| 导航条目选中事件    | ^[Function]`(item: QTNavBarItem) => void`   |

### Slots

| Name        | Description             |
| ----------- | ----------------------- |
| default     | 自定义默认内容             |

### Exposes

| Method                       | Description                    | Type                                                                          |
|------------------------------|--------------------------------|-------------------------------------------------------------------------------|
| init                         | 初始化                         | ^[Function]`(navBar: QTNavBar) => void`      |
| scrollToPosition             | 滚动到指定位置                   | ^[Function]`(index: number) => void`      |
| scrollToTop                  | 滚动到顶                         | ^[Function]`() => void`      |
