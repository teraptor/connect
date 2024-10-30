<template>
  <div :class="$style.wrapper">
    <img src="/logo.png" alt="logo" />
    <div class="text-3xl max-sm:text-center">Регистрация</div>
    <Card title="Форма регистрации">
      <RegisterForm />
    </Card>
    <div class="flex items-center justify-center">
      <span>Уже есть аккаунт?</span>
      <Button type="link" class="text-base" @click="moveToLogin">
        Войти
      </Button>
    </div>
  </div>
</template>

<script setup lang="ts">
import Card from '@/components/ui/Card/Card.vue'
import RegisterForm from '@/components/pages/Register/components/RegisterForm.vue'
import Button from '@/components/ui/Button/Button.vue'
import { RouteNames } from '@/router/routes/routeNames'

const router = useRouter()

const moveToLogin = () => {
  router.push({ name: RouteNames.MAIN.LOGIN })
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
