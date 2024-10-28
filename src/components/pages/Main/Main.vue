<template>
  <div>Main Page</div>
  <div class="w-[300px] h-[200px] bg-slate-600 text-white animate-pulse">
    Tailwind CSS test
  </div>
  <Button />

  <div class="text-3xl flex flex-col items-center">
    <div v-for="item in features" :key="item" class="flex gap-3 w-[400px]">
      <span>✅</span>{{ item }}
    </div>
  </div>
</template>

<script setup lang="ts">
import Button from '@/components/ui/Button/Button.vue'

const features = [
  'Vue 3.5+',
  'Vue Auto Import',
  'ky (instead of axios)',
  'pnpm',
  'Pinia',
  'VueRouter',
  'Vite',
  'TypeScript',
  'Tailwind CSS',
  'Vitest',
  'Ant Design',
]

const some = ref('1234')
</script>

<style scoped></style>
