<template>
  <div v-if="!isAuthenticated">
    <router-link to="login" class="btn btn_light _ml">Вход</router-link>
    <router-link to="register" class="btn btn_accent _icon">Регистрация</router-link>
  </div>
  <div v-else>
    <a-dropdown :trigger="['click']">
      <template #overlay>
        <a-menu @click="handleMenuClick">
          <a-menu-item @click="profile">Профиль</a-menu-item>
          <a-menu-item @click="logout">Выход</a-menu-item>
        </a-menu>
      </template>
      <a-button :style="{ backgroundColor: generateAvatarColor(user.name) }" class="avatar-button">
        {{ user.name[0] }}
      </a-button>
    </a-dropdown>
  </div>
</template>

<script setup>
  import { useAuthStore } from '../../../stores/auth';
  import { computed, ref } from 'vue';

  const authStore = useAuthStore();

  const isAuthenticated = computed(() => !!authStore.token);
  const user = computed(() => authStore.user);
  const menuVisible = ref(false);

  const avatarRef = ref(null); // Создаем референс для кнопки

  const showMenu = () => {
    menuVisible.value = true;
  };

  const hideMenu = () => {
    menuVisible.value = false;
  };

  const logout = () => {
    authStore.clearToken();
  };

  const goToProfile = () => {
    // Навигация на страницу профиля
  };

  function generateAvatarColor(userName) {
    const hash = stringHash(userName); // Используем хэш-функцию для получения числового значения из имени
    const hue = (hash % 360) / 360; // Преобразуем хэш в значение оттенка цвета (от 0 до 1)

    return `hsl(${hue * 360}, 80%, 50%)`; // Возвращаем цвет в формате HSL
  }

  function stringHash(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = (hash << 5) - hash + str.charCodeAt(i);
      hash |= 0; // Преобразуем в 32-битное целое число
    }
    return hash;
  }
</script>

<style scoped>
  .user-profile {
    display: flex;
    align-items: center;
  }

  .avatar-button {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    font-size: 18px;
    font-weight: bold;
    color: white;
    cursor: pointer;
    outline: none; /* Убираем стандартную рамку при фокусе */
    border: none; /* Убираем границу кнопки */
  }

  .dropdown-menu {
    position: absolute;
    background-color: #fff;
    border: 1px solid #ccc;
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .dropdown-menu li {
    padding: 10px;
    cursor: pointer;
  }

  .btn_accent {
    margin-left: 10px;
  }
</style>


<!-- 
<script setup>
import { useAuthStore } from '../../../stores/auth';
import { computed, ref } from 'vue';
import { Dropdown, Button as AButton, Menu } from 'ant-design-vue';

const authStore = useAuthStore();

const isAuthenticated = computed(() => !!authStore.token);
const user = computed(() => authStore.user);

function handleMenuClick(e) {
  switch (e.key) {
    case 'logout':
      authStore.clearToken();
      break;
    case 'profile':
      // Навигация на страницу профиля
      break;
  }
}

function generateAvatarColor(userName) {
  const hash = stringHash(userName);
  const hue = (hash % 360) / 360;

  return `hsl(${hue * 360}, 80%, 50%)`;
}

function stringHash(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) - hash + str.charCodeAt(i);
    hash |= 0;
  }
  return hash;
}
</script>

<style scoped>

</style> -->