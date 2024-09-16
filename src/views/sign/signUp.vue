<template>
  <main>
    <div class="sign-container">
      <h2>SignUp</h2>
      <form @submit.prevent="handleSignUp">
        <div>
          <input
            v-model="email"
            type="text"
            placeholder="email"
            id="email"
            required
          />
        </div>
        <div>
          <input
            v-model="username"
            type="text"
            placeholder="username"
            id="username"
            required
          />
        </div>
        <div>
          <input
            v-model="password"
            placeholder="Password"
            type="password"
            id="password"
            required
          />
        </div>
        <div>
          <input
            v-model="confirmPassword"
            placeholder="confirmPassword"
            type="password"
            id="confirmPassword"
            required
          />
        </div>
        <button type="submit">로그인</button>
      </form>
    </div>
  </main>
</template>

<script>
import { defineComponent, ref } from "vue";
import axios from "axios";

export default defineComponent({
  name: "SignUpView",
  setup() {
    const email = ref("");
    const username = ref("");
    const password = ref("");
    const confirmPassword = ref("");

    const handleSignUp = async () => {
      try {
        const response = await axios.post("/auth/sign-up", {
          username: username.value,
          password: password.value,
          email: email.value,
          confirmPassword: confirmPassword.value,
        });

        if (response.status === 200) {
          window.location.href = "/sign-in";
        }
      } catch (error) {
        console.log(error);
      }
    };

    return {
      username,
      password,
      email,
      confirmPassword,
      handleSignUp,
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

.sign-container {
  width: 200px;
}
</style>
