# Google Colab 快速上手总结

## 一、Colab 是什么？

- 本质：**一台云端的 Linux 虚拟机**
- 你在：
  - 写 **Python**
  - 也可以直接用 **Linux 命令**
- 打开即用，不用配置环境

------

## 二、为什么像在用 Linux？

因为你真的在用 Linux 

### ▶ 运行 Linux 命令

```bash
!ls
!pwd
!mkdir test
!rm -rf test
```

- `!`：在 Colab 里执行 shell 命令
- `%%bash`：多行 shell 脚本

------

## 三、默认工作目录

```bash
!pwd
```

输出：

```
/content
```

### `/content` 是什么？

- Colab 的**默认工作目录**
- 临时空间
- **断开 / 重启就清空**

------

## 四、Colab 的目录结构（重点）

```text
/content
├── sample_data        ← Colab 自带示例
├── drive              ← 挂载 Google Drive 后
│   └── MyDrive        ← 你的云盘根目录
```

------

## 五、访问 & 使用 Google 云盘（核心）

### ▶ 挂载云盘

```python
from google.colab import drive
drive.mount('/content/drive')
```

### ▶ 云盘路径

```text
/content/drive/MyDrive/
```

### ▶ 特点

| 位置                     | 是否保存 |
| ------------------------ | -------- |
| `/content`               | ❌ 临时   |
| `/content/drive/MyDrive` | ✅ 永久   |

------

## 六、直接把结果保存到云盘

### 示例：保存文件

```python
df.to_csv('/content/drive/MyDrive/result.csv', index=False)
```

### 保存模型 / 图片

```python
torch.save(model.state_dict(),
           '/content/drive/MyDrive/model.pth')
```

👉 **只要路径在 MyDrive 下，就等于直接存云盘**

------

## 七、在 Colab 直接下载网络资源到云盘

### ▶ wget / curl

```bash
!wget -O /content/drive/MyDrive/file.zip https://example.com/file.zip
```

### ▶ Google Drive 分享文件

```bash
!pip install gdown
!gdown https://drive.google.com/uc?id=文件ID \
       -O /content/drive/MyDrive/file.zip
```

------

## 八、性能经验（很实用）

### 🚀 最佳实践

1. **中间过程**：用 `/content`（快）
2. **最终结果**：存 `/content/drive/MyDrive`（安全）

```bash
!wget -O /content/tmp.zip URL
!mv /content/tmp.zip /content/drive/MyDrive/
```

------

## 九、Colab 的核心心智模型（最重要）

> 🧠 **Colab = 临时 Linux 电脑**
> 💾 **Google Drive = 永久硬盘**

你：

- 在 Linux 里干活
- 把重要东西存到硬盘

