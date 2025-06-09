# 🏦模拟银行ATM系统*

<MyGlobalComponent />


## 课题背景

随着现代经济的发展，电子支付和自动化银行服务已成为人们生活中不可或缺的一部分。自动取款机（ATM）作为一种常见的自助服务设备，使用户能够方便地进行资金的存取、查询余额、转账等操作，而无需到银行柜台。


## 功能要求
1. 界面设计：使用Java Swing库创建一个用户友好的界面，包括显示屏、数字按键、功能按钮等组件，模拟真实的ATM界面。
2. 用户认证：实现用户登录功能，包括输入银行卡号、验证用户身份等。
3. 资金操作：包括存款和取款功能，用户可以输入金额并执行相应的操作。确保正确计算余额并更新到系统中。
4. 余额查询：实现查询余额功能，显示用户账户的当前余额。
5. 转账功能：允许用户输入转账金额和目标账户，进行资金的转账操作。
6. 交易记录：记录每笔交易的相关信息，包括时间、金额、交易类型等，并能够在需要时查询这些记录。
7. 异常处理：处理可能发生的异常情况，如余额不足、密码错误等，并给出相应的提示信息。
8. 可扩展性：代码应具备良好的可扩展性，方便将来添加新功能或改进现有功能。

学生可以根据以上要求，结合自己的创意和设计思路，进行课程设计的实现。通过完成这个课题，学生将能够加强对Java Swing编程和面向对象编程的理解，提升自己的软件开发技能。



## 技术选型

- Java语言
- MySQL数据库
- Swing
- JDBC

## 实现效果

### 动态演示

![](http://cdn.qiniu.liyansheng.top/typora/GIF%202024-1-10%2017-59-20.gif)

### 账户验证

> 长数字卡号与密码，验证通过方可进入系统操作

![](http://cdn.qiniu.liyansheng.top/typora/image-20240110174706480.png)

### 新开户

> 需要登记姓名，密码，身份证号，开户卡号自动随机生成

![](http://cdn.qiniu.liyansheng.top/typora/image-20240110174716078.png)

### 首页

> 左右两边是操作按钮，中间是交互显示屏，下方有实时时间

![](http://cdn.qiniu.liyansheng.top/typora/image-20240110174732028.png)

### 存款

> 将一定金额的现金存入银行账户中。

![](http://cdn.qiniu.liyansheng.top/typora/image-20240110174829725.png)

### 取款

> 从银行账户中取出一定金额的现金。可快捷输入 ，点击相应的数字，也可以自定义金额

![](http://cdn.qiniu.liyansheng.top/typora/image-20240110174837436.png)

### 转账

> 将一定金额的资金从自己的银行账户转移到他人的银行账户中。

![](http://cdn.qiniu.liyansheng.top/typora/image-20240110174846225.png)

### 余额查询

> 查询银行账户中的余额情况。

![](http://cdn.qiniu.liyansheng.top/typora/image-20240110174857152.png)

### 密码修改

> 用户可以修改银行账户的登录密码。密码修改通常需要进行身份验证，例如输入原始密码或提供其他安全信息。

![](http://cdn.qiniu.liyansheng.top/typora/image-20240110174907645.png)

### 个人流水

> 用户可以查看银行账户的收支明细，包括每笔交易的时间、金额和类型等信息。个人流水记录可以帮助用户追踪和管理自己的资金流动。

![](http://cdn.qiniu.liyansheng.top/typora/image-20240110174920662.png)

以上展示部分效果，具体可以将项目工程克隆下来，本地运行看下实际效果。



## 源码

<gzh />

<ClientOnly>
  <KeywordTip keyword="银行系统" />
</ClientOnly>




## 配套报告


::: warning
![](http://cdn.qiniu.liyansheng.top/img/Snipaste_2024-01-10_19-14-58.jpg)
<!-- ![](http://cdn.qiniu.liyansheng.top/img/20240614231335.png) -->
:::

<PaymentButton :productId="122" :buttonText="'点我获取--报告'" />