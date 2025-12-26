# Matplotlib使用

## 官网

[https://matplotlib.org/stable/](https://matplotlib.org/stable/)

## 全案例

[https://matplotlib.org/stable/gallery/index.html#](https://matplotlib.org/stable/gallery/index.html#)

## 安装

```bash
pip install matplotlib
```

## 具体使用请参考官网，很详细~


## 常见问题

### 中文乱码
在开头加上
```python
plt.rcParams['font.sans-serif'] = ['SimHei', 'Microsoft YaHei', 'DejaVu Sans']
plt.rcParams['axes.unicode_minus'] = False
```

