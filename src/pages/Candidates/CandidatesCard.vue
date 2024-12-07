<script setup lang="ts">
import { useRouter } from 'vue-router';
import { defineProps } from 'vue';
import { RouteNames } from '@/router/routes/routeNames';

const props = defineProps({
  candidate: {
    type: Object,
    required: true,
  },
});

const router = useRouter();

const goToCandidateDetail = () => {
  router.push({ name: RouteNames.MAIN.MAIN_PAGE.children.CANDIDATES_DETAIL, params: { id: props.candidate.id } });
};
</script>

<template>
  <div class="candidate-card" @click="goToCandidateDetail">
    <div class="candidate-specialization">MedTech && EdTech</div>
    <div class="candidate-container">
      <div class="candidate-photo"></div>
      <div class="candidate-items">
        <div class="candidate-name">{{ candidate.fio }}</div>
        <div class="candidate-city">{{ candidate.city }}</div>
        <div class="candidate-greid">{{ candidate.greid }}</div>
      </div>
    </div>
    <div class="candidate-container-salary">
      <div class="candidate-salary">{{ candidate.salary }}</div>
      <div class="candidate-job-title">Frontend</div>
    </div>
    <ul>
      <li
        v-for="technology in candidate.technologyList"
        :key="technology"
      >
        {{ technology }}
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
.candidate-card {
  cursor: pointer;
  transition: transform 0.2s;
}
.candidate-card:hover {
  transform: scale(1.02);
}

.candidate-specialization {
  font-size: 14px;
  font-weight: 300;
  color: #686868;
  border-bottom: 1px solid #686868;
  margin-bottom: 10px;
}

.candidate-container {
  width: 100%;
  height: 50%;
  display: flex;
  margin-bottom: 10px;
}
.candidate-card {
  width: 500px;
  height: 500px;
  background: #F8F8FF;
  margin: 10px;
  padding: 20px;
  border-radius: 10px;
}
.candidate-photo {
  width: 50%;
  height: 100%;
  border: 1px solid #686868;
  border-radius: 4px;
}
.candidate-items {
  display: flex;
  flex-direction: column;
  width: 50%;
  margin-left: 20px;
}
.candidate-name {
  font-size: 16px;
  font-weight: 900;
}
.candidate-city {
  font-weight: 300;
  color: #686868;
}
.candidate-greid {
  font-weight: 600;
  border: 1px solid #686868;
  border-radius: 4px;
  text-align: center;
}

.candidate-container-salary {
  display: flex;
  justify-content: center;
}

.candidate-job-title {
  width: 50%;
}

.candidate-salary {
  text-align: center;
}
</style>
