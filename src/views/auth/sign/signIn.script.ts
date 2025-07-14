import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from '../../../stores/auth.store';

export default {
  setup() {
    const router = useRouter();
    const authStore = useAuthStore();

    const userId = ref('');
    const password = ref('');
    const errorMessage = ref('');

    const handleLogin = async () => {
      try {
        errorMessage.value = '';
        const result = await authStore.login({
          userId: userId.value,
          password: password.value,
        });

        if (result.success) {
          router.push('/');
        } else {
          errorMessage.value = result.message;
        }
      } catch (error: any) {
        errorMessage.value = error.message || '로그인에 실패했습니다.';
      }
    };

    return {
      userId,
      password,
      errorMessage,
      isLoading: authStore.isLoading,
      handleLogin,
    };
  },
};
