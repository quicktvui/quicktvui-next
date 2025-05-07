---
title: ProgressBar
lang: zh-CN
---

# ProgressBar

:::demo ## 基础用法

component/progress-bar/basic

:::

## API

### DataStructure

#### QTSeekBarMode

进度条的模式

| Name          | Description                | Type                          |   Default   |
| -------------- | ------------------| ----------------------------|---------|
| QT_SEEK_BAR_MODE_SINGLE | 单进度条模式   | ^[QTSeekBarMode] |       |
| QT_SEEK_BAR_MODE_RANGE  | 双进度条模式   | ^[QTSeekBarMode] |       |

#### QTSeekBarGravity

进度条的位置

| Name          | Description                | Type                          |   Default   |
| -------------- | ------------------| ----------------------------|---------|
| QT_SEEK_BAR_GRAVITY_TOP | 顶部   | ^[QTSeekBarGravity] |       |
| QT_SEEK_BAR_GRAVITY_BOTTOM  | 底部   | ^[QTSeekBarGravity] |       |
| QT_SEEK_BAR_GRAVITY_CENTER  | 居中   | ^[QTSeekBarGravity] |       |

#### QTSeekBarIndicatorMode

进度条指示器模式

| Name          | Description                | Type                          |   Default   |
| -------------- | ------------------| ----------------------------|---------|
| QT_SEEK_BAR_INDICATION_MODE_SHOW_WHEN_TOUCH | 触摸时显示   | ^[QTSeekBarIndicatorMode] |       |
| QT_SEEK_BAR_INDICATION_MODE_ALWAYS_HIDE  | 一直隐藏   | ^[QTSeekBarIndicatorMode] |       |
| QT_SEEK_BAR_INDICATION_MODE_ALWAYS_SHOW_AFTER_TOUCH  | 触摸后显示   | ^[QTSeekBarIndicatorMode] |       |
| QT_SEEK_BAR_INDICATION_MODE_ALWAYS_SHOW  | 一直显示   | ^[QTSeekBarIndicatorMode] |       |

#### QTSeekBarTickMarkMode

进度条刻度模式

| Name          | Description                | Type                          |   Default   |
| -------------- | ------------------| ----------------------------|---------|
| QT_SEEK_BAR_TICK_MARK_MODE_NUMBER | 数字   | ^[QTSeekBarTickMarkMode] |       |
| QT_SEEK_BAR_TICK_MARK_MODE_OTHER  | 其他   | ^[QTSeekBarTickMarkMode] |       |

#### QTSeekBarTickMarkGravity

进度条刻度位置

| Name          | Description                | Type                          |   Default   |
| -------------- | ------------------| ----------------------------|---------|
| QT_SEEK_BAR_TICK_MARK_GRAVITY_LEFT | 左   | ^[QTSeekBarIndicatorMode] |       |
| QT_SEEK_BAR_TICK_MARK_GRAVITY_CENTER  | 居中   | ^[QTSeekBarIndicatorMode] |       |
| QT_SEEK_BAR_TICK_MARK_GRAVITY_RIGHT  | 右   | ^[QTSeekBarIndicatorMode] |       |

#### QTSeekBarTickMarkLayoutGravity

进度条刻度布局位置

| Name          | Description                | Type                          |   Default   |
| -------------- | ------------------| ----------------------------|---------|
| QT_SEEK_BAR_TICK_MARK_LAYOUT_GRAVITY_TOP | 上   | ^[QTSeekBarTickMarkLayoutGravity] |       |
| QT_SEEK_BAR_TICK_MARK_LAYOUT_GRAVITY_BOTTOM  | 下   | ^[QTSeekBarTickMarkLayoutGravity] |       |

### Attributes

