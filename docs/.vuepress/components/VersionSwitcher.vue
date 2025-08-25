<template>
  <div class="version-switcher">
    <div class="version-header">
      <span class="version-switch-label">切换版本👉</span>

      <div class="version-button-group">
        <button v-for="ver in versions" :key="ver" :class="['version-button', { 'active': version === ver }]"
          @click="version = ver" aria-pressed="version === ver">
          {{ ver }}
        </button>
      </div>

      <p class="current-version-tip" v-if="version">
        当前：<strong>{{ version }}</strong>
        <span class="version-change-indicator" v-if="showChangeIndicator" />
      </p>
    </div>
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
      showChangeIndicator: false
    };
  },
  provide() {
    return {
      currentVersion: this,
      registerVersion: this.registerVersion,
    };
  },
  mounted() {
    // 从URL获取版本参数
    const params = new URLSearchParams(window.location.search);
    const urlVersion = params.get('v');

    // 确保有版本可选
    if (this.versions.length > 0) {
      this.version = urlVersion || this.versions[0];
    }
  },
  watch: {
    version(newVer, oldVer) {
      if (oldVer && newVer !== oldVer) {
        // 显示版本变更指示器
        this.showChangeIndicator = true;
        setTimeout(() => {
          this.showChangeIndicator = false;
        }, 2000);

        // 更新URL参数
        const url = new URL(window.location);
        url.searchParams.set('v', newVer);
        window.history.replaceState({}, '', url);

        // 触发内容更新动画
        const content = document.querySelector('.version-content');
        if (content) {
          content.classList.add('version-changing');
          setTimeout(() => {
            content.classList.remove('version-changing');
          }, 300);
        }
      }
    },
    // 监听版本列表变化，确保有选中版本
    versions(newVersions) {
      if (newVersions.length > 0 && !this.version) {
        this.version = newVersions[0];
      }
    }
  },
  methods: {
    registerVersion(ver) {
      if (!this.versions.includes(ver)) {
        this.versions.push(ver);
        // 按版本号排序（假设版本号格式为x.y.z）
        this.versions.sort((a, b) => {
          const aParts = a.split('.').map(Number);
          const bParts = b.split('.').map(Number);
          for (let i = 0; i < Math.max(aParts.length, bParts.length); i++) {
            if (aParts[i] > bParts[i]) return -1;
            if (aParts[i] < bParts[i]) return 1;
          }
          return 0;
        });
      }
    },
  },
};
</script>

<style scoped>
.version-switcher {
  margin: 1rem 0 1.5rem;
  font-family: Arial, sans-serif;
}

.version-header {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 1rem 1.5rem;
  border: 2px solid #ffe0b2;
  border-radius: 8px;
  background: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  position: sticky;
  top: 60px;
  z-index: 2;
}

.version-switch-label {
  color: #ff4d4f;
  font-size: 1.1rem;
  font-weight: 600;
  background: linear-gradient(90deg, #ff4d4f 30%, #ffb347 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  white-space: nowrap;
}

.version-button-group {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  padding: 0.25rem 0;
}

.version-button {
  padding: 0.4rem 1rem;
  font-size: 1rem;
  border-radius: 6px;
  border: 2px solid #ddd;
  background-color: #f5f5f5;
  color: #333;
  cursor: pointer;
  transition: all 0.2s ease;
  white-space: nowrap;
}

.version-button:hover {
  border-color: #ffb74d;
  background-color: #fff8e1;
  transform: translateY(-1px);
}

.version-button.active {
  border-color: #ff9800;
  background-color: #fff3e0;
  color: #e65100;
  font-weight: 500;
  box-shadow: 0 2px 4px rgba(255, 152, 0, 0.2);
}

.version-button:focus {
  outline: none;
  box-shadow: 0 0 0 3px rgba(255, 152, 0, 0.3);
}

.current-version-tip {
  font-size: 0.95rem;
  margin: 0;
  color: #666;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  white-space: nowrap;
}

.current-version-tip strong {
  color: #dd1111;
}

.version-change-indicator {
  display: inline-block;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: #4cd964;
  animation: pulse 1.5s infinite;
}

@keyframes pulse {
  0% {
    transform: scale(0.95);
    opacity: 0.7;
  }

  50% {
    transform: scale(1.1);
    opacity: 1;
  }

  100% {
    transform: scale(0.95);
    opacity: 0.7;
  }
}

.version-content {
  margin-top: 1.2rem;
  animation: fadeIn 0.3s ease-in-out;
  transition: all 0.3s ease;
}

.version-content.version-changing {
  animation: contentUpdate 0.6s ease-in-out;
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

@keyframes contentUpdate {
  0% {
    opacity: 1;
    transform: translateX(0);
  }

  30% {
    opacity: 0.7;
    transform: translateX(-5px);
  }

  60% {
    opacity: 0.7;
    transform: translateX(5px);
  }

  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

/* 响应式调整 */
@media (max-width: 600px) {
  .version-header {
    /* flex-direction: column; */
    align-items: center;
    gap: 0.75rem;
  }

  .current-version-tip {
    margin-top: 0.25rem;
  }
}
</style>
