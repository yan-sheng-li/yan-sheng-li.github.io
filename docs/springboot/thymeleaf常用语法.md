# thymeleaf常用语法


## 命名空间
```html
<html lang="en" xmlns:th="http://www.w3.org/1999/xhtml">
  ```
 ## 用法

###    变量表达式：
        ${...}：用于在模板中输出变量的值。
        *{...}：用于在表单中绑定对象属性。

###     选择性渲染：
        th:if：用于条件性地渲染 HTML 元素。
        th:unless：与 th:if 相反，用于条件性地不渲染 HTML 元素。
        th:switch、th:case、th:case-default：用于类似 switch-case 的条件渲染。

 ###    循环迭代：
        th:each：用于循环迭代集合中的元素，并渲染 HTML 元素。

  ###   属性操作：
        th:href：用于设置链接的 href 属性。
        th:src：用于设置图片等资源的 src 属性。
        th:value：用于设置表单元素的值。

###     事件处理：
        th:onclick、th:onchange 等：用于设置元素的点击、变化等事件处理函数。

###     模板布局：
        th:insert：用于将另一个页面片段插入当前页面。
        th:replace：用于用另一个页面片段替换当前元素。
        th:include：用于包含另一个页面片段到当前页面。

###     国际化和国际化消息：
        #{...}：用于获取国际化消息。

###     片段操作：
        th:fragment、th:include：用于定义和引用片段。

###     模板继承：
        th:replace、th:insert、th:include：用于模板布局中的不同部分的组合。

###     文本操作：
        |...|：用于字符串的字面量。

 ###    CSS 类操作：
        th:class、th:id 等：用于设置元素的 CSS 类和 ID。

###     条件属性：
        th:attr：根据条件设置元素的属性。

 ###    模板注释：
        <!-- /*...*/ -->：用于模板注释。
        
        
 ###            页面跳转：
        th:action：用于设置表单提交的目标地址。
        th:href：用于设置超链接的跳转地址。

###     日期和时间格式化：
        #dates：用于对日期和时间进行格式化和处理。

 ###    数学计算：
        #numbers：用于执行数学运算，如格式化数字、比较大小等。

###     集合操作：
        #lists、#sets、#arrays：用于对集合进行操作，如过滤、排序等。

 ###    条件判断：
        th:if, th:unless, th:switch, th:case, th:case-default 等：用于条件判断和渲染。

  ###   表达式工具：
        #ctx、#session、#request 等：用于获取上下文信息，如上下文路径、会话信息等。

 ###    表单处理：
        th:object：用于表单数据绑定到后端对象。
        th:field：用于表单字段绑定到后端对象属性。

###     重复块：
        th:block：用于定义重复使用的 HTML 块。

 ###    安全处理：
        #aggregates：用于执行安全相关的聚合操作，如求和、求平均值等。

 ###    国际化处理：
        th:text、#{...}：用于国际化消息的显示。

 ###    自定义标签库：
        th:*、th:each、th:if 等：Thymeleaf 还支持使用自定义标签库，可以通过这些标签来扩展 Thymeleaf 的功能。


###  拼接简化
原：

```
th:onclick="'getOrder('+${i.id}+')'"
```

可以这样写：

```
th:onclick="|del(${user.id})|"
```

## 🚩进阶用法


## 页面中文乱码

在`application.properties`加入下面的配置：

```
spring.http.encoding.force=true
spring.http.encoding.charset=UTF-8
spring.http.encoding.enabled=true
```



## `@ControllerAdvice` 全局注入

```java
@ControllerAdvice
public class GlobalModelAttribute {

    @Autowired
    private IUserService userService;

    /**
     * 返回一个当前登录用户信息（User 对象）
     */
    @ModelAttribute("currentUser")
    public User currentUser() {
        // 这里根据你的系统逻辑来获取登录用户
        // 比如从 Session 中取
        return userService.getLoginUser();
    }

    /**
     * 公共变量示例
     */
    @ModelAttribute("systemTitle")
    public String systemTitle() {
        return "后台管理系统";
    }
}

```

特点：

- 不属于任何 Controller
- 所有 Controller 和页面都会自动注入其中的变量
- 无需继承，无需复制，无需再在 Controller 中写 `model.addAttribute`

