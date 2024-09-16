<template>
  <main>
    <div class="login-container">
      <h2>Singin</h2>
      <form @submit.prevent="handleLogin">
        <div>
          <label for="username">Id</label>
          <input v-model="username" type="text" id="username" required />
        </div>
        <div>
          <label for="password">Password</label>
          <input v-model="password" type="password" id="password" required />
        </div>
        <button type="submit">로그인</button>
        <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
      </form>
    </div>
  </main>
</template>

<script>
import { defineComponent, ref } from "vue";
import axios from "axios";

export default defineComponent({
  name: "SignInView",
  setup() {
    const username = ref("");
    const password = ref("");
    const errorMessage = ref("");

    const handleLogin = async () => {
      try {
        const response = await axios.post("/auth/sign", {
          username: username.value,
          password: password.value,
        });

        if (response.status === 200) {
          window.location.href = "/";
        }
      } catch (error) {
        errorMessage.value = "로그인 실패. 다시 시도해 주세요.";
      }
    };

    return {
      username,
      password,
      errorMessage,
      handleLogin,
    };
  },
});
</script>

<style>
main {
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
}
.login-container {
  width: 100%;
}
</style>
