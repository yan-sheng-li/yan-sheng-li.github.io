# 整合webhook自动部署

在日常开发和部署过程中，我们经常会遇到这样的需求：

* 希望在本地一键触发远程服务器上的自动构建和部署；
* 希望能够远程查看服务器关键日志内容，而无需手动登录服务器。

本文将结合 webhook 工具 [**webhook**](https://github.com/adnanh/webhook)，实现在服务器上接收 HTTP 请求来触发脚本，并返回运行结果。

---

## 一、环境说明

* 服务器系统：Linux（Ubuntu / CentOS 均可）
* webhook 工具：[adnanh/webhook](https://github.com/adnanh/webhook)
* 服务脚本语言：Bash Shell
* 目标：通过 HTTP 请求远程触发脚本进行服务部署，并查看日志

---

## 二、安装 webhook 工具

首先，在你的服务器上安装 webhook 工具：

```bash
# 下载预编译版本（根据系统架构）
wget https://github.com/adnanh/webhook/releases/download/2.8.1/webhook-linux-amd64.tar.gz
tar -zxvf webhook-linux-amd64.tar.gz
sudo mv webhook-linux-amd64/webhook /usr/local/bin/
```

测试是否安装成功：

```bash
webhook -version
```

---

## 三、配置第一个 webhook：一键部署脚本

### 1. 编写部署脚本 `one_start.sh`

路径建议放在项目目录下，例如 ` /root/web/project-server/one_start.sh`：

```bash
#!/bin/bash

echo "检查更新..."
git pull

echo "清理项目..."
mvn clean

echo "开始打包..."
mvn package
echo "项目打包完成！"

container_name="project-server"
image_name="project-server"

# 删除旧容器
if docker ps -a --format '{{.Names}}' | grep -q "^${container_name}$"; then
    echo "发现旧容器，停止并删除中..."
    docker stop $container_name && docker rm $container_name
fi

# 删除旧镜像
if docker images --format '{{.Repository}}' | grep -q "^${image_name}$"; then
    echo "发现旧镜像，删除中..."
    docker rmi $image_name
fi

# 构建镜像并启动容器
echo "构建镜像..."
docker build -t $image_name .

echo "启动容器..."
docker run -d -p 8082:8888 --name $container_name --restart unless-stopped $image_name

echo "部署完成！"
```

赋予执行权限：

```bash
chmod +x one_start.sh
```

---

### 2. 配置 webhook 钩子 `hooks.json`

创建配置文件 `hooks.json`（路径自定，本文以当前目录为例）：

```json
[
  {
    "id": "1",
    "execute-command": "/root/web/project-server/one_start.sh",
    "command-working-directory": "/root/web/project-server",
    "response-message": "Script executed",
    "include-command-output-in-response": true,
    "capture-output": true,
    "pass-arguments-to-command": [],
    "trigger-rule": {
      "match": {
        "type": "value",
        "parameter": {
          "source": "payload",
          "name": "password"
        },
        "value": "xxx"
      }
    }
  }
]
```

---

### 3. 启动 webhook 服务

```bash
webhook -hooks ./hooks.json -verbose -ip 0.0.0.0 -port 9001
```

后台运行建议：

```bash
nohup webhook -hooks ./hooks.json -verbose -ip 0.0.0.0 -port 9001 > webhook.log 2>&1 &
```

---

### 4. 测试接口触发部署脚本

```bash
curl -X POST http://<your-server-ip>:9001/hooks/1 \
  -H "Content-Type: application/json" \
  -d '{"password": "xxx"}'
```

你会收到脚本执行的完整输出内容，包括 `git pull`、`mvn package`、`docker build`、`docker run` 等操作。

此外可以在项目仓库也配置，再相应的事件触发。

![image-20250705122000642](http://cdn.qiniu.liyansheng.top/img/image-20250705122000642.png)

---

## 四、配置第二个 webhook：远程查看 Nginx 日志

有时我们希望在不登录服务器的情况下，远程查看 `/var/log/nginx/online_access.log` 日志。我们可以用同样的方式实现。

### 1. 编写查看日志脚本 `view_nginx_log.sh`

```bash
#!/bin/bash
tail -n 100 /var/log/nginx/online_access.log
```

赋予执行权限：

```bash
chmod +x view_nginx_log.sh
```

---

### 2. 添加钩子配置到 `hooks.json`

追加如下配置项：

```json
{
  "id": "view-nginx-log",
  "execute-command": "/root/web/project-server/view_nginx_log.sh",
  "command-working-directory": "/root/web/project-server",
  "response-message": "日志获取完成",
  "include-command-output-in-response": true,
  "capture-output": true,
  "pass-arguments-to-command": [],
  "trigger-rule": {
    "match": {
      "type": "value",
      "parameter": {
        "source": "payload",
        "name": "password"
      },
      "value": "xxx"
    }
  }
}
```

> ⚠️ 注意是追加，不要覆盖前一个钩子。

---

### 3. 调用接口查看日志内容

```bash
curl -X POST http://<your-server-ip>:9001/hooks/view-nginx-log \
  -H "Content-Type: application/json" \
  -d '{"password": "xxx"}'
```

你将看到 Nginx 日志文件的最后 100 行内容。

---

## 五、常见问题及排查建议

### ❓Q：为什么请求提示超时？

* 可能是脚本执行时间过长（比如 Maven 编译、Docker 构建等），建议在客户端增加超时时间；
* 或者 webhook 执行脚本时遇到权限问题（建议加 `#!/bin/bash` 且使用绝对路径）；
* 可尝试在脚本前后加 `echo "开始"` 和 `echo "结束"`，查看是否卡在中间步骤。

### ❓Q：脚本执行后没响应或失败？

* 确认 webhook 有权限执行对应的脚本和 Docker；
* 确认 `webhook` 启动时是否加载了 `hooks.json`；
* 检查日志输出：`tail -f webhook.log` 查看报错信息。



