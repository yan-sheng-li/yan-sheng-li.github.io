# vue3集成driverjs

## 参考文档

https://driverjs.com/docs/installation

## 统一封装 

```
src/
 ├─ plugins/
 │   └─ driver/
 │       ├─ index.ts        // 对外入口
 │       ├─ driver.ts       // 实例封装
 │       └─ steps.ts        // 所有页面步骤
```

### 1️⃣ 创建统一 Driver 实例

```js
// src/plugins/driver/driver.ts
import { driver } from "driver.js";
import 'driver.js/dist/driver.css'

let driverObj = null

export function getDriver() {
    return driver
}

export function createDriver(steps = []) {
    driverObj = driver({
        steps: steps,
        animate: true,
        allowClose: false,
        overlayClickBehavior: 'next',
        showProgress: true,
        doneBtnText: '完成'
    })
    return driverObj
}

```

✔️ **单例模式，避免多实例冲突**

------

### 2️⃣ 统一管理引导步骤

```js
// src/plugins/driver/steps.ts
export const driverStepsMap = {
    adminDashboard: [
        {
            element: '.dashboard-card',
            popover: {
                title: '仪表盘',
                description: '这里是系统功能入口'
            }
        }
    ],

    user: [
        {
            element: '#user-table',
            popover: {
                title: '用户列表',
                description: '这里管理所有用户'
            }
        }
    ]
}

```

✔️ 页面级配置，**不用在组件里写步骤**

------

### 3️⃣ 对外暴露统一方法

```js
// src/plugins/driver/index.ts
import { createDriver } from './driver'
import { driverStepsMap } from './steps'

export function startGuide(pageKey) {
  const steps = driverStepsMap[pageKey]

  if (!steps || steps.length === 0) return

  const driverObj = createDriver(steps)
  driverObj.drive()
}

// 进阶：只引导一次
export function startGuideOnce(pageKey) {
  const guideKey = `guide_${pageKey}`
  const hasGuided = localStorage.getItem(guideKey)
  if (hasGuided) return

  startGuide(pageKey)
  localStorage.setItem(guideKey, 'true')
}

```

------

## 全局使用方式

### 在页面里直接用

```
import { startGuide } from '@/plugins/driver'

onMounted(() => {
  startGuide('adminDashboard')
})
```

或者：

```
startGuide('user')
```

✔️ **页面只管“什么时候开始”**

## 进阶

> 只引导一次，基于页面路由配置自动触发

```js
import { createRouter, createWebHistory } from 'vue-router'
import { startGuideOnce } from '@/plugins/driver'

const adminRoutes = [
  {
    path: 'dashboard',
    name: 'Dashboard',
    meta: {
      title: '仪表盘',
      icon: 'ix:dashboard',
      hidden: true,
      guideKey: 'adminDashboard'
    },
    component: () => import('@/views/admin/Dashboard.vue'),
  },
  ·············
    
 router.afterEach((to) => {
  if (to.meta.guideKey) {
    setTimeout(() => {
      startGuideOnce(to.meta.guideKey)
    }, 300)
  }
})
```

