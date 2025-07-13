<template>
  <aside
    :class="[
      sidebar,
      { 'sidebar-open': showSidebar, 'sidebar-mobile': isMobile },
    ]"
  >
    <div class="logo_box">
      <router-link to="/">
        <div>로고</div>
      </router-link>
    </div>
    <div class="sidebar_box">
      <router-link to="/profile">
        <p>best post</p>
      </router-link>
    </div>
    <div class="sidebar_box">
      <router-link to="/profile">
        <p>Profile</p>
      </router-link>
    </div>
  </aside>

  <!-- 오버레이 -->
  <div
    class="overlay"
    v-if="isMobile && showSidebar"
    @click="toggleSidebar"
  ></div>
</template>

<script lang="ts" src="./sidBar.script.ts"></script>
