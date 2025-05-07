---
title: Collapse
lang: zh-CN
---

# Collapse

<img src="/component/collapse/collapse_component.gif" />

## 基础用法

1. 自定义折叠面板item组件。有需要则在组件中声明`onCollapseItemExpand(value: boolean): void`方法。
2. `<qt-collapse></qt-collapse>`标签包裹自定义的折叠面板item组件。
3. 调用`QTICollapse``init`接口进行初始化。
4. 有需要则监听`QTICollapse`的`onCollapseItemExpand`事件。

:::demo

component/collapse/basic

:::

## API

### Events

| Name                 | Description      | Type                                                         |
| ---------------------| ---------------- | ------------------------------------------------------------ |
| onCollapseItemExpand | 展开事件           | ^[Function]`(index: number, item: QTCollapseItem) => void`   |

### Slots

| Name        | Description             |
| ----------- | ----------------------- |
| default     | 自定义默认内容             |

### Exposes

| Method                       | Description                    | Type                                                                          |
|------------------------------|--------------------------------|-------------------------------------------------------------------------------|
| init                         | 初始化                          | ^[Function]`(collapse: QTCollapse) => void`                    |
| getItem                      | 获取条目                        | ^[Function]`(index: number) => QTICollapseItem \| undefined`                    |
| expandItem                   | 展开条目                        | ^[Function]`(index: number) => void`                    |
| collapse                     | 折叠条目                        | ^[Function]`() => void`                    |
| expand                       | 展开条目                        | ^[Function]`() => void`                    |
