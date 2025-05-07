# 📝任务签到管理系统*

<MyGlobalComponent />

## 功能要求

### 管理员端

- 任务发布
- 学生信息
- 任务列表
- 任务签到详情
- 签到记录管理
- 签到数据导出

### 学生端

- 选择任务签到
- 查看签到记录
- 签到时效校验

### 公共

- 密码重置



## 运用技术

- Java语言
- MySQL数据库
- Swing
- JDBC

## 实现效果

> 登录认证：输入账号密码，选择身份，校验通过将进入对应的操作端

![](http://cdn.qiniu.liyansheng.top/typora/image-20240127222845733.png)

> 学生端-签到：选择一个任务进行签到，如果签到时间不在要求的时间区间，将无法进行签到

![](http://cdn.qiniu.liyansheng.top/typora/image-20240127222904437.png)

> 学生端-签到记录：可查看自己的签到情况

![](http://cdn.qiniu.liyansheng.top/typora/image-20240127222914135.png)

> 学生端-密码重置：可根据实际需要修改个人的登录密码，确保账户的安全性

![](http://cdn.qiniu.liyansheng.top/typora/image-20240127222919812.png)

> 管理员-学生信息：可查看在册的学生信息

![](http://cdn.qiniu.liyansheng.top/typora/image-20240127222941630.png)

> 管理员-发布签到：输入任务签到地址，开始时间，截止时间，以及说明，即可发布一个签到任务

![](http://cdn.qiniu.liyansheng.top/typora/image-20240127222948379.png)

> 管理员-任务列表：可查看已发布签到任务，选择指定一个任务，点击“点击任务查看签到情况”按钮，即可查看该任务对应的签到记录

![](http://cdn.qiniu.liyansheng.top/typora/image-20240127222954770.png)

> 管理员-签到详情：支持对某个签到任务的签到记录进行查询，新增，修改，删除等操作。

![](http://cdn.qiniu.liyansheng.top/typora/image-20240127223003750.png)

> 管理员-密码重置：可根据实际需要修改个人的登录密码，确保账户的安全性

![](http://cdn.qiniu.liyansheng.top/typora/image-20240127230121008.png)

以上展示了部分效果图，具体可获取源码自行调试查看。

## 源码

<gzh />

> 回复关键字：考勤系统

## 配套报告
::: warning
![](http://cdn.qiniu.liyansheng.top/img/报告预览123.jpg)
<!-- ![](http://cdn.qiniu.liyansheng.top/img/20240614230609.png) -->
:::

<PaymentButton :productId="169" :buttonText="'点我获取-报告'"/>