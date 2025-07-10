<template>
  <div :class="layout">
    <Header @toggleSidebar="toggleSidebar" />
    <Sidebar ref="sidebarRef" />
    <div v-if="showSidebar" :class="overlay" @click="toggleSidebar"></div>
    <main :class="content">
      <router-view />
    </main>
  </div>
</template>

<script lang="ts" src="./App.script.ts"></script>
