<template>
  <header v-if="isMobile" class="header">
    <button @click="toggleSidebar" class="toggle-button">☰</button>
    <h1 class="logo">My App</h1>
  </header>

  <aside :class="['sidebar', { active: showSidebar }]">
    <button @click="toggleSidebar" class="close-button">✖</button>
    <nav>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
  </aside>

  <main class="content" :class="{ 'is-mobile': isMobile }">
    <h2>Main Content Area</h2>
    <p>Your main content goes here.</p>
  </main>

  <transition name="fade">
    <div v-if="showSidebar" class="overlay" @click="toggleSidebar"></div>
  </transition>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    const showSidebar = ref(false);
    const isMobile = ref(window.innerWidth < 768);

    const toggleSidebar = () => {
      showSidebar.value = !showSidebar.value;
    };

    const handleResize = () => {
      isMobile.value = window.innerWidth < 768;
    };

    window.addEventListener("resize", handleResize);

    return {
      showSidebar,
      isMobile,
      toggleSidebar,
    };
  },
});
</script>

<style lang="scss">
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #333;
  color: white;
  position: relative;
}

.sidebar {
  width: 250px;
  background-color: #333;
  color: white;
  position: fixed;
  height: 100%;
  left: 0;
  top: 0;
  transition: transform 0.3s ease;
  transform: translateX(-100%);
  z-index: 100;

  &.active {
    transform: translateX(0);
  }

  .close-button {
    font-size: 2rem;
    cursor: pointer;
    padding: 1rem;
  }

  nav {
    ul {
      list-style-type: none;
      padding: 0;

      li {
        padding: 1rem;
        a {
          color: white;
          text-decoration: none;
          &:hover {
            text-decoration: underline;
          }
        }
      }
    }
  }
}

.content {
  flex: 1;
  padding: 1rem;
  margin-left: 250px;

  &.is-mobile {
    margin-left: 0;
  }
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 50;
}

@media (max-width: 768px) {
  .sidebar {
    position: absolute;
    transform: translateX(-100%);

    &.active {
      transform: translateX(0);
    }
  }

  .content {
    margin-left: 0;
  }
}
</style>
