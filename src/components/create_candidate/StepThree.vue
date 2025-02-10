<script setup lang="ts">
import { useCandidatesStore } from '@/stores/useCandidatesStore'
import Button from '../ui/Button.vue'
import SelectField from '../ui/SelectField.vue'
import { LanguageLevelEnum, LanguagesEnum } from '@/enums/enums'
import { ref, computed } from 'vue'

const candidate = useCandidatesStore()

const languagesInput = ref<string>('')
const languageLevel = ref<string>('')

const addLanguage = () => {
  candidate.addLanguage(languagesInput.value, languageLevel.value)

  languagesInput.value = ''
  languageLevel.value = ''
}

const isFilledLanguage = computed(() => {
  return languagesInput.value.trim() !== '' && languageLevel.value.trim() !== ''
})

const removeLanguage = (index: number) => {
  candidate.removeLanguage(index)
}
</script>

<template>
  <div class="input__container">
    <div class="input__group">
      <h3 class="input__group-title">Языки</h3>
      <div class="input__group-inputs">
        <SelectField
          v-model="languagesInput"
          label="Введите язык"
          id="languageLevel"
          :enumObject="LanguagesEnum"
          placeholder="Выберите язык"
          size="medium"
          :enableSearch="true"
        />
        <SelectField
          id="newLanguageLevel"
          v-model="languageLevel"
          label="Уровень владения"
          :enumObject="LanguageLevelEnum"
          placeholder="Выберите уровень"
          size="medium"
        />
        <Button
          type="button"
          button-type="secondary"
          text="Добавить"
          icon="icon icon-plus-circle"
          @click="addLanguage"
          size="medium"
          :disabled="!isFilledLanguage"
        />
      </div>
      <div class="input__group-language-items">
        <div
          v-for="(lang, index) in candidate.addCandidateForm.language"
          :key="index"
          class="input__group-language-item"
        >
          <button type="button" @click="removeLanguage(index)">
            <span class="icon icon-x" />
          </button>
          <div>{{ lang.name }}</div>
          <div>{{ lang.level }}</div>
        </div>
      </div>
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
  &-language-items {
    display: flex;
    justify-content: flex-start;
    gap: 8px;
  }

  &-language-item {
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

    div:nth-of-type(1) {
      text-transform: uppercase;
      padding-top: 4px;
    }

    div:last-child {
      font-size: 12px;
      font-weight: 300;
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
