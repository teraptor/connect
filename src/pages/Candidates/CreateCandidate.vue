<script setup lang="ts">
import { ref, computed } from 'vue'
import { useCandidatesStore } from '@/stores/useCandidatesStore'
import Button from '@/components/ui/Button.vue'
import StepOne from '@/components/create_candidate/StepOne.vue'
import StepTwo from '@/components/create_candidate/StepTwo.vue'
import StepThree from '@/components/create_candidate/StepThree.vue'
import StepFour from '@/components/create_candidate/StepFour.vue'
import StepFive from '@/components/create_candidate/StepFive.vue'
import StepSix from '@/components/create_candidate/StepSix.vue'
import { isRequired } from '@/helpers/validation'
import { push } from 'notivue'

const currentTab = ref<number>(1)
const visitedTabs = ref<number[]>([0])
const steps = [StepOne, StepTwo, StepThree, StepFour, StepFive, StepSix]
const stepTitles = [
  'Личные данные',
  'Образование',
  'Навыки',
  'Опыт работы',
  'Условия работы',
  'Главное о специалисте',
]

const candidate = useCandidatesStore()

const nextStep = () => {
  if (currentTab.value < steps.length) currentTab.value++
}

const prevStep = () => {
  if (currentTab.value > 1) currentTab.value--
}

const help = () =>
  push.info('Для отправки формы заполните все обязательные поля!')

const submitForm = async () => {
  await candidate.newCandidate()
  currentTab.value = 1
  visitedTabs.value = [0]
}

const validation = computed(() => ({
  education: candidate.addCandidateForm.education.map(edu => ({
    degree: isRequired(edu.degree),
    institution: isRequired(edu.institution),
    date_start: isRequired(edu.date_start),
    date_end: isRequired(edu.date_end),
  })),
  cv_item: candidate.addCandidateForm.cv_item.map(item => ({
    position_name: isRequired(item.position_name),
    employer: isRequired(item.employer),
    start_period: isRequired(item.start_period),
    end_period: isRequired(item.end_period),
    description: isRequired(item.description),
  })),
  personal: {
    surname: isRequired(candidate.addCandidateForm.surname),
    name: isRequired(candidate.addCandidateForm.name),
    lastname: isRequired(candidate.addCandidateForm.lastname),
    phone: isRequired(candidate.addCandidateForm.phone),
    email: isRequired(candidate.addCandidateForm.email),
    nationality: isRequired(candidate.addCandidateForm.nationality),
    country: isRequired(candidate.addCandidateForm.country),
    date_of_birth: isRequired(candidate.addCandidateForm.date_of_birth),
    sex: isRequired(candidate.addCandidateForm.sex),
  },
}))

const markTabAsVisited = (tabIndex: number) => {
  if (!visitedTabs.value.includes(tabIndex)) {
    visitedTabs.value.push(tabIndex)
  }
}

const showErrorForTab = (index: number) => {
  if (!visitedTabs.value.includes(index) || currentTab.value === index + 1) {
    return false
  }
  return isErrorForTab(index)
}

const isErrorForTab = (tabIndex: number) => {
  switch (tabIndex) {
    case 0:
      return !Object.values(validation.value.personal).every(
        isValid => !isValid,
      )

    case 1:
      return validation.value.education.some(item =>
        Object.values(item).some(isValid => isValid),
      )

    case 3:
      return validation.value.cv_item.some(item =>
        Object.values(item).some(isValid => isValid),
      )

    default:
      return false
  }
}

const isFormValid = computed(() => {
  const isEducationValid = candidate.addCandidateForm.education.every(
    (item, index) => {
      return Object.values(validation.value.education[index]).every(
        isValid => !isValid,
      )
    },
  )

  const isCVValid = candidate.addCandidateForm.cv_item.every((item, index) => {
    return Object.values(validation.value.cv_item[index]).every(
      isValid => !isValid,
    )
  })

  const isPersonalValid = Object.values(validation.value.personal).every(
    isValid => !isValid,
  )

  return isEducationValid && isCVValid && isPersonalValid
})
</script>

<template>
  <div class="add-candidates">
    <h3 class="add-candidates__title">
      Профиль специалиста
      <span class="icon icon-alert-octagon" @click="help" />
    </h3>
    <div class="add-candidates__tabs">
      <div
        v-for="(title, index) in stepTitles"
        :key="index"
        :class="[
          'tab',
          { 'tab--active': currentTab === index + 1 },
          { 'tab--error': showErrorForTab(index) },
        ]"
        @click="
          () => {
            currentTab = index + 1
            markTabAsVisited(index)
          }
        "
      >
        {{ title }}
      </div>
    </div>
    <form class="add-candidates__form" @submit.prevent="submitForm">
      <component :is="steps[currentTab - 1]" />
      <div class="add-candidates__form-buttons">
        <Button
          v-if="currentTab > 1"
          type="button"
          button-type="secondary"
          text="Назад"
          @click="prevStep"
          size="small"
        />
        <Button
          v-if="currentTab < steps.length"
          type="button"
          button-type="primary"
          text="Далее"
          @click="nextStep"
          size="small"
        />
        <Button
          v-if="currentTab === steps.length"
          type="submit"
          text="Отправить"
          button-type="success"
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
    display: flex;
    justify-content: space-between;
    align-items: center;

    .icon {
      cursor: pointer;
      font-size: 26px;

      &:hover {
        color: $main-color;
      }
    }
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

      &--error {
        color: $danger;
        border-color: $danger;
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
