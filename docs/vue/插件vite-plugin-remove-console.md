# 插件vite-plugin-remove-console

> 场景：开发环境使用`console.log`方便调试与加速开发，项目打包时自动去除`console.log`

1. 安装插件：

   ```Bash
   npm i vite-plugin-remove-console -D
   # 或
   pnpm add vite-plugin-remove-console -D
   ```
   
2. 在 vite.config.ts（或 .js）中配置：

   ```TypeScript
   import { defineConfig } from 'vite'
   import vue from '@vitejs/plugin-vue'
   // 引入插件
   import removeConsole from 'vite-plugin-remove-console'
   
   export default defineConfig({
     plugins: [
       vue(),
       // 只在生产构建时生效
       removeConsole({ external: ['log'] }) // 可选：保留 console.error/console.warn
     ],
   })
   ```
   
   常见配置选项：

   ```TypeScript
   removeConsole({
     // 只移除 console.log，其他如 error、warn 保留（推荐上线时保留错误日志）
     external: ['error', 'warn'],
   })
   ```
   
   优点：
   
   - 只在生产构建（vite build）时生效，开发模式完全不受影响。
   - 支持 TypeScript、SFC、各种模块。
   - 可以精确控制移除哪些 console 方法。