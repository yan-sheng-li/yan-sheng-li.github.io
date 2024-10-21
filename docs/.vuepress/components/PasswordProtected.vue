<template>
    <div>
      <div v-if="isAuthorized">
        <slot></slot>
      </div>
      <div v-else>
        <h3>完整内容，请输入 👇</h3>
        <h2 style="background-color:yellow;color: red;">秘钥:1234  </h2>
        <input v-model="password" type="password" placeholder="请输入..." />
        <button @click="checkPassword">确定</button>
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
  