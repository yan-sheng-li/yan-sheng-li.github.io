# 📚图书借阅管理*

<MyGlobalComponent />



## 概况

> 实现简易版图书借阅管理系统，学生（读者）在系统里可以检索图书，借阅图书，归还图书，修改密码，查看个人借阅信息等功能；
>
> 管理员有书籍信息，学生（读者）信息，借阅信息维护等功能

## 开发环境

`开发语言`：Java   (jdk版本12+)

`数据库`：MySQL  (版本8.0+)

`工具`：JDBC


`软件`：IDEA（推荐），Navicat

`项目构建`：maven



## 程序效果

> 1.登录验证：分读者与管理员两个身份，输入账号密码，校验通过即可进入系统，否则弹窗提示操作结果。

![](http://cdn.qiniu.liyansheng.top/img/df79e8358955e6e7e65bcc17728d1e52.jpeg)

> 2.首页：读者进入系统后，首先看到的是首页，可在此处设置公告，书目推荐等信息。

![](http://cdn.qiniu.liyansheng.top/img/eb10ac052648fc44e1259c69ad9520d2.jpeg)

> 3.检索：读者通过输入要查书本的ISBN或者书名即可查询

![](http://cdn.qiniu.liyansheng.top/img/67b19112ed7a3d7e7704fa4e6e5f4bd5.jpeg)

> 4.借还书籍：在表单输入要借图书的ISBN，点确认即可，会先确认该书是否还有库存，如果无，不能借阅成功，反之可以；表格显示的是当前登录用户的借阅信息，鼠标指针选中一行，点击右下角的还书，即可归还书籍。

![](http://cdn.qiniu.liyansheng.top/img/7b0fa8e1c076d8a8b51495b2c28c1a90.jpeg)

> 5.个人信息：读者在此可以查看自己的个人信息，修改密码。

![](http://cdn.qiniu.liyansheng.top/img/f402f2d2d1c78f2aeee97f5bd3be5415.jpeg)

> 6.学生管理：管理员可以对学生（读者）信息进行多条件查询，新增，修改，删除。

![](http://cdn.qiniu.liyansheng.top/img/2308bde760e9896d4470f90c10c5d5ac.jpeg)

> 7.书籍管理：管理员可以对书籍信息进行多条件查询，新增，修改，删除。

![](http://cdn.qiniu.liyansheng.top/img/8c4ba3fd3af2c2f39f05f109d6a64810.jpeg)

> 8.借阅一览：查看系统内部的借阅信息，可选中行删除记录。

![](http://cdn.qiniu.liyansheng.top/img/9076b9a735a12df89f55226523495467.jpeg)

> 9.数据汇总：重要指标数据汇总，如读者数量，书籍种类数量，库存总数等，可根据实际来调整。

![](http://cdn.qiniu.liyansheng.top/img/fd188a7a13c16dd9fe86dc91ee2cb1d1.jpeg)

------
## 源码获取
<gzh />

![](http://cdn.qiniu.liyansheng.top/img/20240527005856.png)


## 配套报告

::: warning
![](http://cdn.qiniu.liyansheng.top/img/报告预览.png)
<!-- ![](http://cdn.qiniu.liyansheng.top/img/Snipaste_2024-06-15_00-16-33.png) -->
:::

<PaymentButton :productId="141" :buttonText="'点我获取-报告'"/>