<script setup lang="ts">
import { ref, onMounted, watch, reactive } from 'vue'
import { useCandidatesStore } from '@/stores/useCandidatesStore'
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
  <FilterPanel
    :availableLanguages="availableLanguages"
    :availableSpecializations="availableSpecializations"
    :availableSubcategories="availableSubcategories"
    @applyFilter="applyFilter"
    variant="table"
  />
  <div class="candidates-table">
    <table class="candidates-table__table">
      <thead class="candidates-table__table-head">
        <tr class="candidates-table__table-row">
          <th class="candidates-table__table-header">Имя</th>
          <th class="candidates-table__table-header">Фамилия</th>
          <th class="candidates-table__table-header">Ставка в час</th>
          <th class="candidates-table__table-header">Ставка в месяц</th>
        </tr>
      </thead>
      <tbody class="candidates-table__table-body">
        <tr
          class="candidates-table__table-row"
          v-for="candidate in candidatesStore.candidates"
          :key="candidate.id"
        >
          <td class="candidates-table__table-data">
            <RouterLink :to="`candidates/${candidate.id}`">
              {{ candidate.name }}
            </RouterLink>
          </td>
          <td class="candidates-table__table-data">{{ candidate.lastname }}</td>
          <td class="candidates-table__table-data">
            {{ candidate.salary.salary_hour }}
          </td>
          <td class="candidates-table__table-data">
            {{ candidate.salary.salary_month }}
          </td>
        </tr>
      </tbody>
    </table>
    <Pagination
      :currentPage="localPagination.currentPage"
      :totalPages="
        Math.ceil(candidatesStore.candidatesTotal / localPagination.pageLimit)
      "
      :pageLimit="localPagination.pageLimit"
      @updatePage="localPagination.currentPage = $event"
      @updateLimit="localPagination.pageLimit = $event"
    />
  </div>
</template>

<style lang="scss" scoped>
.candidates-table {
  width: 100%;
  padding: 20px;

  &__table {
    width: auto;
    overflow-x: auto;
    background-color: $light-color;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    cursor: pointer;

    &-head {
      box-shadow: $box-shadow;
      background-color: $light-color;
      border-top-left-radius: 20px;
      border-top-right-radius: 20px;
      font-size: 14px;
      font-weight: 500;
    }

    &-header {
      text-align: left;
      width: 10%;
      padding: 20px;
      &:first-child {
        border-top-left-radius: 20px;
      }
      &:last-child {
        border-top-right-radius: 20px;
      }
    }

    &-body {
      font-size: 14px;
      font-weight: 300;
    }

    &-data {
      text-align: left;
      width: 10%;
      padding: 20px;
      border-bottom: 1px solid $border-light;
    }
  }
}
</style>
