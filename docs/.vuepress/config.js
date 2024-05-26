module.exports = {
    title: '技术探索空间',
    description: '实用技术要点汇总',
    themeConfig: {
      nav: [
        { text: '首页', link: '/' },
        { text: '项目一览', link: '/project/' },
        { text: '博客', link: 'http://liyansheng.top/' }
      ],

      sidebar: {
        '/project/': [
          {
            title: '已完结',
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
              'school_help'
            ]
          },
          {
            title: '预更新',
            collapsable: false,
            children: [
              'travel_ease',
              'readVerse',
              'lend_book'
            ]
          }
        ]
      }
    }
  }