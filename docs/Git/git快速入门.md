---
permalink: /Git/1
---
# Git常用指令汇总

## Git是什么

<font color='orange'>分布式版本控制系统</font>

原理图：

![image-20231115144225416](http://cdn.qiniu.liyansheng.top/typora/image-20231115144225416.png)

## SVN与Git区别

- SVN：<font color='cornflowerblue'>集中式</font>版本控制系统，版本库集中在服务器，需要<font color='cornflowerblue'>联网</font>，在工作需要的时候先从中央服务器获取最新版本，做完操作在推送到中央服务器。

    示意图：

    ![image-20231115144243440](http://cdn.qiniu.liyansheng.top/typora/image-20231115144243440.png)

- Git：<font color='cornflowerblue'>分布式</font>版本控制系统，没有中央服务器，<font color='cornflowerblue'>每个人电脑都是完整的版本库</font>。在工作时将各自的修改<font color='cornflowerblue'>推送</font>给对方，就能互相看到对方的修改。

## 版本库创建

将当前目录变成版本库，使用指令<font color='orange'> git init </font>后，可以看到当前目录生成一个.git文件夹，这说明当前目录的所有文件将被git管理起来

## 常用指令

- <font color='orange'>git config --list</font> 查看全部配置信息
- <font color='orange'>git config  [配置信息名]</font>：显示具体配置信息，如我要查看是user.name，直接输入命令git config user.name即可
- <font color='orange'>git help [指令名]：</font>获取该命令的用法相关帮助

- <font color='orange'>git status</font>：查看当天版本库的状态，可以看到当前版本库变化情况，即版本库内的每个文件的修改，删除都能跟踪到
- <font color='orange'>git add [文件]</font>：将指定文件添加暂存区
- <font color='orange'>git commit -m [提交说明]</font>：将暂存区的文件提交到本地仓库
- <font color='orange'>git diff [文件]</font>：查看文件哪些地方修改了
- <font color='orange'>git log</font>：查看提交的历史记录日志
- <font color='orange'>git reset --hard HEAD^：</font>版本回退，符号"^"表示回到上一个版本，回到上上个版本，用命令HEAD^^,依次类推，回退几个版本就看“^"符号的数量，如果数量多，可以用简写HEAD~n代替，例如回退前50版本，则git reset --hard HEAD~50。<font color='cornflowerblue'>注意:</font>版本回退后，原先的修改就没有了
- <font color='orange'>git reflog</font>：查看版本号
- <font color='orange'>git reset --hard [版本号]：</font>回退到指定【版本号】的版本
- <font color='orange'>git chackout -- [文件名]</font>：丢弃文件工作区的修改
- <font color='orange'>git restore [文件]</font>：丢弃文件在工作区的修改
- <font color='orange'>git remote add origin [远程仓库地址]</font>：添加一个远程仓库地址
- <font color='orange'>git push -u origin  master</font>：将本地仓库分支master推送到源仓库去
- <font color='orange'>git clone  [远程仓库地址]：</font>克隆一个本地库
- <font color='orange'>git branch</font>：查看当前的分支
- <font color='orange'>git checkout -b [分支名]</font>：创建一个分支并切换到该分支
- <font color='orange'>git checkout [分支名]：</font>切换分支
- <font color='orange'>git branch [分支名]：</font>创建分支
- <font color='orange'>git merge [分支名]：</font>将分支和并到当前分支上
- <font color='orange'>git branch -d [分支名]</font>：删除分支
- <font color='orange'>git remote -v：</font>查看远程库的信息
- <font color='orange'>git checkout -b [分支] origin/[分支]：</font>创建远程origin的dev分支到本地来
- <font color='orange'>git pull：</font>把最新的提交抓取下来
- <font color='orange'>git fetch [远程仓库名]</font>：抓取最新的数据

------

未完待续，详细可以参考官方文档呢

