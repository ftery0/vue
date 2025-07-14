<template>
  <header v-if="isMobile" class="header">
    <button @click="$emit('toggleSidebar')" class="menu-btn">☰</button>
    <div class="logo">로고</div>
    <div class="chat-icon">💬</div>
  </header>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, onUnmounted } from 'vue';

export default defineComponent({
  name: 'AppHeader',
  emits: ['toggleSidebar'],
  setup() {
    const isMobile = ref(window.innerWidth < 1280);

    const handleResize = () => {
      isMobile.value = window.innerWidth < 1280;
    };

    onMounted(() => {
      window.addEventListener('resize', handleResize);
      handleResize();
    });
    onUnmounted(() => {
      window.removeEventListener('resize', handleResize);
    });

    return { isMobile };
  },
});
</script>

<style scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 56px;
  padding: 0 16px;
  background-color: white;
  border-bottom: 1px solid #eee;
}
.menu-btn {
  font-size: 24px;
  background: none;
  border: none;
  cursor: pointer;
}
.chat-icon {
  font-size: 20px;
}
</style>
