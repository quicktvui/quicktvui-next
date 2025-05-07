---
title: LargeList
lang: zh-CN
---

# LargeList

## API

### Exposes

| Method                       | Description                    | Type                                                                          |
|------------------------------|--------------------------------|-------------------------------------------------------------------------------|
| setup                        | 设置                            | ^[Function]`() => void`  |
| setPageData                  | 设置页面数据                      | ^[Function]`(page: number, data: Array<any>) => void`  |
| scrollTo                     | 滚动到指定位置                    | ^[Function]`(position: number) => void`  |
| scrollToWithOffset           | 滚动到指定位置并偏移               | ^[Function]`(position: number, offset: number, anim: boolean) => void`  |
| setSelected                  | 设置选中位置                      | ^[Function]`(position: number) => void`  |
| setGroupSelected             | 设置选中组位置                    | ^[Function]`(position: number) => void`  |
| release                      | 回收                            | ^[Function]`() => void`  |
