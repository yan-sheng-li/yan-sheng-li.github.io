// path: docs/.vuepress/enhanceApp.js
import MyGlobalComponent from './components/MyGlobalComponent.vue'

import gzh from './components/gzh.vue'
import ScrollingNotice from './components/ScrollingNotice.vue'
import CustomFooter from './components/CustomFooter.vue'
import Find from './components/Find.vue'
import Cook from './components/Cook.vue'
import PasswordProtected from './components/PasswordProtected.vue'
import SlideVerify from 'vue-monoplasty-slide-verify';
import SlideProtected from './components/SlideProtected.vue'
import FloatingImage from './components/FloatingImage.vue'
import PaymentButton from './components/PaymentButton.vue'
import KeywordTip from './components/KeywordTip.vue'

// 只在浏览器端才加载 Toast 插件和样式
let Toast
if (typeof window !== 'undefined') {
  Toast = require("vue-toastification").default
  require("vue-toastification/dist/index.css")
}

// 新增：创建客服按钮的函数（只在浏览器端会被调用）
function createCustomerServiceButton() {
  const btn = document.createElement('div');
  btn.innerHTML = `
    <span class="cs-text">联系博主🚀</span>
    <div class="cs-pulse"></div>
    <div class="cs-tooltip">
      <img src="http://cdn.qiniu.liyansheng.top/img/image-20250723143552500.png" alt="联系博主" class="cs-tooltip-img">
    </div>
  `;
  btn.className = 'customer-service-btn';

  // 点击事件
  btn.onclick = () => {
    window.open('https://qm.qq.com/cgi-bin/qm/qr?k=NZUoWMzd3PQLWwxRGMiBNYEnVkEdNq__&jump_from=webapi&authKey=kgAofDqUzgwMCSX+UQQwxf837zMeWFGGmo4iIcbgkklW2pdfmVOlxPWAK6sMYMaC', '_blank');
    btn.classList.add('cs-click');
    setTimeout(() => btn.classList.remove('cs-click'), 300);
  };

  // 鼠标悬浮控制
  btn.addEventListener('mouseenter', () => {
    btn.classList.add('cs-hover');
    const tooltip = btn.querySelector('.cs-tooltip');
    tooltip.style.display = 'block';
  });

  btn.addEventListener('mouseleave', () => {
    btn.classList.remove('cs-hover');
    const tooltip = btn.querySelector('.cs-tooltip');
    tooltip.style.display = 'none';
  });

  document.body.appendChild(btn);
}

export default ({ Vue, isServer }) => {
  // 全局注册组件
  Vue.component('MyGlobalComponent', MyGlobalComponent);
  Vue.component('gzh', gzh)
  Vue.component('Find', Find)
  Vue.component('PasswordProtected', PasswordProtected)
  Vue.component('Cook', Cook)
  Vue.component('ScrollingNotice', ScrollingNotice)
  Vue.component('CustomFooter', CustomFooter)
  Vue.use(SlideVerify);
  Vue.component('SlideProtected', SlideProtected)
  Vue.component('FloatingImage', FloatingImage);
  Vue.component('PaymentButton', PaymentButton)
  Vue.component('KeywordTip', KeywordTip)

  // 只在客户端注册 Toast 插件
  if (!isServer && Toast) {
    Vue.use(Toast, {
      position: "top-right",
      timeout: 10000,
      closeOnClick: true,
      pauseOnHover: true,
    });
  }

  // 只在客户端挂载客服按钮
  if (!isServer) {
    window.addEventListener('DOMContentLoaded', createCustomerServiceButton);
  }
}

// jQuery 相关逻辑也只在浏览器端执行
import $ from "jquery";

if (typeof window !== "undefined") {
  window.$ = $;
  // 插入不蒜子统计脚本
  const script = document.createElement('script')
  script.src = 'https://busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js'
  script.async = true
  document.body.appendChild(script)
}
