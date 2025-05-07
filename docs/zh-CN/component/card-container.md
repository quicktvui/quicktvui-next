---
title: CardContainer
lang: zh-CN
---

# CardContainer

## API

### Exposes

| Method                       | Description                    | Type                                                                          |
|------------------------------|--------------------------------|-------------------------------------------------------------------------------|
| load                         | 加载卡片                         | ^[Function]`(cardId: string) => void`                                                         |
| loadWithoutCache             | 无缓存加载卡片                    | ^[Function]`(cardId: string) => void`                                                         |
| reload                       | 重新加载卡片                      | ^[Function]`() => void`                                                         |
| autoRecycle                  | 是否自动回收                      | ^[Function]`(data: boolean) => void`                                                         |
| getLoadingStatus             | 获取加载状态                      | ^[Function]`() => void`                                                         |
| sendEvent2Vue                | 给vue发送事件                     | ^[Function]`(event: Record<string, any>) => void`                                                         |
| reset                        | 重置卡片                          | ^[Function]`() => void`                                                         |
| recycle                      | 回收卡片                          | ^[Function]`() => void`                                                         |
| removeCache                  | 删除缓存                          | ^[Function]`() => void`                                                         |
| resizeCacheSize              | 设置缓存的大小                     | ^[Function]`(size: number) => void`                                                         |
| clearAllCache                | 清空所有缓存                     | ^[Function]`() => void`                                                         |
