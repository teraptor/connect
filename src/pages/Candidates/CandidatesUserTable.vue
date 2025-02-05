<template>
  <div>
    <h1>Список кандидатов</h1>
    <table border="1" cellspacing="0" cellpadding="5">
      <thead>
        <tr>
          <th>Имя</th>
          <th>Фамилия</th>
          <th>Страна</th>
          <th>Работа (полная ставка)</th>
          <th>Работа (частичная ставка)</th>
          <th>Зарплата (почасовая)</th>
          <th>Зарплата (месячная)</th>
          <th>Тип работы</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="candidate in candidates" :key="candidate.id">
          <td>{{ candidate.name }} {{ candidate.surname }}</td>
          <td>{{ candidate.surname }}</td>
          <td>{{ candidate.country }}</td>
          <td>{{ candidate.employement.fulltime ? 'Да' : 'Нет' }}</td>
          <td>{{ candidate.employement.parttime ? 'Да' : 'Нет' }}</td>
          <td>{{ candidate.salary.salary_hour }}</td>
          <td>{{ candidate.salary.salary_month }}</td>
          <td>{{ candidate.work_format.work_type }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useCandidatesStore } from '@/stores/useCandidatesStore'

const candidatesStore = useCandidatesStore()
const candidates = ref([])

onMounted(async () => {
  await candidatesStore.getCandidates()
  candidates.value = candidatesStore.candidates
})
</script>

<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}

th,
td {
  text-align: left;
  padding: 8px;
}

th {
  background-color: #f2f2f2;
}
</style>
