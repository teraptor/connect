<script setup lang="ts">
import { useCandidateStore } from '@/stores/useCandidateStore';
import Button from '../ui/Button.vue';
import InputField from '../ui/InputField.vue';
import SelectField from '../ui/SelectField.vue';
import { LanguageLevelEnum } from '@/enums/enums';

const candidate = useCandidateStore();
const addLanguage = () => candidate.addLanguage();
const removeLanguage = (index: number) => candidate.removeLanguage(index);

</script>

<template>
  <div class="input__container">
    <div class="input__group">
      <h3 class="input__group-title">Язык</h3>
      <div v-for="(lang, index) in candidate.form.language" :key="index" class="input__group-inputs">
        <InputField
          v-model="lang.name"
          label="Язык:"
          type="text"
          placeholder="Введите язык..."
          required
          size="medium"
        />
        <SelectField
          id="lang.level"
          v-model="lang.level"
          label="Уровень владения:"
          :enumObject="LanguageLevelEnum"
          placeholder="Уровень владения"
          size="medium"
        />
        <button  
          type="button"           
          @click="removeLanguage(index)"
        >
          <span class="icon icon-bin"/>
        </button>
      </div>
      <Button
      type="button"
      class="btn-secondary"
      text="Добавить"
      icon="icon icon-plus-circle"
      @click="addLanguage"
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
