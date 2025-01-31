<script setup lang="ts">
import { ref, reactive, computed, watch, onMounted } from 'vue';
import { useCandidatesStore } from '@/stores/useCandidatesStore';
import CandidatesCard from '@/components/CandidatesCard.vue';
import Pagination from '@/components/ui/Pagination.vue';
import Button from '@/components/ui/Button.vue';

const candidatesStore = useCandidatesStore();

const localPagination = reactive({
  currentPage: 1,
  pageLimit: 10,
});

const availableLanguages = ref([
  { id: "en", name: "English" },
  { id: "ch", name: "Chinese" },
  { id: "fr", name: "French" },
]);

const availableSpecializations = ref([
  { id: "1C_dev", name: "1С разработчик" },
  { id: "frontend_dev", name: "Frontend разработчик" },
  { id: "backend_dev", name: "Backend разработчик" },
]);

const availableSubcategories = ref([
  { id: "backend", name: "Backend" },
  { id: "frontend", name: "Frontend" },
  { id: "devops", name: "DevOps" },
  { id: "mobile", name: "Mobile" },
]);

const selectedLanguages = ref<string[]>([]);
const selectedSpecializations = ref<string[]>([]);
const selectedSubcategories = ref<string[]>([]);

const appliedLanguagesFilter = ref<string[]>([]);
const appliedSpecializationsFilter = ref<string[]>([]);
const appliedSubcategoriesFilter = ref<string[]>([]);

const languagesFilter = computed(() => ({
  id: "languages",
  languages: availableLanguages.value.filter(lang => appliedLanguagesFilter.value.includes(lang.id))
}));

const specializationsFilter = computed(() => ({
  id: "specialization",
  name: "Специализация",
  specializations: appliedSpecializationsFilter.value.map(specId => {
    const spec = availableSpecializations.value.find(s => s.id === specId);
    return spec ? spec.name : '';
  })
}));

const subcategoriesFilter = computed(() => ({
  id: "subcategory",
  name: "Подкатегория",
  subcategories: appliedSubcategoriesFilter.value.map(subcatId => {
    const subcat = availableSubcategories.value.find(s => s.id === subcatId);
    return subcat ? subcat.name : '';
  })
}));

const loadCandidates = async () => {
  await candidatesStore.getCandidates(
    {
      page: localPagination.currentPage,
      limit: localPagination.pageLimit
    },
    languagesFilter.value,
    specializationsFilter.value,
    subcategoriesFilter.value
  );
};

const applyFilter = () => {
  appliedLanguagesFilter.value = [...selectedLanguages.value];
  appliedSpecializationsFilter.value = [...selectedSpecializations.value];
  appliedSubcategoriesFilter.value = [...selectedSubcategories.value];
  loadCandidates();
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
    <div class="filter">
      <div class="filter__group">
        <label v-for="lang in availableLanguages" :key="lang.id" class="filter__item">
          <input type="checkbox" :value="lang.id" v-model="selectedLanguages" />
          {{ lang.name }}
        </label>
      </div>

      <div class="filter__group">
        <label v-for="spec in availableSpecializations" :key="spec.id" class="filter__item">
          <input type="checkbox" :value="spec.id" v-model="selectedSpecializations" />
          {{ spec.name }}
        </label>
      </div>

      <div class="filter__group">
        <label v-for="subcat in availableSubcategories" :key="subcat.id" class="filter__item">
          <input type="checkbox" :value="subcat.id" v-model="selectedSubcategories" />
          {{ subcat.name }}
        </label>
      </div>

      <Button 
        type="button"
        button-type="primary"
        text="Применить"
        @click="applyFilter"
        size="medium"
      />
    </div>

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

<style lang="scss" scoped>
.filter {
  display: flex;
  gap: 20px;
  padding: 10px;
  align-items: flex-start;
  flex-wrap: wrap;

  &__group {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }

  &__item {
    display: flex;
    align-items: center;
    gap: 5px;
  }
}

.candidates-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
  padding: 20px;
}
</style>






