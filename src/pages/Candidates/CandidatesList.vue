<script setup lang="ts">
import { onMounted } from 'vue';
import { useCandidatesStore } from '@/stores/useCandidatesStore';
import CandidatesCard from './CandidatesCard.vue';
import { useUserStore } from '@/stores/useUserStore';

const candidatesStore = useCandidatesStore();
const getCandidates = candidatesStore.getCandidates();
onMounted(() => {
  getCandidates
});
</script>

<template>
  <div class="candidates-list">
    <CandidatesCard 
      v-for="candidate in candidatesStore.candidates" 
      :key="candidate.id" 
      :candidate="candidate" 
    />
  </div>
</template>
<style>
  .candidates-list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 15px;
  }
</style>
