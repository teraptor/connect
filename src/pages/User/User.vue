<script setup lang="ts">
import { useUserStore } from '@/stores/useUserStore';
import { useRouter } from 'vue-router';
const userStore = useUserStore()
const router = useRouter()

onMounted(async () => {
  await userStore.getUserData()
})
const user = computed(() => userStore.user)

const goBack = () => router.back()
const logout = () => {
  localStorage.removeItem('authToken')
  userStore.user = null
  router.push('/main')
}
</script>
<template>
    <button @click="goBack" class="btn">Назад</button>
  <div>
    <div>Имя: {{ user?.Name }}</div>
    <div>Телефон: {{ user?.Phone }}</div>
    <div>Позиция: {{ user?.Position }}</div>
    <div>Роль: {{ user?.Roles }}</div>
    <div>ТГ аккаунт: {{ user?.TgAccount }}</div>
  </div>
  <button @click="logout" class="btn">Выйти</button>
</template>
<style lang="scss">
.btn {
  padding: 10px;
  background-color: greenyellow;
}
</style>