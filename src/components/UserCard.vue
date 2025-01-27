<script setup lang="ts">
import { useUserStore } from '@/stores/useUserStore';

const userStore = useUserStore()
const user = computed(() => userStore.user)
const getTGLink = (login: string) => `https://t.me/${login.replace('@', '')}`
</script>
<template>
  <div class="user__card">
    <div class="user__card-container">
      <div class="user__card-name">{{ user?.Name }}</div>
      <div>Телефон: <span class="user__card-text">{{ user?.Phone}}</span></div>
      <div>Должность: <span class="user__card-text">{{ user?.Position}}</span></div>
      <div>Почта: <span class="user__card-text">{{ user?.Email}} </span></div>
      <div class="user__card-social-media">
        Coциальные сети: 
        <a v-if="user?.TgAccount" class="icon icon-telegram" :href="getTGLink(user.TgAccount)" />
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.user__card {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 10px;
  
  &-container {
    display: flex;
    flex-direction: column;
    gap: 4px;
    align-items: flex-start;
    background-color: $bg-card-color;
    color: $help-color;
    padding: 10px;
    font-size: 14px;
    font-weight: 300;
    border-radius: 12px;
    width: 100%;
  }

  &-name {
    font-size: 16px;
    font-weight: 600;
    color: $dark-color;
  }

  &-social-media {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 4px;

    .icon {
      color: $main-color;
    }
  }

  &-text {
    color: $main-color;
    font-weight: 400;
  }
}
</style>
