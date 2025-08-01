# 📚图书借阅管理系统*

<MyGlobalComponent />

## 开发环境

`开发语言`：Java

`数据库`：MySQL

`工具`：JDBC

`交互场景`：控制台

`软件`：IDEA（推荐），Navicat

`项目构建`：maven



## 程序运行效果
> 学生（读者）：

```shell
-----------------
   图书管理系统     
   1.学生登录       
   2.管理员登录     
-------------------
请输入身份：1
请输入账号：666
请输入密码：666

登录成功！
---------------
1.借书
2.还书
3.检索
4.退出
---------------
请选择:
1
检索方式：1.书名  2.ISBN码
请选择：
2
请输入图书ISBN：3232
查找结果如下：
id  isbn  书名  作者  出版社  馆藏数量
2  3232  数据库设计  小A  上海出版社  6
-------1.借阅  2.重新输入查询  3.返回------
请选择：1
--借书登记--
借阅成功！
---------------
1.借书
2.还书
3.检索
4.退出
---------------
请选择:
2
----我要还书----
当前借阅记录：
id  isbn  书名  作者  出版社
2  3232  数据库设计  小A  上海出版社
-------1.还书   2.返回------
请选择：2
---------------
1.借书
2.还书
3.检索
4.退出
---------------
请选择:
3
检索方式：1.书名  2.ISBN码
请选择：
1
请输入书名：西游记
--------------------
查找结果如下：
id  isbn  书名  作者  出版社  馆藏数量
1  2132131  西游记  吴承恩  清华  7
-------1.重新输入查询  2.返回------
2
---------------
1.借书
2.还书
3.检索
4.退出
---------------
请选择:
```

> 管理员操作：

```shell
-----------------
   图书管理系统     
   1.学生登录       
   2.管理员登录     
-------------------
请输入身份：2
请输入账号：admin
请输入密码：admin

登录成功！
--------------
1.学生管理
2.书籍管理
3.图书借阅一览
4.退出
--------------
请选择:
3
学生账号  学生姓名  书ISBN  书名  借出时间  应还时间  
3  3  2132131  西游记  2022-06-08 09:41:43  2022-07-08 09:41:43
666  程序员小李  3232  数据库设计  2022-06-09 09:56:22  2022-07-09 09:56:22
---------------
--------------
1.学生管理
2.书籍管理
3.图书借阅一览
4.退出
--------------
请选择:
3
学生账号  学生姓名  书ISBN  书名  借出时间  应还时间  
3  3  2132131  西游记  2022-06-08 09:41:43  2022-07-08 09:41:43
666  程序员小李  3232  数据库设计  2022-06-09 09:56:22  2022-07-09 09:56:22
---------------
--------------
1.学生管理
2.书籍管理
3.图书借阅一览
4.退出
--------------
请选择:
1
---------------
1.所有学生信息
2.查询学生信息
3.修改学生信息
4.删除学生信息
5.添加学生信息
6.返回
----------------
请选择:
2
请输入学生账号：
666
查询结果如下：
---------------
id 账号  姓名
8 666  程序员小李
---------------
1.所有学生信息
2.查询学生信息
3.修改学生信息
4.删除学生信息
5.添加学生信息
6.返回
----------------
请选择:
1
所有学生信息如下:
id 账号  姓名
1 123456  小红
2 222  小王
4 1  1
6 3  3
7 5  5
8 666  程序员小李
---------------
1.所有学生信息
2.查询学生信息
3.修改学生信息
4.删除学生信息
5.添加学生信息
6.返回
----------------
请选择:
6
--------------
1.学生管理
2.书籍管理
3.图书借阅一览
4.退出
--------------
请选择:
2
----------------
1.所有图书信息
2.添加图书信息
3.删除图书信息
4.修改图书信息
5.返回
----------------
请选择:
1
id  isbn  书名  作者  出版社  馆藏数量
1  2132131  西游记  吴承恩  清华  7
2  3232  数据库设计  小A  上海出版社  5
3  43423423  Java进价  小张  深圳出版社  50
6  5  5  5  8  6
------------
----------------
1.所有图书信息
2.添加图书信息
3.删除图书信息
4.修改图书信息
5.返回
----------------
请选择:
5
--------------
1.学生管理
2.书籍管理
3.图书借阅一览
4.退出
--------------
```

## 源码获取
<PasswordProtected>

仓库地址：https://gitee.com/yan-sheng-li/lending_system

</PasswordProtected>

## 配套报告

::: warning
![](http://cdn.qiniu.liyansheng.top/img/报告预览图.png)
<!-- ![](http://cdn.qiniu.liyansheng.top/img/Snipaste_2024-06-15_00-22-44.png) -->
:::

<PaymentButton :productId="139" :buttonText="'点我获取-报告'"/>


