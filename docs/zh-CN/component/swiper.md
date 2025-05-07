---
title: Swiper
lang: zh-CN
---

# Swiper

## API

### Attributes

| Name                           | Description                               | Type                 | Default |
|--------------------------------|-------------------------------------------| ---------------------|---------|
| initialPage                  | 初始页面                                      | ^[number]            | 0       |
| scrollEnabled                     | 激活或关闭滚动                                   | ^[boolean]            | true    |
| pageMargin          | pageMargin                                | ^[number]            | 0       |
| focusSearchEnabled                 | 激活内部寻焦                                    | ^[boolean]           | true    |

### Events

| Name             | Description      | Type                                                              |
| -----------------| ---------------- |-------------------------------------------------------------------|
| dropped          | 页面被选中事件      | ^[Function]`(currentSlide: number) => void`                                            |
| dragging         | 页面滚动事件        | ^[Function]`(offset: number, nextSlide: number) => void`                                             |
| stateChanged     | 页面滚动状态事件     | ^[Function]`(state: string) => void`                                                        |

### Exposes

| Method                        | Description        | Type                                                                          |
|-------------------------------|--------------------|-------------------------------------------------------------------------------|
| setPage                       | 根据index选中slide     | ^[Function]`(slideIndex: number) => void`    |
| setPageWithoutAnimation       | 根据index选中slide、无动画 | ^[Function]`(slideIndex: number) => void`    |
| next                          | 切换到下一页             | ^[Function]`() => void`    |
| prev                          | 切换到上一页             | ^[Function]`() => void`    |