| Name                            | Description                               | Type                                              | Default |
| ------------------------------- | ----------------------------------------- | --------------------------------------------------| ------- |
| backgroundColor                 | 背景颜色                                    | ^[string]                                         | -       |
| cornerRadius                    | 圆角                                       | ^[number]                                         | -       |
| secondColor                     | 第二颜色                                    | ^[string]                                         | -       |
| show                            | 是否显示                                    | ^[boolean]                                        | true    |
| maxProgress                     | 总长度                                      | ^[number]                                         | -       |
| secondProgress                  | 第二总长度                                   | ^[number]                                         | -       |
| color                           | 颜色                                        | ^[object]`{startColor: string, endColor: string}`| -       |
| visible                         | 该方法用于设置是否可见                          | ^[boolean]   |
| focusable                       | 该方法用于设置是否能获取焦点                     | ^[boolean]   |
| clickable                       | 该方法用于设置是否可点击                        | ^[boolean]   |
| leftSeekBarVisible              | 该方法用于设置左进度条是否可见                    | ^[boolean]   |
| rightSeekBarVisible             | 该方法用于设置右进度条是否可见                    | ^[boolean]   |
| seekBarMode                     | 该方法用于设置进度条模式                         | ^[QTSeekBarMode]   |
| progress                        | 该方法用于设置进度条进度                         | ^[number]   |
| rangeProgress                   | 该方法用于设置范围进度                           | ^[object]`{leftProgress: number, rightProgress: number}`   |
| range                           | 该方法用于设置进度条范围                          | ^[object]`{min: number, max: number, minInterval: number}`   |
| gravity                         | 该方法用于设置进度条位置                          | ^[QTSeekBarGravity]   |
| progressWidth                   | 该方法用于设置进度条宽度                          | ^[number]   |
| progressHeight                  | 该方法用于设置进度条高度                          | ^[number]   |
| progressLeft                    | 该方法用于设置进度条左边距                        | ^[number]   |
| progressRight                   | 该方法用于设置进度条右边距                        | ^[number]   |
| progressTop                     | 该方法用于设置进度条顶边距                        | ^[number]   |
| progressBottom                  | 该方法用于设置进度条底边距                        | ^[number]   |
| progressRadius                  | 该方法用于设置进度条圆角                          | ^[number]   |
| progressColor                   | 该方法用于设置进度条颜色                          | ^[number]   |
| progressDefaultColor            | 该方法用于设置进度条默认颜色                       | ^[number]  |
| progressDrawable                | 该方法用于设置进度条默认渐变图                      | ^[ESGradient]   |
| progressDefaultDrawable         | 该方法用于设置进度条默认渐变图                      | ^[ESGradient]   |
| progressUrl                     | 该方法用于设置进度条图片地址                        | ^[string]   |
| progressDefaultUrl              | 该方法用于设置进度条默认图片地址                     | ^[string]   |
| showIndicator                   | 该方法用于设置是否显示进度条指示器                   | ^[boolean]   |
| showLeftIndicator               | 该方法用于设置是否显示左进度条指示器                  | ^[boolean]   |
| showRightIndicator              | 该方法用于设置是否显示右进度条指示器                  | ^[boolean]   |
| indicatorShowMode               | 该方法用于设置进度条指示器模式                       | ^[QTSeekBarIndicatorMode]   |
| leftIndicatorShowMode           | 该方法用于设置进度条左指示器模式                      | ^[QTSeekBarIndicatorMode]   |
| rightIndicatorShowMode          | 该方法用于设置进度条右指示器模式                      | ^[QTSeekBarIndicatorMode]   |
| indicatorWidth                  | 该方法用于设置进度条指示器宽度                        | ^[number]   |
| leftIndicatorWidth              | 该方法用于设置进度条左指示器宽度                      | ^[number]   |
| rightIndicatorWidth             | 该方法用于设置进度条右指示器宽度                      | ^[number]   |
| indicatorHeight                 | 该方法用于设置进度条指示器高度                        | ^[number]   |
| leftIndicatorHeight             | 该方法用于设置进度条左指示器高度                      | ^[number]   |
| rightIndicatorHeight            | 该方法用于设置进度条右指示器高度                      | ^[number]   |
| indicatorTextDecimalFormat      | 该方法用于设置进度条指示器数字格式                     | ^[string]   |
| leftIndicatorTextDecimalFormat  | 该方法用于设置进度条左指示器数字格式                    | ^[string]   |
| rightIndicatorTextDecimalFormat | 该方法用于设置进度条右指示器数字格式                    | ^[string]   |
| indicatorTextStringFormat       | 该方法用于设置进度条指示器文字格式                      | ^[string]   |
| leftIndicatorTextStringFormat   | 该方法用于设置进度条左指示器文字格式                    | ^[string]   |
| rightIndicatorTextStringFormat  | 该方法用于设置进度条右指示器文字格式                    | ^[string]   |
| indicatorMargin                 | 该方法用于设置进度条指示器Margin                       | ^[number]   |
| leftIndicatorMargin             | 该方法用于设置进度条左指示器Margin                     | ^[number]   |
| rightIndicatorMargin            | 该方法用于设置进度条右指示器Margin                     | ^[number]   |
| indicatorPaddingBottom          | 该方法用于设置进度条指示器底部边距                      | ^[number]   |
| leftIndicatorPaddingBottom      | 该方法用于设置进度条左指示器底部边距                     | ^[number]   |
| rightIndicatorPaddingBottom     | 该方法用于设置进度条右指示器底部边距                     | ^[number]   |
| indicatorPaddingTop             | 该方法用于设置进度条指示器顶部边距                       | ^[number]   |
| leftIndicatorPaddingTop         | 该方法用于设置进度条左指示器顶部边距                     | ^[number]   |
| rightIndicatorPaddingTop        | 该方法用于设置进度条右指示器顶部边距                      | ^[number]   |
| indicatorPaddingLeft            | 该方法用于设置进度条指示器左边边距                        | ^[number]   |
| leftIndicatorPaddingLeft        | 该方法用于设置进度条左指示器左边边距                       | ^[number]   |
| rightIndicatorPaddingLeft       | 该方法用于设置进度条右指示器左边边距                       | ^[number]   |
| indicatorPaddingRight           | 该方法用于设置进度条指示器右边边距                       | ^[number]   |
| leftIndicatorPaddingRight       | 该方法用于设置进度条左指示器右边边距                     | ^[number]   |
| rightIndicatorPaddingRight      | 该方法用于设置进度条右指示器右边边距                     | ^[number]   |
| indicatorBackgroundColor        | 该方法用于设置进度条指示器背景颜色                       | ^[number]   |
| leftIndicatorBackgroundColor    | 该方法用于设置进度条左指示器背景颜色                     | ^[number]   |
| rightIndicatorBackgroundColor   | 该方法用于设置进度条右指示器背景颜色                     | ^[number]   |
| indicatorRadius                 | 该方法用于设置进度条指示器圆角                          | ^[number]   |
| leftIndicatorRadius             | 该方法用于设置进度条左指示器圆角                        | ^[number]   |
| rightIndicatorRadius            | 该方法用于设置进度条右指示器圆角                        | ^[number]  |
| indicatorTextSize               | 该方法用于设置进度条指示器文字大小                       | ^[number]   |
| leftIndicatorTextSize           | 该方法用于设置进度条左指示器文字大小                     | ^[number]   |
| rightIndicatorTextSize          | 该方法用于设置进度条右指示器文字大小                     | ^[number]   |
| indicatorTextColor              | 该方法用于设置进度条指示器文字颜色                       | ^[number]   |
| leftIndicatorTextColor          | 该方法用于设置进度条左指示器文字颜色                     | ^[number]   |
| rightIndicatorTextColor         | 该方法用于设置进度条右指示器文字颜色                     | ^[number]   |
| indicatorArrowSize              | 该方法用于设置进度条指示器箭头的尺寸                     | ^[number]  |
| leftIndicatorArrowSize          | 该方法用于设置进度条左指示器箭头的尺寸                   | ^[number]   |
| rightIndicatorArrowSize         | 该方法用于设置进度条右指示器箭头的尺寸                   | ^[number]   |
| indicatorDrawable               | 该方法用于设置进度条指示器图片                          | ^[ESGradient]  |
| leftIndicatorDrawable           | 该方法用于设置进度条左指示器图片                        | ^[ESGradient]  |
| rightIndicatorDrawable          | 该方法用于设置进度条右指示器图片                        | ^[ESGradient]   |
| indicatorUrl                    | 该方法用于设置进度条指示器图片网络地址                   | ^[string]   |
| leftIndicatorUrl                | 该方法用于设置进度条左指示器图片网络地址                  | ^[string]   |
| rightIndicatorUrl               | 该方法用于设置进度条右指示器图片网络地址                  | ^[string]   |
| thumbWidth                      | 该方法用于设置进度条滑块的宽度                          | ^[number]   |
| leftThumbWidth                  | 该方法用于设置进度条左滑块的宽度                         | ^[number]   |
| rightThumbWidth                 | 该方法用于设置进度条右滑块的宽度                         | ^[number]   |
| thumbHeight                     | 该方法用于设置进度条滑块的高度                           | ^[number]   |
| leftThumbHeight                 | 该方法用于设置进度条左滑块的高度                         | ^[number]   |
| rightThumbHeight                | 该方法用于设置进度条右滑块的高度                         | ^[number]   |
| thumbScaleRatio                 | 该方法用于设置进度条滑块的变形度                         | ^[number]   |
| leftThumbScaleRatio             | 该方法用于设置进度条左滑块的变形度                       | ^[number]   |
| rightThumbScaleRatio            | 该方法用于设置进度条右滑块的变形度                       | ^[number]   |
| thumbActivate                   | 该方法用于激活进度条滑块                               | ^[boolean]   |
| leftThumbActivate               | 该方法用于激活进度条左滑块                              | ^[boolean]  |
| rightThumbActivate              | 该方法用于激活进度条右滑块                              | ^[boolean]  |
| thumbDrawable                   | 该方法用于设置进度条滑块图片                            | ^[ESGradient]   |
| leftThumbDrawable               | 该方法用于设置进度条左滑块图片                           | ^[ESGradient]   |
| rightThumbDrawable              | 该方法用于设置进度条右滑块图片                           | ^[ESGradient]   |
| thumbUrl                        | 该方法用于设置进度条滑块图片地址                         | ^[string]   |
| leftThumbUrl                    | 该方法用于设置进度条左滑块图片地址                        | ^[string]   |
| rightThumbUrl                   | 该方法用于设置进度条右滑块图片地址                        | ^[string]   |
| thumbInactivatedDrawable        | 该方法用于设置进度条滑块非激活状态图片                     | ^[ESGradient]   |
| leftThumbInactivatedDrawable    | 该方法用于设置进度条左滑块非激活状态图片                   | ^[ESGradient]   |
| rightThumbInactivatedDrawable   | 该方法用于设置进度条右滑块非激活状态图片                   | ^[ESGradient]   |
| thumbInactivatedUrl             | 该方法用于设置进度条滑块非激活状态图片地址                  | ^[string]   |
| leftThumbInactivatedUrl         | 该方法用于设置进度条左滑块非激活状态图片地址                | ^[string]   |
| rightThumbInactivatedUrl        | 该方法用于设置进度条右滑块非激活状态图片地址                 | ^[string]   |
| tickMarkMode                    | 该方法用于设置进度条刻度模式                              | ^[QTSeekBarTickMarkMode]   |
| tickMarkGravity                 | 该方法用于设置进度条刻度位置                              | ^[QTSeekBarTickMarkGravity]   |
| tickMarkLayoutGravity           | 该方法用于设置进度条刻度在父视图位置                        | ^[QTSeekBarTickMarkLayoutGravity]   |
| tickMarkTextArray               | 该方法用于设置进度条刻度文字                               | ^[Array<string>]  |
| tickMarkTextMargin              | 该方法用于设置进度条刻度文字Margin                         | ^[number]   |
| tickMarkTextSize                | 该方法用于设置进度条刻度文字大小                            | ^[number]   |
| tickMarkTextColor               | 该方法用于设置进度条刻度文字颜色                            | ^[number]   |
| tickMarkInRangeTextColor        | 该方法用于设置进度条刻度文字颜色                            | ^[number]   |
| steps                           | 该方法用于设置进度条步长个数                               | ^[number]   |
| stepsWidth                      | 该方法用于设置进度条步长宽度                               | ^[number]   |
| stepsHeight                     | 该方法用于设置进度条步长高度                               | ^[number]   |
| stepsRadius                     | 该方法用于设置进度条步长圆角                               | ^[number]   |
| stepsColor                      | 该方法用于设置进度条步长颜色                               | ^[number]   |
| stepsAutoBonding                | 该方法用于设置进度条步长自动粘合                            | ^[boolean]   |
| stepsDrawable                   | 该方法用于设置进度条步长图片                                | ^[Array<ESGradient>]   |
| stepsUrl                        | 该方法用于设置进度条步长图片地址                             | ^[Array<string>]   |

