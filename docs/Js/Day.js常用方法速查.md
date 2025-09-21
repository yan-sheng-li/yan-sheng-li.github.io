# Day.js常用方法速查

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
