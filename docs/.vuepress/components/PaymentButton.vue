<template>
    <div class="payment-container">
      <!-- 按钮 -->
      <button @click="fetchProductData" class="payment-button">
        {{ buttonText }}
      </button>
  
      <!-- 产品信息卡片 -->
      <div v-if="showCard" class="product-card">
        <h2>{{ product.name }}</h2>
        <p><strong>描述：</strong>{{ product.description }}</p>
        <p><strong>价格：</strong>{{ product.price }}</p>
        <button @click="initiatePayment" class="order-button">点击下单</button>
      </div>
  
      <hr />
  
      <!-- 提示信息 -->
      <p v-if="msg" class="message">{{ msg }}</p>
  
      <!-- 支付二维码 -->
      <div v-if="qrCodeUrl" class="qr-code">
        <p><strong>订单号:</strong> {{ orderId }}</p>
        <img :src="qrCodeUrl" alt="Pay QR Code" />
        <p>请扫码支付</p>
        <button @click="checkPaymentStatus" class="check-payment-button">我已支付</button>
      </div>
  
      <!-- 支付状态 -->
      <div v-if="paymentStatus" class="payment-status">
        <p>{{ paymentStatus }}</p>
        <hr />
        <h3 v-if="productUrl" class="download-link">下载链接：<a :href="productUrl" target="_blank">{{ productUrl }}</a></h3>
      </div>
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
        default: "点我获取源码",
      },
    },
    data() {
      return {
        baseUrl: "http://liyansheng.top:8084", // 定义基础URL变量
        productUrl: null,
        qrCodeUrl: "",
        orderId: null, // 存储订单ID
        paymentStatus: null,
        msg: null,
        product: {
          productId: null,
          name: "",
          description: "",
          price: null,
          downloadUrl: "",
          createdAt: "",
          updatedAt: "",
        },
        showCard: false, // 控制卡片是否显示
      };
    },
    methods: {
      // 获取产品信息
      fetchProductData() {
        $.get(this.baseUrl + "/v1/products/" + this.productId).then((res) => {
          this.product = res;
          this.showCard = true;
        });
      },
      // 创建订单
      initiatePayment() {
        $.get(this.baseUrl + "/v1/orders/create/" + this.productId).then((res) => {
          this.orderId = res.orderId;
          this.msg = res.msg;
          this.qrCodeUrl = res.QRcode_url;
        });
      },
      // 检查支付状态
      checkPaymentStatus() {
        $.get(this.baseUrl + "/v1/orders/status/" + this.orderId).then((res) => {
          this.paymentStatus = res.msg;
          this.productUrl = res.url;
        });
      },
    },
    created() {
      console.log(this.productId);
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
  
  .payment-button,
  .order-button,
  .check-payment-button {
    background-color: #409eff;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 10px;
    transition: background-color 0.3s;
  }
  
  .payment-button:hover,
  .order-button:hover,
  .check-payment-button:hover {
    background-color: #66b1ff;
  }
  
  .product-card {
    border: 1px solid #ccc;
    border-radius: 10px;
    padding: 20px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    width: 300px;
    margin-top: 20px;
  }
  
  .qr-code img {
    width: 200px;
    height: 200px;
    margin-top: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  
  .payment-status {
    margin-top: 20px;
    font-weight: bold;
    text-align: center;
  }
  
  .download-link a {
    color: #409eff;
    text-decoration: none;
  }
  
  .download-link a:hover {
    text-decoration: underline;
  }
  
  .message {
    color: #f56c6c;
    font-weight: bold;
    margin-top: 10px;
  }
  </style>
  