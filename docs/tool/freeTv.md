# 📺免费看电视

[相关资源仓库](https://github.com/yan-sheng-li/TvBox-solution)

## 小苹果影视

内置播放源，央视卫士直播，影视轮播等，可以直接安装 `安卓端`，`TV端`

[点我去下载](http://www.xpgtv.com/)

## 我的电视

内置直播源，亦可自定义

[项目地址](https://github.com/yaoxieyoulei/mytv-android)

## TVBox

自行配置数据源

[项目地址](https://github.com/a736240087/tvbox)

## 数据源获取

[渠道1](https://www.juwanhezi.com/other/jsonlist)

[渠道2](https://github.com/Guovin/TV)

## 测试可用（时间：2024年10月29日）
菜妮丝

https://tv.xn--yhqu5zs87a.top

巧儿

http://pandown.pro/tvbox/tvbox.json

俊哥

http://home.jundie.top:81/top98.json

dxawi

https://dxawi.github.io/0/0.json

小盒子多仓

http://xhztv.top/tvbox.txt

毒盒多仓

https://tv.youdu.fan:666


业余打发多仓

https://ghproxy.net/https://raw.githubusercontent.com/yyfxz/qqtv/main/qq.json


## 直播源
可用1

https://agit.ai/Yoursmile7/TVBox/raw/branch/master/live.txt

可用2

http://175.178.251.183:6689/live.m3u


## 🔧工具脚本：批量检测数据源的可用性

> 将你的链接都放到一个txt文本里面，然后执行这个脚本，可用的链接将单独筛选出来，这样就不用一个一个链接去试了😁

## ping_links.py
```python
import requests

# 读取链接文件
with open('links.txt', 'r') as file:
    links = file.readlines()

# 存储可用的链接
reachable_links = []

# 测试每个链接
for link in links:
    link = link.strip()
    try:
        response = requests.head(link, allow_redirects=True)
        if response.status_code == 200:
            reachable_links.append(link)
            print(f"可用链接: {link}")
        else:
            print(f"不可用链接: {link} (状态码: {response.status_code})")
    except requests.RequestException:
        print(f"不可用链接: {link} (请求异常)")

# 将可用的链接写入新文件
with open('reachable_links.txt', 'w') as file:
    for link in reachable_links:
        file.write(link + '\n')

print("可用的链接已保存到 reachable_links.txt 文件中。")
```
