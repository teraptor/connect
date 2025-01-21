<template>
  <div>
    <h3 class="add-candidates__form-title">Шаг 1: Введите данные</h3>
    <div class="input__group">
      <InputField
        v-model="candidate.form.name"
        label="Имя:"
        type="text"
        id="name"
        placeholder="Введите имя..."
        required
        size='medium'
      />
      <InputField
        v-model="candidate.form.lastname"
        label="Фамилия"
        type="text"
        id="lastname"
        placeholder="Введите фамилию..."
        required
        size='medium'
      />
      <InputField
        v-model="candidate.form.date_of_birth"
        label="Дата рождения:"
        type="date"
        id="date_of_birth"
        placeholder="Введите дату рождения..."
        required
        size='medium'
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCandidateStore } from '@/stores/useCandidateStore';
import InputField from '../ui/InputField.vue';

const candidate = useCandidateStore();
</script>
<style lang="scss" scoped>

.add-candidates__form-title {
  font-size: 18px;
  font-weight: 400;
  margin-bottom: 10px;
}

.input__group {
  display: flex;
  align-items: center;
  gap: 8px;
}
</style>

