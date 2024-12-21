# 📚图书管理系统


<MyGlobalComponent />


> 本博客将介绍如何使用Python中的Tkinter库和PIL（Python Imaging Library）模块构建一个简单的图书管理系统。图书管理系统是一个常见的应用程序，用于管理图书馆或个人收藏的图书信息。我们将逐步展示系统的功能，包括添加图书、查询图书、显示图书列表、删除图书和修改图书信息，并解释实现这些功能所用到的技术和代码。

![](http://cdn.qiniu.liyansheng.top/img/20240603225651.png)
## 功能介绍

> 添加图书： 用户可以通过界面输入书名、作者和出版年份来添加新的图书信息到系统中。

![](http://cdn.qiniu.liyansheng.top/img/0347efc0dfa0fc86e4db28d07d9d70ac.png)

> 查询图书： 用户可以通过关键词搜索图书，系统将返回与关键词匹配的图书信息。


![](http://cdn.qiniu.liyansheng.top/img/7b2ed754ead9368a596f668678608c9f.png)

> 显示图书列表： 系统会将当前库中的所有图书信息显示在界面上，如果没有图书记录，将显示相应提示。


![](http://cdn.qiniu.liyansheng.top/img/ac63cbb0b174477450a43072fa9a4a01.png)

> 删除图书： 用户可以通过关键词删除图书，如果搜索结果唯一，则直接删除；如果搜索结果不唯一，则提示用户提供更准确的关键词。

![](http://cdn.qiniu.liyansheng.top/img/83c3f58c58581e6b7997bbbb9275afb4.png)

> 修改图书信息： 用户可以通过关键词搜索到想要修改的图书，并在新窗口中修改图书的书名、作者和出版年份信息。

![](http://cdn.qiniu.liyansheng.top/img/18b8fc6b706613c52e8282ba2311784d.png)

> 实现技术：

1. Tkinter库： Tkinter是Python的标准GUI（图形用户界面）工具包，我们使用Tkinter来构建图书管理系统的用户界面，包括窗口、标签、按钮、文本框等组件的创建和布局。
2. PIL模块： PIL（Python Imaging Library）是Python的图像处理库，我们使用PIL模块来加载并显示系统界面的背景图片。
3. 面向对象编程： 我们使用面向对象的编程方法，将系统中的图书、图书馆和图书管理系统分别表示为类（Book、Library和BookManagementSystem），以便更好地组织和管理代码。
4. 消息框： 我们使用Tkinter库提供的消息框来显示成功、错误等提示信息给用户，以增强用户体验。

## 源码👇

![](http://cdn.qiniu.liyansheng.top/img/7fcabcdda28d93cf36b80d2ec63c0491.png)

<!-- <PaymentButton :productId="125" /> -->
