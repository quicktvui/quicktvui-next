# @quicktvui/ai-debug-mcp

`@quicktvui/ai-debug-mcp` 是面向 QuickTVUI 运行时调试数据的 MCP 服务。

它基于 `ESDebugServer` 的 `/ai/*` 和 `/ai/stream`，把这些只读调试数据暴露给 Trae 等支持 stdio 的 MCP Client，让 AI 可以直接读取：

- 当前 target 列表
- target context
- recent events / live events
- Android native logs
- latest screenshot

## 一、它和 `@quicktvui/ai-mcp` 的区别

QuickTVUI 现在有两类 MCP，不要混在一起：

- `@quicktvui/ai-mcp`
  - 通用 QuickTVUI MCP
  - 负责 docs、source、doctor、validate、run-dev、run-esapp
- `@quicktvui/ai-debug-mcp`
  - 运行时调试 MCP
  - 负责 target、events、native logs、screenshot

一句话理解：

- 查文档、查源码、跑开发流程，用 `@quicktvui/ai-mcp`
- 查运行时调试数据，用 `@quicktvui/ai-debug-mcp`

## 二、先分清三个角色

很多新手会把下面三个东西混在一起，其实它们不是同一个进程：

### 1. `ESDebugServer`

这是调试数据源。

它负责提供：

- `/ai/targets`
- `/ai/stream`
- `/ai/targets/:clientId/context`
- `/ai/targets/:clientId/events`
- `/ai/targets/:clientId/native-logs`
- `/ai/targets/:clientId/screenshot/latest`

这个服务需要你自己启动。

### 2. `@quicktvui/ai-debug-mcp`

这是 MCP 适配层。

它把 `ESDebugServer` 的 HTTP / SSE 数据包装成 MCP tools 和 resources。

### 3. Trae / 其他 MCP Client

这是 MCP 客户端。

如果你已经在 Trae 里配置了 `command + args`，通常不需要你再手工启动 `@quicktvui/ai-debug-mcp`。

Trae 会自动拉起它。

## 三、能力概览

### Tools

- `list_targets`
- `get_target_context`
- `get_recent_events`
- `get_recent_console_logs`
- `get_recent_native_logs`
- `get_latest_screenshot`
- `get_live_events`
- `get_stream_status`

### Resources

- `quicktvui-debug://targets`
- `quicktvui-debug://stream/status`
- `quicktvui-debug://targets/{clientId}/context`
- `quicktvui-debug://targets/{clientId}/events/recent`
- `quicktvui-debug://targets/{clientId}/events/live`
- `quicktvui-debug://targets/{clientId}/native-logs/recent`
- `quicktvui-debug://targets/{clientId}/screenshot/latest`

## 四、推荐方式：在 Trae 中使用

### 第 1 步：先启动 `ESDebugServer`

先确认本地 `ESDebugServer` 已经启动，并且 `/ai` 路由可用：

```bash
curl http://127.0.0.1:38989/ai/targets
```

预期结果：

- HTTP 状态为 `200`
- 返回 JSON 数组

如果这里还不通，先不要配置 `@quicktvui/ai-debug-mcp`，因为它也拿不到数据。

### 第 2 步：在 Trae 中配置 MCP

可以直接使用下面的配置：

```json
{
  "mcpServers": {
    "quicktvui-debug": {
      "command": "npx",
      "args": [
        "-y",
        "@quicktvui/ai-debug-mcp",
        "--base-url",
        "http://127.0.0.1:38989"
      ]
    }
  }
}
```

如果你需要固定版本，可把 `@quicktvui/ai-debug-mcp` 改成 `@quicktvui/ai-debug-mcp@<version>`。

如果需要限制到某个 target hash：

```json
{
  "mcpServers": {
    "quicktvui-debug": {
      "command": "npx",
      "args": [
        "-y",
        "@quicktvui/ai-debug-mcp",
        "--base-url",
        "http://127.0.0.1:38989",
        "--hash",
        "<debug-target-hash>"
      ]
    }
  }
}
```

