<template>
  <div :class="$style.wrapper">
    <img src="/logo.png" alt="logo" />
    <div class="text-3xl max-sm:text-center">Авторизация</div>
    <Card title="Форма авторизации">
      <LoginForm />
    </Card>
    <div class="flex items-center justify-center">
      <span> У вас еще нет аккаунта?</span>
      <Button type="link" class="text-base" @click="moveToRegister">
        Зарегистрироваться
      </Button>
    </div>
  </div>
</template>

<script setup lang="ts">
import Card from '@/components/ui/Card/Card.vue'
import LoginForm from '@/components/pages/Login/components/LoginForm.vue'
import Button from '@/components/ui/Button/Button.vue'
import { RouteNames } from '@/router/routes/routeNames'

const router = useRouter()

const moveToRegister = () => {
  router.push({ name: RouteNames.MAIN.REGISTER })
}
</script>

<style module lang="scss">
.wrapper {
  @media screen and (max-width: 640px) {
    @apply w-full top-0 left-0 translate-x-0 translate-y-0 p-4;
  }
  @apply absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col gap-2 w-[500px];
}
</style>
