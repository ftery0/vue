import { ref } from "vue";
import Header from "./components/headers/header.vue";
import Sidebar from "./components/sidebar/sidBar.vue";
import { layout, content, overlay } from "./App.style";

type SidebarInstance = {
  toggleSidebar: () => void;
};
const sidebarRef = ref<SidebarInstance | null>(null);
const showSidebar = ref(false);

const toggleSidebar = () => {
  showSidebar.value = !showSidebar.value;
  sidebarRef.value?.toggleSidebar();
};

export default {
  components: {
    Header,
    Sidebar,
  },
  setup() {
    return {
      sidebarRef,
      toggleSidebar,
      showSidebar,
      layout,
      content,
      overlay,
    };
  },
};
