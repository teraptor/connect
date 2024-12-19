<script setup lang="ts">
import { useRoute } from 'vue-router';
import { useCandidatesStore } from '@/stores/useCandidatesStore';
import { computed, onMounted } from 'vue';

const route = useRoute();
const store = useCandidatesStore();

const candidateId = route.params.id as string;

onMounted(async () => {
  if (!store.candidates.length) {
    await store.getCandidates();
  }
  store.selectCandidate(candidateId);
});

const candidate = computed(() => store.selectedCandidate);
</script>

<template>
  <div class="candidate-detail" v-if="candidate">
    <h2 class="candidate-detail__name">{{ candidate.name }} {{ candidate.surname }}</h2>
    <p class="candidate-detail__city">Город: {{ candidate.country }}</p>
    <p class="candidate-detail__salary">
      Зарплатные ожидания: {{ candidate.salary.salary_month }} руб./мес
    </p>
    <p class="candidate-detail__about">О себе: {{ candidate.about }}</p>

    <div class="candidate-detail__skills">
      <h3>Навыки:</h3>
      <ul>
        <li v-for="skill in candidate.skills" :key="skill">{{ skill }}</li>
      </ul>
    </div>

    <div class="candidate-detail__work-format">
      <h3>Формат работы:</h3>
      <ul>
        <li>Удалённо: {{ candidate.work_format.work_type === 'remote' ? 'Да' : 'Нет' }}</li>
        <li>В офисе: {{ candidate.work_format.work_type === 'office' ? 'Да' : 'Нет' }}</li>
        <li>Гибрид: {{ candidate.work_format.work_type === 'hybrid' ? 'Да' : 'Нет' }}</li>
      </ul>
    </div>

    <div class="candidate-detail__employment">
      <h3>Занятость:</h3>
      <ul>
        <li>Полная: {{ candidate.employement.fulltime ? 'Да' : 'Нет' }}</li>
        <li>Частичная: {{ candidate.employement.parttime ? 'Да' : 'Нет' }}</li>
      </ul>
    </div>
  </div>

  <div v-else>
    <p>Кандидат не найден.</p>
  </div>
</template>

<style scoped>
.candidate-detail {
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #f9f9f9;
}
.candidate-detail__name {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
}
.candidate-detail__city,
.candidate-detail__salary,
.candidate-detail__about {
  margin-bottom: 10px;
}
.candidate-detail__skills,
.candidate-detail__work-format,
.candidate-detail__employment {
  margin-top: 20px;
}
.candidate-detail__skills ul,
.candidate-detail__work-format ul,
.candidate-detail__employment ul {
  list-style-type: disc;
  padding-left: 20px;
}
</style>