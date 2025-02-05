<script setup lang="ts">
import { ref, reactive, watch, onMounted } from 'vue'
import { useCandidatesStore } from '@/stores/useCandidatesStore'
import CandidatesCard from '@/components/CandidatesCard.vue'
import Pagination from '@/components/ui/Pagination.vue'
import FilterPanel from '../../components/FilterPanel.vue'

const candidatesStore = useCandidatesStore()

const localPagination = reactive({
  currentPage: 1,
  pageLimit: 10,
})

const availableLanguages = ref([
  { id: 'en', name: 'English' },
  { id: 'ch', name: 'Chinese' },
  { id: 'fr', name: 'French' },
])

const availableSpecializations = ref([
  { id: '1C_dev', name: '1С разработчик' },
  { id: 'frontend_dev', name: 'Frontend разработчик' },
  { id: 'backend_dev', name: 'Backend разработчик' },
])

const availableSubcategories = ref([
  { id: 'backend', name: 'Backend' },
  { id: 'frontend', name: 'Frontend' },
  { id: 'devops', name: 'DevOps' },
  { id: 'mobile', name: 'Mobile' },
])

const appliedFilters = ref({
  languages: [] as string[],
  specializations: [] as string[],
  subcategories: [] as string[],
})

const applyFilter = (filters: {
  languages: string[]
  specializations: string[]
  subcategories: string[]
}) => {
  appliedFilters.value = filters
  loadCandidates()
}

const loadCandidates = async () => {
  const filters = {
    languages: availableLanguages.value.filter(lang =>
      appliedFilters.value.languages.includes(lang.id),
    ),
    specializations: availableSpecializations.value.filter(spec =>
      appliedFilters.value.specializations.includes(spec.id),
    ),
    subcategories: availableSubcategories.value.filter(subcat =>
      appliedFilters.value.subcategories.includes(subcat.id),
    ),
  }

  await candidatesStore.getCandidates(
    { page: localPagination.currentPage, limit: localPagination.pageLimit },
    filters,
  )
}

onMounted(() => {
  loadCandidates()
})

watch(
  [() => localPagination.currentPage, () => localPagination.pageLimit],
  loadCandidates,
)
</script>

<template>
  <div class="candidates-list">
    <FilterPanel
      :availableLanguages="availableLanguages"
      :availableSpecializations="availableSpecializations"
      :availableSubcategories="availableSubcategories"
      @applyFilter="applyFilter"
    />
    <div class="candidates-list__items">
      <CandidatesCard
        v-for="candidate in candidatesStore.candidates"
        :key="candidate.id"
        :candidate="candidate"
      />
    </div>
  </div>
  <Pagination
    :currentPage="localPagination.currentPage"
    :totalPages="
      Math.ceil(candidatesStore.candidatesTotal / localPagination.pageLimit)
    "
    :pageLimit="localPagination.pageLimit"
    @updatePage="localPagination.currentPage = $event"
    @updateLimit="localPagination.pageLimit = $event"
  />
</template>

<style lang="scss" scoped>
.candidates-list {
  padding: 20px;
  display: flex;
  justify-content: flex-start;
  gap: 20px;

  &__items {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 15px;
    padding: 20px;
  }
}
</style>
