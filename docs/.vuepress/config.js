module.exports = {
    title: '👨‍💻木子-空间',
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
    description: '实用技术要点汇总',
    themeConfig: {
      nav: [
        // { text: '🏠首页', link: '/' },
        { text: '🎧呼叫作者', link: 'https://qm.qq.com/cgi-bin/qm/qr?k=NZUoWMzd3PQLWwxRGMiBNYEnVkEdNq__&jump_from=webapi&authKey=kgAofDqUzgwMCSX+UQQwxf837zMeWFGGmo4iIcbgkklW2pdfmVOlxPWAK6sMYMaC' },
        { text: '📦项目大全', link: '/project/' },
        { text: '🐞远程调试', link: 'http://liyansheng.top/remote_help/' }
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
              'hotel_gui'
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
              'social_circle_web'
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
      }
    }
  }