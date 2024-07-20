
# myabtis-plus动态组合SQL

## 案例
```java
//        动态组合查询
        List<Users> list = usersService.list(new QueryWrapper<Users>().lambda()
                .likeLeft(!users.getUsername().equals(""), Users::getUsername, users.getUsername())
                .likeLeft(!users.getName().equals(""), Users::getName, users.getName())
                .eq(!users.getRole().equals(""), Users::getRole, users.getRole())
                );
        model.addAttribute("users", list);
        return "users";
    }
```