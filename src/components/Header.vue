<script setup lang="ts">
import Button from '@/components/ui/Button/Button.vue'
import { useHeaderStore } from '@/stores/layout/useHeaderStore';
import { useUserStore } from '@/stores/useUserStore';
import { useRouter } from 'vue-router';
import { RouteNames } from '@/router/routes/routeNames';

const { headerNav } = useHeaderStore()

const userStore = useUserStore()
onMounted(async () => {
  await userStore.getUserData()
})

const router = useRouter()
const moveToLogin = () => router.push({ name: RouteNames.MAIN.LOGIN })
const moveToRegister = () => router.push({ name: RouteNames.MAIN.REGISTER })
const user = computed(() => userStore.user)
</script>

<template>
  <div class="header">
    <div class="header__logo">
      <RouterLink to="/">
        <img src="/logo_removebg.png" alt="logo" />
      </RouterLink>
    </div>
    <div class="header__nav">
      <div class="header__nav-links">
        <RouterLink 
          class="header__nav-link"        
          v-for="item in headerNav"
          :key="item.title"
          type="link"
          :to="{ name: item.routeName }"
        >
          {{ item.title }}
        </RouterLink>
      </div>
      <div v-if="user" class="header__nav-user">
        <RouterLink to="/user"> {{ user?.Name }}</RouterLink>
      </div>
      <div v-else class="header__nav-auth">
        <Button @click="moveToLogin">Вход</Button>
        <Button type="primary" @click="moveToRegister">Регистрация</Button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.header {
  position: sticky;
  width: 100%;
  top: 0;
  z-index: 50;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 0;
  background-color: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(6px);

  &__logo {
    max-width: 250px;
  }

  &__nav {
    display: flex;

    &-links {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 16px;
      padding: 8px;
    }

    &-link {
      color: $main-color;
      &:hover {
        color: lighten($main-color, 20%)
      }
    }

    &-user {
      background: $main-color;
      color: $light-color;
      padding: 8px;
      margin: 8px 16px;
      border-radius: 8px;

      &:hover {
        background: lighten($main-color, 5%)
      }
    }

    &-auth {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      margin: 8px 16px;
    }
  }
}
</style>
