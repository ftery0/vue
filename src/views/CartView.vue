<template>
  <div class="cart-view">
    <Cart />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Cart from '@/components/shop/Cart.vue';

export default defineComponent({
  name: 'CartView',
  components: {
    Cart,
  },
});
</script>

<style scoped>
.cart-view {
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;
}
</style>
