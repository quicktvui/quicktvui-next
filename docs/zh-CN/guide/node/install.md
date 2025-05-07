---
title: 'NodeInstall'
lang: zh-CN
---

# Node 升级与降级

在 Node.js 开发中，有时需要切换不同的 Node.js 版本以满足不同项目的需求。以下是一些常用的方法来管理和切换 Node.js 版本：

### 一、使用 `nvm`（Node Version Manager）

`nvm` 是一个流行的 Node.js 版本管理工具，允许你在同一台机器上安装和切换多个 Node.js 版本。

#### 安装 `nvm`

- **在 macOS 或 Linux 上**： 你可以通过以下命令安装 `nvm`（假设你使用的是 Bash shell）：

  ```sh
  curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
  ```

  或者，使用 `wget`：

  ```sh
  wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
  ```

  安装完成后，重新加载 shell 配置文件（例如 `.bashrc`、`.zshrc` 等）：

  ```sh
  source ~/.bashrc
  ```

  或者：

  ```sh
  source ~/.zshrc
  ```

- **在 Windows 上**： 你可以从 [nvm-windows GitHub 仓库](https://github.com/coreybutler/nvm-windows/releases) 下载并安装 `nvm-windows`
  。

#### 使用 `nvm` 安装和切换 Node.js 版本

- **列出所有可用的 Node.js 版本**：

  ```sh
  nvm ls-remote
  ```

- **安装特定版本的 Node.js**：

  ```sh
  nvm install <version>
  ```

  例如，安装 Node.js 14.17.0：

  ```sh
  nvm install 14.17.0
  ```

- **使用特定版本的 Node.js**：

  ```sh
  nvm use <version>
  ```

  例如，使用 Node.js 14.17.0：

  ```sh
  nvm use 14.17.0
  ```

- **设置默认版本的 Node.js**：

  ```sh
  nvm alias default <version>
  ```

  例如，将默认版本设置为 Node.js 14.17.0：

  ```sh
  nvm alias default 14.17.0
  ```

### 二、使用 `n`（Node Version Manager）

`n` 是另一个 Node.js 版本管理工具，它允许你安装、卸载和切换不同的 Node.js 版本。

#### 安装 `n`

你可以通过 npm 安装 `n`：

```sh
npm install -g n
```

#### 使用 `n` 安装和切换 Node.js 版本

- **列出所有可用的 Node.js 版本**：

  ```sh
  n ls
  ```

- **安装特定版本的 Node.js**：

  ```sh
  n <version>
  ```

  例如，安装 Node.js 14.17.0：

  ```sh
  n 14.17.0
  ```

- **切换到已安装的版本**（`n` 会自动管理已安装的版本）：

  ```sh
  n use <version>
  ```

  例如，使用 Node.js 14.17.0：

  ```sh
  n use 14.17.0
  ```

### 三、使用 `fnm`（Fast and Simple Node Version Manager）

`fnm` 是一个快速且简单的 Node.js 版本管理工具。

#### 安装 `fnm`

你可以通过以下命令安装 `fnm`：

```sh
curl -fsSL https://github.com/Schniz/fnm/releases/download/v1.23.3/fnm_linux_amd64.tar.gz | tar xz -C /tmp && sudo mv /tmp/fnm /usr/local/bin
```

（注意：根据你的操作系统和架构，下载链接可能会有所不同）

#### 使用 `fnm` 安装和切换 Node.js 版本

- **列出所有可用的 Node.js 版本**：

  ```sh
  fnm ls-remote
  ```

- **安装特定版本的 Node.js**：

  ```sh
  fnm install <version>
  ```

  例如，安装 Node.js 14.17.0：

  ```sh
  fnm install 14.17.0
  ```

- **使用特定版本的 Node.js**：

  ```sh
  fnm use <version>
  ```

  例如，使用 Node.js 14.17.0：

  ```sh
  fnm use 14.17.0
  ```

### 四、总结

根据你的需求和操作系统，选择适合你的 Node.js 版本管理工具。`nvm` 是最流行和功能最强大的工具之一，但 `n` 和 `fnm` 也提供了简单和快速的解决方案。
