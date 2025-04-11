

# Spring Boot 整合 WebSocket 教程笔记

> WebSocket 是一种在客户端和服务端之间建立持久连接的通信协议，非常适合实时聊天、在线通知等应用场景。下面我们将通过一个简单的 Demo 来介绍如何在 Spring Boot 中集成 WebSocket。

------

## 🧱 一、添加依赖

在 `pom.xml` 中添加 WebSocket 的 starter：

```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-websocket</artifactId>
</dependency>
```

------

## ⚙️ 二、配置 WebSocket

新建一个配置类 `WebSocketConfig.java`：

```java
package com.base.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.messaging.simp.config.MessageBrokerRegistry;
import org.springframework.web.socket.config.annotation.EnableWebSocketMessageBroker;
import org.springframework.web.socket.config.annotation.StompEndpointRegistry;
import org.springframework.web.socket.config.annotation.WebSocketMessageBrokerConfigurer;

@Configuration
@EnableWebSocketMessageBroker // 启用 WebSocket 消息代理
public class WebSocketConfig implements WebSocketMessageBrokerConfigurer {

    @Override
    public void configureMessageBroker(MessageBrokerRegistry config) {
        // 配置消息代理
        config.enableSimpleBroker("/topic"); // 用于订阅消息的前缀
        config.setApplicationDestinationPrefixes("/app"); // 客户端发送消息的前缀
    }

    @Override
    public void registerStompEndpoints(StompEndpointRegistry registry) {
        // 注册 STOMP 端点，开启 SockJS 支持
        registry.addEndpoint("/ws").setAllowedOrigins("*").withSockJS();
    }
}
```

**说明：**

- `/ws`：WebSocket 的连接端点
- `/topic`：广播路径（类似聊天室）
- `/app`：客户端发送消息时使用的路径前缀

------

## 🧑‍💻 三、创建 Controller 接收消息

创建 `WebSocketController.java` 处理前端发送的消息并返回：

```java
package com.base.controller;

import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;

@Controller
public class WebSocketController {

    @MessageMapping("/sendMessage") // 前端发送到 /app/sendMessage
    @SendTo("/topic/messages") // 广播到 /topic/messages
    public String handleMessage(String message) {
        System.out.println("Received message: " + message);
        return "Echo: " + message;
    }
}
```

------

## 🌐 四、前端页面（HTML+JS）

创建一个简单的 HTML 页面，用于测试 WebSocket 连接：

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>WebSocket 测试</title>
    <script src="https://cdn.jsdelivr.net/npm/sockjs-client@1/dist/sockjs.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/stomp.js/2.3.3/stomp.min.js"></script>
</head>
<body>
    <div>
        <button onclick="connect()">连接 WebSocket</button>
        <button onclick="disconnect()">断开连接</button>
    </div>
    <div>
        <input type="text" id="messageInput" placeholder="输入消息">
        <button onclick="sendMessage()">发送消息</button>
    </div>
    <div id="messages"></div>

    <script>
        var stompClient = null;

        function connect() {
            var socket = new SockJS('/ws');
            stompClient = Stomp.over(socket);
            stompClient.connect({}, function(frame) {
                console.log('Connected: ' + frame);
                stompClient.subscribe('/topic/messages', function(response) {
                    showMessage('收到消息: ' + response.body);
                });
            });
        }

        function disconnect() {
            if (stompClient !== null) {
                stompClient.disconnect();
            }
            console.log("已断开连接");
        }

        function sendMessage() {
            var message = document.getElementById('messageInput').value;
            stompClient.send("/app/sendMessage", {}, message);
        }

        function showMessage(message) {
            var messageDiv = document.getElementById('messages');
            var p = document.createElement('p');
            p.textContent = message;
            messageDiv.appendChild(p);
        }
    </script>
</body>
</html>
```

------

## 📝 五、测试效果

1. 启动 Spring Boot 项目。
2. 打开 HTML 页面。
3. 点击 “连接 WebSocket”。
4. 输入消息，点击 “发送消息”。
5. 页面会显示 “收到消息: Echo: xxx”。

![](http://cdn.qiniu.liyansheng.top/img/20250411114254.png)

------

## 📌 总结

以上就是 Spring Boot 集成 WebSocket 的基本流程，适合用于：

- 实时聊天
- 实时通知推送
- 实时监控面板

**关键点回顾：**

- 使用 `@EnableWebSocketMessageBroker` 开启 WebSocket 支持
- 通过 STOMP 协议进行消息通信
- 利用 SockJS 提供浏览器兼容性支持