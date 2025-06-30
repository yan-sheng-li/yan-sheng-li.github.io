<template>
  <div class="version-switcher">
    <label for="version">
      <span class="version-switch-label">版本切换👉</span>
    </label>
    <select id="version" v-model="version" class="version-select">
      <option v-for="ver in versions" :key="ver" :value="ver">{{ ver }}</option>
    </select>
    <div class="version-content">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      version: '',
      versions: [],
    };
  },
  provide() {
    return {
      currentVersion: this,
      registerVersion: this.registerVersion,
    };
  },
  mounted() {
    // 获取URL中的v参数
    const params = new URLSearchParams(window.location.search);
    const urlVersion = params.get('v');
    if (urlVersion) {
      this.version = urlVersion;
    }
    // 如果没有参数，等registerVersion注册时自动选第一个
  },
  methods: {
    registerVersion(ver) {
      if (!this.versions.includes(ver)) {
        this.versions.push(ver);
        // 如果没有选中的版本，默认选第一个
        if (!this.version) this.version = ver;
      }
    },
  },
};
</script>

<style scoped>
.version-switcher {
  margin-top: 1rem;
  margin-bottom: 1.5rem;
  font-family: Arial, sans-serif;
}

.version-switcher label {
  font-weight: bold;
  margin-right: 0.5rem;
  font-size: 1.1rem;
}

.version-switch-label {
  color: #ff4d4f;
  font-size: 1.25rem;
  font-weight: bold;
  background: linear-gradient(90deg, #ff4d4f 30%, #ffb347 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: shake 1.2s infinite alternate;
  display: inline-block;
  transition: color 0.3s;
}

@keyframes shake {
  0% { transform: translateX(0);}
  20% { transform: translateX(-2px);}
  40% { transform: translateX(2px);}
  60% { transform: translateX(-2px);}
  80% { transform: translateX(2px);}
  100% { transform: translateX(0);}
}

.version-select {
  padding: 0.5rem 1rem;
  font-size: 1.05rem;
  border-radius: 6px;
  border: 1px solid #ccc;
  background-color: white;
  transition: border-color 0.2s ease;
}

.version-select:hover {
  border-color: #888;
}

.version-content {
  margin-top: 1.2rem;
}
</style>
