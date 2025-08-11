# aria2多线程下载

## 1. 安装 aria2

- **Ubuntu/Debian**

  ```bash
  sudo apt update
  sudo apt install aria2
  ```

- **CentOS/RHEL**

  ```bash
  sudo yum install aria2
  ```

  如果默认源没有，可以通过 EPEL 源安装。

- **MacOS**

  ```bash
  brew install aria2
  ```

- **检查是否安装成功**

  ```bash
  aria2c --version
  ```

------

## 2. 基本用法

### 下载文件

```bash
aria2c -x 16 -c -o 文件名.ext '下载链接'
```

参数说明：

- `-x 16` ：最大连接数，通常16线程下载加快速度
- `-c` ：断点续传
- `-o` ：输出文件名
- URL 用单引号包裹，防止 shell 解析特殊字符

### 示例

```bash
aria2c -x 16 -c -o example.mp3 'https://example.com/file.mp3?token=xxxx&other=yyy'
```
![](http://cdn.qiniu.liyansheng.top/img/20250811160713.png)

------

## 3. 常见问题及解决

### 1) URL 中有特殊字符导致命令失败

- URL 带 `?`、`&` 等特殊字符，必须用单引号或双引号括起来
- 不然 shell 会把它们当作后台符号，拆分命令出错

### 2) 中文文件名导致下载异常或乱码

- aria2 和终端环境对中文名支持有限，最好用英文或拼音文件名
- 下载完用 `mv` 命令重命名为中文

### 3) 下载链接过期或权限限制

- 含时间戳或签名的链接一般有有效期，过期会返回错误状态码
- 需要重新生成最新的有效链接
- 确认网络权限，服务器可以访问该链接

### 4) 报错 HTTP 状态码异常（如 status=959）

- 多为链接格式问题（未加引号）或服务端拒绝请求
- 检查链接有效性，确认网络可达

------

## 4. 小贴士

- 用 `curl -I '链接'` 或 `wget --spider '链接'` 先检测链接是否能正常访问
- 如果需要下载多个文件，可写一个文本文件，一行一个 URL，用 `aria2c -i urls.txt` 批量下载
- aria2 支持 BitTorrent、Metalink、HTTP/FTP 下载，非常强大，可查官方文档深入学习