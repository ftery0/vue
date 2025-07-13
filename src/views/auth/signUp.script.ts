import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from '../../stores/auth.store';
import {
  main,
  sign_container,
  signup_view,
  input_box,
  form_control,
  signup_bottom,
  submit_button_div,
  submit_button,
  etc_sign_button,
} from './signUp.style';

export default {
  setup() {
    const router = useRouter();
    const authStore = useAuthStore();

    const email = ref('');
    const userId = ref('');
    const name = ref('');
    const password = ref('');
    const confirmPassword = ref('');
    const errorMessage = ref('');

    const isPasswordMatch = computed(() => {
      return (
        password.value &&
        confirmPassword.value &&
        password.value === confirmPassword.value
      );
    });

    const handleRegister = async () => {
      try {
        errorMessage.value = '';

        if (!isPasswordMatch.value) {
          errorMessage.value = '비밀번호가 일치하지 않습니다.';
          return;
        }

        const result = await authStore.register({
          email: email.value,
          userId: userId.value,
          name: name.value,
          password: password.value,
        });

        if (result.success) {
          router.push('/sign-in');
        } else {
          errorMessage.value = result.message;
        }
      } catch (error: any) {
        errorMessage.value = error.message || '회원가입에 실패했습니다.';
      }
    };

    return {
      email,
      userId,
      name,
      password,
      confirmPassword,
      errorMessage,
      isLoading: authStore.isLoading,
      isPasswordMatch,
      handleRegister,
      // styles
      main,
      sign_container,
      signup_view,
      input_box,
      form_control,
      signup_bottom,
      submit_button_div,
      submit_button,
      etc_sign_button,
    };
  },
};
