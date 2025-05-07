---
title: ClassifiedListView
lang: zh-CN
---

# ClassifiedListView

## API

### Attributes

| Name                            | Description       | Type                 | Default  |
| ------------------------------- | ----------------- | ---------------------| -------- |
| className                       | 样式名称            | ^[string]            | -        |
| classNavName                    | 导航样式名称         | ^[string]            | -        |
| currentFocusIndex               | 当前焦点的选中索引    | ^[number]            | 0        |
| focusScale                      | 焦点放大倍数         | ^[number]            | 1.15     |
| navType                         | 导航类型            | ^[number]            | 10001    |

### Events

| Name          | Description      | Type                                        |
| --------------| ---------------- | ------------------------------------------- |
| item-focused  | 条目焦点变化事件    | ^[Function]`(isFocused: boolean) => void`   |
| item-click    | 条目点击事件       | ^[Function]`() => void`                     |

### Slots

| Name        | Description             |
| ----------- | ----------------------- |
| item        | 自定义内容                |
| navItem     | 自定义导航内容             |

### Exposes

| Method                       | Description                    | Type                                                                          |
|------------------------------|--------------------------------|-------------------------------------------------------------------------------|
| init                         | 初始化                          | ^[Function]`(itemList: Array<QTClassifiedListViewItem>) => void`                |
| scrollToIndex                | 滚动到指定位置                    | ^[Function]`(index: number, anim: boolean, offset: number) => void`           |
| setItemFocused               | 设置条目焦点状态                  | ^[Function]`(index: number) => void`           |
| scrollToFocused              | 滚动到焦点位置                    | ^[Function]`(index: number) => void`           |
| setItemSelected              | 设置条目为选中状态                 | ^[Function]`(index: number, b: boolean) => void`           |
| scrollToSelected             | 滚动到选中位置                    | ^[Function]`(index: number, b: boolean) => void`           |
| updateItem                   | 更新条目                         | ^[Function]`(position: number, data: QTClassifiedListViewItem) => void`           |
