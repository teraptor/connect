<script setup lang="ts">
import { useUserStore } from '@/stores/useUserStore';


const userStore = useUserStore();
const user = computed(() => userStore.user)
</script>
<template>
  <div>{{ user?.Name }}</div>
</template>
<style lang="scss" scoped>

</style>