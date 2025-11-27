<template>
  <div class="cart">
    <h2>장바구니</h2>
    <div v-if="cartItems.length > 0">
      <div class="cart-list">
        <div v-for="item in cartItems" :key="item.product.id" class="cart-item">
          <div class="item-image">
            <img :src="item.product.image" :alt="item.product.name" />
          </div>
          <div class="item-info">
            <h3>{{ item.product.name }}</h3>
            <p class="price">{{ formatPrice(item.product.price) }}원</p>
          </div>
          <div class="item-quantity">
            <button @click="updateQuantity(item.product.id, item.quantity - 1)">-</button>
            <span>{{ item.quantity }}</span>
            <button @click="updateQuantity(item.product.id, item.quantity + 1)">+</button>
          </div>
          <div class="item-total">
            {{ formatPrice(item.product.price * item.quantity) }}원
          </div>
          <button class="remove-btn" @click="removeItem(item.product.id)">삭제</button>
        </div>
      </div>
      
      <div class="cart-summary">
        <div class="summary-row">
          <span>총 상품 수</span>
          <span>{{ totalItems }}개</span>
        </div>
        <div class="summary-row total">
          <span>총 결제 금액</span>
          <span>{{ formatPrice(totalPrice) }}원</span>
        </div>
        <button class="checkout-btn" @click="checkout">주문하기</button>
      </div>
    </div>
    <div v-else class="empty-cart">
      <p>장바구니가 비어있습니다.</p>
      <router-link to="/shop" class="continue-shopping">쇼핑 계속하기</router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useCartStore } from '@/stores/cart.store';

export default defineComponent({
  name: 'Cart',
  setup() {
    const cartStore = useCartStore();

    const cartItems = computed(() => cartStore.items);
    const totalItems = computed(() => cartStore.totalItems);
    const totalPrice = computed(() => cartStore.totalPrice);

    const updateQuantity = (id: number, quantity: number) => {
      cartStore.updateQuantity(id, quantity);
    };

    const removeItem = (id: number) => {
      if (confirm('정말 삭제하시겠습니까?')) {
        cartStore.removeFromCart(id);
      }
    };

    const checkout = () => {
      alert('주문이 완료되었습니다! (데모 기능)');
      cartStore.clearCart();
    };

    const formatPrice = (price: number) => {
      return price.toLocaleString();
    };

    return {
      cartItems,
      totalItems,
      totalPrice,
      updateQuantity,
      removeItem,
      checkout,
      formatPrice,
    };
  },
});
</script>

<style scoped>
.cart {
  padding: 20px 0;
}

h2 {
  margin-bottom: 30px;
  font-size: 1.8rem;
  color: #333;
}

.cart-list {
  border-top: 1px solid #eee;
}

.cart-item {
  display: flex;
  align-items: center;
  padding: 20px 0;
  border-bottom: 1px solid #eee;
  gap: 20px;
}

.item-image {
  width: 80px;
  height: 80px;
  background-color: #f9f9f9;
  border-radius: 4px;
  overflow: hidden;
}

.item-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.item-info {
  flex: 1;
}

.item-info h3 {
  margin: 0 0 5px;
  font-size: 1rem;
}

.item-info .price {
  color: #888;
  margin: 0;
}

.item-quantity {
  display: flex;
  align-items: center;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.item-quantity button {
  width: 25px;
  height: 25px;
  border: none;
  background: none;
  cursor: pointer;
}

.item-quantity span {
  width: 30px;
  text-align: center;
  font-size: 0.9rem;
}

.item-total {
  width: 100px;
  text-align: right;
  font-weight: bold;
  color: #2c3e50;
}

.remove-btn {
  background: none;
  border: 1px solid #ddd;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;
  color: #666;
  font-size: 0.8rem;
}

.remove-btn:hover {
  background-color: #f5f5f5;
  color: #e74c3c;
  border-color: #e74c3c;
}

.cart-summary {
  margin-top: 40px;
  background-color: #f9f9f9;
  padding: 30px;
  border-radius: 8px;
  text-align: right;
}

.summary-row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
  font-size: 1.1rem;
}

.summary-row.total {
  font-size: 1.5rem;
  font-weight: bold;
  color: #2c3e50;
  margin-top: 20px;
  padding-top: 20px;
  border-top: 1px solid #ddd;
}

.checkout-btn {
  margin-top: 30px;
  padding: 15px 40px;
  background-color: #2c3e50;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1.2rem;
  cursor: pointer;
  width: 100%;
  max-width: 300px;
}

.checkout-btn:hover {
  background-color: #34495e;
}

.empty-cart {
  text-align: center;
  padding: 60px 0;
  color: #888;
}

.continue-shopping {
  display: inline-block;
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #2c3e50;
  color: white;
  text-decoration: none;
  border-radius: 4px;
}

@media (max-width: 600px) {
  .cart-item {
    flex-wrap: wrap;
  }
  
  .item-image {
    width: 60px;
    height: 60px;
  }
  
  .item-total {
    width: 100%;
    text-align: right;
    margin-top: 10px;
  }
}
</style>
