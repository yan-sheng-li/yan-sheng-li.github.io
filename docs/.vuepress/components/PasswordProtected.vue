<template>
    <div>
      <div v-if="isAuthorized">
        <slot></slot>
      </div>
      <div v-else>
        <h3>完整内容请👇</h3>
        <input v-model="password" type="password" placeholder="输入秘钥：1234" />
        <button @click="checkPassword">提交</button>
        <p v-if="errorMessage" style="color: red;font-size: 30px;">{{ errorMessage }}</p>
      </div>
    </div>
  </template>
  
<script>
  export default {
    data() {
      return {
        password: '',
        isAuthorized: false,
        errorMessage: '',
      };
    },
    methods: {
      checkPassword() {
        const correctPassword = '1234';
        if (this.password === correctPassword) {
          this.isAuthorized = true;
          this.errorMessage = '';
        } else {
          this.errorMessage = '秘钥不正确😲请重试。';
        }
      },
    },
  };
  </script>
  