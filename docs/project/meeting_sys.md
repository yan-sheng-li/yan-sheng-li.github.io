
# 🏢会议预约管理系统*

<MyGlobalComponent />


## 开发环境

- 开发工具：Eclipse2021
- 数据库：MySQL 8.0+
- 编程语言：Java（jdk 12）
- 编码格式：UTF-8
- 辅助工具：Navicat数据库可视化

## 功能

![](http://cdn.qiniu.liyansheng.top/typora/image-20220701123054356.png)

## 实现效果

1. 登录验证。首先用户输入账号和密码，并选择所属身份。如果身份验证通过，则可以进入系统，否则不能进入系统，并有错误反馈。

    1. 验证失败示例：

        ![](http://cdn.qiniu.liyansheng.top/typora/image-20220701123729647.png)

    2. 验证通过示例：

        ![](http://cdn.qiniu.liyansheng.top/typora/image-20220701123749317.png)

2. 用户个人信息。用户可以在版面查看自己的基本信息，点击修改按钮，文本框切换到可编辑状态，此时可以修改个人基本信息，然后点保存即可更新完毕。

    ![](http://cdn.qiniu.liyansheng.top/typora/image-20220701123820983.png)

3. 会议室查询。可以一览全部可用会议室，也可以通过会议室名称搜索相应的会议室信息。

    ![](http://cdn.qiniu.liyansheng.top/typora/image-20220701123848854.png)

4. 会议预约。输入会议室的ID，然后点击“我要预约”按钮，如果操作成功，即可在我的预约记录里面新增一条。

    ![](http://cdn.qiniu.liyansheng.top/typora/image-20220701123918560.png)

5. 取消预约。通过输入已经预约的会议的ID，可取消预约。

    ![](http://cdn.qiniu.liyansheng.top/typora/image-20220701123948492.png)

6. 管理员数据统计。在此面板，可以看到系统的一些数据统计，如总用户数，可用会议数量，预约数量等。

    ![](http://cdn.qiniu.liyansheng.top/typora/image-20220701124015061.png)

7. 审核预约。在此模块管理员可以看到已审核的预约申请记录，也可以对待审核的申请进行“通过”与“未通过”标记。

    ![](http://cdn.qiniu.liyansheng.top/typora/image-20220701124043895.png)

    ![](http://cdn.qiniu.liyansheng.top/typora/image-20220701124055136.png)
    

## 源码👇
<gzh />

![](http://cdn.qiniu.liyansheng.top/img/20240526172108.png) 

## 配套报告

::: warning
![](http://cdn.qiniu.liyansheng.top/img/报告123123123预览图.png)
<!-- ![](http://cdn.qiniu.liyansheng.top/img/20240909211104.png) -->
:::
<PaymentButton :productId="146" :buttonText="'点我获取-报告'"/>