### 第 3 步：不要手工再启动一次 MCP Server

如果你已经把上面的配置填进 Trae：

- 不需要自己再执行 `npx -y @quicktvui/ai-debug-mcp ...`
- Trae 会自动拉起 MCP 进程
- 你只需要自己保证 `ESDebugServer` 正在运行

## 五、如何验证接入成功

建议按这个顺序验证。

### 1. 先确认 target 可见

把下面提示词发给 Trae：

```text
请先检查你当前是否已经连接到 QuickTVUI Debug MCP。如果已连接，列出所有 target，只返回 clientId、observed、eventCount。
```

成功标志：

- AI 明确表示已连接到 MCP
- 返回至少一个 `clientId`
- 结果不是泛泛描述，而是真实结构化数据

### 2. 再看 stream 状态

```text
请读取当前 QuickTVUI Debug MCP 的 stream status，并告诉我 SSE 是否已连接。
```

成功标志：

- AI 能返回 `stream/status`
- 能明确说出当前是否 connected

### 3. 读取 recent events

```text
请读取 clientId=<你的clientId> 的最近 10 条事件，按时间倒序列出，并统计每种事件类型数量。
```

成功标志：

- AI 返回具体事件内容
- 结果里包含时间、类型或等价字段

### 4. 读取 native logs

```text
请读取 clientId=<你的clientId> 的 recent native logs，只返回最近 10 条，并总结其中最值得关注的异常或错误。
```

成功标志：

- AI 能返回真实 native logs
- 能区分“没有数据”和“调用失败”

### 5. 读取 latest screenshot

```text
请读取 clientId=<你的clientId> 的 latest screenshot。如果没有截图，请明确告诉我原因；如果有截图，请总结当前页面状态。
```

成功标志：

- 有截图时，AI 能说明页面内容
- 没截图时，AI 会明确返回“当前没有 screenshot”，而不是假装读取成功

## 六、没有 MCP 时怎么办

如果当前 AI Agent 不支持 MCP，或者你暂时不想接入 MCP，也可以直接使用 `quicktvui-ai` 的 CLI 调试命令：

```bash
quicktvui-ai debug-targets --base-url http://127.0.0.1:38989
quicktvui-ai debug-context --client-id <clientId>
quicktvui-ai debug-events --client-id <clientId> --limit 100
quicktvui-ai debug-native-logs --client-id <clientId> --limit 100
quicktvui-ai debug-screenshot --client-id <clientId> --project <project-path>
```

这条链路适合：

- 命令行 smoke test
- 排查 Trae 配置问题
- AI 没接 MCP，但能执行终端命令

## 七、常见问题

### Q1：我需要把 `@quicktvui/ai-debug-mcp` 安装到业务项目里吗？

通常不需要。

它不是业务运行时依赖，也不需要在业务代码里 `import`。更常见的用法是让 Trae 通过 `npx` 把它当成独立 MCP Server 拉起。

### Q2：配置到 Trae 以后，我还需要手工启动 MCP Server 吗？

通常不需要。

Trae 会自动拉起 `@quicktvui/ai-debug-mcp`。你真正需要自己保证的是：

- `ESDebugServer` 已启动
- 目标应用已经连上 `ESDebugServer`

### Q3：为什么 `127.0.0.1` 有时不通？

`http://127.0.0.1:38989` 只适用于 Trae 和 `ESDebugServer` 在同一台机器上的情况。

如果 MCP Client 不在本机，需要把 `--base-url` 改成它实际能访问到的地址。

### Q4：为什么读不到 target？

先检查：

```bash
curl http://127.0.0.1:38989/ai/targets
```

如果这里返回空数组，说明还没有可读 target，问题不在 MCP，而在调试链路本身还没建立。

### Q5：为什么读 screenshot 会失败？

如果当前 target 还没有产生 screenshot，`/ai/targets/:clientId/screenshot/latest` 会返回“没有截图”。

这不是 MCP 异常，而是当前目标确实还没有可读 screenshot。
