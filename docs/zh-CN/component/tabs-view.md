---
title: TabsView
lang: zh-CN
---

# TabsView

## API

### Slots

| Name        | Description             |
| ----------- | ----------------------- |
| default     | 自定义默认内容             |

### Exposes

| Method                       | Description                    | Type                                                                          |
|------------------------------|--------------------------------|-------------------------------------------------------------------------------|
| setTabsData                  | 设置tab数据                         | ^[Function]`(tabs: QTTabsView) => void`  |
| setPageData                  | 设置页面数据                         | ^[Function]`(pageIndex: number, data: QTPageData) => void`  |
| insertPageData               | 插入页面数据                       | ^[Function]`(tabPageIndex: number, sectionIndex: number, data: any[]) => void`  |
| updatePageData               | 更新页面数据                         | ^[Function]`(pageIndex: number, data: QTPageData) => void`  |
| focusBackToTop               | 焦点回调顶部                         | ^[Function]`() => void`  |
| requestNodeFocus             | 请求焦点                         | ^[Function]`(id: string) => void`  |
| addPageData                  | 添加页面数据                         | ^[Function]`(pageIndex: number, data: QTPageData, deleteCount: number) => void`  |
| reloadAll                    | 重新加载所有                         | ^[Function]`(updateCurrent: boolean) => void`  |
| reloadPage                   | 重新加载页面                         | ^[Function]`(pageIndex: number) => void`  |
| setCurrentPage               | 设置当前页面                         | ^[Function]`(pageIndex: number) => void`  |
| getCurrentPage               | 获取当前页面                         | ^[Function]`() => Promise<number>`  |
| requestTabFocus              | 请求tab焦点                         | ^[Function]`(tabIndex: number) => void`  |
| invokeContentFunction        | 调用页面方法                         | ^[Function]`(pageIndex: number, functionName: string, param: Array<any>) => void`  |
| invokeContentFunctionDirect  | 调用页面方法                         | ^[Function]`(functionName: string, param: Array<any>) => void`  |
| contentScrollToFocus         | 滚动到焦点位置                         | ^[Function]`(position: number) => void`  |
| getRootNodeViewState         | 获取根节点状态                         | ^[Function]`(page: number, position: number, callback: QTViewStateCallback) => void`  |
| getChildNodeViewState        | 获取孩子节点状态                         | ^[Function]`(page: number, position: number, childIndex: number, name: number, callback: QTViewStateCallback) => void`  |
| dispatchUIFunctionOnChildNode| 孩子节点调用方法                         | ^[Function]`(page: number, position: number, childIndex: number, listViewName: string, functionParams: QTListViewItemFunctionParams) => void`  |
| updateItemMatched            | 更新节点                         | ^[Function]`(key: string, id: any, newData: any) => void`  |
| updateChildNode              | 更新孩子节点                         | ^[Function]`(page: number, position: number, childIndex: number, data: any) => void`  |
| updateRootNode               | 更新根节点                         | ^[Function]`(page: number, position: number, data: any) => void`  |
| destroy                      | 销毁                         | ^[Function]`() => void`  |
| cancelAll                    | 取消所有任务                         | ^[Function]`() => void`  |
| translationLeft              | 向左位移                         | ^[Function]`() => void`  |
| translationRight             | 向右位移                         | ^[Function]`() => void`  |
