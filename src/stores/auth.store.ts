import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import authService, {
  type User,
  type LoginData,
  type RegisterData,
} from '../services/auth.service';

export const useAuthStore = defineStore('auth', () => {
  const user = ref<User | null>(null);
  const isAuthenticated = ref(false);
  const isLoading = ref(false);

  // computed
  const currentUser = computed(() => user.value);
  const isLoggedIn = computed(() => isAuthenticated.value);

  // actions
  const login = async (loginData: LoginData) => {
    try {
      isLoading.value = true;
      const response = await authService.login(loginData);

      if (response.success && response.user) {
        user.value = response.user;
        isAuthenticated.value = true;
        return { success: true, message: response.message };
      } else {
        return { success: false, message: response.message };
      }
    } catch (error: any) {
      return { success: false, message: error.message };
    } finally {
      isLoading.value = false;
    }
  };

  const register = async (registerData: RegisterData) => {
    try {
      isLoading.value = true;
      const response = await authService.register(registerData);

      if (response.success && response.user) {
        user.value = response.user;
        isAuthenticated.value = true;
        return { success: true, message: response.message };
      } else {
        return { success: false, message: response.message };
      }
    } catch (error: any) {
      return { success: false, message: error.message };
    } finally {
      isLoading.value = false;
    }
  };

  const googleLogin = () => {
    authService.googleLogin();
  };

  const logout = async () => {
    try {
      isLoading.value = true;
      await authService.logout();
      user.value = null;
      isAuthenticated.value = false;
      return { success: true, message: '로그아웃되었습니다.' };
    } catch (error: any) {
      return { success: false, message: error.message };
    } finally {
      isLoading.value = false;
    }
  };

  const checkAuthStatus = async () => {
    try {
      const { authenticated, user: userData } =
        await authService.checkAuthStatus();
      isAuthenticated.value = authenticated;
      user.value = userData || null;
      return { success: true, authenticated };
    } catch (error: any) {
      isAuthenticated.value = false;
      user.value = null;
      return { success: false, authenticated: false };
    }
  };

  const setUser = (userData: User) => {
    user.value = userData;
    isAuthenticated.value = true;
  };

  const clearUser = () => {
    user.value = null;
    isAuthenticated.value = false;
  };

  return {
    // state
    user,
    isAuthenticated,
    isLoading,

    // computed
    currentUser,
    isLoggedIn,

    // actions
    login,
    register,
    googleLogin,
    logout,
    checkAuthStatus,
    setUser,
    clearUser,
  };
});
