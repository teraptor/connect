
<script setup lang="ts">
import { useCandidateStore } from '@/stores/useCandidateStore';
import Button from '../ui/Button.vue';
import InputField from '../ui/InputField.vue';

const candidate = useCandidateStore();

const addEducation = () => candidate.addEducation();
const removeEducation = (index: number) => candidate.removeEducation(index);
</script>
<template>
  <div>
    <h3 class="add-candidates__form-title">Шаг 2: Образование</h3>
    <div v-for="(edu, index) in candidate.form.education" :key="index">
      <fieldset class="add-candidates__form-group">
        <div class="input__group">
          <InputField
            v-model="edu.institution"
            label="Учреждение образования:"
            type="text"
            placeholder="Введите учреждение..."
            required
            size='medium'
          />
          <InputField
            v-model="edu.degree"
            label="Степень:"
            type="text"
            placeholder="Введите степень..."
            required
            size='medium'
          />
          <InputField
            v-model="edu.date_start"
            label="Дата поступления:"
            type="date"
            placeholder="Введите дату поступления..."
            required
            size='medium'
          />
          <InputField
            v-model="edu.date_end"
            label="Дата окончания:"
            type="date"
            placeholder="Введите дату окончания..."
            required
            size='medium'
          />
          <div class="input__group-btn">
            <Button 
            v-if="index !== 0"
            type="button"
            class="btn-danger" 
            text="Удалить"
            @click="removeEducation(index)"
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
      @click="addEducation"
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

