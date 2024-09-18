<!-- 二维码生成 -->
<template>
    <div class="qr-code-generator">
        <h1>二维码生成器</h1>
        <input v-model="inputText" placeholder="输入要生成二维码的内容" />
        <button @click="generateQRCode">生成二维码</button>
        <br>
        <div v-if="qrCodeDataUrl">
            <h3>二维码预览：</h3>
            <img :src="qrCodeDataUrl" alt="二维码" />
            <br>
            <button @click="downloadQRCode">下载二维码</button>
        </div>
    </div>
</template>

<script>
import QRCode from 'qrcode';

export default {
    data() {
        return {
            inputText: '',  // 用户输入的文本
            qrCodeDataUrl: ''  // 生成的二维码图片的URL
        };
    },
    methods: {
        // 生成二维码的方法
        async generateQRCode() {
            try {
                if (!this.inputText) {
                    alert('请输入内容');
                    return;
                }
                // 使用qrcode库生成二维码
                this.qrCodeDataUrl = await QRCode.toDataURL(this.inputText);
            } catch (err) {
                console.error(err);
            }
        },
        // 下载二维码图片
        downloadQRCode() {
            const link = document.createElement('a');
            link.href = this.qrCodeDataUrl;
            link.download = 'qrcode.png';
            link.click();
        }
    }
};
</script>

<style scoped>
.qr-code-generator {
    display: flex;
    flex-direction: column;
    align-items: center;
}

input {
    margin-bottom: 10px;
    padding: 5px;
    width: 300px;
}

button {
    margin: 10px;
    padding: 10px 20px;
}

img {
    margin-top: 20px;
    border: 1px solid #000;
}
</style>