页面直接就用

```html
<div>
    <span th:text="${currentUser.username}"></span>
    <span th:text="${systemTitle}"></span>
</div>
```

## 预处理 ${} 拼接 JS 变量

```html
<a th:onclick="|showDetail(${student.id})|">查看</a>
```

## \#temporals 日期格式化

```html
<span th:text="${#temporals.format(createTime, 'yyyy-MM-dd HH:mm')}">2025-01-01 12:00</span>
<span th:text="${#temporals.format(birthday, 'yyyy年MM月dd日 EEEE')}">2025年01月01日 星期三</span>
```

## 条件类终极写法（一行顶十行）

```html
<!-- 状态徽章 -->
<span class="badge"
      th:class="${status == 0} ? 'bg-warning' : ${status == 1} ? 'bg-success' : 'bg-danger'"
      th:text="${status == 0} ? '待审核' : ${status == 1} ? '已通过' : '已拒绝'">待审核</span>
```

## RedirectAttributes

重定向时携带数据

示例：

```java
@PostMapping("/student/add")
public String add(@Valid Student student, BindingResult result,
                  RedirectAttributes ra) {   // ← 重点在这里！

    if (result.hasErrors()) {
        return "student/add"; // 错误回原页面
    }

    studentService.save(student);

    // 下面这三行随便用，Thymeleaf 都能直接拿
    ra.addFlashAttribute("msg", "添加学生成功！");
    ra.addFlashAttribute("msgType", "success");     // 配合 Bootstrap alert
    ra.addFlashAttribute("newStudent", student);    // 甚至可以把整个对象传过去

    return "redirect:/student/list";  // 重定向到列表页
}
```

页面接收：

```html
<!-- 任意页面（通常放在 navbar 下方或顶部） -->
<div th:if="${msg != null}" class="alert alert-success alert-dismissible fade show mt-3">
    <i class="bi bi-check-circle"></i>
    <span th:text="${msg}">操作成功</span>
    <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
</div>

<!-- 更高级：根据类型显示不同颜色 -->
<div th:if="${msg != null}"
     th:class="'alert alert-' + ${msgType} + ' alert-dismissible fade show'"
     th:text="${msg}">
</div>
```

## 表单时间类型接收

```java
    /**
     * 出生日期
     */
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private LocalDate birthDate;

    /**
     * 入学日期
     */
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private LocalDate enrollmentDate;
```

```html
        <div class="form-group">
            <label for="birthDate">出生日期</label>
            <input type="date" class="form-control" id="birthDate" name="birthDate" th:field="*{birthDate}">
        </div>
        <div class="form-group">
            <label for="enrollmentDate">入学日期</label>
            <input type="date" class="form-control" id="enrollmentDate" name="enrollmentDate" th:field="*{enrollmentDate}">
        </div>
```

## 表单校验

添加依赖

```xml
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-validation</artifactId>
        </dependency>
```

添加属性注解

```java
    @NotEmpty(message = "学生姓名不能为空")
    private String name;

    @Email(message = "邮箱格式不正确")
    private String email;
```

controller接口

注意`@Valid`注解，紧跟后添加`BindingResult bindingResult`

```java
    @PostMapping("/save")
    public String save(@Valid Student student,BindingResult bindingResult, RedirectAttributes redirectAttributes) {
        if (bindingResult.hasErrors()) {
            return "student/form";
        }
```

前端页面

```html
    <form th:action="@{/student/save}" method="post" th:object="${student}">

        <div th:if="${#fields.hasErrors()}">
            <div class="alert alert-danger">
                <ul>
                    <li th:each="err : ${#fields.errors()}" th:text="${err}"></li>
                </ul>
            </div>
        </div>
```

效果

