---
title: SwiftList
lang: zh-CN
---

# SwiftList

## API

### Exposes

| Method                       | Description                    | Type                                                                          |
|------------------------------|--------------------------------|-------------------------------------------------------------------------------|
| setPageData                  | 设置分页数据                      | ^[Function]`(page: number, data: Array<any>) => void`           |
| updateData                   | 请求焦点                         | ^[Function]`(position: number, data: any) => void`           |
| notifyNoMoreData             | 通知无更多数据                   | ^[Function]`() => void`           |
| requestMore                  | 请求加载更多数据                   | ^[Function]`() => void`           |
| scrollToPosition             | 滚动到指定位置                     | ^[Function]`(pos: number) => void`           |
| scrollToPositionWithOffset   | 滚动到指定位置                    | ^[Function]`(pos: number, offset: number, anim: boolean) => void`           |
| setSelectChildPosition       | 设置选中孩子的位置                 | ^[Function]`(position: number) => void`           |
| setFocusTargetChildPosition  | 设置选请求焦点孩子位置              | ^[Function]`(position: number) => void`           |
