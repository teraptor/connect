<template>
  <div>
    <h3>Шаг 1: Введите данные</h3>
    <InputField
      v-model="candidate.form.name"
      label="Имя:"
      type="text"
      id="name"
      placeholder="Введите имя..."
      required
    />
    <InputField
      v-model="candidate.form.lastname"
      label="Фамилия"
      type="text"
      id="lastname"
      placeholder="Введите фамилию..."
      required
    />
    <InputField
      v-model="candidate.form.date_of_birth"
      label="Дата рождения:"
      type="date"
      id="date_of_birth"
      placeholder="Введите дату рождения..."
      required
    />
  </div>
</template>

<script setup lang="ts">
import { useCandidateStore } from '@/stores/useCandidateStore';
import InputField from '../ui/InputField.vue';

const candidate = useCandidateStore();
</script>

