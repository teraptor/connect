<template>
  <div class="test">
    <CandidatesFilter />
    <CandidatesTable v-if="user" :cols="cols" :data="mockData" />
    <CandidatesList v-else/>
  </div>
</template>

<script setup lang="ts">
import CandidatesList from './Candidates/CandidatesList.vue';
import CandidatesFilter from '@/components/pages/Main/components/CandidatesFilter/CandidatesFilter.vue';
import CandidatesTable from '@/components/pages/Main/components/CandidatesTable/CandidatesTable.vue'
import { useMain } from '@/components/pages/Main/composables/useMain'
import { useUserStore } from '@/stores/useUserStore';

const { cols, mockData } = useMain()
const userStore = useUserStore()
const user = computed(() => userStore.user)
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
