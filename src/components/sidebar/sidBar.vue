<template>
  <aside
    :class="[
      sidebar,
      { 'sidebar-open': showSidebar, 'sidebar-mobile': isMobile },
    ]"
  >
    <div class="logo_box">
      <a href="/">
        <div>로고</div>
      </a>
    </div>
    <div class="sidebar_box">
      <a href="/best-post">
        <p>best post</p>
      </a>
    </div>
    <div class="sidebar_box">
      <a href="/profile">
        <p>Profile</p>
      </a>
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
