# 🛫航空订票管理系统
> 在本教程中，我们将创建一个基本的航空订票管理系统GUI应用，用户可以通过图形界面执行各种操作。我们将使用Python编程语言和Tkinter库来实现此应用。

![](http://cdn.qiniu.liyansheng.top/img/0e63f8440eb241f488a6050b53b31e1c.png)

## 功能概述

> 1. 航班管理：用户可以添加新的航班，输入航班号、起始地、目的地、出发时间、到达时间、价格和可用座位数。

![](http://cdn.qiniu.liyansheng.top/img/7ea6e84a990a593f09af36fdbc1bec94.png)

> 2. 查询航班信息：用户可以通过输入航班号来查询特定航班的详细信息，包括起始地、目的地、出发时间、到达时间、价格和剩余座位数。

![](http://cdn.qiniu.liyansheng.top/img/e399b559c41b5834c534fa2b6491b2cb.png)

> 3. 预订航班：用户可以预订航班，需要提供航班号和乘客姓名。系统会检查航班的剩余座位数，并更新预订列表。

![](http://cdn.qiniu.liyansheng.top/img/a9b63551aaf4c0aa8bbf3de7ae048493.png)

> 4. 取消预订：用户可以取消已预订的航班，需要提供航班号和乘客姓名。系统会相应地增加航班的剩余座位数，并更新预订列表。

![](http://cdn.qiniu.liyansheng.top/img/e959ac9456ad45186c815c58f6910187.png)

> 5. 显示预订列表： 用户可以查看特定航班的预订列表，显示所有已预订该航班的乘客姓名。

![](http://cdn.qiniu.liyansheng.top/img/cb448c20b2678c4d99313a66424da2a6.png)

> 6. 办理登机：用户可以办理登机手续，需要提供航班号和乘客姓名。系统会验证乘客是否已经预订了该航班。

![](http://cdn.qiniu.liyansheng.top/img/0d552611fba8796ee3a550b222a47613.png)

## 技术实现

- Tkinter库：用于创建GUI界面，提供了各种组件和方法来构建用户界面。
- Python类：使用类来组织航班和航班预订系统的逻辑，包括航班对象和航班预订系统对象。
- 窗口管理：通过创建顶层窗口和子窗口来实现不同功能的界面展示和交互。
- 消息框：利用Tkinter的消息框组件，向用户展示提示信息和错误信息。

这个简单的航空订票系统通过Tkinter库提供的简单易用的GUI工具，为用户提供了便捷的航班管理和预订服务。
## 源码👇
![](http://cdn.qiniu.liyansheng.top/img/57d2962d107dec444e7bd527c35c4b38.png)
