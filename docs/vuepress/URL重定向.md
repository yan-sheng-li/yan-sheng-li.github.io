# URL重定向

> 在整个站点范围内处理 URL，可以编写一个 VuePress 插件来统一处理所有页面的 URL。

## 创建一个 VuePress 插件
例如 `my-plugin.js`：

```js
module.exports = (options, context) => ({
  enhanceAppFiles: {
    name: 'redirect-htm-to-html',
    content: `
      export default ({ router }) => {
        router.beforeEach((to, from, next) => {
          if (to.path.endsWith('.htm')) {
            const newPath = to.path.replace('.htm', '.html');
            next({ path: newPath, replace: true });
          } else {
            next();
          }
        });
      }
    `,
  },
});
```

## 配置使用
```js
module.exports = {
  plugins: [
    require('./my-plugin')
  ]
}
```

::: tip
通过这些方法，你可以有效解决 CSDN 外链跳转导致的 .html 被修改为 .htm 的问题。在 VuePress 中，使用 JavaScript 或插件是较为灵活和方便的解决方案。
:::