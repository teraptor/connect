<template>
  <div>
    <h3>Шаг 2: Введите образование</h3>
    <div v-for="(edu, index) in candidate.form.education" :key="index">
      <fieldset>
        <InputField
          v-model="edu.institution"
          label="Учреждение образования:"
          type="text"
          placeholder="Введите учреждение..."
          required
        />
        <InputField
          v-model="edu.degree"
          label="Степень:"
          type="text"
          placeholder="Введите степень..."
          required
        />
        <InputField
          v-model="edu.date_start"
          label="Дата поступления:"
          type="date"
          placeholder="Введите дату поступления..."
          required
        />
        <InputField
          v-model="edu.date_end"
          label="Дата окончания:"
          type="date"
          placeholder="Введите дату окончания..."
          required
        />
        <Button 
          type="button"
          class="btn-danger" 
          text="Удалить"
          @click="removeEducation(index)"
        />
      </fieldset>
    </div>
    <Button 
      type="button"
      class="btn-secondary" 
      text="Добавить образование"
      @click="addEducation"
    />
  </div>
</template>

<script setup lang="ts">
import { useCandidateStore } from '@/stores/useCandidateStore';
import Button from '../ui/Button.vue';
import InputField from '../ui/InputField.vue';

const candidate = useCandidateStore();

const addEducation = () => {
  candidate.addEducation();
};

const removeEducation = (index: number) => {
  candidate.removeEducation(index);
};
</script>
