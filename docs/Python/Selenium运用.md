# Selenium运用
`Selenium` 是一个浏览器自动化工具，常用于网页抓取和自动化测试。

#### **基本使用流程**

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

### **应用实例：爬取网页内容**

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

### **总结**

1. **BeautifulSoup**：
   - 适合静态 HTML 的解析和数据提取。
   - 主要依赖于 `find`、`find_all` 和 `select` 方法。
2. **Selenium**：
   - 适合动态网页的数据抓取和操作。
   - 强大的浏览器自动化工具，支持点击、输入等交互操作。