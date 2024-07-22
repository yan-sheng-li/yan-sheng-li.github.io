# 初学shell常用操作

## 1.格式化输出时间

```shell
[root]# echo `date +%Y%m%d-%H:%M:%S`
20221027-10:30:56
```

应用：记录日志，程序执行时间等等

举例：将程序的执行信息输出到指定的文件中

```shell
#!/bin/bash
log_file=logs/clear-dup-data-`date +%Y%m%d-%H:%M:%S`.log
echo  start_time-`date +%Y%m%d-%H:%M:%S` &>> $log_file
/bin/python3 /clean_dup_data/main.py &>> $log_file
echo  end_time-`date +%Y%m%d-%H:%M:%S` &>> $log_file
```

## 2.命令行操作文本

对每行匹配到的每一个字符串进行替换

```shell
sed -i 's/原字符串/新字符串/' ab.txt  （"/"也可以换成"#"）
```

应用：直接搜索修改指定文件的位置，这样你就不用再cd 目录，然后vi 文件，等等这么麻烦了，在脚本中使用特别快捷

举例：使用命令行的形式去修改selinux配置

```shell
sed -i 's/SELINUX=enforcing/SELINUX=disabled/' /etc/selinux/config
```

指定分割点：

```shell
[root@VM-16-12-centos ~]# hostname -I | awk '{print $1}'
10.0.16.12
[root@VM-16-12-centos ~]# hostname -I | awk '{print $1}' | awk -F . '{print $1}'
10
```



## 3.读取键盘输入

用到`read`来获取用户的输入 

应用：脚本为了提高与用户的交互，有时候我们希望在脚本运行期间，读取用户的输入，如让用户输入账号，密码等。  

参数说明：

- -p 提示信息
- -t 等待输入秒数
- -n 接受指定的字符数便执行
- -s 隐藏输入的字符

举例：

```shell
[root@VM-16-12-centos demo4]# read -p 'enter your name:' name ; echo $name
enter your name:liming
liming
```

## 4.开发指定端口

