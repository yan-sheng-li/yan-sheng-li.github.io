<template>
  <div class="version-switcher">
    <label for="version"><span style="color: red;font-size: larger;">版本切换👉</span></label>
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
  methods: {
    registerVersion(ver) {
      if (!this.versions.includes(ver)) {
        this.versions.push(ver);
        // 默认选中第一个注册的版本
        if (!this.version) this.version = ver;
      }
    },
  },
};
</script>

<style scoped>
.version-switcher {
/* 调大上边距 */
  margin-top: 1rem;
  margin-bottom: 1.5rem;
  font-family: Arial, sans-serif;
}

.version-switcher label {
  font-weight: bold;
  margin-right: 0.5rem;
  font-size: 1.1rem;
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
