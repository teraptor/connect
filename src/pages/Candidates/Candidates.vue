<script setup lang="ts">
import { onMounted } from 'vue';
import { useCandidatesStore } from '@/stores/useCandidatesStore';

const candidatesStore = useCandidatesStore();

onMounted(() => {
  candidatesStore.getCandidates();
});

</script>

<template>
  <div v-for="candidate in candidatesStore.candidates" :key="candidate.id">
    <div class="candidate-card">
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
        <div class="technology-list">
          <div 
            class="technology-item" 
            v-for="(technology, index) in candidate.technologyList" :key="index"
          > 
            {{ technology }}
          </div>
        </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
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
