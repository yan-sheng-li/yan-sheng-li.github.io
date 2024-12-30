# ping不通与请求超时

## 问题

> 好端端地突然无法ping通github.com，舍情况？？？


![](http://cdn.qiniu.liyansheng.top/img/20241231003308.png)

![](http://cdn.qiniu.liyansheng.top/img/20241231003318.png)


## 解决

1. 用`管理员`身份打开`记事本`，然后打开文件`C:\Windows\System32\drivers\etc\hosts`
2. 在文件末尾加上`140.82.114.4 github.com`
3. 保存，电脑重启即可恢复正常