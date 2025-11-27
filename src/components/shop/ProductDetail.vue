<template>
  <div class="product-detail" v-if="product">
    <div class="image-section">
      <img :src="product.image" :alt="product.name" />
    </div>
    <div class="info-section">
      <h1 class="title">{{ product.name }}</h1>
      <p class="category">{{ product.category }}</p>
      <p class="price">{{ formatPrice(product.price) }}원</p>
      <p class="description">{{ product.description }}</p>
      
      <div class="actions">
        <div class="quantity-control">
          <button @click="decreaseQuantity" :disabled="quantity <= 1">-</button>
          <span>{{ quantity }}</span>
          <button @click="increaseQuantity">+</button>
        </div>
        <button class="add-to-cart" @click="addToCart">장바구니 담기</button>
      </div>
    </div>
  </div>
  <div v-else class="not-found">
    <p>상품을 찾을 수 없습니다.</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useProductStore } from '@/stores/product.store';
import { useCartStore } from '@/stores/cart.store';

export default defineComponent({
  name: 'ProductDetail',
  setup() {
    const route = useRoute();
    const router = useRouter();
    const productStore = useProductStore();
    const cartStore = useCartStore();

    const product = computed(() => {
      const id = Number(route.params.id);
      return productStore.getProductById(id);
    });

    const quantity = ref(1);

    const increaseQuantity = () => {
      quantity.value++;
    };

    const decreaseQuantity = () => {
      if (quantity.value > 1) {
        quantity.value--;
      }
    };

    const addToCart = () => {
      if (product.value) {
        cartStore.addToCart(product.value, quantity.value);
        alert('장바구니에 담겼습니다.');
        // Optional: Go to cart or stay
      }
    };

    const formatPrice = (price: number) => {
      return price.toLocaleString();
    };

    return {
      product,
      quantity,
      increaseQuantity,
      decreaseQuantity,
      addToCart,
      formatPrice,
    };
  },
});
</script>

<style scoped>
.product-detail {
  display: flex;
  gap: 40px;
  padding: 40px 0;
  flex-wrap: wrap;
}

.image-section {
  flex: 1;
  min-width: 300px;
  background-color: #f9f9f9;
  border-radius: 8px;
  overflow: hidden;
}

.image-section img {
  width: 100%;
  height: auto;
  display: block;
}

.info-section {
  flex: 1;
  min-width: 300px;
}

.title {
  font-size: 2rem;
  margin-bottom: 10px;
  color: #333;
}

.category {
  color: #888;
  margin-bottom: 20px;
}

.price {
  font-size: 1.5rem;
  font-weight: bold;
  color: #2c3e50;
  margin-bottom: 20px;
}

.description {
  line-height: 1.6;
  color: #555;
  margin-bottom: 40px;
}

.actions {
  display: flex;
  gap: 20px;
  align-items: center;
}

.quantity-control {
  display: flex;
  align-items: center;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.quantity-control button {
  width: 30px;
  height: 30px;
  border: none;
  background: none;
  cursor: pointer;
  font-size: 1.2rem;
}

.quantity-control button:disabled {
  color: #ccc;
  cursor: not-allowed;
}

.quantity-control span {
  width: 40px;
  text-align: center;
  font-weight: bold;
}

.add-to-cart {
  padding: 12px 24px;
  background-color: #2c3e50;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.2s;
}

.add-to-cart:hover {
  background-color: #34495e;
}

.not-found {
  text-align: center;
  padding: 50px;
  font-size: 1.2rem;
  color: #888;
}

@media (max-width: 768px) {
  .product-detail {
    flex-direction: column;
  }
}
</style>
