# BeautifulSoup运用

> `BeautifulSoup` 是 Python中常用的 HTML 和 XML 解析库，用于从网页的 HTML 中提取特定数据。

#### **基本使用流程**

1. **安装**：

   ```bash
   pip install beautifulsoup4
   ```

2. **加载 HTML 内容**：

   ```python
   from bs4 import BeautifulSoup
   html_doc = """
   <html>
       <head><title>Test Page</title></head>
       <body>
           <h1>Hello, World!</h1>
           <p class="description">This is a paragraph.</p>
           <a href="https://example.com">Example Link</a>
       </body>
   </html>
   """
   soup = BeautifulSoup(html_doc, 'html.parser')
   ```

3. **常用方法**：

   - **获取标题**：

     ```python
     print(soup.title.string)  # 输出：Test Page
     ```

   - **获取第一个 `<h1>` 标签**：

     ```python
     print(soup.h1.text)  # 输出：Hello, World!
     ```

   - **查找所有 `<a>` 标签**：

     ```python
     links = soup.find_all('a')
     for link in links:
         print(link['href'])  # 输出：https://example.com
     ```

   - **通过类名查找标签**：

     ```python
     paragraph = soup.find('p', class_='description')
     print(paragraph.text)  # 输出：This is a paragraph.
     ```

4. **CSS 选择器**： 使用 `select()` 方法按照 CSS 选择器语法查找元素：

   ```python
   link = soup.select_one('a')  # 获取第一个 `<a>` 标签
   print(link['href'])  # 输出：https://example.com
   ```