### Events

| Name                     | Description     | Type                                                  |
| ------------------------ | ----------------| ----------------------------------------------------- |
| onFocusChanged           | 焦点变化          | ^[Function]`(isFocused: boolean) => void`             |
| onProgressChanged        | 进度变化          | ^[Function]`(progress: number) => void`               |

### Exposes

| Name                             | Description                 | Type                                           |
| -------------------------------- | --------------------------- | -----------------------------------------------|
| setFocusable             | 该方法用于设置是否能获取焦点          | ^[Function]`(focusable: boolean) => void`   |
| setClickable             | 该方法用于设置是否可点击          | ^[Function]`(clickable: boolean) => void`   |
| requestFocus             | 该方法用于请求焦点          | ^[Function]`() => void`   |
| setVisible               | 该方法用于设置是否可见          | ^[Function]`(visible: boolean) => void`   |
| setLeftSeekBarVisible    | 该方法用于设置左进度条是否可见          | ^[Function]`(visible: boolean) => void`   |
| setSeekBarMode    | 该方法用于设置进度条模式          | ^[Function]`(mode: QTSeekBarMode) => void`   |
| setProgress    | 该方法用于设置进度条进度          | ^[Function]`(progress: number) => void`   |
| setSecondProgress    | 该方法用于设置次进度条进度          | ^[Function]`(progress: number) => void`   |
| show    | 该方法用于设置是否显示进度条          | ^[Function]`(value: boolean) => void`   |
| setMaxProgress    | 该方法用于设置进度条最大进度          | ^[Function]`(progress: number) => void`   |
| setRangeProgress    | 该方法用于设置范围进度          | ^[Function]`(leftValue: number, rightValue: number) => void`   |
| getProgress    | 该方法用于获取进度          | ^[Function]`() => void`   |
| getLeftProgress    | 该方法用于获取左进度条进度          | ^[Function]`() => void`   |
| getRightProgress    | 该方法用于获取右进度条进度          | ^[Function]`() => void`   |
| setRange    | 该方法用于设置进度条范围          | ^[Function]`(min: number, max: number, minInterval: number) => void`   |
| setGravity    | 该方法用于设置进度条位置          | ^[Function]`(gravity: QTSeekBarGravity) => void`   |
| setProgressWidth    | 该方法用于设置进度条宽度          | ^[Function]`(progressWidth: number) => void`   |
| setProgressHeight    | 该方法用于设置进度条高度          | ^[Function]`(progressHeight: number) => void`   |
| setProgressRadius    | 该方法用于设置进度条圆角          | ^[Function]`(progressRadius: number) => void`   |
| setProgressColor    | 该方法用于设置进度条颜色          | ^[Function]`(progressColor: number) => void`   |
| setProgressDefaultColor    | 该方法用于设置进度条默认颜色          | ^[Function]`(defaultProgressColor: number) => void`   |
| setProgressDefaultDrawable    | 该方法用于设置进度条默认渐变图          | ^[Function]`(progressDefaultDrawable: ESGradient) => void`   |
| setProgressUrl    | 该方法用于设置进度条图片地址          | ^[Function]`(progressUrl: string) => void`   |
| setProgressDefaultUrl    | 该方法用于设置进度条默认图片地址          | ^[Function]`(progressDefaultUrl: string) => void`   |
| showIndicator    | 该方法用于设置是否显示进度条指示器          | ^[Function]`(showIndicator: boolean) => void`   |
| showLeftIndicator    | 该方法用于设置是否显示左进度条指示器          | ^[Function]`(showLeftIndicator: boolean) => void`   |
| showRightIndicator    | 该方法用于设置是否显示右进度条指示器          | ^[Function]`(showRightIndicator: boolean) => void`   |
| setIndicatorShowMode    | 该方法用于设置进度条指示器模式          | ^[Function]`(indicatorShowMode: QTSeekBarIndicatorMode) => void`   |
| setLeftIndicatorShowMode    | 该方法用于设置进度条左指示器模式          | ^[Function]`(indicatorShowMode: QTSeekBarIndicatorMode) => void`   |
| setRightIndicatorShowMode    | 该方法用于设置进度条右指示器模式          | ^[Function]`(indicatorShowMode: QTSeekBarIndicatorMode) => void`   |
| setIndicatorWidth    | 该方法用于设置进度条指示器宽度          | ^[Function]`(indicatorWidth: number) => void`   |
| setLeftIndicatorWidth    | 该方法用于设置进度条左指示器宽度          | ^[Function]`(indicatorWidth: number) => void`   |
| setRightIndicatorWidth    | 该方法用于设置进度条右指示器宽度          | ^[Function]`(indicatorWidth: number) => void`   |
| setIndicatorHeight    | 该方法用于设置进度条指示器高度          | ^[Function]`(indicatorHeight: number) => void`   |
| setLeftIndicatorHeight    | 该方法用于设置进度条左指示器高度          | ^[Function]`(indicatorHeight: number) => void`   |
| setRightIndicatorHeight    | 该方法用于设置进度条右指示器高度          | ^[Function]`(indicatorHeight: number) => void`   |
| setIndicatorTextDecimalFormat    | 该方法用于设置进度条指示器数字格式          | ^[Function]`(formatPattern: string) => void`   |
| setLeftIndicatorTextDecimalFormat    | 该方法用于设置进度条左指示器数字格式          | ^[Function]`(formatPattern: string) => void`   |
| setRightIndicatorTextDecimalFormat    | 该方法用于设置进度条右指示器数字格式          | ^[Function]`(formatPattern: string) => void`   |
| setIndicatorTextStringFormat    | 该方法用于设置进度条指示器文字格式          | ^[Function]`(formatPattern: string) => void`   |
| setLeftIndicatorTextStringFormat    | 该方法用于设置进度条左指示器文字格式          | ^[Function]`(formatPattern: string) => void`   |
| setRightIndicatorTextStringFormat    | 该方法用于设置进度条右指示器文字格式          | ^[Function]`(formatPattern: string) => void`   |
| setIndicatorMargin    | 该方法用于设置进度条指示器Margin          | ^[Function]`(indicatorMargin: number) => void`   |
| setLeftIndicatorMargin    | 该方法用于设置进度条左指示器Margin          | ^[Function]`(indicatorMargin: number) => void`   |
| setRightIndicatorMargin    | 该方法用于设置进度条右指示器Margin          | ^[Function]`(indicatorMargin: number) => void`   |
| setIndicatorPaddingBottom    | 该方法用于设置进度条指示器底部边距          | ^[Function]`(indicatorPaddingBottom: number) => void`   |
| setLeftIndicatorPaddingBottom    | 该方法用于设置进度条左指示器底部边距          | ^[Function]`(indicatorPaddingBottom: number) => void`   |
| setRightIndicatorPaddingBottom    | 该方法用于设置进度条右指示器底部边距          | ^[Function]`(indicatorPaddingBottom: number) => void`   |
| setIndicatorPaddingTop    | 该方法用于设置进度条指示器顶部边距          | ^[Function]`(indicatorPaddingTop: number) => void`   |
| setLeftIndicatorPaddingTop    | 该方法用于设置进度条左指示器顶部边距          | ^[Function]`(indicatorPaddingTop: number) => void`   |
| setRightIndicatorPaddingTop    | 该方法用于设置进度条右指示器顶部边距          | ^[Function]`(indicatorPaddingTop: number) => void`   |
| setIndicatorPaddingLeft    | 该方法用于设置进度条指示器左边边距          | ^[Function]`(indicatorPaddingLeft: number) => void`   |
| setLeftIndicatorPaddingLeft    | 该方法用于设置进度条左指示器左边边距          | ^[Function]`(indicatorPaddingLeft: number) => void`   |
| setRightIndicatorPaddingLeft    | 该方法用于设置进度条右指示器左边边距          | ^[Function]`(indicatorPaddingLeft: number) => void`   |
| setIndicatorPaddingRight    | 该方法用于设置进度条指示器右边边距          | ^[Function]`(indicatorPaddingRight: number) => void`   |
| setLeftIndicatorPaddingRight    | 该方法用于设置进度条左指示器右边边距          | ^[Function]`(indicatorPaddingRight: number) => void`   |
| setRightIndicatorPaddingRight    | 该方法用于设置进度条右指示器右边边距          | ^[Function]`(indicatorPaddingRight: number) => void`   |
| setIndicatorBackgroundColor    | 该方法用于设置进度条指示器背景颜色          | ^[Function]`(indicatorBackgroundColor: number) => void`   |
| setLeftIndicatorBackgroundColor    | 该方法用于设置进度条左指示器背景颜色          | ^[Function]`(indicatorBackgroundColor: number) => void`   |
| setRightIndicatorBackgroundColor    | 该方法用于设置进度条右指示器背景颜色          | ^[Function]`(indicatorBackgroundColor: number) => void`   |
| setIndicatorRadius    | 该方法用于设置进度条指示器圆角          | ^[Function]`(indicatorRadius: number) => void`   |
| setLeftIndicatorRadius    | 该方法用于设置进度条左指示器圆角          | ^[Function]`(indicatorRadius: number) => void`   |
| setRightIndicatorRadius    | 该方法用于设置进度条右指示器圆角          | ^[Function]`(indicatorRadius: number) => void`   |
| setIndicatorTextSize    | 该方法用于设置进度条指示器文字大小          | ^[Function]`(indicatorTextSize: number) => void`   |
| setLeftIndicatorTextSize    | 该方法用于设置进度条左指示器文字大小          | ^[Function]`(indicatorTextSize: number) => void`   |
| setRightIndicatorTextSize    | 该方法用于设置进度条右指示器文字大小          | ^[Function]`(indicatorTextSize: number) => void`   |
| setIndicatorTextColor    | 该方法用于设置进度条指示器文字颜色          | ^[Function]`(indicatorTextColor: number) => void`   |
| setLeftIndicatorTextColor    | 该方法用于设置进度条左指示器文字颜色          | ^[Function]`(indicatorTextColor: number) => void`   |
| setRightIndicatorTextColor    | 该方法用于设置进度条右指示器文字颜色          | ^[Function]`(indicatorTextColor: number) => void`   |
| setIndicatorArrowSize    | 该方法用于设置进度条指示器箭头的尺寸          | ^[Function]`(indicatorArrowSize: number) => void`   |
| setLeftIndicatorArrowSize    | 该方法用于设置进度条左指示器箭头的尺寸          | ^[Function]`(indicatorArrowSize: number) => void`   |
| setRightIndicatorArrowSize    | 该方法用于设置进度条右指示器箭头的尺寸          | ^[Function]`(indicatorArrowSize: number) => void`   |
| setIndicatorDrawable    | 该方法用于设置进度条指示器图片          | ^[Function]`(indicatorDrawable: ESGradient) => void`   |
| setLeftIndicatorDrawable    | 该方法用于设置进度条左指示器图片          | ^[Function]`(indicatorDrawable: ESGradient) => void`   |
| setRightIndicatorDrawable    | 该方法用于设置进度条右指示器图片          | ^[Function]`(indicatorDrawable: ESGradient) => void`   |
| setIndicatorUrl    | 该方法用于设置进度条指示器图片网络地址          | ^[Function]`(indicatorUrl: string) => void`   |
| setLeftIndicatorUrl    | 该方法用于设置进度条左指示器图片网络地址          | ^[Function]`(indicatorUrl: string) => void`   |
| setRightIndicatorUrl    | 该方法用于设置进度条右指示器图片网络地址          | ^[Function]`(indicatorUrl: string) => void`   |
| setThumbWidth    | 该方法用于设置进度条滑块的宽度          | ^[Function]`(thumbWidth: number) => void`   |
| setLeftThumbWidth    | 该方法用于设置进度条左滑块的宽度          | ^[Function]`(thumbWidth: number) => void`   |
| setRightThumbWidth    | 该方法用于设置进度条右滑块的宽度          | ^[Function]`(thumbWidth: number) => void`   |
| setThumbHeight    | 该方法用于设置进度条滑块的高度          | ^[Function]`(thumbHeight: number) => void`   |
| setLeftThumbHeight    | 该方法用于设置进度条左滑块的高度          | ^[Function]`(thumbHeight: number) => void`   |
| setRightThumbHeight    | 该方法用于设置进度条右滑块的高度          | ^[Function]`(thumbHeight: number) => void`   |
| scaleThumb    | 该方法用于进度条滑块形变          | ^[Function]`() => void`   |
| scaleLeftThumb    | 该方法用于进度条左滑块形变          | ^[Function]`() => void`   |
| scaleRightThumb    | 该方法用于进度条右滑块形变          | ^[Function]`() => void`   |
| resetThumb    | 该方法用于重置进度条滑块          | ^[Function]`() => void`   |
| resetLeftThumb    | 该方法用于重置进度条左滑块          | ^[Function]`() => void`   |
| resetRightThumb    | 该方法用于重置进度条右滑块          | ^[Function]`() => void`   |
| setThumbScaleRatio    | 该方法用于设置进度条滑块的变形度          | ^[Function]`(thumbScaleRatio: number) => void`   |
| setLeftThumbScaleRatio    | 该方法用于设置进度条左滑块的变形度          | ^[Function]`(thumbScaleRatio: number) => void`   |
| setRightThumbScaleRatio    | 该方法用于设置进度条右滑块的变形度          | ^[Function]`(thumbScaleRatio: number) => void`   |
| setThumbActivate    | 该方法用于激活进度条滑块          | ^[Function]`(activate: boolean) => void`   |
| setLeftThumbActivate    | 该方法用于激活进度条左滑块          | ^[Function]`(activate: boolean) => void`   |
| setRightThumbActivate    | 该方法用于激活进度条右滑块          | ^[Function]`(activate: boolean) => void`   |
| setThumbDrawable    | 该方法用于设置进度条滑块图片          | ^[Function]`(drawable: ESGradient) => void`   |
| setLeftThumbDrawable    | 该方法用于设置进度条左滑块图片          | ^[Function]`(drawable: ESGradient) => void`   |
| setRightThumbDrawable    | 该方法用于设置进度条右滑块图片          | ^[Function]`(drawable: ESGradient) => void`   |
| setThumbUrl    | 该方法用于设置进度条滑块图片地址          | ^[Function]`(url: string) => void`   |
| setLeftThumbUrl    | 该方法用于设置进度条左滑块图片地址          | ^[Function]`(url: string) => void`   |
| setRightThumbUrl    | 该方法用于设置进度条右滑块图片地址          | ^[Function]`(url: string) => void`   |
| setThumbInactivatedDrawable    | 该方法用于设置进度条滑块非激活状态图片          | ^[Function]`(drawable: ESGradient) => void`   |
| setLeftThumbInactivatedDrawable    | 该方法用于设置进度条左滑块非激活状态图片          | ^[Function]`(drawable: ESGradient) => void`   |
| setRightThumbInactivatedDrawable    | 该方法用于设置进度条右滑块非激活状态图片          | ^[Function]`(drawable: ESGradient) => void`   |
| setThumbInactivatedUrl    | 该方法用于设置进度条滑块非激活状态图片地址          | ^[Function]`(url: string) => void`   |
| setLeftThumbInactivatedUrl    | 该方法用于设置进度条左滑块非激活状态图片地址          | ^[Function]`(url: string) => void`   |
| setRightThumbInactivatedUrl    | 该方法用于设置进度条右滑块非激活状态图片地址          | ^[Function]`(url: string) => void`   |
| setTickMarkMode    | 该方法用于设置进度条刻度模式          | ^[Function]`(tickMarkMode: QTSeekBarTickMarkMode) => void`   |
| setTickMarkGravity    | 该方法用于设置进度条刻度位置          | ^[Function]`(tickMarkGravity: QTSeekBarTickMarkGravity) => void`   |
| setTickMarkLayoutGravity    | 该方法用于设置进度条刻度在父视图位置          | ^[Function]`(tickMarkLayoutGravity: QTSeekBarTickMarkLayoutGravity) => void`   |
| setTickMarkTextArray    | 该方法用于设置进度条刻度文字          | ^[Function]`(tickMarkTextArray: Array<string>) => void`   |
| setTickMarkTextMargin    | 该方法用于设置进度条刻度文字Margin          | ^[Function]`(tickMarkTextMargin: number) => void`   |
| setTickMarkTextSize    | 该方法用于设置进度条刻度文字大小          | ^[Function]`(tickMarkTextSize: number) => void`   |
| setTickMarkInRangeTextColor    | 该方法用于设置进度条刻度文字颜色          | ^[Function]`(tickMarkInRangeTextColor: number) => void`   |
| setSteps    | 该方法用于设置进度条步长个数          | ^[Function]`(steps: number) => void`   |
| setStepsWidth    | 该方法用于设置进度条步长宽度          | ^[Function]`(stepsWidth: number) => void`   |
| setStepsHeight    | 该方法用于设置进度条步长高度          | ^[Function]`(stepsHeight: number) => void`   |
| setStepsRadius    | 该方法用于设置进度条步长圆角          | ^[Function]`(stepsRadius: number) => void`   |
| setStepsColor    | 该方法用于设置进度条步长颜色          | ^[Function]`(stepsColor: number) => void`   |
| setStepsDrawable    | 该方法用于设置进度条步长图片          | ^[Function]`(drawableArray: Array<ESGradient>) => void`   |
| setStepsUrl    | 该方法用于设置进度条步长图片地址          | ^[Function]`(urlArray: Array<string>) => void`   |
| setStepsAutoBonding    | 该方法用于设置进度条步长自动粘合          | ^[Function]`(stepsAutoBonding: boolean) => void`   |









