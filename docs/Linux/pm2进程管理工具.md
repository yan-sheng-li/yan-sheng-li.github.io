# pm2进程管理工具



> 官网：https://pm2.keymetrics.io/

## 介绍

>PM2是一个流行的Node.js进程管理器。它允许你简化Node.js应用程序的部署和管理。PM2可以帮助你在生产环境中管理Node.js进程，包括启动、停止、重启应用程序，以及监视应用程序的状态和日志。它还具有一些其他功能，比如负载均衡、自动重新启动、内存监控等。 PM2还提供了一个简单的命令行界面，使得管理和监控Node.js应用程序变得更加方便。

## 常用命令

**启动应用程序**：

```
pm2 start <app.js>
```

**停止应用程序**：

```
pm2 stop <app_name|app_id>
```

**重启应用程序**：

```
pm2 restart <app_name|app_id>
```

**重新加载应用程序**（不关闭服务）：

```
pm2 reload <app_name|app_id>
```

**查看应用程序列表**：

```
pm2 list
```

**查看应用程序详细信息**：

```
pm2 show <app_name|app_id>
```

**查看实时日志**：

```
pm2 logs <app_name|app_id>
```

**清除日志**：

```
pm2 flush
```

**监视模式启动应用程序**（会自动重启）：

```
pm2 start <app.js> --watch
```

**设置应用程序的数量**（用于负载均衡）：

```
pm2 scale <app_name|app_id> <number_of_instances>
```

这只是其中的一部分命令，PM2还有更多功能和选项，你可以通过查阅官方文档来获取更多信息。

## 案例

> 使用pm2管理hexo 进程，使其可以在后台持续运行

1. 安装

    ```js
    npm install -g pm2
    ```

2. 在hexo根目录新建运行文件，如`hexo_run.js`

    ```js
    //run
    const { exec } = require('child_process')
    exec('hexo server',(error, stdout, stderr) => {
            if(error){
                    console.log('exec error: ${error}')
                    return
            }
            console.log('stdout: ${stdout}');
            console.log('stderr: ${stderr}');
    })
    ```

3. 启动进程服务 

    ```
    [root@Lys-Server hexo-blog]# pm2 start hexo_run.js 
    [PM2] Starting /root/hexo/hexo-blog-originfile/hexo_run.js in fork_mode (1 instance)
    [PM2] Done.
    ┌────┬────────────────────┬──────────┬──────┬───────────┬──────────┬──────────┐
    │ id │ name               │ mode     │ ↺    │ status    │ cpu      │ memory   │
    ├────┼────────────────────┼──────────┼──────┼───────────┼──────────┼──────────┤
    │ 0  │ hexo_run           │ fork     │ 0    │ online    │ 0%       │ 15.3mb   │
    └────┴────────────────────┴──────────┴──────┴───────────┴──────────┴──────────┘
    ```
