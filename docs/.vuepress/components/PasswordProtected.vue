<template>
    <div>
      <div v-if="isAuthorized">
        <slot></slot>
      </div>
      <div v-else>
        <h3></h3>
        <h2 style="background-color:yellow;color: red;">关注公众号，回复【芝麻开门】，即可获取【口令】 </h2>
        <input v-model="password" type="password" placeholder="请输入口令~" />
        <button @click="checkPassword">👈确认口令</button>
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
        const correctPassword = '202410';
        if (this.password === correctPassword) {
          this.isAuthorized = true;
          this.errorMessage = '';
        } else {
          this.errorMessage = '口令不对😲请重试。';
        }
      },
    },
  };
  </script>
  