<template>
    <div id="app">
      <input
        type="text"
        v-model="searchQuery"
        placeholder="搜索菜品..."
        class="search-input"
      />
      <div class="dish-grid">
        <div v-for="dish in filteredDishes" :key="dish.name" class="dish-item">
          <img :src="dish.image" :alt="dish.name" class="dish-image" />
          <p class="dish-name">{{ dish.name }}</p>
        </div>
      </div>
    </div>
  </template>
  <script>
  export default {
    data() {
      return {
        searchQuery: '', // 搜索框中的输入内容
        dishes: [
          { name: '五花肉炒辣椒', image: 'http://cdn.qiniu.liyansheng.top/img/a6ca23455bc46cdaac869a0f84b604f.jpg' },
          { name: '宫保鸡丁', image: 'http://cdn.qiniu.liyansheng.top/img/微信图片_20240902105757.jpg' },
          { name: '牛柳炒土豆条', image: 'http://cdn.qiniu.liyansheng.top/img/微信图片_20240902110701.jpg' },
          { name: '干锅土豆片', image: 'http://cdn.qiniu.liyansheng.top/img/微信图片_20240902110703.jpg' },
          { name: '麻辣鸡丝', image: 'http://cdn.qiniu.liyansheng.top/img/微信图片_20240902110806.jpg' },
          { name: '葱炒鸡腿肉', image: 'http://cdn.qiniu.liyansheng.top/img/微信图片_20240902110807.jpg' },
          { name: '糖醋鸡胸肉肉', image: 'http://cdn.qiniu.liyansheng.top/img/微信图片_20240902110808.jpg' },
          {name:'青椒炒肉',image:'http://cdn.qiniu.liyansheng.top/img/微信图片_20240902110809.jpg'},
          {name:'卤牛肉',image:'http://cdn.qiniu.liyansheng.top/img/微信图片_20240902110810.jpg'},
          {name:'蛤蛎酸虾滑',image:'http://cdn.qiniu.liyansheng.top/img/微信图片_20240902110811.jpg'},
          {name:'香辣翅根',image:'http://cdn.qiniu.liyansheng.top/img/微信图片_20240902110812.jpg'},
          {name:'爆炒大虾',image:'http://cdn.qiniu.liyansheng.top/img/微信图片_20240902110813.jpg'},
          {name:'清炒小白菜',image:'http://cdn.qiniu.liyansheng.top/img/微信图片_20240902110814.jpg'},
          {name:'虎皮青椒',image:'http://cdn.qiniu.liyansheng.top/img/微信图片_20240902110815.jpg'},
          {name:'蒜蓉蟹柳',image:'http://cdn.qiniu.liyansheng.top/img/微信图片_202409021108061.jpg'},
          {name:'鱼香肉丝',image:'http://cdn.qiniu.liyansheng.top/img/微信图片_202409021108071.jpg'},
          {name:'土豆煎牛排',image:'http://cdn.qiniu.liyansheng.top/img/微信图片_202409021108081.jpg'},
          {name:'椒盐虾仁',image:'http://cdn.qiniu.liyansheng.top/img/微信图片_202409021108082.jpg'},
          {name:'香煎牛排',image:'http://cdn.qiniu.liyansheng.top/img/微信图片_202409021108091.jpg'},
          {name:'酱大骨',image:'http://cdn.qiniu.liyansheng.top/img/微信图片_202409021108092.jpg'},
          {name:'红烧猪蹄',image:'http://cdn.qiniu.liyansheng.top/img/微信图片_202409021108101.jpg'},
          {name:'葱烧豆腐',image:'http://cdn.qiniu.liyansheng.top/img/微信图片_202409021108111.jpg'},
          {name:'糖醋虾仁',image:'http://cdn.qiniu.liyansheng.top/img/微信图片_202409021108112.jpg'},
          {name:'香酥炸翅',image:'http://cdn.qiniu.liyansheng.top/img/微信图片_202409021108121.jpg'},
          {name:'糖醋茄子',image:'http://cdn.qiniu.liyansheng.top/img/微信图片_202409021108131.jpg'},
          {name:'蒸香巴沙鱼',image:'http://cdn.qiniu.liyansheng.top/img/微信图片_202409021108132.jpg'},
          {name:'黄瓜炒蛋',image:'http://cdn.qiniu.liyansheng.top/img/微信图片_202409021108141.jpg'},
          {name:'娃娃菜焖豆腐',image:'http://cdn.qiniu.liyansheng.top/img/微信图片_202409021108142.jpg'},
          {name:'凉拌豆腐皮',image:'http://cdn.qiniu.liyansheng.top/img/微信图片_202409021108151.jpg'},
          {name:'洋葱炒牛肉',image:'http://cdn.qiniu.liyansheng.top/img/微信图片_202409021108152.jpg'},
        //   {name:'',image:''},
          // 更多菜品
        ],
      };
    },
    computed: {
      filteredDishes() {
        // 根据搜索关键字模糊匹配菜名
        return this.dishes.filter((dish) =>
          dish.name.includes(this.searchQuery)
        );
      },
    },
  };
  </script>

<style scoped>
#app {
  padding: 20px;
}

.search-input {
  display: block;
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  font-size: 16px;
  box-sizing: border-box;
  border-radius: 5px;
  border: 1px solid #ccc;
}

.dish-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.dish-item {
  width: calc(33.33% - 20px); /* 每行6个菜品 */
  box-sizing: border-box;
  text-align: center;
  padding: 5px;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.dish-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.dish-image {
  width: 100%;
  height: auto;
  border-radius: 10px;
}

.dish-name {
  margin-top: 15px;
  font-size: 18px;
  font-weight: bold;
  color: #333;
}
</style>

  
  