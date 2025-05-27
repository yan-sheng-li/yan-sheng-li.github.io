# Spring Boot整合JWT实现认证与授权

## 概述

JSON Web Token (JWT) 是一种开放标准 (RFC 7519)，它定义了一种紧凑且自包含的方式，用于在各方之间安全地传输信息。在Web应用中，JWT常用于身份验证和信息交换。

## 依赖配置

首先需要在项目中添加JWT依赖：

```xml
<!-- JWT依赖 -->
<dependency>
    <groupId>io.jsonwebtoken</groupId>
    <artifactId>jjwt</artifactId>
    <version>0.9.1</version>
</dependency>
```

## JWT工具类封装

我们创建一个`JwtUtil`工具类来封装JWT的生成、解析和验证逻辑：

```java
package com.bookstore.utils;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.stereotype.Component;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;

@Component
public class JwtUtil {
    private static final String SECRET_KEY = "bookstore_secret_key";
    private static final long EXPIRATION_TIME = 24 * 60 * 60 * 1000; // 24小时

    // 生成JWT令牌
    public String generateToken(Integer userId, String role) {
        Map<String, Object> claims = new HashMap<>();
        claims.put("userId", userId);
        claims.put("role", role);
        
        return Jwts.builder()
                .setClaims(claims)
                .setIssuedAt(new Date())
                .setExpiration(new Date(System.currentTimeMillis() + EXPIRATION_TIME))
                .signWith(SignatureAlgorithm.HS256, SECRET_KEY)
                .compact();
    }

    // 解析JWT令牌
    public Claims parseToken(String token) {
        return Jwts.parser()
                .setSigningKey(SECRET_KEY)
                .parseClaimsJws(token)
                .getBody();
    }

    // 验证JWT令牌
    public boolean validateToken(String token) {
        try {
            Jwts.parser().setSigningKey(SECRET_KEY).parseClaimsJws(token);
            return true;
        } catch (Exception e) {
            return false;
        }
    }
}
```

## JWT拦截器实现

创建拦截器来验证请求中的JWT令牌：

```java
package com.bookstore.config;

import com.bookstore.utils.JwtUtil;
import io.jsonwebtoken.Claims;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.HandlerInterceptor;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@Component
public class JwtInterceptor implements HandlerInterceptor {

    @Autowired
    private JwtUtil jwtUtil;

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) {
        // 放行OPTIONS请求
        if ("OPTIONS".equals(request.getMethod())) {
            return true;
        }

        // 从请求头获取token
        String token = request.getHeader("Authorization");
        if (token != null && token.startsWith("Bearer ")) {
            token = token.substring(7);
            if (jwtUtil.validateToken(token)) {
                Claims claims = jwtUtil.parseToken(token);
                // 将用户信息存入request属性中
                request.setAttribute("userId", claims.get("userId"));
                request.setAttribute("role", claims.get("role"));
                return true;
            }
        }
        
        response.setStatus(401);
        return false;
    }
}
```

## MVC配置

配置拦截器并设置拦截路径：

```java
package com.bookstore.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {

    @Autowired
    private JwtInterceptor jwtInterceptor;

    @Override
    public void addInterceptors(InterceptorRegistry registry) {
        registry.addInterceptor(jwtInterceptor)
                .addPathPatterns("/**")  // 拦截所有路径
                .excludePathPatterns(    // 排除路径
                        "/login",
                        "/register",
                        "/swagger-resources/**",
                        "/webjars/**",
                        "/v3/api-docs/**",
                        "/swagger-ui.html/**",
                        "/error",
                        "/favicon.ico",
                        "doc.html",
                        "/logout",
                        "/static/**",
                        "/carousel/list",
                        "/book/new",
                        "/v2/api-docs"
                );
    }
}
```

## 使用示例

### 登录时生成令牌

在登录成功后生成JWT令牌并返回给客户端：

```java
String token = jwtUtil.generateToken(foundUser.getId(), foundUser.getRole());
```

### 基础控制器

创建基础控制器方便获取已认证的用户信息：

```java
import javax.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;

public class BaseController {
    @Autowired
    protected HttpServletRequest request;
    
    // 获取当前用户ID
    protected Integer getCurrentUserId() {
        return (Integer) request.getAttribute("userId");
    }
    
    // 获取当前用户角色
    protected String getCurrentUserRole() {
        return (String) request.getAttribute("role");
    }

    // 检查是否是管理员
    protected boolean isAdmin() {
        return "admin".equals(getCurrentUserRole());
    }

    // 检查是否是普通用户
    protected boolean isUser() {
        return "user".equals(getCurrentUserRole());
    }
}
```

其他控制器可以继承`BaseController`来方便地获取用户信息：

```java
@RestController
@RequestMapping("/api/books")
public class BookController extends BaseController {
    
    @GetMapping("/{id}")
    public ResponseEntity<Book> getBook(@PathVariable Integer id) {
        if (isAdmin()) {
            // 管理员特有逻辑
        }
        // 其他逻辑...
    }
}
```

## 总结

1. **JWT工具类**：封装了令牌的生成、解析和验证逻辑
2. **拦截器**：自动验证请求中的JWT令牌并提取用户信息
3. **MVC配置**：灵活配置需要拦截和放行的路径
4. **基础控制器**：提供便捷的方法获取当前用户信息

这种实现方式具有以下优点：
- 无状态认证，服务端不需要存储会话信息
- 跨域支持良好
- 可以方便地携带用户信息
- 适合分布式系统

在实际项目中，可以根据需求调整令牌的有效期、密钥的存储方式（如从配置中心获取）以及更精细的权限控制逻辑。