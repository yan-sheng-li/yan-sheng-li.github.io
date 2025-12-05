<template>
  <div class="payment-container">
    <!-- 简化后的按钮：点击直接跳转到产品详情页 -->
    <button @click="goToProductDetail" class="payment-button">
      {{ buttonText }}
    </button>
  </div>
</template>

<script>
export default {
  props: {
    productId: {
      type: Number,
      required: true,
    },
    buttonText: {
      type: String,
      default: "点我-获取源码",
    },
  },
  methods: {
    goToProductDetail() {
      // 直接跳转到指定的产品详情页
      const url = `https://www.liyansheng.top/product_detail?id=${this.productId}`;
      // 在新窗口打开
      window.open(url, '_blank');
    },
  },
};
</script>

<style scoped>
.payment-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: Arial, sans-serif;
  margin: 20px;
}

.payment-button {
  background: linear-gradient(135deg, #07c160, #0bd07d);
  color: white;
  padding: 15px 35px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 20px;
  font-weight: bold;
  box-shadow: 0 4px 12px rgba(7, 193, 96, 0.3);
  transition: all 0.3s ease;
  animation: buttonPulse 2.5s infinite;
  position: relative; /* 保留原来的“付费”标签效果 */
}

.payment-button:hover {
  transform: scale(1.05);
  box-shadow: 0 6px 18px rgba(7, 193, 96, 0.4);
}

.payment-button:active {
  transform: scale(0.96);
  box-shadow: 0 2px 8px rgba(7, 193, 96, 0.25);
}

/* 保留原来的“付费”小标签 */
.payment-button::before {
  content: "付费";
  position: absolute;
  top: 13px;
  right: -8px;
  background: red;
  color: white;
  font-size: 12px;
  font-weight: 600;
  padding: 2px 7px;
  transform: rotate(45deg);
  transform-origin: top right;
  border-radius: 2px;
  z-index: 1;
  pointer-events: none;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
}

@keyframes buttonPulse {
  0% {
    box-shadow: 0 0 0 0 rgba(7, 193, 96, 0.4);
  }
  70% {
    box-shadow: 0 0 0 12px rgba(7, 193, 96, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(7, 193, 96, 0);
  }
}
</style>