<script setup lang="ts">
import { useUserStore } from '@/stores/useUserStore';
import { useRouter } from 'vue-router';
import CandidatesUserTable from '../Candidates/CandidatesUserTable.vue';
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
  <div class="container__btn">
    <button @click="goBack" class="btn">Назад</button>
    <button @click="logout" class="btn">Выйти</button>
  </div>
  <div class="container__content">
    <div>
      <div>Имя: {{ user?.Name }}</div>
      <div>Телефон: {{ user?.Phone }}</div>
      <div>Позиция: {{ user?.Position }}</div>
      <div>Роль: {{ user?.Roles }}</div>
      <div>ТГ аккаунт: {{ user?.TgAccount }}</div>
    </div>
    <CandidatesUserTable/>
  </div>
</template>
<style lang="scss">
.container__btn {
  display: flex;
}
.btn {
  padding: 10px;
  background-color: greenyellow;
}
.container__content {
  display: flex;
  gap: 30px;
  padding: 20px;
}
</style>