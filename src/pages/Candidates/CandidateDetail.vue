<script setup lang="ts">
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useCandidatesStore } from '@/stores/useCandidatesStore';

const route = useRoute();
const router = useRouter();
const candidatesStore = useCandidatesStore();

const getCandidate = async () => {
  const id = Number(route.params.id);

  if (!candidatesStore.candidates.length) {
    await candidatesStore.getCandidates();
  }

  candidatesStore.selectCandidate(id);
}

const goBack = () => {
  router.go(-1);
};

onMounted(getCandidate);
</script>

<template>
  <button class="btn-go-back" @click="goBack">Назад</button>
  <div v-if="candidatesStore.selectedCandidate">
    <h1>{{ candidatesStore.selectedCandidate.fio }}</h1>
    <p>Город: {{ candidatesStore.selectedCandidate.city }}</p>
    <p>Зарплата: {{ candidatesStore.selectedCandidate.salary }}</p>
    <p>Технологии:</p>
    <ul>
      <li
        v-for="technology in candidatesStore.selectedCandidate.technologyList"
        :key="technology"
      >
        {{ technology }}
      </li>
    </ul>
  </div>
  
  
  <div v-else>
    <p>Кандидат не найден.</p>
  </div>
</template>
<style>
.btn-go-back {
  padding: 10px;
  background-color: greenyellow;
}
</style>
