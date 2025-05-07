# 自定义组件流程

以为定义`QtTest`组件为例

## 第一步：创建组件

1. 在`packages/components/test`创建如下目录结构：

```
components
│
└───test
    │   index.ts
    └───src
    │   │   test.ts
    │   │   test-api.ts
    │   │   test-element.ts
    │   │   test-instance.ts
    │   │   test-types.ts
    │   │   ...
    └───style
        │   css.ts
        │   index.ts
        │   ...
```

说明

* `test.ts`为`qt-test`组件`QtTest`。
* `test-element.ts` 为 `Android`端定义的原生组件`QtTestElement`。(如果没有原生组件，此文件忽略)
* `test-api.ts` 为`qt`命令中对应的组件的相关命令。(支持全局API变量，eg.qt.test.xxxx，如果不需要导出API到`qt`全局变量，此文件忽略)
* `test-instance.ts`组件的实例
* `test-types.ts`组件中定义的类型

2. 在`packages/quicktvui/element.ts`中导出原生组件`QtTestElement`。(如果没有原生组件，此步骤忽略)

3. 在`packages/components/index.ts`中导出`QtTest`组件。

4. 在`packages/components/qt/src/qt-types.ts`中注册`QtTestAPI`(如果不需要导出API到`qt`全局变量，此步骤忽略)

## 第二步：创建样式

在`packages/theme-chalk/src`下创建样式：

1. 创建`test.scss`样式
2. 在`packages/theme-chalk/src/index.scss`中导出`test.scss`样式

```scss
@use './test';
```

3. 在`packages/components/test/style/index.ts`中引入`test.scss`样式

```ts
//1.首先引入base
import '@quicktvui/components/base/style'
//2.引入test.scss
import '@quicktvui/theme-chalk/src/test.scss'
```

4. 在`packages/components/test/style/css.ts`中引入编译输出的`qt-test.css`样式

`packages/theme-chalk/src/test.scss`最终会编译为：`@quicktvui/theme-chalk/qt-test.css`

```ts
//1.首先引入 base
import '@quicktvui/components/base/style/css'
//2.引入最终编译输出文件 qt-test.css
import '@quicktvui/theme-chalk/qt-test.css'
```

注意:

1). `CSS`要使用`BEM`命名规范。

BEM 的命名规则：block-name__element-name--modifier-name，也就是模块名 + 元素名 + 修饰器名。

`BEM`命名规范参考文档：

* [BEM 官方文档](https://yandex.com/dev/bem/)
* [组件化开发必知的CSS命名规范——BEM](https://juejin.cn/post/7281911124806926377)
* [CSS — BEM 命名规范](https://juejin.cn/post/6844903672162304013)

2). 项目使用`scss`

* [Scss 官方文档](https://www.sass.hk)
* [Sass 教程 | 菜鸟教程](https://www.runoob.com/sass)

## 第三步：注册组件

1. 在`packages/quicktvui/component.ts`中导出组件
2. 在`typing/component.ts`中导出组件类型
3. 在`global.d.ts`中导出全局组件

## 第四步：编辑文档

1. 在`doc/zh-CN/component/`中添加`test.md`组件

格式如下：

* 主标题：`Test`(不带`Qt`,不能写成`QtTest`)
* 二级标题：`API`
* 三级标题属性：`Attributes`
* 三级标题事件：`Events`
* 三级标题插槽：`Slots`

示例文档：

  ```markdown

    ---
    title: Test
    lang: zh-CN
    ---

    # Waterfall

    ## API

    ### Attributes

    | Name                            | Description       | Type                 | Default |
    | ------------------------------- | ----------------- | ---------------------| ------- |
    | enablePlaceholder               | 是否启用占位图       | ^[boolean]           | false   |

    ### Events

    | Name                     | Description     | Type                                                       |
    | ------------------------ | ----------------| ---------------------------------------------------------- |
    | onScroll                 | 页面滚动          | ^[Function]`(scrollX: number, scrollY: number) => void`    |

    ### Slots

    | Name        | Description             |
    | ----------- | ----------------------- |
    | default     | 自定义默认内容             |

  ```

2. 在`doc/examples/component/test/`文件夹下编写文档示例代码`basic.vue`

3. 在`doc/.vitepress/crowdin/zh-CN/pages/component.json`中添加`QtTest`组件

在`quick`节点下，添加文档路径

```json
  {
  "quick": {
    "text": "QuickTVUI 快应用组件",
    "children": [
      {
        "link": "/test",
        "text": "Test"
      }
    ]
  }
}
```

注意：`"link": "/test"`中的`test` 对应`test.md`的名称去掉`.md`

4. 运行`doc/package.json`中的`dev`命令，本地调试文档，查看效果

项目`doc`下执行：

  ```shell
  pnpm run dev
  ```

## 第五步：编译运行

执行项目根目录下的`package.json`中的`build`命令编译代码

## 第六步：调试

1.在`play`子项目`/play/src/components/qt-test/`中编写测试页面。

2.在`/play/src/routes.ts`中添加测试页面的路由信息。

```text
  ...Object.keys(QTTestPageList)
    .map(item => ({
      path: `/test/${item}`,
      name: `test/${item}`,
      component: QTTestPageList[item].component
    }))
```

注意：添加路由的根路径为`/test/${item}`

3.在`/play/src/views/nav`中添加测试页面的导航页面`qt-nav-test-page.vue`。

页面中循环渲染测试页面

```text
    <s-nav-button
        v-for="item in pageList" :key="item.id"
        :text="item.name"
        :url="`test/${item.id}`"/>
```

注意：`url`中的根路径为`/test/${item}`

4.在`/play/src/views/nav/index.ts`中注册导航页面`qt-nav-test-page.vue`。

```text
  qt_nav_test_page: {
    name: "QTTest",
    component: qt_nav_test_page
  }
```

2.在`play/scripts/quicktvui-webpack.dev.ts/`文件中，使用别名把`play`项目中的`quicktvui`指向第五步编译产物。(默认已经修改)

```
resolve: {
  extensions: [".js", ".vue", ".json", ".ts"],
  alias: (() => {
    const aliases = {
      // 使用别名，把play项目中的quicktvui指向第五步编译产物
      quicktvui: path.resolve("../dist/quicktvui")
    };
    return aliases;
  })()
}
```

3. 运行并测试组件。

项目根目录下执行：

```shell
pnpm run dev
```

## 第七步：提交代码

1. 执行项目根目录下的`package.json`中的`cz`命令提交代码

```shell
pnpm run cz
```

2. 推送到远程仓库

`git push <remote> <branch-name>`

## 第八步：发布版本（管理员集中发布）

发布到：https://www.npmjs.com

`npm publish --access public`
