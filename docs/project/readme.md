
<ScrollingNotice />
# 👈左侧边栏，切换项目

<template>
  <div id="carousel-container">
  <client-only>
    <carousel-3d :autoplay="true" :autoplay-timeout="2500" :width="400" :height="270" :display="3" :perspective="35" :space="200">
      <slide v-for="(slide, i) in slides" :index="i" :key="i">
        <!-- 使用插槽来定制每张幻灯片 -->
        <template v-slot="{ index, isCurrent, leftIndex, rightIndex }">
          <div class="slide-content" :class="{ current: isCurrent, onLeft: leftIndex === index, onRight: rightIndex === index }">
            <img :data-index="index" :src="slide.src" :alt="slide.alt" />
            <div v-if="isCurrent" class="caption">{{ slide.caption }}</div>
          </div>
        </template>
      </slide>
    </carousel-3d>
  </client-only>
  </div>
</template>

[一键联系博主](https://qm.qq.com/cgi-bin/qm/qr?k=NZUoWMzd3PQLWwxRGMiBNYEnVkEdNq__&jump_from=webapi&authKey=kgAofDqUzgwMCSX+UQQwxf837zMeWFGGmo4iIcbgkklW2pdfmVOlxPWAK6sMYMaC)

[加QQ](http://cdn.qiniu.liyansheng.top/img/20240715004059.png)

[加微信](http://cdn.qiniu.liyansheng.top/img/20240715004147.png)


<script>
import { Carousel3d, Slide } from "vue-carousel-3d";

export default {
  components: {
    Carousel3d,
    Slide,
  },
  data() {
    return {
      slides: [
        { src: "http://cdn.qiniu.liyansheng.top/img/20241102120624.png", alt: "Image 1", caption: "" },
        { src: "http://cdn.qiniu.liyansheng.top/img/20241102121138.png", alt: "Image 2", caption: "" },
        { src: "http://cdn.qiniu.liyansheng.top/img/20241102121343.png", alt: "Image 2", caption: "" }
      ],
    };
  },
};
</script>

<style scoped>
.theme-default-content:not(.custom){
    max-width: 1200px;
}


#carousel-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}

/* 定义每个 slide 的样式 */
.slide-content {
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.5s;
}

.slide-content img {
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 10px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
  transition: transform 0.5s;
}

.slide-content.current {
  transform: scale(1.1); /* 当前显示的图片放大 */
}

.slide-content.onLeft,
.slide-content.onRight {
  opacity: 0.7;
}

/* 幻灯片标题 */
.caption {
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(0, 0, 0, 0.6);
  color: #fff;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 14px;
}
</style>

