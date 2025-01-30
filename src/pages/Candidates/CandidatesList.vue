<script setup lang="ts">
import { onMounted, watch } from 'vue';
import { useCandidatesStore } from '@/stores/useCandidatesStore';
import CandidatesCard from '@/components/CandidatesCard.vue';
import Pagination from '@/components/ui/Pagination.vue';

const localPagination = reactive({
  currentPage: 1,
  pageLimit: 10,
});

const candidatesStore = useCandidatesStore();

const loadCandidates = async () => {
  await candidatesStore.getCandidates(
    {
      page: localPagination.currentPage,
      limit: localPagination.pageLimit
    }
  );
};

onMounted(() => {
  loadCandidates();
});

watch(
  [() => localPagination.currentPage, () => localPagination.pageLimit],
  loadCandidates
);
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
      :currentPage="localPagination.currentPage"
      :totalPages="Math.ceil(candidatesStore.candidatesTotal / localPagination.pageLimit)"
      :pageLimit="localPagination.pageLimit"
      @updatePage="localPagination.currentPage = $event"
      @updateLimit="localPagination.pageLimit = $event"
    />
  </div>
</template>

<style scoped>
.candidates-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
  padding: 20px;
}
</style>



