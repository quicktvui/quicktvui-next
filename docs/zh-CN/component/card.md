---
title: Card
lang: zh-CN
---

# Card

## API

### Exposes

| Method                       | Description                    | Type                                                                          |
|------------------------------|--------------------------------|-------------------------------------------------------------------------------|
| load                         | 加载卡片                         | ^[Function]`(cardId: string, useCache: boolean) => void`                                                         |
| reload                       | 重新加载                         | ^[Function]`() => void`                                                         |
| showDefaultBg                | 显示默认背景                      | ^[Function]`(value: boolean) => void`                                                         |
| requestCardFocus             | 请求焦点                      | ^[Function]`() => void`                                                         |
