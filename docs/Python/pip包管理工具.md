# pip包管理工具

## 命令速查

### 🔹 安装与卸载

```bash
# 安装最新版本
pip install 包名

# 安装指定版本
pip install 包名==1.2.3

# 安装大于/小于某个版本
pip install 包名>=1.0,<2.0

# 卸载包
pip uninstall 包名
```

------

### 🔹 升级与管理

```bash
# 升级某个包
pip install --upgrade 包名

# 升级 pip 自身
python -m pip install --upgrade pip
```

------

### 🔹 查看与搜索

```bash
# 查看已安装的包
pip list

# 查看某个包的详细信息（版本、依赖、安装位置）
pip show 包名

# 查看可升级的包
pip list --outdated
```

------

### 🔹 依赖管理

```bash
# 导出当前环境依赖
pip freeze > requirements.txt

# 根据 requirements.txt 安装依赖
pip install -r requirements.txt
```

------

### 🔹 其他

```bash
# 清除缓存（解决某些下载问题）
pip cache purge

# 查看 pip 版本
pip --version
```

------

## 国内镜像源

### 🔹 临时使用（推荐用在单次安装时）

```bash
pip install 包名 -i https://pypi.tuna.tsinghua.edu.cn/simple
```

### 🔹 镜像源列表

| 镜像源                 | 地址                                                |
| ---------------------- | --------------------------------------------------- |
| **清华大学**（推荐）   | https://pypi.tuna.tsinghua.edu.cn/simple            |
| **阿里云**             | https://mirrors.aliyun.com/pypi/simple/             |
| **中国科技大学(USTC)** | https://pypi.mirrors.ustc.edu.cn/simple/            |
| **华为云**             | https://repo.huaweicloud.com/repository/pypi/simple |
| **豆瓣(douban)**       | https://pypi.douban.com/simple/                     |

------

### 🔹 永久修改配置

Linux / macOS 在 `~/.pip/pip.conf`
 Windows 在 `%APPDATA%\pip\pip.ini`
 添加内容：

```ini
[global]
index-url = https://pypi.tuna.tsinghua.edu.cn/simple

[install]
trusted-host = pypi.tuna.tsinghua.edu.cn
```

