<template>
    <div id="app">
      <h1>本地录音功能</h1>
      <p>提示：【空格键】录制/暂停，【回车键】播放，【BackSpace键】删除当前录音</p>
      <button @click="startRecording">开始录音</button>
      <button @click="stopRecording">停止录音</button>
      <p v-if="isRecording">正在录音...</p> <!-- 添加的提示文本 -->
      <br>
      <hr>
      <audio v-if="audioUrl" :src="audioUrl" controls></audio>
      <hr>
      <br>
      <a v-if="downloadUrl" :href="downloadUrl" download="recording.wav">下载录音</a>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        mediaRecorder: null,
        audioChunks: [],
        audioUrl: null,
        downloadUrl: null,
        isRecording: false, // 添加的状态
      };
    },
    methods: {
      async startRecording() {
        try {
          const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
          this.mediaRecorder = new MediaRecorder(stream, { mimeType: 'audio/webm' });
  
          this.mediaRecorder.ondataavailable = (event) => {
            this.audioChunks.push(event.data);
          };
  
          this.mediaRecorder.onstop = async () => {
            const audioBlob = new Blob(this.audioChunks, { type: 'audio/webm' });
            
            // Convert WebM to WAV
            const wavBlob = await this.convertWebMToWav(audioBlob);
            this.audioUrl = URL.createObjectURL(wavBlob);
            this.downloadUrl = URL.createObjectURL(wavBlob); // Create a download link
  
            this.audioChunks = [];
            this.isRecording = false; // 停止录音时隐藏提示
          };
  
          this.mediaRecorder.start();
          this.isRecording = true; // 开始录音时显示提示
          console.log("开始录音...");
        } catch (error) {
          console.error("无法访问麦克风:", error);
        }
      },
      stopRecording() {
        if (this.mediaRecorder && this.mediaRecorder.state !== 'inactive') {
          this.mediaRecorder.stop();
          console.log("停止录音");
        }
      },
      async convertWebMToWav(webmBlob) {
        // Create an AudioContext and an OfflineAudioContext
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const offlineAudioContext = new OfflineAudioContext(1, 44100 * 40, 44100);
  
        // Decode audio data
        const arrayBuffer = await webmBlob.arrayBuffer();
        const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);
  
        // Create a buffer source
        const bufferSource = offlineAudioContext.createBufferSource();
        bufferSource.buffer = audioBuffer;
        bufferSource.connect(offlineAudioContext.destination);
  
        // Start playback
        bufferSource.start(0);
  
        // Render the audio to a buffer
        const renderedBuffer = await offlineAudioContext.startRendering();
  
        // Convert the buffer to WAV format
        const wavData = this.audioBufferToWav(renderedBuffer);
        return new Blob([wavData], { type: 'audio/wav' });
      },
      audioBufferToWav(buffer) {
        const numChannels = buffer.numberOfChannels;
        const length = buffer.length * numChannels * 2 + 44;
        const data = new Uint8Array(length);
        const view = new DataView(data.buffer);
  
        // RIFF chunk descriptor
        this.writeString(view, 0, 'RIFF');
        view.setUint32(4, length - 8, true);
        this.writeString(view, 8, 'WAVE');
  
        // fmt sub-chunk
        this.writeString(view, 12, 'fmt ');
        view.setUint32(16, 16, true);
        view.setUint16(20, 1, true);
        view.setUint16(22, numChannels, true);
        view.setUint32(24, 44100, true);
        view.setUint32(28, 44100 * 4, true);
        view.setUint16(32, 4, true);
        view.setUint16(34, 16, true);
  
        // data sub-chunk
        this.writeString(view, 36, 'data');
        view.setUint32(40, length - 44, true);
  
        // Write interleaved data
        let offset = 44;
        for (let i = 0; i < buffer.numberOfChannels; i++) {
          const channelData = buffer.getChannelData(i);
          for (let j = 0; j < channelData.length; j++) {
            const sample = Math.max(-1, Math.min(1, channelData[j]));
            view.setInt16(offset, sample * 0x7FFF, true);
            offset += 2;
          }
        }
  
        return data;
      },
      writeString(view, offset, string) {
        for (let i = 0; i < string.length; i++) {
          view.setUint8(offset + i, string.charCodeAt(i));
        }
      },
      handleKeyDown(event) {
        if (event.code === 'Space') {
          if (this.isRecording) {
            this.stopRecording();
          } else {
            this.startRecording();
          }
        } else if (event.code === 'Enter') {
          if (this.audioUrl) {
            const audio = new Audio(this.audioUrl);
            audio.play();
          }
        } else if (event.code === 'Backspace') {
          this.deleteRecording();
        }
      },
      deleteRecording() {
        this.audioUrl = null;
        this.downloadUrl = null;
        console.log("录音已删除");
      }
    },
    mounted() {
      // Register keydown event listener
      document.addEventListener('keydown', this.handleKeyDown);
    },
    beforeDestroy() {
      // Clean up event listener
      document.removeEventListener('keydown', this.handleKeyDown);
    }
  };
  </script>
  
  <style scoped>
  #app {
    text-align: center;
    margin-top: 50px;
  }
  </style>
  