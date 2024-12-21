# 🏦银行ATM管理系统

<MyGlobalComponent />

## 介绍
> 在本教程中，我们将创建一个基本的银行管理系统GUI应用，用户可以通过图形界面执行各种银行操作。我们将使用Python编程语言和Tkinter库来实现此应用。

![](http://cdn.qiniu.liyansheng.top/img/c1ad454d1ace48d022adbf86b55389d8.png)

## 使用说明

需要安装Python解释器，以及PythonCharm
👉**[点我去下载](https://www.jetbrains.com/pycharm/)** 

## 效果图

> 创建账户：用户可以创建新的银行账户。

![](http://cdn.qiniu.liyansheng.top/img/d3d2a4cd30b8dfa90037e8faaaec5ade.png)
> 存款：用户可以向账户存款。

![](http://cdn.qiniu.liyansheng.top/img/5ee31537415bf35a3abbb98d1b612e7b.png)
> 取款：用户可以从账户取款。

![](http://cdn.qiniu.liyansheng.top/img/060e19419225652b1655d2e06e6be545.png)
> 转账：用户可以将资金从一个账户转移到另一个账户。

![](http://cdn.qiniu.liyansheng.top/img/4de6e6d1e9fa7027e00382478b24a926.png)
> 查询余额：用户可以查询账户余额。

![](http://cdn.qiniu.liyansheng.top/img/aa7965a947adb28a6198b49cfeabdcc2.png)
> 显示所有账户：用户可以查看所有账户的信息。

![](http://cdn.qiniu.liyansheng.top/img/98f2570373aa0e3c8c2646fff8c0e6af.png)
> 关闭窗口：用户可以关闭应用程序窗口。

## 技术实现

我们将使用面向对象编程的方法来组织代码。我们将创建两个类：`BankSystem`和`BankGUI`。`BankSystem`类将处理所有的银行逻辑，包括账户创建、存款、取款、转账和余额查询等功能。`BankGUI`类将负责用户界面的设计和用户交互。

## 代码实现

我们首先导入所需的库，包括Tkinter、PIL和消息框。然后，我们创建`BankSystem`类，其中包含各种银行操作的方法。接下来，我们创建`BankGUI`类，该类初始化Tkinter应用，并设计用户界面，包括各种按钮和窗口。我们使用Tkinter的Toplevel窗口来创建弹出窗口，以便用户执行特定操作，如创建账户、存款、取款、转账和查询余额。

## 源码👇


![](http://cdn.qiniu.liyansheng.top/img/ad60a7a37ef9ff8a00a10c6c251c196a.png)

<!-- <PaymentButton :productId="120" /> -->

