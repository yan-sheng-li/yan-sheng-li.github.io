<template>
    <div>
        <button @click="fetchProductData" class="payment-button">
            {{ buttonText }}
        </button>
        <div v-if="showCard" class="product-card">
            <h2>{{ product.name }}</h2>
            <p><strong>描述：</strong>{{ product.description }}</p>
            <p><strong>价格：</strong>{{ product.price }}</p>
            <button @click="initiatePayment">点击下单</button>
        </div>
        <hr>
        <!-- 提示 -->
        <p v-if="msg">{{ msg }}</p>
        <div v-if="qrCodeUrl" class="qr-code">
            <p><strong>订单号:</strong>{{ orderId }}</p>
            <img :src="qrCodeUrl" alt="Pay QR Code" />
            <p>请扫码支付</p>
            <button @click="checkPaymentStatus" class="check-payment-button">
                我已支付
            </button>
        </div>
        <div v-if="paymentStatus" class="payment-status">
            <p>{{ paymentStatus }}</p>
            <hr>
            <h3 v-if="productUrl">下载链接：{{ productUrl }}</h3>
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
            baseUrl: 'http://liyansheng.top:8084',  // 定义基础URL变量
            productUrl: null,
            qrCodeUrl: '',
            orderId: null, // 存储订单ID
            paymentStatus: null,
            msg: null,
            product: {
                productId: null,
                name: '',
                description: '',
                price: null,
                downloadUrl: '',
                createdAt: '',
                updatedAt: ''
            },
            showCard: false // 新增一个变量用于控制卡片是否显示
        };
    },
    methods: {
        // 获取产品信息
        fetchProductData() {
            $.get(this.baseUrl + '/v1/products/' + this.productId).then(res => {
                this.product = res;
                this.showCard = true;
            })
        },
        // 创建订单
        initiatePayment() {
            $.get(this.baseUrl + '/v1/orders/create/' + this.productId).then(res => {
                this.orderId = res.orderId;
                this.msg = res.msg;
                this.qrCodeUrl = res.QRcode_url;
            })
        },
        // 检查支付状态
        checkPaymentStatus() {
            $.get(this.baseUrl + '/v1/orders/status/' + this.orderId).then(res => {
                this.paymentStatus = res.msg;
                this.productUrl = res.url;
            })
        }
    },
    created() {
        console.log(this.productId)
    }
};
</script>

<style scoped>
.payment-button,
.check-payment-button {
    background-color: #409eff;
    color: white;
    padding: 10px 20px;
    border: none;
    cursor: pointer;
    margin-top: 10px;
}

.qr-code img {
    width: 200px;
    height: 200px;
    margin-top: 10px;
}

.payment-status {
    margin-top: 10px;
    font-weight: bold;
}

.product-card {
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 15px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    width: 300px;
}
</style>