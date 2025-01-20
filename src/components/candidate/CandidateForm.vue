<script setup>
import { ref } from 'vue';
import Button from '../ui/Button.vue';
import { useCandidateStore } from '@/stores/useCandidateStore';
import StepOne from './StepOne.vue';
import StepTwo from './StepTwo.vue';

const currentTab = ref(1);

const steps = [StepOne, StepTwo];

const candidate = useCandidateStore();

const nextStep = () => {
  if (currentTab.value < steps.length) {
    currentTab.value++;
  }
};

const prevStep = () => {
  if (currentTab.value > 1) {
    currentTab.value--;
  }
};

const submitForm = async () => {
  try {
    await candidate.newCandidate();
    currentTab.value = 1;
  } catch (error) {
    console.error('Ошибка отправки:', error);
  }
};
</script>

<template>
  <form @submit.prevent="submitForm">
    <component :is="steps[currentTab - 1]" class="tab"></component>

    <div class="buttons">
      <Button 
        v-if="currentTab > 1"
        class="btn-danger" 
        text="Назад"
        @click="prevStep"
      />
      <Button 
        v-if="currentTab < steps.length"
        class="btn-success" 
        text="Далее"
        @click="nextStep"
      />
      <Button
        v-if="currentTab === steps.length"
        type="submit"
        text="Отправить"
        class="btn-success" 
      />
    </div>
  </form>
</template>


<style scoped>
.demo {
  font-family: sans-serif;
  border: 1px solid #eee;
  border-radius: 2px;
  padding: 20px 30px;
  margin-top: 1em;
  margin-bottom: 40px;
  user-select: none;
  overflow-x: auto;
}

.tab-button {
  padding: 6px 10px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border: 1px solid #ccc;
  cursor: pointer;
  background: #f0f0f0;
  margin-bottom: -1px;
  margin-right: -1px;
}
.tab-button:hover {
  background: #e0e0e0;
}

.buttons {
  margin-top: 20px;
}
</style>


