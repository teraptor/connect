<template>
  <div class="m-auto max-w-[1440px] px-4">
    <Header />
    <RouterView />
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Header from '@/components/custom-ui/Header/Header.vue'
import Footer from '@/components/custom-ui/Footer/Footer.vue'
</script>

<style scoped></style>
