---
title: 'Theming'
lang: zh-CN
---

# 自定义主题

QuickTVUI 默认提供一套主题，CSS 命名采用 BEM 的风格，方便使用者覆盖样式。 但是如果需要大规模替换样式，例如： 将主题颜色从蓝色改为橙色或绿色，也许一个个将其覆盖起来不是一个好主意。

我们提供通过 SCSS 变量的方法来改变样式变量。

`theme-chalk` 使用SCSS编写而成。
你可以在 [`packages/theme-chalk/src/common/var.scss`](https://github.com/quicktvui/quicktvui/blob/dev/packages/theme-chalk/src/common/var.scss)
文件中查找SCSS变量。

:::warning

我们使用 sass 模块 ([sass:map](https://sass-lang.com/documentation/values/maps)...) 和 `@use` 来重构所有的 SCSS 变量。 通过对所有 SCSS
变量使用 `@use` ，解决了由 `@import` 造成的重复输出问题。

> [介绍 Sass 模块 | CSS-TRICKS](https://css-tricks.com/introducing-sass-modules/)

例如，我们使用 `$colors` 作为 map 来保存不同类型的颜色。

今后，我们将为每个组件自定义的变量编写文档。
你也可以直接查看源代码 [var.scss](https://github.com/element-plus/element-plus/blob/dev/packages/theme-chalk/src/common/var.scss)

:::

```scss
$colors: () !default;
$colors: map.deep-merge(
    (
      'white': #ffffff,
      'black': #000000,
      'primary': (
        'base': #409eff,
      ),
      'success': (
        'base': #67c23a,
      ),
      'warning': (
        'base': #e6a23c,
      ),
      'danger': (
        'base': #f56c6c,
      ),
      'error': (
        'base': #f56c6c,
      ),
      'info': (
        'base': #909399,
      ),
    ),
    $colors
);
```

### 如何覆盖它？

如果您的项目也使用了 SCSS，可以直接修改 QuickTVUI 的样式变量。 新建一个样式文件，例如
`./src/styles/quicktvui/index.scss`:

:::warning

您应该使用 `@use 'xxx.scss' as *;` 代替 `@import 'xxx.scss';`.

因为 sass 团队说他们最终会删除 `@import` 语法。

> [Sass: @use](https://sass-lang.com/documentation/at-rules/use) vs [Sass: @import](https://sass-lang.com/documentation/at-rules/import)

:::

```scss
// styles/quicktvui/index.scss
/* 只需要重写你需要的即可 */
@forward 'quicktvui/theme-chalk/src/common/var.scss' with (
    $bg-color: (
      'normal': gold,
      'focus': red,
      'select': #ffffff,
    ),
);

// 如果只是按需导入，则可以忽略以下内容。
// 如果你想导入所有样式:
// @use "quicktvui/theme-chalk/src/index.scss" as *;
```

然后在你的项目入口文件中，导入这个样式文件以替换 QuickTVUI 内置的 CSS：

:::tip

在 `quicktvui scss` 文件之前导入 quicktvui/index.scss 以避免 sass 混合变量的问题，因为我们需要通过你的自定义变量生成 light-x。

:::

创建一个 `quicktvui/index.scss`文件来合并你的变量和 quicktvui 的变量。 （如果你在 TypeScript 中导入了它们，他们将不会被合并）

:::tip

除此以外，你应该将你的 scss 文件与 quicktvui 变量的 scss 文件区分开来。 如果将它们混合在一起，`QuickTVUI` 每次热更新都需要编译大量的 scss 文件，这将会导致编译速度变慢。

:::

```ts
import { createApp } from 'vue'
import './src/styles/quicktvui/index.scss'
import QuickTVUI from 'quicktvui'
import App from './App.vue'

const app: ESApp = createESApp(App, router)
app.use(QuickTVUI)
```

如果您正在使用 webpack，并且需要在按需导入时自定义主题。

```ts
// webpack.config.ts
// use unplugin-quicktvui

import QuickTVUI from 'unplugin-quicktvui/webpack'

export default defineConfig({
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@use "~/styles/quicktvui/index.scss" as *;`,
      },
    },
  },
  plugins: [
    QuickTVUI({
      useSource: true,
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(sc|c)ss$/,
        use: [
          cssLoader,
          {
            loader: 'sass-loader',
            options: {
              additionalData: `@use "./src/styles/quicktvui/index.scss" as *;`,
            }
          }
        ]
      },
    ]
  },
})
```
