<script setup lang="ts">
import { ref, computed } from 'vue';
import { useCandidateStore } from '@/stores/useCandidateStore';
import Button from '../ui/Button.vue';
import StepOne from './StepOne.vue';
import StepTwo from './StepTwo.vue';
import StepThree from './StepThree.vue';
import StepFour from './StepFour.vue';
import StepFive from './StepFive.vue';
import StepSix from './StepSix.vue';
import { isRequired } from '@/helpers/validation';

const currentTab = ref(1);
const steps = [StepOne, StepTwo, StepThree, StepFour, StepFive, StepSix];
const stepTitles = [
  'Личные данные',
  'Образование',
  'Навыки',
  'Опыт работы',
  'Условия работы',
  'Главное о специалисте'
];

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

const validation = computed(() => ({
  education: candidate.form.education.map((edu) => ({
    degree: isRequired(edu.degree),
    institution: isRequired(edu.institution),
    date_start: isRequired(edu.date_start),
    date_end: isRequired(edu.date_end),
  })),
  cv_item: candidate.form.cv_item.map((item) => ({
    position_name: isRequired(item.position_name),
    employer: isRequired(item.employer),
    start_period: isRequired(item.start_period),
    end_period: isRequired(item.end_period),
    description: isRequired(item.description)
  })),
  surname: isRequired(candidate.form.surname),
  name: isRequired(candidate.form.name),
  lastname: isRequired(candidate.form.lastname),
  phone: isRequired(candidate.form.phone),
  email: isRequired(candidate.form.email),
  nationality: isRequired(candidate.form.nationality),
  country: isRequired(candidate.form.country),
  date_of_birth: isRequired(candidate.form.date_of_birth),
  sex: isRequired(candidate.form.sex)
}));
console.log(validation)
const isFormValid = computed(() => {
  const isEducationValid = candidate.form.education.every((edu, index) => {
    return Object.values(validation.value.education[index]).every(isValid => !isValid);
  });

  const isCVValid = candidate.form.cv_item.every((item, index) => {
    return Object.values(validation.value.cv_item[index]).every(isValid => !isValid);
  });

  const isOtherFieldsValid = Object.values(validation.value).filter(value => typeof value !== 'object').every(isValid => !isValid)

  return isEducationValid && isCVValid && isOtherFieldsValid
})

</script>

<template>
  <div class="add-candidates">
    <h3 class="add-candidates__title">Профиль специалиста</h3>
    <div class="add-candidates__tabs">
      <div 
        v-for="(title, index) in stepTitles" 
        :key="index" 
        :class="['tab', { 'tab--active': currentTab === index + 1 }]"
        @click="currentTab = index + 1"
      >
        {{ title }}
      </div>
    </div>
    <form class="add-candidates__form" @submit.prevent="submitForm">
      <component :is="steps[currentTab - 1]"></component>
      <div class="add-candidates__form-buttons">
        <Button 
          v-if="currentTab > 1"
          class="btn-secondary" 
          text="Назад"
          @click="prevStep"
          size="small"
        />
        <Button 
          v-if="currentTab < steps.length"
          class="btn-primary" 
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
          :disabled="!isFormValid"
        />
      </div>
    </form>
  </div>
</template>

<style scoped lang="scss">
.add-candidates {
  padding: 20px 30px 0;
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-direction: column;

  &__title {
    font-size: 26px;
    font-weight: 700;
    color: $dark-color;
  }

  &__tabs {
    display: flex;
    justify-content: flex-start;
    gap: 10px;
    width: 100%;

    .tab {
      padding: 8px 16px;
      cursor: pointer;
      font-weight: 400;
      border: 2px solid $border-light;
      background-color: $light-color;
      border-radius: 4px;

      &--active {
        border-color: $main-color;
        color: $main-color;
      }
    }
  }

  &__form {
    width: 100%;

    &-buttons {
      margin-top: 20px;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      gap: 4px;
      position: sticky;
      bottom: 0;
      border-top-left-radius: 20px;
      border-top-right-radius: 20px;
      border: 2px solid $border-light;
      border-bottom: none;
      background-color: $light-color;
      z-index: 10;
      padding: 20px;
    }
  }
}
</style>


