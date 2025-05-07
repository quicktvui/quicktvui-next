---
title: PluginView
lang: zh-CN
---

# PluginView

## API

### Events

| Name                | Description      | Type                                            |
| ------------------- | ---------------- | ----------------------------------------------- |
| onPluginLoadSuccess | 加载插件成功        | ^[Function]`(event: QTPluginViewEvent) => void` |
| onPluginLoadError   | 加载插件失败        | ^[Function]`(event: QTPluginViewEvent) => void` |

### Exposes

| Method                       | Description                    | Type                                                                          |
|------------------------------|--------------------------------|-------------------------------------------------------------------------------|
| dispatchFunction             | 调用插件方法                      | ^[Function]`(funName: string, params: Array<any>) => void`   |
