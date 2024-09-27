# 整合xxl-job定时任务


[仓库](https://github.com/xuxueli/xxl-job)

## 1. 引入 XXL-JOB 依赖

在 pom.xml 文件中添加 XXL-JOB 的依赖：

```xml
<dependency>
    <groupId>com.xuxueli</groupId>
    <artifactId>xxl-job-core</artifactId>
    <version>2.3.0</version>
</dependency>
```
## 2. 配置 XXL-JOB 调度中心地址

在 application.properties 或 application.yml 中，配置 XXL-JOB 执行器相关信息：
application.properties

```properties
# 执行器 AppName
xxl.job.executor.appname=yourAppName
# 执行器的注册地址，默认IP为空则自动获取本机IP
xxl.job.executor.ip=
# 执行器的端口号（默认8080，可以自定义）
xxl.job.executor.port=9999
# 调度中心的地址（多个调度中心用逗号分隔）
xxl.job.admin.addresses=http://127.0.0.1:8080/xxl-job-admin
# 执行器日志路径
xxl.job.executor.logpath=/data/applogs/xxl-job/jobhandler
# 执行器日志保留天数
xxl.job.executor.logretentiondays=30
```

application.yml

```yaml

xxl:
  job:
    admin:
      addresses: http://127.0.0.1:8080/xxl-job-admin # 调度中心地址
    executor:
      appname: yourAppName  # 执行器的名字
      ip: ''               # 自定义IP，留空则自动获取
      port: 9999           # 自定义端口号
      logpath: /data/applogs/xxl-job/jobhandler # 日志路径
      logretentiondays: 30  # 日志保留天数
```
## 3. 创建 XXL-JOB 配置类

编写 XXL-JOB 的配置类，启动 XXL-JOB 的执行器：

```java

import com.xxl.job.core.executor.impl.XxlJobSpringExecutor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class XxlJobConfig {

    @Bean
    public XxlJobSpringExecutor xxlJobExecutor() {
        System.out.println("XXL-JOB executor init.");
        XxlJobSpringExecutor xxlJobSpringExecutor = new XxlJobSpringExecutor();
        xxlJobSpringExecutor.setAdminAddresses("http://127.0.0.1:8080/xxl-job-admin");
        xxlJobSpringExecutor.setAppname("yourAppName");
        xxlJobSpringExecutor.setIp(null);
        xxlJobSpringExecutor.setPort(9999);
        xxlJobSpringExecutor.setLogPath("/data/applogs/xxl-job/jobhandler");
        xxlJobSpringExecutor.setLogRetentionDays(30);
        return xxlJobSpringExecutor;
    }
}
```
## 4. 编写任务 Handler

在 Spring Boot 中创建处理 XXL-JOB 调度的任务 Handler：

```java

import com.xxl.job.core.handler.annotation.XxlJob;
import org.springframework.stereotype.Component;

@Component
public class MyJobHandler {

    @XxlJob("myJobHandler")
    public void myJobHandler() throws Exception {
        System.out.println("XXL-JOB task executing...");
        // 执行任务的具体逻辑
    }
}
```
## 5. 配置 XXL-JOB 调度中心

确保你已经搭建了 XXL-JOB 的调度中心，并且在 xxl-job-admin 项目中已经配置了相关调度任务。访问 http://localhost:8080/xxl-job-admin，使用账号登录后，添加调度任务，配置 JobHandler 为 myJobHandler，并设置相关的 cron 表达式等参数。
## 6. 启动项目

在配置好后，启动 Spring Boot 项目，你的 XXL-JOB 应该能够正常工作，并可以在 XXL-JOB 管理后台中查看任务执行情况。
## 7. 测试任务

通过 XXL-JOB 管理后台手动触发或通过定时任务触发，查看日志和结果输出，确保任务正常运行。


## 应用场景
1. 定时任务执行

在实际项目中，经常会有需要定时执行的任务，XXL-JOB 提供了精确的定时调度能力，适用于各种定时任务场景：

    定时数据备份：每天定时备份数据库数据到云存储或本地服务器。
    报表生成：每月或每季度自动生成业务报表，例如销售报表、财务报表等，并通过邮件或其他渠道发送给相关负责人。
    清理日志文件：定期清理过期的日志文件、临时文件，避免占用大量存储空间。

2. 分布式任务调度

当单台服务器的资源不足以处理复杂任务时，XXL-JOB 的分布式执行能力可以将任务分发到多个执行器节点，实现大规模任务的并发处理：

    电商系统的订单处理：对于大规模电商系统，订单的创建、支付、发货、库存管理等业务可以分发到不同节点执行，保证系统高效处理订单。
    日志分析任务：将大量日志分析任务分发到多个服务器节点，通过分布式处理提升任务的处理速度和效率。

3. 批量数据处理

对于大批量的数据处理操作，XXL-JOB 可以帮助系统自动化处理这些任务，特别是大数据平台或数据仓库中的批处理任务：

    数据清洗和同步：每天定时清洗业务系统中的数据，将清洗后的数据同步到数据仓库或数据湖中，为数据分析提供基础数据。
    批量导入数据：例如将用户行为数据、交易记录等批量导入到数据库中。

4. 异步任务处理

在实际开发中，某些耗时的任务可以通过 XXL-JOB 实现异步执行，避免阻塞主业务流程：

    邮件或短信通知：用户注册、下单、支付等操作后，通过 XXL-JOB 异步发送邮件或短信通知，提升用户体验和系统响应速度。
    用户积分计算：用户在某个时段完成了某项活动后，积分计算可以通过异步任务在后台完成。

5. 多系统联动任务

在企业系统中，经常需要多个子系统之间进行任务联动。例如，电商系统和仓储系统需要在订单处理、发货环节协同工作。XXL-JOB 可以用于在不同系统之间协同执行任务：

    ERP 系统和库存管理系统联动：当订单产生后，XXL-JOB 调度任务通知库存管理系统更新库存。
    CRM 系统和营销系统联动：定期从 CRM 系统中获取用户信息并推送到营销系统进行用户营销活动。

6. 周期性数据同步

在多个系统之间，需要定期同步数据，保持数据的一致性，XXL-JOB 可以实现这样的任务调度：

    数据库之间的数据同步：定期将主数据库的数据同步到备份数据库中，或将不同业务系统的数据库之间的数据同步。
    系统对接中的数据同步：在微服务架构中，不同服务之间的数据同步，可以通过定时任务来实现，比如将订单数据同步到财务系统。

7. 文件处理任务

一些与文件相关的任务可以通过 XXL-JOB 自动化处理：

    文件上传/下载：定期从 FTP 服务器下载文件或将本地文件上传到远程服务器。
    日志文件压缩：定时将系统生成的日志文件压缩归档，减少服务器存储空间。

8. 消息推送和提醒

    营销消息推送：针对会员用户，可以通过 XXL-JOB 定时向他们发送促销活动信息或节日祝福短信，提升用户粘性。
    提醒类业务：例如到期提醒、事件通知等，XXL-JOB 可以通过定时任务触发邮件、短信、App 消息推送等。

9. 第三方接口调用

定时或者批量调用第三方 API 或内部接口，确保与外部系统的数据交换和同步：

    第三方物流信息同步：定时调用物流公司的接口，获取包裹的物流状态并更新到系统中。
    财务系统对账：每天自动对接银行、支付平台的对账接口，进行对账处理，自动生成报表。

10. 业务规则检查和警告

对某些业务规则进行定期检查，并在异常情况下自动发出警告或执行自动化处理：

    库存预警：定期检查库存，如果发现库存不足，自动触发补货流程或发送预警。
    财务预警：定期扫描账单或交易记录，如果发现异常情况（如超额支付等），自动触发警报。
