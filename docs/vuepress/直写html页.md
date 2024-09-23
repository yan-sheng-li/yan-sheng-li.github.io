# 直写html页

## 方案 1：将 .html 文件放在 public 目录

VuePress 提供了一个 public 目录来处理静态资源，所有放在 public 目录中的文件都会被直接映射到网站的根目录下。

1. 创建一个 public 目录（如果还没有），然后将你的 .html 文件放入该目录中。例如：public/example.html。
2. 这样你就可以通过 http://localhost:8080/example.html 直接访问该文件。

## 方案 2：使用 VuePress 自定义页面

如果你想要利用 VuePress 提供的布局和功能，你可以考虑使用 VuePress 提供的自定义页面方式，直接写 Vue 组件或使用 Markdown 进行扩展。

1. 创建一个 .vue 文件，作为 VuePress 的自定义页面。
2. 或者，在 .md 文件中插入你需要的 HTML 代码。

## 方案 3：修改构建配置

如果你有更多特定的需求，可以通过 VuePress 的 vue.config.js 或 config.js 配置文件，调整文件服务方式。不过，通常直接将静态文件放入 public 目录是最简单的方式。

> 总结：将 HTML 文件放入 public 目录 是最直接且推荐的方式。
