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
        { text: '🏠首页', link: '/' },
        { text: '📦项目大全', link: '/project/' },
        { text: '🐞远程调试', link: 'http://liyansheng.top/remote_help/' }
      ],

      sidebar: {
        '/project/': [
          {
            title: '------✅已完结------',
            collapsable: false,
            children: [
              'sams',
              'supermarket_sys',
              'bookinfo_sys',
              'meeting_sys',
              'vbos',
              'song_sys',
              'bank_atm',
              'game_sys',
              'task_sys',
              'book_simple',
              'goods_sys',
              'parking_sys',
              'stu_status',
              'school_help',
              'lend_book_console',
              'lend_book',
              'rent_car'
            ]
          },
          {
            title: '------🎉预更新------',
            collapsable: false,
            children: [
              'travel_ease',
              'readVerse',
              'personal_sys',
              'stu_score'
            ]
          }
        ]
      }
    }
  }