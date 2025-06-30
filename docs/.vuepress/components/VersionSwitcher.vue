<template>
  <div class="version-switcher">
    <label for="version"><span style="color: red;font-size: larger;">版本切换👉</span></label>
    <select id="version" v-model="version" class="version-select">
      <option value="v1">v1.0</option>
      <option value="v2">v2.0</option>
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
      version: 'v1',
    };
  },
  provide() {
    return {
      currentVersion: this,
    };
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
