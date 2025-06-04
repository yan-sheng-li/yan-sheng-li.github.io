// .vuepress/enhanceApp.js
import MyGlobalComponent from './components/MyGlobalComponent.vue'

import gzh from './components/gzh.vue'
import ScrollingNotice from './components/ScrollingNotice.vue'
import CustomFooter from './components/CustomFooter.vue'
import S from './components/s.vue'
import Cook from './components/Cook.vue'
import PasswordProtected from './components/PasswordProtected.vue'
import SlideVerify from 'vue-monoplasty-slide-verify';
import SlideProtected from './components/SlideProtected.vue'
import FloatingImage from './components/FloatingImage.vue'
import PaymentButton from './components/PaymentButton.vue'
// 引入 Toast 插件和样式
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";





export default ({ Vue }) => {
  // 全局注册组件
  Vue.component('MyGlobalComponent', MyGlobalComponent);
  Vue.component('gzh', gzh)
  Vue.component('S', S)
  Vue.component('PasswordProtected', PasswordProtected)
  Vue.component('Cook', Cook)
  Vue.component('ScrollingNotice', ScrollingNotice)
  Vue.component('CustomFooter', CustomFooter)
  Vue.use(SlideVerify);
  Vue.component('SlideProtected', SlideProtected)
  Vue.component('FloatingImage', FloatingImage);
  Vue.component('PaymentButton', PaymentButton)
  // 注册 Toast 插件
  Vue.use(Toast, {
    // 可选的配置项
    position: "top-right",
    timeout: 10000,
    closeOnClick: true,
    pauseOnHover: true,
  });
}

import $ from "jquery";

if (typeof window !== "undefined") {
  window.$ = $;
}