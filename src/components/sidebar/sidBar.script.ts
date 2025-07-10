import { defineComponent, ref, onMounted, onUnmounted } from 'vue';
import { sidebar } from './sidBar.style';

export default defineComponent({
  emits: ['toggle'],
  setup() {
    const showSidebar = ref(false);
    const isMobile = ref(window.innerWidth < 1280);

    const toggleSidebar = () => {
      showSidebar.value = !showSidebar.value;
    };

    const handleResize = () => {
      isMobile.value = window.innerWidth < 1280;
      if (!isMobile.value) showSidebar.value = false;
    };

    onMounted(() => {
      window.addEventListener('resize', handleResize);
      handleResize();
    });

    onUnmounted(() => {
      window.removeEventListener('resize', handleResize);
    });

    return {
      showSidebar,
      isMobile,
      toggleSidebar,
      sidebar,
    };
  },
});
