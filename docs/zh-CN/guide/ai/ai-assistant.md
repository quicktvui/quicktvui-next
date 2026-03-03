# @quicktvui/ai 开发者使用指南

本指南将帮助你利用 AI 助手高效地开发 QuickTVUI 应用。

## 1. 快速上手

### 第一步：安装规范包

在你的 QuickTVUI 项目（建议使用 `quicktvui-template` 创建）中安装：

```bash
npm install @quicktvui/ai --save-dev
```

### 第二步：配置并开启推荐模型

为了达到最佳辅助效果，请在你的 AI 工具中优先选择以下模型：

- **Claude**
- **Codex**
- **Gemini**

AI 助手将自动读取项目根目录下的 `.cursorrules`, `GEMINI.md`, `CLAUDE.md` 等文件中的指令。

## 2. 常见场景 AI 辅助示例

### 场景 A：创建新页面

**输入：** `创建一个页面 首页`
**AI 将生成：** 包含 `onESCreate`, `onBackPressed`, `:autofocus="true"` 以及正确 CSS（kebab-case + px 单位）的代码。

### 场景 B：API 查询

**输入：** “qt-image 支持哪些属性？”
**AI 将检索：** 它会查阅 `node_modules/@quicktvui/ai/rules/.docs/component/image.md` 并返回：`src`, `enableFade`,
`resizeMode` 等原生支持的属性。

### 场景 C：样式纠错

**输入：** “这段样式哪里不对？ `.box { margin: 10px; width: 100%; }`”
**AI 将纠错：** “在 QuickTVUI 中不能使用 `margin` 简写，必须拆写为 `margin-top` 等；且不能使用 `100%`，必须使用具体的 `px`
值。”

## 3. 开发检查清单 (Checklist)

当 AI 为你生成代码后，请务必核对以下关键点：

- **标签检查**：是否误用了 `p`, `img`, `h1`？（必须是 `qt-text`, `qt-image`）
- **生命周期**：入口函数是否叫 `onESCreate(params)`？
- **返回键**：处理函数是否叫 `onBackPressed()` 且已 `return`？
- **焦点系统**：页面是否至少有一个元素设置了 `:autofocus="true"`？
- **样式单位**：是否所有数值都带 `px`？是否误用了 `auto` 或 `%`？
- **属性命名**：`<template>` 标签属性用 `camelCase`，`<style>` 样式名用 `kebab-case`。

## 4. 如何使用 AI 反馈框架问题 (Bug Reporting)

如果你在开发中发现框架可能存在 Bug（例如 AI 生成的代码符合规范但仍运行报错），你可以直接通过 AI 进行上报：

1. **触发上报**：你可以直接对 AI 说：“我想上报一个 Bug”、“这段代码运行报错，帮我反馈给官方”。
2. **AI 自动诊断**：

- AI 会自动检测你的运行环境和报错日志。
- 它会尝试编写一个**脱敏后的最小可复现 Demo**。

3. **寻求授权**：AI 会询问你：“检测到该问题可能属于框架缺陷，是否允许我协助将其上报到 GitHub 官方仓库？”
4. **快速提交**：获得授权后，AI 会自动尝试在你的电脑上**打开浏览器并预填充 GitHub Issue 内容**，你只需核对后点击提交即可。

## 5. 故障排除

如果 AI 生成了错误的代码（例如使用了 Web 标签）：

1. **重新引用规则**：告诉它：“请参考项目根目录下的 `.cursorrules` (或 `GEMINI.md`) 重新检查规范。”
2. **强制读取文档**：告诉它：“请读取 `node_modules/@quicktvui/ai/rules/.docs/` 下的相关组件文档后再回答。”

