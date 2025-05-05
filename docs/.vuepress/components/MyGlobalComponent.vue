<template>
  <div v-html="htmlContent"></div>
</template>

<script>
export default {
  name: 'MyGlobalComponent',
  computed: {
    htmlContent() {
      return `
        <div>
          <span>
          <a href="http://www.liyansheng.top/blog"><img src="https://img.shields.io/badge/木子空间-自营博客-00dfbf" alt="自营博客"></a>
          <a href="https://yan-sheng-li.github.io/project/"><img src="https://img.shields.io/badge/木子空间-项目&资料-1e90ff" alt="项目合集"></a>
          <a href="https://blog.csdn.net/weixin_44107140"><img src="https://img.shields.io/badge/木子空间-CSDN&粉丝1.5w+-FC5531" alt="CSDN博客"></a>
          <a href="https://gitee.com/yan-sheng-li"><img src="https://img.shields.io/badge/木子空间-Gitee-orange" alt="Gitee"></a>
          <a href="https://github.com/yan-sheng-li"><img src="https://img.shields.io/badge/木子空间-GitHub-black" alt="GitHub"></a>
          <img src="https://img.shields.io/badge/木子空间-公众号《编程亿点有趣》&粉丝6k+-brightgreen" alt="公众号">
          <a href="https://qm.qq.com/cgi-bin/qm/qr?k=NZUoWMzd3PQLWwxRGMiBNYEnVkEdNq__&jump_from=webapi&authKey=kgAofDqUzgwMCSX+UQQwxf837zMeWFGGmo4iIcbgkklW2pdfmVOlxPWAK6sMYMaC"><img src="https://img.shields.io/badge/木子空间-QQ社群(450+人)-18a2ea" alt="QQ Group"></a>
          <img src="https://img.shields.io/badge/博主-QQ：1761724207-29a1db" alt="QQ">
          <img src="https://img.shields.io/badge/博主-微信：17641244340-07c261" alt="微信">
          <a href="https://www.xiaohongshu.com/user/profile/668f634100000000030315a1"><img src="https://img.shields.io/badge/木子空间-小红书-FF2842" alt="小红书"></a>
          <a href="http://cdn.qiniu.liyansheng.top/img/20250423150441.png"><img src="https://img.shields.io/badge/木子空间-闲鱼-ffe10f" alt="闲鱼"></a>
          <a href="http://cdn.qiniu.liyansheng.top/img/20250423145452.png"><img src="https://img.shields.io/badge/木子空间-小程序商店-green" alt="小程序商店"></a>
          </span>
        </div>
      `;
    }
  }
}
</script>
