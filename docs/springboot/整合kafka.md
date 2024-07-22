# 整合kafka

> 简单整理下Springboot整合Kafka的步骤，并实现简单的案例

## 依赖

```xml
<dependency>
    <groupId>org.springframework.kafka</groupId>
    <artifactId>spring-kafka</artifactId>
</dependency>
```

## 配置

```yaml
spring:
  kafka:
    bootstrap-servers: 192.168.154.134:9092
    consumer:
      group-id: test
      enable-auto-commit: true
      auto-commit-interval: 3000
```

## 案例

```java
package org.lys;
import org.apache.kafka.clients.consumer.ConsumerRecord;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.stereotype.Component;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringRunner.class)
@SpringBootTest
@ContextConfiguration(classes = DiyApplication.class)
public class KafkaTests {

    @Autowired
    private KafkaProducer kafkaProducer;

    @Test
    public void testKafka(){
        // 参数1：主题，参数2：信息
        kafkaProducer.sendMessage("test","你好");
        kafkaProducer.sendMessage("test","在么");
        try {
            Thread.sleep(1000*10);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

    }

}

@Component
class KafkaProducer{

    @Autowired
    private KafkaTemplate kafkaTemplate;

    public void sendMessage(String topic,String content){
        kafkaTemplate.send(topic,content);
    }

}

@Component
class KafkaConsumer{
    // 当收到信息，自动执行这个方法
    @KafkaListener(topics = {"test"})
    public void handleMessage(ConsumerRecord record){
        System.out.println(record.value());
    }
}
```

结果如下：

![image-20230226184626286](http://cdn.qiniu.liyansheng.top/typora/image-20230226184626286.png)

可能出现的问题连上服务器：[Kafka client 客户端远程连接 一直报网络错误问题 - 浅笑19 - 博客园 (cnblogs.com)](https://www.cnblogs.com/qianxiaoPro/p/15788854.html)