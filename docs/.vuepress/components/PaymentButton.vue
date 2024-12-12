<template>
    <div class="payment-container">
      <!-- 获取产品按钮 -->
      <button @click="fetchProductData" class="payment-button">
        {{ buttonText }}
      </button>
  
      <!-- 产品信息卡片 -->
      <div v-if="showCard" class="product-card">
        <h2>{{ product.name }}</h2>
        <p><strong>描述：</strong>{{ product.description }}</p>
        <p><strong>价格：</strong>¥{{ product.price }}</p>
        <button @click="initiatePayment" class="order-button">点击下单</button>
      </div>
  
      <hr />
  
      <!-- 提示信息 -->
      <p v-if="msg" class="message">{{ msg }}</p>
  
      <!-- 支付二维码区域 -->
      <div v-if="qrCodeUrl" class="qr-code-wrapper">
        <div class="qr-code-header">
          <img src="http://cdn.qiniu.liyansheng.top/img/wxpay.png" alt="微信支付" class="wechat-icon" />
          <p>微信支付</p>
        </div>
        <div class="qr-code-container">
          <p><strong>订单号:</strong> {{ orderId }}</p>
          <img :src="qrCodeUrl" alt="支付二维码" class="qr-code" />
          <p>请使用微信扫描二维码支付</p>
          <button @click="checkPaymentStatus" class="check-payment-button">我已支付，点击获取</button>
        </div>
      </div>
  
      <!-- 支付状态区域 -->
      <div v-if="paymentStatus" class="payment-status">
        <p class="message">{{ paymentStatus }}

        </p>
        <hr />
        <h3 v-if="productUrl" class="download-link">下载地址：{{productUrl}}</h3>
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
        baseUrl: "https://mini.liyansheng.top/v1",
        productUrl: null,
        qrCodeUrl: "",
        orderId: null,
        paymentStatus: null,
        msg: null,
        product: {
          productId: null,
          name: "",
          description: "",
          price: null,
        },
        showCard: false,
      };
    },
    methods: {
      fetchProductData() {
        $.get(this.baseUrl + "/products/" + this.productId).then((res) => {
          this.product = res;
          this.showCard = true;
        });
      },
      initiatePayment() {
        $.get(this.baseUrl + "/orders/create/" + this.productId).then((res) => {
          this.orderId = res.orderId;
          this.msg = res.msg;
          this.qrCodeUrl = res.QRcode_url;
        });
      },
      checkPaymentStatus() {
        $.get(this.baseUrl + "/orders/status/" + this.orderId).then((res) => {
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
    background-color: #07c160;
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
    background-color: #05a14e;
  }
  
  .product-card {
    border: 1px solid #ccc;
    border-radius: 10px;
    padding: 20px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    width: 300px;
    margin-top: 20px;
  }
  
  .qr-code-wrapper {
    text-align: center;
    margin-top: 20px;
    padding: 20px;
    border: 1px solid #e6f7f2;
    border-radius: 10px;
    background-color: #f6ffed;
  }
  
  .qr-code-header {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;
  }
  
  .wechat-icon {
    width: 24px;
    height: 24px;
    margin-right: 8px;
  }
  
  .qr-code-container {
    background: #fff;
    padding: 10px;
    border-radius: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  .qr-code {
    width: 200px;
    height: 200px;
    margin-top: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  
  .payment-status {
    color: blue;
    margin-top: 20px;
    font-weight: bold;
    text-align: center;
  }
  
  .download-link a {
    color: #07c160;
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
  