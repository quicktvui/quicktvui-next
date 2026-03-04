# QuickTVUI AI 开发者使用指南

## 一、 快速开始

### 第 1 步：打开你的 AI Agent

可使用任意支持终端执行命令的 AI Agent（例如 Gemini、Codex、Cursor Agent、Claude Code、OpenCode 等）。

### 第 2 步：把下面提示词复制给 AI

将以下内容原样粘贴给 AI：

````shell
# Install QuickTVUI AI Runtime

请在用户终端中执行以下命令，并在每一步执行后确认结果：

```bash
npm install -g @quicktvui/ai-cli @quicktvui/ai-skills
quicktvui-ai init
quicktvui-ai doctor --strict
```

如果当前目录是 QuickTVUI 项目，再执行：

```bash
npm install @quicktvui/ai --save-dev
```

如果用户提供了项目路径，再执行一次严格检查：

```bash
quicktvui-ai doctor --strict --project <项目绝对路径>
quicktvui-ai validate --project <项目绝对路径>
```

安装完成后，必须先读取并确认 QuickTVUI skill 规则，再执行任何创建/编码操作。

按顺序检查并读取以下文件（读到一个即可）：

1) ~/.agents/skills/quicktvui/SKILL.md
2) ~/.codex/skills/quicktvui/SKILL.md
3) %USERPROFILE%\\.agents\\skills\\quicktvui\\SKILL.md
4) %USERPROFILE%\\.codex\\skills\\quicktvui\\SKILL.md

读取后先输出“已读取的实际路径 + Project Creation Hard Rules 摘要”，然后再执行任务。
创建项目时优先使用：
```bash
quicktvui-ai create-project <project-name>
```

完成后提醒用户重启或 reload AI Agent，让它重新扫描本地规则和 skills。
````

### 第 3 步：开始提问（示例）

把下面任意一句发给 AI：

1. `帮我创建一个新的 QuickTVUI 项目 quick-tv-app。`
2. `帮我用 QuickTVUI 框架做一个吃豆子小游戏。`
3. `检查这段样式是否违反 QuickTVUI 规则：.box { margin: 10px; width: 100%; }`
4. `请按 QuickTVUI 规范创建一个瀑布流页面。`
5. `qt-image 支持哪些属性？`
6. `创建一个首页，必须包含 onESCreate、onBackPressed 和 autofocus。`
7. `参考 ~/workspace/esapp/esapp-xiaoyou-science 这个项目中的代码，深度思考电视开发中的焦点问题。`

## 二、 常见场景 AI 辅助示例

### 场景 A：创建新页面

**输入：** `创建一个页面 首页`
**AI 应生成：** 包含 `onESCreate`、`onBackPressed`、`:autofocus="true"`，以及正确 CSS（kebab-case + px 单位）的代码。

### 场景 B：API 查询

**输入：** `qt-image 支持哪些属性？`
**AI 应检索：** `node_modules/@quicktvui/ai/rules/.docs/zh-CN/component/image.md`，并返回 `src`、`enableFade`、`resizeMode`
等属性。

### 场景 C：样式纠错

**输入：** `这段样式哪里不对？ .box { margin: 10px; width: 100%; }`
**AI 应纠错：** QuickTVUI 不支持 `margin` 简写，不支持 `%`，应拆分为 `margin-top` 等并改为 `px`。

## 三、 开发检查清单（Checklist）

当 AI 为你生成代码后，请核对：

- 标签检查：是否误用了 `p`、`img`、`h1`（应使用 `qt-text`、`qt-image`）。
- 生命周期：入口函数是否叫 `onESCreate(params)`。
- 返回键：处理函数是否叫 `onBackPressed()` 且已 `return`。
- 焦点系统：页面是否至少有一个元素设置 `:autofocus="true"`。
- 样式单位：是否全部为 `px`，且没有 `auto` 或 `%`。
- 属性命名：`<template>` 用 `camelCase`，`<style>` 用 `kebab-case`。

## 四、 如何通过 AI 上报框架问题（Bug Reporting）

当你怀疑是框架问题时，可直接对 AI 说：

- `我想上报一个 Bug`
- `这段代码运行报错，帮我反馈给官方`

建议流程：

1. AI 先做脱敏诊断（环境信息、错误日志、最小复现）。
2. AI 先询问你是否授权上报。
3. 你确认后，再由 AI 协助打开/生成 GitHub Issue 内容。

## 五、 故障排除

如果 AI 仍生成错误代码（例如使用 Web 标签）：

1. 重新引用规则：
    - `请参考 AGENTS.md（或 GEMINI.md / CLAUDE.md）重新检查规范。`
2. 强制读取文档：
    - `请读取 node_modules/@quicktvui/ai/rules/.docs/ 后再回答。`
3. 强制读取源码：
    - `请读取 node_modules/@quicktvui/ai/rules/.source/ 后再回答。`
4. 运行严格体检：

```bash
quicktvui-ai doctor --strict
```

## 六、 常见问题

### Q1：只安装 `~/.agents/skills/quicktvui` 就够了吗？

不够。建议同时安装项目内规则包：

```bash
npm install @quicktvui/ai --save-dev
```

### Q2：我只想快速验证是否安装成功？

执行：

```bash
quicktvui-ai doctor --strict
```

返回无错误即可。
