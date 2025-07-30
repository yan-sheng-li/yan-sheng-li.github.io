<template>
  <div>
    <!-- 如果已授权，展示 slot 内容 -->
    <div v-if="isAuthorized">
      <slot></slot>
    </div>

    <!-- 如果未授权，展示触发按钮 -->
    <div v-else>
      <button class="trigger-btn" @click="showModal = true">
        {{ buttonText }}
      </button>
    </div>

    <!-- 弹窗区域 -->
    <div v-if="showModal" class="modal-mask" @click.self="cancelVerification">
      <div class="modal-container">
        <h3>验证访问权限</h3>
        <img src="http://cdn.qiniu.liyansheng.top/img/gzh_muzikongjianPro.png" alt="">
        <h2 style="background-color: yellow; color: red;">
          微信扫一扫，关注公众号，获取验证码
        </h2>
        <input
          v-model="password"
          type="password"
          placeholder="请输入验证码~"
          class="input"
        />
        <button @click="checkPassword" class="btn">确认</button>
        <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    buttonText: {
      type: String,
      default: '点我获取'
    }
  },
  data() {
    return {
      password: '',
      isAuthorized: false,
      showModal: false,
      errorMessage: '',
    };
  },
  methods: {
    checkPassword() {
      const correctPassword = '1234';
      if (this.password === correctPassword) {
        this.isAuthorized = true;
        this.errorMessage = '';
        this.showModal = false;
      } else {
        this.errorMessage = '验证码不对😲请重试。';
      }
    },
    cancelVerification() {
      this.showModal = false;
    },
  },
};
</script>

<style scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-container {
  background: white;
  padding: 30px;
  border-radius: 10px;
  width: 90%;
  max-width: 400px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  text-align: center;
}

.input {
  padding: 10px;
  width: 80%;
  margin: 15px 0;
  font-size: 16px;
}

.btn {
  background-color: #42b983;
  border: none;
  color: white;
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 6px;
  cursor: pointer;
}

.btn:hover {
  background-color: #368a6e;
}

.error {
  color: red;
  font-size: 18px;
  margin-top: 10px;
}

.trigger-btn {
  background-color: #007bff;
  color: white;
  font-size: 16px;
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
}

.trigger-btn:hover {
  background-color: #0056b3;
}
</style>
