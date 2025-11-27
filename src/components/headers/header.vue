<template>
  <header class="header">
    <div class="header-content">
      <div class="left-section">
        <button
          v-if="isMobile"
          @click="$emit('toggleSidebar')"
          class="menu-btn"
        >
          ☰
        </button>
        <router-link to="/" class="logo">VueShop</router-link>
      </div>

      <nav v-if="!isMobile" class="nav-menu">
        <div class="nav-item">
          <span class="nav-link">Men</span>
          <div class="dropdown">
            <router-link to="/shop?gender=men&category=top">Top</router-link>
            <router-link to="/shop?gender=men&category=bottom"
              >Bottom</router-link
            >
            <router-link to="/shop?gender=men">All Men</router-link>
          </div>
        </div>
        <div class="nav-item">
          <span class="nav-link">Women</span>
          <div class="dropdown">
            <router-link to="/shop?gender=women&category=top">Top</router-link>
            <router-link to="/shop?gender=women&category=bottom"
              >Bottom</router-link
            >
            <router-link to="/shop?gender=women&category=dress"
              >Dress</router-link
            >
            <router-link to="/shop?gender=women">All Women</router-link>
          </div>
        </div>
        <router-link to="/shop" class="nav-link">All Products</router-link>
      </nav>

      <div class="right-section">
        <router-link to="/cart" class="cart-icon">
          🛒 <span v-if="cartCount > 0" class="badge">{{ cartCount }}</span>
        </router-link>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, onUnmounted, computed } from 'vue';
import { useCartStore } from '@/stores/cart.store';

export default defineComponent({
  name: 'AppHeader',
  emits: ['toggleSidebar'],
  setup() {
    const isMobile = ref(window.innerWidth < 768);
    const cartStore = useCartStore();

    const cartCount = computed(() => cartStore.totalItems);

    const handleResize = () => {
      isMobile.value = window.innerWidth < 768;
    };

    onMounted(() => {
      window.addEventListener('resize', handleResize);
      handleResize();
    });
    onUnmounted(() => {
      window.removeEventListener('resize', handleResize);
    });

    return { isMobile, cartCount };
  },
});
</script>

<style scoped>
.header {
  height: 60px;
  background-color: white;
  border-bottom: 1px solid #eee;
  position: sticky;
  top: 0;
  z-index: 100;
}

.header-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.left-section {
  display: flex;
  align-items: center;
  gap: 10px;
}

.logo {
  font-size: 1.5rem;
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
}

.menu-btn {
  font-size: 24px;
  background: none;
  border: none;
  cursor: pointer;
}

.nav-menu {
  display: flex;
  gap: 30px;
  height: 100%;
}

.nav-item {
  position: relative;
  display: flex;
  align-items: center;
  height: 100%;
  cursor: pointer;
}

.nav-link {
  font-weight: 500;
  color: #333;
  text-decoration: none;
  padding: 0 10px;
}

.nav-link:hover {
  color: #42b983;
}

.dropdown {
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  background-color: white;
  min-width: 150px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  padding: 10px 0;
  z-index: 101;
}

.nav-item:hover .dropdown {
  display: block;
}

.dropdown a {
  display: block;
  padding: 10px 20px;
  color: #333;
  text-decoration: none;
  transition: background-color 0.2s;
}

.dropdown a:hover {
  background-color: #f5f5f5;
  color: #42b983;
}

.right-section {
  display: flex;
  align-items: center;
}

.cart-icon {
  font-size: 1.5rem;
  text-decoration: none;
  position: relative;
}

.badge {
  position: absolute;
  top: -8px;
  right: -8px;
  background-color: #e74c3c;
  color: white;
  font-size: 0.7rem;
  padding: 2px 6px;
  border-radius: 10px;
  font-weight: bold;
}
</style>
