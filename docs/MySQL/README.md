![](http://cdn.qiniu.liyansheng.top/img/20240715125411.png)


## 数据库脚本兼容

> 高版本=》低版本

## 要点

- MySQL 5 不支持 `utf8mb4` 排序规则，可以使用 `utf8` 和 `utf8_general_ci` 排序规则。
- `bit(1)` 类型在 MySQL 5 中处理时可能会产生不兼容的错误。建议将其替换为 `TINYINT(1)` 类型。
- MySQL 5 不支持 `datetime` 类型的默认值为 `NULL` 或其他时间类型的默认值。虽然它是支持的，但是与新版本的行为略有不同。确保没有冲突。

## 脚本调整

解决方案 1：将字符集改为 `utf8` 并使用 `utf8_general_ci`

解决方案 2：将字符集改为 `utf8mb4` 并使用 `utf8mb4_general_ci`

解决方案 3：如果想使用 `utf8mb4` 字符集

## 驱动下载

[mysql8](https://mvnrepository.com/artifact/com.mysql/mysql-connector-j)

[mysql5](https://mvnrepository.com/artifact/mysql/mysql-connector-java)