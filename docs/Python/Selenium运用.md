# Selenium运用
`Selenium` 是一个浏览器自动化工具，常用于网页抓取和自动化测试。

## 基础

1. **安装**：

   - 安装 Selenium：

     ```bash
     pip install selenium
     ```

   - 下载对应浏览器驱动（例如 Edge 的 WebDriver）。

2. **初始化浏览器**：

   ```python
   from selenium import webdriver
   
   # 使用 Edge 浏览器
   driver = webdriver.Edge()  
   driver.get("https://www.example.com")  # 打开网页
   print(driver.title)  # 输出网页标题
   driver.quit()  # 关闭浏览器
   ```

   如果是用谷歌浏览器
    ```
    from selenium.webdriver.chrome.service import Service
    from webdriver_manager.chrome import ChromeDriverManager  # 自动管理 ChromeDriver

    driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()))
    ```

3. **常用操作**：

   - **查找元素**：

     ```python
     # 按 ID 查找
     element = driver.find_element(By.ID, 'example_id')
     
     # 按类名查找
     element = driver.find_element(By.CLASS_NAME, 'example_class')
     
     # 按 XPath 查找
     element = driver.find_element(By.XPATH, '//a[@href="https://example.com"]')
     ```

   - **点击按钮**：

     ```python
     button = driver.find_element(By.ID, 'submit-button')
     button.click()
     ```

   - **输入文本**：

     ```python
     input_field = driver.find_element(By.NAME, 'username')
     input_field.send_keys('my_username')
     ```

   - **获取属性或文本**：

     ```python
     element = driver.find_element(By.CLASS_NAME, 'description')
     print(element.text)  # 获取文本内容
     print(element.get_attribute('href'))  # 获取链接
     ```

4. **等待**： 网页内容可能加载较慢，可以使用显式等待：

   ```python
   from selenium.webdriver.common.by import By
   from selenium.webdriver.support.ui import WebDriverWait
   from selenium.webdriver.support import expected_conditions as EC
   
   wait = WebDriverWait(driver, 10)
   element = wait.until(EC.presence_of_element_located((By.ID, 'example_id')))
   ```

5. **窗口操作**：

   - 设置窗口大小：

     ```python
     driver.set_window_size(1200, 800)
     ```

   - 截图：

     ```python
     driver.save_screenshot('screenshot.png')
     ```

------

## 简单案例

结合 `BeautifulSoup` 和 `Selenium`：

```python
from bs4 import BeautifulSoup
from selenium import webdriver
from selenium.webdriver.common.by import By

# 初始化 Selenium
driver = webdriver.Edge()
driver.get("https://www.python.org")

# 使用 Selenium 获取页面 HTML
html = driver.page_source

# 使用 BeautifulSoup 解析 HTML
soup = BeautifulSoup(html, 'html.parser')
events = soup.select('.event-widget li')  # 选择侧边栏的事件列表

for event in events:
    event_name = event.a.text
    event_date = event.time.text
    print(f"{event_date}: {event_name}")

driver.quit()
```

------

## 总结

1. **BeautifulSoup**：
   - 适合静态 HTML 的解析和数据提取。
   - 主要依赖于 `find`、`find_all` 和 `select` 方法。
2. **Selenium**：
   - 适合动态网页的数据抓取和操作。
   - 强大的浏览器自动化工具，支持点击、输入等交互操作。


## 进阶
### 调用chrome浏览器
```python
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from webdriver_manager.chrome import ChromeDriverManager

def test_chrome():
    options = webdriver.ChromeOptions()
    options.add_argument("--start-maximized")
    options.add_experimental_option("detach", True)  # 运行结束后不关闭窗口

    driver = webdriver.Chrome(
        # 自动下载并管理 ChromeDriver
        service=Service(ChromeDriverManager(url="https://registry.npmmirror.com/-/binary/chromedriver").install()),
        options=options
    )

    driver.get("https://www.baidu.com")

    # 显式等待：等百度搜索框加载完成，最多等10秒
    try:
        search_box = WebDriverWait(driver, 10).until(
            EC.presence_of_element_located((By.ID, "kw"))
        )
        print("百度首页加载完成，搜索框已找到！")
    finally:
        driver.quit()

if __name__ == "__main__":
    test_chrome()
```

### 保存登录后的cookies
在一些需要登录的网站，可以先保存cookies，后面爬数据时可以免登录
```python
import json
import time
from selenium import webdriver

def save_cookies(url="https://www.zhipin.com", output_file="cookies.json"):
    # 启动 Edge（你也可以改成 Chrome）
    options = webdriver.EdgeOptions()
    driver = webdriver.Edge(options=options)

    # 打开目标网站
    driver.get(url)
    print("🌐 请在打开的浏览器里手动完成登录（比如扫码登录）")

    # 给你 60 秒钟时间扫码/登录
    for i in range(60, 0, -5):
        print(f"⏳ 请在 {i} 秒内完成登录...")
        time.sleep(5)

    # 获取 cookies
    cookies = driver.get_cookies()
    with open(output_file, "w", encoding="utf-8") as f:
        json.dump(cookies, f, ensure_ascii=False, indent=2)

    print(f"✅ Cookies 已保存到 {output_file}")
    driver.quit()


if __name__ == "__main__":
    save_cookies()

```