---
permalink: /vuepress/1
---
# 一键部署
## 检查 GitHub Token

确保你在 GitHub 仓库的 Settings -> Secrets 中创建的 ACCESS_TOKEN 具有正确的权限。它需要有 repo 权限才能推送代码到目标仓库。你可以按照以下步骤创建或检查 token：

    访问 GitHub 的 Personal Access Tokens 页面。
    生成一个新的 token，勾选 repo 相关的权限。
    复制生成的 token，并在你的 GitHub 仓库的 Settings -> Secrets 中添加或更新 ACCESS_TOKEN。

## 检查目标仓库和分支

确保你的 TARGET_REPO 和 TARGET_BRANCH 设置正确，并且仓库存在且你有推送权限。

```yaml

TARGET_REPO: yan-sheng-li/note
TARGET_BRANCH: gh-pages  # 通常用于部署到 GitHub Pages
```
## 检查 .yml 文件配置

确保你的 GitHub Actions 配置文件正确无误，尤其是 ACCESS_TOKEN 和 TARGET_REPO 的设置。下面是一个修正后的工作流配置示例：
```yml
name: Build and Deploy

on: 
  push:
    branches:
      - main  # 指定需要触发部署的分支

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest

    steps:
    - name: Checkout
      uses: actions/checkout@v2  # 推荐使用 v2 版本

    - name: Set up Node.js
      uses: actions/setup-node@v2
      with:
        node-version: '16'  # 指定 Node.js 版本

    - name: Install dependencies
      run: npm install

    - name: Build VuePress site
      run: npm run docs:build

    - name: Deploy
      uses: jenkey2011/vuepress-deploy@master
      env:
        ACCESS_TOKEN: ${{ secrets.ACCESS_TOKEN }}
        TARGET_REPO: yan-sheng-li/note  # 将 'your-username/your-repo' 替换为你的目标仓库
        TARGET_BRANCH: gh-pages  # 通常部署到 gh-pages 分支
        BUILD_SCRIPT: npm run docs:build
        BUILD_DIR: docs/.vuepress/dist/  # 确保路径正确

```