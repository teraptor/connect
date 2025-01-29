<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';
import { useCandidatesStore } from '@/stores/useCandidatesStore';
import { computed, onMounted } from 'vue';
import Button from '@/components/ui/Button.vue';

const route = useRoute();
const router = useRouter();
const store = useCandidatesStore();

const candidateId = route.params.id as string;

onMounted(async () => {
  if (!store.candidates.length) {
    await store.getCandidates();
  }
  store.selectCandidate(candidateId);
});

const candidate = computed(() => store.selectedCandidate);

const candidateWorkFormat = [
  { label: 'Командировки', value: candidate.value?.work_format.business_trip },
  { label: 'Работа над иностранными проектами', value: candidate.value?.work_format.foreign_project },
  { label: 'Релокация за границу', value: candidate.value?.work_format.foreign_relocate },
  { label: 'Релокация внутри страны', value: candidate.value?.work_format.national_relocate },
  { label: 'Работа в арендуемой команде', value: candidate.value?.work_format.rent_in_team },
];
const goBack = () => router.go(-1);
</script>

<template>
  <div class="candidate">
    <Button
      @click="goBack"
      type="button"
      text="Назад"
      button-type="danger" 
      size="small"
    />
    <div class="candidate__detail" v-if="candidate">
      <h2 class="candidate__detail-name">{{ candidate.name }} {{ candidate.lastname }} {{ candidate.surname }}</h2>
      <div class="candidate__detail-salary">
        <h3 class="candidate__detail-salary-title"> Зарплатные ожидания: </h3>
        <p class="candidate__detail-salary-hour">{{ candidate.salary.salary_hour }} RUB/час</p> 
        <p class="candidate__detail-salary-month">{{ candidate.salary.salary_month }} RUB/мес</p> 
      </div>
      <div class="candidate__detail-format">
        <h3 class="candidate__detail-format-title">Формат работы:</h3>
        <ul class="candidate__detail-format-items">
          <li
            class="candidate__detail-format-item"
            v-for="(item, index) in candidateWorkFormat"
            :key="index"
          >
            {{ item.label }}: {{ item.value ? 'Да' : 'Нет' }}
          </li>
        </ul>
      </div>
    </div>
    <div v-else>
      <p>Кандидат не найден.</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.candidate {
  padding: 20px;

  &__detail {
    display: flex;
    flex-direction: column;
    gap: 6px;
    background-color: $bg-card-color;
    margin: 20px 0;
    padding: 20px;
    border-radius: 10px;
    cursor: pointer;
    box-shadow: $box-shadow;
    transition: transform 0.2s;
    font-size: 14px;

    &-name {
      font-size: 24px;
      font-weight: 900;
      margin-bottom: 10px;
      border-bottom: 1px solid $border-light;
      text-transform: uppercase;
    }

    &-salary,
    &-format {
      display: flex;
      flex-direction: column;
      align-items: flex-start;

      &-title {
        font-size: 18px;
        font-weight: 500;
      }
    }
  }
}
</style>