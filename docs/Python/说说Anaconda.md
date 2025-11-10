# 说说Anaconda

## 基础使用

### 1️⃣ 打开 Anaconda/Miniconda

#### 方法一：命令行

- 打开 **Anaconda Prompt** 或 **Miniconda Prompt**（Windows）
- 或打开 **终端 Terminal**（macOS/Linux），确保 `conda` 命令可用

输入：

```cmd
conda --version
```

如果输出版本号，说明 conda 已经可以使用。

🚩如果还没装？前往 👉 [下载](https://www.anaconda.com/download)，安装，配置环境环境即可

------

#### 方法二：图形界面（可视化管理）

- 打开 **Anaconda Navigator**
- 可以用它启动：
  - **Jupyter Notebook / Lab**（网页界面编写代码）
  - **Spyder**（IDE）
  - **VS Code**（如果安装了集成插件）

------

### 2️⃣ 管理 Python 环境（虚拟环境）

#### 创建环境

```bash
conda create -n myenv python=3.11
```

- `myenv` 是环境名字，可换成任意名称
- `python=3.11` 指定 Python 版本

#### 激活环境

```bash
conda activate myenv
```

#### 退出环境

```bash
conda deactivate
```

#### 删除环境

```bash
conda remove -n myenv --all
```

------

### 3️⃣ 安装和管理包

#### 安装包

```bash
conda install numpy
```

- `numpy` 可换成你需要的 Python 包

#### 更新包

```bash
conda update numpy
```

#### 升级 conda 本身

```bash
conda update conda
```

#### 搜索包

```bash
conda search pandas
```

------

### 4️⃣ 使用 Jupyter Notebook

#### 启动 Jupyter

```bash
jupyter notebook
```

- 会在浏览器打开一个网页，里面可以创建 `.ipynb` 文件编写 Python 代码

#### 停止 Jupyter

- 在终端按 `Ctrl + C`，然后输入 `y` 确认退出

------

### 5️⃣ 小技巧

- **推荐**：用虚拟环境管理不同项目，避免包版本冲突
- 可以在 Anaconda Navigator 中可视化管理环境，比命令行更直观
- 如果你用 VS Code 或 PyCharm 编程，可以把 conda 环境设置为项目解释器



## 在 PyCharm 中使用

### 1️⃣ 前提条件

- 已安装 **PyCharm**（社区版或专业版都可以）
- 已安装 **Anaconda 或 Miniconda**，并确认 `conda` 命令可用

------

### 2️⃣ 配置 PyCharm 使用 Conda 环境

#### 方法一：新建项目时创建 Conda 环境

1. 打开 **PyCharm → New Project**
2. 在 **Location** 选择你的项目路径
3. **Python Interpreter** → 选择 **New environment using Conda**
   - **Conda executable**：通常自动填 `C:\Users\<用户名>\miniconda3\Scripts\conda.exe`（Windows）
   - **Environment name**：输入你想要的环境名字，比如 `myenv`
   - **Python version**：选择你想要的版本（如 3.11）
4. 点击 **Create**
5. PyCharm 会自动创建虚拟环境，并把它设为项目解释器

------

#### 方法二：已有 Conda 环境，直接在 PyCharm 中使用

1. 打开 **PyCharm → Settings (File → Settings 或 Ctrl+Alt+S)**

2. 选择 **Project: <项目名> → Python Interpreter**

3. 点击右上角 **⚙️ → Add**

4. 选择 **Conda Environment → Existing environment**

   - **Interpreter**：选择已有环境的 Python 路径，例如：

     ```
     C:\Users\<用户名>\miniconda3\envs\myenv\python.exe
     ```

5. 点击 **OK**

6. PyCharm 会自动加载该环境的所有包

------

### 3️⃣ 安装包

在 PyCharm 中可以通过两种方式安装 Python 包：

#### 方法一：通过 PyCharm GUI

- 打开 **Settings → Python Interpreter**
- 点击 **+** → 搜索包名 → Install Package

#### 方法二：通过 Terminal

- 打开 PyCharm 自带终端
- 激活环境（如果未自动激活）：

```bash
conda activate myenv
```

- 安装包：

```bash
conda install numpy pandas matplotlib
```

------

### 4️⃣ 使用 Jupyter Notebook（可选）

如果你希望在 PyCharm 中使用 `.ipynb` 文件：

1. 安装 **Jupyter**：

```bash
conda install jupyter
```

1. 在 PyCharm 中 **File → New → Jupyter Notebook**
2. 选择你配置好的 Conda 环境作为 Notebook 的解释器

------

### 5️⃣ 小技巧

- 每个项目用独立的 Conda 环境，避免包冲突
- PyCharm 会自动识别环境里的包，无需手动配置 PYTHONPATH
- 如果 Conda 更新了 Python 或包，最好在 PyCharm 重新刷新解释器
