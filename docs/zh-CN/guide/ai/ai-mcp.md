# @quicktvui/ai-mcp

QuickTVUI 的 MCP 本地服务，提供文档检索、源码定位、doctor/validate、运行流程以及运行时调试能力。

## 能力概览

- 通过 MCP tools 暴露 QuickTVUI 本地文档检索能力
- 在本地 rules 源码中定位 QuickTVUI 实现
- 返回结构化的 `doctor` / `validate` 结果
- 通过 MCP 调用 `run-dev` / `run-esapp` / `run-to-tv`
- 提供设备与 runtime 状态检查能力
- 支持日志采集与常见问题模式分析
- 支持项目脚手架与 issue 报告模板准备
- 提供运行时调试数据读取（target、events、native logs、screenshot、stream）
- 提供适配 Trae 等客户端的 stdio 传输

## Tools

- `quicktvui_docs_search`
- `quicktvui_docs_open`
- `quicktvui_source_locate`
- `quicktvui_source_open`
- `quicktvui_doctor`
- `quicktvui_validate_project`
- `quicktvui_run_to_tv`
- `quicktvui_run_dev`
- `quicktvui_run_esapp`
- `quicktvui_devices_list`
- `quicktvui_runtime_check`
- `quicktvui_runtime_install`
- `quicktvui_logs_collect`
- `quicktvui_logs_analyze`
- `quicktvui_project_scaffold`
- `quicktvui_issue_report_prepare`

### 调试工具

- `list_targets`
- `get_target_context`
- `get_recent_events`
- `get_recent_console_logs`
- `get_recent_native_logs`
- `get_latest_screenshot`
- `get_live_events`
- `get_stream_status`

## Resources

- `quicktvui://server/info`
- `quicktvui://rules/docs-root`
- `quicktvui://rules/source-root`
- `quicktvui://docs/index`
- `quicktvui://trae/readme`
- `quicktvui://docs/file/{path}`
- `quicktvui://source/file/{path}`

### 调试资源

- `quicktvui-debug://targets`
- `quicktvui-debug://stream/status`
- `quicktvui-debug://targets/{clientId}/context`
- `quicktvui-debug://targets/{clientId}/events/recent`
- `quicktvui-debug://targets/{clientId}/events/live`
- `quicktvui-debug://targets/{clientId}/native-logs/recent`
- `quicktvui-debug://targets/{clientId}/screenshot/latest`

## Prompts

- `quicktvui_lookup`
- `quicktvui_run_to_tv`

## 安装

### 项目侧规则依赖

在你的 QuickTVUI 业务项目里安装：

```bash
npm install @quicktvui/ai --save-dev
```

### 命令侧运行依赖

用于全局命令或 MCP 启动：

```bash
npm install -g @quicktvui/ai-cli @quicktvui/ai-skills @quicktvui/ai-mcp
```

## 启动方式

如果环境可以直接使用发布包：

```bash
npx @quicktvui/ai-mcp
```

全局安装后也可以直接执行：

```bash
quicktvui-ai-mcp
```

## 调试参数（可选）

如果你需要显式指定 ESDebugServer 地址或行为，可在同一个 `quicktvui-ai-mcp` 进程上直接传参：

```bash
quicktvui-ai-mcp --debug-base-url http://127.0.0.1:38989
```

支持参数：

- `--debug-base-url`
- `--debug-hash`
- `--debug-stream` / `--no-debug-stream`
- `--debug-stream-reconnect-delay-ms`
- `--debug-max-live-events-per-client`

## Trae 配置

可使用如下 stdio MCP 配置：

```json
{
  "mcpServers": {
    "quicktvui": {
      "command": "npx",
      "args": [
        "@quicktvui/ai-mcp"
      ],
      "cwd": "/ABS/PATH/TO/YOUR/QUICKTVUI/PROJECT"
    }
  }
}
```

若已全局安装，也可以配置为：

```json
{
  "mcpServers": {
    "quicktvui": {
      "command": "quicktvui-ai-mcp",
      "args": [],
      "cwd": "/ABS/PATH/TO/YOUR/QUICKTVUI/PROJECT"
    }
  }
}
```

如果你需要同时启用运行时调试能力，可在同一个 `@quicktvui/ai-mcp` 配置里追加 debug 参数（不需要再配置第二个 MCP）：

```json
{
  "mcpServers": {
    "quicktvui": {
      "command": "npx",
      "args": [
        "@quicktvui/ai-mcp",
        "--debug-base-url",
        "http://127.0.0.1:38989"
      ],
      "cwd": "/ABS/PATH/TO/YOUR/QUICKTVUI/PROJECT"
    }
  }
}
```

`cwd` 必须指向目标 QuickTVUI 业务项目根目录，MCP 才能优先使用项目内 `@quicktvui/ai/rules` 进行文档和源码解析。

### `cwd` 是什么

`cwd` 是 MCP 进程启动时的工作目录（Current Working Directory）。

