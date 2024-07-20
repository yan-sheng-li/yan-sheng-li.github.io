module.exports = {
  title: '木子-空间',
  plugins: ['cursor-effects', 'go-top', 'reading-progress',require('./my-plugin'),
    'vuepress-plugin-copy-code',
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
    logo: 'https://files.codelife.cc/blog/avatar/641952bc46f825e26b36fde6.jpeg?t=1709970504540&x-oss-process=image/resize,limit_0,m_fill,w_40,h_40/quality,q_92/format,webp',
    nav: [
      {
        text: '💻编程笔记',
        items: [
          { text: 'Java', link: '/Java/' },
          { text: 'Java EE', link: '/Javaee/' },
          { text: 'MySQL', link: '/MySQL/' },
          { text: 'SpringBoot', link: '/springboot/' },
          { text: 'Myabtis', link: '/myabtis/' },
          { text: 'VuePress', link: '/vuepress/' },
          { text: 'Swing', link: '/swing/' },
          { text: 'Git', link: '/Git/' },
          { text: 'Docker', link: '/docker/' },
          { text: 'Python', link: '/Python/' },
          { text: 'Js库集', link: '/Js/' },
          { text: 'Bootstrap', link: '/bootstrap/' },
          {
            text: 'report',
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
        text: '💪可帮操作',
        items: [
          { text: '远程调试', link: 'https://www.liyansheng.top/blog/remote_help/' },
        ]
      },
      {
        text: '🚀关于我',
        items: [
          {
            text: '联系方式',
            items: [
              { text: '一键私聊', link: 'https://qm.qq.com/cgi-bin/qm/qr?k=NZUoWMzd3PQLWwxRGMiBNYEnVkEdNq__&jump_from=webapi&authKey=kgAofDqUzgwMCSX+UQQwxf837zMeWFGGmo4iIcbgkklW2pdfmVOlxPWAK6sMYMaC' },
              { text: 'QQ：1761724207', link: 'http://cdn.qiniu.liyansheng.top/img/20240715004059.png' },
              { text: '微信：17641244340', link: 'http://cdn.qiniu.liyansheng.top/img/20240715004147.png' },
            ]
          },
          {
            text: '更多',
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
        text: '💖爱好',
        items: [
          { text: '吉他（探索中）', link: '/guitar/' },
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
            '文件操作-简易'
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
            '插件-代码复制'
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
            '整合sa-token权限控制'

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
            '应用安装.md',
            'MySQL配置文件',

          ]
        },
      ],
      '/Java/': [
        {
          title: 'Java',
          collapsable: false,
          children: [
            'JDBC常用方法封装',
            '使用JFileChooser'
          ]
        },
      ],
      '/Git/': [
        {
          title: 'Git',
          collapsable: false,
          children: [
            'git快速入门',
            '分支改进'
          ]
        },
      ],
      '/Python/': [
        {
          title: 'Python',
          collapsable: false,
          children: [
            '常用技法'
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
            '基于JQuery的步骤条'

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
      ],
      '/report/': [
        {
          title: 'Report',
          collapsable: false,
          children: [
            '用例图画法',
            '参考文献'
          ]
        },
      ],
      '/guitar/': [
        {
          title: '吉他',
          collapsable: false,
          children: [
            '基础练习'
          ]
        },
      ],
      '/Javaee/': [
        {
          title: 'JavaEE',
          collapsable: false,
          children: [
            '基础写法',
            '实操案例'
          ]
        },
      ],
      '/myabtis/': [
        {
          title: 'Myabtis',
          collapsable: false,
          children: [
            'myabtis-plus动态组合SQL'
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
          // title: '------------',
          collapsable: false,
          children: [
            'customized'
          ]
        },
        {
          title: '------Java GUI------',
          collapsable: false,
          children: [
            'supermarket_sys',
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
            'prop_ease',
            'select_course_sys',
            'parcel_manager',
            'tourpal_manager',
            'classroom_manager'
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
            'travel_ease'
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
            'Participle_analysis'
          ]
        },
        {
          title: '------小程序------',
          collapsable: false,
          children: [
            'hospital_mini',
          ]
        }
      ],
    },
  }
}