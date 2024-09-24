<template>
  <form @submit.prevent="handleLogin">
    <div class="login_view">
      <h2>Find Email</h2>
      <div>
        <div class="input_box">
          <div class="form-control">
            <input
              v-model="email"
              placeholder="emil"
              type="text"
              id="email"
              required
            />
          </div>
        </div>
      </div>
      <div class="login_bottom">
        <div class="submit_button_div">
          <button type="submit" class="submit_button">Submit</button>
          <button type="submit" class="submit_button_code">Code</button>
        </div>
        <div class="etc_div">
          <p>
            Back to
            <strong @click="$emit('backToSignIn')">Sign In</strong>
          </p>
          <p>
            new account?
            <router-link to="/sign-up"
              ><strong class="etc_sign_button">Sign Up</strong></router-link
            >
          </p>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
import { defineComponent, ref } from "vue";
import axios from "axios";
export default defineComponent({
  name: "authHomeView",
  setup() {
    const email = ref("");
    const handleLogin = async () => {
      try {
        await axios.post("/auth/find-email", {
          email: email,
        });
      } catch (error) {
        console.log(error);
      }
    };
    return {
      email,
      handleLogin,
    };
  },
});
</script>

<style lang="scss">
@import "@/style/color.scss";

form {
  border-width: 0px;
  border-style: solid;
  box-sizing: border-box;
  overflow-wrap: break-word;
}
.login_view {
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
  .login_bottom {
    display: flex;
    flex-direction: column;
    gap: 24px;
    .etc_div {
      display: flex;
      flex-direction: column;
      gap: 6px;
      p {
        display: flex;
        align-items: first baseline;
        gap: 10px;
        color: $lightgray;
        .etc_lost_button {
          display: inline-flex;
          appearance: none;
          background: none;
          -webkit-box-align: center;
          align-items: center;
          -webkit-box-pack: center;
          justify-content: center;
          user-select: none;
          position: relative;
          white-space: nowrap;
          vertical-align: baseline;
          outline: transparent solid 2px;
          outline-offset: 2px;
          line-height: var(--InterestExistence-lineHeights-normal);
          border-radius: 0px;
          font-weight: var(--InterestExistence-fontWeights-semibold);
          transition-property: var(
            --InterestExistence-transition-property-common
          );
          transition-duration: var(
            --InterestExistence-transition-duration-normal
          );
          width: fit-content;
          font-family: var(--InterestExistence-fonts-brand-arialNarrowBold);
          text-transform: uppercase;
          font-size: 13.5px;
          font-stretch: normal;
          height: auto;
          min-width: var(--InterestExistence-sizes-10);
          padding-inline-start: var(--InterestExistence-space-4);
          padding-inline-end: var(--InterestExistence-space-4);
          color: inherit;
          border-bottom-width: 1px;
          border-bottom-style: dashed;
          border-color: inherit;
          padding: 0px !important;
        }
        .etc_sign_button {
          transition-property: var(
            --InterestExistence-transition-property-common
          );
          transition-duration: var(
            --InterestExistence-transition-duration-fast
          );
          transition-timing-function: var(
            --InterestExistence-transition-easing-ease-out
          );
          cursor: pointer;
          text-decoration: none;
          outline: transparent solid 2px;
          outline-offset: 2px;
          color: inherit;
          border-bottom-width: 1px;
          border-bottom-style: dashed;
          border-color: inherit;
          font-family: var(--InterestExistence-fonts-brand-arialNarrowBold);
          font-size: 13.5px;
          font-weight: var(--InterestExistence-fontWeights-bold);
          line-height: 110%;
          text-transform: uppercase;
        }
      }
    }
    .submit_button_div {
      display: flex;
      -webkit-box-align: center;
      align-items: center;
      flex-direction: row;
      gap: 6px;
      .submit_button_code {
        display: inline-flex;
        appearance: none;
        -webkit-box-align: center;
        align-items: center;
        -webkit-box-pack: center;
        justify-content: center;
        user-select: none;
        position: relative;
        white-space: nowrap;
        vertical-align: middle;
        outline: transparent solid 2px;
        outline-offset: 2px;
        line-height: 100%;
        border-radius: 0px;
        transition-property: var(
          --InterestExistence-transition-property-common
        );
        transition-duration: var(
          --InterestExistence-transition-duration-normal
        );
        width: fit-content;
        padding: 8px;
        font-size: 13.5px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        text-transform: uppercase;
        font-stretch: normal;
        height: var(--InterestExistence-sizes-10);
        min-width: var(--InterestExistence-sizes-10);
        padding-inline-start: 1rem;
        padding-inline-end: 1rem;
        background-color: var(--InterestExistence-colors-white);
        color: var(--InterestExistence-colors-brand-logoColor);
        border: 1px solid var(--InterestExistence-colors-brand-logoColor);
        cursor: pointer;
      }
      .submit_button {
        display: inline-flex;
        appearance: none;
        -webkit-box-align: center;
        align-items: center;
        -webkit-box-pack: center;
        justify-content: center;
        user-select: none;
        position: relative;
        white-space: nowrap;
        vertical-align: middle;
        outline: transparent solid 2px;
        outline-offset: 2px;
        line-height: 100%;
        border-radius: 0px;
        transition-property: var(
          --InterestExistence-transition-property-common
        );
        transition-duration: var(
          --InterestExistence-transition-duration-normal
        );
        width: fit-content;
        padding: 8px;
        font-size: 13.5px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        text-transform: uppercase;
        font-stretch: normal;
        height: var(--InterestExistence-sizes-10);
        min-width: var(--InterestExistence-sizes-10);
        padding-inline-start: 1rem;
        padding-inline-end: 1rem;
        color: $staticWhite;
        background-color: $baseColor;
        border: 1px solid transparent;
        cursor: pointer;
      }
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
      transition-property: var(--InterestExistence-transition-property-common);
      transition-duration: var(--InterestExistence-transition-duration-normal);
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
  }
}
</style>
