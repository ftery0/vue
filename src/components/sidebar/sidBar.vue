<template>
  <aside class="sidebar">
    <div class="logo_box">
      <router-link to="/">
        <div></div>
      </router-link>
    </div>
  </aside>
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
.sidebar {
  z-index: 101;
  transform: translateX(-100vw);
  background-color: var(--InterestExistence-colors-brand-background);
  border-right-color: var(--InterestExistence-colors-brand-highlight);
  width: var(--InterestExistence-sizes-full);
  position: fixed;
  height: 100vh;
  overflow-y: hidden;
  .logo_box {
    display: flex;
    height: 5rem;
    -webkit-box-align: center;
    align-items: center;
    margin-inline-start: var(--chakra-space-8);
    margin-inline-end: var(--chakra-space-8);
    margin-bottom: 12px;
    -webkit-box-pack: justify;
    justify-content: space-between;
    a {
      transition-property: var(--chakra-transition-property-common);
      transition-duration: var(--chakra-transition-duration-fast);
      transition-timing-function: var(--chakra-transition-easing-ease-out);
      cursor: pointer;
      text-decoration: none;
      outline: transparent solid 2px;
      outline-offset: 2px;
      border: 0px solid transparent;
      position: relative;
      color: var(--chakra-colors-brand-logoColor);
    }
  }
}
@media screen and (min-width: 80em) {
  .sidebar {
    transform: none;
    width: 315px;
  }
}
</style>
