# 整合Docker


## 一、安装Docker

准备一台Linux，我这里用的是centos 7 mini 版，然后安装Docker

1. 安装Device Mapper：

  ```shell
    yum install -y yum-utils device-mapper-persistent-data lvm2
  ```

2. 配置Docker的yum源：

  ```shell
    yum-config-manager --add-repo http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo
  ```

3. 更新yum缓存

  ```shell
    yum makecache fast
  ```

4. 安装Docker-ce

  ```shell
    yum -y install docker-ce
  ```

5. 等待上述加载完，然后启动Docker

  ```shell
    systemctl start docker
  ```

6. 校验Docker是否安装成功

  ```shell
    docker -v
  ```

    如果能输出版本号等信息，说明Docker安装OK，如下：

  ```shell
    [root@localhost ~]# docker -v
    Docker version 20.10.22, build 3a2c30b
  ```

## 二、开启Docker的远程访问

1. 修改服务文件：`/lib/systemd/system/docker.service`

    新增一行：`ExecStart=/usr/bin/dockerd  -H tcp://0.0.0.0:2375  -H unix:///var/run/docker.sock`

    ![ ](http://cdn.qiniu.liyansheng.top/typora/image-20230116001447210.png)

    `ps`：注意间隔，别写错了（我这步就是因为-H跟前面的写一块了，结果报了一堆奇怪的问题，(⊙o⊙)…

2. 重新加载配置文件

  ```shell
    systemctl daemon-reload
  ```

3. 重启服务

  ```shell
    systemctl restart docker
  ```

4. 内部检验：curl http://127.0.0.1:2375/info

    ![](http://cdn.qiniu.liyansheng.top/typora/image-20230116002022460.png)

5. 外部访问（浏览器访问你Linux的IP+2375/info）

    ![](http://cdn.qiniu.liyansheng.top/typora/image-20230116002229312.png)

    能访问到如上信息，说明外部访问也是OK的

    `ps`：如果你访问不到，注意检查下2375端口是否开放，我这里安装了宝塔面板，可以方便在安全里添加开放端口的规则，当然你不装这个也行，用命令行也是可以操作的呢。

    ![](http://cdn.qiniu.liyansheng.top/typora/image-20230116002534553.png)

## 三、在IDEA整合Docker

1. 先安装个插件`Docker`（在插件市场里面可以找到）

    ![](http://cdn.qiniu.liyansheng.top/typora/image-20230116002756415.png)

2. 配置连接远程Docker信息

    信息填写完整，下方出现`connection successful`说明连接成功！

    ![](http://cdn.qiniu.liyansheng.top/typora/image-20230116003020509.png)

3. 启动service

    ![](http://cdn.qiniu.liyansheng.top/typora/image-20230116003253279.png)

4. 然后就能浏览远程Docker里面的信息了

    （里面我拉了一些其他的镜像，可忽略）

    ![](http://cdn.qiniu.liyansheng.top/typora/image-20230116003343708.png)

## 四、服务打镜像

1.创建一个简单的SpringBoot项目，结构如下：

![](http://cdn.qiniu.liyansheng.top/typora/image-20230116003633915.png)

2.pom.xml如下：

```xml
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>

    <groupId>org.lys</groupId>
    <artifactId>test-docker</artifactId>
    <version>1.0-SNAPSHOT</version>

    <parent>
        <artifactId>spring-boot-starter-parent</artifactId>
        <groupId>org.springframework.boot</groupId>
        <version>2.3.7.RELEASE</version>
        <relativePath/>
    </parent>

    <properties>
        <maven.compiler.source>1.8</maven.compiler.source>
        <maven.compiler.target>1.8</maven.compiler.target>
    </properties>

    <dependencies>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-web</artifactId>
        </dependency>
    </dependencies>
    <build>
            <plugins>
                <!-- 指定maven.compiler.plugin 配置版本，解决编译问题 -->
                <plugin>
                    <groupId>org.apache.maven.plugins</groupId>
                    <artifactId>maven-compiler-plugin</artifactId>
                    <version>3.6.1</version>
                    <configuration>
                        <source>1.8</source>
                        <target>1.8</target>
                    </configuration>
                </plugin>

                <plugin>
                    <groupId>org.springframework.boot</groupId>
                    <artifactId>spring-boot-maven-plugin</artifactId>
                    <configuration>
                        <!--项目的启动类-->
                        <mainClass>com.lys.DemoApplication</mainClass>
                        <layout>ZIP</layout>
                    </configuration>
                    <executions>
                        <execution>
                            <goals>
                                <goal>repackage</goal>
                            </goals>
                        </execution>
                    </executions>
                </plugin>
            </plugins>
    </build>
</project>
```

3.写一个简单的Controller，如下：

```java
package com.lys.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/test")
public class DemoController {
    @GetMapping
    public String getString() {
        return "test  123!!!";
    }
}
```

4.启动类

```java
package com.lys;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class DemoApplication {
    public static void main(String[] args) {
        SpringApplication.run(DemoApplication.class, args);
    }
}
```

5.启动项目，确保项目是正常启动

6.在项目的根目录下，编写Dockerfile，内容如下：

```dockerfile
#指定基础镜像，在其上进行定制
FROM williamyeh/java8:latest

#维护者信息
MAINTAINER liyansheng

#这里的 /tmp 目录就会在运行时自动挂载为匿名卷，任何向 /tmp 中写入的信息都不会记录进容器存储层
VOLUME /tmp

#复制上下文目录下的target/demo-1.0.0.jar 到容器里
COPY target/test-docker-1.0-SNAPSHOT.jar  docker-0.0.1.jar

#bash方式执行，使demo-1.0.0.jar可访问
#RUN新建立一层，在其上执行这些命令，执行结束后， commit 这一层的修改，构成新的镜像。
RUN bash -c "touch /docker-0.0.1.jar"

#声明运行时容器提供服务端口，这只是一个声明，在运行时并不会因为这个声明应用就会开启这个端口的服务
EXPOSE 8080

#指定容器启动程序及参数   <ENTRYPOINT> "<CMD>"
ENTRYPOINT ["java","-jar","docker-0.0.1.jar"]
```

7.将项目打jar包

![](http://cdn.qiniu.liyansheng.top/typora/image-20230116004108628.png)

如果打包成功，在项目下的target下我们能看到jar包

![](http://cdn.qiniu.liyansheng.top/typora/image-20230116004216546.png)

8.切换到Dockerfile文件，点击按钮打包镜像

![](http://cdn.qiniu.liyansheng.top/typora/image-20230116004354868.png)

在之前可以新增一些简单的配置

![](http://cdn.qiniu.liyansheng.top/typora/image-20230116004802417.png)

然后点击上图中的run按钮，进行镜像构建与容器启动

![](http://cdn.qiniu.liyansheng.top/typora/image-20230116004953308.png)

切换到Log面板，我们可以看到容器启动的日志

![](http://cdn.qiniu.liyansheng.top/typora/image-20230116005039825.png)

在Dashboard可以修改配置，比如我们新增端口映射：

![](http://cdn.qiniu.liyansheng.top/typora/image-20230116005209773.png)

这样我们在外部通过8080端口访问到容器内端口8080的服务

![](http://cdn.qiniu.liyansheng.top/typora/image-20230116005328517.png)

在控制面板，还提供了一些快捷按钮给我们操作：

![](http://cdn.qiniu.liyansheng.top/typora/image-20230116005531044.png)

比如进入容器：

![](http://cdn.qiniu.liyansheng.top/typora/image-20230116005547080.png)

## 五、总结

综上，在IDEA里面整合Docker确实为我们提供很大的便利，比起传统的打包上传-打镜像-启动容器，上面的方式要快速很多，更多细节大家可以进一步探索！！！

## 六、踩坑

1. ### 启动容器失败

    报错：

  ```shell
    (iptables failed: iptables --wait -t nat -A DOCKER -p tcp -d 0/0 --dport 80 -j DNAT --to-destination 172.17.0.2:80 ! -i docker0: iptables: No chain/target/match by that name.
     (exit status 1)).
  ```

  ![](http://cdn.qiniu.liyansheng.top/typora/image-20230114231224128.png)

2. ### IDEA打镜像报错

    ![](http://cdn.qiniu.liyansheng.top/typora/image-20230115220606008.png)

    ![](http://cdn.qiniu.liyansheng.top/typora/image-20230115220836929.png)

    上述问题我也看了很多网上的解决方案，但是我没有得到解决，最后我是卸载然后重装了Docker然后才没有报上面的错误


