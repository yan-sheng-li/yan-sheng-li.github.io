module.exports = {
  title: '木子-空间',
  head: [
    // 访问统计
    ['script', { async: true, src: 'https://www.googletagmanager.com/gtag/js?id=G-VTCF7WPSRK' }],
    ['script', {}, `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-VTCF7WPSRK');
      `],
  ],
  description: '各类项目汇总,涵盖JavaGUI,servlet+jsp,SSM,SpringBoot+Vue,Python,微信小程序...',
  themeConfig: {
    nav: [      
      {
        text: '🎧呼叫作者',
        items: [
          { text: '一键私聊', link: 'https://qm.qq.com/cgi-bin/qm/qr?k=NZUoWMzd3PQLWwxRGMiBNYEnVkEdNq__&jump_from=webapi&authKey=kgAofDqUzgwMCSX+UQQwxf837zMeWFGGmo4iIcbgkklW2pdfmVOlxPWAK6sMYMaC' },
          { text: 'QQ：1761724207', link: 'http://cdn.qiniu.liyansheng.top/img/20240715004059.png' },
          { text: '微信：17641244340', link: 'http://cdn.qiniu.liyansheng.top/img/20240715004147.png' },

        ]
      },
      {
        text: '💪可帮操作',
        items: [
          { text: '远程调试', link: 'http://www.liyansheng.top/remote_help/' },
          { text: '程序定做', link: 'http://www.liyansheng.top/remote_help/' },
          { text: '源码讲解', link: 'http://www.liyansheng.top/remote_help/' },
          { text: '文档代写', link: 'http://www.liyansheng.top/remote_help/' },
          { text: '项目二改', link: 'http://www.liyansheng.top/remote_help/' },
          { text: '软件安装', link: 'http://www.liyansheng.top/remote_help/' },
        ]
      },
      {
        text: '📖关于我',
        items: [
          { text: '随笔录', link: 'https://yan-sheng-li.github.io/note/' },
          { text: '木子博客', link: 'http://www.liyansheng.top/' },
          { text: 'CSDN博客', link: 'https://blog.csdn.net/weixin_44107140' },
          { text: 'GitHub', link: 'https://github.com/yan-sheng-li' },
          { text: 'Gitee', link: 'https://gitee.com/yan-sheng-li' },
          { text: '公众号《编程亿点有趣》', link: 'http://cdn.qiniu.liyansheng.top/img/2-ezgif.com-png-to-webp-converter.webp' }
        ]
      },
    ],

    sidebar: {
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
            'tourpal_manager'
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
      ]
    },
    logo: 'https://files.codelife.cc/blog/avatar/641952bc46f825e26b36fde6.jpeg?t=1709970504540&x-oss-process=image/resize,limit_0,m_fill,w_40,h_40/quality,q_92/format,webp',
  }
}