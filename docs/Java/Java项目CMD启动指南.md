# Java项目CMD启动指南

## 一、Maven 项目

如果你的项目是基于 Maven 构建的，首先需要在 `pom.xml` 中添加打包插件，示例如下：

```xml
<repositories>
    <repository>
        <id>public</id>
        <name>aliyun nexus</name>
        <url>https://maven.aliyun.com/repository/public</url>
        <releases>
            <enabled>true</enabled>
        </releases>
    </repository>
</repositories>

<pluginRepositories>
    <pluginRepository>
        <id>public</id>
        <name>aliyun nexus</name>
        <url>https://maven.aliyun.com/repository/public</url>
        <releases>
            <enabled>true</enabled>
        </releases>
        <snapshots>
            <enabled>false</enabled>
        </snapshots>
    </pluginRepository>
</pluginRepositories>

<build>
    <plugins>
        <plugin>
            <groupId>org.apache.maven.plugins</groupId>
            <artifactId>maven-assembly-plugin</artifactId>
            <version>3.3.0</version>
            <configuration>
                <descriptorRefs>
                    <descriptorRef>jar-with-dependencies</descriptorRef>
                </descriptorRefs>
                <archive>
                    <manifest>
                        <!-- 请将此处替换为你的主类全名 -->
                        <mainClass>xxxxx.MainClass</mainClass>
                    </manifest>
                </archive>
            </configuration>
            <executions>
                <execution>
                    <id>make-assembly</id>
                    <phase>package</phase>
                    <goals>
                        <goal>single</goal>
                    </goals>
                </execution>
            </executions>
        </plugin>
    </plugins>
</build>
```

### 打包并运行

依次执行以下命令：

```bash
mvn clean
mvn package
java -jar target/xxx-jar-with-dependencies.jar
```

其中 `xxx-jar-with-dependencies.jar` 会根据你的项目名而定。

---

## 二、非 Maven 项目

若你的项目不是使用 Maven 管理的，可通过编写批处理脚本实现编译与运行。

### 1. 创建启动脚本

在项目根目录下新建一个文件 `run.bat`，**右键 → 编辑**，粘贴以下内容：

```bat
@echo off
setlocal enabledelayedexpansion

:: 设置 classpath（分号分隔多个 JAR 包）
set CP=lib\mysql-connector-java-8.0.17.jar;lib\xchart-3.8.0.jar

:: 创建 bin 目录（用于存放编译后的 .class 文件）
if not exist bin (
    mkdir bin
)

:: 删除旧的 sources.txt
if exist sources.txt (
    del /f /q sources.txt
)

:: 收集 src 目录下的所有 Java 文件
for /R src %%f in (*.java) do (
    echo %%f >> sources.txt
)

:: 编译所有 Java 源文件
echo 正在编译...
javac -encoding UTF-8 -cp "%CP%" -d bin @sources.txt
if %errorlevel% neq 0 (
    echo 编译失败！
    pause
    exit /b
)

:: 启动主类（请根据实际情况修改主类名）
echo 正在启动程序...
java -cp bin;%CP% views.MainClass

pause
```

### 2. 修改主类路径

请根据你的项目主类名修改这一行：

```bat
java -cp bin;%CP% views.MainClass
```

例如，如果主类是 `views.admin.IndexWin`，则应改为：

```bat
java -cp bin;%CP% views.admin.IndexWin
```

---

## 三、使用方式

完成上述配置后，运行方式非常简单：

* **方法一：** 双击 `run.bat` 运行；
* **方法二：** 在命令行中进入项目根目录，运行：

```cmd
D:\code\xxxsystem-v2> run.bat
```

