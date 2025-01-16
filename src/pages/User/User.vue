<script setup lang="ts">
import { useUserStore } from '@/stores/useUserStore';
import { useRouter } from 'vue-router';
const userStore = useUserStore()
const router = useRouter()

onMounted(async () => {
  await userStore.getUserData()
})
const user = computed(() => userStore.user)
</script>
<template>

</template>
<style lang="scss" scoped>

</style>