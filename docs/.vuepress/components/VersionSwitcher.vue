<template>
  <div class="version-switcher">
    <label for="version">
      <span class="version-switch-label">版本切换👉</span>
    </label>
    <select id="version" v-model="version" class="version-select">
      <option v-for="ver in versions" :key="ver" :value="ver">{{ ver }}</option>
    </select>

    <p class="current-version-tip">当前版本：<strong>{{ version }}</strong></p>

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
    const params = new URLSearchParams(window.location.search);
    const urlVersion = params.get('v');
    if (urlVersion) {
      this.version = urlVersion;
    }
  },
  watch: {
    version(newVer) {
      const url = new URL(window.location);
      url.searchParams.set('v', newVer);
      window.history.replaceState({}, '', url);
    },
  },
  methods: {
    registerVersion(ver) {
      if (!this.versions.includes(ver)) {
        this.versions.push(ver);
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

/* 标签文字样式加强 */
.version-switch-label {
  color: #ff4d4f;
  font-size: 1.65rem;
  font-weight: bold;
  background: linear-gradient(90deg, #ff4d4f 30%, #ffb347 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: shake 1.2s infinite alternate;
  display: inline-block;
  margin-right: 0.5rem;
}

@keyframes shake {
  0% { transform: translateX(0); }
  20% { transform: translateX(-1.5px); }
  40% { transform: translateX(1.5px); }
  60% { transform: translateX(-1.5px); }
  80% { transform: translateX(1.5px); }
  100% { transform: translateX(0); }
}

/* select按钮优化 */
.version-select {
  padding: 0.4rem 1rem;
  font-size: 1.05rem;
  border-radius: 6px;
  border: 2px solid #ffa94d;
  background-color: #fff;
  color: #333;
  cursor: pointer;
  transition: all 0.25s ease;
}

.version-select:hover {
  border-color: #ff7a00;
  box-shadow: 0 0 4px rgba(255, 122, 0, 0.3);
}

.version-select:focus {
  outline: none;
  border-color: #ff6f00;
  box-shadow: 0 0 0 3px rgba(255, 111, 0, 0.2);
}

.current-version-tip {
  font-size: 0.95rem;
  margin-top: 0.6rem;
  color: #dd1111;
}

.version-content {
  margin-top: 1.2rem;
  animation: fadeIn 0.3s ease-in-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(6px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
