<template>
    <div class="floating-image">
      <img :src="src" :alt="alt" />
    </div>
  </template>
  
  <script>
  export default {
    props: {
      src: {
        type: String,
        required: true
      },
      alt: {
        type: String,
        default: 'floating image'
      }
    }
  };
  </script>
  
  <style scoped>
  .floating-image {
    position: fixed;
    bottom: 20px;
    right: 20px;
    width: 270px; /* 可以根据需要调整宽度 */
    height: auto;
    z-index: 1000;
  }
  .floating-image img {
    width: 100%;
    height: auto;
  }
  </style>
  