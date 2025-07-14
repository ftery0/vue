<template>
  <div class="profile-container">
    <div class="profile-header">
      <img
        :src="profile.profileImage || defaultProfileImage"
        class="profile-image"
        alt="profile"
      />
      <div class="profile-info">
        <div class="profile-name">{{ profile.name }}</div>
        <div class="profile-id">@{{ profile.userId }}</div>
        <div class="profile-bio">{{ profile.bio }}</div>
        <div class="profile-stats">
          <span
            >팔로워 <b>{{ profile.followers.length }}</b></span
          >
          <span
            >팔로잉 <b>{{ profile.following.length }}</b></span
          >
        </div>
      </div>
    </div>
    <div class="post-list">
      <h3>게시물</h3>
      <div v-if="posts.length === 0">게시물이 없습니다.</div>
      <div v-else>
        <div v-for="post in posts" :key="post._id" class="post-item">
          <div class="post-content">{{ post.content }}</div>
          <div class="post-date">{{ post.createdAt }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import script from './profile.script';
export default {
  ...script,
  name: 'ProfileView',
};
</script>

<style lang="scss">
@import '../../style/color.scss';
@import './profile.style.scss';
</style>
