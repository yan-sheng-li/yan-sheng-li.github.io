(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{370:function(t,e,o){},426:function(t,e,o){"use strict";o(370)},437:function(t,e,o){"use strict";o.r(e);var a=o(405),n=o.n(a),r={data:()=>({inputText:"",qrCodeDataUrl:""}),methods:{async generateQRCode(){try{if(!this.inputText)return void alert("请输入内容");this.qrCodeDataUrl=await n.a.toDataURL(this.inputText)}catch(t){console.error(t)}},downloadQRCode(){const t=document.createElement("a");t.href=this.qrCodeDataUrl,t.download="qrcode.png",t.click()}}},i=(o(426),o(0)),c=Object(i.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"qr-code-generator"},[e("h1",[t._v("二维码生成器")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.inputText,expression:"inputText"}],attrs:{placeholder:"输入要生成二维码的内容"},domProps:{value:t.inputText},on:{input:function(e){e.target.composing||(t.inputText=e.target.value)}}}),t._v(" "),e("button",{on:{click:t.generateQRCode}},[t._v("生成二维码")]),t._v(" "),e("br"),t._v(" "),t.qrCodeDataUrl?e("div",[e("h3",[t._v("二维码预览：")]),t._v(" "),e("img",{attrs:{src:t.qrCodeDataUrl,alt:"二维码"}}),t._v(" "),e("br"),t._v(" "),e("button",{on:{click:t.downloadQRCode}},[t._v("下载二维码")])]):t._e()])}),[],!1,null,"496f89bb",null);e.default=c.exports}}]);