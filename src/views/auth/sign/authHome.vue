<script setup>
import { ref } from "vue";
import SignIn from "./signIn.vue";
import LostAccount from "./lostAccount/lostAccount.vue";

// 상태 관리
const isSignIn = ref(true);

const switchToLostAccount = () => {
  isSignIn.value = false;
};

const switchToSignIn = () => {
  isSignIn.value = true;
};
</script>

<template>
  <main class="main">
    <div class="main_box">
      <div class="container">
        <SignIn v-if="isSignIn" @lostAccount="switchToLostAccount" />
        <LostAccount v-else @backToSignIn="switchToSignIn" />
      </div>
    </div>
  </main>
</template>
<style lang="scss">
@import "../../../style/color.scss";
.main {
  display: flex;
  width: 100%;
  height: 100%;
  padding: 0px;
  margin: 0px;
  min-height: 100vh;
  -webkit-box-pack: center;
  justify-content: center;
  align-items: flex-start;
}
.main_box {
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
}

.container {
  border-width: 1px;
  border-style: dotted;
  border-image: initial;
  border-color: $baseColor;
  margin: 50px 10px 10px;
  padding: 24px;
  width: 100%;
  max-width: 400px;
}
@media screen and (min-width: 48em) {
  .container {
    padding: 48px;
  }
}
@media screen and (min-width: 30em) {
  .container {
    margin-top: 100px;
  }
}
strong {
  cursor: pointer;
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
  transition-property: var(--InterestExistence-transition-property-common);
  transition-duration: var(--InterestExistence-transition-duration-normal);
  width: fit-content;
  font-family: var(--InterestExistence-fonts-brand-arialNarrowBold);
  text-transform: uppercase;
  font-size: 13.5px;
  font-stretch: normal;
  height: auto;
  min-width: var(--InterestExistence-sizes-10);
  padding-inline-start: var(--InterestExistence-space-4);
  padding-inline-end: var(--InterestExistence-space-4);
  border-bottom-width: 1px;
  border-bottom-style: dashed;
  border-color: inherit;
  padding: 0px !important;
}
strong:hover {
  color: var(--InterestExistence-colors-brand-logoColor);
}
</style>
