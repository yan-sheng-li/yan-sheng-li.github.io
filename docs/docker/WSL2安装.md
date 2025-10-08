# WSL 环境下 Docker 的安装、使用与问题解决

## 一般步骤

#### **1. 安装 Docker**

- **推荐方案**：使用 **Docker Desktop + WSL 2 后端**（官方推荐，自动集成） 安装 Docker Desktop 时勾选 **"Use WSL 2 based engine"**。 在 WSL 中直接运行 `docker`命令，无需额外配置。

- **备用方案**：在 WSL 内手动安装 Docker 引擎（仅限 WSL 2）

  ```
  sudo apt update && sudo apt install -y docker.io
  sudo service docker start
  ```

#### **2. 验证 WSL 和 Docker**

- **检查 WSL 状态**：

  ```
  wsl -l -v              # 查看已安装的发行版及版本
  wsl --status           # 检查 WSL 运行状态
  ```

- **验证 Docker**：

  ```
  docker --version       # 检查版本
  docker run hello-world # 运行测试容器
  ```

#### **3. 进入容器的正确方式**

- **推荐命令**：

  ```
  docker exec -it 容器名 /bin/sh   # 精简镜像（如 Alpine）
  docker exec -it 容器名 /bin/bash # 完整镜像（如 Ubuntu）
  ```

- **常见问题**： 如果报错 `bash: not found`，说明容器使用 `sh`，改用 `/bin/sh`。 极简镜像可能无 Shell，需通过 `docker cp`或自定义 Dockerfile 解决。

#### **4. 文件传输到容器**

- **方法 1：挂载目录（实时同步）**

  ```
  docker run -v /mnt/c/Windows/path:/app 镜像名
  ```

- **方法 2：`docker cp`复制文件**

  ```
  docker cp ./file.txt 容器名:/path/
  ```

- **方法 3：通过 Dockerfile 构建镜像**

  ```
  COPY file.txt /app/
  ```

#### **5. 常见错误解决**

- **Docker 安装失败**：

  - 手动启用 Windows 功能（WSL 2、Hyper-V）：

    ```
    dism.exe /online /enable-feature /featurename:Microsoft-Windows-Subsystem-Linux /all /norestart
    dism.exe /online /enable-feature /featurename:VirtualMachinePlatform /all /norestart
    ```

  - 彻底清理后重装（删除残留的 `%APPDATA%\Docker`等目录）。

- **文件未找到**： 使用 `ls -la`代替 `ll`（精简镜像无此别名）。 全盘搜索文件：`find / -name "filename"`。

#### **6. 关键命令速查**

| 功能           | 命令示例                                                |
| -------------- | ------------------------------------------------------- |
| 进入容器       | `docker exec -it 容器名 /bin/sh`                        |
| 复制文件到容器 | `docker cp ./file 容器名:/path/`                        |
| 挂载目录到容器 | `docker run -v /host/path:/container/path 镜像名`       |
| 查看容器信息   | `docker inspect 容器名 \| grep WorkingDir`              |
| 安装缺失工具   | `apk add bash`（Alpine）或 `apt install bash`（Debian） |

------

### **最终建议**

1. **开发环境**：优先用 **Docker Desktop + WSL 2**，享受无缝集成。
2. **生产环境**：通过 Dockerfile 构建镜像，避免依赖本地文件。
3. **调试技巧**： 精简镜像用 `/bin/sh`，完整镜像用 `/bin/bash`。 文件传输失败时，优先检查路径和权限。

## 附录

由于`Docker Desktop + WSL 2 后端`的方式<span style="color:red">安装失败</span>，多方面缘故，故才用`在 WSL 内手动安装 Docker 引擎（仅限 WSL 2）`的方式安装，具体如下：

### **步骤 1：清理旧安装（如果有）**

```
# 卸载旧版本 Docker（如果存在）
sudo apt remove -y docker docker-engine docker.io containerd runc
sudo rm -rf /var/lib/docker
```

### **步骤 2：添加 Docker 官方 GPG 密钥和软件源**

```
# 安装依赖工具
sudo apt update
sudo apt install -y ca-certificates curl gnupg lsb-release

# 添加 Docker 官方 GPG 密钥
sudo mkdir -p /etc/apt/keyrings
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg

# 添加 Docker 官方软件源
echo "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null

# 更新软件包索引
sudo apt update
```

### **步骤 3：安装 Docker 引擎**

```
# 安装 Docker CE
sudo apt install -y docker-ce docker-ce-cli containerd.io docker-compose-plugin

# 验证安装
docker --version
```

### **步骤 4：启动 Docker 服务**

```
# 启动 Docker 服务
sudo service docker start

# 设置开机自启（WSL 需要额外配置，见下文）
sudo systemctl enable docker
```

### **步骤 5：测试 Docker**

```
# 运行测试容器
sudo docker run hello-world
```

## **常见问题解决**

### **问题 1：`lsb_release -cs`返回错误版本**

如果 `$(lsb_release -cs)`返回的 Ubuntu 版本不被 Docker 支持（如 `jammy`但 Docker 还未适配），可以手动指定一个已知兼容版本：

```
# 例如强制使用 focal（Ubuntu 20.04）的仓库
echo "deb [arch=amd64 signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu focal stable" | sudo tee /etc/apt/sources.list.d/docker.list
```

### **问题 2：GPG 密钥错误**

如果遇到 `NO_PUBKEY`错误，重新导入密钥：

```
sudo rm /etc/apt/keyrings/docker.gpg
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg
sudo apt update
```

### **问题 3：WSL 2 中 Docker 无法自启动**

由于 WSL 2 不支持 `systemd`，需手动配置启动：

```
# 编辑 ~/.bashrc
nano ~/.bashrc

# 在文件末尾添加：
if ! service docker status >/dev/null 2>&1; then
    sudo service docker start >/dev/null 2>&1
fi

# 保存后生效
source ~/.bashrc
```

------

## **验证安装**

```
# 检查 Docker 版本
docker --version

# 检查服务状态
sudo service docker status

# 运行测试容器
docker run --rm hello-world
```