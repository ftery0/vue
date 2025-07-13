<template>
  <div :class="layout">
    <Header @toggleSidebar="toggleSidebar" v-if="!isAuthPage" />
    <Sidebar ref="sidebarRef" v-if="!isAuthPage" />
    <div
      v-if="showSidebar && !isAuthPage"
      :class="overlay"
      @click="toggleSidebar"
    ></div>
    <main :class="content">
      <router-view />
    </main>
  </div>
</template>

<script lang="ts" src="./App.script.ts"></script>
