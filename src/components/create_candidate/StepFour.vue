<script setup lang="ts">
import { useCandidatesStore } from '@/stores/useCandidatesStore';
import Button from '../ui/Button.vue';
import InputField from '../ui/InputField.vue';
import { isRequired } from '@/helpers/validation';

const candidate = useCandidatesStore();
const addCVItem = () => candidate.addCVItem();
const removeCVItem = (index: number) => candidate.removeCVItem(index);
const addTechnologyToCV = (index: number) => candidate.addTechnologyToCV(index);
const removeTechnologyFromCV = (cvIndex: number, techIndex: number) => candidate.removeTechnologyFromCV(cvIndex, techIndex);
</script>

<template>
  <div v-for="(cvItem, index) in candidate.addCandidateForm.cv_item" :key="index" class="input__container">
    <div class="input__group">
      <h3 class="input__group-title">
        Место работы
        <button  
          type="button"           
          v-if="index !== 0"
          @click="removeCVItem(index)"
        >
          <span class="icon icon-bin"/>
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
      <div v-for="(tech, techIndex) in cvItem.cv_technology" :key="techIndex" class="input__group-inputs">
        <InputField
          v-model="tech.name"
          label="Технология"
          type="text"
          placeholder="Введите технологию..."
          size="medium"
        />
        <button  
          v-if="techIndex !== 0"
          type="button"           
          @click="removeTechnologyFromCV(index, techIndex)"
        >
          <span class="icon icon-bin"/>
        </button>
      </div>
      <Button
        type="button"
        class="btn-secondary"
        text="Добавить"
        icon="icon icon-plus-circle"
        @click="addTechnologyToCV(index)"
        size="medium"
      />
    </div>
    <Button 
      type="button"
      class="btn-primary" 
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
      };
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
    };
  };
  }
}
</style>