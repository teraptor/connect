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
  <div>
    <h3 class="add-candidates__form-title">Шаг 3: Языки</h3>
    <div v-for="(lang, index) in candidate.form.language" :key="index">
      <fieldset class="add-candidates__form-group">
        <div class="input__group">
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
          <div class="input__group-btn">
            <Button
              v-if="index !== 0"
              type="button"
              class="btn-danger"
              text="Удалить"
              @click="removeLanguage(index)"
              size="small"
            />
          </div>
        </div>
      </fieldset>
    </div>
    <Button
      type="button"
      class="btn-secondary"
      text="Добавить"
      icon="icon icon-plus"
      @click="addLanguage"
      size="medium"
    />
  </div>
</template>

<style lang="scss" scoped>
.add-candidates__form-title {
  font-size: 18px;
  font-weight: 400;
  margin-bottom: 10px;
}

.input__group {
  display: flex;
  gap: 8px;

  &-btn {
    display: flex;
    align-items: flex-end;
  }
}

.add-candidates__form-group {
  margin: 10px 0;
}
</style>
