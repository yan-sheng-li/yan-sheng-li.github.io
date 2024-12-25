module.exports = {
  title: '木子空间',
  plugins: ['cursor-effects', 'go-top', 'reading-progress', require('./my-plugin'),
    'vuepress-plugin-copy-code',
    [
      '@vuepress/plugin-medium-zoom',
      {
        selector: 'img',  // 选择器，应用于哪些图片
        options: {
          margin: 16,       // 图片缩放时与页面边缘的最小距离
          scrollOffset: 0,  // 滚动偏移量，默认为 40
        },
      },
    ],
    [
      'dynamic-title',
      {
        showIcon: '/favicon.ico',
        showText: '\(@^0^@)/ 欢迎回来！！',
        hideIcon: '/failure.ico',
        hideText: '(っ °Д °;)っ 不要走呀！',
        recoverTime: 2000,
      },
    ],
    ['sitemap', {
      hostname: 'http://www.liyansheng.top'
    }]
  ],
  head: [
    // 访问统计
    ['script', { async: true, src: 'https://www.googletagmanager.com/gtag/js?id=G-VTCF7WPSRK' }],
    ['script', {}, `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-VTCF7WPSRK');
      `],
    ['meta', { name: 'description', content: '项目，笔记，教程，找起来更快捷方便！' }],
    ['meta', { name: 'keywords', content: '编程知识, 项目案例, 技术文档,难点解析' }],
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'baidu-site-verification', content: 'codeva-ZjLnH1tXq1' }]
  ],
  description: '各类项目汇总,涵盖JavaGUI,servlet+jsp,SSM,SpringBoot+Vue,Python,微信小程序...',
  themeConfig: {
    lastUpdated: 'Last Updated', // 或者用其他自定义提示文字
    logo: 'http://cdn.qiniu.liyansheng.top/img/graphic-4005286_640.png',
    nav: [
      {
        text: '精品网址',
        link: '/collection/'
      },
      {
        text: '💻 编程笔记',
        items: [
          {
            text: 'Java',
            items: [
              { text: 'Java SE', link: '/Java/' },
              { text: 'Java EE', link: '/Javaee/' },
              { text: 'Spring Boot', link: '/springboot/' },
              { text: 'MyBatis', link: '/mybatis/' }, // 修正拼写错误
              { text: 'Swing', link: '/swing/' },
            ]
          },
          {
            text: '数据库',
            items: [
              { text: 'MySQL', link: '/MySQL/' },
            ]
          },
          {
            text: '前端',
            items: [
              { text: 'VuePress', link: '/vuepress/' },
              { text: 'JavaScript库', link: '/Js/' }, // 修改标题更具体
              { text: 'Bootstrap', link: '/bootstrap/' },
              { text: 'Vue', link: '/vue/' },
            ]
          },
          {
            text: '版本控制与容器化',
            items: [
              { text: 'Git', link: '/Git/' },
              { text: 'Docker', link: '/docker/' },
            ]
          },
          {
            text: '其他',
            items: [
              { text: 'Python', link: '/Python/' },
              { text: 'ElasticSearch', link: '/ElasticSearch/' },
              { text: 'Kafka', link: '/kafka/' },
              { text: 'Linux', link: '/Linux/' },
              { text: '微信小程序', link: '/微信小程序/' },
              { text: 'Node', link: '/node/' }
            ]
          },
          {
            text: 'Report',
            items: [
              { text: '一般', link: '/report/' },
            ]
          },
        ]
      },
      {
        text: '📦项目合集',
        link: '/project/'
      },
      {
        text: '🔥远程调试🔥',
        link: 'https://www.liyansheng.top/blog/remote_help/'
      },
      {
        text: '⚙工具环境',
        items: [
          {
            text: '酷玩机',
            items: [
              { text: '科学上网', link: 'https://www.liyansheng.top/blog/posts/40617.html' },
              { text: '浏览器插件', link: '/tool/Plugins' },
              { text: '免费看电视', link: 'https://www.liyansheng.top/blog/posts/18883.html' },
              { text: '搭建内网穿透', link: 'https://www.liyansheng.top/blog/posts/57913.html' },
            ]
          }
        ]
      },
      {
        text: '🚀滴滴作者',
        items: [
          {
            text: '联系方式',
            items: [
              { text: '一键私聊', link: 'https://qm.qq.com/cgi-bin/qm/qr?k=NZUoWMzd3PQLWwxRGMiBNYEnVkEdNq__&jump_from=webapi&authKey=kgAofDqUzgwMCSX+UQQwxf837zMeWFGGmo4iIcbgkklW2pdfmVOlxPWAK6sMYMaC' },
              { text: '加QQ', link: 'http://cdn.qiniu.liyansheng.top/img/20240715004059.png' },
              { text: '加微信', link: 'http://cdn.qiniu.liyansheng.top/img/20240715004147.png' },
              { text: '打赏支持', link: 'http://cdn.qiniu.liyansheng.top/img/微信图片_20240905220703.jpg' },
            ]
          },
          {
            text: '足迹',
            items: [
              { text: '📗木子博客', link: 'http://www.liyansheng.top/blog' },
              { text: '📙CSDN博客', link: 'https://blog.csdn.net/weixin_44107140' },
              { text: 'GitHub', link: 'https://github.com/yan-sheng-li' },
              { text: 'Gitee', link: 'https://gitee.com/yan-sheng-li' },
              { text: '公众号《编程亿点有趣》', link: 'http://cdn.qiniu.liyansheng.top/img/2-ezgif.com-png-to-webp-converter.webp' }
            ]
          }
        ]
      },
      {
        text: '💖兴趣爱好',
        items: [
          { text: '吉他（探索中）', link: '/guitar/' },
          { text: '曲谱', link: '/qupu/' },
          { text: '菜谱', link: '/cooking/' },
        ]
      },
    ],

    sidebar: {
      '/swing/': [
        {
          title: 'swing',
          collapsable: false,
          children: [
            '使用 Java Swing 和 XChart 创建多种图表',
            '使用 JComboBox 在 Java Swing 中创建下拉列表',
            '表格获取勾选行',
            '实现简单的CRUD',
            '日期时间选择器',
            'table表格数据导出',
            '表格数据导出到excel表格',
            'ResultSet导出到execl表格',
            '表格自定义颜色',
            '动态时间显示到窗口',
            'excel数据导入到MySQL',
            '主题美化',
            '文件操作-简易',
            '自定义JPanel自适应显示图片'
          ]
        },
      ],
      '/vuepress/': [
        {
          title: 'VuePress',
          collapsable: false,
          children: [
            'Github部署',
            '创建多级导航菜单',
            '上次更新时间',
            'Git仓库和编辑链接',
            '自定义访问域名',
            '光标点击爆炸效果',
            '标签页自定义-进入离开问候',
            '插件-返回顶部',
            '插件-顶部阅读进度',
            'URL重定向',
            '插件-代码复制',
            '插件-图片缩放',
            '直写html页'
          ]
        },
      ],
      '/springboot/': [
        {
          title: 'SpringBoot',
          collapsable: false,
          children: [
            '项目打jar包-docker部署',
            '整合knife4j',
            '远程仓库源',
            '常规整合',
            '全局异常处理',
            '定时任务',
            '请求转发',
            '兼容JSP页面',
            '整合sa-token权限控制',
            '数据导入导出',
            '绑定配置文件中变量',
            'Thymeleaf和JavaScript在前后端交互中获取后端值',
            '整合IK分词器',
            '整合kafka',
            'thymeleaf常用语法',
            '配置文件加密',
            '整合邮件发送',
            '整合七牛云图床',
            '整合参数校验',
            '整合验证码',
            '整合xxl-job定时任务',
            '服务开启HTTPS访问',
            '配置热部署',
            '文件上传-下载'

          ]
        },
        {
          title: '问题杂症',
          collapsable: false,
          children: [
            '打包的jar启动报错问题',
            '静态资源访问不到'
          ]
        },
      ],
      '/MySQL/': [
        {
          title: 'MySQL',
          collapsable: false,
          children: [
            '应用安装',
            'MySQL配置文件',
            '全文搜索',
            '密码重置',
            '设置字符编码集',
            '外键约束行为',
            '数据库设计三大范式-白话版',
            '关于索引',
            '连接数据库认证出错',
            '命令行备份数据库'

          ]
        },
      ],
      '/kafka/': [
        {
          title: 'Kafka',
          collapsable: false,
          children: [
            '容器启动'
          ]
        },
      ],
      '/微信小程序/': [
        {
          title: '微信小程序',
          collapsable: false,
          children: [
            '微信登录'
          ]
        },
      ],
      '/Linux/': [
        {
          title: 'Linux',
          collapsable: false,
          children: [
            '初学shell常用操作',
            '玩转Linux虚拟机',
            'pm2进程管理工具'
          ]
        },
      ],
      '/vue/': [
        {
          title: 'Vue',
          collapsable: false,
          children: [
            '深入理解Vuex',
            '自定义axios',
            'map三级下钻',
            '整合应用VueLeaflet',
            '二维码生成器应用',
            '集成滑动验证码'
          ]
        },
      ],
      '/Java/': [
        {
          title: 'Java',
          collapsable: false,
          children: [
            '实现定时任务',
            'JDBC常用方法封装',
            '使用JFileChooser',
            '文字转化图片',
            '普通项目打jar'
          ]
        },
      ],
      '/Git/': [
        {
          title: 'Git',
          collapsable: false,
          children: [
            'git快速入门',
            '分支改进',
            '通过 GitHub 托管静态文件',
            '本地初始库与远程库已有库合并',
            '暂存临时栈',
            '写有意义的提交记录说明'
          ]
        },
      ],
      '/ElasticSearch/': [
        {
          title: 'ElasticSearch',
          collapsable: false,
          children: [
            '快速入门与部署'
          ]
        },
      ],
      '/Python/': [
        {
          title: 'Python',
          collapsable: false,
          children: [
            '常用技法',
            '基于Flask写API'
          ]
        },
        {
          title: '爬虫',
          collapsable: false,
          children: [
            'BeautifulSoup运用',
            'Selenium运用',
            'requests+正则匹配'
          ]
        },
      ],
      '/Js/': [
        {
          title: 'Js库集',
          collapsable: false,
          children: [
            '随机头像生成',
            'sweetalert2',
            'slidejs幻灯片',
            'bootstrap table插件',
            'Leaflet-地图应用',
            'Jodit富文本编辑器',
            'select2下拉选择组件',
            '网页静态表格数据导出',
            'viewjs点击图片放大预览',
            '消息弹窗',
            'fullcalendar日历组件',
            'bs-stepper步进组件库',
            'timeagojs时间xxx前',
            'driverjs页面引导',
            'FullPagejs图片全面屏网页',
            '基于JQuery的步骤条',
            'Dropzonejs实现文件上传',
            'flatpicker时间选择',
            '三级地图跳转'

          ]
        },
        {
          title: '片段',
          collapsable: false,
          children: [
            '记录网页浏览时长',
            '实现网页弹幕',
            '登录页-模板',
            '首页-模板',
            '页面-组件-自由拖放',
            '文字-转-头像',
            '单html页面-vue-案例',
            '单html页面-elementUI-案例',
            '404页面-模板'
          ]
        },
        {
          title: '小知识',
          collapsable: false,
          children: [
            '解构赋值'
          ]
        },
      ],
      '/report/': [
        {
          title: 'Report',
          collapsable: false,
          children: [
            '用例图画法',
            '参考文献',
            '课程设计报告-模板'
          ]
        },
      ],
      '/node/': [
        {
          title: 'Node相关',
          collapsable: false,
          children: [
            // '测试',
            // '快速写API',
            '常用命令'
          ]
        },
      ],
      '/guitar/': [
        {
          title: '吉他',
          collapsable: false,
          children: [
            '基础练习',
            '音阶',
            '节奏',
            '音阶练习曲',
            '流行歌简谱'
          ]
        },
      ],
      '/qupu/': [
        {
          title: '曲谱',
          collapsable: false,
          children: [
            '许巍-故乡-G调',
            '刘若英-后来-C调',
            '许巍-蓝莲花-D调',
            '朴树-平凡之路-G调',
            '许巍-曾经的你-电吉他独奏',

          ]
        },
      ],
      '/Javaee/': [
        {
          title: 'JavaEE',
          collapsable: false,
          children: [
            '基础写法',
            '实操案例',
            '对象属性复制',
            '使用tomcat部署可能遇到的问题',
            'C标签库语法',
            '全局过滤器',
            'Commons-DbUtils库',
            '数据分页实现-案例',
            '密码加密',
            '数据导入导出',
            '简易验证码',
            '页面跳转值传递'
          ]
        },
      ],
      '/mybatis/': [
        {
          title: 'Mybatis',
          collapsable: false,
          children: [
            'mybatis-plus动态组合SQL',
            'MyBatis 自带的动态 SQL 语法'
          ]
        },
      ],
      '/bootstrap/': [
        {
          title: 'Bootstrap',
          collapsable: false,
          children: [
            '常用组件笔记'
          ]
        },
      ],
      '/docker/': [
        {
          title: 'Docker',
          collapsable: false,
          children: [
            '镜像加速'
          ]
        },
      ],
      '/project/': [
        {
          title: '------定制------',
          collapsable: false,
          children: [
            '微信与支付宝的收款码二合一',
            '博客or个人站点or网站-搭建',
            '项目-预测-分析评估-扩展'
          ]
        },
        {
          title: '------Java------',
          collapsable: false,
          children: [
            'supermarket_sys',
            'supermarket_sys_plus',
            'bookinfo_sys',
            'meeting_sys',
            'mall_seler',
            'song_sys',
            'student_score',
            'bank_atm',
            'game_sys',
            'task_sys',
            'book_simple',
            'goods_sys',
            'parking_sys',
            'stu_status',
            'lend_book_console',
            'lend_book',
            'sport_equipment',
            'personal_sys',
            'attendance_sys',
            'class_book',
            'visit-appointment-gui',
            'ball_player',
            'teacher_info_sys_console',
            'hotel_gui',
            'hotel_gui_plus',
            'library_gui',
            'course_mate_gui',
            'express_print',
            'snake_game',
            'car_ease',
            'score_sys',
            'stu_info',
            'book_lend',
            'wage_sys',
            '影院购票管理系统',
            'prop_ease',
            'select_course_sys',
            'parcel_manager',
            'tourpal_manager',
            'classroom_manager',
            '电子日历记事本',
            '在线聊天室',
            '在线聊天室-2.0',
            '贪吃蛇-窗口游戏',
            '扫雷-小游戏',
            '扫雷-小游戏-2.0',
            '仓储管理系统',
            '学生信息管理2',
            '模拟购物系统',
            '飞机订票系统',
            '汽车租赁管理系统',
            '医院病房管理系统',
            '图书借阅管理',
            '外聘教师管理系统'
          ]
        },
        {
          title: '------Java Web------',
          collapsable: false,
          children: [
            'sams',
            'vbos',
            'rent_car',
            'readVerse',
            'face_api',
            'easy_book_web',
            'file_share',
            'school_help',
            'sport_meeting',
            'lend_book_web',
            'stu_club',
            'hotel_boot',
            'ordering_meal_web',
            'bookstore_vue',
            'social_circle_web',
            'flower_store',
            'news_web',
            'employee_butler',
            'party_member',
            'book_info_web',
            'ticket_tune',
            'work_connect',
            'carrer_cloud',
            'travel_ease',
            '虚拟空调自由',
            '博客系统',
            '体质检测管理系统',
            '酒店管理系统',
            '教材领取管理系统',
            '社区垃圾分类管理系统',
            '个人博客网站',
            '畅读新闻圈'
          ]
        },
        {
          title: '------Python------',
          collapsable: false,
          children: [
            'book_py',
            'ticket_py',
            'atm_py',
            'Reptiles_douban',
            'Participle_analysis',
            '简历模板批量采集'
          ]
        },
        {
          title: '------小程序------',
          collapsable: false,
          children: [
            'hospital_mini',
          ]
        },
        {
          title: '------个性------',
          collapsable: false,
          children: [
            '网页中添加看板娘',
          ]
        },

      ],
    },
  }
}