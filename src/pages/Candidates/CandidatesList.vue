<script setup lang="ts">
import { onMounted, watch } from 'vue';
import { useCandidatesStore } from '@/stores/useCandidatesStore';
import CandidatesCard from './CandidatesCard.vue';
import Pagination from '@/components/ui/Pagination.vue';

const candidatesStore = useCandidatesStore();

const loadCandidates = async () => {
  await candidatesStore.getCandidates({
    page: candidatesStore.candidatesPagination.currentPage,
    limit: candidatesStore.candidatesPagination.pageLimit,
  });
};

onMounted(() => {
  loadCandidates();
});

watch([() => candidatesStore.candidatesPagination.currentPage, () => candidatesStore.candidatesPagination.pageLimit], loadCandidates);
</script>

<template>
  <div>
    <div class="candidates-list">
      <CandidatesCard
        v-for="candidate in candidatesStore.candidates"
        :key="candidate.id"
        :candidate="candidate"
      />
    </div>
    <Pagination
      :currentPage="candidatesStore.candidatesPagination.currentPage"
      :totalPages="Math.ceil(candidatesStore.candidatesPagination.total / candidatesStore.candidatesPagination.pageLimit)"
      :pageLimit="candidatesStore.candidatesPagination.pageLimit"
      @updatePage="candidatesStore.candidatesPagination.currentPage = $event"
      @updateLimit="candidatesStore.candidatesPagination.pageLimit = $event"
    />
  </div>
</template>

<style scoped>
.candidates-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
}
</style>



