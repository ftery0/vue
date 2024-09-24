<template>
  <main class="main">
    <div class="sign-container">
      <form @submit.prevent="handleSignUp">
        <div class="signup_view">
          <h2>SignUp</h2>
          <div class="input_box">
            <div class="form-control">
              <input
                v-model="email"
                placeholder="email"
                type="text"
                id="email"
                required
              />
            </div>
            <div class="form-control">
              <input
                v-model="username"
                placeholder="username"
                type="text"
                id="username"
                required
              />
            </div>
            <div class="form-control">
              <input
                v-model="password"
                placeholder="Password"
                type="password"
                id="password"
                required
              />
            </div>
            <div class="form-control">
              <input
                v-model="confirmPassword"
                placeholder="Confirm Password"
                type="password"
                id="confirmPassword"
                required
              />
            </div>
          </div>
          <div class="signup_bottom">
            <p>
              By clicking Join, you agree to our
              <router-link to="/terms">Terms</router-link> and
              <router-link to="/privacy">Privacy</router-link>
              conditions.
            </p>
            <div class="submit_button_div">
              <button type="submit" class="submit_button">Sign Up</button>
            </div>

            <p>
              Already signed up?
              <router-link to="/sign-in"
                ><strong class="etc_sign_button">Signin</strong></router-link
              >
            </p>
            <p>
              Curious?
              <router-link to="/learn-more"
                ><strong class="etc_sign_button"
                  >Learn more</strong
                ></router-link
              >
            </p>
          </div>
        </div>
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

<style lang="scss">
@import "../../style/color.scss";

.sign-container {
  border: 1px dotted $baseColor;
  padding: 48px;
  width: 100%;
  max-width: 400px;
  margin: 50px 10px;
}
@media screen and (min-width: 48em) {
  .sign-container {
    padding: 48px;
  }
}
@media screen and (min-width: 30em) {
  .sign-container {
    margin-top: 100px;
  }
}
.signup_view {
  display: flex;
  flex-direction: column;
  gap: 24px;

  .signup_bottom {
    display: flex;
    flex-direction: column;
    gap: 24px;
    p {
      font-family: Arial, Helvetica, sans-serif;
      gap: 10px;
      color: $lightgray;
    }

    .submit_button_div {
      display: flex;
      justify-content: flex-start;

      .submit_button {
        display: inline-flex;
        justify-content: center;
        align-items: center;
        padding: 8px;
        font-family: Ranchers;
        font-size: 13.5px;
        font-weight: 400;
        text-transform: uppercase;
        color: $staticWhite;
        background-color: $baseColor;
        border: 1px solid transparent;
        cursor: pointer;
        width: fit-content;
        min-width: var(--InterestExistence-sizes-10);
        height: var(--InterestExistence-sizes-10);
      }
    }
  }

  .input_box {
    display: flex;
    flex-direction: column;
    gap: 12px;

    .form-control {
      width: 100%;
      position: relative;
      input:focus {
        border-color: $baseColor;
      }
      input:hover {
        border-color: $baseColor;
      }
      input {
        width: 100%;
        height: 30px;
        padding-inline-start: 10px;
        padding-inline-end: 10px;
        min-width: 0px;
        outline: transparent solid 2px;
        outline-offset: 2px;
        position: relative;
        appearance: none;
        transition-property: var(
          --InterestExistence-transition-property-common
        );
        transition-duration: var(
          --InterestExistence-transition-duration-normal
        );
        font-weight: var(--InterestExistence-fontWeights-normal);
        border-width: 1px;
        border-style: solid;
        border-image: initial;
        border-color: var(--InterestExistence-colors-brand-main);
        line-height: 100%;
        --input-font-size: var(--InterestExistence-fontSizes-md);
        --input-padding: var(--InterestExistence-space-4);
        --input-border-radius: var(--InterestExistence-radii-md);
        --input-height: var(--InterestExistence-sizes-10);
        background: inherit;
        color: var(--InterestExistence-colors-brand-main);
        font-size: 16px;
      }

      input:focus {
        border-color: $baseColor;
      }
    }
  }
}
</style>
