import { defineComponent, ref, onMounted, onUnmounted } from "vue";
import "./sidBar.style";

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

    onMounted(() => {
      window.addEventListener("resize", handleResize);
    });
    onUnmounted(() => {
      window.removeEventListener("resize", handleResize);
    });

    return {
      showSidebar,
      isMobile,
      toggleSidebar,
    };
  },
});
