<template>
  <div class="flex">
    <CandidatesFilter />
    <CandidatesTable :cols="cols" :data="mockData" />
  </div>
</template>

<script setup lang="ts">
import CandidatesTable from '@/components/pages/Main/components/CandidatesTable/CandidatesTable.vue'
import CandidatesFilter from './components/CandidatesFilter/CandidatesFilter.vue'

import { useMain } from '@/components/pages/Main/composables/useMain'
const { cols, mockData } = useMain()
</script>

<style scoped></style>
