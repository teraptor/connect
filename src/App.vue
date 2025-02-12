<template>
  <ConfigProvider :locale="ru_RU">
    <DefaultLayout>
      <RouterView />
    </DefaultLayout>
  </ConfigProvider>
</template>

<script setup lang="ts">
import { useHead } from '@unhead/vue'
import { ConfigProvider } from 'ant-design-vue'
import ru_RU from 'ant-design-vue/es/locale/ru_RU'
import DefaultLayout from './layouts/DefaultLayout.vue'
import { useRoute } from 'vue-router'
import { computed } from 'vue'

const route = useRoute()
const currentRouteTitle = computed(() => route.meta?.title || '')

useHead({
  title: () => `Staffconnect | ${currentRouteTitle.value}`,
  meta: [
    {
      name: 'description',
      content:
        'StaffConnect — Сервис быстрого и эффективного подбора профессионалов в сфере ИТ',
    },
    { property: 'og:title', content: 'StaffConnect' },
    {
      property: 'og:description',
      content:
        'StaffConnect — Сервис быстрого и эффективного подбора профессионалов в сфере ИТ',
    },
    { property: 'og:image', content: `${window.location.origin}/logo.png` },
    { property: 'og:url', content: 'https://staffconnect.ru/' },
  ],
  link: [
    { rel: 'icon', href: '/favicon.ico', type: 'image/x-icon' },
    { rel: 'apple-touch-icon', href: '/logo.png' },
  ],
})
</script>

<style scoped></style>
