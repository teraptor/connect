<template>
  <ConfigProvider :locale="ru_RU">
    <DefaultLayout>
      <RouterView />
    </DefaultLayout>
  </ConfigProvider>
</template>

<script setup lang="ts">
import { useHead } from '@unhead/vue';
import { ConfigProvider } from 'ant-design-vue';
import ru_RU from 'ant-design-vue/es/locale/ru_RU';
import DefaultLayout from './layouts/DefaultLayout.vue';
import { useRoute } from 'vue-router';
import { computed } from 'vue';

const route = useRoute()
const currentRouteTitle = computed(() => route.meta?.title || '')

useHead({
  title: () => `Staffconnect | ${currentRouteTitle.value}`,
})
</script>

<style scoped></style>
