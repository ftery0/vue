<template>
  <div class="product-item" @click="goToDetail">
    <div class="image-container">
      <img :src="product.image" :alt="product.name" />
    </div>
    <div class="info">
      <h3 class="name">{{ product.name }}</h3>
      <p class="category">{{ product.category }}</p>
      <p class="price">{{ formatPrice(product.price) }}원</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue';
import { useRouter } from 'vue-router';
import type { Product } from '@/stores/product.store';

export default defineComponent({
  name: 'ProductItem',
  props: {
    product: {
      type: Object as PropType<Product>,
      required: true,
    },
  },
  setup(props) {
    const router = useRouter();

    const goToDetail = () => {
      router.push(`/shop/${props.product.id}`);
    };

    const formatPrice = (price: number) => {
      return price.toLocaleString();
    };

    return {
      goToDetail,
      formatPrice,
    };
  },
});
</script>

<style scoped>
.product-item {
  border: 1px solid #eee;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
  background-color: #fff;
}

.product-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.image-container {
  width: 100%;
  height: 200px;
  overflow: hidden;
  background-color: #f9f9f9;
}

.image-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.info {
  padding: 16px;
}

.name {
  margin: 0 0 8px;
  font-size: 1.1rem;
  font-weight: 600;
  color: #333;
}

.category {
  margin: 0 0 8px;
  font-size: 0.9rem;
  color: #888;
}

.price {
  margin: 0;
  font-size: 1.1rem;
  font-weight: 700;
  color: #2c3e50;
}
</style>
