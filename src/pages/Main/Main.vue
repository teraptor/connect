<template>
  <div class="test">
    <CandidatesFilter />
    <CandidatesList />
  </div>
</template>

<script setup lang="ts">
import CandidatesList from '../Candidates/CandidatesList.vue';
import CandidatesFilter from '@/components/pages/Main/components/CandidatesFilter/CandidatesFilter.vue';

import { useMain } from '@/components/pages/Main/composables/useMain'
const { cols, mockData } = useMain()
</script>

<style scoped lang="scss">
  .test {
    display: flex;
    width: 100%;
  }
  .filter {
    width: 25%;
  }
  .candidates-list {
    flex: 1;
  }
</style>