![image-20221028104222903](http://cdn.qiniu.liyansheng.top/typora/image-20221028104222903.png)

5.查看已开发端口

netstat -ntpl

```shell
[root@liyansheng bin]# netstat -ntpl
Active Internet connections (only servers)
Proto Recv-Q Send-Q Local Address           Foreign Address         State       PID/Program name    
tcp        0      0 0.0.0.0:6379            0.0.0.0:*               LISTEN      11780/redis-server  
tcp        0      0 0.0.0.0:22              0.0.0.0:*               LISTEN      9603/sshd           
tcp        0      0 127.0.0.1:25            0.0.0.0:*               LISTEN      9901/master         
tcp6       0      0 :::3306                 :::*                    LISTEN      11707/docker-proxy  
tcp6       0      0 :::6379                 :::*                    LISTEN      11780/redis-server  
tcp6       0      0 :::8080                 :::*                    LISTEN      11871/docker-proxy  
tcp6       0      0 :::2389                 :::*                    LISTEN      11822/docker-proxy  
tcp6       0      0 :::22                   :::*                    LISTEN      9603/sshd           
tcp6       0      0 ::1:25                  :::*                    LISTEN      9901/master         
tcp6       0      0 :::42493                :::*                    LISTEN      28129/java          
tcp6       0      0 :::2181                 :::*                    LISTEN      28129/java 
```

开发端口：

firewall-cmd --zone=public --add-port=9200/tcp --permanent

查看端口：

firewall-cmd --list-ports

## 5.命令行的特殊符号

- `>` ：输出重定向，将输出写入指定的文件（如果文件存在，则覆盖；否则创建文件）
- `>>`：输出重定向，在指定的文件里面**追加**输出的内容
- `<`：输入重定向，后跟的文件取代键盘作为新的输入设备
- `|`：管道，将上一条的命令作为下一条命令的输入参数
- `||`：上一条命令执行失败后，就执行下一条
- `&`：将任务放到后台执行
- `&&`：上一条命令执行成功后，继续执行下一条，否则不往下
- `0`：stdin 标准输入
- `1`：stdout标准正确输出
- `2`：stderr标准错误输出
- `2>$1`：标准错误重新定向到标准输出
- `1>$2`：标准输出重定向到标准错误
- `/dev/null`：空设备文件（无底洞）

## 6.虚拟机配置静态IP

背景：主要解决每次虚拟机开机后，IP就变换了，不利于finalshell连接，每次都得修改IP麻烦。

查看VM的网络配置。

首先VM=》编辑 =》 虚拟网络编辑器

![image-20221030165854873](http://cdn.qiniu.liyansheng.top/typora/image-20221030165854873.png)

选择NAT类型这行，然后打开设置

![image-20221030165930597](http://cdn.qiniu.liyansheng.top/typora/image-20221030165930597.png)

根据下图修改网卡配置文件

![image-20221030165950728](http://cdn.qiniu.liyansheng.top/typora/image-20221030165950728.png)

修改网卡配置：`vi /etc/sysconfig/network-scripts/ifcfg-ens33 `

```shell
TYPE="Ethernet"
PROXY_METHOD="none"
BROWSER_ONLY="no" 
BOOTPROTO=static  #这个配置修改为"static"
DEFROUTE="yes"
IPV4_FAILURE_FATAL="no"
IPV6INIT="yes"
IPV6_AUTOCONF="yes"
IPV6_DEFROUTE="yes"
IPV6_FAILURE_FATAL="no"
IPV6_ADDR_GEN_MODE="stable-privacy"
NAME="ens33"
UUID="38fab940-4871-41f9-b1e1-3f123c3bc217"
DEVICE="ens33"
ONBOOT="yes" #修改为"yes",代表每次开机后开启
IPADDR=192.168.220.137 #你要设置的IP
NETMASK=255.255.255.0 #子网掩码
GATEWAY=182.168.220.2 #网关
DNS1=8.8.8.8 #域名解析器地址
```

保存，重启网卡：`systemctl restart network`

再次查看IP地址：`ip addr`，可见ip修改成静态的OK了。

7.添加自启动服务

```shell
[root@zookeeper init.d]# vim zookeeper 

#!/bin/bash
#chkconfig:2345 20 90
#description:zookeeper
#processname:zookeeper
export JAVA_HOME=/opt/aspire/product/mirror/java/jdk1.8.0_131
case $1 in
        start) su root /opt/aspire/product/mirror/zookeeper/zookeeper-3.4.10/bin/zkServer.sh start;;
        stop) su root /opt/aspire/product/mirror/zookeeper/zookeeper-3.4.10/bin/zkServer.sh stop;;
        status) su root /opt/aspire/product/mirror/zookeeper/zookeeper-3.4.10/bin/zkServer.sh status;;
        restart) su /opt/aspire/product/mirror/zookeeper/zookeeper-3.4.10/bin/zkServer.sh restart;;
        *) echo "require start|stop|status|restart" ;;
esac
```

## 7.添加开机启动服务

> 方式1：将应用做成服务，以“开机启动zookeeper”为例

1. 在`/etc/rc.d/init.d/`目录下，创建zookeeper服务文件

   ```shell
   [root@liyansheng ~]# cd /etc/rc.d/init.d/
   [root@liyansheng init.d]# ls
   functions  netconsole  network  README  zookeeper
   ```

2. 将服务文件设置为可执行文件

   ```shell
   [root@liyansheng init.d]# chmod +x zookeeper
   ```

3. 编辑服务文件

   ```shell
   #!/bin/bash
   #chkconfig:2345 20 90
   #description:zookeeper
   #processname:zookeeper
   export JAVA_HOME=/opt/aspire/product/mirror/java/jdk1.8.0_131
   case $1 in
           start) su root /opt/aspire/product/mirror/zookeeper/zookeeper-3.4.10/bin/zkServer.sh start;;
           stop) su root /opt/aspire/product/mirror/zookeeper/zookeeper-3.4.10/bin/zkServer.sh stop;;
           status) su root /opt/aspire/product/mirror/zookeeper/zookeeper-3.4.10/bin/zkServer.sh status;;
           restart) su /opt/aspire/product/mirror/zookeeper/zookeeper-3.4.10/bin/zkServer.sh restart;;
           *) echo "require start|stop|status|restart" ;;
   esac
   
   ```

4. 测试启动

   ```shell
   [root@liyansheng init.d]# service zookeeper start
   ```

   ok的

5. 添加到开机启动

   ```shell
   [root@liyansheng init.d]# chkconfig --add zookeeper 
   ```

6. 查看开机启动列表

   ```shell
   [root@liyansheng init.d]# chkconfig --list
   netconsole      0:关    1:关    2:关    3:关    4:关    5:关    6:关
   network         0:关    1:关    2:开    3:开    4:开    5:开    6:关
   zookeeper       0:关    1:关    2:开    3:开    4:开    5:开    6:关
   ```

   > 方式2：直接修改**/etc/rc.d/rc.local文件**

   ```shell
   [root@liyansheng init.d]# vim /etc/rc.d/rc.local 
   
   #!/bin/sh
   #
   # This script will be executed *after* all the other init scripts.
   # You can put your own initialization stuff in here if you don't
   # want to do the full Sys V style init stuff.
   
   touch /var/lock/subsys/local
   export JAVA_HOME=/usr/java/jdk1.8.0_112
   /usr/local/zookeeper-3.4.5/bin/zkServer.sh start
   ```

   保存，重启即生效。

## 8.systemctl 添加开机启动

1. 进入目录`/lib/systemd/system`

2. 编辑服务文件`xxx.service`

3. 保存，执行`systemctl daemon-reload`，使新增的服务生效

4. 设置开机启动`systemctl enable xxx.service`

5. 查看服务状态`systemctl status xxx.service`

   ```shell
   [Unit]
   Description=xxx
   After=network.target
   
   [Service]
   Type=simple
   PIDFile=
   ExecStart=/home/gopath/bin/xxx
   ExecReload=/home/gopath/bin/xxx
   ExecStop=/home/gopath/bin/xxx
   RemainAfterExit=yes
   Restart=no
   PrivateTmp=true
   Restart=always
   RestartSec=1
   User=root
   [Install]
   WantedBy=multi-user.target
   ```

## 9.超简洁获取IP地址

```shell
hostname -I |awk '{print $1}'
```



## 10.便捷快速文件传输-scp

语法如下：

```shell
usage: scp [-346BCpqrTv] [-c cipher] [-F ssh_config] [-i identity_file]
            [-J destination] [-l limit] [-o ssh_option] [-P port]
            [-S program] source ... target
```

- 本机 =》 远程

  ```shell
  scp local_file remote_username@remote_ip:remote_folder 
  或者 
  scp local_file remote_username@remote_ip:remote_file 
  ```

- 远程 =》 本机

  ```shell
  scp  remote_username@remote_ip:remote_folder local_file
  或者 
  scp  remote_username@remote_ip:remote_file local_file
  ```

注意：
1.当远程服务器防火墙有特殊限制时，scp要走特殊端口(#scp 命令使用端口号 4588)
2.注意所使用的用户是否具有可读取远程服务器相应文件的权限

## 11. set  e 用法

- set -e 之后出现的代码，一但出现返回值非零（脚本出错），整个脚本立即退出。
- set +e 则 即使基本有报错，但是仍继续执行下面的脚本。

## 12.-z str

如果str长度为零为真

![image-20221116122413712](http://cdn.qiniu.liyansheng.top/typora/image-20221116122413712.png)

## 13.shift用法

当传入多个参数时，shift前$1可用，shift后原来的$1不可用，原来的$2变成$1，$#获取参数个数会相应-1

## 14.source用法

- 刷新当前环境
- source 执行shell脚本
- 从脚本中导入shell函数
- 从另一个脚本读取变量

## 15.command -v 参数 
判断一个命令是否支持

## 16.自动化配置

```shell
[root@liyansheng target-config]# cat application-prod.yml | grep brokers | awk '{print $2}'
10.12.7.116:9092

[root@liyansheng target-config]# cat application-prod.yml | grep zk-nodes | awk '{print $2}'
10.12.7.116:2181

[root@liyansheng target-config]# cat application-prod.yml | grep preferred-networks | awk '{print $2}'
10.12.7

[root@liyansheng target-config]# cat application-prod.yml | grep defaultZone | awk '{print $2}'| awk '{print $1}'
http://10.12.7.115:8761/eureka/

```

