---
title: Waterfall Structure (AI)
lang: zh-CN
---

# Waterfall 结构（AI可读版）

本文将 `waterfall_structure.jpg` 转为文本结构，方便 AI 理解层级、字段和布局规则。

## 1. 层级关系

```text
Waterfall
└── Section[]
    ├── SectionTitle
    └── SectionContent
        └── Item[]
```

说明：
- `Waterfall` 是根容器。
- 每个 `Section` 至少包含 `style`、`itemList`，可选 `title`、`titleStyle`、`decoration`。
- `SectionContent` 中放置多个 `Item`。

## 2. 图中视觉层与语义映射

图中从外到内可理解为：

```text
Section Decoration (红色虚线)
  -> Item Decoration (黑色点虚线)
    -> Item Margin (紫色虚线)
      -> Item Padding (蓝色点线)
        -> Item Content (灰色块)
```

方向统一为四边：`top / right / bottom / left`。

## 3. 字段映射（与代码一致）

| 图中概念 | 代码字段 | 备注 |
| --- | --- | --- |
| Waterfall | `QTWaterfall` | `width`, `height`, `visibleType` |
| Section | `QTWaterfallSection` | `type`, `style`, `itemList`, `title`, `titleStyle`, `decoration` |
| Item | `QTWaterfallItem` | `type`, `style`, `decoration` |
| Section Decoration | `section.decoration.{left,top,right,bottom}` | 四边装饰间距 |
| Item Decoration | `item.decoration.{left,top,right,bottom}` | 四边装饰间距（参与布局计算） |
| Item Margin | `item.style.margin*` | `margin`, `marginTop` 等 |
| Item Padding | `item.style.padding*` | `padding`, `paddingTop` 等 |
| Section 间距 | `section.style.spacing` | 行内/条目间距（layout 计算使用） |

相关类型定义来源：
- `packages/components/waterfall/src/waterfall-types.ts`
- `packages/components/flex/src/flex-types.ts`

## 4. 布局规则（Flex Section）

`QT_WATERFALL_SECTION_TYPE_FLEX` 的核心布局逻辑在：
- `packages/components/waterfall/src/QTWaterfallDataAdapter.ts`

可简化为：

```text
for each item in section.itemList:
  width  = item.style.width
  height = item.style.height

  if item.style.x and item.style.y are defined:
    item.layout = [x, y, width, height]
  else:
    deco = item.decoration (left/top/right/bottom)

    if rightMost + width + deco.right > sectionWidth:
      wrap to next line
      downMost += lineHeight + section.style.spacing
      rightMost = 0
      lineHeight = 0

    item.layout.x = rightMost + deco.left
    item.layout.y = downMost + deco.top

    lineHeight = max(lineHeight, height + deco.top + deco.bottom)
    sectionHeight = max(sectionHeight, item.layout.y + height + deco.bottom)
    rightMost += width + section.style.spacing + deco.left + deco.right

final section height =
  sectionHeight
  + titleStyle.height
  + titleStyle.marginTop + titleStyle.marginBottom
  + titleStyle.paddingTop + titleStyle.paddingBottom
```

注意：
- 当前 `layoutItem` 中，`section.decoration` 相关计算是注释状态；`item.decoration` 会参与布局。
- 若 `item.style.x/y` 存在，则该条目走绝对布局坐标，不参与自动排布。

## 5. 关键约束（AI 必须遵守）

这是最容易被忽略、但会直接导致 UI 错误的规则。

### 5.1 默认语境

- `qt-waterfall` 的 `#item` 插槽是在 `flex-section` 内渲染的。
- 因此自定义 `item` 默认要按 `QT_WATERFALL_SECTION_TYPE_FLEX` 的布局规则处理。

### 5.2 自定义 Item 根节点硬约束

自定义 `item` 根节点必须透传这两个属性：

```vue
layout="${layout}"
flexStyle="${style}"
```

推荐最小写法：

```vue
<template>
  <div
    layout="${layout}"
    flexStyle="${style}"
    :focusable="true"
    eventClick
    eventFocus
  >
    <!-- 内容 -->
  </div>
</template>
```

### 5.3 不写会发生什么（根因）

- 缺少 `layout="${layout}"`：
  `x/y/width/height` 不能按 Waterfall 计算结果落到 item 上，多个 item 往往出现在相同起点（常见为左上角），表现为“堆叠到一块”。
- 缺少 `flexStyle="${style}"`：
  item 的动态样式上下文无法完整透传，样式与数据可能脱节（尺寸、间距、焦点态等），在复杂场景下同样会放大重叠/错位问题。

### 5.4 AI 生成代码检查清单

AI 生成自定义 `item` 代码时，必须逐条检查：

- 根节点是否包含 `layout="${layout}"`。
- 根节点是否包含 `flexStyle="${style}"`。
- 根节点是否可聚焦（按业务需要设置 `:focusable`、`eventFocus`、`eventClick`）。
- `section.type` 是否为 `QT_WATERFALL_SECTION_TYPE_FLEX`（或与插槽语义一致）。
- 未用纯 CSS 定位替代 `layout` 绑定。

### 5.5 本地图片必须加 `file://`（Waterfall / Tabs-Waterfall）

当图片来源是本地资源（例如 `import icon from '...png'`）且该值进入 Waterfall/Tabs-Waterfall 的数据对象时，必须补协议头：

```ts
const localIcon = `file://${icon}`
```

错误写法（容易在瀑布流条目里不显示或显示异常）：

```ts
icon
```

正确写法：

```ts
`file://${icon}`
```

推荐应用位置：
- `item.image.normal / focused`
- `item.corner`
- `item.icon / iconFocus`
- 其他最终喂给 `src` 的数据字段（通过 `${...}` 绑定到 `img` / `qt-image`）

## 6. AI可解析数据结构（YAML）

```yaml
waterfall:
  width: number
  height: number
  visibleType: none|normal|center
  sectionList:
    - _id: string
      type: number
      title: string
      style:
        width: number
        height: number
        spacing: number
        left: number
        top: number
        right: number
        bottom: number
      decoration:
        left: number
        top: number
        right: number
        bottom: number
      itemList:
        - _id: string
          type: number
          style:
            width: number
            height: number
            x: number
            y: number
            margin: number
            marginTop: number
            marginRight: number
            marginBottom: number
            marginLeft: number
            padding: number
            paddingTop: number
            paddingRight: number
            paddingBottom: number
            paddingLeft: number
          decoration:
            left: number
            top: number
            right: number
            bottom: number
```

## 7. 最小示例（JSON）

```json
{
  "width": 1920,
  "height": 1080,
  "sectionList": [
    {
      "_id": "sec-1",
      "type": 1002,
      "title": "SectionTitle",
      "style": {
        "width": 1800,
        "height": 0,
        "spacing": 20
      },
      "decoration": {
        "left": 24,
        "top": 16,
        "right": 24,
        "bottom": 16
      },
      "itemList": [
        {
          "_id": "item-1",
          "type": 10001,
          "style": {
            "width": 280,
            "height": 360,
            "padding": 8,
            "margin": 6
          },
          "decoration": {
            "left": 8,
            "top": 8,
            "right": 8,
            "bottom": 8
          }
        }
      ]
    }
  ]
}
```
