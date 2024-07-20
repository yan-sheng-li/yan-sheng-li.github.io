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
  