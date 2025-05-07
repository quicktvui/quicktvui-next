---
title: PlayMarkView
lang: zh-CN
---

# PlayMarkView

```vue
<qt-play-mark
  style="width: 25px; height: 25px; position: absolute"
  markColor="#FFD97C"
/>
```

### Attributes

| Name        | Description    | Type                                                 | Default |
|-------------|----------------|------------------------------------------------------|---------|
| markColor   | 以字符串形式指定的背景色   | ^[string]`'例如黑色：#000000 或者 #ff000000`                | -       |       |
| stateColor  | 非焦点和焦点状态下不同颜色值 | ^[array]`数据中第0个代表普通状态，1为焦点状态，如['#FFFFFF','#FF0000']` | -       |       |
| makeLinearGradientColors  | 线性渐变色          | ^[array]`数据中第0个代表起始颜色，1为结束颜色，如['#FFFFFF','#FF0000']` | -       |       |
| roundCorner | 圆角值            | `number`                                             | -       |
| gap         | 间隔             | `number`                                             | -       |
| showType         | 类型             | ^[enum]`'0 (从底向上)' \| '1 (中间）' `                     | -       |

