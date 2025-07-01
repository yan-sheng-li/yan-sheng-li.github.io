<template>
  <div class="payment-container">
    <!-- 获取产品按钮 -->
    <button @click="fetchProductData" class="payment-button" style="font-size: 20px;">
      {{ buttonText }}
    </button>

    <!-- 产品信息卡片 -->
    <div v-if="showCard" class="product-card">
      <h2>{{ product.name }}</h2>
      <p><strong>描述：</strong>{{ product.description }}</p>
      <!-- 只有商品名不包含“报告”时才显示规格选择 -->
      <p v-if="!product.name.includes('报告')">
        <strong>选择规格：</strong>
        <select v-model="selectedSpec" class="spec-select">
          <option v-for="spec in specOptions" :key="spec.value" :value="spec.value">
            {{ spec.label }}（{{ spec.extra === 0 ? '原价' : '加' + spec.extra + '元' }}）
          </option>
        </select>
      </p>
      <p>
        <strong>价格：</strong>
        <span style="color:red;font-size:25px;font-weight: 200;">
          <!-- 如果是报告，直接显示原价，否则按规格加价 -->
          ¥{{product.name.includes('报告') ? product.price : (product.price + (specOptions.find(s => s.value ===
            selectedSpec)?.extra || 0)) }}
        </span>
      </p>
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
        <button @click="checkPaymentStatus" class="check-payment-button">支付后，点我-获取资源</button>
      </div>
    </div>

    <!-- 支付状态区域 -->
    <div v-if="paymentStatus" class="payment-status">
      <p class="message">{{ paymentStatus }} <span style="color: blueviolet;">如遇异常，请联系作者！</span>

      </p>
      <hr />
      <div v-if="productUrl">
        <p style="color: black;">下载地址👇</p>
        <div style="border: 1px solid red;padding: 5px;">
          <h3 class="download-link">{{ productUrl }}</h3>
        </div>
        <!-- 提示 -->
        <p style="color: red; font-weight: bold;">请复制链接到浏览器下载
          <hr>
          <span style="color: yellowgreen;">
            👉远程调试，请联系作者
          </span>
        </p>
      </div>
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
      default: "点我-获取源码",
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
      // 新增：规格相关
      specOptions: [
        { label: "仅源码", value: "code", extra: 0 },
        { label: "源码+远程调试部署", value: "code_debug", extra: 35 }
      ],
      selectedSpec: "code"
    };
  },
  methods: {
    fetchProductData() {
      $.get(this.baseUrl + "/products/" + this.productId)
        .then((res) => {
          this.product = res;
          this.showCard = true;
          this.msg = ""
        })
        .catch((err) => {
          console.error("Error fetching product data:", err);
          this.showCard = false;
          this.msg = "无法获取作品信息，请联系作者！"
          this.$toast.error("出错了，请稍后再试！");
        });
    },
    initiatePayment() {
      let finalPrice = this.product.price;
      let specParam = undefined;
      // 如果不是报告，才处理规格
      if (!this.product.name.includes('报告')) {
        const spec = this.specOptions.find(s => s.value === this.selectedSpec);
        finalPrice = this.product.price + (spec ? spec.extra : 0);
        specParam = this.selectedSpec;
      }
      // 组装请求参数
      const params = { price: finalPrice };
      if (specParam) params.spec = specParam;

      console.log("请求参数：", params);

      $.get(this.baseUrl + "/orders/create/" + this.productId, params).then((res) => {
        this.orderId = res.orderId;
        this.msg = res.msg;
        this.qrCodeUrl = res.QRcode_url;
        $('.order-button').hide();
        this.$toast.success("订单创建成功，请扫码支付！");
      }).catch((err) => {
        console.error("Error fetching product data:", err);
        this.$toast.error("出错了，请稍后再试！");
      })
    },
    checkPaymentStatus() {
      $.get(this.baseUrl + "/orders/status/" + this.orderId).then((res) => {
        this.paymentStatus = res.msg;
        if (res.url && res.url !== "") {
          this.productUrl = res.url;
          this.$toast.success("支付成功，感谢您的支持！");
        } else {
          this.$toast.error("支付未完成，请重新扫码支付！");
        }
      });
    },
  },
  created() {
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
  padding: 15px 35px;
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

.spec-select {
  font-size: 18px;
  padding: 6px 18px;
  border-radius: 6px;
  border: 1.5px solid #07c160;
  outline: none;
  background: #f6ffed;
  color: #333;
  transition: border-color 0.2s;
}

.spec-select:focus {
  border-color: #05a14e;
}

.spec-select option {
  font-size: 16px;
}
</style>