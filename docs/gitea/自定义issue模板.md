# gitea自定义issue模板

以下是适用于 Gitea 的三个常用 issue 模板，分别是：

1. 🐞 Bug 报告（bug.md）
2. 🌟 功能请求（feature.md）
3. ❓ 使用咨询 / 问题反馈（question.md）

将它们放在你的仓库目录下的 `.gitea/ISSUE_TEMPLATE/` 文件夹中。

------

### ✅ `.gitea/ISSUE_TEMPLATE/bug.md`

```markdown
---
name: 🐞 Bug 报告
about: 提交一个 bug 或系统异常问题
title: "[Bug]: "
labels: bug
assignees: ''
---

### 🐞 描述问题

请简要描述你遇到的问题是什么。

### 🔁 复现步骤

1. ...
2. ...
3. 出现以下报错/问题：...

### 🧠 期望行为

请说明你原本预期的正确行为是什么。

### 🖼️ 实际表现（可选截图）

如果可能，请粘贴相关截图或屏幕录制。

### 🧾 环境信息

- Gitea 版本：
- 浏览器 / 客户端版本：
- 操作系统 / 服务器系统：
- 数据库类型（如 MySQL、PostgreSQL）：
- 日志中是否有报错（粘贴关键日志）：
```

------

### ✅ `.gitea/ISSUE_TEMPLATE/feature.md`

```markdown
---
name: 🌟 功能请求
about: 提出一个新功能、增强或建议
title: "[Feature]: "
labels: enhancement
assignees: ''
---

### 💡 功能描述

请描述你想要实现的功能或增强是什么。

### ✅ 该功能的使用场景

请说明你为什么需要它？是否有具体的使用场景或业务需求？

### 🛠️ 建议的解决方案（可选）

你有什么初步的想法或建议实现方式吗？

### 📌 其他补充信息（可选）

你是否有参考链接、其他平台的做法？
```

------

### ✅ `.gitea/ISSUE_TEMPLATE/question.md`

```markdown
---
name: ❓ 使用咨询 / 问题反馈
about: 提问或反馈使用中遇到的问题（非 bug）
title: "[Question]: "
labels: question
assignees: ''
---

### ❓ 你的问题是什么？

请简要描述你的疑问或不确定的地方。

### 💬 背景信息（可选）

你是在什么场景下遇到这个问题的？是否尝试过其他方式？

### 📄 相关配置 / 日志 / 代码片段（可选）

如果有配置文件、日志、截图等信息可以提供，请一并粘贴。

### 📌 你希望得到什么帮助？

请描述你希望我们如何协助你解决这个问题。
```

------

### 📁 最终目录结构如下：

```plaintext
your-repo/
└── .gitea/
    └── ISSUE_TEMPLATE/
        ├── bug.md
        ├── feature.md
        └── question.md
```
