<template>
  <div class="product-list">
    <ProductItem
      v-for="product in products"
      :key="product.id"
      :product="product"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useProductStore } from '@/stores/product.store';
import ProductItem from './ProductItem.vue';

export default defineComponent({
  name: 'ProductList',
  components: {
    ProductItem,
  },
  setup() {
    const productStore = useProductStore();
    const products = computed(() => productStore.products);

    return {
      products,
    };
  },
});
</script>

<style scoped>
.product-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 24px;
  padding: 20px 0;
}
</style>
