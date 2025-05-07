---
title: CheckBoxGroup
lang: zh-CN
---

# CheckBoxGroup ^(2.9)^(alpha)

:::demo ## 基础用法

component/checkbox-group/basic

:::

## API

### Attributes

| Name        | Description       | Type                 | Default      |
|-------------|-------------------|----------------------|--------------|
| disabled    | 是否禁用              | ^[boolean]           | false        |
| orientation | 设置横向(0)布局,纵向(1)布局 | ^[number]`'0' \| '1' ` | 0横向       |



### Callback

| Method         | Description       | 返回类型                   |
|----------------|-------------------|------------------------|
| onCheckedChanged | 当前选中button的value值 | `{id: '1',text:"xxx"}` |


# CheckBoxButton

## API

### Attributes

| Name             | Description    | Type               | Default  |
|------------------|----------------|--------------------|----------|
| disabled         | 是否禁用           | ^[boolean]         | false    |
| value            | 按钮button值      | ^[string]          | —   |
| textColor        | 文字颜色           | ^[string]          | #FFFFFF  |
| fill             | 背景颜色           | ^[string]          | —        |
| disabledColor    | 禁用文字颜色         | ^[string]          | #42FFFFFF |
| defaultColor     | 默认未选中背景色       | ^[string]          | #42FFFFFF |
| focusColor       | 默认选中背景色        | ^[string]          | #FFFFFF  |
| defaultDrawable  | 未选中状态按钮背景      | ^[string]          | —        |
| selectDrawable   | 选中状态按钮背景       | ^[string]          | —        |
| focusDrawable    | 上焦状态按钮背景       | ^[string]          | —        |
| disabledDrawable | 禁用状态按钮背景       | ^[string]          | —        |
| drawableSize     | 设置默认按钮大小       | ^[number]          | 24       |
| size             | button按钮尺寸     | ^[string]`'large' \| 'default' \| 'small' `   | default |
| drawableLocation | 设置按钮图片位置       | ^[string]`'left' \| 'right' \| 'top' \|'bottom' `   | left  |
| drawablePadding  | 设置按钮文字间距       | ^[number]          | 10       |
| padding          | 设置图片距离父view距离  | ^[number]          | 8        |
| checked          | 设置默认选中button   | ^[boolean]         | false    |
| borderRadius     | 设置button按钮默认圆角 | ^[number]          | 8        |
