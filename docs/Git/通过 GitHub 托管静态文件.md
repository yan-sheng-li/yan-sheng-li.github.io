# 通过 GitHub 托管静态文件

### 使用 GitHub Pages 上传 JS 文件

1. **创建 GitHub 仓库**：

   - 登录到 GitHub，创建一个新的仓库，例如 `my-cdn-repo`。

2. **上传你的 `JS` 文件**：

   - 在仓库中上传你的 `watermark.js` 文件。你可以直接拖放文件，或者通过 Git 提交文件。

   上传之后，文件会出现在仓库的文件列表中。

3. **启用 GitHub Pages**：

   - 进入 GitHub 仓库页面。
   - 点击页面顶部的 **Settings**（设置）。
   - 在 **Pages** 部分，选择 `main` 分支，点击 **Save**，并确保发布目录为 `/` 或你上传 `JS` 文件的目录。
   - GitHub 会生成一个 URL，例如 `https://username.github.io/my-cdn-repo/`，其中 `username` 是你的 GitHub 用户名，`my-cdn-repo` 是你创建的仓库名。

4. **访问文件**：

   - 你上传的 `watermark.js`

      文件可以通过这个 URL 访问，例如：

     ```perl
     https://username.github.io/my-cdn-repo/watermark.js
     ```

### 在网页中引入 CDN 文件

现在，你可以在任何网页中通过以下方式引入你的 `JS` 文件：

```html
<script src="https://username.github.io/my-cdn-repo/watermark.js"></script>
```