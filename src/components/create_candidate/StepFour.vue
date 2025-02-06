<script setup lang="ts">
import { useCandidatesStore } from '@/stores/useCandidatesStore'
import Button from '../ui/Button.vue'
import InputField from '../ui/InputField.vue'
import { isRequired } from '@/helpers/validation'

const technologyInput = ref<string>('')

const candidate = useCandidatesStore()
const addCVItem = () => candidate.addCVItem()
const removeCVItem = (index: number) => candidate.removeCVItem(index)
const addTechnologyToCV = (index: number) => {
  candidate.addTechnologyToCV(index, technologyInput.value)
  technologyInput.value = ''
}
const removeTechnologyFromCV = (cvIndex: number, techIndex: number) => candidate.removeTechnologyFromCV(cvIndex, techIndex)
const isFilledTechology = computed(() => {
  return technologyInput.value.trim() !== ''
})
</script>

<template>
  <div
    v-for="(cvItem, index) in candidate.addCandidateForm.cv_item"
    :key="index"
    class="input__container"
  >
    <div class="input__group">
      <h3 class="input__group-title">
        Место работы
        <button type="button" v-if="index !== 0" @click="removeCVItem(index)">
          <span class="icon icon-bin" />
        </button>
      </h3>
      <InputField
        v-model="cvItem.position_name"
        label="Должность"
        type="text"
        placeholder="Введите должность..."
        required
        :validators="[isRequired]"
      />
      <InputField
        v-model="cvItem.employer"
        label="Работодатель"
        type="text"
        placeholder="Введите работодателя..."
        required
        :validators="[isRequired]"
      />
      <InputField
        v-model="cvItem.start_period"
        label="Период начала"
        type="date"
        placeholder="Введите период начала..."
        required
        :validators="[isRequired]"
      />
      <InputField
        v-model="cvItem.end_period"
        label="Период окончания"
        type="date"
        placeholder="Введите период окончания..."
        required
        :validators="[isRequired]"
      />
      <InputField
        v-model="cvItem.description"
        label="Описание"
        type="text"
        placeholder="Введите описание..."
        required
        :validators="[isRequired]"
      />
    </div>
    <div class="input__group">
      <h3 class="input__group-title">Технологии</h3>
      <div class="input__group-inputs">
        <InputField
          v-model="technologyInput"
          label="Технология"
          type="text"
          placeholder="Введите технологию..."
          size="medium"
        />
        <Button
          type="button"
          button-type="secondary"
          text="Добавить"
          icon="icon icon-plus-circle"
          @click="addTechnologyToCV(index)"
          size="medium"
          :disabled="!isFilledTechology"
        />
      </div>
      <div class="input__group-tech-items">
      <div
        v-for="(tech, techIndex) in cvItem.cv_technology"
        :key="techIndex"
        class="input__group-tech-item"
      >
        <button
          type="button"
          @click="removeTechnologyFromCV(index, techIndex)"
        >
          <span class="icon icon-bin" />
        </button>
        <div>{{ tech.name }}</div>
      </div>
      </div>
    </div>
    <Button
      type="button"
      button-type="primary"
      text="Добавить место работы"
      icon="icon icon-plus"
      @click="addCVItem"
    />
  </div>
</template>

<style lang="scss" scoped>
.input__container {
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 70%;
}

.input__group {
  width: 100%;
  display: flex;
  flex-direction: column;
  border: 2px solid $border-light;
  padding: 24px;
  background-color: $light-color;
  border-radius: 30px;
  gap: 8px;
  margin: 8px 0;

  &-title {
    font-weight: 700;
    color: $dark-color;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .icon {
      cursor: pointer;
      color: $icon-gray;

      &:hover {
        color: $main-color;
      }
    }
  }

  &-inputs {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
    gap: 12px;

    .icon-bin {
      cursor: pointer;
      font-size: 28px;
      color: $icon-gray;

      &:hover {
        color: $main-color;
      }
    }
  }
  &-tech-items {
    display: flex;
    justify-content: flex-start;
    gap: 8px;
  }

  &-tech-item {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
    border: 1px solid $main-color;
    color: $main-color;
    padding: 8px 10px;
    font-weight: 500;
    font-size: 14px;
    border-radius: 8px;
    position: relative;

    div {
      text-transform: uppercase;
      padding-top: 8px;
    }

    .icon {
      position: absolute;
      top: 5%;
      right: 1%;
      font-size: 12px;
    }
  }
}
</style>
