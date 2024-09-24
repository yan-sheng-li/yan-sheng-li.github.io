---
permalink: /springboot/1
---
# 项目打jar包-docker部署
## 打包1
```xml
    <build>
        <plugins>
            <plugin>
                <groupId>org.springframework.boot</groupId>
                <artifactId>spring-boot-maven-plugin</artifactId>
                <version>2.3.0.RELEASE</version>
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
```
## 打包2
```xml
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
```

## dockerfile

```dockerfile
# 使用官方的 OpenJDK 作为基础镜像
FROM openjdk:latest

# 设置工作目录
WORKDIR /app

# 将本地的 JAR 文件复制到容器内
COPY ./target/your-application.jar /app/your-application.jar

# 指定容器启动时要执行的命令
CMD ["java", "-jar", "your-application.jar"]

```

## 一键启动部署



```shell
#!/bin/bash

echo "检查更新"
git pull
# 项目清理
mvn clean
echo "清理上次打包文件..."
echo "开始重新项目打包..."
mvn package
echo "项目打包完成！"

# 定义容器名称和镜像名称【都小写】
container_name="your-container-name"
image_name="your-image-name"

# 检查容器是否已经在运行
if docker ps -a --format '{{.Names}}' | grep -q "^${container_name}$"; then
    echo "Container $container_name already exists. Removing..."
    # 停止并删除现有的容器
    docker stop $container_name && docker rm $container_name
fi

# 检查镜像是否存在
if docker images --format '{{.Repository}}' | grep -q "^${image_name}$"; then
    echo "Image $image_name already exists. Removing..."
    # 删除现有的镜像
    docker rmi $image_name
fi

# 构建镜像
echo "Building image $image_name..."
docker build -t $image_name .

# 启动容器
echo "Starting container $container_name..."
docker run -d -p 8082:8080 --name $container_name $image_name

echo "Container $container_name started successfully."

```

## 番外：本地idea远程发布
:::danger
很慢，不推荐
:::
![image-20240319145438923](http://cdn.qiniu.liyansheng.top/typora/image-20240319145438923.png)