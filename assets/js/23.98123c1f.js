(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{357:function(e,t,i){},396:function(e,t,i){"use strict";i(357)},428:function(e,t,i){"use strict";i.r(t);i(136),i(375),i(376),i(381),i(382),i(383),i(384),i(385),i(388),i(390),i(392),i(336),i(337),i(338);var n={data:()=>({mediaRecorder:null,audioChunks:[],audioUrl:null,downloadUrl:null,isRecording:!1}),methods:{async startRecording(){try{const e=await navigator.mediaDevices.getUserMedia({audio:!0});this.mediaRecorder=new MediaRecorder(e,{mimeType:"audio/webm"}),this.mediaRecorder.ondataavailable=e=>{this.audioChunks.push(e.data)},this.mediaRecorder.onstop=async()=>{const e=new Blob(this.audioChunks,{type:"audio/webm"}),t=await this.convertWebMToWav(e);this.audioUrl=URL.createObjectURL(t),this.downloadUrl=URL.createObjectURL(t),this.audioChunks=[],this.isRecording=!1},this.mediaRecorder.start(),this.isRecording=!0,console.log("开始录音...")}catch(e){console.error("无法访问麦克风:",e)}},stopRecording(){this.mediaRecorder&&"inactive"!==this.mediaRecorder.state&&(this.mediaRecorder.stop(),console.log("停止录音"))},async convertWebMToWav(e){const t=new(window.AudioContext||window.webkitAudioContext),i=new OfflineAudioContext(1,1764e3,44100),n=await e.arrayBuffer(),o=await t.decodeAudioData(n),a=i.createBufferSource();a.buffer=o,a.connect(i.destination),a.start(0);const r=await i.startRendering(),s=this.audioBufferToWav(r);return new Blob([s],{type:"audio/wav"})},audioBufferToWav(e){const t=e.numberOfChannels,i=e.length*t*2+44,n=new Uint8Array(i),o=new DataView(n.buffer);this.writeString(o,0,"RIFF"),o.setUint32(4,i-8,!0),this.writeString(o,8,"WAVE"),this.writeString(o,12,"fmt "),o.setUint32(16,16,!0),o.setUint16(20,1,!0),o.setUint16(22,t,!0),o.setUint32(24,44100,!0),o.setUint32(28,176400,!0),o.setUint16(32,4,!0),o.setUint16(34,16,!0),this.writeString(o,36,"data"),o.setUint32(40,i-44,!0);let a=44;for(let t=0;t<e.numberOfChannels;t++){const i=e.getChannelData(t);for(let e=0;e<i.length;e++){const t=Math.max(-1,Math.min(1,i[e]));o.setInt16(a,32767*t,!0),a+=2}}return n},writeString(e,t,i){for(let n=0;n<i.length;n++)e.setUint8(t+n,i.charCodeAt(n))},handleKeyDown(e){if("Space"===e.code)this.isRecording?this.stopRecording():this.startRecording();else if("Enter"===e.code){if(this.audioUrl){new Audio(this.audioUrl).play()}}else"Backspace"===e.code&&this.deleteRecording()},deleteRecording(){this.audioUrl=null,this.downloadUrl=null,console.log("录音已删除")}},mounted(){document.addEventListener("keydown",this.handleKeyDown)},beforeDestroy(){document.removeEventListener("keydown",this.handleKeyDown)}},o=(i(396),i(0)),a=Object(o.a)(n,(function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[t("h1",[e._v("本地录音功能")]),e._v(" "),t("p",[e._v("提示：【空格键】录制/暂停，【回车键】播放，【BackSpace键】删除当前录音")]),e._v(" "),t("button",{on:{click:e.startRecording}},[e._v("开始录音")]),e._v(" "),t("button",{on:{click:e.stopRecording}},[e._v("停止录音")]),e._v(" "),e.isRecording?t("p",[e._v("正在录音...")]):e._e(),e._v(" "),t("br"),e._v(" "),t("hr"),e._v(" "),e.audioUrl?t("audio",{attrs:{src:e.audioUrl,controls:""}}):e._e(),e._v(" "),t("hr"),e._v(" "),t("br"),e._v(" "),e.downloadUrl?t("a",{attrs:{href:e.downloadUrl,download:"recording.wav"}},[e._v("下载录音")]):e._e()])}),[],!1,null,"238a4ebc",null);t.default=a.exports}}]);