---
title: ListItem
lang: zh-CN
---

# ListItem

## API

### Events

| Name          | Description      | Type                                          |
| ------------- | ---------------- | --------------------------------------------- |
| item-focused  | 焦点              | ^[Function]`(event: QTListItemEvent) => void` |
| item-attached | 连接事件           | ^[Function]`(event: QTListItemEvent) => void` |
| item-detached | 断开连接事件        | ^[Function]`(event: QTListItemEvent) => void` |
| item-bind     | 绑定事件           | ^[Function]`(event: QTListItemEvent) => void` |
| item-unbind   | 解绑事件           | ^[Function]`(event: QTListItemEvent) => void` |

### Slots

| Name        | Description             |
| ----------- | ----------------------- |
| default     | 自定义默认内容             |


### Exposes

| Method                       | Description                    | Type                                                                          |
|------------------------------|--------------------------------|-------------------------------------------------------------------------------|
| updateItem                   | 更新条目                         | ^[Function]`(posInList: number, data: Record<string, unknown>) => void`      |
| dispatchItemFunction         | 调用条目的方法                    | ^[Function]`(position: number, name: string, funcName: string, params: any) => void`      |
| updateItemProps              | 调用条目的方法                    | ^[Function]`(position: number, name: string, toUpdateMap: Record<string, unknown>) => void`      |
| batch                        |                                 | ^[Function]`(position: number) => void`      |
