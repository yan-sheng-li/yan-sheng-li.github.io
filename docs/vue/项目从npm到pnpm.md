# 项目从npm到pnpm

> Vite + Vue 3 项目从 npm 切换到 pnpm 是非常常见且推荐的做法。pnpm 速度更快、磁盘空间占用更少（通过硬链接共享 node_modules），尤其适合中大型项目。

### 切换步骤（超级简单，基本无风险）

1. **删除旧的锁文件和 node_modules**
   
   ```bash
   rm -rf node_modules
   rm package-lock.json   # npm 的锁文件，必须删
   # 如果有 yarn.lock 也删掉（虽然你用的是 npm）
   rm yarn.lock 2>/dev/null || true
   ```
   
2. **安装 pnpm（如果你还没装）**
   ```bash
   # 推荐方式（官方推荐）
   npm install -g pnpm
   
   # 或者用 corepack（Node.js 16.13+ 自带）
   corepack enable
   corepack prepare pnpm@latest --activate
   ```

3. **用 pnpm 重新安装依赖**
   
   ```bash
   pnpm install
   ```
   第一次执行会自动生成两个新文件：
   - `pnpm-lock.yaml`（pnpm 的锁文件，以后要提交到 git）
   - `pnpm-workspace.yaml`（如果有 monorepo 才会生成，单项目一般没有）
   
4. **修改 package.json 中的脚本（推荐，但不是必须）**
   pnpm 支持直接用 `pnpm dev`、`pnpm build` 等代替 `pnpm run xxx`，但为了保持和原来一致，建议把 scripts 改成支持两者：
   
   ```json
   {
     "scripts": {
       "dev": "vite",
       "build": "vite build",
       "preview": "vite preview"
     }
   }
   ```
   这样你既可以用 `npm run dev`（其实调用 pnpm），也可以直接 `pnpm dev`，都很方便。
   
5. **提交到 git（重要！）**
   ```bash
   git add pnpm-lock.yaml
   git rm package-lock.json
   # 如果你想强制团队都用 pnpm，可以加 .npmrc 文件
   echo "lockfile: true" > .npmrc
   echo "node-linker=hoisted" >> .npmrc  # 可选：让 node_modules 结构更接近 npm，便于一些工具兼容
   ```

### 团队协作注意事项

- 告诉团队成员也切换到 pnpm，或者至少让他们删掉 package-lock.json，只保留 pnpm-lock.yaml。
- 如果有人还是用 npm install，会重新生成 package-lock.json，容易造成锁文件冲突。解决办法：
  - 在项目根目录加一个 `.npmrc` 文件：
    ```ini
    package-lock=false
    lockfile=false
    ```
    这样即使有人用 npm 安装，也不会生成 package-lock.json。

### 切换后你会立刻感受到的好处

- `pnpm install` 通常比 npm 快 2-5 倍
- 多个项目共享同一个依赖存储（全局 store），磁盘空间大幅节省
- 更严格的依赖解析，避免 phantom dependencies（幻影依赖）

### 总结：一句话操作

```bash
rm -rf node_modules package-lock.json && pnpm install
```

---
📌可能遇到问题：

下载慢？
> 换镜像（推荐）：用淘宝镜或腾讯镜加速。


在项目根目录的 .npmrc 文件里加：

```bash
registry=https://registry.npmmirror.com/
```
或者临时命令：`pnpm install --registry https://registry.npmmirror.com`

如果不想看警告，可以调高阈值（在 .npmrc 加）：
```bash
textfetch-min-speed-kibps=10   # 把最低速度调低
fetch-warn-timeout-ms=30000  # 把超时警告调到30秒
```