<script setup lang="ts">
import Button from '@/components/ui/Button/Button.vue'
import { useHeaderStore } from '@/stores/layout/useHeaderStore';
import { useUserStore } from '@/stores/useUserStore';
import { useRouter } from 'vue-router';
import { RouteNames } from '@/router/routes/routeNames';
import { onClickOutside } from '@vueuse/core';
import { ref, computed } from 'vue';

const router = useRouter();
const { headerNav } = useHeaderStore();
const userStore = useUserStore();
const isOpen = ref(false);
const dropdown:any = ref(null);

const toggle = () => {
  isOpen.value = !isOpen.value;
};

onClickOutside(dropdown, () => {
  isOpen.value = false;
});

const moveToLogin = () => router.push({ name: RouteNames.MAIN.LOGIN })
const moveToRegister = () => router.push({ name: RouteNames.MAIN.REGISTER })
const user = computed(() => userStore.user)

const logout = () => {
  localStorage.removeItem('authToken')
  userStore.user = null
  router.push('/')
}
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
      <div v-if="user" class="header__nav-user" ref="dropdown">
        <div @click="toggle"> {{ user?.Name }}</div>
        <div v-if="isOpen" class="dropdown-menu">
          <ul class="dropdown-menu__items">
            <li class="dropdown-menu__item">
              <span class="icon icon-user"/>
              <RouterLink to="/user">Личный кабинет</RouterLink>
            </li>
            <li class="dropdown-menu__item logout" @click="logout">
              <span class="icon icon-log-out"/>
              Выйти
            </li>
          </ul>
        </div>
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
  padding: 1rem;
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
      // &:hover {
      //   color: lighten($main-color, 20%)
      // }
    }

    &-user {
      padding: 8px;
      margin: 8px 16px;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;

      .dropdown-menu {
        position: absolute;
        top: 100%;
        right: 1rem;
        background-color: $dropdown-bg;
        border: 1px solid $dropdown-border;
        box-shadow: $box-shadow;
        width: 180px;
        padding: 10px;
        font-size: 16px;
        font-weight: 300;
        color: $help-color;
        border-bottom-left-radius: 4px;
        border-bottom-right-radius: 4px;

        &__items {
          display: flex;
          flex-direction: column;
        }

        &__item {
          padding: 4px;
          display: flex;
          justify-content: flex-start;
          align-items: center;
          gap: 4px;

          &:hover {
            background-color: $dropdown-bg-hover;
          }

          &.logout {
            color: $danger;
          }
        }
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
