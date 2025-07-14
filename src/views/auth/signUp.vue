<template>
  <main class="main">
    <div class="sign-container">
      <form @submit.prevent="handleRegister">
        <div class="signup-view">
          <h2>SignUp</h2>
          <div class="input-box">
            <div class="form-control">
              <input
                v-model="email"
                placeholder="email"
                type="email"
                id="email"
                required
              />
            </div>
            <div class="form-control">
              <input
                v-model="userId"
                placeholder="userId"
                type="text"
                id="userId"
                required
              />
            </div>
            <div class="form-control">
              <input
                v-model="name"
                placeholder="name"
                type="text"
                id="name"
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
          <div class="signup-bottom">
            <p>
              By clicking Join, you agree to our
              <router-link to="/terms">Terms</router-link> and
              <router-link to="/privacy">Privacy</router-link>
              conditions.
            </p>
            <div class="submit-button-div">
              <button
                type="submit"
                class="submit-button"
                :disabled="isLoading || !isPasswordMatch"
              >
                {{ isLoading ? '가입 중...' : 'Sign Up' }}
              </button>
            </div>

            <p>
              Already signed up?
              <router-link to="/sign-in">
                <strong class="etc-sign-button">Signin</strong>
              </router-link>
            </p>
            <p>
              Curious?
              <router-link to="/learn-more">
                <strong class="etc-sign-button">Learn more</strong>
              </router-link>
            </p>
          </div>
        </div>
      </form>
    </div>
  </main>
</template>

<script lang="ts" src="./signUp.script.ts"></script>

<style lang="scss" src="./signUp.style.scss"></style>
