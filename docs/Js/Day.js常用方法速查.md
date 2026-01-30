# Day.js常用方法速查

官网: https://day.js.org/zh-CN/

> Day.js 是一个轻量级的日期处理库，API 和 Moment.js 类似，但体积更小，性能更好。下面整理了常用功能，方便快速上手。

---

## 📌 1. 基础用法

```js
import dayjs from 'dayjs'

// 当前时间
dayjs()  // 2025-09-21T00:25:00+08:00

// 格式化输出
dayjs().format('YYYY-MM-DD HH:mm:ss') // 2025-09-21 00:25:00
```

常见格式：

* `YYYY` 年
* `MM` 月
* `DD` 日
* `HH` 小时
* `mm` 分钟
* `ss` 秒

---

## 📌 2. 时间计算

```js
dayjs().add(7, 'day')      // 7天后
dayjs().subtract(1, 'month') // 1个月前
```

支持的单位：

* `year`、`month`、`day`、`hour`、`minute`、`second`

---

## 📌 3. 时间比较

```js
const a = dayjs('2025-09-21')
const b = dayjs('2025-09-25')

a.isBefore(b) // true
a.isAfter(b)  // false
a.isSame(b)   // false
```

---

## 📌 4. 相对时间（需要插件 relativeTime）

```js
import relativeTime from 'dayjs/plugin/relativeTime'
import 'dayjs/locale/zh-cn'

dayjs.extend(relativeTime)
dayjs.locale('zh-cn')

dayjs('2025-09-15').from(dayjs()) // 6 天前
dayjs('2025-09-30').from(dayjs()) // 9 天后
```

---

## 📌 5. 时间差（差值计算）

```js
const a = dayjs('2025-09-21')
const b = dayjs('2025-09-25')

b.diff(a, 'day')   // 4
b.diff(a, 'hour')  // 96
```

---

## 📌 6. 获取与设置时间

```js
dayjs().year()      // 获取年份
dayjs().month()     // 获取月份 (0-11)
dayjs().date()      // 获取日期

dayjs().hour(12)    // 设置小时
dayjs().minute(30)  // 设置分钟
```

---

## 📌 7. 判断与验证

```js
dayjs().isValid()        // 是否有效日期
dayjs().isLeapYear()     // 是否闰年（需插件 isLeapYear）
dayjs().isToday()        // 是否今天（需插件 isToday）
```

---

## 📌 8. 常用插件一览

* `relativeTime` → 相对时间（几天前/几天后）
* `isLeapYear` → 判断闰年
* `duration` → 处理时间段
* `utc` → UTC 时间处理
* `timezone` → 时区支持

---

## 🎯 总结

Day.js 用法非常直观，常用场景大致分为：

* **格式化**（`format`）
* **计算**（`add`、`subtract`）
* **比较**（`isBefore`、`isAfter`）
* **相对时间**（`from`，需要插件）
* **差值**（`diff`）

只要记住这几个核心方法，大多数日期处理需求都能轻松搞定


## vue3整合dayjs

**“一个文件、可直接拷贝用、项目级通用”** 的版本，把**初始化 + 常见封装**全部放在一起，不拆、不绕。

## 安装

```
pnpm add dayjs
```



------

## ✅ `src/utils/dayjs.ts`（统一一个文件）

```ts
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import isToday from 'dayjs/plugin/isToday'
import isYesterday from 'dayjs/plugin/isYesterday'
import weekday from 'dayjs/plugin/weekday'
import 'dayjs/locale/zh-cn'

/* ======================
 * dayjs 全局初始化
 * ====================== */
dayjs.extend(relativeTime)
dayjs.extend(isToday)
dayjs.extend(isYesterday)
dayjs.extend(weekday)
dayjs.locale('zh-cn')

export default dayjs

/* ======================
 * 常用时间工具封装
 * ====================== */

/** xxx 时间之前 */
export const formatFromNow = (time: string | number | Date) => {
  if (!time) return ''
  const d = dayjs(time)
  return d.isValid() ? d.fromNow() : ''
}

/** 时间格式化 */
export const formatTime = (
  time: string | number | Date,
  format = 'YYYY-MM-DD HH:mm:ss'
) => {
  if (!time) return ''
  const d = dayjs(time)
  return d.isValid() ? d.format(format) : ''
}

/** 智能时间（微博 / IM 风格） */
export const formatSmartTime = (time: string | number | Date) => {
  if (!time) return ''
  const d = dayjs(time)
  if (!d.isValid()) return ''

  if (d.isToday()) {
    return d.fromNow() // 今天：x 小时前
  }

  if (d.isYesterday()) {
    return `昨天 ${d.format('HH:mm')}`
  }

  if (d.year() === dayjs().year()) {
    return d.format('MM-DD HH:mm')
  }

  return d.format('YYYY-MM-DD HH:mm')
}

/** 是否在 N 天内 */
export const isWithinDays = (
  time: string | number | Date,
  days = 7
) => {
  if (!time) return false
  return dayjs().diff(dayjs(time), 'day') <= days
}

/** 剩余时间（倒计时文案） */
export const formatRemainTime = (endTime: string | number | Date) => {
  const diff = dayjs(endTime).diff(dayjs(), 'second')
  if (diff <= 0) return '已结束'

  const day = Math.floor(diff / 86400)
  const hour = Math.floor((diff % 86400) / 3600)
  const minute = Math.floor((diff % 3600) / 60)

  if (day > 0) return `${day} 天 ${hour} 小时`
  if (hour > 0) return `${hour} 小时 ${minute} 分钟`
  return `${minute} 分钟`
}

/** 是否已过期 */
export const isExpired = (time: string | number | Date) => {
  if (!time) return false
  return dayjs().isAfter(dayjs(time))
}
```

------

## ✅ 使用方式（统一入口）

```ts
import dayjs, {
  formatFromNow,
  formatTime,
  formatSmartTime,
  isExpired
} from '@/utils/dayjs'
<template>
  <div>{{ formatFromNow(item.createTime) }}</div>
  <div>{{ formatSmartTime(item.createTime) }}</div>
  <div v-if="isExpired(item.endTime)">已过期</div>
</template>
```

------

> 可完美复用
- ✔ 插件只初始化一次
- ✔ 所有时间规则集中管理
- ✔ 以后改格式 / 改文案只动一个文件
- ✔ 不污染全局，但又足够统一

