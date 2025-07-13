import { ref, computed } from 'vue';
import { useRoute } from 'vue-router';
import Header from './components/headers/header.vue';
import Sidebar from './components/sidebar/sidBar.vue';
import { layout, content, overlay } from './App.style';

type SidebarInstance = {
  toggleSidebar: () => void;
};

export default {
  components: {
    Header,
    Sidebar,
  },
  setup() {
    const sidebarRef = ref<SidebarInstance | null>(null);
    const showSidebar = ref(false);
    const route = useRoute();

    const isAuthPage = computed(() => {
      return route.path === '/sign-in' || route.path === '/sign-up';
    });

    const toggleSidebar = () => {
      showSidebar.value = !showSidebar.value;
      sidebarRef.value?.toggleSidebar();
    };

    return {
      sidebarRef,
      toggleSidebar,
      showSidebar,
      isAuthPage,
      layout,
      content,
      overlay,
    };
  },
};
