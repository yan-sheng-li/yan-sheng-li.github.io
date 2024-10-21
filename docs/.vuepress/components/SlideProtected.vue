<template>
  <div>
    <!-- 如果验证通过，显示插槽内容 -->
    <div v-if="isAuthorized">
      <slot></slot>
    </div>
    <!-- 如果没有通过验证，显示滑动验证组件 -->
    <div v-else>
      <h3 style="color: yellowgreen;">完整内容，请先滑动验证码 👇</h3>
      <client-only>
        <slide-verify :l="42" :r="10" :w="310" :h="155" :imgs="imgs" slider-text="向右滑动" @success="onSuccess"
          @fail="onFail" @refresh="onRefresh">
        </slide-verify>
      </client-only>
      <div>{{ msg }}</div>
      <p v-if="errorMessage" style="color: red;font-size: 30px;">{{ errorMessage }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isAuthorized: false, // 验证通过标志
      errorMessage: '', // 错误提示信息
      msg: '', // 滑动验证的提示信息
      imgs: [
        'http://cdn.qiniu.liyansheng.top/img/image-20241021210721023.png',
        'http://cdn.qiniu.liyansheng.top/img/20241021210843.png',
        'http://cdn.qiniu.liyansheng.top/img/20241021210913.png',
        'http://cdn.qiniu.liyansheng.top/img/20241021210936.png',
        'http://cdn.qiniu.liyansheng.top/img/20241021211040.png',
        'http://cdn.qiniu.liyansheng.top/img/20241021211103.png'
      ]
    };
  },
  methods: {
    onSuccess() {
      this.isAuthorized = true; // 滑动验证通过，显示隐藏内容
      this.msg = '验证成功';
      this.errorMessage = '';
    },
    onFail() {
      this.msg = ''; // 滑动验证失败，不显示消息
      this.errorMessage = '滑动验证失败，请重试。';
    },
    onRefresh() {
      this.msg = ''; // 重置时清空消息
      this.errorMessage = '';
    }
  }
}
</script>