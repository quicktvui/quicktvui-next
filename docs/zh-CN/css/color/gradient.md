---
title: Gradient
lang: zh-CN
---

# Gradient 渐变颜色

::: warning 注意：背景颜色必须设置透明 Gradient 才会生效

`background-color: transparent;`
:::

## 数据结构

```ts
export interface QTGradient {
  type?: QTGradientType
  shape?: QTGradientShape
  orientation?: QTGradientOrientation
  colors: Array<string>
  gradientRadius?: number
  cornerRadius?: number
  cornerRadii4?: Array<number>
  cornerRadii8?: Array<number>
}

export enum QTGradientOrientation {
  QT_GRADIENT_ORIENTATION_TOP_BOTTOM = 0,
  QT_GRADIENT_ORIENTATION_TR_BL = 1,
  QT_GRADIENT_ORIENTATION_RIGHT_LEFT = 2,
  QT_GRADIENT_ORIENTATION_BR_TL = 3,
  QT_GRADIENT_ORIENTATION_BOTTOM_TOP = 4,
  QT_GRADIENT_ORIENTATION_BL_TR = 5,
  QT_GRADIENT_ORIENTATION_LEFT_RIGHT = 6,
  QT_GRADIENT_ORIENTATION_TL_BR = 7,
}

export enum QTGradientShape {
  QT_GRADIENT_SHAPE_RECTANGLE = 0,
  QT_GRADIENT_SHAPE_OVAL = 1,
  QT_GRADIENT_SHAPE_LINE = 2,
  QT_GRADIENT_SHAPE_RING = 3,
}

export enum QTGradientType {
  QT_GRADIENT_TYPE_LINEAR_GRADIENT = 0,
  QT_GRADIENT_TYPE_RADIAL_GRADIENT = 1,
  QT_GRADIENT_TYPE_SWEEP_GRADIENT = 2,
}

```

## 基础用法

<img src="/css/gradient/basic.jpg" />

:::demo

css/gradient/basic

:::

## Type

<img src="/css/gradient/type.jpg" />

:::demo

css/gradient/type

:::

## Shape

<img src="/css/gradient/shape.jpg" />

:::demo

css/gradient/shape

:::

## Orientation

<img src="/css/gradient/orientation.jpg" />

:::demo

css/gradient/orientation

:::

## CornerRadius

<img src="/css/gradient/corner-radius.jpg" />

:::demo

css/gradient/corner-radius

:::

## CornerRadii4

<img src="/css/gradient/corner-radii4.jpg" />

:::demo

css/gradient/corner-radii4

:::
