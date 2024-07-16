---
permalink: /springboot/5
---
# 打包的jar启动报错问题

使用 `jar -jar` 启动 Spring Boot 应用时，可以通过在命令行中添加 `--server.port` 参数来指定端口号

报错：

```
Caused by: java.lang.ExceptionInInitializerError: Exception java.lang.reflect.InaccessibleObjectException: Unable to make field private final java.lang.Class java.lang.invoke.SerializedLambda.capturingClass accessible: module java.base does not "opens java.lang.invoke" to unnamed module @71c7db30 [in thread "http-nio-8081-exec-1"]   
```

这个错误通常出现在 Java 9 及以上版本中的模块化环境下。`java.lang.reflect.InaccessibleObjectException` 表示在尝试访问私有字段时出现了访问限制的问题。

在 Java 9 中引入了模块系统，为了提高安全性和封装性，Java 核心模块的一些包（如 `java.lang` 包下的一些类）进行了限制，防止未经授权的模块直接访问它们的内部。

在你的情况下，出现 `InaccessibleObjectException` 可能是因为某个模块（可能是你的应用程序）试图访问了受限制的 `java.lang.invoke.SerializedLambda` 类的私有字段。

解决这个问题的一种方法是在启动 JVM 时添加参数来打开 `java.lang.invoke` 包的访问权限。可以尝试在启动命令中添加 `--add-opens` 参数来允许该访问权限：

```
bash
java --add-opens java.base/java.lang.invoke=ALL-UNNAMED -jar your-application.jar
```

这里 `your-application.jar` 是你的 Spring Boot 应用程序的名称。这个参数会将 `java.lang.invoke` 包中的内容开放给未命名的模块，允许访问其中的私有字段。请注意，这是一种权宜之计，有时可能会在特定环境中有效，但不是永久性的解决方案。
