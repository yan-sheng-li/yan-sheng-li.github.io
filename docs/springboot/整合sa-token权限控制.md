# 整合sa-token权限控制

## 文档
[https://sa-token.cc/doc.html](https://sa-token.cc/doc.html)

## 依赖

```xml
<!-- Sa-Token 权限认证，在线文档：https://sa-token.cc -->
<dependency>
    <groupId>cn.dev33</groupId>
    <artifactId>sa-token-spring-boot-starter</artifactId>
    <version>1.37.0</version>
</dependency>

<!-- 在 thymeleaf 标签中使用 Sa-Token -->
<dependency>
    <groupId>cn.dev33</groupId>
    <artifactId>sa-token-dialect-thymeleaf</artifactId>
    <version>1.37.0</version>
</dependency>
```

一般用户-角色-权限：

## 数据库

```sql
/*
 Navicat MySQL Data Transfer

 Source Server         : 1761
 Source Server Type    : MySQL
 Source Server Version : 80017
 Source Host           : localhost:3306
 Source Schema         : shiro1212

 Target Server Type    : MySQL
 Target Server Version : 80017
 File Encoding         : 65001

 Date: 13/12/2023 15:20:25
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for permission
-- ----------------------------
DROP TABLE IF EXISTS `permission`;
CREATE TABLE `permission`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `permission` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '权限名称',
  `desc` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '权限描述',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 5 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of permission
-- ----------------------------
INSERT INTO `permission` VALUES (1, 'add', '增加');
INSERT INTO `permission` VALUES (2, 'update', '更新');
INSERT INTO `permission` VALUES (3, 'select', '查看');
INSERT INTO `permission` VALUES (4, 'delete', '删除');

-- ----------------------------
-- Table structure for role
-- ----------------------------
DROP TABLE IF EXISTS `role`;
CREATE TABLE `role`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `role` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `desc` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 4 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of role
-- ----------------------------
INSERT INTO `role` VALUES (1, 'admin', '超级管理员');
INSERT INTO `role` VALUES (2, 'user', '普通用户');
INSERT INTO `role` VALUES (3, 'vip', 'VIP用户');

-- ----------------------------
-- Table structure for role_permission
-- ----------------------------
DROP TABLE IF EXISTS `role_permission`;
CREATE TABLE `role_permission`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `role_id` int(11) NULL DEFAULT NULL,
  `permission_id` int(255) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 9 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = FIXED;

-- ----------------------------
-- Records of role_permission
-- ----------------------------
INSERT INTO `role_permission` VALUES (1, 1, 1);
INSERT INTO `role_permission` VALUES (2, 1, 2);
INSERT INTO `role_permission` VALUES (3, 1, 3);
INSERT INTO `role_permission` VALUES (4, 1, 4);
INSERT INTO `role_permission` VALUES (5, 2, 3);
INSERT INTO `role_permission` VALUES (6, 3, 3);
INSERT INTO `role_permission` VALUES (7, 3, 2);
INSERT INTO `role_permission` VALUES (8, 2, 1);

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user`  (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `password` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `username` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `account` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 4 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES (1, 'root', '超级用户', 'root');
INSERT INTO `user` VALUES (2, 'user', '普通用户', 'user');
INSERT INTO `user` VALUES (3, 'vip', 'VIP用户', 'vip');

-- ----------------------------
-- Table structure for user_role
-- ----------------------------
DROP TABLE IF EXISTS `user_role`;
CREATE TABLE `user_role`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NULL DEFAULT NULL,
  `role_id` int(11) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 4 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = FIXED;

-- ----------------------------
-- Records of user_role
-- ----------------------------
INSERT INTO `user_role` VALUES (1, 1, 1);
INSERT INTO `user_role` VALUES (2, 2, 2);
INSERT INTO `user_role` VALUES (3, 3, 3);

SET FOREIGN_KEY_CHECKS = 1;

```

模板空间名：

```html
<!DOCTYPE html>
<html lang="zh" xmlns:sa="http://www.thymeleaf.org/extras/sa-token">
    <head>
        <!-- 代码 -->
    </head>
    <body>
        <!-- 代码 -->
    </body>
</html>
```

根据用户id查询：用户角色：

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE mapper PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN" "http://mybatis.org/dtd/mybatis-3-mapper.dtd">
<mapper namespace="com.lys.sims.mapper.RoleMapper">
    <select id="findRoleByUserId" parameterType="Integer" resultType="Role">
        SELECT
        role.id,
        role
        FROM
        role,
        USER,
        user_role ur
        WHERE
        role.id = ur.role_id
        AND ur.user_id = `user`.id
        AND USER.id =#{userId}
    </select>
</mapper>
```

根据角色列表查询：权限列表

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE mapper PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN" "http://mybatis.org/dtd/mybatis-3-mapper.dtd">
<mapper namespace="com.lys.sims.mapper.PermissionMapper">
    <sql id="base_column_list">
        id,permission,desc
    </sql>

    <select id="findByRoleId" parameterType="List" resultType="String">
        SELECT
        permission
        FROM
        permission,
        role_permission rp
        WHERE
        rp.permission_id = permission.id
        AND rp.role_id IN
        <foreach collection="roleIds" item="id" open="(" close=")" separator=",">
            #{id}
        </foreach>
    </select>
</mapper>
```

## SA-token配置

自定义角色-权限注入类：

```java
package com.lys.sims.config;

import cn.dev33.satoken.stp.StpInterface;
import com.lys.sims.entity.Role;
import com.lys.sims.service.IPermissionService;
import com.lys.sims.service.IRoleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
public class StpInterfaceImpl implements StpInterface {

    @Autowired
    private IRoleService roleService;

    @Autowired
    private IPermissionService permissionService;

    // 配置权限
    @Override
    public List<String> getPermissionList(Object o, String s) {
        ArrayList<Integer> roleIds = new ArrayList<>();
        List<Role> roleList = roleService.findRoleByUserId(Integer.parseInt((String) o));
        for (Role role : roleList) {
            roleIds.add(role.getId());
        }
        List<String> permissionList = permissionService.findByRoleId(roleIds);
        return permissionList;
    }

    //配置角色
    @Override
    public List<String> getRoleList(Object o, String s) {
        ArrayList<String> arrayList = new ArrayList<>();
        List<Role> roleList = roleService.findRoleByUserId(Integer.parseInt((String) o));
        for (Role role : roleList) {
            arrayList.add(role.getRole());
        }
        return arrayList;
    }
}
```

开启注解-全局变量：

```java
package com.lys.sims.config;

import cn.dev33.satoken.interceptor.SaInterceptor;
import cn.dev33.satoken.stp.StpUtil;
import cn.dev33.satoken.thymeleaf.dialect.SaTokenDialect;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.thymeleaf.spring5.view.ThymeleafViewResolver;

@Configuration
public class SaTokenConfigure implements WebMvcConfigurer {
    // 注册 Sa-Token 拦截器，打开注解式鉴权功能 
    @Override
    public void addInterceptors(InterceptorRegistry registry) {
        // 注册 Sa-Token 拦截器，打开注解式鉴权功能 
        registry.addInterceptor(new SaInterceptor()).addPathPatterns("/**");
    }

    @Bean
    public SaTokenDialect saTokenDialect() {
        return new SaTokenDialect();
    }

    // 为 Thymeleaf 注入全局变量，以便在页面中调用 Sa-Token 的方法
    @Autowired
    private void configureThymeleafStaticVars(ThymeleafViewResolver viewResolver) {
        viewResolver.addStaticVariable("stp", StpUtil.stpLogic);
    }
}
```

全局异常处理：

```java
package com.lys.sims.exception;

import cn.dev33.satoken.util.SaResult;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@RestControllerAdvice
public class GlobalExceptionHandler {
    // 全局异常拦截 
    @ExceptionHandler
    public SaResult handlerException(Exception e, HttpServletResponse response) {
        if (e instanceof cn.dev33.satoken.exception.NotLoginException) {
            try {
                response.sendRedirect("/login");
            } catch (IOException ex) {
                throw new RuntimeException(ex);
            }
            return null;
        } else {
            e.printStackTrace();
            return SaResult.error(e.getMessage());
        }

    }
}
```

页面文件加命名空间：

xmlns:sa="http://www.thymeleaf.org/extras/sa-token"