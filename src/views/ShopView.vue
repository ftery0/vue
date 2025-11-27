<template>
  <div class="shop-view">
    <div class="header">
      <h1>{{ pageTitle }}</h1>
      <p>최신 트렌드의 상품을 만나보세요.</p>
    </div>
    <div class="product-list">
      <ProductItem
        v-for="product in filteredProducts"
        :key="product.id"
        :product="product"
      />
    </div>
    <div v-if="filteredProducts.length === 0" class="no-products">
      <p>조건에 맞는 상품이 없습니다.</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useRoute } from 'vue-router';
import { useProductStore } from '@/stores/product.store';
import ProductItem from '@/components/shop/ProductItem.vue';

export default defineComponent({
  name: 'ShopView',
  components: {
    ProductItem,
  },
  setup() {
    const route = useRoute();
    const productStore = useProductStore();

    const filteredProducts = computed(() => {
      let products = productStore.products;
      const { gender, category } = route.query;

      if (gender) {
        products = products.filter(
          (p) => p.gender === gender || p.gender === 'unisex',
        );
      }

      if (category) {
        products = products.filter((p) => p.category === category);
      }

      return products;
    });

    const pageTitle = computed(() => {
      const { gender, category } = route.query;
      let title = 'Shop';

      if (gender === 'men') title = 'Men';
      else if (gender === 'women') title = 'Women';

      if (category) {
        title += ` - ${
          String(category).charAt(0).toUpperCase() + String(category).slice(1)
        }`;
      }

      return title;
    });

    return {
      filteredProducts,
      pageTitle,
    };
  },
});
</script>

<style scoped>
.shop-view {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.header {
  text-align: center;
  margin-bottom: 40px;
}

.header h1 {
  font-size: 2.5rem;
  margin-bottom: 10px;
  color: #2c3e50;
}

.header p {
  color: #666;
  font-size: 1.1rem;
}

.product-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 24px;
  padding: 20px 0;
}

.no-products {
  text-align: center;
  padding: 50px;
  color: #888;
  font-size: 1.2rem;
}
</style>
