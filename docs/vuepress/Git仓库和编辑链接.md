---
permalink: /vuepress/4
---
# Git仓库和编辑链接

## 显示
```js
// .vuepress/config.js
module.exports = {
  themeConfig: {
        repo: 'yan-sheng-li/note',
        editLinks: true,
        docsDir: 'docs',
        // 默认为 "Edit this page"
        docsBranch: 'main',  // 指定文档所在的分支
        editLinkText: '编辑此页'
    }
}

```