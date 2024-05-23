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
              'song_sys'
            ]
          }
        ]
      }
    }
  }