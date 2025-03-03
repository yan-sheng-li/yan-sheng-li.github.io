# Git标签

## 用途

#### 1. **标记版本**

在项目开发中，通常会使用 Git 标签来标记软件的版本，例如：

```bash
git tag -a v1.0.0 -m "Release version 1.0.0"
git push origin v1.0.0
```

这样，你可以随时回到该版本：

```bash
git checkout v1.0.0
```

#### 2. **方便发布**

在开源项目或企业项目中，通常会根据标签打包发布，例如：

```bash
git archive --format=zip --output=release-v1.0.0.zip v1.0.0
```

这样就能生成 `release-v1.0.0.zip`，用于分发。

#### 3. **回溯历史**

如果需要查看某个历史版本，标签可以快速定位到该版本，而不必记住 `commit id`：

```bash
git show v1.0.0
```

#### 4. **管理重要里程碑**

在长期开发过程中，可以为重要的功能完成、重大变更等打标签，便于回溯，如：

```bash
git tag -a feature-completed -m "Feature X completed"
```

#### 5. **配合 CI/CD 自动化**

在持续集成（CI/CD）系统中，通常会检测 `Git tag`，自动触发构建和部署。例如：

- `v1.0.0` 触发正式环境发布
- `v1.0.0-beta` 触发测试环境发布

## 使用

### 1. 创建标签

#### 轻量级标签（Lightweight Tag）

```bash
git tag v1.0.0
```

#### 带注释标签（Annotated Tag）

```bash
git tag -a v1.0.0 -m "版本 1.0.0 发布"
```

### 2. 推送标签到远程仓库

#### 推送单个标签：

```bash
git push origin v1.0.0
```

#### 推送所有本地标签：

```bash
git push origin --tags
```

### 3. 查看已有标签

```bash
git tag
```

### 4. 删除标签（可选）

#### 删除本地标签：

```bash
git tag -d v1.0.0
```

#### 删除远程标签：

```bash
git push --delete origin v1.0.0
```

如果你是要对某个特定的 commit 进行标记，可以在 `git tag` 命令后加上 commit ID，例如：

```bash
git tag -a v1.0.0 <commit-id> -m "描述"
```

这样，你就可以在推送代码后，方便地打上版本标签，并推送到远程仓库了！🚀