![image-20251125152243047](http://cdn.qiniu.liyansheng.top/img/image-20251125152243047.png)

## 查询与分页

可复用碎片

```html
<!--templates/fragments/common.html-->
<div th:fragment="pager(page, keyword, url)" xmlns:th="http://www.w3.org/1999/xhtml">

    <!-- 分页条（支持每页条数选择 + 页码跳转） -->
    <nav th:if="${page.total > page.size}" class="mt-4">

        <ul class="pagination justify-content-center">

            <!-- 上一页 -->
            <li class="page-item" th:classappend="${page.current == 1} ? 'disabled'">
                <a class="page-link"
                   th:href="@{${page.current == 1 ? '#' : '${url}'}(
                        page=${page.current - 1},
                        size=${page.size},
                        keyword=${keyword}
                   )}">
                    上一页
                </a>
            </li>

            <!-- 页码 -->
            <th:block th:with="totalPages=${(page.total + page.size - 1) / page.size}">
                <th:block th:each="i : ${#numbers.sequence(1, totalPages)}">
                    <li class="page-item" th:classappend="${i == page.current} ? 'active'">
                        <a class="page-link"
                           th:href="@{${url}(
                                page=${i},
                                size=${page.size},
                                keyword=${keyword}
                           )}"
                           th:text="${i}"></a>
                    </li>
                </th:block>
            </th:block>

            <!-- 下一页 -->
            <li class="page-item"
                th:classappend="${page.current == ((page.total + page.size - 1) / page.size)} ? 'disabled'">
                <a class="page-link"
                   th:href="@{${page.current == ((page.total + page.size - 1) / page.size) ? '#' : '${url}'}(
                        page=${page.current + 1},
                        size=${page.size},
                        keyword=${keyword}
                   )}">
                    下一页
                </a>
            </li>

        </ul>

        <!-- 分页选项 -->
        <div class="text-center text-muted small mt-2">

            <!-- 每页条数选择 -->
            <form method="get" th:action="@{${url}}" class="d-inline-block me-3">
                <input type="hidden" name="page" th:value="${page.current}">
                <input type="hidden" name="keyword" th:value="${keyword}">
                每页
                <select name="size" onchange="this.form.submit()" class="form-select d-inline-block"
                        style="width: auto; display: inline-block;">
                    <option th:value="10" th:selected="${page.size == 10}">10</option>
                    <option th:value="20" th:selected="${page.size == 20}">20</option>
                    <option th:value="50" th:selected="${page.size == 50}">50</option>
                    <option th:value="100" th:selected="${page.size == 100}">100</option>
                </select>
                条
            </form>

            <!-- 跳转页码 -->
            <form method="get" th:action="@{${url}}" class="d-inline-block">
                <input type="hidden" name="size" th:value="${page.size}">
                <input type="hidden" name="keyword" th:value="${keyword}">
                跳转到
                <input type="number" name="page" min="1"
                       th:max="${(page.total + page.size - 1) / page.size}"
                       class="form-control d-inline-block"
                       style="width: 70px;">
                页
                <button type="submit" class="btn btn-sm btn-primary ms-1">Go</button>
            </form>

        </div>

        <!-- 统计信息 -->
        <div class="text-center text-muted small mt-2">
            第 <span th:text="${page.current}"></span> /
            <span th:text="${(page.total + page.size - 1) / page.size}"></span> 页，
            共 <span th:text="${page.total}"></span> 条记录
        </div>

    </nav>

</div>
```

页面使用碎片

```html
    <th:block th:replace="fragments/common :: pager(${page}, ${keyword}, '/student/list')"></th:block>
```

控制器参考

```java
    @GetMapping("/list")
    public String list(@RequestParam(defaultValue = "") String keyword,
                       @RequestParam(defaultValue = "1") int page,
                       @RequestParam(defaultValue = "10") int size, Model model) {
        model.addAttribute("activeMenu", "student");
        model.addAttribute("title", "学生信息表");

        // 创建分页对象
        Page<Student> pageInfo = new Page<>(page, size);
        // 调用带分页和条件查询的服务方法
        IPage<Student> studentPage = studentService.page(pageInfo,
            new QueryWrapper<Student>()
                .like(!keyword.isEmpty(), "name", keyword)
                .or()
                .like(!keyword.isEmpty(), "student_id", keyword));

//        如果没有查到数据
        if (studentPage.getRecords().size() == 0) {
            model.addAttribute("msg", "没有查询到数据！");
        }
        // 将分页数据添加到模型
        model.addAttribute("students", studentPage.getRecords());
        model.addAttribute("page", studentPage);
        model.addAttribute("keyword", keyword);

        return "student/list";
    }
```



