// .vuepress/enhanceApp.js
import MyGlobalComponent from './components/MyGlobalComponent.vue'

import gzh from './components/gzh.vue'
import ScrollingNotice from './components/ScrollingNotice.vue'
import CustomFooter from './components/CustomFooter.vue'



export default ({ Vue }) => {
  // 全局注册组件
  Vue.component('MyGlobalComponent', MyGlobalComponent);
  Vue.component('gzh', gzh)
  Vue.component('ScrollingNotice', ScrollingNotice)
  Vue.component('CustomFooter', CustomFooter)
}
