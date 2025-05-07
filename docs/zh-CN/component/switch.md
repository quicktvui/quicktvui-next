---
title: AppIcon
lang: zh-CN
---

# Switch ^(2.9)^(alpha)

:::demo ## 基础用法

component/switch/basic

:::

## API

### Attributes

| Name                    | Description    | Type       | Default |
|-------------------------|----------------|------------|---------|
| disabled                | 是否禁用           | ^[boolean] | false   |
| modelValue              | 设置switch开关状态   | ^[boolean] | false   |
| activeColor             | 背景颜色（开启）       | ^[string]  | #32CD66 |
| inactiveColor           | 背景颜色（关闭）       | ^[string]  | #E2E2E2 |
| sliderColor             | 摇杆颜色           | ^[string]  | #FFFFFF |
| inactiveBorderColor     | 关闭状态下边框颜色      | ^[string]  | #B5B5B5 |
| disabledActiveBgColor   | 禁用状态下背景颜色（开启）  | ^[string]  | #269A4D |
| disabledInactiveBgColor | 禁用状态下背景颜色（关闭）  | ^[string]  | #AAAAAA |
| borderSize              | 边框大小           | ^[number]  | 3       |
| sliderAssetsIcon        | 设置摇杆按钮assets图片 | ^[string]  |         |
| sliderNetworkIcon       | 边框摇杆按钮网络图片     | ^[string]  |         |

### Callback

| Method         | Description | 返回类型                                      |
|----------------|-------------|-------------------------------------------|
| onSwitchChange | 选中状态        | `{name: 'xxx', isChecked: true \| flase}` |

