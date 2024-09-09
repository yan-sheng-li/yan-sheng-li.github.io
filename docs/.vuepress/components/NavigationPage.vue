<template>
  <div class="navigation-page">
    <!-- 搜索框 -->
    <input v-model="searchQuery" type="text" placeholder="搜索..." class="search-input" />

    <!-- 分类展示 -->
    <div v-for="(category, index) in filteredCategories" :key="index" class="category">
      <h2>{{ category.name }}</h2>
      <div class="cards-container">
        <LinkCard v-for="(link, idx) in category.links" :key="idx" :url="link.url" :title="link.title"
          :image="link.image" />
      </div>
    </div>
  </div>
</template>

<script>
import LinkCard from './LinkCard.vue'; // 引入之前的 LinkCard 组件

export default {
  components: {
    LinkCard
  },
  data() {
    return {
      searchQuery: '', // 搜索内容
      categories: [
        {
          name: '常用网站',
          links: [
          { title: 'Gitee', url: 'https://gitee.com/', image: 'http://cdn.qiniu.liyansheng.top/img/20240908023309.png' },
            { title: 'GitHub', url: 'https://github.com', image: 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png' },
            { title: 'Google', url: 'https://google.com', image: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg' },
            { title: 'Stack Overflow', url: 'https://stackoverflow.com', image: 'https://upload.wikimedia.org/wikipedia/commons/0/02/Stack_Overflow_logo.svg' }
          ]
        },
        {
          name: '开发者资源',
          links: [
            { title: '掘金', url: 'https://juejin.cn', image: 'https://lf-web-assets.juejin.cn/obj/juejin-web/xitu_juejin_web/e08da34488b114bd4c665ba2fa520a31.svg' },
            { title: 'codeimg', url: 'https://codeimg.io/', image: 'http://cdn.qiniu.liyansheng.top/img/20240909111037.png' },
            { title: 'cdnjs', url: 'https://cdnjs.com/', image: 'http://cdn.qiniu.liyansheng.top/img/20240909111111.png' },
            { title: 'jsdelivr', url: 'https://www.jsdelivr.com/', image: 'http://cdn.qiniu.liyansheng.top/img/20240909111208.png' },
            { title: 'StackBlitz(在线IDE)', url: 'https://stackblitz.com/', image: '' },
            { title: '站长素材', url: 'https://sc.chinaz.com/', image: 'http://cdn.qiniu.liyansheng.top/img/20240909111438.png' },
            { title: 'CodePen', url: 'https://codepen.io/', image: 'http://cdn.qiniu.liyansheng.top/img/20240909111702.png' },
            { title: '在线加密传输文件', url: 'https://wormhole.app/', image: 'http://cdn.qiniu.liyansheng.top/img/20240909111734.png' },
          ]
        },
        {
          name: '设计与素材',
          links: [
          // { title: '', url: '', image: '' }
            { title: '彼岸壁纸', url: 'http://www.netbian.com/', image: 'http://cdn.qiniu.liyansheng.top/img/20240909110044.png' },
            { title: '暖糖壁纸', url: 'https://www.nuantang.net/', image: 'http://cdn.qiniu.liyansheng.top/img/20240909110214.png' },
            { title: 'PNG素材', url: 'https://www.pngsucai.com/', image: 'http://cdn.qiniu.liyansheng.top/img/20240909110728.png' },
            { title: '极简壁纸', url: 'https://bz.zzzmh.cn/index', image: 'http://cdn.qiniu.liyansheng.top/img/20240909110819.png' },
          ]
        }
      ]
    };
  },
  computed: {
    // 过滤后的分类，根据搜索关键词进行过滤
    filteredCategories() {
      if (!this.searchQuery) {
        return this.categories;
      }

      const query = this.searchQuery.toLowerCase();
      return this.categories.map(category => {
        const filteredLinks = category.links.filter(link => link.title.toLowerCase().includes(query));
        return {
          ...category,
          links: filteredLinks
        };
      }).filter(category => category.links.length > 0);
    }
  }
}
</script>

<style scoped>
.navigation-page {
  max-width: 100%;
}

/* 搜索框样式 */
.search-input {
  display: block;
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
}

/* 分类容器样式 */
.category {
  margin-bottom: 40px;
}

.cards-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

</style>