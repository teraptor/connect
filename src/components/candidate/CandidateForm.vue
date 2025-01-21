<script setup>
import { ref } from 'vue';
import Button from '../ui/Button.vue';
import { useCandidateStore } from '@/stores/useCandidateStore';
import StepOne from './StepOne.vue';
import StepTwo from './StepTwo.vue';
import StepThree from './StepThree.vue';
import StepFour from './StepFour.vue';
import StepFive from './StepFive.vue';
import StepSix from './StepSix.vue';

const currentTab = ref(1);

const steps = [StepOne, StepTwo, StepThree, StepFour, StepFive, StepSix];

const candidate = useCandidateStore();

const nextStep = () => {
  if (currentTab.value < steps.length) currentTab.value++;
};

const prevStep = () => {
  if (currentTab.value > 1) currentTab.value--;
};

const submitForm = async () => {
    await candidate.newCandidate();
    currentTab.value = 1;
};
</script>

<template>
  <div class="add-candidates">
    <h3 class="add-candidates__title">Создание кандидата</h3>
    <p class="add-candidates__subtitle">Шаг {{ currentTab }} из {{ steps.length }}</p>
    <form class="add-candidates__form" @submit.prevent="submitForm">
      <component :is="steps[currentTab - 1]"></component>
      <div class="add-candidates__form-buttons">
        <Button 
          v-if="currentTab > 1"
          class="btn-danger" 
          text="Назад"
          @click="prevStep"
          size="small"
        />
        <Button 
          v-if="currentTab < steps.length"
          class="btn-success" 
          text="Далее"
          @click="nextStep"
          size="small"
        />
        <Button
          v-if="currentTab === steps.length"
          type="submit"
          text="Отправить"
          class="btn-success" 
          size="small"
        />
      </div>
    </form>
  </div>
</template>


<style scoped lang="scss">
.add-candidates {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  flex-direction: column;

  &__title {
    font-size: 20px;
    font-weight: 600;
    color: $dark-color;
  }

  &__subtitle {
    font-size: 16px;
    font-weight: 300;
    color: $text-help;
  }

  &__form {
    width: 80%;

    &-buttons {
      margin-top: 20px;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      gap: 4px;
    }
  }
}
</style>


