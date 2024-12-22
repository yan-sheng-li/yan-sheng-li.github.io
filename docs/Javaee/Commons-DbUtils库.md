# Commons-DbUtils库

> 一个简化 JDBC 操作的工具库

`注意`：该库需要配合 JDBC 驱动程序（例如 MySQL 驱动：mysql-connector-java）

## 依赖
```xml
<dependency>
    <groupId>commons-dbutils</groupId>
    <artifactId>commons-dbutils</artifactId>
    <version>1.7</version> <!-- 最新版本可以在 Maven 仓库查询 -->
</dependency>
```

可配合使用 `C3P0 数据库连接池库`,确保资源管理高效
```xml
<dependency>
    <groupId>com.mchange</groupId>
    <artifactId>c3p0</artifactId>
    <version>0.9.5.5</version> <!-- 最新版本请在 Maven 仓库查看 -->
</dependency>
```

## 用法举例
### 1. 数据库表准备

假设有一张用户表 `users`：

```sql
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50),
    email VARCHAR(100)
);
```

------

### 2. Java 实体类

创建对应的实体类：

```java
public class User {
    private int id;
    private String name;
    private String email;

    // Getters and Setters
}
```

------

### 3. 数据库连接和 C3P0 配置

使用 `C3P0` 提供数据源：

```java
import com.mchange.v2.c3p0.ComboPooledDataSource;

public class DBUtils {
    private static ComboPooledDataSource dataSource;

    static {
        try {
            dataSource = new ComboPooledDataSource();
            dataSource.setDriverClass("com.mysql.cj.jdbc.Driver");
            dataSource.setJdbcUrl("jdbc:mysql://localhost:3306/testdb?useSSL=false&serverTimezone=UTC");
            dataSource.setUser("root");
            dataSource.setPassword("password");
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public static ComboPooledDataSource getDataSource() {
        return dataSource;
    }
}
```

------

### 4. 查询示例

使用 `QueryRunner` 和 `ResultSetHandler` 实现基本的增删改查。

#### 4.1 插入数据

```java
import org.apache.commons.dbutils.QueryRunner;

public class UserDao {
    private QueryRunner queryRunner = new QueryRunner(DBUtils.getDataSource());

    public int addUser(String name, String email) throws Exception {
        String sql = "INSERT INTO users (name, email) VALUES (?, ?)";
        return queryRunner.update(sql, name, email);
    }
}
```

#### 4.2 查询单个用户

```java
import org.apache.commons.dbutils.handlers.BeanHandler;

public User getUserById(int id) throws Exception {
    String sql = "SELECT * FROM users WHERE id = ?";
    return queryRunner.query(sql, new BeanHandler<>(User.class), id);
}
```

#### 4.3 查询所有用户

```java
import org.apache.commons.dbutils.handlers.BeanListHandler;

public List<User> getAllUsers() throws Exception {
    String sql = "SELECT * FROM users";
    return queryRunner.query(sql, new BeanListHandler<>(User.class));
}
```

#### 4.4 更新用户

```java
public int updateUser(int id, String name, String email) throws Exception {
    String sql = "UPDATE users SET name = ?, email = ? WHERE id = ?";
    return queryRunner.update(sql, name, email, id);
}
```

#### 4.5 删除用户

```java
public int deleteUser(int id) throws Exception {
    String sql = "DELETE FROM users WHERE id = ?";
    return queryRunner.update(sql, id);
}
```