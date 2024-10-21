import Vue from 'vue'

import SlideProtected from './components/SlideProtected.vue'

// 仅在客户端渲染 SlideVerify
if (typeof window !== 'undefined') {
  Vue.component('SlideProtected', SlideProtected)
}
