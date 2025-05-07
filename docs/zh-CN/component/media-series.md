---
title: MediaSeries
lang: zh-CN
---

# MediaSeries

## API

### Attributes

| Name                    | Description       | Type                  | Default              |
| ----------------------- | ----------------- | --------------------- | -------------------- |
| gradientBackground      | 背景颜色            | ^[QTGradient]        | `{colors:['#1AFFFFFF','#1AFFFFFF'],orientation:6,cornerRadius:8}`|
| gradientFocusBackground | 焦点状态背景颜色      | ^[QTGradient]        | `{colors:['#FFFFFF','#FFFFFF'],orientation:6,cornerRadius:8}`    |
| iconGradientBackground  | 图标背景颜色         | ^[QTGradient]        | `{colors:['#FFB67827','#FFDBAF5C'],cornerRadius:4,orientation:6}`|
| markColor               | 角标颜色            | ^[string]            | #FF4E46               |
| markVipColor            | VIP角标颜色         | ^[string]            | #FFD97C               |
| textColors              | 文字颜色            | ^[QTStateListColor]  | `{color:'rgba(255, 255, 255, .5)',focusColor:'rgba(0, 0, 0, 1)',selectColor:'rgba(255, 255, 255, .5)'}`|
| textVipColors           | VIP文字颜色         | ^[QTStateListColor]  | `{color:'#FFD97C',focusColor:'#B67827',selectColor:'#B67827'}'}` |
| itemDivWidth            | 选集条目的宽度       | ^[number]            | 490                    |
| itemDivHeight           | 选集条目的高度       | ^[number]            | 100                    |

### Events

| Name               | Description         | Type                                             |
| -------------------| ------------------- | ------------------------------------------------ |
| item-focused       | 选集条目焦点变化事件    | ^[Function]`(event: QTMediaSeriesEvent) => void` |
| item-click         | 选集条目点击事件       | ^[Function]`(event: QTMediaSeriesEvent) => void` |
| load-data          | 加载数据              | ^[Function]`(event: QTMediaSeriesEvent) => void` |
| group-item-focused | 选集分组条目焦点变化事件 | ^[Function]`(event: QTMediaSeriesEvent) => void` |

### Exposes

| Method                       | Description                    | Type                                                                          |
|------------------------------|--------------------------------|-------------------------------------------------------------------------------|
| setup                        | 设置                            | ^[Function]`() => void`  |
| setInitData                  | 设置初始化数据                    | ^[Function]`(type: QTMediaSeriesType, group: QTMediaSeriesGroup, styleType: QTMediaSeriesStyleType, data: QTMediaSeriesData) => void`  |
| setPageData                  | 设置页面数据                      | ^[Function]`(page: number, data: Array<any>) => void`  |
| scrollTo                     | 滚动到指定位置                    | ^[Function]`(position: number) => void`  |
| scrollToWithOffset           | 滚动到指定位置并偏移               | ^[Function]`(position: number, offset: number, anim: boolean) => void`  |
| setSelected                  | 设置选中位置                      | ^[Function]`(position: number) => void`  |
| setGroupSelected             | 设置选中组位置                    | ^[Function]`(position: number) => void`  |
| release                      | 回收                            | ^[Function]`() => void`  |
