<template>
  <div class="docs-view">
    <div class="content">
      <h1>Vue Shopping Mall Documentation</h1>
      <p>
        이 프로젝트는 Vue 3와 Pinia를 사용하여 구축된 쇼핑몰 데모 사이트입니다.
      </p>

      <section>
        <h2>프로젝트 개요</h2>
        <p>
          사용자는 상품 목록을 조회하고, 상세 정보를 확인하며, 장바구니에 상품을
          담을 수 있습니다. 상단 네비게이션을 통해 남성/여성 카테고리별로 상품을
          필터링할 수 있습니다.
        </p>
      </section>

      <section>
        <h2>기술 스택</h2>
        <ul>
          <li><strong>Framework:</strong> Vue 3 (Composition API)</li>
          <li><strong>State Management:</strong> Pinia</li>
          <li><strong>Routing:</strong> Vue Router 4</li>
          <li><strong>Language:</strong> TypeScript</li>
        </ul>
      </section>

      <section>
        <h2>시작하기</h2>
        <p>
          상단 메뉴에서 <strong>Men</strong> 또는 <strong>Women</strong>을
          선택하여 쇼핑을 시작하세요.
        </p>
        <div class="actions">
          <router-link to="/shop" class="btn-primary"
            >전체 상품 보기</router-link
          >
        </div>
      </section>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'DocsView',
});
</script>

<style scoped>
.docs-view {
  max-width: 800px;
  margin: 0 auto;
  padding: 40px 20px;
  line-height: 1.6;
  color: #333;
}

h1 {
  font-size: 2.5rem;
  margin-bottom: 20px;
  color: #2c3e50;
  border-bottom: 2px solid #eee;
  padding-bottom: 10px;
}

h2 {
  font-size: 1.8rem;
  margin-top: 40px;
  margin-bottom: 15px;
  color: #42b983;
}

ul {
  list-style-type: disc;
  padding-left: 20px;
}

li {
  margin-bottom: 10px;
}

.actions {
  margin-top: 30px;
}

.btn-primary {
  display: inline-block;
  padding: 12px 24px;
  background-color: #42b983;
  color: white;
  text-decoration: none;
  border-radius: 4px;
  font-weight: bold;
  transition: background-color 0.2s;
}

.btn-primary:hover {
  background-color: #3aa876;
}
</style>
