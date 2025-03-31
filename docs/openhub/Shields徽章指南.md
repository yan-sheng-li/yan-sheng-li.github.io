# Shields.io 徽章完全指南

> 在开源项目和文档中，我们经常看到各种色彩鲜艳的小徽章，它们展示着项目的版本、构建状态、下载量等信息。这些徽章大多是通过 Shields.io 服务生成的。本文将全面介绍如何使用和自定义这些徽章。

## 基础使用

### 徽章URL结构

Shields.io 徽章的基本URL格式为：

```
https://img.shields.io/badge/<LABEL>-<MESSAGE>-<COLOR>
```
效果: ![](https://img.shields.io/badge/<LABEL>-<MESSAGE>-<COLOR>)
- `<LABEL>`：左侧标签文本
- `<MESSAGE>`：右侧信息文本
- `<COLOR>`：右侧背景颜色（名称或十六进制值）

示例：

```markdown
![MIT License](https://img.shields.io/badge/license-MIT-green)
```

效果：![](https://img.shields.io/badge/license-MIT-green)

## 高级自定义

### 常用参数

通过URL参数可以进一步自定义徽章：

|     参数     |                        说明                        |            示例             |
| :----------: | :------------------------------------------------: | :-------------------------: |
|    `logo`    | 添加图标（[这里找icon](https://simpleicons.org/)） |       `?logo=github`        |
| `logoColor`  |                      图标颜色                      |     `?logoColor=white`      |
|   `style`    |                      样式风格                      |    `?style=flat-square`     |
|   `label`    |                    覆盖标签文本                    |      `?label=Version`       |
| `labelColor` |                     标签背景色                     |    `?labelColor=555555`     |
|   `color`    |                     信息背景色                     |        `?color=blue`        |
|    `link`    |                    添加点击链接                    | `?link=https://example.com` |

组合示例：

```markdown
![Node.js](https://img.shields.io/badge/Node.js-14.15.0-green?logo=nodedotjs&logoColor=white&style=flat-square)
```

效果：![](https://img.shields.io/badge/Node.js-14.15.0-green?logo=nodedotjs&logoColor=white&style=flat-square)

## 调整徽章尺寸

虽然Shields.io不直接提供尺寸参数，但有几种解决方案：

1. **scale参数**（自托管服务）：

   ```
   ?scale=1.5
   ```

2. **HTML/CSS控制**：

   ```html
   <img src="https://img.shields.io/..." style="width: 200px;">
   ```

3. **通过文本长度**：
   增加标签和信息文本长度会自动扩展徽章宽度

## 动态徽章

Shields.io支持从各种平台获取实时数据：

- GitHub星标数：

  ```
  https://img.shields.io/github/stars/vuejs/vue
  ```

  https://img.shields.io/github/stars/vuejs/vue

- npm版本：

  ```
  https://img.shields.io/npm/v/react
  ```

  https://img.shields.io/npm/v/react

## 自托管服务

对于高级用户，可以自托管Shields.io服务：

1. 克隆官方仓库：

   ```bash
   git clone https://github.com/badges/shields.git
   ```

2. 部署服务（支持Docker）：

   ```bash
   docker run -p 80:80 badge/shields
   ```

## 最佳实践

1. 保持徽章简洁明了
2. 为重要徽章添加点击链接
3. 使用一致的样式风格
4. 在README.md中使用表格组织多个徽章

示例：

```markdown
| 类别 | 徽章 |
|------|------|
| 构建 | ![Build](https://img.shields.io/badge/build-passing-green) |
| 覆盖率 | ![Coverage](https://img.shields.io/badge/coverage-95%25-brightgreen) |
```
 ![Build](https://img.shields.io/badge/build-passing-green)
![Coverage](https://img.shields.io/badge/coverage-95%25-brightgreen)