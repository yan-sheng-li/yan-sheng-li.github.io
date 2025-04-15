(window.webpackJsonp=window.webpackJsonp||[]).push([[116],{519:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"selenium运用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#selenium运用"}},[t._v("#")]),t._v(" Selenium运用")]),t._v(" "),s("p",[s("code",[t._v("Selenium")]),t._v(" 是一个浏览器自动化工具，常用于网页抓取和自动化测试。")]),t._v(" "),s("h4",{attrs:{id:"基本使用流程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#基本使用流程"}},[t._v("#")]),t._v(" "),s("strong",[t._v("基本使用流程")])]),t._v(" "),s("ol",[s("li",[s("p",[s("strong",[t._v("安装")]),t._v("：")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("安装 Selenium：")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("pip "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" selenium\n")])])])]),t._v(" "),s("li",[s("p",[t._v("下载对应浏览器驱动（例如 Edge 的 WebDriver）。")])])])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("初始化浏览器")]),t._v("：")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" selenium "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" webdriver\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 使用 Edge 浏览器")]),t._v("\ndriver "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" webdriver"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Edge"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  \ndriver"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("get"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://www.example.com"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 打开网页")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("driver"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("title"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 输出网页标题")]),t._v("\ndriver"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("quit"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 关闭浏览器")]),t._v("\n")])])]),s("p",[t._v("如果是用谷歌浏览器")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("from selenium.webdriver.chrome.service import Service\nfrom webdriver_manager.chrome import ChromeDriverManager  # 自动管理 ChromeDriver\n\ndriver = webdriver.Chrome(service=Service(ChromeDriverManager().install()))\n")])])])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("常用操作")]),t._v("：")]),t._v(" "),s("ul",[s("li",[s("p",[s("strong",[t._v("查找元素")]),t._v("：")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 按 ID 查找")]),t._v("\nelement "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" driver"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("find_element"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("By"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ID"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'example_id'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 按类名查找")]),t._v("\nelement "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" driver"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("find_element"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("By"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("CLASS_NAME"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'example_class'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 按 XPath 查找")]),t._v("\nelement "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" driver"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("find_element"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("By"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("XPATH"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'//a[@href=\"https://example.com\"]'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("点击按钮")]),t._v("：")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[t._v("button "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" driver"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("find_element"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("By"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ID"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'submit-button'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nbutton"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("click"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("输入文本")]),t._v("：")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[t._v("input_field "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" driver"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("find_element"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("By"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("NAME"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'username'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ninput_field"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("send_keys"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'my_username'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("获取属性或文本")]),t._v("：")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[t._v("element "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" driver"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("find_element"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("By"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("CLASS_NAME"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'description'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("element"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("text"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 获取文本内容")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("element"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("get_attribute"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'href'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 获取链接")]),t._v("\n")])])])])])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("等待")]),t._v("： 网页内容可能加载较慢，可以使用显式等待：")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" selenium"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("webdriver"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("common"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("by "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" By\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" selenium"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("webdriver"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("support"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ui "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" WebDriverWait\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" selenium"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("webdriver"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("support "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" expected_conditions "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" EC\n\nwait "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" WebDriverWait"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("driver"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nelement "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" wait"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("until"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("EC"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("presence_of_element_located"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("By"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ID"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'example_id'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("窗口操作")]),t._v("：")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("设置窗口大小：")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[t._v("driver"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("set_window_size"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1200")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("800")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])]),t._v(" "),s("li",[s("p",[t._v("截图：")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[t._v("driver"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("save_screenshot"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'screenshot.png'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])])])]),t._v(" "),s("hr"),t._v(" "),s("h3",{attrs:{id:"应用实例-爬取网页内容"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#应用实例-爬取网页内容"}},[t._v("#")]),t._v(" "),s("strong",[t._v("应用实例：爬取网页内容")])]),t._v(" "),s("p",[t._v("结合 "),s("code",[t._v("BeautifulSoup")]),t._v(" 和 "),s("code",[t._v("Selenium")]),t._v("：")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" bs4 "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" BeautifulSoup\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" selenium "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" webdriver\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" selenium"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("webdriver"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("common"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("by "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" By\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 初始化 Selenium")]),t._v("\ndriver "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" webdriver"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Edge"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ndriver"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("get"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://www.python.org"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 使用 Selenium 获取页面 HTML")]),t._v("\nhtml "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" driver"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("page_source\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 使用 BeautifulSoup 解析 HTML")]),t._v("\nsoup "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" BeautifulSoup"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("html"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'html.parser'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nevents "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" soup"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("select"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'.event-widget li'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 选择侧边栏的事件列表")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" event "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" events"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    event_name "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" event"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("text\n    event_date "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" event"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("time"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("text\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string-interpolation"}},[s("span",{pre:!0,attrs:{class:"token string"}},[t._v('f"')]),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("event_date"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v(": ")]),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("event_name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\ndriver"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("quit"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("hr"),t._v(" "),s("h3",{attrs:{id:"总结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" "),s("strong",[t._v("总结")])]),t._v(" "),s("ol",[s("li",[s("strong",[t._v("BeautifulSoup")]),t._v("：\n"),s("ul",[s("li",[t._v("适合静态 HTML 的解析和数据提取。")]),t._v(" "),s("li",[t._v("主要依赖于 "),s("code",[t._v("find")]),t._v("、"),s("code",[t._v("find_all")]),t._v(" 和 "),s("code",[t._v("select")]),t._v(" 方法。")])])]),t._v(" "),s("li",[s("strong",[t._v("Selenium")]),t._v("：\n"),s("ul",[s("li",[t._v("适合动态网页的数据抓取和操作。")]),t._v(" "),s("li",[t._v("强大的浏览器自动化工具，支持点击、输入等交互操作。")])])])])])}),[],!1,null,null,null);s.default=e.exports}}]);