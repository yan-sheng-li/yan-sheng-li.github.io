# 使用swagger

## 访问地址
http://localhost:8080/swagger-ui/index.html

## 修改配置
把`application.yml`中的`swagger.pathMapping：/dev-api`的dev-api去掉。

## 获取token
可以直接在网页登录后，打开某个请求，在请求头就能获取。

![](http://cdn.qiniu.liyansheng.top/img/20240723164257.png)

## 示例接口
```java
@RestController
@RequestMapping("/demo")
@Api(tags = "测试")
public class DemoController {

    @GetMapping
    @ApiOperation("测试")
    public AjaxResult demo() {
        return AjaxResult.success("ok");
    }
}
```