<template>
  <div class="product-detail-view">
    <div class="back-link">
      <router-link to="/shop">&lt; 목록으로 돌아가기</router-link>
    </div>
    <ProductDetail />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ProductDetail from '@/components/shop/ProductDetail.vue';

export default defineComponent({
  name: 'ProductDetailView',
  components: {
    ProductDetail,
  },
});
</script>

<style scoped>
.product-detail-view {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.back-link {
  margin-bottom: 20px;
}

.back-link a {
  text-decoration: none;
  color: #666;
  font-weight: 500;
}

.back-link a:hover {
  color: #2c3e50;
  text-decoration: underline;
}
</style>