对 `@quicktvui/ai-mcp` 来说，它应该是你的 **QuickTVUI 业务项目根目录**（包含业务 `package.json` 的目录），而不是
`quicktvui-ai` 工具仓库目录。

macOS 示例：

```json
{
  "mcpServers": {
    "quicktvui": {
      "command": "npx",
      "args": [
        "@quicktvui/ai-mcp"
      ],
      "cwd": "/Users/yourname/workspace/my-tv-app"
    }
  }
}
```

Windows 示例：

```json
{
  "mcpServers": {
    "quicktvui": {
      "command": "npx",
      "args": [
        "@quicktvui/ai-mcp"
      ],
      "cwd": "C:\\workspace\\my-tv-app"
    }
  }
}
```

## 如何验证 MCP 集成成功

在 Trae 里配置完成后，按下面顺序验证：

1. 在 MCP 面板确认 `quicktvui` 状态为已连接。
2. 调用 `quicktvui_doctor` 做工具链路校验。
3. 调用 `quicktvui_docs_search` 做文档检索校验。
4. 调用 `quicktvui_validate_project` 做项目状态校验。
5. 调用 `list_targets` 做调试链路校验。
6. 调用 `get_stream_status` 检查 stream 状态。

可直接复制到 Trae 的提示词：

工具链路校验：

```text
只调用 quicktvui_doctor，参数：
projectRoot=/ABS/PATH/TO/YOUR/QUICKTVUI/PROJECT
仅返回 structuredContent。
```

文档检索校验：

```text
只调用 quicktvui_docs_search，参数：
projectRoot=/ABS/PATH/TO/YOUR/QUICKTVUI/PROJECT
query=qt-image
limit=3
仅返回 structuredContent。
```

项目校验：

```text
只调用 quicktvui_validate_project，参数：
projectRoot=/ABS/PATH/TO/YOUR/QUICKTVUI/PROJECT
仅返回 structuredContent。
```

runtime 校验：

```text
只调用 quicktvui_runtime_check，参数：
device=<ADB_SERIAL>
runtimePackage=com.extscreen.runtime
仅返回 structuredContent。
```

设备列表校验：

```text
只调用 quicktvui_devices_list，参数：
仅返回 structuredContent。
```

调试 target 校验：

```text
只调用 list_targets，参数：
baseUrl=http://127.0.0.1:38989
仅返回 structuredContent。
```

stream 状态校验：

```text
只调用 get_stream_status，参数：
baseUrl=http://127.0.0.1:38989
仅返回 structuredContent。
```

预期结果：

- `quicktvui_doctor` 能返回 `hasRulesRoot`、`hasDocs`、`hasSource` 等字段。
- `quicktvui_docs_search` 对常见组件关键词应返回 `total > 0`。
- `quicktvui_validate_project` 应返回 `valid: true`（或明确的缺失项列表）。
- `quicktvui_runtime_check` 在 runtime 准备完成时应返回 `installed: true`。
- `quicktvui_devices_list` 在 adb 可用且有设备时应返回至少一个 `serial`。
- `list_targets` 在 debug server 与目标连通时应返回至少一个 `clientId`。
- `get_stream_status` 应返回 `stream.connected` 等状态字段。

若校验失败，优先检查：

- `cwd` 是否指向业务项目根目录。
- 项目是否安装了 `@quicktvui/ai`。
- MCP 配置中的 `command` / `args` 在本机是否可执行。
- `ESDebugServer` 是否已启动并可访问（例如：`curl http://127.0.0.1:38989/ai/targets`）。

## 两种使用方式：自动调用 vs 强制调用

### 方式 A：AI 自动调用 MCP（省事）

说明：你不指定工具名，AI 会根据任务自动判断是否调用 MCP。

示例：

```text
我想确认 qt-image 支持哪些能力。你可以自动调用 QuickTVUI MCP 工具后再回答。
```

```text
帮我排查 run-dev 为什么没启动起来，必要时请自动调用设备、runtime 和日志相关 MCP 工具。
```

适用场景：

1. 问题比较泛，不确定先用哪个工具。
2. 你只关心最终结论，不关心中间调用过程。

注意：

1. 自动模式不保证每次都命中你期望的工具。
2. 代码生成、运行排障这类任务建议使用“强制调用”。

### 方式 B：强制 AI 调用 MCP（稳定，推荐开发使用）

建议把提示词写成“工具名 + 明确参数 + 返回格式”，优先拿 `structuredContent`。

模板 1：单工具调用

```text
只调用 <tool_name>，参数：
key1=value1
key2=value2
仅返回 structuredContent。
```

示例：

```text
只调用 quicktvui_doctor，参数：
projectRoot=/ABS/PATH/TO/YOUR/QUICKTVUI/PROJECT
仅返回 structuredContent。
```

模板 2：写代码前先查能力

```text
按顺序调用以下工具，并在最后输出结论：
1) quicktvui_docs_search(query=<关键词>, projectRoot=<项目根>, limit=5)
2) quicktvui_docs_open(打开第1步最相关文档)
3) quicktvui_source_locate(query=<组件或API>, projectRoot=<项目根>, limit=3)
只基于工具返回回答，不要臆测未检索到的能力。
```

