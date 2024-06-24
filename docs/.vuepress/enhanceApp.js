// .vuepress/enhanceApp.js
import MyGlobalComponent from './components/MyGlobalComponent.vue'

export default ({ Vue }) => {
  // 全局注册组件
  Vue.component('MyGlobalComponent', MyGlobalComponent)
}
