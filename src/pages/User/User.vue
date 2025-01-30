<script setup lang="ts">
import { onMounted, watch, reactive } from 'vue';
import { useCandidatesStore } from '@/stores/useCandidatesStore';
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
          <td class="candidates-table__table-data">{{ candidate.salary.salary_hour }}</td>
          <td class="candidates-table__table-data">{{ candidate.salary.salary_month }}</td>
        </tr>
      </tbody>
    </table>
    <Pagination
      :currentPage="localPagination.currentPage"
      :totalPages="Math.ceil(candidatesStore.candidatesTotal / localPagination.pageLimit)"
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
      font-weight: 400;
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

