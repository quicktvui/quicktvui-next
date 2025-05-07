---
title: AppIcon
lang: zh-CN
---

# Input ^(2.9)^(alpha)

:::demo ## 基础用法

component/input/basic

:::

## API

### Attributes

| Name                  | Description               | Type                                          | Default                                                      |
| --------------------- | ------------------------- |-----------------------------------------------| ------------------------------------------------------------ |
| text                  | 文字内容                  | ^[string]                                     | —                                                            |
| size                  | 输入框尺寸                | ^[string]`'large' \| 'default' \| 'small' `   | small                                                        |
| EType                 | 输入类型                  | ^[string]`'text' \|'number' \|'password'`     | text                                                         |
| strokeWidth           | 边框宽度                  | ^[number]                                     | 1                                                            |
| strokeColor           | 边框颜色                  | ^[string]                                     | \#979797                                                     |
| strokeRadius          | 边框圆角                  | ^[number]                                     | 16                                                           |
| focusStrokeWidth      | 获焦边框宽度              | ^[number]                                     | 3                                                            |
| focusStrokeColor      | 获焦边框颜色              | ^[string]                                     | #ffffff                                                      |
| textSize              | 文字大小                  | ^[number]                                     | 22                                                           |
| hintText              | 提示文字                  | ^[string]                                     | 请输入                                                       |
| hintColor             | 提示文字颜色              | ^[string]                                     | #A8A8A8                                                      |
| textColor             | 输入文字颜色              | ^[string]                                     | #ffffff                                                      |
| suffixIcon            | 尾部icon                 | ^[string]`'psd' \| 'psdvis' \| 'error' \| 'succ' ` | —                                                      |
| disable               | 是否禁用                  | ^[boolean]                                    | false                                                        |
| mutiline              | 多行输入                  | ^[boolean]                                    | false                                                        |
| maxlength             | 字符长度                  | ^[number]                                     | —                                                            |
| leftPadding           | 文字左间距                | ^[number]                                     | —                                                            |
| rightPadding          | 文字右间距                | ^[number]                                     | —                                                            |
| gravity               | 文字位置                  | ^[string]`'top'\|'center'\|'right'`          | —                                                            |
| name                  | 组件别名                  | ^[string]                                     |                                                              |
| ident                 | 状态标识                  | ^[number]`'0'\|'1'\|'2'`                     | 0：默认  1: 失败  2: 成功；需配合succFocusTextColor、succFocusStrokeColor、errorFocusStrokeColor、errorFocusTextColor使用 |
| succFocusTextColor    | 成功状态下-获焦时文字颜色 | ^[string]                                     | —                                                            |
| succFocusStrokeColor  | 成功状态下-获焦时边框颜色 | ^[string]                                     | —                                                            |
| errorFocusTextColor   | 失败状态下-获焦时文字颜色 | ^[string]                                     | —                                                            |
| errorFocusStrokeColor | 失败状态下-获焦时边框颜色 | ^[string]                                     | —                                                            |



### Callback

| Method         | Description | 返回类型                       |
| -------------- | ----------- | ------------------------------ |
| onFocusChanged | 获焦状态    | `{name: 'xxx', isFocused: true}` |
| onTextChange   | 文字变化    | `{text: 'xxx', name: 'xxx'}`    |

