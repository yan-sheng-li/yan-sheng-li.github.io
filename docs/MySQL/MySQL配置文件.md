---
permalink: /mysql/1
---
# MySQL配置文件

> 在MySQL安装目录下的`my.ini`，参考配置如下：
```ini
[mysqld]
# 设置3306端口
port=3306
# 设置mysql的安装目录   ----------是你的文件路径-------------
basedir=D:\MySQL_Navicat\mysql-8.0.27-winx64
# 设置mysql数据库的数据的存放目录  ---------是你的文件路径data文件夹自行创建
# 设置 mysql数据库的数据的存放目录，MySQL 8+ 不需要以下配置，系统自己生成即可，否则有可能报错
#datadir=D:\Mysql\mysql\data
# 允许最大连接数
max_connections=200
# 允许连接失败的次数。
max_connect_errors=10
# 服务端使用的字符集默认为utf8mb4
character-set-server=utf8mb4
# 创建新表时将使用的默认存储引擎
default-storage-engine=INNODB
# 默认使用“mysql_native_password”插件认证
#mysql_native_password
default_authentication_plugin=mysql_native_password
[mysql]
# 设置mysql客户端默认字符集
default-character-set=utf8mb4
[client]
# 设置mysql客户端连接服务端时默认使用的端口
port=3306
default-character-set=utf8mb4
```