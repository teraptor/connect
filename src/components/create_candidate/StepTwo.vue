<script setup lang="ts">
import { useCandidatesStore } from '@/stores/useCandidatesStore'
import Button from '../ui/Button.vue'
import InputField from '../ui/InputField.vue'
import { isRequired } from '@/helpers/validation'

const candidate = useCandidatesStore()

const addEducation = () => candidate.addEducation()
const removeEducation = (index: number) => candidate.removeEducation(index)

const addCertification = () => candidate.addCertification()
const removeCertification = (index: number) =>
  candidate.removeCertification(index)
</script>
<template>
  <div class="input__container">
    <div
      v-for="(edu, index) in candidate.addCandidateForm.education"
      :key="index"
      class="input__group"
    >
      <h3 class="input__group-title">
        Образование
        <button
          type="button"
          v-if="index !== 0"
          @click="removeEducation(index)"
        >
          <span class="icon icon-bin" />
        </button>
      </h3>
      <InputField
        v-model="edu.institution"
        label="Учреждение образования:"
        type="text"
        placeholder="Введите учреждение..."
        required
        :validators="[isRequired]"
      />
      <InputField
        v-model="edu.degree"
        label="Степень:"
        type="text"
        placeholder="Введите степень..."
        required
        :validators="[isRequired]"
      />
      <InputField
        v-model="edu.date_start"
        label="Дата поступления:"
        type="date"
        placeholder="Введите дату поступления..."
        required
        :validators="[isRequired]"
      />
      <InputField
        v-model="edu.date_end"
        label="Дата окончания:"
        type="date"
        placeholder="Введите дату окончания..."
        required
        :validators="[isRequired]"
      />
    </div>
    <Button
      type="button"
      button-type="primary"
      text="Добавить образование"
      icon="icon icon-plus"
      @click="addEducation"
    />
    <div class="input__group">
      <h3 class="input__group-title">Дипломы и сертификаты</h3>
      <div
        v-for="(cert, index) in candidate.addCandidateForm.certification"
        :key="index"
        class="input__group-inputs"
      >
        <InputField
          v-model="cert.title"
          label="Название диплома:"
          type="text"
          placeholder="Введите название..."
          size="medium"
        />
        <InputField
          v-model="cert.issuer"
          label="Выдавшая организация"
          type="text"
          placeholder="Введите организацию..."
          size="medium"
        />
        <InputField
          v-model="cert.date_issued"
          label="Дата выдачи:"
          type="date"
          id="date_issued"
          placeholder="Введите дату выдачи..."
          size="medium"
        />
        <button type="button" @click="removeCertification(index)">
          <span class="icon icon-bin" />
        </button>
      </div>
      <Button
        type="button"
        button-type="secondary"
        text="Добавить"
        icon="icon icon-plus-circle"
        @click="addCertification"
        size="medium"
      />
    </div>
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
}
</style>
