<template>
  <div class="keyword-tip">
    <span class="emoji">👆</span>
    <div class="text">
      <strong>关注公众号，回复关键词：</strong><br /><span class="keyword">{{ keyword }}</span><br />
      <span class="suffix">即可获取源码下载链接！</span>
    </div>
  </div>
</template>


<script>
export default {
  props: {
    keyword: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.keyword-tip {
  background-color: #f0f9ff;
  border: 1px solid #b6e3ff;
  padding: 12px 16px;
  border-radius: 8px;
  font-size: 16px;
  color: #1c1c1e;
  display: flex;
  align-items: flex-start;
  margin: 24px 0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}
.emoji {
  font-size: 20px;
  margin-right: 8px;
}
.keyword {
  color: #007aff;
  font-weight: bold;
    font-size: 20px;
}
.suffix {
  display: inline-block;
  margin-top: 4px;
}
.text {
  line-height: 1.6;
}

</style>
