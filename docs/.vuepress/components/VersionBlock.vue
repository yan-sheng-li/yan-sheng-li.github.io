<template>
  <div v-show="currentVersion.version === target">
    <div class="version-content">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  inject: ['currentVersion'],
  props: {
    target: {
      type: String,
      required: true,
    },
  },
};
</script>