示例：

```text
按顺序调用以下工具，并输出结论：
1) quicktvui_docs_search，参数：
projectRoot=/ABS/PATH/TO/YOUR/QUICKTVUI/PROJECT
query=qt-image
limit=3
2) quicktvui_docs_open，打开第1步最相关文档
3) quicktvui_source_locate，参数：
projectRoot=/ABS/PATH/TO/YOUR/QUICKTVUI/PROJECT
query=qt-image
limit=2
仅返回 structuredContent 和最终结论。
```

模板 3：运行问题排查

```text
按顺序调用并汇总问题：
1) quicktvui_devices_list
2) quicktvui_runtime_check(device=<ADB_SERIAL>, runtimePackage=com.extscreen.runtime)
3) quicktvui_logs_collect(device=<ADB_SERIAL>, lines=300)
4) quicktvui_logs_analyze(使用第3步日志)
输出每一步 structuredContent，并给出下一步建议。
```

## 提示词速查表（按场景）

下面 5 条可直接复制。

1. 查组件能力

```text
按顺序调用以下工具并输出结论：
1) quicktvui_docs_search(projectRoot=/ABS/PATH/TO/YOUR/QUICKTVUI/PROJECT, query=qt-image, limit=5)
2) quicktvui_docs_open(打开第1步最相关文档)
仅返回 structuredContent 和最终结论。
```

2. 写代码前校验能力（docs + source）

```text
按顺序调用以下工具：
1) quicktvui_docs_search(projectRoot=/ABS/PATH/TO/YOUR/QUICKTVUI/PROJECT, query=qt-waterfall, limit=5)
2) quicktvui_source_locate(projectRoot=/ABS/PATH/TO/YOUR/QUICKTVUI/PROJECT, query=FastListViewController, limit=3)
只基于工具结果输出“可用能力 + 约束 + 示例写法”。
```

3. 一键跑到 TV

```text
只调用 quicktvui_run_to_tv，参数：
projectRoot=/ABS/PATH/TO/YOUR/QUICKTVUI/PROJECT
仅返回 structuredContent。
```

4. 运行失败排查

```text
按顺序调用并汇总问题：
1) quicktvui_devices_list
2) quicktvui_runtime_check(device=<ADB_SERIAL>, runtimePackage=com.extscreen.runtime)
3) quicktvui_logs_collect(device=<ADB_SERIAL>, lines=400)
4) quicktvui_logs_analyze(使用第3步日志)
输出每一步 structuredContent，并给出下一步操作。
```

5. 准备 issue 报告

```text
只调用 quicktvui_issue_report_prepare，参数：
projectRoot=/ABS/PATH/TO/YOUR/QUICKTVUI/PROJECT
summary=请概述问题
actualBehavior=请描述实际表现
expectedBehavior=请描述预期表现
logText=粘贴日志
仅返回 structuredContent。
```

### 零基础建议

1. 先跑“只调用 quicktvui_doctor”确认 MCP 可用。
2. 开发阶段默认用“强制调用”模板，减少幻觉。
3. 需要快速探索时再用“自动调用”。
4. 路径和设备都显式传参（`projectRoot`、`device`）。

## 失败分流图（排障流程）

按顺序执行，命中哪条先处理哪条：

1. `quicktvui_doctor`/`quicktvui_validate_project` 失败
   先安装 `@quicktvui/ai`，并检查 `projectRoot`、`cwd` 是否指向业务项目根目录。

2. `quicktvui_devices_list` 无设备
   先处理 adb 连接；多设备时显式传 `device`。

3. `quicktvui_runtime_check.installed=false` 或 `launchCapability.ok=false`
   先执行 `quicktvui_runtime_install`，再复查 `quicktvui_runtime_check`。

4. `quicktvui_run_to_tv` 阶段失败
   根据 `stage` 字段定位在 `setup-vue-env`、`setup-android-env` 还是 `run-dev`。

5. `run-dev` 仍失败
   执行 `quicktvui_logs_collect` + `quicktvui_logs_analyze`，按 `issues[].suggestion` 处理。

6. 多次修复仍失败
   执行 `quicktvui_issue_report_prepare` 生成脱敏报告再上报。

## 说明

- 服务端基于官方 `@modelcontextprotocol/sdk` 架构（stdio）
- 传输层同时兼容 `ndjson` 与 `Content-Length` JSON-RPC 帧
- 可选环境变量：`QUICKTVUI_MCP_STDIO_MODE=auto|line|content-length`（默认 `auto`）
- `quicktvui_run_dev` 默认 detached 启动
- `quicktvui_run_to_tv` 会按顺序执行 `doctor` -> `setup-vue-env` -> `setup-android-env` -> `run-dev`
- 文档/源码解析优先项目内 `node_modules/@quicktvui/ai/rules`，其次回退到仓库本地布局
- 建议与 `@quicktvui/ai`、`@quicktvui/ai-cli` 配合使用
