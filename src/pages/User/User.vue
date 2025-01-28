<template>
  <CandidatesTable v-if="user" :cols="cols" :data="mockData" />
</template>
<script setup lang="ts">
import CandidatesTable from '@/components/pages/Main/components/CandidatesTable/CandidatesTable.vue'
import { useMain } from '@/components/pages/Main/composables/useMain'
import { useUserStore } from '@/stores/useUserStore';

const { cols, mockData } = useMain()
const userStore = useUserStore()
const user = computed(() => userStore.user)
</script>

