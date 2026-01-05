# JupyterLab使用

## 1.创建环境

```bash
# Linux/macOS
python -m venv venv

# Windows
python -m venv venv
```

激活虚拟环境：

```bash
# Linux/macOS
source venv/bin/activate

# Windows
venv\Scripts\activate
```

## 2.安装依赖

```bash
pip install --upgrade pip
pip install notebook jupyterlab ipykernel
# 然后安装你项目所需库
pip install -r requirements.txt
```

## 3.注册内核

```bash
python -m ipykernel install --user --name=my_project_env --display-name "Python (my_project_env)"
```

- `--name` 用作内部标识，不影响显示。
- `--display-name` 是你在 Notebook 里看到的名字。

> ⚠️ 以后打开 Notebook 时，可以选择 `"Python (my_project_env)"` 内核，这样就能用项目独立环境运行代码。

## 4.启动

```bash
# Notebook
jupyter notebook

# 或 JupyterLab
jupyter lab
```

根据控制台提示，打开浏览器就能在你的项目目录中直接创建和编辑 `.ipynb` 文件了。

![image-20260105130224477](http://cdn.qiniu.liyansheng.top/img/image-20260105130224477.png)

![image-20260105130254635](http://cdn.qiniu.liyansheng.top/img/image-20260105130254635.png)