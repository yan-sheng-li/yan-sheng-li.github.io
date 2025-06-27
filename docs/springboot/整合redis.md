# Spring Boot整合Redis完整指南

## 一、环境准备

在开始整合前，请确保已完成以下准备工作：

1. 已安装Redis服务（[安装指南](https://www.liyansheng.top/blog/install/#12、Redis)）
2. 创建好Spring Boot项目

## 二、添加依赖

在项目的`pom.xml`中添加以下依赖：

```
<!-- Redis核心依赖 -->
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-data-redis</artifactId>
</dependency>

<!-- 连接池依赖 -->
<dependency>
    <groupId>org.apache.commons</groupId>
    <artifactId>commons-pool2</artifactId>
</dependency>
```

## 三、配置Redis连接

在`application.yml`中配置Redis连接信息：

```
spring:
  redis:
    host: 127.0.0.1       # Redis服务器地址
    port: 6379            # Redis服务器端口
    password: xxxx        # Redis密码（没有密码可不填）
    database: 0           # 使用的数据库索引
    timeout: 5000         # 连接超时时间（毫秒）
    lettuce:
      pool:
        max-active: 8     # 连接池最大连接数
        max-idle: 8       # 连接池最大空闲连接数
        min-idle: 0       # 连接池最小空闲连接数
        max-wait: 1000ms  # 获取连接最大等待时间
```

## 四、Redis操作方式

Spring Boot提供了两种主要的Redis操作模板：

### 1. StringRedisTemplate（推荐）

适用于字符串类型的键值操作：

```
@RestController
@RequestMapping("/redis")
public class RedisController {

    @Autowired
    private StringRedisTemplate stringRedisTemplate;

    @GetMapping("/set")
    public String set(@RequestParam String key, @RequestParam String value) {
        stringRedisTemplate.opsForValue().set(key, value);
        return "Set success";
    }

    @GetMapping("/get")
    public String get(@RequestParam String key) {
        return stringRedisTemplate.opsForValue().get(key);
    }
}
```

### 2. RedisTemplate（对象存储）

适用于存储Java对象，需要配置序列化：

```
@Configuration
public class RedisConfig {

    @Bean
    public RedisTemplate<Object, Object> redisTemplate(RedisConnectionFactory factory) {
        RedisTemplate<Object, Object> template = new RedisTemplate<>();
        template.setConnectionFactory(factory);

        // 使用JSON序列化器
        GenericJackson2JsonRedisSerializer jsonSerializer = new GenericJackson2JsonRedisSerializer();

        // 设置序列化方式
        template.setKeySerializer(new StringRedisSerializer());
        template.setValueSerializer(jsonSerializer);
        template.setHashKeySerializer(new StringRedisSerializer());
        template.setHashValueSerializer(jsonSerializer);

        template.afterPropertiesSet();
        return template;
    }
}
```

使用示例：

```
@Service
public class RedisObjectService {

    @Autowired
    private RedisTemplate<Object, Object> redisTemplate;

    public void saveObject(String key, Object value) {
        redisTemplate.opsForValue().set(key, value);
    }

    public Object getObject(String key) {
        return redisTemplate.opsForValue().get(key);
    }
}
```

## 五、Redis数据结构操作

### 1. 字符串(String)操作

```
// 设置值（带过期时间）
stringRedisTemplate.opsForValue().set("key", "value", Duration.ofMinutes(10));

// 获取值
String value = stringRedisTemplate.opsForValue().get("key");

// 删除键
stringRedisTemplate.delete("key");

// 检查键是否存在
boolean exists = stringRedisTemplate.hasKey("key");
```

### 2. 列表(List)操作

```
// 左侧推入元素
stringRedisTemplate.opsForList().leftPush("taskList", "task1");

// 右侧弹出元素
String task = stringRedisTemplate.opsForList().rightPop("taskList");

// 获取列表范围
List<String> tasks = stringRedisTemplate.opsForList().range("taskList", 0, -1);
```

### 3. 集合(Set)操作

```
// 添加元素
stringRedisTemplate.opsForSet().add("mySet", "A", "B", "C");

// 获取所有元素
Set<String> members = stringRedisTemplate.opsForSet().members("mySet");

// 检查元素是否存在
boolean isMember = stringRedisTemplate.opsForSet().isMember("mySet", "A");
```

### 4. 哈希(Hash)操作

```
// 设置哈希字段
stringRedisTemplate.opsForHash().put("user:1001", "name", "Tom");

// 获取哈希字段
String name = (String) stringRedisTemplate.opsForHash().get("user:1001", "name");

// 获取所有字段
Map<Object, Object> user = stringRedisTemplate.opsForHash().entries("user:1001");
```

### 5. 有序集合(ZSet)操作

```
// 添加元素
stringRedisTemplate.opsForZSet().add("ranking", "Tom", 100);

// 获取排名
Set<String> topUsers = stringRedisTemplate.opsForZSet().range("ranking", 0, 2);

// 获取元素分数
Double score = stringRedisTemplate.opsForZSet().score("ranking", "Tom");
```

## 六、最佳实践建议

1. **连接池配置**：根据应用并发量合理配置连接池参数
2. **键命名规范**：使用冒号分隔的命名空间（如`user:1001:profile`）
3. **序列化选择**：优先使用StringRedisTemplate处理字符串，复杂对象使用JSON序列化
4. **异常处理**：添加适当的异常处理逻辑
5. **过期时间**：为缓存数据设置合理的过期时间

通过以上配置和示例，您可以在Spring Boot项目中轻松集成Redis，实现高效的数据缓存和存储功能。