# MyBatis 自带的动态 SQL 语法

> 对于简单的动态 SQL 场景，可以直接用注解方式。
如：

```java
@Select({
        "<script>",
        "SELECT * FROM emp WHERE username = #{name}",
        "<if test='deptId!= null'>",
        "AND dept_id = #{deptId}",
        "</if>",
        "</script>"
    })
    List<Emp> queryByUsernameAndDeptId(@Param("name") String name, @Param("deptId") Integer dept_id);
```
