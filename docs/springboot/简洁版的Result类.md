# 简洁版的 Result 类

设置 `code`、`msg` 和 `data`，并支持链式调用和静态构建方法。

```java
import java.io.Serializable;
import java.util.LinkedHashMap;
import java.util.Map;
/**
 * 通用返回结果类
 */
public class Result extends LinkedHashMap<String, Object> implements Serializable {

    private static final long serialVersionUID = 1L;

    public static final int SUCCESS = 200;
    public static final int ERROR = 500;

    public Result() {
    }

    public Result(int code, String msg, Object data) {
        this.setCode(code);
        this.setMsg(msg);
        this.setData(data);
    }

    public Integer getCode() {
        return (Integer) this.get("code");
    }

    public String getMsg() {
        return (String) this.get("msg");
    }

    public Object getData() {
        return this.get("data");
    }

    public Result setCode(int code) {
        this.put("code", code);
        return this;
    }

    public Result setMsg(String msg) {
        this.put("msg", msg);
        return this;
    }

    public Result setData(Object data) {
        this.put("data", data);
        return this;
    }

    public Result set(String key, Object value) {
        this.put(key, value);
        return this;
    }

    public Result setMap(Map<String, ?> map) {
        if (map != null) {
            for (Map.Entry<String, ?> entry : map.entrySet()) {
                this.put(entry.getKey(), entry.getValue());
            }
        }
        return this;
    }

    // 快捷静态方法
    public static Result ok() {
        return new Result(SUCCESS, "OK", null);
    }

    public static Result ok(String msg) {
        return new Result(SUCCESS, msg, null);
    }

    public static Result ok(String msg, Object data) {
        return new Result(SUCCESS, msg, data);
    }

    public static Result data(Object data) {
        return new Result(SUCCESS, "OK", data);
    }

    public static Result error() {
        return new Result(ERROR, "Error", null);
    }

    public static Result error(String msg) {
        return new Result(ERROR, msg, null);
    }

    public static Result of(int code, String msg, Object data) {
        return new Result(code, msg, data);
    }

    @Override
    public String toString() {
        return "{\"code\": " + getCode() + ", \"msg\": " + quote(getMsg()) + ", \"data\": " + quote(getData()) + "}";
    }

    private String quote(Object obj) {
        if (obj == null) return "null";
        if (obj instanceof String) return "\"" + obj + "\"";
        return obj.toString();
    }
}
```

### 示例使用：

```java
Result r1 = Result.ok("操作成功", dataObject);
Result r2 = Result.error("发生错误");
Result r3 = new Result().setCode(404).setMsg("未找到资源").setData(null);
```

这个类足够应对大多数返回结构的场景，并可根据实际需求进一步扩展，比如添加时间戳、状态布尔字段、分页信息等。需要这些功能我也可以帮你添加。