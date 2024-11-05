<template>
  <div
    class="sticky top-0 flex items-center justify-between py-4 z-50 bg-white/50 backdrop-blur-[6px]"
  >
    <div class="max-w-[250px]">
      <RouterLink to="/">
        <img src="/logo_removebg.png" alt="logo" />
      </RouterLink>
    </div>
    <div class="flex gap-2">
      <Button
        v-for="button in navButtons"
        :key="button.title"
        type="link"
        class="text-base"
      >
        <RouterLink :to="{ name: button.routeName }">
          {{ button.title }}
        </RouterLink>
      </Button>
      <Button @click="moveToLogin">Вход</Button>
      <Button type="primary" @click="moveToRegister">Регистрация</Button>
    </div>
  </div>
</template>

<script setup lang="ts">
import Button from '@/components/ui/Button/Button.vue'
import { useHeader } from '@/components/custom-ui/Header/composables/useHeader'

const { navButtons, moveToLogin, moveToRegister } = useHeader()
</script>

<style scoped></style>
