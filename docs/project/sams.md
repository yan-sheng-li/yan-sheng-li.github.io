# 🏫图书馆选座管理系统*

<MyGlobalComponent />

> 课程设计/毕设：Springboot+Bootstrap实现



## 功能概览

座位管理系统提供了一系列功能来简化图书馆座位的管理：

- **用户认证：** 只有授权用户可以访问系统。
- **座位预约：** 用户可以灵活地预约今天或明天的座位，系统的预约机制参考了清华大学图书馆的灵活预约规则。
- **我的预约：** 用户可以查看自己的预约，进行签到、临时离开操作，并且系统会自动记录违规操作以提高用户的管理意识。
- **我的违规记录：** 用户可以查看自己是否有违规记录，了解违规原因。
- **用户管理：** 管理员可以管理用户，包括查询、添加、修改、删除用户以及导出用户列表。



## 技术栈

座位管理系统采用以下技术：

- **Spring Boot：** 提供了强大而灵活的 Java 企业应用程序开发框架。
- **Thymeleaf：** 用于在服务器端和独立环境中渲染动态内容的现代化 Java 模板引擎。
- **Bootstrap：** 流行的前端框架，用于构建响应式和视觉吸引力强的网页。
- **MySQL：** 可靠且广泛使用的关系型数据库管理系统。
- **MyBatis-Plus：** MyBatis 的增强工具，简化数据库操作。
- **SA-Token：** Spring Boot 项目的轻量级权限认证系统。

![](http://cdn.qiniu.liyansheng.top/typora/b50eb7f070464a28b6b6bf3dcc7136bf.jpeg)

## 系统架构

座位管理系统采用模块化架构，前端页面使用Thymeleaf模板渲染动态内容，后端逻辑则由Spring Boot处理，并与MySQL数据库无缝集成。

![image-20231223225920870](http://cdn.qiniu.liyansheng.top/typora/image-20231223225920870.png)

## 项目结构

![image-20231223233125145](http://cdn.qiniu.liyansheng.top/typora/image-20231223233125145.png)

## 核心功能展示

### 用户认证

基于用户表的role字段来判断身份，admin表示管理员，user表示普通用户，登录后，根据role自动验证授权。

![image-20231223230159535](http://cdn.qiniu.liyansheng.top/typora/image-20231223230159535.png)

### 首页

简单分三个板块：

- **轮播图**：在这个板块，您可以欣赏到校园内壮丽的景色和丰富多彩的校园活动，让您更深入地了解我们学校的多元魅力。这里将呈现校园一瞥，带您领略我们学校丰富多彩的校园生活。
- **系统公告**：系统公告板块为您提供最新的系统消息和重要通知。无论是座位预约调整、系统更新还是重要通知事项，您都可以在这里第一时间获取到相关信息。我们承诺提供及时、清晰的系统动态，让您对系统运行状况了如指掌。
- **学校通知**：学校通知板块为您带来学校内部的最新动态和重要消息。无论是学校活动、教学安排还是重要通知，这里将为您及时呈现。让您与学校保持紧密联系，随时了解学校的各项消息和活动，共同感受学校蓬勃发展的活力与魅力。

![image-20231223230303279](http://cdn.qiniu.liyansheng.top/typora/image-20231223230303279.png)

### 座位预约

选座阅览室：

选择开放的阅览室，如果是管理员，还能操作新增阅览室。

![image-20231223230344950](http://cdn.qiniu.liyansheng.top/typora/image-20231223230344950.png)

选座预约：

进入一个阅览室，即可看到改室内的座位的状态（可选，使用中，暂离等）

![image-20231223230416281](http://cdn.qiniu.liyansheng.top/typora/image-20231223230416281.png)

成功预约如下：

![image-20231223230445919](http://cdn.qiniu.liyansheng.top/typora/image-20231223230445919.png)

不可重复预约，一次一人只能预约一个，如下：

![image-20231223230630634](http://cdn.qiniu.liyansheng.top/typora/image-20231223230630634.png)

### 我的预约

进入我的预约界面，如果我有新的预约，将出现签到按钮，点击按钮，可签到！

![image-20231223230505210](http://cdn.qiniu.liyansheng.top/typora/image-20231223230505210.png)

签到成功如下：

![image-20231223230700612](http://cdn.qiniu.liyansheng.top/typora/image-20231223230700612.png)

中途可暂离或者签退：

![image-20231223230730970](http://cdn.qiniu.liyansheng.top/typora/image-20231223230730970.png)

指定时间内不签到或者长时间不签退，记违规一次：

![image-20231223230838768](http://cdn.qiniu.liyansheng.top/typora/image-20231223230838768.png)

### 违规查看

![image-20231223230539000](http://cdn.qiniu.liyansheng.top/typora/image-20231223230539000.png)

### 用户管理

管理员可操作

![image-20231223230601055](http://cdn.qiniu.liyansheng.top/typora/image-20231223230601055.png)

个人信息更新：

![image-20231223230934389](http://cdn.qiniu.liyansheng.top/typora/image-20231223230934389.png)

![image-20231223230950088](http://cdn.qiniu.liyansheng.top/typora/image-20231223230950088.png)

以上展示部分，更多页面效果可以拿到源码后自己尝试！
## 源码

<!-- ![](http://cdn.qiniu.liyansheng.top/img/Snipaste_2024-06-14_23-38-53.png) -->
<PaymentButton :productId="158" />

## 配套报告

::: warning
![](http://cdn.qiniu.liyansheng.top/img/报告预ere览图.jpg)
<!-- ![](http://cdn.qiniu.liyansheng.top/img/Snipaste_2024-06-14_23-33-19.png) -->
:::
<PaymentButton :productId="159" :buttonText="'点我获取-报告'"/>


